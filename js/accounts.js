/* ===================================================================
   ACCOUNTS — simple class logins (first name + 4-digit PIN)
   Needs the Firebase URL in js/config.js (or runs on this device only for testing).

   Database layout (under classes/{classId}/):
     accounts/{sid}     = { name, pin:<hash>, created }          ← what the sign-in screen reads
     studentData/{sid}  = { cards[], settings{}, seenIntro, voice, progress{ lessonId:{…} }, seen }

   How it works on a shared device:
     • Signing in copies the student's saved data into this browser, then reloads.
     • Everything they do is saved back to the database a moment after each change.
     • Signing out wipes the student's data from the browser so the next student starts clean.
   Security note: this is a classroom-grade login (see the Teacher → Student accounts page).
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, h=RR.h, CFG=window.RR_CONFIG||{}; const Store=RR.Store, cid=()=>CFG.classId||"class1";
const A = RR.Accounts = {};
const P = p=>`classes/${cid()}/${p}`;

/* which localStorage keys belong to a student (everything else is device/teacher state) */
const isStudentKey=k=>/^rr:(cards|settings|seenIntro|voice|p:.+)$/.test(k);
function localKeys(){ try{ return Object.keys(localStorage).filter(isStudentKey); }catch(e){ return []; } }
function wipeLocal(){ localKeys().forEach(k=>{ try{ localStorage.removeItem(k); }catch(e){} }); }
function snapshot(){
  const d={progress:{}};
  localKeys().forEach(k=>{
    const raw=localStorage.getItem(k); const n=k.slice(3);
    if(n==="voice"){ d.voice=raw; return; }
    let v; try{ v=JSON.parse(raw); }catch(e){ return; }
    if(n==="cards") d.cards=v; else if(n==="settings") d.settings=v; else if(n==="seenIntro") d.seenIntro=v;
    else if(n.startsWith("p:")) d.progress[n.slice(2)]=v;
  });
  return d;
}
function applyData(d){
  d=d||{};
  if(d.cards) RR.ls.set("cards",Array.isArray(d.cards)?d.cards:Object.values(d.cards));
  if(d.settings) RR.ls.set("settings",d.settings);
  if(d.seenIntro) RR.ls.set("seenIntro",true);
  if(d.voice){ try{ localStorage.setItem("rr:voice",d.voice); }catch(e){} }
  Object.entries(d.progress||{}).forEach(([id,v])=>RR.ls.set("p:"+id,v));
}

/* ---------- session (this tab only; closes with the browser) ---------- */
A.current=()=>RR.ss.get("acct",null);
A.isGuest=()=>!!RR.ss.get("guest",false);
A.enabled=()=>Store.configured||!!RR.ls.get("accountsTest",false);
A.needLogin=()=>A.enabled()&&!A.current()&&!A.isGuest();

