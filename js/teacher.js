/* ===================================================================
   TEACHER AREA — plans (ERO-ready), Showdown launch, class & Darics,
   results, image checklist, resources, settings.
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, h=RR.h, SD=RR.SD, Store=RR.Store, A=RR.art;
const root=RR.$("#tRoot"); let WEEK=RR.activeWeek();
const W=()=>RR.WEEKS[WEEK];
const DAYS=RR.DAYS||[{id:"mon",en:"Monday",mi:"Rāhina",subject:"History"},{id:"tue",en:"Tuesday",mi:"Rātū",subject:"Geography"},{id:"wed",en:"Wednesday",mi:"Rāapa",subject:"Science"},{id:"thu",en:"Thursday",mi:"Rāpare",subject:"Art"},{id:"fri",en:"Friday",mi:"Rāmere",subject:"Showdown"}];
const dayLabel=d=>d.en+" · "+d.mi;
const NZ_NOTE="NZC achievement-objective wording on these plans is paraphrased from the Level 3 learning area statements. Before an ERO or moderation visit, confirm the exact wording on Tāhūrangi (tahurangi.education.govt.nz) and in your school’s curriculum documents.";

/* ---------- gate ---------- */
function gate(msg){
  const inp=h("input",{type:"password",class:"gate-in",placeholder:"Teacher PIN","aria-label":"Teacher PIN",autocomplete:"off"});
  const err=h("p",{class:"err",role:"alert"},msg||"");
  const go=async()=>{ if(await RR.pin.check(inp.value)) shell(); else { err.textContent="That PIN isn’t right. (The starting PIN is in js/config.js.)"; RR.sfx.wrong(); } };
  root.innerHTML=""; root.append(h("section",{class:"gate parchment"},h("div",{class:"gate-ico",html:A.icon("scroll",70,"#3A1A22",2.6)}),h("h1",{},"Teacher area"),h("p",{},"Lesson plans, class setup, Darics and results. Students never see this page."),inp,h("button",{class:"btn big",type:"button",onclick:go},"Enter"),err));
  inp.addEventListener("keydown",e=>{ if(e.key==="Enter") go(); }); inp.focus();
}

/* ---------- shell with tabs ---------- */
const TABS=[["overview","Week at a glance","🗺"],["plans","Lesson plans","📋"],["slides","Lesson slides","🎞"],["showdown","Friday Showdown","🏺"],["class","Class & Darics","🪙"],["results","Results","🏆"],["images","Images","🖼"],["resources","Resources","📎"],["settings","Setup & settings","⚙"]];
let curTab="overview";
function shell(){
  RR.$("#tLogout").hidden=false; RR.$("#tLogout").onclick=()=>{ RR.pin.logout(); location.reload(); };
  const side=h("nav",{class:"t-side no-print","aria-label":"Teacher sections"},TABS.map(([id,t,ic])=>h("button",{class:"t-tab"+(id===curTab?" on":""),type:"button","data-t":id,onclick:()=>show(id)},h("span",{},ic),t)));
  const sel=h("select",{class:"wk-sel","aria-label":"Choose week",onchange:e=>{ RR.setActiveWeek(e.target.value); location.reload(); }},RR.weeks().map(n=>h("option",{value:n,selected:n===WEEK},"Stage "+n+" · "+RR.WEEKS[n].title)));
  const tt=RR.$(".t-top"); if(tt&&!RR.$(".wk-sel",tt)) tt.insertBefore(sel,RR.$(".t-spacer",tt).nextSibling);
  const main=h("main",{class:"t-main",id:"tMain"});
  root.innerHTML=""; root.append(h("div",{class:"t-layout"},side,main));
  show((location.hash||"").replace("#","")||"overview");
}
function show(id){
  if(!TABS.find(t=>t[0]===id)) id="overview"; curTab=id; history.replaceState(null,"","#"+id);
  RR.$$(".t-tab").forEach(b=>b.classList.toggle("on",b.dataset.t===id));
  const m=RR.$("#tMain"); m.innerHTML=""; window.scrollTo(0,0);
  ({overview,plans,slides,showdown,classTab,results,images,resources,settings})[id==="class"?"classTab":id](m);
}
const panel=(title,...kids)=>h("section",{class:"panel"},title&&h("h2",{},title),...kids);
const li=a=>h("ul",{},a.map(x=>h("li",{html:x})));
const printHtml=(node,title)=>{ document.body.classList.add("print-one"); RR.$$(".plan").forEach(p=>p.classList.toggle("print-me",p===node||node==="all")); const t=document.title; if(title) document.title=title; window.print(); setTimeout(()=>{ document.body.classList.remove("print-one"); document.title=t; },500); };

/* ===================================================================
   OVERVIEW
   =================================================================== */
