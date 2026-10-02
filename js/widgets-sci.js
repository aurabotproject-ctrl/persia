/* ===================================================================
   WIDGETS — Wednesday (Science): Mystery Footprints · Zagros Habitat · Vocab Match · Animal Cards
   Includes silhouettes for the four Zagros animals.
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, h=RR.h, A=RR.art; RR.widgets=RR.widgets||{};

/* ---------- animal art (SVG strings, own viewBox each) ---------- */
A.leopard=(fill="#C89F52",spot="#362415")=>`<g class="leopard"><path d="M18 34 C18 22 36 18 56 20 L92 20 C104 20 112 24 120 22 C126 16 134 16 138 22 L146 30 C148 34 144 36 140 36 L132 36 C128 42 120 46 112 46 L60 46 C34 48 18 44 18 34Z" fill="${fill}"/><path d="M28 40 L38 40 L36 74 L26 74Z M52 44 L62 44 L60 74 L50 74Z M100 42 L110 42 L112 74 L102 74Z M124 38 L133 38 L136 74 L126 74Z" fill="${fill}"/><path d="M20 30 C0 28 -8 10 4 -2" stroke="${fill}" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="130" cy="16" r="4.5" fill="${fill}"/><circle cx="139" cy="19" r="4.5" fill="${fill}"/><g fill="${spot}">${[[40,28],[56,26],[72,30],[88,27],[104,30],[48,38],[66,40],[84,40],[100,38],[116,32],[30,34],[1,6]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3"/>`).join("")}<circle cx="136" cy="27" r="1.8"/><path d="M143 31 l4 2" stroke="${spot}" stroke-width="2"/></g></g>`;
A.bear=(fill="#5a3a24")=>`<g class="bear" fill="${fill}"><path d="M14 52 C14 30 40 20 70 22 C86 16 100 18 108 28 C118 26 130 30 134 40 L144 48 C146 52 142 56 136 56 L126 56 L124 92 L106 92 L104 64 L52 64 L50 92 L32 92 L30 62 C20 60 14 58 14 52Z"/><circle cx="116" cy="24" r="7"/><circle cx="126" cy="28" r="6"/><circle cx="134" cy="44" r="2.6" fill="#1A100A"/><circle cx="120" cy="36" r="2" fill="#1A100A"/></g>`;
A.animalSVG=function(id,w=200){
  const an=(RR.animal&&RR.animal(id))||{}; const col=an.hue||"#8a6a40";
  const FB={fallowdeer:"ibex",dugong:"bear",caspianseal:"bear",hawksbill:"bear",onager:"ibex",gazelle:"ibex",buffalo:"ibex",cheetah:"leopard",lion:"leopard",caspiantiger:"leopard",sandcat:"leopard",bactrian:"camel",jerboa:"bear",flamingo:"eagle"};
  const k=FB[id]||id;
  const vb={leopard:"-12 -6 170 86",ibex:"0 -12 126 120",bear:"0 10 150 90",eagle:"-70 -20 140 60",camel:"0 0 190 130"}[k]||"0 0 100 100";
  const body={leopard:A.leopard(FB[id]?col:undefined),ibex:A.ibex(FB[id]?col:"#6d4a2a"),bear:A.bear(FB[id]?col:undefined),eagle:`<g transform="translate(0 6) scale(1.05)">${A.eagle(FB[id]?col:"#352415")}</g>`,camel:A.camel(col)}[k];
  return `<svg viewBox="${vb}" width="${w}" role="img" aria-label="${id}">${body}</svg>`;
};

/* ---------------- 1. MYSTERY FOOTPRINTS ---------------- */
const TRACKS=[
 {id:"ibex",ans:"ibex",gandom:"That’s MY footprint! I’m certain. (I have never been in the Zagros.)",
  svg:`<path d="M58 36 C46 60 48 100 66 126 C76 110 80 70 72 36Z"/><path d="M92 36 C84 70 86 110 98 126 C114 100 116 60 104 36Z"/><circle cx="62" cy="138" r="4"/><circle cx="104" cy="138" r="4"/>`,
  clue:"A <b>cloven (two-toed) hoof</b> with a hard rim — made for gripping steep rock. It’s the <b>bezoar ibex</b>!"},
 {id:"leopard",ans:"leopard",gandom:"A giant house-cat? No… a… camel with a tiny round foot?",
  svg:`<path d="M80 92 C60 90 50 106 56 120 C62 134 98 134 104 120 C110 106 100 90 80 92Z"/><ellipse cx="50" cy="76" rx="11" ry="14"/><ellipse cx="68" cy="58" rx="11" ry="15"/><ellipse cx="92" cy="58" rx="11" ry="15"/><ellipse cx="110" cy="76" rx="11" ry="14"/>`,
  clue:"A round pad and <b>four toes — and no claw marks</b>. Cats keep their claws pulled in when they walk. It’s the <b>Persian leopard</b>!"},
 {id:"bear",ans:"bear",gandom:"Definitely a camel. Wearing boots.",
  svg:`<path d="M80 80 C46 76 36 110 50 128 C64 142 100 142 114 128 C128 110 114 76 80 80Z"/><ellipse cx="38" cy="66" rx="9" ry="12"/><ellipse cx="56" cy="50" rx="9" ry="13"/><ellipse cx="80" cy="44" rx="9" ry="13"/><ellipse cx="104" cy="50" rx="9" ry="13"/><ellipse cx="122" cy="66" rx="9" ry="12"/><g stroke-width="3" stroke-linecap="round" fill="none"><path d="M36 50 L34 38"/><path d="M55 34 L54 22"/><path d="M80 28 L80 16"/><path d="M105 34 L106 22"/><path d="M124 50 L128 38"/></g>`,
  clue:"A broad pad with <b>five toes and long claw marks</b> — claws for digging roots and insects. It’s the <b>brown bear</b>!"},
 {id:"eagle",ans:"eagle",gandom:"A very small camel. With feathers.",
  svg:`<path d="M80 130 L80 70" stroke-width="12" stroke-linecap="round"/><path d="M80 80 L40 40" stroke-width="10" stroke-linecap="round"/><path d="M80 80 L120 40" stroke-width="10" stroke-linecap="round"/><path d="M40 40 q-10 -10 -4 -20 q8 8 10 16Z"/><path d="M120 40 q10 -10 4 -20 q-8 8 -10 16Z"/><path d="M80 70 q-4 -22 0 -34 q6 12 0 34Z"/><path d="M80 130 L56 146 M80 130 L104 146" stroke-width="10" stroke-linecap="round"/>`,
  clue:"<b>Three long toes forward and one back</b>, with sharp talon marks — made for gripping prey. It’s the <b>golden eagle</b>!"}
];
const ANI_OPTS=[["leopard","Persian leopard"],["ibex","Bezoar ibex"],["bear","Brown bear"],["eagle","Golden eagle"]];
RR.widgets.footprints=function(){
  const root=h("div",{class:"prints"}); let i=0,score=0; const stage=h("div",{class:"pr-stage"});
  function show(){
    if(i>=TRACKS.length){ stage.innerHTML=`<h5>Tracker’s score: ${score}/${TRACKS.length} 🐾</h5><p>${score===TRACKS.length?"Perfect! Gandom has never been so impressed. (She still thinks it was her.)":"Well done, tracker. Gandom has been wrong every single time!"}</p>`; if(score===TRACKS.length){RR.sfx.fanfare();RR.confetti({particleCount:70});} return; }
    const t=TRACKS[i];
    const gandom=h("div",{class:"gandom-wrap"},h("div",{class:"gandom",html:`<svg viewBox="0 0 190 135" width="120">${A.camel("#c79a5a")}<circle cx="164" cy="27" r="2.2" fill="#211812"/></svg>`}),h("div",{class:"bubble"},t.gandom));
    const mud=h("div",{class:"mud",html:`<svg viewBox="0 0 160 160" role="img" aria-label="Footprint ${i+1} of ${TRACKS.length}"><defs><radialGradient id="mudg" cx=".5" cy=".5" r=".7"><stop offset="0" stop-color="#6e5238"/><stop offset="1" stop-color="#3f2e1e"/></radialGradient></defs><rect width="160" height="160" rx="14" fill="url(#mudg)"/><g fill="#271a10" stroke="#8a6b48" stroke-width="2" stroke-opacity=".7">${t.svg}</g></svg>`});
    const fb=h("div",{class:"fb",role:"status"});
    const opts=h("div",{class:"pr-opts"},ANI_OPTS.map(([id,name])=>h("button",{class:"btn ghost small",type:"button","data-id":id,onclick:e=>{
      const ok=id===t.ans; RR.$$("button",opts).forEach(b=>{b.disabled=true; if(b.dataset.id===t.ans) b.classList.add("right");}); if(!ok) e.currentTarget.classList.add("wrong");
      ok?(score++,RR.sfx.correct()):RR.sfx.wrong(); fb.innerHTML=(ok?"<b>Yes!</b> ":"<b>Not this time.</b> ")+t.clue;
      gandom.classList.add("shake"); stage.append(h("button",{class:"btn small",type:"button",onclick:()=>{i++;show();}},i<TRACKS.length-1?"Next track ▶":"Finish"));
    }},name)));
    stage.innerHTML=""; stage.append(h("p",{class:"pr-count"},`Track ${i+1} of ${TRACKS.length} — whose footprint is this?`),h("div",{class:"pr-row"},mud,gandom),opts,fb);
  }
  root.append(stage); show();
  return RR.widgetBox("Mystery Footprints","Whose tracks are in the mud? (Gandom has guessed… badly.)",root);
};

/* ---------------- 2. ZAGROS HABITAT SCENE ---------------- */
const HAB=[
 {id:"ibex",name:"Bezoar ibex",x:690,y:150,sc:.8,kind:"animal",text:"<b>Herbivore.</b> Hard-rimmed hooves grip rock; very long horns; thick winter coat. <i>Eats:</i> grasses and leaves. <i>Eaten by:</i> the leopard."},
 {id:"leopard",name:"Persian leopard",x:420,y:236,sc:.75,kind:"animal",text:"<b>Carnivore (top predator here).</b> Spotted coat for camouflage; powerful climber and ambusher. <i>Eats:</i> ibex and other animals. Rare and endangered."},
 {id:"bear",name:"Brown bear",x:130,y:330,sc:.7,kind:"animal",text:"<b>Omnivore.</b> Thick fur; long claws for digging; eats plants AND meat — so it finds food in every season."},
 {id:"eagle",name:"Golden eagle",x:560,y:72,sc:.7,kind:"animal",text:"<b>Carnivore.</b> Sharp eyesight spots prey from high above; hooked beak and strong talons; broad wings soar on warm air."},
 {id:"oak",name:"Oak woodland",x:250,y:300,kind:"plant",text:"<b>Producer.</b> Oaks make food from sunlight and give shelter and shade. Acorns and leaves feed many animals."},
 {id:"grass",name:"Mountain grasses",x:560,y:380,kind:"plant",text:"<b>Producer.</b> Grasses are the start of the food chain: <b>grass → ibex → leopard</b>."},
 {id:"stream",name:"Mountain stream",x:800,y:395,kind:"abiotic",text:"<b>Non-living (abiotic).</b> Fresh water that every animal here needs to drink."}
];
RR.widgets.zagrosHabitat=function(){
  const root=h("div",{class:"zhab"}); let abiotic=false;
  const trees=Array.from({length:15},(_,i)=>{ const r=A.rng(300+i); return A.oak((60+r()*330).toFixed(0),(290+r()*70).toFixed(0),(.9+r()*.7).toFixed(2),i%2?"#2f6b3a":"#3d7f48"); }).join("");
  const svg=h("div",{html:`<svg viewBox="0 0 900 470" role="img" aria-label="Zagros mountain habitat scene with animals, oak woodland, grasses and a stream">
   <defs><linearGradient id="zsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A0ACBD"/><stop offset="1" stop-color="#E9EBEF"/></linearGradient>
   <linearGradient id="zmtn" gradientUnits="userSpaceOnUse" x1="0" y1="40" x2="0" y2="300"><stop offset="0" stop-color="#fff"/><stop offset=".25" stop-color="#DAD5E2"/><stop offset=".6" stop-color="#8a8aa8"/><stop offset="1" stop-color="#6a7090"/></linearGradient>
   <linearGradient id="zslope" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a7a58"/><stop offset=".5" stop-color="#5f7a44"/><stop offset="1" stop-color="#43603a"/></linearGradient></defs>
   <rect width="900" height="470" fill="url(#zsky)"/><circle cx="800" cy="60" r="34" fill="#E1D8AF"/>
   <path d="${A.ridge(61,{W:900,H:470,y:200,amp:230,rough:.58,peak:1.7})}" fill="url(#zmtn)"/>
   <path d="M0 470 V250 C140 220 260 250 380 240 S600 190 700 220 S860 240 900 230 V470Z" fill="url(#zslope)"/>
   <path d="M610 470 C660 400 720 380 760 330 C790 290 840 280 900 260 V470Z" fill="#4a6a3a" opacity=".6"/>
   <path d="M880 470 C820 430 800 410 760 400 C700 392 660 410 620 470Z" fill="#7C97A3" opacity=".95" class="shimmer"/>
   ${trees}
   <g fill="#8ba85a" opacity=".9">${Array.from({length:70},(_,i)=>{const r=A.rng(700+i);const x=420+r()*330,y=360+r()*90;return `<path d="M${x.toFixed(0)} ${y.toFixed(0)} q-2 -14 -6 -18 q6 4 8 18 q4 -12 10 -16 q-6 8 -6 16Z"/>`}).join("")}</g>
   <g id="hotspots"></g>
   <g id="abio" opacity="0" style="transition:opacity .5s" font-family="Nunito" font-weight="800" font-size="16"><g fill="#211812" stroke="#fff" stroke-width="3" paint-order="stroke"><text x="110" y="110">☀ sunlight</text><text x="300" y="150">🪨 rock</text><text x="700" y="318">🌡 cold at the top, warmer below</text><text x="700" y="440">💧 water</text></g></g>
   </svg>`});
  const hs=svg.querySelector("#hotspots");
  const panel=h("div",{class:"zh-panel parchment",html:"<h5>Tap an animal or plant</h5><p>Find out how each one is <b>suited to its habitat</b> — and who eats whom.</p>"});
  const seen=new Set(); const prog=h("p",{class:"zh-prog"},"Explored: 0/"+HAB.length);
  HAB.forEach(o=>{
    const g=document.createElementNS("http://www.w3.org/2000/svg","g"); g.setAttribute("tabindex","0"); g.setAttribute("role","button"); g.setAttribute("aria-label",o.name); g.style.cursor="pointer"; g.classList.add("spot");
    let inner="";
    if(o.kind==="animal"){ const art={ibex:A.ibex("#5b3f26"),leopard:A.leopard(),bear:A.bear(),eagle:`<g transform="scale(1.2)">${A.eagle("#26180C")}</g>`}[o.id]; inner=`<g transform="translate(${o.x} ${o.y}) scale(${o.sc})">${art}</g><circle cx="${o.x+40}" cy="${o.y+30}" r="34" fill="#EAE3CB" opacity=".0" class="halo"/>`; g.innerHTML=inner+`<g transform="translate(${o.x+36} ${o.y-14})"><circle r="12" fill="#8D2A30" stroke="#EAE3CB" stroke-width="2.5" class="pulse"/><text y="5" text-anchor="middle" font-size="14" font-weight="800" fill="#fff" font-family="Cinzel">?</text></g>`; }
    else { g.innerHTML=`<g transform="translate(${o.x} ${o.y})"><circle r="18" fill="${o.kind==="plant"?"#4F7A5A":"#404D5F"}" opacity=".3" class="pulse"/><circle r="11" fill="${o.kind==="plant"?"#4F7A5A":"#404D5F"}" stroke="#EAE3CB" stroke-width="3"/></g>`; }
    const act=()=>{ RR.sfx.pop(); RR.$$(".spot",svg).forEach(n=>n.classList.remove("on")); g.classList.add("on"); seen.add(o.id); prog.textContent=`Explored: ${seen.size}/${HAB.length}`;
      panel.innerHTML=`<h5>${o.name}</h5><p>${o.text}</p>`; panel.classList.remove("pop"); void panel.offsetWidth; panel.classList.add("pop"); if(seen.size===HAB.length){ RR.toast("Habitat explorer! 🏔️"); RR.sfx.coin(); } };
    g.addEventListener("click",act); g.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){e.preventDefault();act();} }); hs.append(g);
  });
  const tog=h("button",{class:"btn ghost small",type:"button","aria-pressed":"false",onclick:e=>{ abiotic=!abiotic; svg.querySelector("#abio").setAttribute("opacity",abiotic?1:0); e.currentTarget.setAttribute("aria-pressed",abiotic); e.currentTarget.textContent=abiotic?"Hide non-living things":"Show non-living (abiotic) things"; }},"Show non-living (abiotic) things");
  const chain=h("div",{class:"chain",html:`<span>🌿 grass</span><i>→</i><span>🐐 ibex</span><i>→</i><span>🐆 leopard</span>`});
  root.append(h("div",{class:"zh-grid"},svg,h("div",{},panel,prog,tog,h("p",{class:"w-hint"},"A food chain from this habitat:"),chain)));
  return RR.widgetBox("The Zagros Mountain Community","One habitat. Many living things — and the non-living things they need.",root);
};

