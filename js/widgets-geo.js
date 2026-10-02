/* ===================================================================
   WIDGETS — Tuesday (Geography): Plateau Map · Qanat · Site Game · Settlement Ladder
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, h=RR.h; RR.widgets=RR.widgets||{};

/* ---------------- 1. PLATEAU MAP (schematic, lon/lat projected) ---------------- */
const PX=(lon,lat)=>[ (lon-42.6)*38, (40.6-lat)*43 ];
const poly=(pts)=>"M"+pts.map(([lo,la])=>PX(lo,la).map(v=>v.toFixed(0)).join(" ")).join(" L")+"Z";
const IRAN=[[44.0,39.4],[45.0,39.0],[47.5,39.5],[48.3,38.4],[49.0,37.6],[50,37.4],[51.5,36.8],[53.9,36.9],[54.0,37.3],[55.5,37.2],[56.9,38.0],[58.3,37.6],[59.4,37.4],[60.5,36.6],[61.2,36.6],[60.8,34.5],[60.5,33.5],[60.6,31.8],[61.8,31.4],[61.7,29.7],[62.5,29.3],[63.3,27.2],[62.7,25.2],[61.6,25.2],[59.0,25.4],[57.3,25.7],[56.8,27.1],[55.5,26.7],[54.0,26.7],[52.5,27.5],[51.3,28.0],[50.2,29.9],[48.9,30.4],[48.5,29.9],[47.7,31.0],[47.4,32.2],[46.1,33.0],[45.4,34.2],[46.1,35.1],[45.6,35.9],[44.8,37.2],[44.2,38.4]];
const CASPIAN=[[49.0,37.6],[50,37.4],[51.5,36.8],[53.9,36.9],[54.0,37.3],[55.5,37.2],[56.9,38.0],[56.0,40.4],[53.0,40.5],[49.8,40.5],[48.6,39.4],[48.3,38.4]];
const GULF=[[48.9,30.4],[50.2,29.9],[51.3,28.0],[52.5,27.5],[54.0,26.7],[55.5,26.7],[56.8,27.1],[57.3,25.7],[59.0,25.4],[59.0,24.4],[56.5,24.4],[55,25.2],[52,24.6],[51.4,25.2],[50.6,26.0],[50.1,27.0],[48.8,28.4],[48,29.9]];
const SPOTS=[
 {id:"zagros",name:"Zagros Mountains",lonlat:[48.4,33.2],kind:"mountain",text:"Long folded ranges down the <b>west</b> of the plateau. Home of the early Persian villages, oak woods, ibex and leopards. Their snow feeds the rivers and the qanats."},
 {id:"alborz",name:"Alborz Mountains",lonlat:[52.2,36.1],kind:"mountain",text:"Mountains curving across the <b>north</b>, between the plateau and the Caspian Sea. <b>Mt Damavand</b>, Iran’s highest peak, is about 5,600 m — taller than anything in Aotearoa!"},
 {id:"kavir",name:"Dasht-e Kavir",lonlat:[54.6,34.4],kind:"desert",text:"The <b>Great Salt Desert</b> in the middle of the plateau — salt flats, dry lakes and very little water. Settlements keep to its edges."},
 {id:"lut",name:"Dasht-e Lut",lonlat:[59.0,31.0],kind:"desert",text:"The <b>Lut Desert</b> in the south-east, one of the hottest places on Earth. Almost no people live in its centre."},
 {id:"caspian",name:"Caspian Sea",lonlat:[51.9,38.8],kind:"sea",text:"The world’s largest inland sea, lapping the <b>north</b> of Iran. The Caspian coast is green and rainy — very different from the dry plateau."},
 {id:"gulf",name:"Persian Gulf",lonlat:[52.5,25.9],kind:"sea",text:"The warm sea along the <b>south</b>. Ships from here carried goods between Persia, Arabia and India."},
 {id:"susa",name:"Susa",lonlat:[48.25,32.19],kind:"city",text:"An Elamite <b>city</b> in the south-west lowlands, between the Zagros foothills and the rivers. One of the world’s earliest cities."},
 {id:"ecbatana",name:"Ecbatana",lonlat:[48.52,34.80],kind:"city",text:"Capital of the <b>Medes</b>, in the Zagros. Today it is the city of Hamadan."}
];
const COMPASS_Q=[
 {q:"Which direction is Susa from Ecbatana?",a:"S",from:"ecbatana",to:"susa"},
 {q:"Which direction is the Caspian Sea from the Persian Gulf?",a:"N",from:"gulf",to:"caspian"},
 {q:"Which direction is the Dasht-e Lut from the Dasht-e Kavir?",a:"SE",from:"kavir",to:"lut"}
];
RR.widgets.plateauMap=function(){
  const root=h("div",{class:"pmap"}); const [mx,my]=[0,0];
  const hills=(lon,lat,n,dx,dy,sc=1)=>Array.from({length:n},(_,i)=>{ const [x,y]=PX(lon+dx*i,lat+dy*i); return `<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(${sc})"><path d="M-14 0 L0 -22 L14 0Z" fill="#9C7B48" stroke="#5C4020" stroke-width="1.4"/><path d="M0 -22 L-4 -13 L0 -15 L4 -12Z" fill="#EFE8D4"/></g>`; }).join("");
  const dots=(lon,lat,rx,ry,n,seed)=>{ const r=RR.art.rng(seed); return Array.from({length:n},()=>{ const a=r()*6.28, k=Math.sqrt(r()); const [x,y]=PX(lon+Math.cos(a)*rx*k,lat+Math.sin(a)*ry*k); return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(r()*1.6+.7).toFixed(1)}" fill="#8F6C35" opacity=".6"/>`; }).join(""); };
  const svg=h("div",{html:`<svg viewBox="0 0 840 720" role="img" aria-label="Schematic map of the Iranian Plateau with mountains, deserts and seas">
   <defs><filter id="pmr"><feTurbulence type="fractalNoise" baseFrequency=".02" numOctaves="3" seed="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="5"/></filter>
   <linearGradient id="pmsea" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#99A6B8"/><stop offset="1" stop-color="#435369"/></linearGradient></defs>
   <rect width="840" height="720" fill="#E7D6B0"/>
   <g filter="url(#pmr)"><path d="${poly(CASPIAN)}" fill="url(#pmsea)" stroke="#364355" stroke-width="2"/><path d="${poly(GULF)}" fill="url(#pmsea)" stroke="#364355" stroke-width="2"/>
   <path d="${poly(IRAN)}" fill="#E3D8BC" stroke="#5C4020" stroke-width="3" stroke-linejoin="round"/></g>
   ${dots(54.6,34.4,3.4,1.6,70,1)}${dots(59.0,31.0,1.5,2.6,55,2)}
   ${hills(45.4,37.2,9,.55,-.5*(-1)*0.0,1.1).replace(/.*/,"")}
   ${(()=>{ const pts=[[45.3,37.6],[45.9,36.2],[46.8,34.9],[47.9,33.8],[49.1,32.6],[50.3,31.5],[51.5,30.6],[52.7,29.5],[54.0,28.6],[55.3,27.8]]; return pts.map(([lo,la],i)=>{const [x,y]=PX(lo,la);return `<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(${(1.0+(i%3)*.15).toFixed(2)})"><path d="M-14 0 L0 -24 L14 0Z" fill="#9C7B48" stroke="#5C4020" stroke-width="1.4"/><path d="M0 -24 L-4 -14 L0 -16 L4 -13Z" fill="#EFE8D4"/></g>`}).join(""); })()}
   ${(()=>{ const pts=[[48.9,36.9],[50.0,36.6],[51.2,36.3],[52.4,36.2],[53.6,36.4],[54.8,36.6],[56.0,36.7],[57.2,36.9]]; return pts.map(([lo,la],i)=>{const [x,y]=PX(lo,la);return `<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(${(1.1+(i%2)*.25).toFixed(2)})"><path d="M-14 0 L0 -28 L14 0Z" fill="#a07a48" stroke="#5C4020" stroke-width="1.4"/><path d="M0 -28 L-5 -15 L0 -18 L5 -14Z" fill="#EFE8D4"/></g>`}).join(""); })()}
   <g font-family="Amiri,Georgia,serif" font-style="italic" fill="#46321A" font-size="22" opacity=".8"><text x="${PX(52.0,39.3)[0]-40}" y="${PX(52.0,39.3)[1]}" fill="#2D3847">Caspian Sea</text><text x="${PX(51,24.9)[0]-30}" y="${PX(51,24.9)[1]}" fill="#2D3847">Persian Gulf</text></g>
   <g id="spots"></g>
   <g transform="translate(770 70)"><circle r="34" fill="none" stroke="#5C4020" stroke-width="2"/><path d="M0 -42 L8 0 L0 42 L-8 0Z M-42 0 L0 -8 L42 0 L0 8Z" fill="#7F5A33" stroke="#3A2817" stroke-width="1.2"/><path d="M0 -42 L8 0 L-8 0Z" fill="#8D2A30"/><text y="-50" text-anchor="middle" font-family="Cinzel,serif" font-size="16" fill="#3A2817" font-weight="700">N</text></g>
   <g transform="translate(60 668)"><path d="M0 0 H80.5" stroke="#3A2817" stroke-width="5"/><path d="M0 -6 V6 M80.5 -6 V6" stroke="#3A2817" stroke-width="2.5"/><text x="0" y="-12" font-family="Nunito,sans-serif" font-size="14" fill="#3A2817" font-weight="700">0</text><text x="80" y="-12" text-anchor="middle" font-family="Nunito,sans-serif" font-size="14" fill="#3A2817" font-weight="700">200 km</text></g>
   </svg>`});
  const spotsG=svg.querySelector("#spots");
  const panel=h("div",{class:"pm-panel parchment",html:"<h5>Tap a place</h5><p>Tap the glowing pins to learn about the plateau’s mountains, deserts, seas and first cities.</p>"});
  SPOTS.forEach(s=>{ const [x,y]=PX(...s.lonlat); const col={mountain:"#574A6B",desert:"#95513B",sea:"#334051",city:"#8D2A30"}[s.kind];
    const g=document.createElementNS("http://www.w3.org/2000/svg","g"); g.setAttribute("transform",`translate(${x.toFixed(0)} ${y.toFixed(0)})`); g.setAttribute("tabindex","0"); g.setAttribute("role","button"); g.setAttribute("aria-label",s.name); g.style.cursor="pointer"; g.classList.add("spot");
    g.innerHTML=`<circle r="20" fill="${col}" opacity=".22" class="pulse"/><circle r="9" fill="${col}" stroke="#EAE3CB" stroke-width="3"/><text y="-17" text-anchor="middle" font-family="Cinzel,serif" font-weight="700" font-size="15" fill="#211812" stroke="#E3D8BC" stroke-width="4" paint-order="stroke">${s.name}</text>`;
    const act=()=>{ RR.sfx.pop(); panel.innerHTML=`<h5>${s.name}</h5><p>${s.text}</p>`; panel.classList.remove("pop"); void panel.offsetWidth; panel.classList.add("pop"); RR.$$(".spot",svg).forEach(n=>n.classList.remove("on")); g.classList.add("on"); };
    g.addEventListener("click",act); g.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); act(); } });
    spotsG.append(g); });
  /* compass challenge */
  let qi=0,score=0; const cq=h("div",{class:"compass-q"}); const dirs=["N","NE","E","SE","S","SW","W","NW"];
  function showQ(){ if(qi>=COMPASS_Q.length){ cq.innerHTML=`<h5>Navigator’s score: ${score}/${COMPASS_Q.length} 🧭</h5><p>${score===3?"Perfect — you can lead any caravan!":"Good work. Use the compass rose to double-check next time."}</p>`; if(score===3){ RR.sfx.fanfare(); RR.confetti({particleCount:60}); } return; }
    const q=COMPASS_Q[qi]; cq.innerHTML=`<h5>🧭 Compass challenge ${qi+1}/${COMPASS_Q.length}</h5><p><b>${q.q}</b></p>`;
    const row=h("div",{class:"dirs"},dirs.map(d=>h("button",{class:"btn ghost small",type:"button",onclick:e=>{ const ok=d===q.a; if(ok) score++; ok?RR.sfx.correct():RR.sfx.wrong(); e.currentTarget.classList.add(ok?"right":"wrong"); RR.$$("button",row).forEach(b=>b.disabled=true); cq.append(h("p",{class:"fb"},ok?"Correct!":`The answer is ${q.a}.`)); qi++; setTimeout(showQ,1300); }},d)));
    cq.append(row); }
  showQ();
  root.append(h("div",{class:"pm-grid"},svg,h("div",{},panel,cq)));
  return RR.widgetBox("Map of the Iranian Plateau","A schematic map: tap the pins, then try the compass challenge. (Not exact — use an atlas for detail.)",root);
};

/* ---------------- 2. QANAT ---------------- */
const QSTEPS=[
 {t:"1 · Snow and rain fall on the mountains",d:"Water soaks into the ground and collects underground in the foothills — the water table.",focus:"mtn"},
 {t:"2 · The mother well taps the water",d:"Qanat builders dig a deep ‘mother well’ down into the water-bearing ground high near the mountain.",focus:"mother"},
 {t:"3 · A gently sloping tunnel",d:"From the mother well they dig a tunnel with a very gentle slope. Gravity makes the water flow all the way to the village — no pump needed!",focus:"tunnel"},
 {t:"4 · Vertical shafts every few dozen metres",d:"Shafts let workers lift out soil, let fresh air in, and give access for cleaning. From above they look like a line of little craters.",focus:"shafts"},
 {t:"5 · Water emerges at the village",d:"The tunnel meets the surface near the village. Water fills channels, gardens and fields — and, because it was underground, less evaporated in the hot sun.",focus:"village"}
];
RR.widgets.qanat=function(){
  let step=0,compare=false; const root=h("div",{class:"qanat"});
  const surf=x=> 120+ (x-250)*(130/550); // ground surface y at x (250..800 => 120..250)
  const ty =x=> 245 + (x-280)*(5/520);   // tunnel y
  let shafts=""; for(let x=330;x<=760;x+=86){ const y1=surf(x), y2=ty(x); shafts+=`<g><rect x="${x-4}" y="${y1}" width="8" height="${y2-y1}" fill="#211510"/><ellipse cx="${x}" cy="${y1-2}" rx="14" ry="5" fill="#8a5f34"/><ellipse cx="${x}" cy="${y1-2}" rx="6" ry="2.4" fill="#211510"/></g>`; }
  const svg=h("div",{html:`<svg viewBox="0 0 900 360" role="img" aria-label="Cross-section of a qanat: mother well, sloping tunnel, shafts and village">
   <defs><linearGradient id="qsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A9B4C4"/><stop offset="1" stop-color="#F7E5C0"/></linearGradient><linearGradient id="qgr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b98a52"/><stop offset="1" stop-color="#6b4526"/></linearGradient></defs>
   <rect width="900" height="360" fill="url(#qsky)"/>
   <circle cx="820" cy="52" r="26" fill="#E1D8AF"/>
   <path d="M0 360 V150 L90 70 L150 100 L210 36 L260 120 L${250} ${surf(250)} L800 ${surf(800)} L900 ${surf(800)+6} V360Z" fill="url(#qgr)"/>
   <path d="M210 36 L228 66 L212 60 L198 70Z" fill="#fff"/><path d="M90 70 L106 92 L92 88 L80 96Z" fill="#fff"/>
   <g id="aq"><path d="M0 250 C120 230 200 262 330 246 L330 330 L0 330Z" fill="#404D5F" opacity=".45"/><text x="60" y="300" font-family="Nunito" font-weight="800" font-size="15" fill="#E9EBEF">water in the ground</text></g>
   <g id="mtnfx"><g fill="#fff" opacity=".9" font-size="22"><text x="80" y="40">❄</text><text x="140" y="30">❄</text><text x="240" y="24">❄</text></g></g>
   <g id="mother"><rect x="262" y="${surf(262)}" width="14" height="${ty(270)-surf(262)+10}" fill="#211510"/><ellipse cx="269" cy="${surf(262)-2}" rx="18" ry="6" fill="#8a5f34"/><text x="262" y="${surf(262)-14}" text-anchor="middle" font-family="Cinzel" font-weight="800" font-size="14" fill="#2B1B0C">Mother well</text></g>
   <g id="shafts">${shafts}</g>
   <path id="tun" d="M269 ${ty(269)+6} L810 ${ty(800)}" stroke="#1c120a" stroke-width="16" stroke-linecap="round"/>
   <path id="water" d="M269 ${ty(269)+6} L810 ${ty(800)}" stroke="#7C97A3" stroke-width="8" stroke-linecap="round" stroke-dasharray="14 12" class="qwater"/>
   <g id="village" transform="translate(800 ${surf(800)-2})"><g fill="#CFC09C" stroke="#5C4020" stroke-width="2"><rect x="-6" y="-34" width="34" height="34"/><rect x="34" y="-26" width="30" height="26"/><rect x="70" y="-38" width="26" height="38"/></g><path d="M-6 -34 h34 l-17 -12z M34 -26 h30 l-15 -10z" fill="#95513B"/><rect x="-60" y="-8" width="50" height="8" fill="#4F6B4A"/><rect x="-100" y="-8" width="40" height="8" fill="#4f9560"/><path d="M110 0 q0 -34 -12 -44 M110 -24 q22 -4 30 -22 M110 -24 q-12 -10 -16 -26" stroke="#2f6b3a" stroke-width="4" fill="none"/></g>
   <g id="canal" opacity="${compare?1:0}"><path d="M260 ${surf(260)-2} L800 ${surf(800)-2}" stroke="#7C97A3" stroke-width="5" opacity=".85"/><g fill="#fff" opacity=".85" font-size="20"><text x="400" y="${surf(400)-26}">↑</text><text x="520" y="${surf(520)-26}">↑</text><text x="640" y="${surf(640)-26}">↑</text></g><text x="470" y="${surf(470)-48}" font-family="Nunito" font-weight="800" font-size="15" fill="#6E341C">open canal: sun evaporates water!</text></g>
   </svg>`});
  const caption=h("div",{class:"q-cap parchment"}); const dots=h("div",{class:"q-dots"});
  const prev=h("button",{class:"btn ghost small",type:"button",onclick:()=>{step=Math.max(0,step-1);upd();}},"◀ Back");
  const next=h("button",{class:"btn small",type:"button",onclick:()=>{step=Math.min(QSTEPS.length-1,step+1);upd();}},"Next ▶");
  const cmp=h("button",{class:"btn ghost small",type:"button","aria-pressed":"false",onclick:e=>{compare=!compare;e.currentTarget.setAttribute("aria-pressed",compare);svg.querySelector("#canal").setAttribute("opacity",compare?1:0);e.currentTarget.textContent=compare?"Hide open canal":"Compare: open canal";}},"Compare: open canal");
  function upd(){ const s=QSTEPS[step]; caption.innerHTML=`<h5>${s.t}</h5><p>${s.d}</p>`; RR.sfx.pop();
    ["mtn","mother","tunnel","shafts","village"].forEach(f=>{});
    const set=(id,on)=>{ const e=svg.querySelector(id); if(e) e.style.opacity=on?1:.25; e&&e.classList.toggle("glow",on); };
    set("#mtnfx",s.focus==="mtn"); set("#aq",s.focus==="mtn"||s.focus==="mother"); set("#mother",s.focus==="mother"); set("#tun",s.focus==="tunnel"); set("#water",s.focus==="tunnel"||s.focus==="village"); set("#shafts",s.focus==="shafts"); set("#village",s.focus==="village");
    prev.disabled=step===0; next.disabled=step===QSTEPS.length-1; dots.innerHTML=QSTEPS.map((_,i)=>`<i class="${i===step?"on":""}"></i>`).join(""); }
  root.append(svg,caption,h("div",{class:"q-ctl"},prev,dots,next,cmp)); upd();
  return RR.widgetBox("How a Qanat Works","Water from the mountains to the village — with no pump.",root);
};

/* ---------------- 3. SITE SELECTION GAME ---------------- */
const SITES=[
 {id:"A",name:"Riverbank plain",x:330,y:260,w:3,s:3,d:1,t:3,hazard:"Floods in spring; open to raiders.",note:"Excellent water, soil and trade — but exposed. People would need flood banks and watchtowers."},
 {id:"B",name:"Foothill spring",x:150,y:195,w:3,s:2,d:3,t:2,hazard:"Steep ground and some rockfall.",note:"A spring (and maybe a qanat) gives water; the hill is easy to defend; a track runs nearby. A great all-rounder."},
 {id:"C",name:"Desert edge",x:540,y:300,w:0,s:1,d:2,t:2,hazard:"No fresh water; salty soil.",note:"Flat and easy to build on — but without water, a village here cannot survive."},
 {id:"D",name:"High mountain ledge",x:105,y:78,w:1,s:0,d:3,t:0,hazard:"Freezing winters; far from everyone.",note:"Super safe, but thin soil, little water and no trade. Not much of a village!"}
];
RR.widgets.siteGame=function(){
  const root=h("div",{class:"sites"}); let chosen=null;
  const svg=h("div",{html:`<svg viewBox="0 0 640 400" role="img" aria-label="Map card with four candidate village sites">
   <defs><linearGradient id="smg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E3D8BC"/><stop offset="1" stop-color="#D8C194"/></linearGradient></defs>
   <rect width="640" height="400" rx="14" fill="url(#smg)" stroke="#5C4020" stroke-width="3"/>
   <path d="M0 0 H260 L230 70 L190 130 L120 170 L60 150 L0 190Z" fill="#c9a46a" opacity=".6"/>
   <g fill="#9C7B48" stroke="#5C4020" stroke-width="1.5">${[[40,50],[90,90],[150,60],[200,34],[60,130],[120,128]].map(([x,y])=>`<path d="M${x-16} ${y} L${x} ${y-28} L${x+16} ${y}Z"/>`).join("")}</g>
   <path d="M360 0 C340 70 380 120 330 190 S320 300 350 400" fill="none" stroke="#5C7480" stroke-width="16" stroke-linecap="round"/><path d="M360 0 C340 70 380 120 330 190 S320 300 350 400" fill="none" stroke="#BCC5D1" stroke-width="5" stroke-linecap="round"/>
   <path d="M20 215 C100 200 160 205 220 190" fill="none" stroke="#5C7480" stroke-width="5" stroke-linecap="round"/>
   <path d="M500 60 Q560 120 600 230 Q620 300 560 380" fill="#D3B477" opacity=".6"/><g fill="#8F6C35" opacity=".7">${Array.from({length:60},(_,i)=>{const r=RR.art.rng(40+i);return `<circle cx="${(470+r()*150).toFixed(0)}" cy="${(180+r()*200).toFixed(0)}" r="1.6"/>`}).join("")}</g>
   <path d="M30 310 C150 330 250 300 360 320 S520 340 620 300" fill="none" stroke="#714F2D" stroke-width="3" stroke-dasharray="3 8" stroke-linecap="round"/><text x="300" y="352" font-family="Amiri,serif" font-style="italic" font-size="15" fill="#46321A">trade track</text>
   <g font-family="Amiri,serif" font-style="italic" fill="#46321A" font-size="16" opacity=".85"><text x="30" y="24">mountains</text><text x="395" y="62">river</text><text x="500" y="230">salt desert</text></g>
   <g id="pins"></g></svg>`});
  const pins=svg.querySelector("#pins");
  const info=h("div",{class:"site-info parchment",html:"<h5>Choose a site</h5><p>You are a caravan scout. Tap each pin to compare, then <b>choose the best site</b> for a new village.</p>"});
  const reasons=h("div",{class:"site-reasons",hidden:true});
  const stars=n=>"★".repeat(n)+"☆".repeat(3-n);
  SITES.forEach(s=>{ const g=document.createElementNS("http://www.w3.org/2000/svg","g"); g.setAttribute("transform",`translate(${s.x} ${s.y})`); g.setAttribute("tabindex","0"); g.setAttribute("role","button"); g.setAttribute("aria-label","Site "+s.id+": "+s.name); g.style.cursor="pointer"; g.classList.add("spot");
    g.innerHTML=`<circle r="22" fill="#8D2A30" opacity=".25" class="pulse"/><circle r="14" fill="#8D2A30" stroke="#EAE3CB" stroke-width="3"/><text y="5" text-anchor="middle" font-family="Cinzel" font-weight="800" font-size="15" fill="#EAE3CB">${s.id}</text>`;
    const act=()=>{ RR.sfx.pop(); RR.$$(".spot",svg).forEach(n=>n.classList.remove("on")); g.classList.add("on");
      info.innerHTML=`<h5>Site ${s.id}: ${s.name}</h5><ul class="stat"><li>💧 Water <b>${stars(s.w)}</b></li><li>🌾 Soil <b>${stars(s.s)}</b></li><li>🛡️ Defence <b>${stars(s.d)}</b></li><li>🐪 Trade <b>${stars(s.t)}</b></li></ul><p><b>Hazard:</b> ${s.hazard}</p>`;
      info.append(h("button",{class:"btn small",type:"button",onclick:()=>choose(s)},"Choose Site "+s.id)); };
    g.addEventListener("click",act); g.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){e.preventDefault();act();} }); pins.append(g); });
  function choose(s){ chosen=s; RR.sfx.stamp(); reasons.hidden=false; reasons.innerHTML=`<h5>You chose Site ${s.id}: ${s.name}</h5><p>Pick the <b>three best reasons</b> for your choice:</p>`;
    const opts=[["Water close by",s.w>=2],["Good soil for crops",s.s>=2],["Easy to defend",s.d>=2],["On a trade route",s.t>=2],["It looks pretty",false],["Mountains are loud",false]];
    const sel=new Set(); const list=h("div",{class:"reason-list"},opts.map(([t,good])=>h("button",{class:"btn ghost small",type:"button",onclick:e=>{ if(sel.has(t)){sel.delete(t);e.currentTarget.classList.remove("on");} else if(sel.size<3){sel.add(t);e.currentTarget.classList.add("on");} check.disabled=sel.size!==3; }},t)));
    const check=h("button",{class:"btn small",type:"button",disabled:true,onclick:()=>{ const good=opts.filter(([t,g])=>sel.has(t)&&g).length; const f=h("div",{class:"parchment note"},h("b",{},good===3?"Captain’s thinking! ":good>=2?"Strong reasoning. ":"Think again — "),s.note,h("br"),h("small",{},"There is no single ‘right’ site: Sites A and B are both strong. What matters is that your reasons match the evidence. Next: compare with how people chose a pā or kāinga site in your rohe (use local guidance)."));
      reasons.append(f); good>=2?RR.sfx.fanfare():RR.sfx.wrong(); check.disabled=true; }},"Check my reasons");
    reasons.append(list,check); }
  root.append(h("div",{class:"site-grid"},svg,h("div",{},info,reasons)));
  return RR.widgetBox("Why Here? — Choose a Village Site","Compare four sites. Which is best — and why?",root);
};

/* ---------------- 4. SETTLEMENT LADDER ---------------- */
const LAD=[
 {n:"Farm",homes:1,persia:"A single family farm on a foothill slope, with a spring or small stream.",nz:"Think: a high-country farm."},
 {n:"Hamlet",homes:4,persia:"A handful of homes sharing a well or a qanat outlet.",nz:"Think: a few houses by a bridge or a hall."},
 {n:"Village",homes:12,persia:"Homes, fields, a shared water supply and a small market — the first Zagros farming villages.",nz:"Think: a small village with a school and a shop."},
 {n:"Town",homes:30,persia:"A market centre with walls, workshops and a governor — people trade with other peoples.",nz:"Think: a market town with several shops and a library."},
 {n:"City",homes:80,persia:"Palaces, temples, walls, specialist workers and thousands of people — like Susa.",nz:"Think: Christchurch, a big, busy city."}
];
RR.widgets.ladder=function(){
  const root=h("div",{class:"ladder"}); const info=h("div",{class:"parchment lad-info",html:"<p>Tap a rung to climb the settlement ladder.</p>"});
  const rungs=LAD.map((l,i)=>{ const homes=Array.from({length:Math.min(l.homes,24)},(_,k)=>`<i style="--d:${k*30}ms"></i>`).join("");
    const b=h("button",{class:"rung",type:"button","aria-label":l.n,style:{"--w":(20+i*20)+"%"}},h("span",{class:"rl"},l.n),h("span",{class:"homes",html:homes}));
    b.addEventListener("click",()=>{ RR.$$(".rung",root).forEach(r=>r.classList.remove("on")); b.classList.add("on"); RR.sfx.pop(); info.innerHTML=`<h5>${l.n}</h5><p><b>In Persia:</b> ${l.persia}</p><p><b>${l.nz}</b></p>`; });
    return b; }).reverse();
  root.append(h("div",{class:"rungs"},rungs),info);
  return RR.widgetBox("The Settlement Ladder","Farm → hamlet → village → town → city.",root);
};
})();