/* ---------- PIN hashing ---------- */
async function hashPin(sid,pin){ const hh=await RR.pin.hashes(cid()+":"+sid+":"+String(pin).trim()); return hh.sha||hh.lite; }
async function pinOk(sid,pin,stored){ const hh=await RR.pin.hashes(cid()+":"+sid+":"+String(pin).trim()); return stored===hh.sha||stored===hh.lite; }
const randPin=()=>String(Math.floor(1000+Math.random()*9000));
const tidy=s=>String(s||"").replace(/[^\p{L}\p{N} '’-]/gu,"").trim().slice(0,20);

/* ---------- teacher-side management ---------- */
A.list=async()=>{ const a=(await Store.get(P("accounts")))||{}; return Object.entries(a).map(([sid,v])=>({sid,...v})).sort((x,y)=>(x.name||"").localeCompare(y.name||"")); };
A.data=async()=>(await Store.get(P("studentData")))||{};
A.create=async(name,pin)=>{
  name=tidy(name); if(!name) return null;
  const sid=(RR.slug(name)||"student").slice(0,14)+"-"+Math.random().toString(36).slice(2,5);
  pin=pin||randPin(); await Store.set(P("accounts/"+sid),{name,pin:await hashPin(sid,pin),created:Date.now()});
  return {sid,name,pin};
};
A.rename=async(sid,name)=>{ name=tidy(name); if(name) await Store.update(P("accounts/"+sid),{name}); return name; };
A.setPin=async(sid,pin)=>{ pin=pin||randPin(); await Store.update(P("accounts/"+sid),{pin:await hashPin(sid,pin)}); return pin; };
A.remove=async sid=>{ await Store.remove(P("accounts/"+sid)); await Store.remove(P("studentData/"+sid)); };

/* ---------- sign in / out ---------- */
A.signIn=async(sid,pin)=>{
  const acc=await Store.get(P("accounts/"+sid)); if(!acc) return {ok:false,why:"gone"};
  if(!(await pinOk(sid,pin,acc.pin))) return {ok:false,why:"pin"};
  const data=await Store.get(P("studentData/"+sid));
  wipeLocal(); applyData(data); RR.ss.set("acct",{sid,name:acc.name}); RR.ss.set("guest",false);
  return {ok:true,name:acc.name};
};
A.guest=()=>{ RR.ss.set("guest",true); };
A.signOut=async()=>{ try{ await flushNow(); }catch(e){} wipeLocal(); RR.ss.set("acct",null); RR.ss.set("guest",false); };

/* ---------- saving (debounced) ---------- */
let timer=null, dirty=false;
async function flushNow(){ const me=A.current(); clearTimeout(timer); timer=null; if(!me||!dirty) return; dirty=false; const s=snapshot(); s.seen=Date.now(); try{ await Store.set(P("studentData/"+me.sid),s); }catch(e){ dirty=true; } }
A.touch=()=>{ if(!A.current()) return; dirty=true; clearTimeout(timer); timer=setTimeout(flushNow,1500); };
const _set=RR.ls.set; RR.ls.set=function(k,v){ const r=_set.apply(RR.ls,arguments); if(isStudentKey("rr:"+k)) A.touch(); return r; };
if(RR.setVoice){ const _sv=RR.setVoice; RR.setVoice=function(){ const r=_sv.apply(this,arguments); A.touch(); return r; }; }
document.addEventListener("visibilitychange",()=>{ if(document.hidden) flushNow(); });
window.addEventListener("pagehide",()=>{ flushNow(); });

/* ---------- student-facing UI ---------- */
A.chip=function(){
  const me=A.current();
  if(me) return h("button",{class:"tb-btn acct-chip",type:"button",title:"Sign out",onclick:async()=>{ await A.signOut(); location.hash="#/"; location.reload(); }},h("span",{},"👤 "+me.name),h("small",{},"Sign out"));
  if(A.isGuest()) return h("button",{class:"tb-btn acct-chip",type:"button",title:"Sign in",onclick:()=>{ RR.ss.set("guest",false); location.reload(); }},h("span",{},"Guest"),h("small",{},"Sign in"));
  return null;
};

A.showLogin=async function(root){
  root.innerHTML="";
  const wrap=h("section",{class:"login-view"}); root.append(wrap);
  const head=(t,s)=>[h("h1",{class:"gold-text"},t),s&&h("p",{class:"lead"},s)];
  wrap.append(...head("Who is travelling the Royal Road?","Loading the caravan…"));
  let list=[]; try{ list=await A.list(); }catch(e){ wrap.innerHTML=""; wrap.append(...head("Can’t reach the caravan","Check the internet connection, then try again."),h("button",{class:"btn",type:"button",onclick:()=>location.reload()},"Try again"),h("p",{},h("button",{class:"btn ghost",type:"button",onclick:()=>{ A.guest(); location.reload(); }},"Play as a guest (nothing is saved)"))); return; }
  names();
  function names(){
    wrap.innerHTML=""; wrap.append(...head("Who is travelling the Royal Road?",list.length?"Tap your name.":"No travellers have been added yet. Ask your teacher to add you."));
    const grid=h("div",{class:"login-grid"},list.map(s=>h("button",{class:"login-name",type:"button",onclick:()=>pin(s)},s.name)));
    wrap.append(grid,h("p",{class:"login-foot"},h("button",{class:"btn ghost small",type:"button",onclick:()=>{ A.guest(); location.reload(); }},"Play as a guest (nothing is saved)"),h("a",{class:"btn ghost small",href:"teacher.html"},"Teacher")));
  }
  function pin(s){
    let val=""; wrap.innerHTML="";
    const dots=h("div",{class:"pin-dots","aria-live":"polite"}); const msg=h("p",{class:"pin-msg",role:"status"});
    const draw=()=>{ dots.innerHTML=""; for(let i=0;i<4;i++) dots.append(h("i",{class:i<val.length?"on":""})); };
    async function press(d){
      if(busy()) { msg.textContent="Wait a moment, then try again."; return; }
      if(d==="⌫"){ val=val.slice(0,-1); draw(); return; } if(val.length>=4) return; val+=d; draw();
      if(val.length===4){ msg.textContent="Checking…"; const r=await A.signIn(s.sid,val); if(r.ok){ location.hash="#/"; location.reload(); return; }
        fail(); val=""; draw(); dots.classList.remove("shake"); void dots.offsetWidth; dots.classList.add("shake"); msg.textContent=r.why==="gone"?"That name has been removed. Go back and pick again.":"That PIN isn’t right. Try again, or ask your teacher to reset it."; }
    }
    const pad=h("div",{class:"pin-pad"},["1","2","3","4","5","6","7","8","9","","0","⌫"].map(d=>d===""?h("span",{}):h("button",{class:"pin-key",type:"button","aria-label":d==="⌫"?"Delete":d,onclick:()=>press(d)},d)));
    wrap.append(...head("Hi, "+s.name+"!","Enter your 4-number PIN."),dots,msg,pad,h("p",{class:"login-foot"},h("button",{class:"btn ghost small",type:"button",onclick:names},"← That’s not me")));
    draw();
    document.addEventListener("keydown",function k(e){ if(!wrap.isConnected){ document.removeEventListener("keydown",k); return; } if(/^[0-9]$/.test(e.key)) press(e.key); else if(e.key==="Backspace") press("⌫"); });
  }
  /* 5 wrong tries → 30 second pause (stops quick guessing) */
  function fail(){ const f=RR.ss.get("pinFails",{n:0,until:0}); f.n++; if(f.n>=5){ f.until=Date.now()+30000; f.n=0; } RR.ss.set("pinFails",f); }
  function busy(){ const f=RR.ss.get("pinFails",{n:0,until:0}); return Date.now()<f.until; }
};
})();