/* ---------------- 3. VOCAB MATCH ---------------- */
const VOC=[["Habitat","The natural home of a living thing."],["Population","All the living things of ONE kind in a place."],["Community","All the different populations living together in one place."],["Ecosystem","A community plus its non-living surroundings."],["Adaptation","A feature or behaviour that helps a living thing survive."]];
RR.widgets.vocabMatch=function(){
  const root=h("div",{class:"vocab"}); let pick=null,matched=0;
  const words=h("div",{class:"v-col"},RR.shuffle(VOC).map(([w])=>h("button",{class:"v-card",type:"button","data-w":w,onclick:e=>sel(e.currentTarget,"w")},w)));
  const defs=h("div",{class:"v-col"},RR.shuffle(VOC).map(([w,d])=>h("button",{class:"v-card def",type:"button","data-w":w,onclick:e=>sel(e.currentTarget,"d")},d)));
  const fb=h("div",{class:"fb",role:"status"});
  function sel(el,side){ if(el.classList.contains("done")) return; if(pick&&pick.side===side){ pick.el.classList.remove("on"); pick=null; }
    if(!pick){ pick={el,side}; el.classList.add("on"); RR.sfx.tick(); return; }
    const ok=pick.el.dataset.w===el.dataset.w; const a=pick.el,b=el; pick=null; a.classList.remove("on");
    if(ok){ a.classList.add("done"); b.classList.add("done"); matched++; RR.sfx.correct(); fb.textContent=matched===VOC.length?"All matched! 🎉":"Matched!"; if(matched===VOC.length){ RR.sfx.fanfare(); RR.confetti({particleCount:80}); } }
    else { a.classList.add("bad"); b.classList.add("bad"); RR.sfx.wrong(); fb.textContent="Not a pair — try again."; setTimeout(()=>{a.classList.remove("bad");b.classList.remove("bad");},600); }
  }
  root.append(h("p",{class:"w-hint"},"Tap a word, then tap its meaning."),h("div",{class:"v-grid"},words,defs),fb);
  return RR.widgetBox("Five Big Words","Match each science word to its meaning.",root);
};

