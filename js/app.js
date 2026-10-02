/* ===================================================================
   THE ROYAL ROAD RACE — student adventure app (hash router + views)
   #/ hub · #/stage/1 · #/stage/1/mon … fri · #/log · #/cards · #/trophies
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, h=RR.h, A=RR.art;
const app=RR.$("#app");
let cleanup=[];                      // destroy callbacks for the current view
const onLeave=fn=>cleanup.push(fn);

/* ---------- progress (localStorage, never required) ---------- */
const prog={ get:id=>RR.ls.get("p:"+id,{}), set:(id,o)=>RR.ls.set("p:"+id,o), patch(id,p){ const o=prog.get(id); Object.assign(o,p); prog.set(id,o); return o; } };

/* ---------- small UI helpers ---------- */
RR.modal=function(content,{title="",wide=false}={}){
  const back=h("div",{class:"modal-back",role:"dialog","aria-modal":"true","aria-label":title||"Dialog"});
  const box=h("div",{class:"modal parchment"+(wide?" wide":"")},h("button",{class:"modal-x",type:"button","aria-label":"Close",onclick:close},"✕"),title&&h("h3",{},title),content);
  function close(){ back.classList.add("out"); setTimeout(()=>back.remove(),250); document.removeEventListener("keydown",esc); }
  function esc(e){ if(e.key==="Escape") close(); }
  back.addEventListener("click",e=>{ if(e.target===back) close(); }); document.addEventListener("keydown",esc);
  back.append(box); document.body.append(back); box.querySelector(".modal-x").focus(); return {close};
};
function printNode(html,title="Royal Road Race"){
  const w=window.open("","_blank","width=800,height=900"); if(!w){ RR.toast("Allow pop-ups to print."); return; }
  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${RR.esc(title)}</title><style>body{font-family:Georgia,serif;max-width:720px;margin:24px auto;color:#222;line-height:1.5}h1,h2,h3{font-family:Georgia,serif}li{margin:.3em 0}.box{border:2px solid #444;border-radius:8px;padding:12px;margin:12px 0}.chk{display:inline-block;width:14px;height:14px;border:2px solid #444;margin-right:8px;vertical-align:-2px}</style></head><body>${html}<script>window.onload=()=>setTimeout(()=>print(),200)<\/script></body></html>`);
  w.document.close();
}
RR.printNode=printNode;
function inkReveal(el,{delay=0,step=.05}={}){
  const txt=el.textContent; el.textContent=""; const words=txt.split(" ");
  words.forEach((w,i)=>{ el.append(h("span",{class:"ink",style:{animationDelay:(delay+i*step)+"s"}},w+" ")); });
}
function observeOnce(el,fn){ if(!("IntersectionObserver" in window)){ fn(); return; } const io=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ io.disconnect(); fn(); } }); },{threshold:.25}); io.observe(el); }
function riseAll(root){ const els=RR.$$(".rise",root); if(!("IntersectionObserver" in window)||!RR.motionOK()){ els.forEach(e=>e.classList.add("in")); return; }
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }),{threshold:.1}); els.forEach(e=>io.observe(e)); }
const subjectTheme={mon:"#95513B",tue:"#5E718C",wed:"#4F7A5A",thu:"#574A6B",fri:"#8D2A30"};
const weekAvailable=n=>!!RR.WEEKS[n];

