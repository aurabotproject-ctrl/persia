/* ===================================================================
   STORE — one tiny interface for shared state:
     get · set · update · remove · push · watch · syncClock · now
   Backends:  "firebase" (Realtime Database REST, no SDK needed)
              "local"    (localStorage tree — works between tabs on ONE device;
                          used for Practice mode and when no firebaseUrl is set)
   All Showdown / class code talks only to RR.Store, so the backend is swappable.
   =================================================================== */
(function(){
"use strict";
const RR=window.RR; const CFG=window.RR_CONFIG||{};
const SV={".sv":"timestamp"};
const base=(CFG.firebaseUrl||"").replace(/\/+$/,"");
let forceLocal=false;
try{ forceLocal = new URLSearchParams(location.search).get("practice")==="1" || RR.ss.get("practice",false); }catch(e){}

const Store = RR.Store = {
  ts:SV, offset:0, online:true,
  get mode(){ return (base && !forceLocal) ? "firebase":"local"; },
  get configured(){ return !!base; },
  setPractice(on){ forceLocal=!!on; RR.ss.set("practice",!!on); },
  now(){ return Date.now()+this.offset; }
};

/* ---------- path helpers ---------- */
const clean = p=>String(p).replace(/^\/+|\/+$/g,"");
function resolveSV(v){
  if(v && typeof v==="object"){
    if(v[".sv"]==="timestamp") return Date.now();
    if(Array.isArray(v)) return v.map(resolveSV);
    const o={}; for(const k in v) o[k]=resolveSV(v[k]); return o;
  }
  return v;
}

/* ---------- LOCAL backend (localStorage tree) ---------- */
const LKEY="rr:tree";
function ltree(){ try{ return JSON.parse(localStorage.getItem(LKEY)||"{}"); }catch(e){ return {}; } }
function lsave(t){ try{ localStorage.setItem(LKEY,JSON.stringify(t)); }catch(e){} }
function lget(path){ let n=ltree(); const parts=clean(path).split("/").filter(Boolean); for(const p of parts){ if(n==null||typeof n!=="object") return null; n=n[p]; } return n===undefined?null:n; }
function lset(path,val,merge){
  const t=ltree(); const parts=clean(path).split("/").filter(Boolean);
  if(!parts.length){ lsave(merge?Object.assign(t,resolveSV(val)):resolveSV(val)||{}); return; }
  let n=t; for(let i=0;i<parts.length-1;i++){ if(typeof n[parts[i]]!=="object"||n[parts[i]]===null) n[parts[i]]={}; n=n[parts[i]]; }
  const last=parts[parts.length-1], v=resolveSV(val);
  if(v===null) delete n[last];
  else if(merge && typeof n[last]==="object" && n[last]!==null && typeof v==="object") { for(const k in v){ if(v[k]===null) delete n[last][k]; else n[last][k]=v[k]; } }
  else n[last]=v;
  lsave(t);
}

/* ---------- FIREBASE backend (REST) ---------- */
async function rest(method,path,body,q=""){
  const url=`${base}/${clean(path)}.json${q}`;
  const opt={method,headers:{}};
  if(body!==undefined){ opt.body=JSON.stringify(body); opt.headers["Content-Type"]="application/json"; }
  for(let attempt=0;attempt<3;attempt++){
    try{
      const r=await fetch(url,opt); if(!r.ok) throw new Error("HTTP "+r.status);
      Store.online=true; const txt=await r.text(); return txt?JSON.parse(txt):null;
    }catch(e){ Store.online=false; if(attempt===2) throw e; await RR.sleep(300*(attempt+1)); }
  }
}

/* ---------- public API ---------- */
Store.get = async function(path){ return Store.mode==="firebase" ? rest("GET",path) : lget(path); };
Store.set = async function(path,val){ if(Store.mode==="firebase") return rest("PUT",path,val); lset(path,val,false); return lget(path); };
Store.update = async function(path,obj){ if(Store.mode==="firebase") return rest("PATCH",path,obj); lset(path,obj,true); return lget(path); };
Store.remove = async function(path){ if(Store.mode==="firebase") return rest("DELETE",path); lset(path,null,false); return null; };
Store.push = async function(path,val){
  if(Store.mode==="firebase"){ const r=await rest("POST",path,val); return r&&r.name; }
  const id=Date.now().toString(36)+Math.random().toString(36).slice(2,6); lset(clean(path)+"/"+id,val,false); return id;
};
/* poll a path and call cb(value) whenever it changes; returns unsubscribe() */
Store.watch = function(path,cb,{ms}={}){
  const every = ms || (Store.mode==="firebase" ? 800 : 250); let last, stopped=false, busy=false;
  async function tick(){
    if(stopped||busy||document.hidden) return; busy=true;
    try{ const v=await Store.get(path); const s=JSON.stringify(v); if(s!==last){ last=s; cb(v); } }catch(e){} finally{ busy=false; }
  }
  const id=setInterval(tick,every); tick();
  return ()=>{ stopped=true; clearInterval(id); };
};
/* measure server clock offset so timers feel fair on every device */
Store.syncClock = async function(){
  if(Store.mode!=="firebase"){ Store.offset=0; return 0; }
  try{
    const t0=Date.now(); const r=await rest("PUT","_clock/"+RR.slug(navigator.userAgent).slice(0,20)+Math.random().toString(36).slice(2,6),SV);
    const t1=Date.now(); if(typeof r==="number"){ Store.offset=r-(t0+t1)/2; }
  }catch(e){}
  return Store.offset;
};

/* ===================================================================
   CLASS helpers (roster, Darics, season totals)
   classes/{classId}/{config,darics,log,season,results}
   =================================================================== */
const cid = ()=>CFG.classId||"class1";
const C = RR.Class = {
  path:(p="")=>`classes/${cid()}${p?"/"+p:""}`,
  async config(){ const c=await Store.get(C.path("config")); return Object.assign({teamCount:6,roster:{},weeksLocked:{}},c||{}); },
  async saveConfig(patch){ return Store.update(C.path("config"),patch); },
  async roster(){ return (await Store.get(C.path("config/roster")))||{}; },
  async setRoster(map){ return Store.set(C.path("config/roster"),map); },
  /* Darics: {teams:{id:n}, players:{pid:n}} and a log */
  async darics(){ const d=await Store.get(C.path("darics")); return Object.assign({teams:{},players:{}},d||{}); },
  async award(kind,id,amount,reason=""){ // kind: "teams"|"players"
    const cur=(await Store.get(C.path(`darics/${kind}/${id}`)))||0;
    await Store.set(C.path(`darics/${kind}/${id}`),cur+amount);
    const logId=await Store.push(C.path("log"),{kind,id,amount,reason,at:Store.mode==="firebase"?SV:Date.now()});
    return {logId,total:cur+amount};
  },
  async undo(entry){ // entry:{kind,id,amount,logId}
    const cur=(await Store.get(C.path(`darics/${entry.kind}/${entry.id}`)))||0;
    await Store.set(C.path(`darics/${entry.kind}/${entry.id}`),cur-entry.amount);
    if(entry.logId) await Store.remove(C.path(`log/${entry.logId}`));
  },
  async log(){ const l=await Store.get(C.path("log")); return l?Object.entries(l).map(([k,v])=>({id:k,...v})).sort((a,b)=>(b.at||0)-(a.at||0)):[]; },
  /* results of each Showdown, written by the host at the podium */
  async results(){ return (await Store.get(C.path("results")))||{}; },
  async saveResult(week,res){ return Store.set(C.path(`results/w${week}`),res); },
  async clearAll(){ await Store.remove(C.path()); }
};

/* ---------- teacher PIN ---------- */
async function sha256(s){ if(window.crypto&&crypto.subtle){ const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s)); return Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,"0")).join(""); } return null; }
function djb(s){ let h=5381; for(let i=0;i<s.length;i++) h=((h<<5)+h+s.charCodeAt(i))>>>0; return "d"+h.toString(16); }
RR.pin = {
  hashes: async s=>({sha:await sha256(s), lite:djb(s)}),
  async check(pin){
    const h=await RR.pin.hashes(String(pin).trim());
    const local=RR.ls.get("pinHashes",null);
    const want=local||{sha:CFG.teacherPinHash,lite:CFG.teacherPinHashLite};
    const ok=(h.sha&&want.sha&&h.sha===want.sha)||(!h.sha&&h.lite===want.lite)||(h.lite===want.lite&&!want.sha);
    if(ok) RR.ss.set("teacherOK",true);
    return ok;
  },
  isTeacher:()=>!!RR.ss.get("teacherOK",false),
  async change(pin){ const h=await RR.pin.hashes(pin); RR.ls.set("pinHashes",h); return h; },
  logout(){ RR.ss.set("teacherOK",false); }
};
})();
