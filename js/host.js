/* ===================================================================
   HOST (teacher, big screen) — host.html
   Live mode: phones join by QR/PIN; host is the scoring authority.
   Teacher-led mode: no devices — the teacher taps which Caravans were right.
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, h=RR.h, SD=RR.SD, Store=RR.Store, A=RR.art;
const root=RR.$("#host"), statusEl=RR.$("#hStatus");
const WEEK=RR.activeWeek(); RR.setBackdrop&&RR.setBackdrop(WEEK); const Qs=SD.questions(WEEK);
try{ RR.applySettings(); }catch(e){}
RR.particles&&RR.particles(RR.$("#bgfx"),"stars",{maxY:1});
RR.$("#hFull").addEventListener("click",()=>{ document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen(); });

let G=null;         // current game (in memory)
let unsubs=[]; const stopAll=()=>{ unsubs.forEach(f=>f()); unsubs=[]; };
let raf=null; const stopRaf=()=>{ if(raf){ cancelAnimationFrame(raf); raf=null; } };
let advance=null;   // function bound to Space / Enter
document.addEventListener("keydown",e=>{ if((e.key===" "||e.key==="Enter")&&advance&&!/INPUT|TEXTAREA|SELECT|BUTTON/.test(e.target.tagName)){ e.preventDefault(); advance(); } });

const screen=(cls,...kids)=>{ stopRaf(); advance=null; root.innerHTML=""; const s=h("section",{class:"hs "+cls},...kids); root.append(s); if(/lobby|podium-scr/.test(cls)) RR.restCamel(s,"rest-camel"); return s; };
const setStatus=t=>{ statusEl.textContent=t||""; };
const teamName=id=>RR.team(id).name;

/* ---------- state writer ---------- */
let seq=0;
async function setState(patch){ seq++; G.state=Object.assign({},patch,{seq,week:WEEK}); if(G.mode==="live") await Store.set(SD.gp(G.pin,"state"),G.state); }

/* ===================================================================
   GATE + SETUP
   =================================================================== */
async function start(){
  if(!RR.pin.isTeacher()) return gate();
  setup();
}
function gate(msg){
  const inp=h("input",{class:"big-in",type:"password",placeholder:"Teacher PIN","aria-label":"Teacher PIN",autocomplete:"off"});
  const err=h("p",{class:"err",role:"alert"},msg||"");
  const go=async()=>{ if(await RR.pin.check(inp.value)) setup(); else { err.textContent="That PIN isn’t right."; RR.sfx.wrong(); } };
  screen("gate",h("div",{class:"hero-mini",html:A.icon("horn",90,"#D0B475",2.4)}),h("h1",{class:"gold-text"},"Herald’s Gate"),h("p",{},"Teachers only. Enter your PIN to host the Showdown."),inp,h("button",{class:"btn big",type:"button",onclick:go},"Open the Gate"),err);
  inp.addEventListener("keydown",e=>{ if(e.key==="Enter") go(); }); inp.focus();
}
async function setup(){
  stopAll(); setStatus("");
  const cfg=await RR.Class.config().catch(()=>({teamCount:6}));
  let mode="live", teamCount=Math.min(6,Math.max(2,cfg.teamCount||6));
  const live=Store.mode==="firebase";
  const warn=live?null:h("div",{class:"notice"},h("b",{},"Heads up: "),"Online play isn’t switched on yet, so phones on other devices can’t join. You can still try everything with several tabs on THIS computer, run a Teacher-led game, or follow the Firebase steps in js/config.js (5 minutes, free).");
  const modeBtns=h("div",{class:"choice"},
    h("button",{class:"choice-b on",type:"button","data-m":"live",onclick:e=>pick("live",e.currentTarget)},h("b",{},"📱 Live — phones & tablets"),h("small",{},"Scan the QR, join a Caravan, answer on devices")),
    h("button",{class:"choice-b",type:"button","data-m":"offline",onclick:e=>pick("offline",e.currentTarget)},h("b",{},"🗣 Teacher-led — no devices"),h("small",{},"Read the questions aloud; tap the Caravans that got it right")));
  function pick(m,b){ mode=m; RR.$$(".choice-b",modeBtns).forEach(x=>x.classList.remove("on")); b.classList.add("on"); }
  const tc=h("input",{type:"range",min:2,max:6,value:teamCount,"aria-label":"Number of Caravans",oninput:e=>{ teamCount=+e.target.value; tcl.textContent=teamCount; }}); const tcl=h("b",{},teamCount);
  screen("setup",h("small",{class:"kick"},"STAGE "+WEEK+" · WEEK "+WEEK),h("h1",{class:"gold-text"},"Friday Showdown"),h("p",{class:"lead"},SD.lesson(WEEK).title.replace("SHOWDOWN: ","")+" — "+Qs.length+" questions · fate cards · podium"),
    warn,modeBtns,h("div",{class:"row"},h("label",{},"Caravans: "),tc,tcl),
    h("div",{class:"btn-row"},h("button",{class:"btn big",type:"button",onclick:()=>begin(mode,teamCount)},"Open the lobby"),h("a",{class:"btn ghost",href:"teacher.html"},"Back to the teacher area")));
}