function overview(m){
  const w=W(); const S=RR.stage(WEEK);
  m.append(h("div",{class:"t-hero"},h("small",{},"STAGE "+WEEK+" · WEEK "+WEEK+" OF 10"),h("h1",{},w.title),h("p",{},w.era+" · "+w.place)));
  m.append(panel("This week’s story",h("p",{},w.story.briefing),h("p",{},h("b",{},"Friday event: "),w.story.event),h("p",{},h("b",{},"Bible threads: "),S.bible)));
  const rows=DAYS.map(d=>{ const L=w.days[d.id]; return h("tr",{},h("td",{},h("b",{},dayLabel(d)),h("br"),h("small",{},L.subject)),h("td",{},L.title.replace("SHOWDOWN: ","Showdown: ")),h("td",{},L.li),h("td",{},(L.nzc||[]).map(c=>h("span",{class:"tag"},c))),h("td",{},L.assess&&L.assess.evidence||"")); });
  m.append(panel("Week at a glance",h("div",{class:"tbl-wrap"},h("table",{class:"grid"},h("thead",{},h("tr",{},["Day","Lesson","Learning intention","NZC","Assessment evidence"].map(x=>h("th",{},x)))),h("tbody",{},rows))),
    h("div",{class:"btn-row no-print"},h("button",{class:"btn",type:"button",onclick:()=>show("plans")},"Open the lesson plans"),h("button",{class:"btn ghost",type:"button",onclick:()=>window.print()},"🖨 Print this overview"))));
  m.append(panel("Materials to gather before Monday",li(w.materials)));
  m.append(panel("How each 60-minute lesson runs",h("div",{class:"flow"},[["10","Dispatch","Shirin’s story hooks the day and sets the learning intention."],["15","Discovery","Short, explicit teaching with interactives, maps and sources."],["25","Choose Your Path","Three projects (A/B/C), each with Supported · Standard · Extended."],["10","Council Fire","See · Wonder · Weigh · Respond — the Christian lens, then a wax-seal stamp."]].map(([min,t,d])=>h("div",{class:"flow-b"},h("b",{},min+"′"),h("h4",{},t),h("p",{},d)))),
    h("p",{class:"small"},"Friday swaps Discovery for the live Showdown, then a Victory Lap of three paths.")));
  m.append(panel("A note on curriculum wording",h("p",{},NZ_NOTE)));
}

/* ===================================================================
   LESSON SLIDES (present on TV / interactive whiteboard)
   =================================================================== */
function slides(m){
  const w=W(), PH=RR.SLIDE_PHASES;
  m.append(h("div",{class:"t-hero"},h("small",{},"STAGE "+WEEK+" · FOR THE TV OR INTERACTIVE WHITEBOARD"),h("h1",{},"Lesson slides"),h("p",{},"Every lesson is a story-led deck: Arrive → Discover → Discuss → Decide → Do → Wrap-up. Press ? inside a deck for the keys.")));
  const cards=DAYS.map(d=>{ const L=w.days[d.id], sl=RR.buildSlides(WEEK,d.id); const counts={}; sl.forEach(x=>counts[x.phase]=(counts[x.phase]||0)+1);
    return h("div",{class:"slcard"},
      h("div",{class:"slh"},h("small",{},dayLabel(d)+" · "+L.subject),h("h3",{},L.title.replace("SHOWDOWN: ","Showdown: ")),h("em",{},sl.length+" slides")),
      h("div",{class:"slph"},Object.keys(PH).filter(k=>counts[k]).map(k=>h("span",{style:{"--pc":PH[k].c}},PH[k].name+" · "+counts[k]))),
      h("div",{class:"btn-row"},h("a",{class:"btn small",href:"slides.html?w="+WEEK+"#/"+d.id+"/1",target:"_blank",rel:"noopener"},"▶ Present")));});
  m.append(panel("Choose a lesson",h("div",{class:"slgrid"},cards)));
  m.append(panel("How the slides run",
    li(["<b>Click, → or Space</b> to advance. Items appear one at a time so students think before the answer shows.","<b>Stop &amp; think</b> and <b>Situation</b> slides: pair-talk first, then reveal the Courier’s answer.","<b>T</b> starts a timer; Mission slides show a big countdown. <b>R</b> reads a slide aloud. <b>B</b> blanks the screen.","<b>N</b> shows your teacher notes for each slide; <b>G</b> jumps to any slide; <b>F</b> goes full screen.","Drop your ChatGPT images in <code>assets/</code> (e.g. <code>W01-MON.webp</code>) and they appear behind the cover and story slides automatically."])));
}

/* ===================================================================
   LESSON PLANS (A4 printable)
   =================================================================== */
function plans(m){
  let day="mon";
  const wrap=h("div",{class:"plan-wrap"});
  const tabs=h("div",{class:"day-tabs no-print"},DAYS.map(d=>h("button",{class:"btn small"+(d.id===day?"":" ghost"),type:"button","data-d":d.id,onclick:()=>{ day=d.id; draw(); }},d.en.slice(0,3)+" · "+d.subject)));
  const bar=h("div",{class:"btn-row no-print"},h("a",{class:"btn",href:"#slides",onclick:()=>{ setTimeout(()=>show("slides"),0); }},"🎞 Lesson slides"),h("button",{class:"btn ghost",type:"button",onclick:()=>printHtml(RR.$(".plan"),"Plan — "+W().days[day].title)},"🖨 Print this plan"),h("button",{class:"btn ghost",type:"button",onclick:()=>{ wrap.innerHTML=""; DAYS.forEach(d=>wrap.append(planNode(d.id))); printHtml("all","Week "+WEEK+" lesson plans"); draw(); }},"🖨 Print the whole week (5 plans)"));
  function draw(){ RR.$$("[data-d]",tabs).forEach(b=>{ b.classList.toggle("ghost",b.dataset.d!==day); }); wrap.innerHTML=""; wrap.append(planNode(day)); }
  m.append(h("div",{class:"panel no-print"},h("h2",{},"Lesson plans — Stage "+WEEK),h("p",{},"Each plan is one A4 page set: curriculum links, intention and success criteria, timed sequence, differentiation, Christian lens, assessment rubric, sensitivity notes and Teaching-as-Inquiry reflection. Print or save as PDF."),tabs,bar),wrap); draw();
}

