/* ===================================================================
   SCENES — layered parallax hero for each Stage + hub map + cinematic
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, A=RR.art, h=RR.h;
RR.scenes = {};
const W=1600, H=900;
const svgL = (depth,inner,{cls="",defs=""}={}) =>
  `<svg class="layer ${cls}" data-depth="${depth}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs>${defs}</defs>${inner}</svg>`;

/* ===================== STAGE 1 — Gates of the Plateau (dawn) ===================== */
RR.scenes.hero1 = function(){
  const root = h("div",{class:"scene hero hero1","data-week":1});
  const farO={y:400,amp:380,seed:11,rough:.6,peak:1.9}, midO={y:560,amp:250,seed:23,rough:.58,peak:1.5}, nearO={y:716,amp:84,seed:31,rough:.55};
  const farY=A.ridgeY(11,farO), midY=A.ridgeY(23,midO), nearY=A.ridgeY(31,nearO);

  /* stars + sky + sun + rays */
  const stars = Array.from({length:90},(_,i)=>{ const r=A.rng(500+i); return `<circle cx="${(r()*W).toFixed(0)}" cy="${(r()*300).toFixed(0)}" r="${(r()*1.4+.3).toFixed(2)}" fill="#fff" opacity="${(r()*.7+.2).toFixed(2)}" class="tw" style="animation-delay:${(-r()*6).toFixed(1)}s"/>`; }).join("");
  const rays = Array.from({length:26},(_,i)=>{ const w=14+((i*37)%5)*8; return `<path d="M0 0 L${-w} -1500 L${w} -1500Z" transform="rotate(${i*13.85-170})" />`; }).join("");
  const sky = svgL(0,`
    <rect width="${W}" height="${H}" fill="url(#sky1)"/>
    ${stars}
    <circle cx="1010" cy="430" r="340" fill="url(#sunGlow)"/>
    <g transform="translate(1010 430)" class="sunrays" opacity=".11" fill="url(#rayG)">${rays}</g>
    <circle cx="1010" cy="430" r="74" fill="#F8EEC9"/><circle cx="1010" cy="430" r="58" fill="#FCF9EB"/>`,
  {defs:`
    <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0D0C11"/><stop offset=".22" stop-color="#2E253B"/><stop offset=".42" stop-color="#433655"/><stop offset=".58" stop-color="#C96B5E"/><stop offset=".7" stop-color="#E4A25D"/><stop offset=".82" stop-color="#D0B475"/><stop offset="1" stop-color="#F6E5B9"/></linearGradient>
    <radialGradient id="sunGlow"><stop offset="0" stop-color="#E2D9B6" stop-opacity=".95"/><stop offset=".35" stop-color="#EEBF74" stop-opacity=".5"/><stop offset="1" stop-color="#EB9C5E" stop-opacity="0"/></radialGradient>
    <linearGradient id="rayG" x1="0" y1="0" x2="0" y2="-1"><stop offset="0" stop-color="#E2D9B6" stop-opacity=".9"/><stop offset="1" stop-color="#E2D9B6" stop-opacity="0"/></linearGradient>`});

  /* drifting clouds */
  const cloud=(x,y,s,c)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="${c}"><ellipse cx="0" cy="0" rx="150" ry="18"/><ellipse cx="60" cy="-12" rx="90" ry="14"/><ellipse cx="-70" cy="8" rx="100" ry="12"/></g>`;
  const clouds = svgL(.08,`
    <g class="drift slow">${cloud(260,210,1.1,"url(#cl1)")}${cloud(980,150,.8,"url(#cl1)")}</g>
    <g class="drift med">${cloud(640,300,1.3,"url(#cl2)")}${cloud(1350,260,1,"url(#cl2)")}${cloud(60,340,.9,"url(#cl2)")}</g>`,
  {defs:`<linearGradient id="cl1" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#F8DAC7" stop-opacity=".75"/><stop offset="1" stop-color="#CD84A2" stop-opacity=".25"/></linearGradient>
          <linearGradient id="cl2" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#F7E1C0" stop-opacity=".85"/><stop offset="1" stop-color="#DA8978" stop-opacity=".3"/></linearGradient>`});

  /* far snowy ridge */
  const far = svgL(.18,`
    <path d="${A.ridge(11,farO)}" fill="url(#farG)"/>
    <path d="${A.ridge(11,farO)}" fill="url(#farHaze)"/>`,
  {defs:`<linearGradient id="farG" gradientUnits="userSpaceOnUse" x1="0" y1="100" x2="0" y2="620"><stop offset="0" stop-color="#FCF3E3"/><stop offset=".12" stop-color="#F9DACA"/><stop offset=".26" stop-color="#c58aa8"/><stop offset=".5" stop-color="#765F95"/><stop offset="1" stop-color="#b07a98"/></linearGradient>
         <linearGradient id="farHaze" gradientUnits="userSpaceOnUse" x1="0" y1="420" x2="0" y2="720"><stop offset="0" stop-color="#F2BB97" stop-opacity="0"/><stop offset="1" stop-color="#F4CAA5" stop-opacity=".7"/></linearGradient>`});

  /* eagles gliding */
  const eg=(top,dur,delay,sc)=>`<g class="flyx" style="animation-duration:${dur}s;animation-delay:${delay}s"><g transform="translate(0 ${top}) scale(${sc})"><g class="bob"><g class="flap">${A.eagle("#100D14")}</g></g></g></g>`;
  const eagles = svgL(.3,`${eg(250,64,-10,.9)}${eg(180,88,-52,.6)}${eg(320,76,-30,.5)}`);

  /* mid ridge (Zagros) + Ecbatana */
  const ecx=430, ecy=midY(ecx)+34;
  const mid = svgL(.38,`
    <path d="${A.ridge(23,midO)}" fill="url(#midG)"/>
    ${A.ecbatana(ecx,ecy,.9)}
    <circle cx="${ecx}" cy="${ecy-110}" r="26" fill="url(#ecGlow)" class="pulse"/>
    <path d="${A.ridge(23,midO)}" fill="url(#midHaze)"/>`,
  {defs:`<linearGradient id="midG" gradientUnits="userSpaceOnUse" x1="0" y1="330" x2="0" y2="760"><stop offset="0" stop-color="#F7D2BE"/><stop offset=".12" stop-color="#998AAE"/><stop offset=".4" stop-color="#4E3F63"/><stop offset="1" stop-color="#362B44"/></linearGradient>
         <linearGradient id="midHaze" gradientUnits="userSpaceOnUse" x1="0" y1="560" x2="0" y2="800"><stop offset="0" stop-color="#CB956C" stop-opacity="0"/><stop offset="1" stop-color="#CB956C" stop-opacity=".45"/></linearGradient>
         <radialGradient id="ecGlow"><stop offset="0" stop-color="#EAE0C5"/><stop offset="1" stop-color="#EAE0C5" stop-opacity="0"/></radialGradient>`});

  /* silver glint (Shadow Courier clue) on mid ridge */
  const gx=1295, gy=midY(gx)-6;
  const glint = svgL(.38,`
    <g class="glint" id="shadowGlint" role="button" tabindex="0" aria-label="A silver glint on the ridge. Tap to investigate." style="cursor:pointer;pointer-events:all" transform="translate(${gx} ${gy})">
      <circle r="46" fill="transparent"/>
      <circle r="22" fill="url(#glintG)" class="pulse"/>
      ${A.star4(0,0,26,"#F9F9FA")}
    </g>`,{defs:`<radialGradient id="glintG"><stop offset="0" stop-color="#F1F3F6" stop-opacity=".95"/><stop offset="1" stop-color="#DCD7E4" stop-opacity="0"/></radialGradient>`,cls:"glintlayer"});

  /* mist A */
  const mistG=(y,o)=>`<g class="drift ${o}"><ellipse cx="400" cy="${y}" rx="620" ry="46" fill="url(#mist)"/><ellipse cx="1250" cy="${y+20}" rx="700" ry="56" fill="url(#mist)"/></g>`;
  const mist1 = svgL(.5,mistG(640,"slow"),{defs:`<radialGradient id="mist"><stop offset="0" stop-color="#EBDCCB" stop-opacity=".4"/><stop offset="1" stop-color="#EBDCCB" stop-opacity="0"/></radialGradient>`});

  /* near ridge with oaks + trail */
  let oaks=""; const ro=A.rng(77);
  for(let i=0;i<34;i++){ const x=ro()*W, y=nearY(x)+6, s=.5+ro()*.9; oaks+=A.oak(x.toFixed(0),y.toFixed(0),s.toFixed(2),i%3?"#1E1927":"#241D2E"); }
  const near = svgL(.62,`
    <path d="${A.ridge(31,nearO)}" fill="url(#nearG)"/>
    ${oaks}
    <g id="caravan1" class="caravan"></g>`,
  {defs:`<linearGradient id="nearG" gradientUnits="userSpaceOnUse" x1="0" y1="620" x2="0" y2="900"><stop offset="0" stop-color="#31273E"/><stop offset=".4" stop-color="#241D2E"/><stop offset="1" stop-color="#17131D"/></linearGradient>`,cls:"nearlayer"});

  /* mist B */
  const mist2 = svgL(.82,mistG(790,"med"));

  /* foreground rocks, ibex, grass */
  const r2=A.rng(99); let grass="";
  for(let g=0;g<3;g++){ let blades=""; for(let i=0;i<46;i++){ const x=r2()*W, hgt=40+r2()*95, lean=(r2()-.5)*30; blades+=`<path d="M${x.toFixed(0)} ${H+4} Q${(x+lean*.4).toFixed(0)} ${(H-hgt*.6).toFixed(0)} ${(x+lean).toFixed(0)} ${(H-hgt).toFixed(0)} Q${(x+lean*.6+5).toFixed(0)} ${(H-hgt*.5).toFixed(0)} ${(x+7).toFixed(0)} ${H+4}Z"/>`; }
    grass+=`<g class="sway s${g}" fill="#09080C">${blades}</g>`; }
  const fore = svgL(1.15,`
    <path d="M-30 ${H+10} L-30 600 L40 568 L96 604 L150 560 L214 650 L262 690 L318 770 L420 ${H+10}Z" fill="url(#rockG)"/>
    <path d="M${W+30} ${H+10} L${W+30} 640 L${W-60} 610 L${W-130} 660 L${W-190} 640 L${W-260} 730 L${W-340} ${H+10}Z" fill="url(#rockG)"/>
    <g transform="translate(112 462) scale(1.35)">${A.ibex("#0B090F")}</g>
    ${grass}`,
  {defs:`<linearGradient id="rockG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1E1826"/><stop offset="1" stop-color="#08060A"/></linearGradient>`});

  root.innerHTML = sky+clouds+far+eagles+mid+glint+mist1+near+mist2+fore+
    `<canvas class="fx"></canvas><div class="vignette"></div><div class="grain"></div>`;

  /* caravan walks along the near ridge */
  const car=root.querySelector("#caravan1");
  const units=5; let cs="";
  for(let i=0;i<units;i++){ cs+=`<g transform="translate(${-i*64} 0)" class="cu"><g transform="translate(-24 -34) scale(.3)">${A.camel("#0D0A10")}</g></g>`; }
  car.innerHTML=cs;
  let cx=60, last=performance.now(), raf=0;
  function stepCar(now){
    raf=requestAnimationFrame(stepCar);
    const dt=Math.min(.05,(now-last)/1000); last=now;
    if(RR.motionOK()) cx+=dt*22; if(cx>W+380) cx=-340;
    const kids=car.children;
    for(let i=0;i<kids.length;i++){ const x=cx-i*64, y=nearY(Math.max(0,Math.min(W,x)))+8; const slope=(nearY(Math.min(W,x+10))-nearY(Math.max(0,x-10)))/20;
      kids[i].setAttribute("transform",`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(Math.atan(slope)*57.3).toFixed(1)})`); }
  }
  raf=requestAnimationFrame(stepCar);
  root._stop=()=>cancelAnimationFrame(raf);

  const fx=RR.particles(root.querySelector("canvas.fx"),"motes",{color:"255,226,150"});
  const par=(RR.parallaxSVG||(()=>({stop(){}})))(root);
  root._destroy=()=>{ root._stop(); fx.stop(); par.stop&&par.stop(); };
  return root;
};