async function begin(mode,teamCount){
  const teamIds=RR.TEAMS.slice(0,teamCount).map(t=>t.id);
  G={mode,teamIds,pin:mode==="live"?SD.newPin():"OFFLINE",players:{},answers:{},scores:{},teams:{},fate:{},rp:{},q:-1,flat:{},state:null};
  seq=0;
  if(mode==="live"){
    await Store.syncClock();
    await Store.remove(SD.gp(G.pin));
    await Store.set(SD.gp(G.pin,"meta"),{week:WEEK,teamIds,created:Store.now(),mode});
    await setState({phase:"lobby",q:-1});
    lobby();
  } else {
    teamIds.forEach(id=>{ G.flat[id]=0; });
    await setState({phase:"lobby",q:-1}); offlineIntro();
  }
}

/* ===================================================================
   LOBBY (live)
   =================================================================== */
function qrSvg(url){
  try{ const qr=qrcode(0,"M"); qr.addData(url); qr.make(); return qr.createSvgTag({cellSize:6,margin:2,scalable:true}); }
  catch(e){ return "<p>QR error — type the PIN.</p>"; }
}
function lobby(){
  setStatus("PIN "+G.pin);
  const url=SD.joinUrl(G.pin);
  const cols=h("div",{class:"team-cols"},G.teamIds.map(id=>{ const t=RR.team(id); return h("div",{class:"tcol","data-t":id,style:{"--c":t.color,"--d":t.dark}},h("div",{class:"tc-head"},RR.crestEl(id,46),h("b",{},t.name)),h("div",{class:"tc-list"})); }));
  const count=h("b",{class:"pcount"},"0");
  const next=h("button",{class:"btn big",type:"button",disabled:true,onclick:()=>fates()},"Draw the Fate cards ▶");
  const skip=h("button",{class:"btn ghost",type:"button",onclick:()=>countdown()},"Skip fate cards");
  const sc=screen("lobby",
    h("div",{class:"lobby-top"},
      h("div",{class:"qr-card parchment"},h("div",{class:"qr",html:qrSvg(url)}),h("p",{class:"small"},"Scan with a camera — or go to"),h("code",{class:"joinurl"},url.replace(/^https?:\/\//,"").replace(/\?.*/,"")),h("div",{class:"pin-label"},"GAME PIN"),h("div",{class:"pin"},G.pin.slice(0,3)+" "+G.pin.slice(3))),
      h("div",{class:"lobby-msg"},h("h1",{class:"gold-text"},"Join the Caravan!"),h("p",{class:"lead"},"Scan the code, type your name, pick a Caravan."),h("p",{class:"pc"},count," couriers on the road"),h("div",{class:"btn-row"},next,skip))),
    cols);
  advance=()=>{ if(!next.disabled) fates(); };
  let known=new Set();
  unsubs.push(Store.watch(SD.gp(G.pin,"players"),v=>{
    G.players=v||{}; const n=Object.keys(G.players).length; count.textContent=n; next.disabled=n<1;
    G.teamIds.forEach(id=>{ const list=RR.$(`.tcol[data-t="${id}"] .tc-list`,sc); const mem=Object.entries(G.players).filter(([_,p])=>p.team===id);
      mem.forEach(([pid,p])=>{ if(!known.has(pid)){ known.add(pid); RR.sfx.pop(); list.append(h("span",{class:"pname pop",id:"pn-"+pid},p.name)); } }); });
  },{ms:900}));
}

/* ===================================================================
   FATE CARDS
   =================================================================== */
async function fates(){
  stopAll();
  const active=G.teamIds.filter(id=>Object.values(G.players).some(p=>p.team===id));
  G.active=active.length?active:G.teamIds;
  const used=[]; G.fate={};
  G.active.forEach(id=>{ const f=RR.drawFate(null,G.active.length,used); used.push(f.id); G.fate[id]=f.id; });
  if(G.mode==="live"){ await Store.set(SD.gp(G.pin,"fate"),G.fate); }
  await setState({phase:"fate",q:-1});
  const cards=G.active.map(id=>{ const t=RR.team(id), f=RR.FATE.find(x=>x.id===G.fate[id]);
    const el=h("div",{class:"fcard","data-t":id,style:{"--c":t.color,"--d":t.dark},tabindex:0,role:"button","aria-label":"Reveal "+t.name+"’s fate"},
      h("div",{class:"fc-in"},
        h("div",{class:"fc-bk"},RR.crestEl(id,90),h("b",{},t.name),h("small",{},"Tap to reveal your fate")),
        h("div",{class:"fc-ft "+f.kind},h("small",{},f.kind==="boon"?"BOON":"SETBACK"),h("div",{class:"fi"},f.icon),h("h3",{},f.name),h("p",{},f.text))));
    const flip=()=>{ if(el.classList.contains("flipped")) return; el.classList.add("flipped"); f.kind==="boon"?RR.sfx.fanfare():RR.sfx.rumble(); if(f.kind==="boon") RR.confetti({particleCount:40,spread:60,origin:{y:.6}}); upd(); };
    el.addEventListener("click",flip); el.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); flip(); } }); el.flip=flip; return el; });
  const go=h("button",{class:"btn big",type:"button",onclick:()=>countdown()},"Start the Showdown ▶");
  const all=h("button",{class:"btn ghost",type:"button",onclick:()=>cards.forEach((c,i)=>setTimeout(()=>c.flip(),i*700))},"Reveal all");
  function upd(){ /* nothing: host can start any time */ }
  screen("fates",h("h1",{class:"gold-text"},"Fate of the Road"),h("p",{class:"lead"},"Every Caravan draws a card. Tap a card to turn it over."),h("div",{class:"fcards"},cards),h("div",{class:"btn-row"},all,go));
  advance=()=>countdown();
}