function planNode(dayId){
  const w=W(), L=w.days[dayId], D=DAYS.find(d=>d.id===dayId); const fri=dayId==="fri";
  const S=RR.stage(WEEK);
  const nz=(L.nzc||[]).map(c=>{ const k=RR.NZC[c]||{}; return h("tr",{},h("td",{},h("b",{},c)),h("td",{},k.area||""),h("td",{},k.strand||""),h("td",{},k.text||"")); });
  const sec=(t,...k)=>h("section",{class:"p-sec"},h("h3",{},t),...k);
  const tbl=(head,rows)=>h("table",{class:"p-tbl"},h("thead",{},h("tr",{},head.map(x=>h("th",{},x)))),h("tbody",{},rows));
  const steps=(a)=>h("ol",{},(a||[]).map(x=>h("li",{html:x})));

  /* timed sequence */
  const seq=[];
  seq.push(["0–10","Dispatch (hook)",h("div",{},h("p",{},h("b",{},"Story: "),L.dispatch.title),steps(L.dispatch.teacher),L.dispatch.retrieval?h("p",{},h("b",{},"Retrieval: "),L.dispatch.retrieval):null),"Listen, respond, ask questions; start the Quest tick-list."]);
  if(!fri){
    seq.push(["10–25","Discovery (explicit teaching)",h("div",{},h("p",{},L.discovery.intro),steps(L.discovery.teacher),h("p",{class:"small"},"Interactives: "+(L.widgets||[]).join(", "))),"Explore cards and interactives; think–pair–share; model one sentence."]);
    seq.push(["25–50","Choose Your Path (practise & show learning)",h("div",{},h("p",{},"Students choose ONE of three paths (details below). Circulate: conference with 4–5 students against the success criteria; pull a teaching group for Supported tasks."),h("ul",{},L.paths.map(p=>h("li",{},h("b",{},"Path "+p.id+" — "+p.name+": "),p.brief)))),"Work independently or in pairs; tick the path checklist; self-assess against success criteria."]);
  } else {
    seq.push(["10–35","Showdown (live team quiz)",h("div",{},steps(["Open host.html on the data projector → choose Live (or Teacher-led) → the QR code and PIN appear.","Students scan the QR or open play.html, type the PIN, choose a name and Caravan. Wait for all to join (about 3 min).","Draw Fate cards; read each card aloud. Remind: it’s fate — not unfairness.","Run the 12 questions. At each ‘Teaching moment’ (Q"+(L.teachingMoments||[]).join(", Q")+") STOP and discuss before moving on. Boss round scores ×2.","At the podium, celebrate every Caravan before announcing the winners. Award Darics and download certificates."]),h("p",{class:"small"},"No devices? Use Teacher-led mode: read questions aloud, Caravans show A–D cards, tap the Caravans that were right.")),"Answer quickly but think carefully; cheer other teams; explain thinking when wrong."]);
    seq.push(["35–50","Victory Lap (choose a path)",h("div",{},h("p",{},"Students choose ONE path to consolidate and show their learning from the whole week."),h("ul",{},L.paths.map(p=>h("li",{},h("b",{},"Path "+p.id+" — "+p.name+": "),p.brief)))),"Work on chosen path; self-assess using the checklist."]);
  }
  seq.push([fri?"50–60":"50–60","Council Fire (Christian lens & reflection)",h("div",{},h("p",{},h("b",{},"SEE: "),L.councilFire.see.refs.join("; ")," — ",L.councilFire.see.text),h("p",{},h("b",{},"WONDER: "),L.councilFire.wonder),h("p",{},h("b",{},"WEIGH: "),L.councilFire.weigh),h("p",{},h("b",{},"RESPOND: "),L.councilFire.respond)),"Visit the four stones, discuss, write a response/prayer, stamp the mission."]);

  const paths=L.paths.map(p=>h("div",{class:"p-path"},h("h4",{},"Path "+p.id+" — "+p.name),h("p",{},p.brief),
    h("div",{class:"cols"},h("div",{},h("b",{},"Success checklist"),h("ul",{class:"chk"},p.checklist.map(c=>h("li",{},c)))),h("div",{},h("b",{},"Scaffold"),h("div",{class:"scaf",html:p.scaffold}))),
    tbl(["Supported","Standard","Extended"],[h("tr",{},h("td",{},p.diff.supported),h("td",{},p.diff.standard),h("td",{},p.diff.extended))])));

  const rub=(L.assess&&L.assess.rubric)||[];
  const cf=L.councilFire;
  const q=h("article",{class:"plan"},
    h("header",{class:"p-head"},h("div",{},h("small",{},"THE ROYAL ROAD RACE · STAGE "+WEEK+" · "+w.title.toUpperCase()),h("h1",{},dayLabel(D)+" — "+L.title.replace("SHOWDOWN: ","Showdown: ")),h("p",{},L.subject+" · 60 minutes · Years 5–6 (NZC Level 3) · "+S.era)),
      h("div",{class:"p-meta"},h("div",{},"Class: ____________"),h("div",{},"Date: ____________"),h("div",{},"Teacher: ________"))),
    sec("1. Curriculum links (New Zealand Curriculum)",
      tbl(["Code","Learning area","Strand / focus","What students understand and do"],nz),
      h("p",{},h("b",{},"Key Competencies: "),(L.kc||[]).join(" · ")),h("p",{},h("b",{},"Values: "),(L.values||[]).join(" · ")),
      h("p",{},h("b",{},"Level: "),"NZC Level 3 (Years 5–6). Connected learning across Social Sciences, Science, The Arts, English and Religious Education (Christian character)."),
      h("p",{class:"small"},NZ_NOTE)),
    sec("2. Learning intention and success criteria",h("p",{class:"li-big"},L.li),h("p",{},h("b",{},"Success criteria — I can…")),h("ul",{class:"chk"},L.sc.map(s=>h("li",{},s)))),
    L.vocab?sec("3. Key vocabulary",tbl(["Word","Student-friendly meaning"],L.vocab.map(v=>h("tr",{},h("td",{},h("b",{},v.w)),h("td",{},v.d))))):null,
    sec(L.vocab?"4. Resources":"3. Resources",L.resources?li(L.resources):h("p",{},"A data projector, the host page, student devices (phone/tablet/Chromebook) or A–D answer cards, mini-whiteboards.")),
    sec("5. Lesson sequence (60 minutes)",tbl(["Min","Phase","Teacher actions","Students"],seq.map(r=>h("tr",{},h("td",{},r[0]),h("td",{},h("b",{},r[1])),h("td",{},r[2]),h("td",{},r[3]))))),
    sec("6. Choose Your Path — tasks & differentiation",...paths),
    sec("7. Christian lens (Council Fire)",h("p",{},h("b",{},"Scripture: "),(cf.verses||cf.see.refs).join("; "),h("small",{}," (paraphrased in the app — read from your school’s Bible translation)")),h("p",{},h("b",{},"Teacher note: "),cf.teacher),
      h("p",{},"The lens is integrated, not tacked on: students use Scripture as one source among others (weighing it with archaeology, geography, science and art), and respond with gratitude, wonder and action. Keep questions open; invite students to explain their thinking; never pressure personal faith statements.")),
    sec("8. Assessment (for learning)",h("p",{},h("b",{},"Evidence collected: "),L.assess.evidence),
      rub.length?tbl(RR.RUBRIC_NAMES.map((n,i)=>(i+1)+" · "+n),[h("tr",{},rub.map(r=>h("td",{},r)))]):null,
      h("div",{class:"notes-box"},"Observations / next steps: ")),
    sec("9. Inclusion & accessibility",li(["Every dispatch has a one-click Easy-read version and Read-aloud.","The app offers a dyslexia-friendly font, text-size controls and a Reduce-motion mode (⚙ Settings).","Quiz answers use colour + shape + letter, so colour is never the only cue.","Each path has Supported / Standard / Extended versions and printable scaffolds.","Te reo Māori day names appear in the app (Rāhina, Rātū, Rāapa, Rāpare, Rāmere)."])),
    sec("10. Connections & cultural responsiveness",h("p",{},h("b",{},"Aotearoa connection: "),L.nzConnection),h("p",{},h("b",{},"Sensitivity note: "),L.sensitivity)),
    sec("11. Teaching as Inquiry (reflect after the lesson)",h("ul",{},(L.inquiry||[]).map(x=>h("li",{},x)),h("li",{},"What do I do next? ________________________________")),h("div",{class:"notes-box"},"Reflection notes: ")),
    h("footer",{class:"p-foot"},"© The Royal Road Race · Plan generated from the app’s lesson data · Week "+WEEK+" · "+dayLabel(D)));
  return q;
}