/* ===================== generic hero for stages not built yet ===================== */
RR.scenes.heroTeaser = function(meta){
  const root=h("div",{class:"scene hero"});
  root.innerHTML=svgL(0,`<rect width="${W}" height="${H}" fill="url(#tz)"/><path d="${A.ridge(5+meta.n,{y:600,amp:220})}" fill="#221C2C"/>`,{defs:`<linearGradient id="tz" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0D0C11"/><stop offset="1" stop-color="#3A1A22"/></linearGradient>`})+`<canvas class="fx"></canvas><div class="vignette"></div>`;
  const fx=RR.particles(root.querySelector("canvas.fx"),"stars"); root._destroy=()=>fx.stop(); return root;
};

/* ===================== HUB MAP — the Royal Road game board ===================== */
/* ten waypoints on a serpentine road across the parchment */
RR.ROAD = [
  [150,770],[420,742],[690,770],[960,735],[1250,772],      // row 1 →
  [1450,640],[1280,505],[1000,470],[730,500],[470,468],    // up, row 2 ←   (stage markers picked below)
  [250,380],[330,245],[600,210],[880,238],[1160,205],[1420,160]
];
RR.STAGE_PTS = [ [175,768],[470,735],[790,775],[1090,740],[1250,520],[950,470],[620,490],[330,300],[760,215],[1380,175] ];