/* ===================================================================
   COUNTDOWN → QUESTIONS
   =================================================================== */
async function countdown(){
  stopAll();
  const t0=Store.now()+3800; G.q=-1;
  await setState({phase:"countdown",q:-1,t0});
  const el=h("div",{class:"cd-big"}); screen("countdown",h("p",{class:"lead"},"The race begins in…"),el);
  RR.sfx.drumroll&&RR.sfx.drumroll();
  let last=null;
  (function loop(){ const left=Math.ceil((t0-Store.now())/1000); if(left!==last){ last=left; el.textContent=left>0?left:"GO!"; el.classList.remove("beat"); void el.offsetWidth; el.classList.add("beat"); if(left>0) RR.sfx.tick(); else { RR.sfx.horn&&RR.sfx.horn(); } }
    if(left>-1){ raf=requestAnimationFrame(loop); } else nextQuestion(); })();
}

async function nextQuestion(){
  stopAll(); G.q++;
  if(G.q>=Qs.length) return podium();
  const q=G.q, Q=Qs[q], limit=SD.limitFor(WEEK,q); const t0=Store.now()+1200;
  G.t0=t0; G.limit=limit; G.ended=false;
  if(G.mode==="live") await setState({phase:"question",q,t0,limit}); else await setState({phase:"question",q,t0,limit});
  questionScreen(q,Q,limit,t0);
}