/* ===================================================================
   SHOWDOWN tab
   =================================================================== */
function showdown(m){
  const Qs=SD.questions(WEEK); const L=SD.lesson(WEEK);
  m.append(panel("Friday Showdown — "+L.title.replace("SHOWDOWN: ",""),
    h("p",{},"Mode: "+(RR.MODES[L.mode]||{}).name+" — "+(RR.MODES[L.mode]||{}).desc+" 12 questions with boss rounds, fate cards, a race track and a podium."),
    h("div",{class:"btn-row"},h("a",{class:"btn big",href:"host.html"},"▶ Open the host screen"),h("a",{class:"btn ghost",href:"play.html?practice=1"},"Try the student view (practice)")),
    h("div",{class:"notice"},Store.mode==="firebase"?h("span",{},"✅ Online play is switched on — phones on any network can join.") : h("span",{},h("b",{},"Online play is not set up yet. "),"Phones can’t join from other devices until you add a Firebase URL (Setup tab, 5 minutes). Teacher-led mode and single-computer testing work now."))));
  m.append(panel("How the scoring works",li(["<b>Speed + accuracy:</b> a correct answer scores 500–1000 points (the faster, the more).","<b>Boss rounds:</b> base points ×2.","<b>Streaks:</b> +50 for each consecutive correct answer (max +250).","<b>Team score = average</b> of members’ scores, so smaller Caravans aren’t penalised.","<b>Fate cards</b> add small twists — boons and setbacks — drawn at random. Nothing a student does affects them.","<b>Individual podium</b> and <b>Caravan podium</b> both celebrated; Darics awarded automatically (editable in Class & Darics)."])));
  m.append(panel("Printable: A–D answer cards & offline question sheet",h("p",{},"For Teacher-led mode, or if the Wi-Fi fails."),
    h("div",{class:"btn-row"},h("button",{class:"btn",type:"button",onclick:printCards},"🖨 A–D answer cards"),h("button",{class:"btn ghost",type:"button",onclick:()=>printQs(false)},"🖨 Question sheet (no answers)"),h("button",{class:"btn ghost",type:"button",onclick:()=>printQs(true)},"🖨 Teacher copy (with answers & explanations)"))));
  m.append(panel("Question bank ("+Qs.length+")",h("div",{class:"tbl-wrap"},h("table",{class:"grid"},h("thead",{},h("tr",{},["#","Question","Answer","NZC","Notes"].map(x=>h("th",{},x)))),h("tbody",{},Qs.map((q,i)=>h("tr",{},h("td",{},i+1),h("td",{},q.q),h("td",{},"ABCD"[q.answer]+" — "+q.options[q.answer]),h("td",{},h("span",{class:"tag"},q.tag)),h("td",{},(q.boss?"⚔ Boss ":"")+(SD.isTeaching(WEEK,i)?"🛑 Teaching moment":"")))))))));
}
function printCards(){
  const col=["#A5333A","#485971","#A8843A","#4A6E3A"]; const html="<style>@page{size:A4 landscape;margin:8mm}.c{width:48%;height:44vh;display:inline-block;margin:1%;border-radius:20px;color:#fff;text-align:center;font:900 140px/1 sans-serif;position:relative}.c small{position:absolute;bottom:10px;left:0;right:0;font:700 18px sans-serif}</style>"+SD.SHAPES.map((s,i)=>`<div class="c" style="background:${col[i]}"><div style="padding-top:30px">${s.l}</div><div style="width:90px;margin:0 auto;color:#fff">${s.svg}</div><small>Cut out, fold in half and hold up to answer</small></div>`).join("");
  RR.printNode(html,"A–D answer cards");
}
function printQs(ans){
  const Qs=SD.questions(WEEK); RR.printNode("<h1>Stage "+WEEK+" Showdown — "+(ans?"Teacher copy":"Question sheet")+"</h1>"+Qs.map((q,i)=>`<div class="box"><b>${i+1}.${q.boss?" ⚔ BOSS":""} ${RR.esc(q.q)}</b><br>`+q.options.map((o,k)=>`<div>${ans&&k===q.answer?"<b>✔ ":""}${"ABCD"[k]}. ${RR.esc(o)}${ans&&k===q.answer?"</b>":""}</div>`).join("")+(ans?`<p><i>${RR.esc(q.explain)}</i> [${q.tag}]</p>`:"")+"</div>").join(""),"Showdown");
}