/* ---------------- 4. ANIMAL CARDS ---------------- */
RR.cardsCollected=()=>RR.ls.get("cards",[]);
RR.collectCard=id=>{ const c=RR.cardsCollected(); if(!c.includes(id)){ c.push(id); RR.ls.set("cards",c); return true; } return false; };
RR.animalCard=function(a,{locked=false}={}){
  const have=RR.cardsCollected().includes(a.id);
  const el=h("button",{class:"acard"+(have?" have":"")+(locked?" locked":""),type:"button","aria-label":(have?a.name:"Locked animal card: tap to collect")},
    h("div",{class:"ac-inner"},
      h("div",{class:"ac-face ac-front",style:{"--b1":a.bg[0],"--b2":a.bg[1]}},
        h("div",{class:"ac-art"},h("div",{class:"ac-sil",html:RR.art.animalSVG(a.id,190)})),
        h("div",{class:"ac-holo"}),
        h("div",{class:"ac-title"},h("h5",{},have?a.name:"???"),h("span",{class:"ac-stars"},"★".repeat(a.rarity)+"☆".repeat(3-a.rarity))),
        h("div",{class:"ac-stats"},have?[h("span",{},"🏔 "+a.habitat),h("span",{},"🍽 "+a.diet)]:h("span",{},"Tap to collect!"))),
      h("div",{class:"ac-face ac-back parchment"},
        h("h5",{},a.name),h("small",{},a.sci),
        h("ul",{},a.adapt.map(t=>h("li",{},t))),
        h("p",{class:"ac-fun"},h("b",{},"Fun fact: "),a.fun),
        h("p",{class:"ac-status"},"Conservation: ",a.status,h("br"),h("small",{},"(check the IUCN Red List for the latest)")))));
  RR.slot(el.querySelector(".ac-art"),a.asset,{fit:"cover"});
  /* tilt + holo */
  el.addEventListener("pointermove",e=>{ if(!RR.motionOK()) return; const r=el.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
    el.style.setProperty("--rx",((.5-y)*16).toFixed(1)+"deg"); el.style.setProperty("--ry",((x-.5)*18).toFixed(1)+"deg"); el.style.setProperty("--mx",(x*100)+"%"); el.style.setProperty("--my",(y*100)+"%"); });
  el.addEventListener("pointerleave",()=>{ el.style.setProperty("--rx","0deg"); el.style.setProperty("--ry","0deg"); });
  el.addEventListener("click",()=>{
    if(!el.classList.contains("have")){ el.classList.add("have","reveal"); if(RR.collectCard(a.id)){ RR.sfx.fanfare(); RR.coinRain({n:16,z:20}); RR.toast("Card collected: "+a.name+" ✨"); const t=el.querySelector(".ac-title h5"); t.textContent=a.name; const st=el.querySelector(".ac-stats"); st.innerHTML=`<span>🏔 ${RR.esc(a.habitat)}</span><span>🍽 ${RR.esc(a.diet)}</span>`; document.dispatchEvent(new CustomEvent("rr:cards")); } return; }
    el.classList.toggle("flipped"); RR.sfx.flip(); });
  return el;
};
RR.widgets.animalCards=function(L){
  const wk=(L&&parseInt((String(L.id||"w1").match(/^w(\d+)/)||[])[1],10))||1;
  const row=h("div",{class:"cards-row"},RR.ANIMALS.filter(a=>a.week===wk).map(a=>RR.animalCard(a)));
  return RR.widgetBox("Your Animal Cards — Week "+wk,"Tap a card to collect it. Tap again to flip it over. Tilt it to see the holo shine!",row);
};
})();