function questionScreen(q,Q,limit,t0){
  setStatus((G.mode==="live"?"PIN "+G.pin+" · ":"Teacher-led · ")+"Q"+(q+1)+"/"+Qs.length);
  const ring=h("div",{class:"ring"},h("svg",{viewBox:"0 0 100 100",html:`<circle cx="50" cy="50" r="44" class="r-bg"/><circle cx="50" cy="50" r="44" class="r-fg" pathLength="100"/>`}),h("b",{class:"r-n"},limit));
  const ansCount=h("div",{class:"anscount"},h("b",{},"0"),h("small",{}," answered"));
  const tiles=h("div",{class:"tiles"},Q.options.map((o,i)=>{ const S=SD.SHAPES[i]; return h("div",{class:"tile","data-i":i,style:{"--c":S.c,"--d":S.d}},h("span",{class:"shape",html:S.svg}),h("span",{class:"let"},S.l),h("span",{class:"txt"},o),h("span",{class:"bar"},h("i"))); }));
  const rpBar=h("div",{class:"rp-bar"});
  if(G.mode==="live"){ G.active.forEach(id=>{ if(G.fate[id]==="royalpass"&&G.rp[id]==null){ rpBar.append(h("button",{class:"btn small",type:"button",style:{"--c":RR.team(id).color},onclick:e=>{ G.rp[id]=q; e.currentTarget.disabled=true; e.currentTarget.textContent="📜 Royal Pass used by "+teamName(id); RR.sfx.stamp(); }},"📜 Use "+teamName(id)+"’s Royal Pass")); } }); }
  const end=h("button",{class:"btn ghost small",type:"button",onclick:()=>finishQuestion()},G.mode==="live"?"End question now ▶":"Show the answer ▶");
  const sc=screen("question"+(Q.boss?" boss":""),
    h("div",{class:"qtop"},h("span",{class:"qn"},"Question "+(q+1)+" of "+Qs.length),Q.boss?h("span",{class:"boss-tag"},"⚔ BOSS ROUND · DOUBLE POINTS"):null,ring),
    h("h1",{class:"qbig"},Q.q),tiles,h("div",{class:"qfoot"},G.mode==="live"?ansCount:h("span",{}),rpBar,end));
  advance=()=>finishQuestion();
  const fg=RR.$(".r-fg",ring), rn=RR.$(".r-n",ring);
  const nPlayers=()=>Math.max(1,Object.keys(G.players).length);
  if(G.mode==="live"){
    unsubs.push(Store.watch(SD.gp(G.pin,"players"),v=>{ G.players=v||{}; },{ms:2000}));
    unsubs.push(Store.watch(SD.gp(G.pin,`answers/${q}`),v=>{ G.answers[q]=v||{}; const n=Object.keys(G.answers[q]).length; RR.$("b",ansCount).textContent=n+" / "+Object.keys(G.players).length; if(n>=nPlayers()&&Object.keys(G.players).length>0&&Store.now()>t0+1500) setTimeout(()=>{ if(!G.ended) finishQuestion(); },700); },{ms:600}));
  }
  (function loop(){ if(G.ended) return; const now=Store.now(); const left=Math.max(0,limit*1000-(now-t0)); const frac=now<t0?1:left/(limit*1000);
    fg.style.strokeDashoffset=(1-frac)*100; rn.textContent=now<t0?limit:Math.ceil(left/1000); ring.classList.toggle("low",left<5000&&now>=t0);
    if(now>=t0&&left<=0){ finishQuestion(); return; } raf=requestAnimationFrame(loop); })();
}

async function finishQuestion(){
  if(G.ended) return; G.ended=true; stopAll(); stopRaf(); const q=G.q, Q=Qs[q];
  if(G.mode==="live"){
    await RR.sleep(900);                       // let last answers land
    G.answers[q]=(await Store.get(SD.gp(G.pin,`answers/${q}`)))||{};
    G.players=(await Store.get(SD.gp(G.pin,"players")))||G.players;
    const limits=Qs.map((_,i)=>SD.limitFor(WEEK,i)*1000);
    G.res=SD.compute(Qs,limits,G.answers,G.players,G.fate,G.rp,q);
    G.scores=G.res.players; G.teams=G.res.teams;
    await Store.set(SD.gp(G.pin,"scores"),G.scores); await Store.set(SD.gp(G.pin,"teams"),G.teams);
    await setState({phase:"reveal",q,correct:Q.answer});
  } else { await setState({phase:"reveal",q,correct:Q.answer}); }
  revealScreen(q,Q);
}

/* ===================================================================
   REVEAL + RACE TRACK
   =================================================================== */