/* ===================================================================
   CLASS & DARICS
   =================================================================== */
const REASONS=["Kindness","Teamwork","Courage","Integrity","Great question","Careful thinking","Perseverance","Helping a Caravan-mate"];
async function classTab(m){
  const cfg=await RR.Class.config().catch(()=>({teamCount:6})); const roster=await RR.Class.roster().catch(()=>({}));
  let teamCount=cfg.teamCount||6;
  /* roster */
  const areas={}; const rosterGrid=h("div",{class:"roster-grid"});
  const drawRoster=()=>{ rosterGrid.innerHTML=""; RR.TEAMS.slice(0,teamCount).forEach(t=>{ const ta=h("textarea",{rows:6,"aria-label":t.name+" members",placeholder:"One first name per line"}); ta.value=((roster[t.id])||[]).join("\n"); areas[t.id]=ta;
    rosterGrid.append(h("div",{class:"ros",style:{"--c":t.color}},h("div",{class:"ros-h"},RR.crestEl(t.id,34),h("b",{},t.name)),ta)); }); };
  const tc=h("input",{type:"range",min:2,max:6,value:teamCount,"aria-label":"Number of Caravans",oninput:e=>{ teamCount=+e.target.value; tcl.textContent=teamCount; drawRoster(); }}); const tcl=h("b",{},teamCount);
  const saveR=h("button",{class:"btn",type:"button",onclick:async()=>{ const map={}; RR.TEAMS.slice(0,teamCount).forEach(t=>{ map[t.id]=areas[t.id].value.split("\n").map(s=>SD.cleanName(s)).filter(Boolean); }); await RR.Class.setRoster(map); await RR.Class.saveConfig({teamCount}); Object.assign(roster,map); RR.toast("Roster saved"); drawDar(); }},"Save roster");
  m.append(panel("Caravans & roster",h("p",{},"First names only. The roster is stored only in your class’s own database (or this browser, in practice mode)."),h("div",{class:"row"},h("label",{},"Number of Caravans: "),tc,tcl),rosterGrid,h("div",{class:"btn-row"},saveR,h("button",{class:"btn ghost",type:"button",onclick:()=>RR.printNode("<h1>Caravans</h1>"+RR.TEAMS.slice(0,teamCount).map(t=>`<div class="box"><h3>${t.name}</h3>${((roster[t.id])||[]).map(RR.esc).join("<br>")||"&nbsp;"}</div>`).join(""),"Caravans")},"🖨 Print team lists"))));
  drawRoster();
  /* darics */
  const darWrap=h("div",{class:"dar"}); const logWrap=h("div",{class:"dlog"}); const reasonSel=h("select",{"aria-label":"Reason"},REASONS.map(r=>h("option",{},r)));
  let lastAward=null;
  const award=async(kind,id,amt)=>{ const r=await RR.Class.award(kind,id,amt,reasonSel.value); lastAward={kind,id,amount:amt,logId:r.logId}; RR.sfx.coin(); RR.toast((amt>0?"+":"")+amt+" Daric"+(Math.abs(amt)>1?"s":"")+" → "+(kind==="teams"?RR.team(id).name:id)); drawDar(); };
  async function drawDar(){
    const d=await RR.Class.darics(); const rost=roster; darWrap.innerHTML="";
    const grid=h("div",{class:"dar-grid"},RR.TEAMS.slice(0,teamCount).map(t=>h("div",{class:"dcard",style:{"--c":t.color}},h("div",{class:"dc-h"},RR.crestEl(t.id,36),h("b",{},t.name)),h("div",{class:"dc-n"},h("i",{class:"coin"})," ",h("b",{},d.teams[t.id]||0)),h("div",{class:"dc-b"},[1,2,3,5].map(n=>h("button",{class:"btn small",type:"button",onclick:()=>award("teams",t.id,n)},"+"+n)),h("button",{class:"btn small ghost",type:"button","aria-label":"Remove 1",onclick:()=>award("teams",t.id,-1)},"−1")))));
    darWrap.append(grid);
    // individuals
    const names=[]; RR.TEAMS.slice(0,teamCount).forEach(t=>(rost[t.id]||[]).forEach(n=>names.push({n,t:t.id})));
    if(names.length){ const sel=h("select",{"aria-label":"Student"},names.map(x=>h("option",{value:x.n+"|"+x.t},x.n+" ("+RR.team(x.t).name+")")));
      darWrap.append(h("div",{class:"indiv"},h("b",{},"Individual Daric: "),sel,[1,2,3].map(n=>h("button",{class:"btn small",type:"button",onclick:()=>{ const [nm,tm]=sel.value.split("|"); award("players",nm,n); }},"+"+n)),
        h("div",{class:"small"},"Top individuals: "+Object.entries(d.players).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([n,v])=>n+" "+v).join(" · ")||"—")));
    }
    const log=await RR.Class.log(); logWrap.innerHTML="";
    logWrap.append(h("h3",{},"History"),h("div",{class:"btn-row"},h("button",{class:"btn small ghost",type:"button",disabled:!lastAward,onclick:async()=>{ await RR.Class.undo(lastAward); lastAward=null; RR.toast("Last award undone"); drawDar(); }},"↶ Undo last")),
      h("ul",{class:"log"},log.slice(0,25).map(e=>h("li",{},h("span",{},new Date(e.at).toLocaleString("en-NZ",{weekday:"short",hour:"2-digit",minute:"2-digit"})),h("b",{},(e.amount>0?"+":"")+e.amount),h("span",{},(e.kind==="teams"?RR.team(e.id).name:e.id)+" — "+(e.reason||""))))));
  }
  m.append(panel("Darics",h("p",{},"Award Darics for kindness, courage and teamwork, not only for winning. Totals appear on the student map."),h("div",{class:"row"},h("label",{},"Reason: "),reasonSel),darWrap,logWrap));
  drawDar();
}

