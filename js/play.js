/* ===================================================================
   PLAYER (phone / tablet / Chromebook)  — play.html
   ?pin=123456  → live game        ?practice=1 → solo practice on this device
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, h=RR.h, SD=RR.SD, Store=RR.Store;
const root=RR.$("#play"), statusEl=RR.$("#pStatus");
const params=new URLSearchParams(location.search);
let pin=(params.get("pin")||"").replace(/\D/g,"").slice(0,6);
let WEEK=RR.activeWeek(); RR.setBackdrop&&RR.setBackdrop(WEEK);
let unsubs=[]; const stop=()=>{ unsubs.forEach(f=>f()); unsubs=[]; };
let tickTimer=null; const clearTick=()=>{ if(tickTimer){ cancelAnimationFrame(tickTimer); tickTimer=null; } };
try{ RR.applySettings(); }catch(e){}
const fx=RR.particles&&RR.particles(RR.$("#bgfx"),"stars",{maxY:1});

const screen=(cls,...kids)=>{ clearTick(); root.innerHTML=""; const s=h("section",{class:"scr "+cls},...kids); root.append(s); if(/\bwait\b/.test(cls)) RR.restCamel(s,"rest-camel"); return s; };
const setStatus=t=>{ statusEl.textContent=t||""; };
const ordinal=n=>{ const s=["th","st","nd","rd"],v=n%100; return n+(s[(v-20)%10]||s[v]||s[0]); };

/* ---------- connection badge ---------- */
function modeBadge(){ return Store.mode==="firebase"?"":"practice mode"; }

/* ===================================================================
   JOIN
   =================================================================== */
function viewPin(msg){
  stop(); setStatus("");
  const inp=h("input",{class:"big-in",inputmode:"numeric",pattern:"[0-9]*",maxlength:6,placeholder:"Game PIN","aria-label":"Game PIN",autocomplete:"off",value:pin||""});
  const err=h("p",{class:"err",role:"alert"},msg||"");
  const go=async()=>{
    const v=inp.value.replace(/\D/g,""); if(v.length!==6){ err.textContent="The PIN has 6 numbers."; return; }
    err.textContent="Looking for your caravan…"; const meta=await Store.get(SD.gp(v,"meta")).catch(()=>null);
    if(!meta){ err.textContent="No game with that PIN yet. Check the big screen!"; RR.sfx.wrong(); return; }
    pin=v; if(meta.week&&RR.WEEKS[meta.week]){ WEEK=meta.week; RR.setBackdrop&&RR.setBackdrop(WEEK); } await Store.syncClock(); viewName(meta);
  };
  const s=screen("pin",h("div",{class:"hero-mini",html:RR.art.icon("horn",90,"#D0B475",2.4)}),h("h1",{class:"gold-text"},"Join the Showdown"),h("p",{},"Type the PIN from the big screen."),inp,h("button",{class:"btn big",type:"button",onclick:go},"Enter"),err,
    h("div",{class:"or"},"or"),h("a",{class:"btn ghost",href:"play.html?practice=1"},"Practice on my own"));
  inp.addEventListener("keydown",e=>{ if(e.key==="Enter") go(); });
  if(pin.length===6) go(); else inp.focus();
}