function raceTrack(){
  const rows=G.mode==="live"?SD.rankTeams(G.teams):G.active.map(id=>({id,score:G.flat[id]||0,n:0})).sort((a,b)=>b.score-a.score);
  const max=Math.max(1,...rows.map(r=>r.score));
  const track=h("div",{class:"track"},rows.map((r,i)=>{ const t=RR.team(r.id); const pct=Math.max(5,r.score/max*100);
    return h("div",{class:"lane",style:{"--c":t.color}},h("span",{class:"lane-n"},t.name),h("div",{class:"lane-bar"},h("div",{class:"lane-fill",style:{width:"0%"},"data-w":pct},h("span",{class:"camel",html:`<svg viewBox="0 0 190 135" width="54">${A.camel("#211812")}</svg>`}),h("i",{class:"flag"}))),h("b",{class:"lane-s"},Math.round(r.score)));
  }));
  requestAnimationFrame(()=>requestAnimationFrame(()=>RR.$$(".lane-fill",track).forEach(f=>f.style.width=f.dataset.w+"%")));
  return track;
}
function revealScreen(q,Q){
  const dist=G.mode==="live"&&G.res?G.res.perQ[q].dist:[0,0,0,0]; const tot=Math.max(1,dist.reduce((a,b)=>a+b,0)); const nC=G.mode==="live"&&G.res?G.res.perQ[q].nCorrect:0;
  const tiles=h("div",{class:"tiles rev"},Q.options.map((o,i)=>{ const S=SD.SHAPES[i]; const good=i===Q.answer;
    return h("div",{class:"tile"+(good?" good":" dim"),style:{"--c":S.c,"--d":S.d}},h("span",{class:"shape",html:S.svg}),h("span",{class:"let"},S.l),h("span",{class:"txt"},o),G.mode==="live"?h("span",{class:"cnt"},dist[i]):null,h("span",{class:"bar"},h("i",{style:{width:(dist[i]/tot*100)+"%"}}))); }));
  const teach=SD.isTeaching(WEEK,q);
  const tm=teach?h("div",{class:"teach parchment"},h("b",{},"🛑 Teaching moment"),h("p",{},Q.explain),h("small",{},"Pause and discuss before moving on.")):h("p",{class:"explain-h"},Q.explain);
  // teacher-led: tap the Caravans that got it right
  let chips=null;
  if(G.mode==="offline"){
    G.right=G.right||{}; G.right[q]=G.right[q]||{}; const pts=SD.flatPoints(q,Q);
    chips=h("div",{class:"chips-row"},h("p",{},"Tap each Caravan that answered correctly (+"+pts+"):"),G.active.map(id=>{ const t=RR.team(id); const b=h("button",{class:"cchip",type:"button","aria-pressed":"false",style:{"--c":t.color,"--d":t.dark},onclick:()=>{ const on=!G.right[q][id]; G.right[q][id]=on; b.setAttribute("aria-pressed",on); b.classList.toggle("on",on); G.flat[id]=(G.flat[id]||0)+(on?pts:-pts); RR.sfx[on?"correct":"pop"](); refreshTrack(); }},RR.crestEl(id,38),h("b",{},t.name)); return b; }));
  }
  const trackWrap=h("div",{class:"track-wrap"},raceTrack());
  function refreshTrack(){ trackWrap.innerHTML=""; trackWrap.append(raceTrack()); }
  const last=q>=Qs.length-1;
  const nxt=h("button",{class:"btn big",type:"button",onclick:()=>nextQuestion()},last?"Final results — to the podium ▶":"Next question ▶");
  const top5=G.mode==="live"?SD.rankPlayers(G.players,G.scores).slice(0,5):[];
  screen("reveal",h("div",{class:"qtop"},h("span",{class:"qn"},"Question "+(q+1)+" of "+Qs.length),Q.boss?h("span",{class:"boss-tag"},"⚔ BOSS ROUND"):null,G.mode==="live"?h("span",{class:"ok-count"},nC+" of "+Object.keys(G.players).length+" correct"):null),
    h("h2",{class:"qmid"},Q.q),tiles,tm,chips,
    h("div",{class:"rev-bottom"},trackWrap,top5.length?h("ol",{class:"top5"},h("h4",{},"Top couriers"),top5.map((p,i)=>h("li",{},h("span",{class:"rk"},i+1),h("b",{},p.name),h("em",{style:{color:RR.team(p.team).color}},"●"),h("span",{class:"sc"},Math.round(p.score))))):null),
    h("div",{class:"btn-row"},nxt));
  advance=()=>nextQuestion(); RR.sfx.correct();
}

