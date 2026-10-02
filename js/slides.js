/* ===================================================================
   LESSON SLIDES — builder + presenter
   Builds a 6-phase lesson deck from week data + RR.SLIDES authored layer:
   Arrive → Discover → Discuss → Decide (situational thinking) → Do → Wrap-up.
   Presenter: 1920×1080 stage scaled to fit; keys, clicker, reveals, timer,
   notes, overview grid, read-aloud, blank screen, fullscreen.
   =================================================================== */
(function(){
const RR=window.RR, h=RR.h, A=RR.art, $=RR.$, $$=RR.$$;
const PH={
 arrive:  {name:"Arrive",   mi:"Haere mai", line:"Step onto the Road",           icon:"horn",    c:"#C8A04A"},
 discover:{name:"Discover", mi:"Kimihia",   line:"Dig deeper, Courier",          icon:"compass", c:"#7C97A3"},
 discuss: {name:"Discuss",  mi:"Kōrero",    line:"The Council Fire",             icon:"flame",   c:"#C4414A"},
 decide:  {name:"Decide",   mi:"Whakatau",  line:"What would YOU do?",           icon:"star",    c:"#DE9A4A"},
 doit:    {name:"Do",       mi:"Mahia",     line:"Your mission begins",          icon:"scroll",  c:"#6FA27C"},
 wrap:    {name:"Wrap-up",  mi:"Whakakapi", line:"Gather what you have learned", icon:"trophy",  c:"#C8A04A"}
};
RR.SLIDE_PHASES=PH;
const strip=s=>String(s||"").replace(/<[^>]+>/g,"");
const LETTERS=["A","B","C","D"];

/* ---------------------------------------------------------------- builder */
RR.buildSlides=function(week,day){
  const W=RR.WEEKS[week], L=W.days[day], X=(RR.SLIDES[week]||{})[day]||{}, D=RR.DAYS.find(d=>d.id===day), S=RR.stage(week);
  const fri=day==="fri"; const out=[]; const add=(phase,type,o)=>out.push(Object.assign({phase,type},o));
  const dayIdx=RR.DAYS.findIndex(d=>d.id===day), prev=dayIdx>0?RR.DAYS[dayIdx-1]:null;
  const next=RR.DAYS[dayIdx+1];
  const phaseCard=(p,notes)=>add(p,"phase",{notes});

  /* ---- ARRIVE ---- */
  add("arrive","cover",{title:L.title,sub:L.tagline,kicker:`Stage ${week} · ${D.en} · ${D.subject}`,place:W.place,era:W.era,
    notes:"Welcome the class in character. Let the title sit for a moment, then press next to hear from Shirin."});
  add("arrive","dispatch",{title:L.dispatch.title,text:L.dispatch.story,easy:L.dispatch.easy,
    notes:"Read Shirin’s dispatch aloud (R reads it for you). Pause at the dramatic moment. "+(L.dispatch.teacher?L.dispatch.teacher[1]||"":"")});
  if(!fri){
    add("arrive","challenge",{title:"Your first challenge",icon:D.icon,
      steps:X.hook||[L.dispatch.easy],timer:4,
      notes:"Run the hook activity from the lesson plan. Take two quick shares and do NOT correct guesses — the Discovery will."});
  }
  if(X.retrieval) add("arrive","retrieval",{title:`Quick-fire: remember ${prev?prev.en:"last time"}?`,qa:X.retrieval,
    notes:"Mini-whiteboards. Students write first; then reveal each answer. Retrieval practice strengthens memory — keep it brisk (3 min)."});
  if(X.prior) add("arrive","prior",{title:"Before we begin…",qs:X.prior,
    notes:"Activate prior knowledge. Jot a few ideas on the board — come back to them in the wrap-up."});
  add("arrive","goals",{li:L.li,sc:L.sc,
    notes:"Read the learning intention chorally. Reveal success criteria one by one; ask: ‘What would that look like?’"});
  if(L.vocab && !fri) add("arrive","vocab",{words:L.vocab,
    notes:"Pre-teach the key words. Choose 2–3 to put on the Word Wall; students use them in discussion today."});

  /* ---- DISCOVER ---- */
  if(!fri){
    phaseCard("discover","Move into the information phase. Keep each card to ~2 minutes: read, check understanding, move on.");
    (L.discovery.cards||[]).forEach((c,i)=>{
      add("discover","learn",{title:c.title,icon:c.icon,html:c.body,n:i+1,of:L.discovery.cards.length,widget:(i===0?L.widgets:null),
        notes:"Read or paraphrase. Point to the key words in bold. Use the interactive widget in the student app on a second screen if it helps."});
      const k=(X.checks||[])[i]; if(k) add("discover","check",{q:k.q,a:k.a,title:"Stop & think",
        notes:"Think–Pair–Share: 20 seconds silent thinking, 30 seconds with a partner, then cold-call. Reveal the answer last."});
    });
  } else {
    phaseCard("discover","Friday starts with a fast recap of the week and the rules of the Showdown.");
    add("discover","retrieval",{title:"Week in a flash",qa:X.retrieval,
      notes:"Whole-class recap. One question per day — students answer on whiteboards before the reveal."});
    add("discover","rules",{title:"How the Showdown works",
      items:[["📱","Scan the QR code, enter the PIN and your name, then choose your Caravan."],["⚡","Faster correct answers earn more points (500–1000 per question)."],["🔥","Streaks add up to +250 bonus for answering correctly in a row."],["👑","The Boss Round is worth DOUBLE."],["🛡️","Your Caravan’s score is the AVERAGE of its couriers — so every single player counts!"],["🏆","Top Caravan wins the Stage; top 3 couriers earn the individual podium."]],
      notes:"Say it simply and show the join screen once the lobby opens. Emphasise that team score is an average, so everyone matters."});
    add("discover","fates",{title:"Fate cards: the road is full of surprises",cards:RR.FATE.map(f=>({n:f.name,i:f.icon,t:f.text,k:f.kind})),
      notes:"Each Caravan draws a Fate card — a boon or a setback. Frame setbacks as part of the adventure, not a punishment."});
  }

  /* ---- DISCUSS ---- */
  phaseCard("discuss",fri?"Time for the Caravan Creed — then the race!":"Gather round the Council Fire. Use partner talk before whole-class talk.");
  if(fri){
    add("discuss","creed",{title:"Write your Caravan Creed",starters:L.creedStarters||[],timer:5,
      notes:"Each Caravan writes a short creed (how they will race) on a strip and reads it aloud. Display them on the wall for the term."});
  } else {
    (X.talk||[]).forEach(t=>add("discuss","talk",{q:t.q,starters:t.starters,timer:2,
      notes:"Partner talk (2 min) then share. Insist on ‘because’. "+(X.say||"")}));
  }
  const cf=L.councilFire;
  add("discuss","faith",{refs:cf.see.refs,see:cf.see.text,wonder:cf.wonder,weigh:cf.weigh,respond:cf.respond,
    notes:(cf.teacher||"")+" Read the passage from your own Bible. Keep this a genuine conversation, not a recital."});

  /* ---- DECIDE: situational thinking ---- */
  phaseCard("decide","Situational thinking: there is rarely one perfect answer. Ask students to justify, not just choose.");
  (X.situations||[]).forEach((s,i)=>add("decide","situation",{num:i+1,title:s.title,story:s.story,options:s.options,best:s.best,think:s.think,
    notes:"Read the scenario. Students stand or point to a corner for A, B or C, then explain to a neighbour WHY. Reveal ‘Courier’s thinking’ last — and honour good reasoning that differs."}));

  /* ---- DO ---- */
  phaseCard("doit",fri?"Time to race — and then to reflect.":"Choose your path. Everyone does ONE project; all three reach the same learning intention.");
  if(fri){
    add("doit","launch",{title:"Ready, Couriers?",
      steps:["Open host.html on this screen and press ‘Start the lobby’.","Couriers scan the QR code and join.","Teams check their Fate cards. Deep breath…","Horns up — begin the Showdown!"],
      notes:"Launch the live Showdown. If devices are short, use Teacher-led mode (the Host screen has the switch)."});
    add("doit","debrief",{title:"Debrief: what did the race teach us?",qs:["Which question made you think hardest — and why?","What did your Caravan do well together?","What will we practise before next time?"],
      notes:"After the podium, reset. Look at the question report in Teacher → Results to see which teaching moment to revisit."});
    if(W.story.fridayReveal) add("doit","reveal",{title:`${W.fragment}`,text:W.story.fridayReveal,
      notes:"The dramatic story reveal for the winning Caravan — read it slowly."});
  }
  add("doit","mission",{title:"Choose your path",paths:L.paths.map(p=>({id:p.id,name:p.name,icon:p.icon,brief:p.brief})),
    notes:"Each path has its own challenge level and support. Let students choose, but suggest a different path to anyone who is always on the same one."});
  L.paths.forEach(p=>add("doit","path",{id:p.id,name:p.name,icon:p.icon,brief:p.brief,checklist:p.checklist,scaffold:p.scaffold,
    notes:"Show this on screen while students gather materials. Success criteria = the checklist."}));
  add("doit","work",{title:"Mission time!",steps:["Collect your materials","Work quietly or talk in ‘3-inch voices’","Check your list as you go","Ask three before me"],timer:fri?15:25,
    notes:"Circulate with a clipboard. Capture evidence for the rubric: photos, a source-use sentence, discussion observations."});

  /* ---- WRAP-UP ---- */
  phaseCard("wrap","Gather back on the mat. Celebrate effort and name the learning.");
  add("wrap","summary",{title:"What did we learn today?",points:X.sum||[],
    notes:"Ask students to say each point in their own words before you reveal it."});
  if(X.exit) add("wrap","exit",{title:"Exit ticket",q:X.exit,
    notes:"On a mini-whiteboard or sticky note. Collect to plan tomorrow (Teaching as Inquiry)."});
  add("wrap","pray",{title:"A moment to give thanks",text:cf.respond,
    notes:"Invite a student to lead a one-sentence prayer of thanks, or pause in silence."});
  if(X.next) add("wrap","next",{title:X.next.title,text:X.next.text,clue:(day==="mon"||day==="tue"||day==="wed")?W.story.shadowCourier:null,
    notes:"Close with the hook for the next lesson — leave them wanting more."});
  if(fri){
    const n2=RR.stage(week+1);
    add("wrap","next",{title:n2?`Stage ${week+1} · ${n2.title}`:"The Road continues…",text:n2?`${n2.beat||""}`:"The next stage of the journey awaits.",clue:W.story.shadowClue,
      notes:"Tease next week. The silver glint on the ridge is the Shadow Courier’s clue."});
  }
  out.forEach((s,i)=>{ s.idx=i; });
  return out;
};

/* ------------------------------------------------------------ renderers */
const frag=(n,el)=>{ el.classList.add("frag"); return el; };
const icon=(n,sz=84)=>h("span",{class:"ico",html:A.icon(n||"scroll",sz,"currentColor",3)});
const R={};
R.cover=s=>h("div",{class:"sl sl-cover"},
  h("div",{class:"kick"},s.kicker),h("h1",{class:"gold-text"},s.title),h("p",{class:"sub"},s.sub),
  h("div",{class:"meta"},h("span",{},"📍 "+s.place),h("span",{},"⏳ "+s.era)));
R.dispatch=s=>h("div",{class:"sl sl-dispatch"},
  h("div",{class:"shirin"},h("div",{class:"medal",dataset:{face:"CHAR-01-face"}},icon("scroll",120)),h("b",{},"Shirin the Scribe"),h("small",{},"A dispatch from the road")),
  h("div",{class:"scroll-card"},h("h2",{},s.title),h("p",{class:"story"},s.text),frag(1,h("p",{class:"easy"},"In short: "+s.easy))));
R.challenge=s=>h("div",{class:"sl sl-challenge"},h("div",{class:"hd"},icon(s.icon,96),h("h2",{},s.title)),
  h("ol",{class:"big-steps"},s.steps.map(t=>frag(1,h("li",{},t)))));
R.retrieval=s=>h("div",{class:"sl sl-retr"},h("h2",{},s.title),
  h("div",{class:"qa-list"},s.qa.map((x,i)=>h("div",{class:"qa"},h("div",{class:"q"},h("b",{},(i+1)+". "),x.q),frag(1,h("div",{class:"a"},"✔ "+x.a))))));
R.prior=s=>h("div",{class:"sl sl-prior"},h("h2",{},s.title),h("ul",{class:"big-list"},s.qs.map(q=>h("li",{},q))),h("p",{class:"hint"},"Jot ideas on the board — we will return to them at the end."));
R.goals=s=>h("div",{class:"sl sl-goals"},
  h("div",{class:"li-card"},h("small",{},"WE ARE LEARNING TO…"),h("p",{},s.li.replace(/^We are learning to\s*/i,"").replace(/^./,c=>c.toUpperCase()))),
  h("div",{class:"sc-card"},h("small",{},"SUCCESS LOOKS LIKE…"),h("ul",{},s.sc.map(t=>frag(1,h("li",{},h("span",{class:"tick"},"✔"),t))))));
R.vocab=s=>h("div",{class:"sl sl-vocab"},h("h2",{},"Word Wall"),
  h("div",{class:"vgrid"},s.words.slice(0,8).map(w=>frag(1,h("div",{class:"vcard"},h("b",{},w.w),h("span",{},w.d))))));
R.phase=s=>{ const p=PH[s.phase]; return h("div",{class:"sl sl-phase",style:{"--pc":p.c}},icon(p.icon,200),h("small",{},p.mi),h("h1",{},p.name),h("p",{},p.line)); };
R.learn=s=>h("div",{class:"sl sl-learn"},
  h("div",{class:"lhead"},icon(s.icon,92),h("div",{},h("small",{},`DISCOVERY ${s.n} OF ${s.of}`),h("h2",{},s.title))),
  h("div",{class:"lbody",html:s.html}));
R.check=s=>h("div",{class:"sl sl-check"},h("div",{class:"badge"},"🤔 "+s.title),h("p",{class:"q"},s.q),
  frag(1,h("div",{class:"ans"},h("small",{},"COURIER’S ANSWER"),h("p",{},s.a))));
R.rules=s=>h("div",{class:"sl sl-rules"},h("h2",{},s.title),
  h("div",{class:"rgrid"},s.items.map(([e,t])=>frag(1,h("div",{class:"rcard"},h("span",{},e),h("p",{},t))))));
R.fates=s=>h("div",{class:"sl sl-fates"},h("h2",{},s.title),
  h("div",{class:"fgrid"},s.cards.map(c=>frag(1,h("div",{class:"fcard "+c.k},h("span",{},c.i),h("b",{},c.n),h("small",{},c.t))))));
R.creed=s=>h("div",{class:"sl sl-creed"},h("h2",{},s.title),
  h("p",{class:"hint"},"Write ONE promise your Caravan makes about how it will race. Read it aloud together."),
  h("div",{class:"starters"},s.starters.map(t=>frag(1,h("div",{},t)))));
R.talk=s=>h("div",{class:"sl sl-talk"},h("div",{class:"badge"},"💬 Turn & talk"),h("p",{class:"q"},s.q),
  h("div",{class:"starters"},s.starters.map(t=>frag(1,h("div",{},t)))));
R.faith=s=>h("div",{class:"sl sl-faith"},h("h2",{},"The Council Fire"),
  h("div",{class:"fgrid4"},
   frag(1,h("div",{class:"fq see"},h("small",{},"👁 SEE · "+s.refs.join(" · ")),h("p",{},s.see))),
   frag(1,h("div",{class:"fq wonder"},h("small",{},"💭 WONDER"),h("p",{},s.wonder))),
   frag(1,h("div",{class:"fq weigh"},h("small",{},"⚖ WEIGH"),h("p",{},s.weigh))),
   frag(1,h("div",{class:"fq respond"},h("small",{},"🙏 RESPOND"),h("p",{},s.respond)))));
R.situation=s=>h("div",{class:"sl sl-sit"},
  h("div",{class:"badge"},`🎭 Situation ${s.num} · ${s.title}`),h("p",{class:"story"},s.story),
  h("div",{class:"opts"},s.options.map((o,i)=>frag(1,h("div",{class:"opt","data-i":i},h("b",{},LETTERS[i]),h("span",{},o))))),
  frag(1,h("div",{class:"think",dataset:{best:s.best}},h("small",{},"COURIER’S THINKING"),h("p",{},s.think))));
R.launch=s=>h("div",{class:"sl sl-launch"},h("h1",{class:"gold-text"},s.title),
  h("ol",{class:"big-steps"},s.steps.map(t=>frag(1,h("li",{},t)))),
  h("a",{class:"btn",href:"host.html",target:"_blank",rel:"noopener"},"▶ Open the Host screen"));
R.debrief=s=>h("div",{class:"sl sl-prior"},h("h2",{},s.title),h("ul",{class:"big-list"},s.qs.map(q=>frag(1,h("li",{},q)))));
R.reveal=s=>h("div",{class:"sl sl-reveal",dataset:{art:"CORE-08"}},h("small",{},"THE CAIRN ON THE HIGH PASS"),h("h1",{class:"gold-text"},s.title),h("p",{},s.text));
R.mission=s=>h("div",{class:"sl sl-mission"},h("h2",{},s.title),
  h("div",{class:"pcards"},s.paths.map(p=>frag(1,h("div",{class:"pcard"},h("div",{class:"pl"},p.id),icon(p.icon,70),h("h3",{},p.name),h("p",{},p.brief))))));
R.path=s=>h("div",{class:"sl sl-path"},
  h("div",{class:"ph"},h("div",{class:"pl"},"Path "+s.id),icon(s.icon,70),h("h2",{},s.name)),
  h("p",{class:"brief"},s.brief),
  h("div",{class:"cols"},
   h("div",{class:"ck"},h("small",{},"MY CHECKLIST"),h("ul",{},s.checklist.map(c=>frag(1,h("li",{},"☐ "+c))))),
   s.scaffold?h("div",{class:"sf"},h("small",{},"NEED A HAND?"),h("p",{html:s.scaffold})):null));
R.work=s=>h("div",{class:"sl sl-work"},h("h1",{class:"gold-text"},s.title),
  h("div",{class:"bigtimer",id:"bigTimer","data-min":s.timer},fmt(s.timer*60)),
  h("div",{class:"wsteps"},s.steps.map(t=>h("span",{},t))));
R.summary=s=>h("div",{class:"sl sl-summary"},h("h2",{},s.title),
  h("ol",{class:"big-steps"},s.points.map(t=>frag(1,h("li",{},t)))));
R.exit=s=>h("div",{class:"sl sl-check"},h("div",{class:"badge"},"🎟 "+s.title),h("p",{class:"q"},s.q));
R.pray=s=>h("div",{class:"sl sl-pray"},h("div",{class:"flame-ico",html:A.icon("flame",150,"currentColor",2.4)}),h("h2",{},s.title),h("p",{},s.text));
R.next=s=>h("div",{class:"sl sl-next",dataset:{caravan:1}},h("small",{},"COMING UP NEXT ON THE ROAD"),h("h1",{class:"gold-text"},s.title),h("p",{},s.text),
  s.clue?frag(1,h("div",{class:"clue"},h("small",{},"👁 THE SHADOW COURIER"),h("p",{},s.clue))):null);
const fmt=sec=>{ sec=Math.max(0,Math.round(sec)); return Math.floor(sec/60)+":"+String(sec%60).padStart(2,"0"); };

/* --------------------------------------------------------------- presenter */
RR.presentSlides=function(root,week,day){
  const slides=RR.buildSlides(week,day), W=RR.WEEKS[week], L=W.days[day], D=RR.DAYS.find(d=>d.id===day);
  let i=0, step=0, uiHide=null, blank=false, notesOn=false, gridOn=false;
  const stage=h("div",{class:"stage-wrap"}), deck=h("div",{class:"deck"}), bg=h("div",{class:"deck-bg"});
  const bar=h("div",{class:"hud-top"}), prog=h("div",{class:"prog"}), ctl=h("div",{class:"hud-bot"});
  const notes=h("aside",{class:"notes",hidden:true}), grid=h("div",{class:"grid",hidden:true}), help=h("div",{class:"helpbox",hidden:true});
  const tmr=h("div",{class:"mini-timer",hidden:true});
  const blankEl=h("div",{class:"blank",hidden:true});
  deck.append(bg,h("div",{class:"mist m1"}),h("div",{class:"mist m2"}),h("div",{class:"embers"},Array.from({length:14},(_,k)=>h("i",{style:{left:(k*7.3+3)%100+"%",animationDelay:(k*.9)%7+"s",animationDuration:(7+k%5)+"s"}}))));
  const slideHost=h("div",{class:"slide-host"}); deck.append(slideHost);
  stage.append(deck); root.append(stage,bar,prog,ctl,tmr,notes,grid,help,blankEl);
  RR.slot(bg,"W"+String(week).padStart(2,"0")+"-"+day.toUpperCase(),{fit:"cover"});

  /* timer */
  const T={left:0,run:false,id:null,total:0};
  function tdraw(){ tmr.hidden=!(T.total>0); tmr.textContent="⏱ "+fmt(T.left); tmr.classList.toggle("low",T.left<=10&&T.run);
    const bt=$("#bigTimer",slideHost); if(bt){ bt.textContent=fmt(T.left); bt.classList.toggle("low",T.left<=10&&T.run&&T.total>0); bt.classList.toggle("done",T.total>0&&T.left===0); } }
  function tset(sec,go){ clearInterval(T.id); T.left=sec; T.total=sec; T.run=!!go; tdraw(); if(go) T.id=setInterval(tick,1000); }
  function tick(){ if(T.left>0){ T.left--; tdraw(); if(T.left===0){ T.run=false; clearInterval(T.id); beep(); tmr.classList.add("done"); } } }
  function ttoggle(){ if(!T.total) return; if(T.run){ T.run=false; clearInterval(T.id); } else if(T.left>0){ T.run=true; T.id=setInterval(tick,1000); } tdraw(); }
  function beep(){ try{ const c=new (window.AudioContext||window.webkitAudioContext)(); [0,.25,.5].forEach((t,k)=>{ const o=c.createOscillator(),g=c.createGain(); o.frequency.value=k===2?880:660; g.gain.value=.12; o.connect(g); g.connect(c.destination); o.start(c.currentTime+t); o.stop(c.currentTime+t+.2); }); }catch(e){} }

  function frags(){ return $$(".frag",slideHost); }
  function render(){
    const s=slides[i], p=PH[s.phase];
    slideHost.innerHTML=""; const el=R[s.type](s); slideHost.append(el); step=0;
    deck.dataset.phase=s.phase; deck.style.setProperty("--pc",p.c); deck.dataset.type=s.type;
    deck.classList.toggle("dim",!["cover","dispatch","phase","next","reveal","pray"].includes(s.type));
    if(el.dataset&&el.dataset.art){ RR.assetUrl(el.dataset.art).then(u=>{ if(u&&el.isConnected) el.prepend(h("img",{class:"reveal-img",src:u,alt:""})); }); }
    if(el.dataset&&el.dataset.caravan){ RR.assetUrl("CORE-14").then(u=>{ if(u&&el.isConnected) slideHost.append(h("img",{class:"next-caravan",src:u,alt:""})); }); }
    { const m=el.querySelector&&el.querySelector("[data-face]"); if(m) RR.slot(m,m.dataset.face,{fit:"cover",pos:"center"}).then(ok=>{ if(ok) m.querySelector(".ico").style.display="none"; }); }
    el.classList.add("enter"); frags().forEach(f=>f.classList.remove("on"));
    if(s.timer && !(T.run)) tset(s.timer*60,false); else if(!s.timer && T.total && !T.run){ T.total=0; tdraw(); }
    if(s.type==="work"||s.timer){ tdraw(); }
    const bt=$("#bigTimer",slideHost); if(bt){ bt.onclick=ttoggle; }
    updateUI(); location.replace("#/"+day+"/"+(i+1)); window.parent!==window||0;
    if(RR.stopSpeak) RR.stopSpeak();
  }
  function updateUI(){
    const s=slides[i], p=PH[s.phase];
    bar.innerHTML=""; bar.append(
      h("a",{class:"back",href:"teacher.html#plans",title:"Back to Teacher area"},"✕ Exit"),
      h("span",{class:"chip",style:{"--pc":p.c}},icon(p.icon,26),h("b",{},p.name),h("em",{},p.mi)),
      h("span",{class:"lesson"},`Stage ${week} · ${D.en} · ${L.title}`),
      h("span",{class:"count"},(i+1)+" / "+slides.length));
    prog.innerHTML=""; slides.forEach((x,k)=>prog.append(h("i",{class:(k<i?"past ":k===i?"now ":"")+"",style:{"--pc":PH[x.phase].c},title:PH[x.phase].name,onclick:()=>go(k)})));
    notes.innerHTML=""; notes.append(h("small",{},"TEACHER NOTES · slide "+(i+1)),h("p",{},s.notes||"—"),h("small",{},"Timing"),h("p",{},timing(s)));
    const f=frags(); ctl.classList.toggle("hasfrag",f.length>0);
  }
  function timing(s){ return ({cover:"30 s",dispatch:"2 min",challenge:"5 min",retrieval:"3 min",prior:"2 min",goals:"2 min",vocab:"2 min",phase:"10 s",learn:"2 min",check:"1 min",talk:"3 min",faith:"6 min",situation:"4 min",mission:"2 min",path:"30 s",work:"timed",summary:"2 min",exit:"2 min",pray:"1 min",next:"1 min",rules:"2 min",fates:"2 min",creed:"5 min",launch:"1 min",debrief:"3 min",reveal:"1 min"})[s.type]||""; }
  function go(k){ i=RR.clamp(k,0,slides.length-1); render(); }
  function next(){ const f=frags(), hidden=f.filter(x=>!x.classList.contains("on"));
    if(hidden.length){ hidden[0].classList.add("on"); step++; const s=slides[i]; if(s.type==="situation"&&hidden.length===1) mark(); return; }
    if(i<slides.length-1){ i++; render(); } else { RR.toast&&RR.toast("🏁 End of lesson slides"); } }
  function mark(){ const t=$(".think",slideHost); if(!t) return; const b=+t.dataset.best; $$(".opt",slideHost).forEach((o,k)=>{ o.classList.toggle("best",k===b); }); }
  function back(){ const on=frags().filter(x=>x.classList.contains("on"));
    if(on.length){ on[on.length-1].classList.remove("on"); $$(".opt.best",slideHost).forEach(o=>o.classList.remove("best")); return; }
    if(i>0){ i--; render(); frags().forEach(x=>x.classList.add("on")); mark2(); } }
  function mark2(){ if(slides[i].type==="situation") mark(); }
  function readAloud(){ const s=slides[i]; const t=strip(s.text||s.q||s.story||s.li||s.title||""); RR.speak&&RR.speak(t); }
  function toggleFS(){ if(document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen(); }
  function buildGrid(){ grid.innerHTML=""; grid.append(h("div",{class:"gbar"},h("b",{},"All slides — click one to jump"),h("button",{class:"btn small ghost",onclick:()=>{gridOn=false;grid.hidden=true;}},"Close (G)")),
    h("div",{class:"gcells"},slides.map((s,k)=>h("button",{class:"gcell"+(k===i?" now":""),style:{"--pc":PH[s.phase].c},onclick:()=>{gridOn=false;grid.hidden=true;go(k);}},
     h("small",{},(k+1)+" · "+PH[s.phase].name),h("b",{},slideTitle(s)))))); }
  function slideTitle(s){ return s.title||s.q||(s.li?"Learning intention":"")||({faith:"Council Fire",goals:"Goals",vocab:"Word Wall"})[s.type]||s.type; }
  function showHelp(){ help.hidden=!help.hidden; }
  help.append(h("h3",{},"Presenter keys"),h("ul",{},[
    ["→ / Space / click","Next (reveals one item at a time)"],["←","Back"],["F","Fullscreen"],["G","All slides"],["N","Teacher notes"],["T","Start/stop timer"],["R","Read aloud"],["B","Blank screen"],["H","Hide controls"],["Home / End","First / last"],["?","This help"]].map(([k,v])=>h("li",{},h("kbd",{},k),v))),
    h("button",{class:"btn small",onclick:showHelp},"Close"));
  ctl.append(
    h("button",{class:"cb",title:"Back (←)",onclick:back},"◀"),
    h("button",{class:"cb big",title:"Next (→)",onclick:next},"▶"),
    h("span",{class:"sp"}),
    h("button",{class:"cb",title:"All slides (G)",onclick:()=>{gridOn=!gridOn;buildGrid();grid.hidden=!gridOn;}},"▦"),
    h("button",{class:"cb",title:"Notes (N)",onclick:()=>{notesOn=!notesOn;notes.hidden=!notesOn;}},"📝"),
    h("button",{class:"cb",title:"Timer (T)",onclick:()=>{ if(!T.total) tset(180,true); else ttoggle(); }},"⏱"),
    h("button",{class:"cb",title:"Read aloud (R)",onclick:readAloud},"🔊"),
    h("button",{class:"cb",title:"Blank (B)",onclick:()=>{blank=!blank;blankEl.hidden=!blank;}},"⬛"),
    h("button",{class:"cb",title:"Fullscreen (F)",onclick:toggleFS},"⛶"),
    h("button",{class:"cb",title:"Help (?)",onclick:showHelp},"?"));
  /* input */
  stage.addEventListener("click",e=>{ if(e.target.closest("a,button,.bigtimer")) return; const r=stage.getBoundingClientRect(); (e.clientX-r.left<r.width*.18)?back():next(); });
  document.addEventListener("keydown",e=>{
    if(e.target.closest&&e.target.closest("input,textarea")) return;
    const k=e.key;
    if(k==="ArrowRight"||k===" "||k==="PageDown"||k==="Enter"){ e.preventDefault(); next(); }
    else if(k==="ArrowLeft"||k==="PageUp"||k==="Backspace"){ e.preventDefault(); back(); }
    else if(k==="Home") go(0); else if(k==="End") go(slides.length-1);
    else if(/^f$/i.test(k)) toggleFS(); else if(/^g$/i.test(k)){ gridOn=!gridOn; buildGrid(); grid.hidden=!gridOn; }
    else if(/^n$/i.test(k)){ notesOn=!notesOn; notes.hidden=!notesOn; }
    else if(/^t$/i.test(k)){ if(!T.total) tset(180,true); else ttoggle(); }
    else if(/^r$/i.test(k)) readAloud(); else if(/^b$/i.test(k)||k==="."){ blank=!blank; blankEl.hidden=!blank; }
    else if(/^h$/i.test(k)) document.body.classList.toggle("hide-ui");
    else if(k==="?") showHelp(); else if(k==="Escape"){ grid.hidden=true; gridOn=false; help.hidden=true; blankEl.hidden=true; blank=false; }
  });
  let mv; document.addEventListener("mousemove",()=>{ document.body.classList.remove("idle"); clearTimeout(mv); mv=setTimeout(()=>document.body.classList.add("idle"),3500); });
  function fit(){ const sc=Math.min(innerWidth/1920,innerHeight/1080); stage.style.setProperty("--sc",sc); }
  addEventListener("resize",fit); fit();
  const m=location.hash.match(/\/(\d+)$/); i=m?RR.clamp(+m[1]-1,0,slides.length-1):0; render();
  return {slides,go,next,back};
};
})();