/* ===================================================================
   RESULTS
   =================================================================== */
async function results(m){
  const res=await RR.Class.results().catch(()=>({})); const keys=Object.keys(res).sort();
  if(!keys.length){ m.append(panel("Results",h("p",{},"No Showdown has been completed yet. Results appear here at the end of each Friday game."))); return; }
  keys.forEach(k=>{ const r=res[k]; const wk=+k.slice(1);
    const teams=Object.entries(r.teamScores||{}).sort((a,b)=>b[1].score-a[1].score);
    m.append(panel("Stage "+wk+" — "+RR.stage(wk).title,h("p",{class:"small"},new Date(r.at).toLocaleString("en-NZ")+" · "+(r.mode==="offline"?"Teacher-led":"Live")),
      h("div",{class:"cols"},h("div",{},h("h3",{},"Caravans"),h("ol",{},teams.map(([id,t])=>h("li",{},RR.team(id).name+" — "+t.score)))),h("div",{},h("h3",{},"Individuals"),h("ol",{},(r.players||[]).slice(0,10).map(p=>h("li",{},p.name+" ("+RR.team(p.team).name+") — "+p.score))))),
      h("div",{class:"btn-row"},h("button",{class:"btn ghost",type:"button",onclick:()=>{ const rows=[["Rank","Name","Caravan","Score"]]; (r.players||[]).forEach((p,i)=>rows.push([i+1,p.name,RR.team(p.team).name,p.score])); dl(rows,"results-week"+wk+".csv"); }},"⬇ CSV"))));
  });
}
function dl(rows,name){ const b=new Blob([rows.map(r=>r.map(c=>'"'+String(c??"").replace(/"/g,'""')+'"').join(",")).join("\n")],{type:"text/csv"}); const a=h("a",{href:URL.createObjectURL(b),download:name}); document.body.append(a); a.click(); a.remove(); }

/* ===================================================================
   IMAGES
   =================================================================== */
function images(m){
  const imgs=(RR.IMAGES_W1||[]).concat(RR.IMAGES_W2_5||[]).concat(RR.IMAGES_W6_10||[]); const found={}; const exts=["webp","png","jpg","jpeg"];
  const prog=h("b",{},"checking…");
  m.append(panel("Image checklist ("+imgs.length+" images)",
    h("p",{},"The app already looks complete without images — every scene is drawn in code. Each image you add is layered over the built-in art automatically."),
    li(["Copy a prompt → paste into ChatGPT (image generation) → save the result as the ID shown (e.g. <code>W01-HERO.png</code>).","Put the files in the <code>assets/</code> folder next to <code>index.html</code>. WebP is best (long edge ≤ 1280 px). PNG, JPG and WebP all work.","Do characters (CHAR) first, then attach the character sheet when making scenes that include them.","Refresh this page — ticks below show which files were found."]),
    h("p",{},"Found: ",prog," of "+imgs.length),
    h("div",{class:"btn-row"},h("button",{class:"btn ghost small",type:"button",onclick:()=>copy(RR.IMG_PRIMER)},"Copy the ‘chat primer’ (paste first in each new ChatGPT chat)"))));
  const groups={CORE:"Core assets",TEAM:"Team crests",CHAR:"Characters (do these first)",FX:"Parallax & particle layers",W01:"Stage 1 scenes & lesson cards",W02:"Stage 2 scenes & lesson cards",W03:"Stage 3 scenes & lesson cards",W04:"Stage 4 scenes & lesson cards",W05:"Stage 5 scenes & lesson cards",W06:"Stage 6 scenes & lesson cards",W07:"Stage 7 scenes & lesson cards",W08:"Stage 8 scenes & lesson cards",W09:"Stage 9 scenes & lesson cards",W10:"Stage 10 scenes & lesson cards",ANIMAL:"Animal cards"};
  Object.keys(groups).forEach(g=>{ const list=imgs.filter(i=>i.group===g); if(!list.length) return;
    m.append(panel(groups[g],h("div",{class:"img-list"},list.map(i=>{ const st=h("span",{class:"img-st"},"…"); const row=h("div",{class:"img-row"},h("div",{class:"img-th"}),h("div",{class:"img-info"},h("b",{},i.id+" — "+i.title),h("small",{},i.format),h("details",{},h("summary",{},"Show prompt"),h("p",{class:"prompt"},i.prompt))),h("div",{class:"img-act"},st,h("button",{class:"btn small",type:"button",onclick:()=>copy(i.prompt)},"Copy prompt")));
      probe(i.id,row,st); return row; }))));
  });
  let n=0; function probe(id,row,st){ let k=0; const tryNext=()=>{ if(k>=exts.length){ st.textContent="missing"; st.className="img-st no"; upd(); return; } const u="assets/"+id+"."+exts[k++]; const im=new Image(); im.onload=()=>{ st.textContent="✓ found"; st.className="img-st ok"; found[id]=1; RR.$(".img-th",row).style.backgroundImage=`url("${u}")`; n++; upd(); }; im.onerror=tryNext; im.src=u; }; tryNext(); }
  let done=0; function upd(){ done++; prog.textContent=Object.keys(found).length; }
}
function copy(t){ (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>RR.toast("Copied!")).catch(()=>{ const ta=h("textarea",{value:t}); ta.value=t; document.body.append(ta); ta.select(); try{ document.execCommand("copy"); RR.toast("Copied!"); }catch(e){ RR.toast("Select and copy manually"); } ta.remove(); }); }

/* ===================================================================
   RESOURCES
   =================================================================== */
function resources(m){
  const w=W(); const S=RR.stage(WEEK);
  /* letter */
  const letter=`<h1>Our Term Adventure: The Royal Road Race</h1><p>Dear whānau,</p><p>This term our class is journeying along the Royal Road of ancient Persia — a ten-week adventure through history, geography, science and art. Each week is a ‘Stage’: Monday is History, Tuesday Geography (settlements and cities), Wednesday Science (animal communities and habitats), Thursday Art, and Friday is a team quiz called the Showdown.</p><p><b>This week (Stage ${WEEK}: ${w.title}):</b> ${w.story.briefing}</p><p><b>Our Christian lens.</b> We read Scripture as one important source alongside archaeology, geography, science and art, and respond with gratitude, wonder and action. Questions are welcome at home.</p><p><b>The Friday Showdown.</b> Students may use a school device or (if you agree) a personal phone. They join with a first name only and a game PIN. No accounts, emails or photos are collected.</p><p><b>How you can help:</b> ask your child to teach you one new thing from the week; look at a world map together; share any family stories or connections to the places we are learning about.</p><p>Ngā mihi nui,<br>__________________</p>`;
  const gloss=[]; DAYS.forEach(d=>{ const L=w.days[d.id]; (L.vocab||[]).forEach(v=>gloss.push(v)); });
  m.append(panel("Printable resources",h("div",{class:"btn-row"},
    h("button",{class:"btn",type:"button",onclick:()=>RR.printNode(letter,"Whānau letter")},"🖨 Whānau letter"),
    h("button",{class:"btn ghost",type:"button",onclick:()=>RR.printNode("<h1>Stage "+WEEK+" glossary</h1>"+gloss.map(v=>`<p><b>${RR.esc(v.w)}</b> — ${RR.esc(v.d)}</p>`).join(""),"Glossary")},"🖨 Glossary (all days)"),
    h("button",{class:"btn ghost",type:"button",onclick:()=>RR.printNode("<h1>Success-criteria & rubric sheet — Stage "+WEEK+"</h1>"+DAYS.map(d=>{ const L=w.days[d.id]; return `<div class="box"><h3>${d.en}: ${RR.esc(L.title)}</h3><p><b>LI:</b> ${RR.esc(L.li)}</p>${L.sc.map(s=>`<div><span class="chk"></span>${RR.esc(s)}</div>`).join("")}<p><b>Rubric:</b></p><ol>${(L.assess.rubric||[]).map((r,i)=>`<li><b>${RR.RUBRIC_NAMES[i]}:</b> ${RR.esc(r)}</li>`).join("")}</ol></div>`; }).join(""),"Rubrics")},"🖨 Success criteria & rubrics"),
    h("button",{class:"btn ghost",type:"button",onclick:()=>RR.printNode("<h1>Class tracking sheet — Stage "+WEEK+"</h1><p>Name / Caravan: ______________</p><table border=1 cellpadding=8 style='border-collapse:collapse;width:100%'><tr><th>Student</th>"+DAYS.map(d=>"<th>"+d.en.slice(0,3)+"</th>").join("")+"<th>Showdown</th><th>Notes</th></tr>"+Array.from({length:30},()=>"<tr><td>&nbsp;</td>"+"<td></td>".repeat(7)+"</tr>").join("")+"</table>","Tracking sheet")},"🖨 Class tracking sheet"))));
  m.append(panel("Materials checklist",li(w.materials)));
  if(WEEK===1) m.append(panel("Dig Envelope (Monday) — how to make it",li(["Make one envelope per Caravan with <b>three replica artefacts</b>:","<b>Clay tablet fragment:</b> air-dry clay, press wedge shapes with a pencil end or skewer, break the edge.","<b>Pottery shard:</b> break a terracotta saucer or paint a card shard with bands and triangles.","<b>Copied map:</b> tea-stained paper with mountains, a river and a dotted route ending at a cross.","Add an ‘archaeologist’s note’ card for each (the app’s Dig Envelope interactive has the model wording)."])));
  const gl=(RR.ANIMALS||[]).filter(a=>a.week<=WEEK);
  m.append(panel("Animal cards — Stages 1–"+WEEK,h("p",{},"Students collect these in the app (Cards). Conservation status can change — check the IUCN Red List before quoting it."),h("ul",{},gl.map(a=>h("li",{},h("b",{},a.name)," (",a.sci,") — ",a.habitat,"; ",a.status)))));
}

/* ===================================================================
   SETTINGS
   =================================================================== */
function settings(m){
  const status=Store.mode==="firebase"?"✅ Online (Firebase) — phones on any network can join the Showdown.":"⚪ Practice mode (no Firebase URL set) — everything works on this computer; other devices can’t join yet.";
  const test=h("p",{class:"small"},"");
  m.append(panel("Live quiz connection",h("p",{},status),h("p",{},h("b",{},"Class ID: "),window.RR_CONFIG.classId||"class1"),
    h("div",{class:"btn-row"},h("button",{class:"btn",type:"button",onclick:async()=>{ test.textContent="Testing…"; try{ const k="_t"+Date.now(); await Store.set("_test/"+k,{ok:1}); const v=await Store.get("_test/"+k); await Store.remove("_test/"+k); test.textContent=v&&v.ok?"✅ Connection works ("+Store.mode+").":"❌ Could not read back what was written."; }catch(e){ test.textContent="❌ "+e.message; } }},"Test connection")),test));
  m.append(panel("Switch on live phones (about 5 minutes, free)",h("ol",{class:"steps"},[
    "Go to <b>console.firebase.google.com</b> and sign in with a Google account → <b>Add project</b> (e.g. “persia-race”). Turn Google Analytics off.",
    "Left menu → <b>Build → Realtime Database → Create database</b>. Choose the closest region and <b>Start in test mode</b>.",
    "In the <b>Rules</b> tab paste: <code>{ \"rules\": { \".read\": true, \".write\": true } }</code> → Publish. (Fine for a classroom game: it stores first names and scores only. Delete the project at term end.)",
    "Copy the database URL shown at the top of the Data tab (like <code>https://persia-race-default-rtdb.firebaseio.com</code>).",
    "Open <code>js/config.js</code> in any text editor, paste it into <code>firebaseUrl</code>, save, and put the whole folder on a web host (see below). Come back here and press <b>Test connection</b>.",
    "<b>Hosting:</b> the folder is a plain website. Free options: GitHub Pages, Netlify Drop (drag the folder onto app.netlify.com/drop), or your school server. Phones need an <b>https</b> address."].map(x=>h("li",{html:x})))));
  const pin1=h("input",{type:"password",placeholder:"New teacher PIN (min 6 characters)",autocomplete:"new-password","aria-label":"New PIN"});
  { const sel=h("select",{class:"input"}); const fill=()=>{ sel.innerHTML=""; const cur=RR.currentVoice&&RR.currentVoice(); RR.voices().forEach(v=>{ const o=h("option",{value:v.voiceURI},v.name+" ("+v.lang+")"); if(cur&&cur.voiceURI===v.voiceURI) o.selected=true; sel.append(o); }); if(!sel.options.length) sel.append(h("option",{},"No English voices found on this device")); };
    fill(); if("speechSynthesis" in window) speechSynthesis.addEventListener("voiceschanged",fill);
    sel.onchange=()=>{ RR.setVoice(sel.value); RR.speak("Welcome to the Royal Road. Listen to how this voice sounds."); };
    m.append(panel("Read-aloud voice",h("p",{},"Open the app in Google Chrome for the best-sounding voices (look for “Google UK English”). On a Mac you can also add Enhanced or Premium voices in System Settings → Accessibility → Spoken Content → System Voice → Manage Voices. Pick one below to hear it."),sel)); }
  m.append(panel("Reset to a fresh start",h("p",{},"Clears this browser’s progress so the app starts as if it were the very first time: back at Stage 1, intro animation plays again, no cards, stamps or Showdown results, no Darics. Your teacher PIN, text-size and sound settings are kept."),
    Store.mode==="firebase"?h("p",{class:"small"},"⚠ Online play is on, so this also clears the class’s saved Showdown results and Darics online. Class roster and team settings are kept."):h("p",{class:"small"},"Practice mode: this only affects this computer."),
    h("div",{class:"btn-row"},h("button",{class:"btn danger",type:"button",onclick:async()=>{
      if(!confirm("Reset everything on this browser back to a first-time start?\n\nThis clears progress, cards, stamps, Showdown results and Darics. It cannot be undone.")) return;
      try{ for(const k of ["results","darics","log","season"]) await Store.remove(RR.Class.path(k)); }catch(e){}
      try{ const keep=["rr:pinHashes","rr:settings"]; Object.keys(localStorage).filter(k=>k.startsWith("rr:")&&!keep.includes(k)).forEach(k=>localStorage.removeItem(k)); }catch(e){}
      try{ sessionStorage.clear(); }catch(e){}
      RR.toast("Reset done — opening the app from the start…"); setTimeout(()=>{ location.href="index.html?intro=1"; },900);
    }},"↺ Reset this browser (start from the beginning)"))));
  m.append(panel("Change the teacher PIN",h("p",{},"The starting PIN is in js/config.js (it is stored as a hash). Changing it here saves it in this browser only; to change it for every device, replace the hash values in js/config.js."),pin1,h("div",{class:"btn-row"},h("button",{class:"btn",type:"button",onclick:async()=>{ if(pin1.value.length<6){ RR.toast("Use at least 6 characters"); return; } await RR.pin.change(pin1.value); pin1.value=""; RR.toast("PIN updated on this browser"); }},"Save new PIN"))));
  m.append(panel("Data & privacy",li(["Students enter a <b>first name only</b>; no emails, accounts or photos are collected.","Game data lives in your own Firebase project (or only in this browser in practice mode). You control and can delete it.","Delete all class data below at any time (e.g. end of term)."]),
    h("div",{class:"btn-row"},h("button",{class:"btn red",type:"button",onclick:async e=>{ if(!confirm("Delete ALL Darics, rosters, logs and results for this class? This cannot be undone.")) return; await RR.Class.clearAll(); RR.toast("Class data deleted"); }},"Delete all class data"))));
}

/* ---------- go ---------- */
(RR.pin.isTeacher()?shell:gate)();
})();