/* ===================================================================
   OFFLINE intro
   =================================================================== */
function offlineIntro(){
  setStatus("Teacher-led");
  G.active=G.teamIds;
  screen("lobby",h("h1",{class:"gold-text"},"Teacher-led Showdown"),h("p",{class:"lead"},"Read each question aloud (or let the Caravans read it on the big screen). Caravans discuss and show an answer with A/B/C/D cards. Then reveal the answer and tap who was right."),
    h("div",{class:"team-cols"},G.teamIds.map(id=>{ const t=RR.team(id); return h("div",{class:"tcol",style:{"--c":t.color,"--d":t.dark}},h("div",{class:"tc-head"},RR.crestEl(id,46),h("b",{},t.name))); })),
    h("div",{class:"btn-row"},h("button",{class:"btn big",type:"button",onclick:()=>countdown()},"Start ▶")));
  advance=()=>countdown();
}

/* ===================================================================
   PODIUM
   =================================================================== */
async function podium(){
  stopAll(); stopRaf(); setStatus("Results");
  let teamRank, plRank;
  if(G.mode==="live"){
    G.scores=(await Store.get(SD.gp(G.pin,"scores")))||G.scores; G.teams=(await Store.get(SD.gp(G.pin,"teams")))||G.teams;
    G.players=(await Store.get(SD.gp(G.pin,"players")))||G.players;
    teamRank=SD.rankTeams(G.teams).filter(t=>t.n>0); plRank=SD.rankPlayers(G.players,G.scores);
  } else { teamRank=G.active.map(id=>({id,score:G.flat[id]||0,n:0})).sort((a,b)=>b.score-a.score); plRank=[]; }
  G.teamRank=teamRank; G.plRank=plRank;
  await setState({phase:"podium",q:Qs.length});
  const result={at:Date.now(),week:WEEK,pin:G.pin,mode:G.mode,teamScores:Object.fromEntries(teamRank.map(t=>[t.id,{score:Math.round(t.score),n:t.n}])),players:plRank.map(p=>({name:p.name,team:p.team,score:Math.round(p.score)}))};
  RR.Class.saveResult(WEEK,result).catch(()=>{});
  const stepEls=[]; const mkPod=(rows,kind)=>{
    const order=[1,0,2]; const ht={0:100,1:76,2:58};
    return h("div",{class:"podium "+kind},order.map(i=>{ const r=rows[i]; if(!r) return h("div",{class:"pod empty"});
      const isTeam=kind==="teams"; const tid=isTeam?r.id:r.team; const t=RR.team(tid);
      const el=h("div",{class:"pod p"+(i+1),style:{"--c":t.color,"--d":t.dark,"--h":ht[i]+"%"}},
        h("div",{class:"pod-top"},h("div",{class:"medal"},RR.medal(i)),RR.crestEl(tid,isTeam?84:54),h("b",{class:"pod-name"},isTeam?t.name:r.name),!isTeam?h("small",{},t.name):null,h("span",{class:"pod-score"},Math.round(r.score)+(isTeam?" avg":" pts"))),
        h("div",{class:"pod-step"},h("span",{},i+1)));
      el.dataset.rank=i; return el; })); };
  const teamPod=mkPod(teamRank,"teams"), plPod=plRank.length?mkPod(plRank,"players"):null;
  const title=h("h1",{class:"gold-text"},"The Winning Caravan…");
  const extra=h("div",{class:"btn-row pod-actions",hidden:true});
  const sc=screen("podium-scr",title,teamPod,plPod?h("div",{class:"pl-wrap",hidden:true},h("h2",{class:"gold-text"},"Champion Couriers"),plPod):null,extra);
  RR.slot(sc,"CORE-09",{fit:"cover"}); RR.assetUrl("CORE-10").then(u=>{ if(u&&sc.isConnected) sc.append(h("img",{class:"pod-trophy",src:u,alt:""})); });
  advance=null;
  const skipBtn=h("button",{class:"btn ghost small skip",type:"button"},"Skip ceremony ▸▸"); sc.append(skipBtn); let skip=false; skipBtn.onclick=()=>{ skip=true; };
  const w=async ms=>{ const t0=performance.now(); while(!skip&&performance.now()-t0<ms) await RR.sleep(60); };
  const reveal=async(pod,labels)=>{ const els=[2,1,0].map(r=>RR.$(`.pod[data-rank="${r}"]`,pod)).filter(Boolean);
    for(const el of els){ RR.sfx.drumroll&&!skip&&RR.sfx.drumroll(); await w(1500); el.classList.add("up"); RR.sfx.fanfare(); if(el.dataset.rank==="0"){ RR.confetti({particleCount:160,spread:100,origin:{y:.5}}); RR.fireworks(2600); } await w(900); } };
  await w(900); await reveal(teamPod);
  title.textContent=teamRank[0]?teamName(teamRank[0].id)+" win Stage "+WEEK+"!":"Stage complete!";
  if(plPod){ await w(1800); RR.$(".pl-wrap",sc).hidden=false; RR.$(".pl-wrap",sc).scrollIntoView({behavior:"smooth"}); await w(500); await reveal(plPod); }
  skipBtn.remove(); skip=true; RR.$$(".pod").forEach(p=>p.classList.add("up"));
  if(plPod) RR.$(".pl-wrap",sc).hidden=false;
  // actions
  const dar=darics(); const darBtn=h("button",{class:"btn teal",type:"button",onclick:async e=>{ e.currentTarget.disabled=true; for(const d of dar){ await RR.Class.award(d.kind,d.id,d.amt,"Showdown W"+WEEK+": "+d.why).catch(()=>{}); } RR.sfx.coin(); RR.coinRain({n:24}); RR.toast("Darics awarded and saved 🪙"); e.currentTarget.textContent="✓ Darics awarded"; }},"🪙 Award Darics ("+dar.length+" awards)");
  const certBtn=h("button",{class:"btn",type:"button",onclick:()=>certificates()},"📜 Download certificates");
  const csv=h("button",{class:"btn ghost",type:"button",onclick:()=>exportCsv()},"⬇ Results CSV");
  const done=h("button",{class:"btn ghost",type:"button",onclick:async()=>{ if(G.mode==="live"){ await Store.set(SD.gp(G.pin,"state"),{phase:"closed",seq:Date.now()}); await RR.sleep(1200); await Store.remove(SD.gp(G.pin)); } location.href="teacher.html"; }},"Finish & close the game");
  extra.hidden=false; extra.append(darBtn,certBtn,csv,done);
  if(G.mode==="offline") extra.append(h("p",{class:"small"},"Teacher-led games score Caravans only."));
}