async function viewName(meta){
  // already joined on this device?
  const saved=RR.ss.get("pl:"+pin,null);
  if(saved){ const ex=await Store.get(SD.gp(pin,"players/"+saved.pid)); if(ex){ return play(saved); } }
  const players=(await Store.get(SD.gp(pin,"players")))||{};
  const counts={}; Object.values(players).forEach(p=>counts[p.team]=(counts[p.team]||0)+1);
  const teamIds=meta.teamIds||RR.TEAMS.map(t=>t.id);
  let team=null; const nm=h("input",{class:"big-in",maxlength:16,placeholder:"Your first name","aria-label":"Your first name",autocomplete:"off"});
  const err=h("p",{class:"err",role:"alert"});
  const btn=h("button",{class:"btn big",type:"button",disabled:true,onclick:join},"Join my Caravan");
  const picks=h("div",{class:"team-picks",role:"radiogroup","aria-label":"Choose your Caravan"},teamIds.map(id=>{ const t=RR.team(id);
    const b=h("button",{class:"team-pick",type:"button",role:"radio","aria-checked":"false",style:{"--c":t.color,"--d":t.dark},onclick:()=>{ team=id; RR.$$(".team-pick",picks).forEach(x=>{x.classList.remove("on");x.setAttribute("aria-checked","false");}); b.classList.add("on"); b.setAttribute("aria-checked","true"); RR.sfx.pop(); upd(); }},
      RR.crestEl(id,54),h("b",{},t.name),h("small",{},(counts[id]||0)+" in this Caravan"));
    return b; }));
  function upd(){ btn.disabled=!(team&&SD.cleanName(nm.value).length>=1); }
  nm.addEventListener("input",upd);
  async function join(){
    const name=SD.cleanName(nm.value); if(!name||!team) return; btn.disabled=true;
    const pid=SD.pid(); await Store.set(SD.gp(pin,"players/"+pid),{name,team,at:Store.now()});
    const me={pid,name,team}; RR.ss.set("pl:"+pin,me); RR.sfx.fanfare(); play(me);
  }
  screen("name",h("h1",{class:"gold-text"},"Who are you, Courier?"),nm,h("h3",{},"Choose your Caravan"),picks,btn,err);
}

/* ===================================================================
   LIVE PLAY — everything is driven by games/{pin}/state
   =================================================================== */