RR.scenes.hubMap = function(){
  const W=1600,H=900;
  const road="M150 770 C300 700 330 800 470 735 S660 800 790 775 S1000 700 1090 740 S1330 800 1420 690 S1420 530 1250 520 S1100 430 950 470 S800 540 620 490 S440 420 330 460 S210 360 330 300 S520 200 760 215 S1000 270 1160 215 S1320 150 1380 175";
  const r=A.rng(404);
  /* hill glyphs */
  const hills=(cx,cy,n,spread,sc)=>Array.from({length:n},(_,i)=>{ const x=cx+(r()-.5)*spread, y=cy+(r()-.5)*spread*.5, s=sc*(.6+r()*.7);
    return `<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(${s.toFixed(2)})"><path d="M-30 0 L0 -44 L30 0Z" fill="#9C7B48" stroke="#5C4020" stroke-width="2"/><path d="M0 -44 L30 0 L8 0Z" fill="#8a6234" opacity=".7"/><path d="M0 -44 L-9 -26 L0 -30 L8 -24Z" fill="#EFE8D4"/></g>`; }).join("");
  const dots=(cx,cy,n,spread)=>Array.from({length:n},()=>`<circle cx="${(cx+(r()-.5)*spread).toFixed(0)}" cy="${(cy+(r()-.5)*spread*.55).toFixed(0)}" r="${(r()*1.6+.6).toFixed(1)}" fill="#8F6C35" opacity=".55"/>`).join("");
  /* landmark vignettes, one per stage */
  const lm = {
    1:`<g transform="translate(175 700)">${hills(0,0,4,120,.9)}<path d="M-22 56 V20 C-22 -2 22 -2 22 20 V56" fill="#3A2817" stroke="#BA9B58" stroke-width="3"/></g>`,
    2:`<g transform="translate(470 665)"><path d="M-34 60 H34 L26 44 H-26Z M-26 44 H26 L20 30 H-20Z M-20 30 H20 L14 18 H-14Z M-14 18 H14 V4 H-14Z" fill="#CFC09C" stroke="#5C4020" stroke-width="2"/><circle cx="-70" cy="48" r="14" fill="#4F6B4A"/><circle cx="-54" cy="42" r="11" fill="#4f9560"/><circle cx="70" cy="50" r="13" fill="#4F6B4A"/><path d="M-100 70 q20 -8 40 0 t40 0" stroke="#404D5F" stroke-width="5" fill="none"/></g>`,
    3:`<g transform="translate(790 705)"><path d="M-70 62 H70 V44 H-70Z" fill="#c28a50" stroke="#5C4020" stroke-width="2"/><path d="M-50 44 V22 H-14 V44 M14 44 V22 H50 V44" fill="#CFC09C" stroke="#5C4020" stroke-width="2"/><path d="M-50 22 L-32 8 L-14 22M14 22 L32 8 L50 22" fill="#95513B" stroke="#5C4020" stroke-width="2"/><path d="M-4 -18 l10 8 -6 0 6 10 -12 -8 6 0z" fill="#BA9B58"/></g>`,
    4:`<g transform="translate(1090 690)"><path d="M-110 60 q30 -20 60 0 t60 0 t60 0 t60 0 V90 H-110Z" fill="#404D5F" opacity=".85"/><path d="M-60 40 H-14 L-24 54 H-52Z" fill="#7F5A35" stroke="#3A2817" stroke-width="2"/><path d="M-37 10 V40 M-37 12 L-18 36 H-37Z" fill="#E0D3B4" stroke="#3A2817" stroke-width="2"/><path d="M30 -16 q12 -22 30 -8 q18 -14 30 6 q-4 16 -30 12 q-24 8 -30 -10Z" fill="#6c6a8a"/><path d="M52 8 l-10 18 h10 l-8 16" fill="none" stroke="#C6A863" stroke-width="4" stroke-linejoin="round"/></g>`,
    5:`<g transform="translate(1250 440)"><rect x="-40" y="10" width="80" height="60" fill="#CFC09C" stroke="#5C4020" stroke-width="2"/><path d="M-40 10 Q0 -30 40 10Z" fill="#574A6B" stroke="#3A1A22" stroke-width="2"/><rect x="-10" y="38" width="20" height="32" rx="10" fill="#3A2817"/><g fill="#EDBFCB"><circle cx="-62" cy="64" r="7"/><circle cx="-52" cy="70" r="6"/><circle cx="64" cy="66" r="7"/><circle cx="54" cy="72" r="6"/></g></g>`,
    6:`<g transform="translate(950 400)"><path d="M-80 70 V30 H-60 V18 H-40 V30 H-20 V18 H0 V30 H20 V18 H40 V30 H60 V18 H80 V70Z" fill="#c9a870" stroke="#5C4020" stroke-width="2"/><path d="M-80 52 H80 M-40 30 V52 M0 30 V52 M40 30 V52" stroke="#5C4020" stroke-width="1.5" fill="none"/></g>`,
    7:`<g transform="translate(620 420)"><path d="M-70 60 L-50 20 L-30 60Z M-10 60 L10 14 L30 60Z M50 60 L68 24 L86 60Z" fill="#95513B" stroke="#5C4020" stroke-width="2"/><path d="M-70 60 H86" stroke="#5C4020" stroke-width="3"/><circle cx="-34" cy="70" r="8" fill="#BA9B58"/><circle cx="20" cy="72" r="7" fill="#BA9B58"/></g>`,
    8:`<g transform="translate(330 220)">${hills(0,30,3,100,1.1)}<path d="M0 -10 C10 -34 -14 -44 0 -70 C22 -48 14 -30 0 -10Z" fill="#C66C3E"/><path d="M0 -12 C6 -26 -4 -34 0 -48 C10 -34 8 -24 0 -12Z" fill="#C6A863"/></g>`,
    9:`<g transform="translate(760 140)"><path d="M-80 70 q80 -50 160 0Z" fill="#CEB07E" stroke="#5C4020" stroke-width="2"/><g fill="#E9E0C3"><path d="M-60 -10 l3 8 8 1 -6 6 2 8 -7 -4 -7 4 2 -8 -6 -6 8 -1z"/><path d="M40 -30 l3 8 8 1 -6 6 2 8 -7 -4 -7 4 2 -8 -6 -6 8 -1z"/></g></g>`,
    10:`<g transform="translate(1380 95)"><path d="M-70 90 V10 H-40 V90 M70 90 V10 H40 V90 M-70 10 Q0 -50 70 10" fill="#CFC09C" stroke="#5C4020" stroke-width="3"/><rect x="-28" y="40" width="56" height="50" rx="28" fill="#261A0C"/><circle cx="0" cy="-12" r="9" fill="#BA9B58"/><path d="M-60 -2 l-10 -20 M60 -2 l10 -20" stroke="#BA9B58" stroke-width="4"/></g>`
  };
  const landmarks=Object.values(lm).join("");
  const el=h("div",{class:"hubmap"});
  el.innerHTML=`<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrated parchment map of the Royal Road with ten stages">
  <defs>
    <filter id="rough" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="4" seed="9" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="14"/></filter>
    <filter id="paperNoise"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" seed="3"/><feColorMatrix values="0 0 0 0 .35 0 0 0 0 .22 0 0 0 0 .08 0 0 0 .18 0"/></filter>
    <radialGradient id="mapBg" cx=".5" cy=".45" r=".8"><stop offset="0" stop-color="#E9E0C9"/><stop offset=".7" stop-color="#DFCCA3"/><stop offset="1" stop-color="#B98A4C"/></radialGradient>
    <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8A99AD"/><stop offset="1" stop-color="#435369"/></linearGradient>
    <path id="roadPath" d="${road}"/>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#mapBg)"/>
  <rect width="${W}" height="${H}" filter="url(#paperNoise)"/>
  <!-- seas -->
  <g filter="url(#rough)" opacity=".95">
    <path d="M-20 60 C80 40 140 90 120 160 C100 220 40 250 -20 240Z" fill="url(#sea)"/>
    <path d="M1300 330 C1380 300 1480 310 1560 350 C1620 390 1600 470 1530 500 C1450 520 1360 470 1330 420Z" fill="url(#sea)"/>
    <path d="M520 880 C640 850 780 870 860 905 L520 905Z" fill="url(#sea)"/>
  </g>
  <g font-family="Amiri,serif" font-style="italic" fill="#46321A" opacity=".7" font-size="22"><text x="12" y="150" transform="rotate(-8 12 150)">The Western Sea</text><text x="1368" y="408" font-size="20">Caspian Sea</text><text x="560" y="893" font-size="20">Persian Gulf</text></g>
  <!-- desert stipple + mountain ranges -->
  ${dots(700,340,90,380)}${dots(1180,300,60,260)}
  ${hills(330,610,5,250,.8)}${hills(1210,610,4,180,.8)}${hills(1450,270,5,160,.7)}${hills(900,640,3,200,.7)}
  <!-- rivers -->
  <path d="M60 520 C180 500 220 580 330 560 S470 600 560 640" fill="none" stroke="#5C7480" stroke-width="5" stroke-linecap="round" opacity=".8"/>
  <path d="M30 600 C150 590 200 650 320 640" fill="none" stroke="#5C7480" stroke-width="4" stroke-linecap="round" opacity=".7"/>
  <!-- the Royal Road -->
  <use href="#roadPath" fill="none" stroke="#5C4020" stroke-width="22" stroke-linecap="round" opacity=".25" transform="translate(0 5)"/>
  <use href="#roadPath" fill="none" stroke="#b98a46" stroke-width="18" stroke-linecap="round"/>
  <use href="#roadPath" fill="none" stroke="#DBBE86" stroke-width="10" stroke-linecap="round" opacity=".9"/>
  <use href="#roadPath" id="roadDraw" fill="none" stroke="#EAE0C5" stroke-width="3.5" stroke-dasharray="6 14" stroke-linecap="round" opacity=".9"/>
  ${landmarks}
  <!-- compass rose -->
  <g transform="translate(120 860)" opacity=".85"><circle r="46" fill="none" stroke="#5C4020" stroke-width="2"/><path d="M0 -56 L10 0 L0 56 L-10 0Z M-56 0 L0 -10 L56 0 L0 10Z" fill="#7F5A33" stroke="#3A2817" stroke-width="1.5"/><path d="M0 -56 L10 0 L-10 0Z" fill="#8D2A30"/><text y="-64" text-anchor="middle" font-family="Cinzel,serif" font-size="18" fill="#3A2817" font-weight="700">N</text></g>
  <g id="stageLayer"></g><g id="caravanLayer"></g>
  </svg><canvas class="fx"></canvas><div class="map-vig"></div>`;
  return el;
};

/* position helper: point along the road at fraction f (0..1) */
RR.roadPoint = function(svgEl,f){
  const p=svgEl.querySelector("#roadPath"); const L=p.getTotalLength(); const pt=p.getPointAtLength(L*RR.clamp(f,0,1)); return {x:pt.x,y:pt.y,L};
};

})();