function darics(){
  const out=[]; const t=G.teamRank||[];
  t.slice(0,3).forEach((r,i)=>out.push({kind:"teams",id:r.id,amt:SD.DARICS_TEAM[i],why:["1st","2nd","3rd"][i]+" place Caravan"}));
  // fate cards that touch Darics
  const lead=t[0]&&t[0].id;
  G.active.forEach(id=>{ const f=G.fate[id];
    if(f==="oasis") out.push({kind:"teams",id,amt:5,why:"Oasis fate card"});
    if(f==="sandstorm") out.push({kind:"teams",id,amt:-5,why:"Sandstorm fate card"});
    if(f==="bandits"&&lead){ if(id===lead){ out.push({kind:"teams",id,amt:-5,why:"Bandits (leader robbed)"}); } else { out.push({kind:"teams",id,amt:5,why:"Bandits (loot)"}); out.push({kind:"teams",id:lead,amt:-5,why:"Bandits (robbed)"}); } }
  });
  return out.filter(d=>d.amt);
}

/* ---------- CSV + certificates ---------- */
function exportCsv(){
  const rows=[["Rank","Name","Caravan","Score"]]; (G.plRank||[]).forEach((p,i)=>rows.push([i+1,p.name,teamName(p.team),Math.round(p.score)]));
  rows.push([]); rows.push(["Caravan","Average score","Players"]); (G.teamRank||[]).forEach(t=>rows.push([teamName(t.id),Math.round(t.score),t.n]));
  download(new Blob([rows.map(r=>r.map(c=>'"'+String(c??"").replace(/"/g,'""')+'"').join(",")).join("\n")],{type:"text/csv"}),"showdown-week"+WEEK+".csv");
}
function download(blob,name){ const a=h("a",{href:URL.createObjectURL(blob),download:name}); document.body.append(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),4000); }
function certCanvas({heading,name,line,sub}){
  const W=1754,H=1240,c=document.createElement("canvas"); c.width=W; c.height=H; const x=c.getContext("2d");
  const g=x.createLinearGradient(0,0,W,H); g.addColorStop(0,"#E9E0C9"); g.addColorStop(1,"#C4B28A"); x.fillStyle=g; x.fillRect(0,0,W,H);
  x.strokeStyle="#937739"; x.lineWidth=18; x.strokeRect(50,50,W-100,H-100); x.strokeStyle="#2A2A33"; x.lineWidth=6; x.strokeRect(80,80,W-160,H-160);
  x.fillStyle="#1B1A21"; for(let i=0;i<22;i++){ const px=140+i*(W-280)/21; x.beginPath(); x.moveTo(px,100); x.lineTo(px+14,120); x.lineTo(px,140); x.lineTo(px-14,120); x.fill(); x.beginPath(); x.moveTo(px,H-100); x.lineTo(px+14,H-120); x.lineTo(px,H-140); x.lineTo(px-14,H-120); x.fill(); }
  x.textAlign="center"; x.fillStyle="#3A1A22"; x.font="700 44px Cinzel, Georgia, serif"; x.fillText("THE ROYAL ROAD RACE",W/2,230);
  x.fillStyle="#61361D"; x.font="700 92px 'Cinzel Decorative', Cinzel, Georgia, serif"; x.fillText(heading,W/2,370);
  x.fillStyle="#211812"; x.font="italic 40px Amiri, Georgia, serif"; x.fillText("is proudly presented to",W/2,470);
  x.fillStyle="#1B1A21"; x.font="700 120px 'Cinzel Decorative', Cinzel, Georgia, serif"; x.fillText(name,W/2,620);
  x.fillStyle="#211812"; x.font="500 46px Nunito, Arial, sans-serif"; x.fillText(line,W/2,730); x.fillText(sub,W/2,800);
  x.beginPath(); x.arc(W/2,980,90,0,7); const sg=x.createRadialGradient(W/2-25,955,10,W/2,980,90); sg.addColorStop(0,"#EAE0C5"); sg.addColorStop(.5,"#BA9B58"); sg.addColorStop(1,"#735929"); x.fillStyle=sg; x.fill(); x.lineWidth=8; x.strokeStyle="#39290E"; x.stroke();
  x.fillStyle="#1B1A21"; x.beginPath(); const cx=W/2,cy=980; for(let i=0;i<8;i++){ const a=i*Math.PI/4-Math.PI/2, r=i%2?26:58; x.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r); } x.fill();
  x.fillStyle="#61361D"; x.font="600 34px Nunito, Arial, sans-serif"; x.fillText("Teacher: ______________________      Date: "+new Date().toLocaleDateString("en-NZ"),W/2,1130);
  return c;
}
function certificates(){
  const list=[]; const ord=["1st","2nd","3rd"];
  if(G.teamRank&&G.teamRank[0]) list.push({heading:"Winning Caravan",name:teamName(G.teamRank[0].id),line:"for victory in the Stage "+WEEK+" Showdown: "+SD.lesson(WEEK).title.replace("SHOWDOWN: ",""),sub:"“"+RR.team(G.teamRank[0].id).cry+"”"});
  (G.plRank||[]).slice(0,3).forEach((p,i)=>list.push({heading:ord[i]+" Place Courier",name:p.name,line:"of "+teamName(p.team)+" — "+Math.round(p.score)+" points",sub:"Stage "+WEEK+" Showdown · "+SD.lesson(WEEK).title.replace("SHOWDOWN: ","")}));
  list.forEach((c,i)=>setTimeout(()=>certCanvas(c).toBlob(b=>download(b,"certificate-"+(i+1)+"-"+RR.slug(c.name)+".png")),i*500));
  RR.toast("Downloading "+list.length+" certificates…");
}

/* ---------- go ---------- */
start();
window.RR_HOST={get G(){return G;},finishQuestion,nextQuestion};
})();