function play(me){
  stop(); const my=RR.team(me.team); document.body.style.setProperty("--tc",my.color);
  let cur={key:""}, state=null, fate=null, answeredFor=-1, myChoice=null, qIndexCache=null;
  const Qs=SD.questions(WEEK);
  setStatus(me.name);
  const render=async()=>{
    if(!state){ return; }
    const key=[state.phase,state.q,state.seq].join("|"); if(key===cur.key) return; cur.key=key;
    switch(state.phase){
      case "lobby": return lobby();
      case "fate": return fateScr();
      case "countdown": return countdown();
      case "question": return question();
      case "reveal": return reveal();
      case "podium": return podium();
      case "closed": return closed();
      default: return lobby();
    }
  };
  function lobby(){
    const sc=screen("wait",h("div",{class:"crest-big"},RR.crestEl(me.team,120,{glow:true})),h("h1",{class:"gold-text"},"You’re in, "+me.name+"!"),h("p",{class:"lead"},"You are with "+my.name+"."),h("p",{class:"cry"},"“"+my.cry+"”"),h("p",{class:"hint"},"Look at the big screen — the race begins soon."),h("div",{class:"dots"},h("i"),h("i"),h("i")));
  }
  function fateScr(){
    const fid=fate&&fate[me.team]; const f=fid&&RR.FATE.find(x=>x.id===fid);
    if(!f) return screen("wait",h("h1",{class:"gold-text"},"Fate is being drawn…"),h("p",{class:"hint"},"Watch the big screen."),h("div",{class:"dots"},h("i"),h("i"),h("i")));
    screen("fate "+f.kind,h("small",{},f.kind==="boon"?"YOUR CARAVAN IS BLESSED":"A SETBACK ON THE ROAD"),h("div",{class:"fate-ico",dataset:{kind:f.kind}},f.icon),h("h1",{class:"gold-text"},f.name),h("p",{class:"lead"},f.text),h("p",{class:"fx"},f.fx));
    if(f.id==="trick") setTimeout(()=>RR.toast("🎭 A silver mask flickers… just a trick!"),1200);
    f.kind==="boon"?RR.sfx.fanfare():RR.sfx.rumble();
  }
  function countdown(){
    const el=h("div",{class:"cd-num"}); screen("cd",h("p",{},"Get ready!"),el);
    (function loop(){ const left=Math.ceil((state.t0-Store.now())/1000); el.textContent=left>0?left:"GO!"; if(left!==loop.l){ loop.l=left; left>0&&RR.sfx.tick(); } if(left>-1&&cur.key.startsWith("countdown")) tickTimer=requestAnimationFrame(loop); })();
  }
  function question(){
    const q=state.q, Q=Qs[q]; if(!Q) return;
    const f=fate&&fate[me.team]; const lim=(state.limit||20)*1000-((q===0&&f==="river")?3000:0);
    const locked=answeredFor===q;
    const bar=h("div",{class:"tbar"},h("i")), secs=h("b",{class:"secs"},"");
    const tiles=Q.options.map((o,i)=>{ const S=SD.SHAPES[i];
      return h("button",{class:"ans",type:"button","data-i":i,style:{"--c":S.c,"--d":S.d},"aria-label":S.l+": "+o,disabled:locked,onclick:()=>choose(i)},h("span",{class:"shape",html:S.svg}),h("span",{class:"let"},S.l),h("span",{class:"txt"},o)); });
    const boss=Q.boss?h("div",{class:"boss"},"⚔ BOSS ROUND — DOUBLE POINTS"):null;
    const grid=h("div",{class:"ans-grid"},tiles);
    const sc=screen("question"+(Q.boss?" boss":""),h("div",{class:"qhead"},h("span",{},"Question "+(q+1)+" / "+Qs.length),secs),bar,boss,h("h2",{class:"qtext"},Q.q),grid);
    if(f==="river"&&q===0) sc.append(h("p",{class:"hint"},"🌊 Flooded River: you have 3 seconds less!"));
    if(locked) lockUI(myChoice);
    function lockUI(i){ RR.$$(".ans",grid).forEach(b=>{ b.disabled=true; if(+b.dataset.i!==i) b.classList.add("dim"); else b.classList.add("picked"); }); }
    async function choose(i){
      if(answeredFor===q) return; const t=Math.max(0,Store.now()-state.t0); if(Store.now()<state.t0-200) return;
      answeredFor=q; myChoice=i; lockUI(i); RR.sfx.stamp(); navigator.vibrate&&navigator.vibrate(30);
      sc.append(h("div",{class:"locked"},h("b",{},"Locked in!"),h("span",{},"Waiting for the others…")));
      try{ await Store.set(SD.gp(pin,`answers/${q}/${me.pid}`),{a:i,t:Math.round(t)}); }catch(e){ RR.toast("Connection wobble — tap again if the screen doesn’t change"); answeredFor=-1; }
    }
    (function loop(){ if(!cur.key.startsWith("question")||state.q!==q) return; const now=Store.now(); const toStart=state.t0-now;
      if(toStart>0){ secs.textContent="Ready… "+Math.ceil(toStart/1000); bar.firstChild.style.width="100%"; }
      else { const left=Math.max(0,lim-(now-state.t0)); secs.textContent=Math.ceil(left/1000)+"s"; bar.firstChild.style.width=(left/lim*100)+"%"; bar.classList.toggle("low",left<5000);
        if(left<=0&&answeredFor!==q){ RR.$$(".ans",grid).forEach(b=>b.disabled=true); if(!RR.$(".locked",sc)) sc.append(h("div",{class:"locked late"},h("b",{},"Time’s up!"))); } }
      tickTimer=requestAnimationFrame(loop); })();
  }
  async function reveal(){
    const q=state.q, Q=Qs[q]; const scores=(await Store.get(SD.gp(pin,"scores")))||{}; const teams=(await Store.get(SD.gp(pin,"teams")))||{};
    const mine=scores[me.pid]||{score:0,delta:0,streak:0}; const answered=answeredFor===q; const ok=answered&&myChoice===Q.answer;
    const players=(await Store.get(SD.gp(pin,"players")))||{}; const rank=SD.rankPlayers(players,scores); const pos=rank.findIndex(r=>r.id===me.pid)+1;
    const trank=SD.rankTeams(teams); const tpos=trank.findIndex(r=>r.id===me.team)+1;
    const S=SD.SHAPES[Q.answer];
    const verdict=ok?(Q.boss?"BOSS DEFEATED!":"Correct!"):answered?"Not this time":"Too slow!";
    screen("reveal "+(ok?"good":"bad"),h("div",{class:"verdict"},h("div",{class:"vmark"},ok?"✓":"✗"),h("h1",{},verdict)),
      h("div",{class:"pts"},ok||mine.delta?h("span",{class:"plus"},"+"+Math.round(mine.delta)):h("span",{class:"plus zero"},"+0"),h("small",{},"points")),
      mine.streak>=2?h("p",{class:"streak"},"🔥 "+mine.streak+" in a row! Next answer earns +"+Math.min(250,50*mine.streak)+" bonus"):null,
      h("div",{class:"corr",style:{"--c":S.c}},h("span",{class:"shape",html:S.svg}),h("span",{},"Answer: "+S.l+" — "+Q.options[Q.answer])),
      h("p",{class:"explain"},Q.explain),
      h("div",{class:"ranks"},h("div",{},h("small",{},"YOU"),h("b",{},ordinal(pos||1)),h("span",{},Math.round(mine.score)+" pts")),h("div",{},h("small",{},my.name.toUpperCase()),h("b",{},ordinal(tpos||1)),h("span",{},Math.round((teams[me.team]||{}).score||0)+" avg"))));
    ok?(RR.sfx.correct(),RR.confetti({particleCount:50,spread:70,origin:{y:.3}})):RR.sfx.wrong();
  }
  async function podium(){
    const scores=(await Store.get(SD.gp(pin,"scores")))||{}, teams=(await Store.get(SD.gp(pin,"teams")))||{}, players=(await Store.get(SD.gp(pin,"players")))||{};
    const rank=SD.rankPlayers(players,scores), pos=rank.findIndex(r=>r.id===me.pid)+1; const tr=SD.rankTeams(teams), tp=tr.findIndex(r=>r.id===me.team)+1;
    const mine=scores[me.pid]||{score:0};
    const win=tp===1;
    screen("final",h("small",{},win?"YOUR CARAVAN WON THE STAGE!":"THE RACE IS RUN"),h("h1",{class:"gold-text"},win?"🏆 Champions!":"Well raced, "+me.name+"!"),
      h("div",{class:"ranks big"},h("div",{},h("small",{},"YOUR PLACE"),h("b",{},ordinal(pos||1)),h("span",{},"of "+rank.length+" couriers · "+Math.round(mine.score)+" pts")),h("div",{},h("small",{},my.name.toUpperCase()),h("b",{},ordinal(tp||1)),h("span",{},"of "+tr.length+" Caravans"))),
      h("ol",{class:"top3"},rank.slice(0,3).map((r,i)=>h("li",{},RR.medal(i)," "+r.name+" — "+Math.round(r.score)))),
      h("p",{class:"lead"},"Whatever the score: you showed integrity by cheering, trying and learning. See your teacher for the Victory Lap paths."),
      h("a",{class:"btn",href:"index.html#/stage/"+WEEK+"/fri"},"Back to the adventure"));
    if(win){ RR.fireworks(3000); RR.sfx.fanfare(); }
  }
  function closed(){ screen("wait",h("h1",{class:"gold-text"},"The Showdown has ended"),h("p",{},"Thanks for racing!"),h("a",{class:"btn",href:"index.html"},"Back to the adventure")); }

  unsubs.push(Store.watch(SD.gp(pin,"state"),v=>{ state=v||{phase:"lobby"}; render(); }));
  unsubs.push(Store.watch(SD.gp(pin,"fate"),v=>{ fate=v||{}; if(state&&state.phase==="fate"){ cur.key=""; render(); } },{ms:1200}));
  unsubs.push(Store.watch(SD.gp(pin,"meta"),v=>{ if(v===null&&state){ state={phase:"closed",seq:Date.now()}; render(); } },{ms:3000}));
}