/* ---------- routing ---------- */
function parse(){ const parts=location.hash.replace(/^#\/?/,"").split("/").filter(Boolean); return parts; }
async function render(){
  cleanup.forEach(f=>{try{f()}catch(e){}}); cleanup=[]; RR.stopSpeak();
  const [view,a,b]=parse(); document.body.dataset.view=view||"hub"; RR.sfx.wind(false);
  app.innerHTML=""; app.classList.remove("enter"); void app.offsetWidth; app.classList.add("enter");
  if(!view||view==="hub") await viewHub();
  else if(view==="stage") (b ? viewMission(+a,b) : viewStage(+a));
  else if(view==="log") viewLog();
  else if(view==="cards") viewCards();
  else if(view==="trophies") await viewTrophies();
  else await viewHub();
  updateCrumbs(); riseAll(app);
}
function nav(hash,{doors=true}={}){
  if(location.hash===hash) { render(); return; }
  if(!doors){ location.hash=hash; return; }
  RR.gates.go(async()=>{ location.hash=hash; await RR.sleep(30); });
}
RR.nav=nav;
window.addEventListener("hashchange",()=>{ if(!RR.gates.el||!RR.gates.el.classList.contains("show")) render(); else render(); });

function updateCrumbs(){
  const [view,a,b]=parse(); const c=RR.$("#crumbs"); if(!c) return; c.innerHTML="";
  const link=(t,hash)=>h("a",{href:hash,onclick:e=>{e.preventDefault();nav(hash);}},t);
  c.append(link("The Road","#/"));
  if(view==="stage"){ c.append(h("span",{},"›"),link("Stage "+a,"#/stage/"+a)); if(b){ const d=RR.DAYS.find(x=>x.id===b); c.append(h("span",{},"›"),h("b",{},d?d.en:b)); } }
  else if(view){ const nm={log:"Caravan Log",cards:"Animal Cards",trophies:"Trophy Room"}[view]; if(nm) c.append(h("span",{},"›"),h("b",{},nm)); }
}

/* ===================================================================
   HUB — the Royal Road map
   =================================================================== */
async function viewHub(){
  const wrap=h("section",{class:"hub"});
  const map=RR.scenes.hubMap(); wrap.append(map);
  app.append(wrap);
  const svg=map.querySelector("svg"); const measure=h("path",{}); // road measure (non-defs)
  const road=svg.querySelector("#roadPath"); const L=road.getTotalLength();
  const frac=pt=>{ let best=0,bd=1e9; for(let i=0;i<=500;i++){ const p=road.getPointAtLength(L*i/500); const d=(p.x-pt[0])**2+(p.y-pt[1])**2; if(d<bd){bd=d;best=i/500;} } return best; };
  const NS="http://www.w3.org/2000/svg", mk=(t,a={},html)=>{ const e=document.createElementNS(NS,t); for(const k in a) e.setAttribute(k,a[k]); if(html) e.innerHTML=html; return e; };
  const stageLayer=svg.querySelector("#stageLayer"), carLayer=svg.querySelector("#caravanLayer");
  const mf=RR.STAGE_PTS.map(frac);
  // fix monotonic order of markers along road
  for(let i=1;i<mf.length;i++) if(mf[i]<=mf[i-1]) mf[i]=Math.min(1,mf[i-1]+.02);
  const results=await RR.Class.results().catch(()=>({})); const doneWeeks=Object.keys(results).map(k=>+k.slice(1)).sort((a,b)=>a-b);
  const lastDone=doneWeeks.length?doneWeeks[doneWeeks.length-1]:0;
  const avW=Object.keys(RR.WEEKS).map(Number).sort((a,b)=>a-b); const current=avW.find(n=>!doneWeeks.includes(n))||avW[avW.length-1]||1;
  RR.STAGES.forEach((s,i)=>{
    const pt=road.getPointAtLength(L*mf[i]); const avail=weekAvailable(s.n); const done=doneWeeks.includes(s.n); const isNow=s.n===current;
    const g=mk("g",{transform:`translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)})`,tabindex:"0",role:"button","aria-label":`Stage ${s.n}: ${s.title}${avail?"":" (locked)"}`,class:"stage-pin"+(avail?"":" locked")+(isNow?" now":"")});
    g.style.cursor="pointer";
    const col=avail?"#8D2A30":"#6b6256";
    g.innerHTML=(isNow?`<circle r="44" fill="#C6A863" opacity=".38" class="pulse"/><circle r="30" fill="none" stroke="#EAE0C5" stroke-width="3" stroke-dasharray="5 6" class="spin"/>`:"")+
      `<circle r="23" fill="${col}" stroke="${avail?"#BA9B58":"#a89f90"}" stroke-width="4"/><circle r="17" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="2"/>`+
      (avail?`<text y="8" text-anchor="middle" font-family="Cinzel Decorative,Cinzel,serif" font-weight="700" font-size="22" fill="#EAE0C5">${s.n}</text>`:`<g transform="translate(-11 -12) scale(.36)" stroke="#DDD6C6" fill="none" stroke-width="5" stroke-linecap="round"><rect x="16" y="28" width="32" height="24" rx="4" fill="#DDD6C6" fill-opacity=".3"/><path d="M22 28 V20 C22 10 42 10 42 20 V28"/></g>`)+
      (done?`<g transform="translate(18 -22)"><circle r="11" fill="#5E718C" stroke="#EAE3CB" stroke-width="2.5"/><path d="M-5 0 l4 4 l7 -8" stroke="#fff" stroke-width="3" fill="none"/></g>`:"")+
      `<g transform="translate(0 ${s.n===5||s.n===6||s.n===7||s.n===8?-40:44})"><rect x="-${Math.min(150,s.title.length*5.4+18)}" y="-13" width="${Math.min(300,s.title.length*10.8+36)}" height="26" rx="13" fill="rgba(43,27,16,.82)" stroke="#BA9B58" stroke-width="1.6"/><text text-anchor="middle" y="5" font-family="Cinzel,serif" font-weight="700" font-size="13.5" fill="#EAE0C5">${RR.esc(s.title)}</text></g>`;
    const act=()=>{ if(!avail){ RR.sfx.wrong(); g.classList.remove("shake"); void g.getBoundingClientRect(); g.classList.add("shake"); RR.toast(`Stage ${s.n} is still locked — the road isn’t open that far yet!`); return; } RR.sfx.pop(); nav("#/stage/"+s.n); };
    g.addEventListener("click",act); g.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){e.preventDefault();act();} });
    stageLayer.append(g);
  });
  // road draws itself
  if(RR.motionOK()){ const rd=svg.querySelectorAll("use[href='#roadPath']"); rd.forEach((u,i)=>{ if(i===3) return; u.style.strokeDasharray=L; u.style.strokeDashoffset=L; u.style.transition="stroke-dashoffset 2.6s ease-out"; requestAnimationFrame(()=>requestAnimationFrame(()=>{u.style.strokeDashoffset=0;})); }); setTimeout(()=>{ rd.forEach((u,i)=>{ if(i!==3){u.style.strokeDasharray=""; u.style.strokeDashoffset="";} }); },2800); }

  // caravan tokens positioned by season progress
  const teams=RR.TEAMS; const totals={}; teams.forEach(t=>totals[t.id]=0);
  Object.values(results).forEach(r=>{ const ts=r.teamScores||{}; for(const k in ts) totals[k]=(totals[k]||0)+(ts[k].score||0); });
  const leader=Math.max(1,...Object.values(totals));
  const cars=[];
  teams.forEach((t,i)=>{
    const ratio=lastDone?RR.clamp(totals[t.id]/leader,.35,1):0; const f=lastDone? mf[0]+(mf[Math.min(lastDone,9)]-mf[0])*ratio : mf[0]+Math.max(0,i-.5)*.0042-.008;
    const pt=road.getPointAtLength(L*Math.max(0,f));
    const g=mk("g",{class:"caravan-token",transform:`translate(${pt.x.toFixed(1)} ${(pt.y-6).toFixed(1)})`}); const off=(i%3)*-12+(i>2?-14:0);
    g.innerHTML=`<title>${RR.esc(t.name)}</title><g transform="translate(0 ${off})"><ellipse cx="0" cy="22" rx="20" ry="5" fill="rgba(0,0,0,.28)"/><g class="cam-art" transform="translate(-22 -26) scale(.26)">${A.camel("#211812")}</g><path d="M2 -26 V-52" stroke="#211812" stroke-width="2.4"/><path d="M2 -52 L26 -45 L2 -37Z" fill="${t.color}" stroke="#EAE3CB" stroke-width="1.4"/></g>`;
    carLayer.append(g); cars.push(g);
    /* upgrade to the silhouette art + walk the caravan along the road to its place */
    const idx=1+(i%4), ca=g.querySelector(".cam-art"), dy=off;
    RR.assetUrl("CARAVAN-"+idx).then(u=>{ if(!u||!g.isConnected) return; const im=new Image(); im.onload=()=>{ const w=50,hh=w*im.height/im.width; ca.removeAttribute("transform"); ca.innerHTML=`<image href="${u}" x="${-w/2-2}" y="${(22-hh).toFixed(1)}" width="${w}" height="${hh.toFixed(1)}"/>`; }; im.src=u; });
    if(lastDone&&RR.motionOK()){ const t0=performance.now(), dur=2800+i*260, f0=mf[0]; const place=ff=>{ const q=road.getPointAtLength(L*Math.max(0,ff)); g.setAttribute("transform",`translate(${q.x.toFixed(1)} ${(q.y-6).toFixed(1)})`); };
      place(f0); setTimeout(()=>{ (function step(now){ if(!g.isConnected) return; const k=Math.min(1,(now-t0-900)/dur), e=1-Math.pow(1-Math.max(0,k),3); place(f0+(f-f0)*e); g.classList.toggle("walking",k<1); if(k<1) requestAnimationFrame(step); })(performance.now()); },0); g.classList.add("walking"); }
  });
  const fx=RR.particles(map.querySelector("canvas.fx"),"dust"); onLeave(()=>fx.stop());

  // overlays
  const frags=A.sealGeometry(60,7);
  const have=lastDone;
  const seal=h("div",{class:"seal-meter parchment"},h("h4",{},"Seal of the Kings"),
    h("div",{class:"seal-svg",html:`<svg viewBox="-70 -70 140 140" width="120" aria-label="${have} of 10 fragments found"><defs>${A.sealDefs("sm")}</defs>${frags.frags.map((f,i)=>`<path d="${A.sealFragmentPath(f)}" fill="${i<have?"url(#smGold)":"rgba(43,27,16,.22)"}" stroke="${i<have?"#39290E":"rgba(43,27,16,.4)"}" stroke-width="1.5" stroke-linejoin="round" ${i<have?'class="lit"':''}/>`).join("")}</svg>`}),
    h("p",{},h("b",{},have+" / 10")," fragments found"));
  const cta=h("div",{class:"hub-cta"},
    h("button",{class:"btn big",type:"button",onclick:()=>nav("#/stage/"+current)},"Enter Stage "+current+" — "+RR.stage(current).title),
    h("small",{},"Click any glowing seal on the road, or press this button."));
  const board=h("aside",{class:"team-board parchment"},h("button",{class:"tb-toggle",type:"button","aria-expanded":"false",onclick:e=>{ const o=board.classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded",o); }},"The Caravans ▾"),h("ul",{},teams.map(t=>h("li",{"data-t":t.id},h("span",{class:"tb-c",style:{background:t.color}}),h("span",{class:"tb-n"},t.name),h("span",{class:"tb-d"},h("i",{class:"coin"})," ",h("b",{"data-d":t.id},"0"))))));
  wrap.append(seal,cta,board);
  RR.slot(wrap,"CORE-03",{fit:"cover"}).then(ok=>{ if(ok) wrap.classList.add("has-map"); }); // optional parchment map image slot (under SVG? prepend below)
  const dar=async()=>{ try{ const d=await RR.Class.darics(); teams.forEach(t=>{ const el=board.querySelector(`[data-d="${t.id}"]`); if(el){ const v=d.teams[t.id]||0; if(+el.textContent!==v) RR.countUp(el,v,700); } }); }catch(e){} };
  dar(); const iv=setInterval(dar,12000); onLeave(()=>clearInterval(iv));
}

/* ===================================================================
   STAGE page
   =================================================================== */
function viewStage(n){
  const S=RR.stage(n), W=RR.WEEKS[n];
  if(!S){ return viewHub(); }
  const page=h("section",{class:"stage"});
  /* plain photo hero: no SVG scene, no particles, no parallax (those caused flicker) */
  const hero=h("div",{class:"scene hero plain"});
  if(n===1&&W) hero.append(h("button",{class:"glint-btn",id:"shadowGlint",type:"button","aria-label":"A silver glint on the ridge — tap to investigate"},h("i")));
  const heroWrap=h("div",{class:"hero-wrap"},hero,
    h("div",{class:"hero-title"},
      h("div",{class:"stone tablet"},h("small",{class:"stg-n"},"STAGE "+n+" · "+S.era.toUpperCase()),h("h1",{class:"gold-text"},S.title),h("p",{},S.place))),
    h("button",{class:"scroll-hint","aria-label":"Scroll to the mission",onclick:()=>RR.$(".stage-body",page).scrollIntoView({behavior:"smooth"})},"▾"));
  RR.slot(hero,"W"+String(n).padStart(2,"0")+"-HERO",{fit:"cover",pos:"center bottom"}).then(ok=>{ if(ok&&hero._stop){ hero.classList.add("lite"); hero._stop(); const c=hero.querySelector("canvas.fx"); if(c) c.remove(); if(hero._fx) hero._fx.stop(); } });
  onLeave(()=>hero._destroy&&hero._destroy());
  const glint=hero.querySelector("#shadowGlint");
  if(glint && W){ const open=()=>{ RR.sfx.whoosh(); prog.patch("w"+n,{clue:true}); RR.modal(h("div",{class:"clue"},h("div",{class:"clue-icon",html:A.icon("star",60,"#C5BDD1",3)}),h("p",{class:"big"},W.story.shadowClue),h("p",{class:"small"},"Shirin has pinned this to your Caravan Log. Who is the Shadow Courier? Keep watching…")),{title:"A silver glint…"}); };
    glint.addEventListener("click",open); glint.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){e.preventDefault();open();} }); }

  const body=h("div",{class:"stage-body"});
  if(!W){ body.append(h("div",{class:"parchment locked-note rise"},h("h2",{},"The road isn’t open this far yet"),h("p",{},"Stage "+n+" unlocks later in the term. Check the Royal Road map and the Stage "+(n-1)+" story first!"),h("button",{class:"btn",onclick:()=>nav("#/")},"Back to the map"))); page.append(heroWrap,body); app.append(page); return; }

  // Shirin briefing
  const bTxt=h("p",{class:"brief-text"},W.story.briefingFull); let easy=false;
  const briefing=h("div",{class:"briefing parchment torn rise"},
    h("div",{class:"shirin"},h("div",{class:"medallion",html:`<span class="med-art">${A.icon("scroll",54,"#3A1A22",3)}</span>`}),h("b",{},"Shirin the Scribe")),
    h("div",{class:"brief-body"},h("h3",{},"The Briefing"),bTxt,
      h("div",{class:"btn-row"},h("button",{class:"btn small ghost",type:"button",onclick:()=>RR.speak(easy?W.story.briefing:W.story.briefingFull)},"🔊 Read aloud"),
        h("button",{class:"btn small ghost",type:"button",onclick:e=>{ easy=!easy; bTxt.textContent=easy?W.story.briefing:W.story.briefingFull; e.currentTarget.textContent=easy?"📖 Full story":"✨ Easy read"; }},"✨ Easy read"))));
  RR.slot(briefing.querySelector(".medallion"),"CHAR-01-face",{fit:"cover",pos:"center top"});
  observeOnce(briefing,()=>{ if(RR.motionOK()) inkReveal(bTxt,{step:.025}); });

  // fragment
  const fr=A.sealGeometry(60,7).frags[n-1];
  const frag=h("div",{class:"fragment-card stone rise"},
    h("div",{class:"frag-art",html:`<svg viewBox="-70 -70 140 140" width="110"><defs>${A.sealDefs("fg")}</defs><circle r="66" fill="url(#fgGlow)" class="pulse"/><path d="${A.sealFragmentPath(fr)}" fill="url(#fgGold)" stroke="#39290E" stroke-width="2" stroke-linejoin="round" transform="translate(${(-fr.centroid[0]).toFixed(1)} ${(-fr.centroid[1]).toFixed(1)}) scale(1.7)" class="frag-shine"/></svg>`}),
    h("div",{},h("small",{},"FRAGMENT "+n),h("h3",{},W.fragment),h("p",{},"Win the Stage on Friday to claim it — if the Shadow Courier hasn’t beaten you to it…")));

  // day tiles
  const tiles=h("div",{class:"day-tiles"});
  RR.DAYS.forEach((d,i)=>{
    const L=W.days[d.id]; const P=prog.get(L.id); const done=!!P.stamped; const col=subjectTheme[d.id];
    const t=h("a",{class:"day-tile rise"+(done?" done":""),href:`#/stage/${n}/${d.id}`,style:{"--c":col,transitionDelay:(i*80)+"ms"},onclick:e=>{ e.preventDefault(); RR.sfx.pop(); nav(`#/stage/${n}/${d.id}`); }},
      h("div",{class:"dt-art"},h("div",{class:"dt-icon",html:A.icon(d.icon,76,"#EAE0C5",2.6)}),done&&h("div",{class:"dt-stamp"},"✓")),
      h("div",{class:"dt-text"},h("small",{},RR.dayName(d)),h("h4",{},L.title.replace(/^SHOWDOWN: /,"")),h("span",{class:"chip"},d.subject==="Showdown"?"Live team quiz":d.subject),h("span",{class:"chip teal"},d.id==="fri"?"3 victory paths":"3 paths")));
    RR.slot(t.querySelector(".dt-art"),`W${String(n).padStart(2,"0")}-${d.id.toUpperCase()}`,{fit:"cover"});
    tiles.append(t);
  });

  const threads=h("div",{class:"threads parchment rise"},h("h4",{},"Bible threads this week"),h("div",{class:"chips"},S.bible.split(" · ").map(x=>h("span",{class:"chip"},x))));
  const shadow=h("div",{class:"shadow-note stone rise"},h("small",{},"WHISPERED ON THE ROAD"),h("p",{},"“"+W.story.shadowCourier+"”"),h("p",{class:"hint"},"Tip: look for something silver glinting on the ridge in the scene above…"));
  RR.slot(shadow,"CHAR-04-face",{fit:"cover",pos:"center"}); RR.assetUrl("CHAR-04-face").then(u=>{ if(u) shadow.classList.add("has-face"); });
  body.append(h("div",{class:"stage-top"},briefing,frag),h("h2",{class:"sect-title gold-text rise"},"Your Week on the Road"),tiles,h("div",{class:"stage-bottom"},threads,shadow));
  page.append(heroWrap,body); app.append(page);
}

/* ===================================================================
   MISSION page (one lesson)
   =================================================================== */
function viewMission(n,day){
  const W=RR.WEEKS[n]; if(!W||!W.days[day]) return viewStage(n);
  const L=W.days[day], D=RR.DAYS.find(d=>d.id===day), theme=subjectTheme[day], S=RR.stage(n);
  const P=prog.get(L.id);
  const page=h("article",{class:"mission",style:{"--theme":theme}});
  document.body.style.setProperty("--theme",theme);
  /* banner */
  const banner=h("header",{class:"m-banner"},
    h("div",{class:"mb-art"},h("div",{class:"mb-icon",html:A.icon(D.icon,220,"rgba(249,239,202,.22)",1.6)})),
    h("div",{class:"mb-text"},h("small",{class:"mb-day"},RR.dayName(D)+" · "+L.subject),h("h1",{},L.title),h("p",{},L.tagline),
      h("div",{class:"chips"},h("span",{class:"chip"},"60 min"),h("span",{class:"chip teal"},"Stage "+n+": "+S.title))));
  RR.slot(banner.querySelector(".mb-art"),`W${String(n).padStart(2,"0")}-${day.toUpperCase()}`,{fit:"cover"});
  /* stepper */
  const steps=[["quest","Quest"],["dispatch","Dispatch"],["discovery","Discovery"],["path",day==="fri"?"Victory Lap":"Choose Your Path"],["fire","Council Fire"]];
  if(day==="fri") steps.splice(1,0,["showdown","Showdown"]);
  const stepper=h("nav",{class:"stepper no-print","aria-label":"Lesson sections"},steps.map(([id,t],i)=>h("a",{href:"#sec-"+id,"data-s":id,onclick:e=>{ e.preventDefault(); RR.$("#sec-"+id).scrollIntoView({behavior:"smooth",block:"start"}); }},h("i",{},i+1),h("span",{},t))));
  page.append(banner,stepper);

  /* QUEST */
  const sc=P.sc||[];
  const quest=h("section",{id:"sec-quest",class:"sect quest rise"},
    h("div",{class:"parchment torn"},h("h2",{},"Today’s Quest"),
      h("p",{class:"li"},h("b",{},"Learning intention: "),L.li),
      h("h4",{},"I can… (tick when you can!)"),
      h("ul",{class:"sc-list"},L.sc.map((s,i)=>h("li",{},h("label",{},h("input",{type:"checkbox",checked:!!sc[i],onchange:e=>{ const o=prog.get(L.id); o.sc=o.sc||[]; o.sc[i]=e.target.checked; prog.set(L.id,o); if(e.target.checked) RR.sfx.coin(); }}),h("span",{},s))))),
      h("details",{class:"vocab-d"},h("summary",{},"Key words"),h("dl",{},L.vocab&&L.vocab.map(v=>[h("dt",{},v.w),h("dd",{},v.d)])))));
  page.append(quest);

  /* FRIDAY: creed + showdown card first */
  if(day==="fri"){
    const creed=h("textarea",{class:"creed",rows:3,placeholder:"Our Caravan will always…",value:"","aria-label":"Caravan Creed",oninput:e=>prog.patch(L.id,{creed:e.target.value})}); creed.value=P.creed||"";
    page.append(h("section",{id:"sec-dispatch",class:"sect dispatch rise"},dispatchBlock(L)),
      h("section",{class:"sect rise creed-sect"},h("div",{class:"parchment"},h("h2",{},"📜 Your Caravan Creed"),h("p",{},L.creedPrompt),h("div",{class:"chips"},L.creedStarters.map(s=>h("button",{class:"chip",type:"button",onclick:()=>{ creed.value=(creed.value?creed.value+" ":"")+s+" "; creed.focus(); prog.patch(L.id,{creed:creed.value}); }},s))),creed)),
      h("section",{id:"sec-showdown",class:"sect rise"},showdownCard(L)));
  } else {
    page.append(h("section",{id:"sec-dispatch",class:"sect dispatch rise"},dispatchBlock(L)));
  }

  /* DISCOVERY */
  if(L.discovery){
    const disc=h("section",{id:"sec-discovery",class:"sect discovery"},h("h2",{class:"sect-title gold-text rise"},"Discovery"),h("p",{class:"lead rise"},L.discovery.intro),
      h("div",{class:"d-cards"},L.discovery.cards.map((c,i)=>h("article",{class:"d-card parchment rise",style:{transitionDelay:(i*70)+"ms"}},h("div",{class:"d-ico",html:A.icon(c.icon||"scroll",40,"#61361D",3)}),h("div",{},h("h4",{},c.title),h("p",{html:c.body}))))));
    (L.widgets||[]).forEach(w=>{ const node=RR.buildWidget?RR.buildWidget(w,L):(RR.widgets[w]&&RR.widgets[w](L)); if(node){ const wd=h("div",{class:"rise"}); wd.append(node); disc.append(wd); } });
    page.append(disc);
  } else page.append(h("div",{id:"sec-discovery"}));

  /* PATHS */
  page.append(pathsBlock(L,day));
  /* COUNCIL FIRE */
  page.append(fireBlock(L,n,day));
  /* nav */
  const idx=RR.DAYS.findIndex(d=>d.id===day), next=RR.DAYS[idx+1], prev=RR.DAYS[idx-1];
  page.append(h("footer",{class:"m-nav no-print"},
    prev?h("a",{class:"btn ghost",href:`#/stage/${n}/${prev.id}`,onclick:e=>{e.preventDefault();nav(`#/stage/${n}/${prev.id}`);}},"◀ "+RR.dayName(prev)):h("span"),
    h("a",{class:"btn ghost",href:`#/stage/${n}`,onclick:e=>{e.preventDefault();nav(`#/stage/${n}`);}},"Stage map"),
    next?h("a",{class:"btn",href:`#/stage/${n}/${next.id}`,onclick:e=>{e.preventDefault();nav(`#/stage/${n}/${next.id}`);}},RR.dayName(next)+" ▶"):h("a",{class:"btn",href:"#/",onclick:e=>{e.preventDefault();nav("#/");}},"Back to the Road")));
  app.append(page);
  /* scroll spy */
  const links=RR.$$("[data-s]",stepper); const secs=steps.map(([id])=>RR.$("#sec-"+id)).filter(Boolean);
  const spy=()=>{ let cur=secs[0]; secs.forEach(s=>{ if(s.getBoundingClientRect().top<window.innerHeight*.4) cur=s; }); links.forEach(l=>l.classList.toggle("on","sec-"+l.dataset.s===cur.id)); };
  addEventListener("scroll",spy,{passive:true}); onLeave(()=>removeEventListener("scroll",spy)); spy();
  if(day==="wed") RR.collectedHint&&0;
}

function dispatchBlock(L){
  const D=L.dispatch; let easy=false;
  const txt=h("p",{class:"scroll-text"},D.story);
  const scroll=h("div",{class:"papyrus"},h("div",{class:"roll top"}),h("div",{class:"sheet parchment"},h("h2",{},"The Dispatch: ",h("em",{},D.title)),txt,
    h("div",{class:"btn-row no-print"},h("button",{class:"btn small ghost",type:"button",onclick:()=>RR.speak(easy?D.easy:D.story)},"🔊 Read aloud"),
      h("button",{class:"btn small ghost",type:"button",onclick:e=>{ easy=!easy; txt.textContent=easy?D.easy:D.story; e.currentTarget.textContent=easy?"📖 Full story":"✨ Easy read"; }},"✨ Easy read"))),h("div",{class:"roll bottom"}));
  observeOnce(scroll,()=>{ scroll.classList.add("open"); if(RR.motionOK()) inkReveal(txt,{delay:.7,step:.03}); RR.sfx.whoosh(); });
  const wrap=h("div",{class:"dispatch-wrap"},h("div",{class:"shirin"},h("div",{class:"medallion",html:`<span class="med-art">${A.icon("scroll",54,"#3A1A22",3)}</span>`}),h("b",{},"Shirin")),scroll);
  RR.slot(wrap.querySelector(".medallion"),"CHAR-01-face",{fit:"cover",pos:"center top"});
  return wrap;
}

function showdownCard(L){
  const url=new URL("play.html",location.href).href.replace(/index\.html$/,"");
  return h("div",{class:"showdown-card stone"},
    h("div",{class:"sd-art",html:A.icon("horn",120,"#D0B475",2.4)}),
    h("div",{},h("small",{},"FRIDAY SHOWDOWN"),h("h2",{class:"gold-text"},L.title.replace("SHOWDOWN: ","")),
      h("ol",{class:"sd-steps"},h("li",{},"Write your Caravan Creed (above)."),h("li",{},"Grab a phone, tablet or Chromebook."),h("li",{},"Scan the QR code on the big screen — or open the join page and type the game PIN."),h("li",{},"Pick your Caravan, answer fast and think carefully!")),
      h("div",{class:"btn-row"},h("a",{class:"btn",href:"play.html"},"Join the Showdown"),h("a",{class:"btn ghost",href:"play.html?practice=1"},"Practice mode (this device)"))));
}

/* ---------- CHOOSE YOUR PATH ---------- */
function pathsBlock(L,day){
  const P=prog.get(L.id); const sec=h("section",{id:"sec-path",class:"sect paths"});
  const panel=h("div",{class:"path-panel parchment",hidden:true,"aria-live":"polite"});
  const cards=h("div",{class:"path-cards"},L.paths.map((p,i)=>{
    const done=P.finished&&P.finished[p.id];
    const c=h("button",{class:"path-card rise"+(done?" done":""),type:"button","data-p":p.id,style:{transitionDelay:(i*90)+"ms"},"aria-pressed":"false"},
      h("div",{class:"pc-letter"},p.id),h("div",{class:"pc-ico",html:A.icon(p.icon||"scroll",52,"#EAE0C5",2.6)}),h("h3",{},p.name),h("p",{},p.brief),h("span",{class:"pc-done"},"✓ Complete"),h("span",{class:"pc-cta"},"Open this path →"));
    c.addEventListener("click",()=>{ RR.sfx.stamp(); RR.$$(".path-card",cards).forEach(x=>{x.classList.remove("on");x.setAttribute("aria-pressed","false");}); c.classList.add("on"); c.setAttribute("aria-pressed","true"); openPath(p); prog.patch(L.id,{chosen:p.id}); panel.scrollIntoView({behavior:"smooth",block:"nearest"}); });
    return c; }));
  function openPath(p){
    panel.hidden=false; panel.innerHTML=""; const O=prog.get(L.id); const ck=(O.checks&&O.checks[p.id])||[]; const lv=(O.level&&O.level[p.id])||"standard";
    const levels=[["supported","Supported"],["standard","Standard"],["extended","Extended"]];
    const lvBody=h("div",{class:"lv-body"},p.diff[lv]);
    const lvTabs=h("div",{class:"lv-tabs",role:"tablist"},levels.map(([k,t])=>h("button",{class:"btn small"+(k===lv?"":" ghost"),type:"button",role:"tab","aria-selected":k===lv,onclick:e=>{ RR.$$(".lv-tabs button",panel).forEach(b=>{b.classList.add("ghost");b.setAttribute("aria-selected","false");}); e.currentTarget.classList.remove("ghost"); e.currentTarget.setAttribute("aria-selected","true"); lvBody.textContent=p.diff[k]; const o=prog.get(L.id); o.level=o.level||{}; o.level[p.id]=k; prog.set(L.id,o); }},t)));
    const list=h("ul",{class:"checklist"},p.checklist.map((c,i)=>h("li",{},h("label",{},h("input",{type:"checkbox",checked:!!ck[i],onchange:e=>{ const o=prog.get(L.id); o.checks=o.checks||{}; o.checks[p.id]=o.checks[p.id]||[]; o.checks[p.id][i]=e.target.checked; prog.set(L.id,o); if(e.target.checked){ RR.sfx.coin(); } upd(); }}),h("span",{},c)))));
    const bar=h("div",{class:"cl-bar"},h("i",{})); const fin=h("button",{class:"btn teal",type:"button",onclick:()=>{ const o=prog.get(L.id); o.finished=o.finished||{}; o.finished[p.id]=true; prog.set(L.id,o); RR.$(`.path-card[data-p="${p.id}"]`,cards).classList.add("done"); RR.sfx.stamp(); RR.coinRain({n:14,z:9000}); RR.toast("Path "+p.id+" complete — show your teacher! 🏺"); }},"✓ I finished this path");
    function upd(){ const o=prog.get(L.id); const arr=(o.checks&&o.checks[p.id])||[]; const k=p.checklist.filter((_,i)=>arr[i]).length; bar.firstChild.style.width=(k/p.checklist.length*100)+"%"; }
    panel.append(h("div",{class:"pp-head"},h("span",{class:"pc-letter small"},p.id),h("h3",{},p.name)),
      h("p",{class:"pp-brief"},p.brief),
      h("div",{class:"pp-cols"},h("div",{},h("h4",{},"My checklist"),bar,list),
        h("div",{},h("h4",{},"Help & scaffold"),h("div",{class:"scaffold",html:p.scaffold}),h("h4",{},"Choose your level"),lvTabs,lvBody)),
      h("div",{class:"btn-row no-print"},fin,h("button",{class:"btn ghost",type:"button",onclick:()=>printNode(`<h1>${RR.esc(p.name)}</h1><p><b>${RR.esc(L.title)}</b></p><p>${p.brief}</p><div class="box"><h3>Checklist</h3><ul style="list-style:none;padding:0">${p.checklist.map(c=>`<li><span class="chk"></span>${RR.esc(c)}</li>`).join("")}</ul></div><div class="box"><h3>Scaffold</h3><p>${p.scaffold}</p></div><div class="box"><h3>Levels</h3><p><b>Supported:</b> ${p.diff.supported}</p><p><b>Standard:</b> ${p.diff.standard}</p><p><b>Extended:</b> ${p.diff.extended}</p></div><p>Name: ______________________ &nbsp; Caravan: ______________</p>`,p.name)},"🖨 Print scaffold"))); upd();
  }
  sec.append(h("h2",{class:"sect-title gold-text rise"},day==="fri"?"Victory Lap — Choose Your Path":"Choose Your Path"),
    h("p",{class:"lead rise"},day==="fri"?"The Showdown is over — now show what you know. Pick ONE path.":"You have about 25 minutes. Pick ONE path to show — and lock in — what you have learned."),
    cards,panel);
  if(P.chosen){ setTimeout(()=>{ const c=RR.$(`.path-card[data-p="${P.chosen}"]`,cards); if(c){ c.classList.add("on"); c.setAttribute("aria-pressed","true"); openPath(L.paths.find(x=>x.id===P.chosen)); } },0); }
  return sec;
}

/* ---------- COUNCIL FIRE (See · Wonder · Weigh · Respond) ---------- */
function fireBlock(L,n,day){
  const C=L.councilFire, P=prog.get(L.id); const seen=new Set();
  const sec=h("section",{id:"sec-fire",class:"sect fire"}); const cv=h("canvas",{class:"fire-fx"});
  const content=h("div",{class:"fire-card parchment",role:"status","aria-live":"polite"});
  const moves=[
   ["see","SEE","Hear the Word",()=>h("div",{},h("div",{class:"chips"},C.see.refs.map(r=>h("span",{class:"chip big"},"📖 "+r))),h("p",{class:"lead"},C.see.text),h("p",{class:"small"},"Read the full passage from your own Bible. This is a paraphrase to help you."))],
   ["wonder","WONDER","What does it show?",()=>h("div",{},h("p",{class:"lead"},C.wonder))],
   ["weigh","WEIGH","Check it against the evidence",()=>h("div",{},h("p",{class:"lead"},C.weigh))],
   ["respond","RESPOND","What will you do?",()=>{ const ta=h("textarea",{rows:4,placeholder:"Write your response, thank-you or prayer here…","aria-label":"My response",oninput:e=>prog.patch(L.id,{respond:e.target.value})}); ta.value=P.respond||""; return h("div",{},h("p",{class:"lead"},C.respond),ta,h("p",{class:"small"},"Saved to your Caravan Log on this device.")); }]
  ];
  const stones=h("div",{class:"fire-stones",role:"tablist"},moves.map(([id,t,sub,build],i)=>{
    const b=h("button",{class:"stone-btn",type:"button",role:"tab","aria-selected":"false"},h("span",{class:"flame",html:A.icon("flame",32,"#CE995A",2.6)}),h("b",{},t),h("small",{},sub));
    b.addEventListener("click",()=>{ RR.$$(".stone-btn",stones).forEach(x=>{x.classList.remove("on");x.setAttribute("aria-selected","false");}); b.classList.add("on"); b.setAttribute("aria-selected","true"); b.classList.add("lit"); seen.add(id); RR.sfx.crackle();
      content.innerHTML=""; content.append(h("h3",{},t+" — "+sub),build()); content.classList.remove("pop"); void content.offsetWidth; content.classList.add("pop"); if(seen.size===4) stampBtn.disabled=false; });
    return b; }));
  const stamped=!!P.stamped;
  const stampBtn=h("button",{class:"wax"+(stamped?" stamped":""),type:"button",disabled:!stamped&&true,"aria-label":"Stamp my mission as complete",style:{"--wax":subjectTheme[day]},onclick:e=>{ const b=e.currentTarget; b.classList.remove("stamped"); void b.offsetWidth; b.classList.add("stamped"); prog.patch(L.id,{stamped:true}); RR.sfx.stamp(); RR.coinRain({n:30}); document.body.classList.add("thump"); setTimeout(()=>document.body.classList.remove("thump"),400); RR.toast("Mission stamped! Show your teacher for Darics. 🪙"); const sp=b.parentNode.querySelector("p"); if(sp) sp.textContent="Mission stamped ✔"; }},"STAMP\nMISSION");
  stampBtn.textContent=""; stampBtn.append(h("span",{html:"STAMP<br>MISSION"}));
  const verses=h("div",{class:"chips"},(C.verses||[]).map(v=>h("span",{class:"chip big"},"📖 "+v)));
  sec.append(h("div",{class:"fire-bg"},cv),h("div",{class:"fire-inner"},h("h2",{class:"sect-title gold-text rise"},"Council Fire"),h("p",{class:"lead rise"},"Gather round the fire. Four moves: see, wonder, weigh, respond."),stones,content,
    h("div",{class:"stamp-row"},stampBtn,h("p",{},stamped?"Mission stamped ✔":"Visit all four stones to unlock your stamp."))));
  setTimeout(()=>{ if(cv.isConnected){ const fx=RR.particles(cv,"embers",{intensity:.5}); onLeave(()=>fx.stop()); } },50);
  return sec;
}

/* ===================================================================
   CARAVAN LOG
   =================================================================== */
function viewLog(){
  const page=h("section",{class:"log-view sect"},h("h1",{class:"gold-text"},"Caravan Log"),h("p",{class:"lead"},"Your reflections live here — saved on this device only."));
  Object.keys(RR.WEEKS).forEach(n=>{
    const W=RR.WEEKS[n]; const box=h("div",{class:"parchment log-week rise"},h("h2",{},"Stage "+n+": "+W.title));
    const wk=prog.get("w"+n); if(wk.clue) box.append(h("p",{class:"log-clue"},"🔎 Clue found: ",W.story.shadowClue));
    RR.DAYS.forEach(d=>{ const L=W.days[d.id]; const P=prog.get(L.id); const rows=[];
      if(d.id==="fri"&&P.creed) rows.push(h("p",{},h("b",{},"Caravan Creed: "),P.creed));
      if(P.respond) rows.push(h("p",{},h("b",{},"My response: "),P.respond));
      const note=h("textarea",{rows:2,placeholder:"Anything else I want to remember…","aria-label":"Notes for "+L.title,oninput:e=>prog.patch(L.id,{note:e.target.value})}); note.value=P.note||"";
      box.append(h("div",{class:"log-day"},h("h4",{},RR.dayName(d)+" — "+L.title.replace("SHOWDOWN: ","")),P.stamped?h("span",{class:"chip teal"},"✓ stamped"):h("span",{class:"chip"},"not stamped"),rows,note)); });
    page.append(box);
  });
  page.append(h("div",{class:"btn-row"},h("button",{class:"btn ghost",type:"button",onclick:()=>{ let t="CARAVAN LOG\n\n"; Object.keys(RR.WEEKS).forEach(n=>{ const W=RR.WEEKS[n]; t+=`STAGE ${n}: ${W.title}\n`; RR.DAYS.forEach(d=>{ const L=W.days[d.id], P=prog.get(L.id); t+=`\n${d.en} — ${L.title}\n`; if(P.creed) t+="Creed: "+P.creed+"\n"; if(P.respond) t+="Response: "+P.respond+"\n"; if(P.note) t+="Notes: "+P.note+"\n"; }); t+="\n"; });
      const a=h("a",{href:URL.createObjectURL(new Blob([t],{type:"text/plain"})),download:"caravan-log.txt"}); document.body.append(a); a.click(); a.remove(); }},"⬇ Download my log"),h("button",{class:"btn ghost",type:"button",onclick:()=>window.print()},"🖨 Print")));
  app.append(page);
}

/* ===================================================================
   ANIMAL CARDS
   =================================================================== */
function viewCards(){
  const page=h("section",{class:"cards-view sect"},h("h1",{class:"gold-text"},"Animal Card Collection"),h("p",{class:"lead"},"Collect new wildlife cards every week. Tap a card to collect it, tap again to flip it, and tilt it to see the shine."));
  const grid=h("div",{class:"cards-row big"},RR.ANIMALS.map(a=>RR.animalCard(a)));
  const locked=h("div",{class:"cards-locked"},h("p",{},"✨ More cards unlock each week as the race moves along the Royal Road — 18 in all!"));
  const have=RR.cardsCollected().length;
  page.append(h("p",{class:"count"},h("b",{},have+" / "+RR.ANIMALS.length)," collected so far"),grid,locked); app.append(page);
}

/* ===================================================================
   TROPHY ROOM
   =================================================================== */
async function viewTrophies(){
  const page=h("section",{class:"trophy-view sect"},h("h1",{class:"gold-text"},"Trophy Room"));
  const art=h("div",{class:"tr-art"}); page.append(art); [["CORE-10","Golden Daric Trophy"],["CORE-11","Medals of the Royal Road"],["CORE-07","The Seal of the Kings"]].forEach(([id,alt])=>RR.assetUrl(id).then(u=>{ if(u) art.append(h("img",{src:u,alt})); }));
  const results=await RR.Class.results().catch(()=>({})); const keys=Object.keys(results).sort();
  if(!keys.length){
    page.append(h("div",{class:"parchment empty"},h("div",{class:"gandom",dataset:{face:"CHAR-03-face"},html:`<svg viewBox="0 0 190 135" width="150">${A.camel("#c79a5a")}<circle cx="164" cy="27" r="2.2" fill="#211812"/></svg>`}),h("h3",{},"No Showdowns yet!"),h("p",{},"Gandom has polished the podium. Play the Friday Showdown and the champions will appear here."),h("button",{class:"btn",onclick:()=>nav("#/")},"Back to the Road")));
  } else {
    keys.forEach(k=>{ const r=results[k]; const wk=+k.slice(1);
      const teams=Object.entries(r.teamScores||{}).sort((a,b)=>b[1].score-a[1].score); const players=(r.players||[]).slice(0,3);
      page.append(h("div",{class:"parchment tw rise"},h("h2",{},"Stage "+wk+": "+RR.stage(wk).title),
        h("div",{class:"tw-cols"},h("div",{},h("h4",{},"Team podium"),h("ol",{},teams.slice(0,3).map(([id,t],i)=>h("li",{},RR.medal(i)," "+RR.team(id).name+" — "+Math.round(t.score))))),
          h("div",{},h("h4",{},"Individual podium"),h("ol",{},players.map((p,i)=>h("li",{},RR.medal(i)," "+p.name+" — "+Math.round(p.score))))))));
    });
  }
  app.append(page);
}

/* ===================================================================
   SETTINGS panel + top bar wiring
   =================================================================== */
function buildSettings(){
  const panel=RR.$("#settings"); if(!panel||panel.dataset.built) return; panel.dataset.built="1";
  const row=(label,key,desc)=>h("label",{class:"set-row"},h("span",{},h("b",{},label),h("small",{},desc)),h("input",{type:"checkbox",checked:!!RR.settings[key],onchange:e=>{ RR.setSetting(key,e.target.checked); if(key==="sound"&&e.target.checked) RR.sfx.coin(); syncSound(); }}));
  panel.append(h("h3",{},"Settings"),
    row("Sound","sound","Drums, coins and fanfares (off by default)"),
    row("Reduce motion","reduceMotion","Fewer animations and parallax"),
    row("Dyslexia-friendly font","dyslexia","Lexend font with extra spacing"),
    row("Te reo Māori layer","teReo","Show Māori day names (Rāhina, Rātū…)"),
    h("div",{class:"set-row"},h("span",{},h("b",{},"Text size"),h("small",{},"Make everything bigger or smaller")),h("span",{class:"btn-row"},
      h("button",{class:"btn small ghost",type:"button","aria-label":"Smaller text",onclick:()=>RR.setSetting("textSize",Math.max(.85,+(RR.settings.textSize-.1).toFixed(2)))},"A−"),
      h("button",{class:"btn small ghost",type:"button","aria-label":"Larger text",onclick:()=>RR.setSetting("textSize",Math.min(1.5,+(RR.settings.textSize+.1).toFixed(2)))},"A+"))),
    h("div",{class:"btn-row"},h("button",{class:"btn small ghost",type:"button",onclick:()=>{ closeSettings(); RR.cinematic.play(); }},"▶ Replay the story"),h("button",{class:"btn small ghost",type:"button",onclick:closeSettings},"Close")));
}
function closeSettings(){ const p=RR.$("#settings"); p.classList.remove("open"); }
function syncSound(){ const b=RR.$("#btnSound"); if(b){ b.innerHTML=A.icon(RR.settings.sound?"speaker":"mute",26,"currentColor",3); b.setAttribute("aria-pressed",RR.settings.sound); b.title=RR.settings.sound?"Sound on":"Sound off"; } }
function wireBar(){
  buildSettings();
  const go=(id,hash)=>{ const b=RR.$(id); if(b) b.addEventListener("click",e=>{ e.preventDefault(); nav(hash); }); };
  go("#navHome","#/"); go("#navLog","#/log"); go("#navCards","#/cards"); go("#navTrophy","#/trophies");
  RR.$("#btnSettings").addEventListener("click",()=>RR.$("#settings").classList.toggle("open"));
  RR.$("#btnSound").addEventListener("click",()=>{ RR.setSetting("sound",!RR.settings.sound); if(RR.settings.sound) RR.sfx.coin(); syncSound(); RR.$$("#settings input[type=checkbox]")[0].checked=RR.settings.sound; });
  syncSound();
  RR.$("#navHome").innerHTML=A.icon("home",24,"currentColor",3)+"<span>Map</span>";
  RR.$("#navLog").innerHTML=A.icon("book",24,"currentColor",3)+"<span>Log</span>";
  RR.$("#navCards").innerHTML=A.icon("paw",24,"currentColor",3)+"<span>Cards</span>";
  RR.$("#navTrophy").innerHTML=A.icon("trophy",24,"currentColor",3)+"<span>Trophies</span>";
  RR.$("#btnSettings").innerHTML=A.icon("gear",26,"currentColor",3);
  document.addEventListener("click",e=>{ const s=RR.$("#settings"); if(s.classList.contains("open") && !s.contains(e.target) && !RR.$("#btnSettings").contains(e.target)) s.classList.remove("open"); });
}

/* ---------- boot ---------- */
async function boot(){
  RR.applySettings(); wireBar();
  await render();
  if(!RR.ls.get("seenIntro",false) && !parse().length && !new URLSearchParams(location.search).has("nointro")) RR.cinematic.play();
  else if(new URLSearchParams(location.search).has("intro")){ try{ history.replaceState(null,"",location.pathname+location.hash); }catch(e){} RR.cinematic.play(); }
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",boot); else boot();
})();