/* ===================================================================
   PRACTICE (solo, this device only)
   =================================================================== */
function practice(){
  stop(); setStatus("practice");
  const Qs=SD.questions(WEEK); let i=0; const answers={}; const players={me:{team:"leopards",name:"You"}}; const limits=Qs.map((_,q)=>SD.limitFor(WEEK,q)*1000);
  const start=()=>{ i=0; Object.keys(answers).forEach(k=>delete answers[k]); ask(); };
  function intro(){ screen("pin",h("div",{class:"hero-mini",html:RR.art.icon("horn",90,"#D0B475",2.4)}),h("h1",{class:"gold-text"},"Practice Showdown"),h("p",{class:"lead"},Qs.length+" questions, just for you. Faster answers earn more points, and streaks give bonuses. Nothing is saved or shared."),h("button",{class:"btn big",type:"button",onclick:start},"Start the race"),h("a",{class:"btn ghost",href:"play.html"},"I have a game PIN")); }
  function ask(){
    const Q=Qs[i], lim=limits[i], t0=Store.now()+600; let done=false;
    const bar=h("div",{class:"tbar"},h("i")), secs=h("b",{class:"secs"},"");
    const grid=h("div",{class:"ans-grid"},Q.options.map((o,k)=>{ const S=SD.SHAPES[k]; return h("button",{class:"ans",type:"button",style:{"--c":S.c,"--d":S.d},"aria-label":S.l+": "+o,onclick:()=>pick(k)},h("span",{class:"shape",html:S.svg}),h("span",{class:"let"},S.l),h("span",{class:"txt"},o)); }));
    const sc=screen("question"+(Q.boss?" boss":""),h("div",{class:"qhead"},h("span",{},"Question "+(i+1)+" / "+Qs.length),secs),bar,Q.boss?h("div",{class:"boss"},"⚔ BOSS ROUND — DOUBLE POINTS"):null,h("h2",{class:"qtext"},Q.q),grid);
    function pick(k){ if(done) return; done=true; answers[i]={me:{a:k,t:Math.max(0,Store.now()-t0)}}; RR.sfx.stamp(); showResult(); }
    (function loop(){ if(done) return; const now=Store.now(); if(now<t0){ secs.textContent="Ready…"; } else { const left=Math.max(0,lim-(now-t0)); secs.textContent=Math.ceil(left/1000)+"s"; bar.firstChild.style.width=(left/lim*100)+"%"; bar.classList.toggle("low",left<5000); if(left<=0){ done=true; answers[i]={}; showResult(); return; } } tickTimer=requestAnimationFrame(loop); })();
  }
  function showResult(){
    const res=SD.compute(Qs,limits,answers,players,{},{},i); const me=res.players.me; const Q=Qs[i]; const a=answers[i]&&answers[i].me; const ok=a&&a.a===Q.answer; const S=SD.SHAPES[Q.answer];
    ok?(RR.sfx.correct(),RR.confetti({particleCount:40,spread:60,origin:{y:.3}})):RR.sfx.wrong();
    screen("reveal "+(ok?"good":"bad"),h("div",{class:"verdict"},h("div",{class:"vmark"},ok?"✓":"✗"),h("h1",{},ok?"Correct!":a?"Not this time":"Too slow!")),
      h("div",{class:"pts"},h("span",{class:"plus"+(me.delta?"":" zero")},"+"+Math.round(me.delta)),h("small",{},"points · total "+Math.round(me.score))),
      me.streak>=2?h("p",{class:"streak"},"🔥 "+me.streak+" in a row!"):null,
      h("div",{class:"corr",style:{"--c":S.c}},h("span",{class:"shape",html:S.svg}),h("span",{},"Answer: "+S.l+" — "+Q.options[Q.answer])),h("p",{class:"explain"},Q.explain),
      h("button",{class:"btn big",type:"button",onclick:()=>{ i++; if(i<Qs.length) ask(); else finish(); }},i<Qs.length-1?"Next question ▶":"See my result"));
  }
  function finish(){
    const res=SD.compute(Qs,limits,answers,players,{},{}); const me=res.players.me; const best=Qs.length;
    screen("final",h("small",{},"PRACTICE COMPLETE"),h("h1",{class:"gold-text"},me.correct+" / "+best+" correct"),h("div",{class:"ranks big"},h("div",{},h("small",{},"SCORE"),h("b",{},Math.round(me.score)),h("span",{},"points"))),
      h("p",{class:"lead"},me.correct>=best-2?"Courier of the Royal Road! Ready for Friday.":"Good effort — read the explanations again on the Monday–Thursday pages and have another go."),
      h("div",{class:"btn-row"},h("button",{class:"btn",type:"button",onclick:start},"Try again"),h("a",{class:"btn ghost",href:"index.html#/stage/"+WEEK},"Back to Stage "+WEEK)));
    RR.fireworks(1800); RR.sfx.fanfare();
  }
  intro();
}

/* ---------- boot ---------- */
(async function(){
  await Store.syncClock();
  if(params.get("practice")==="1"&&!pin) practice(); else viewPin();
})();
})();

/* fate card art on the player screen */
(function(){ const mo=new MutationObserver(()=>{ const el=document.querySelector(".scr.fate .fate-ico:not([data-art])"); if(!el) return; el.dataset.art=1;
  RR.assetUrl(el.dataset.kind==="boon"?"CORE-15":"CORE-16").then(u=>{ if(u&&el.isConnected){ el.textContent=""; el.classList.add("fate-art"); el.append(RR.h("img",{src:u,alt:""})); } }); });
  mo.observe(document.body,{childList:true,subtree:true}); })();
