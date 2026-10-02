/* ===================================================================
   WIDGETS — Thursday (Art): Symmetry Lab (kaleidoscope rosette maker) · Lotus Frieze Studio
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, h=RR.h; RR.widgets=RR.widgets||{};

/* ---------------- 1. SYMMETRY LAB ---------------- */
const PAL=[["Gold","#BFA15D"],["Turquoise","#6A7D97"],["Sky lapis","#B3A8C3"],["Ivory","#FAF2DB"],["Terracotta","#D07B5F"],["Plum","#B0A4C0"]];
const BGS={lapis:["#32283F","#211B2A"],night:["#0D0C11","#08060A"],parchment:["#EDE0C3","#D0BA91"]};
RR.widgets.symmetryLab=function(){
  const S=560, root=h("div",{class:"symlab"});
  const st={n:8,mirror:true,color:PAL[0][1],size:5,bg:"lapis",guides:true,strokes:[],cur:null};
  const cv=h("canvas",{width:S*2,height:S*2,class:"sl-canvas","aria-label":"Drawing canvas: draw in any wedge and the pattern repeats around the centre",style:{touchAction:"none"}});
  const g=cv.getContext("2d");
  function bgFill(){ const c=BGS[st.bg]; const gr=g.createRadialGradient(S,S,20,S,S,S*1.3); gr.addColorStop(0,c[0]); gr.addColorStop(1,c[1]); g.fillStyle=gr; g.fillRect(0,0,S*2,S*2); }
  function guides(){ if(!st.guides) return; g.save(); g.translate(S,S); g.strokeStyle=st.bg==="parchment"?"rgba(53,30,7,.25)":"rgba(243,224,162,.22)"; g.lineWidth=2; g.setLineDash([10,12]);
    for(let k=0;k<st.n;k++){ g.rotate(Math.PI*2/st.n); g.beginPath(); g.moveTo(0,0); g.lineTo(0,-S*.96); g.stroke(); }
    if(st.mirror){ g.setLineDash([4,10]); g.strokeStyle=st.bg==="parchment"?"rgba(53,30,7,.14)":"rgba(243,224,162,.12)"; for(let k=0;k<st.n;k++){ g.rotate(Math.PI*2/st.n); g.beginPath(); g.moveTo(0,0); g.lineTo(Math.sin(Math.PI/st.n)*S*.96,-Math.cos(Math.PI/st.n)*S*.96); g.stroke(); } }
    g.setLineDash([]); g.beginPath(); g.arc(0,0,S*.96,0,7); g.strokeStyle=st.bg==="parchment"?"rgba(53,30,7,.3)":"rgba(243,224,162,.3)"; g.stroke(); g.restore(); }
  function drawStroke(s){
    if(!s.pts.length) return; g.save(); g.translate(S,S); g.lineCap="round"; g.lineJoin="round"; g.strokeStyle=s.color; g.fillStyle=s.color; g.lineWidth=s.size*2; g.shadowColor=s.color; g.shadowBlur=s.color===PAL[0][1]?10:4;
    const path=(flip)=>{ g.beginPath(); s.pts.forEach(([x,y],i)=>{ const X=flip?-x:x; i?g.lineTo(X,y):g.moveTo(X,y); }); if(s.pts.length===1){ g.arc(flip?-s.pts[0][0]:s.pts[0][0],s.pts[0][1],s.size,0,7); g.fill(); } else g.stroke(); };
    for(let k=0;k<s.n;k++){ g.save(); g.rotate(Math.PI*2/s.n*k); path(false); if(s.mirror) path(true); g.restore(); }
    g.restore(); }
  function redraw(){ g.clearRect(0,0,S*2,S*2); bgFill(); guides(); st.strokes.forEach(drawStroke); if(st.cur) drawStroke(st.cur); }
  function pos(e){ const r=cv.getBoundingClientRect(); return [ (e.clientX-r.left)/r.width*S*2 - S, (e.clientY-r.top)/r.height*S*2 - S ]; }
  cv.addEventListener("pointerdown",e=>{ cv.setPointerCapture(e.pointerId); st.cur={pts:[pos(e)],color:st.color,size:st.size,n:st.n,mirror:st.mirror}; redraw(); });
  cv.addEventListener("pointermove",e=>{ if(!st.cur) return; st.cur.pts.push(pos(e)); redraw(); });
  const end=()=>{ if(st.cur){ st.strokes.push(st.cur); st.cur=null; redraw(); RR.sfx.tick(); } };
  cv.addEventListener("pointerup",end); cv.addEventListener("pointercancel",end);

  const nBtns=h("div",{class:"sl-row"},[4,6,8,12,16].map(n=>h("button",{class:"btn ghost small"+(n===st.n?" on":""),type:"button","aria-pressed":n===st.n,onclick:e=>{ st.n=n; RR.$$(".sl-n button",root).forEach(b=>{b.classList.remove("on");b.setAttribute("aria-pressed","false")}); e.currentTarget.classList.add("on"); e.currentTarget.setAttribute("aria-pressed","true"); redraw(); info(); }},String(n))));
  nBtns.classList.add("sl-n");
  const sw=h("div",{class:"sl-row sl-pal"},PAL.map(([nm,c],i)=>h("button",{class:"swatch"+(i===0?" on":""),type:"button",style:{background:c},"aria-label":nm,title:nm,onclick:e=>{ st.color=c; RR.$$(".swatch",root).forEach(b=>b.classList.remove("on")); e.currentTarget.classList.add("on"); }})));
  const size=h("input",{type:"range",min:2,max:14,value:st.size,"aria-label":"Brush size",oninput:e=>{st.size=+e.target.value;}});
  const mir=h("button",{class:"btn ghost small on",type:"button","aria-pressed":"true",onclick:e=>{ st.mirror=!st.mirror; e.currentTarget.classList.toggle("on",st.mirror); e.currentTarget.setAttribute("aria-pressed",st.mirror); redraw(); info(); }},"Mirror lines");
  const gd=h("button",{class:"btn ghost small on",type:"button","aria-pressed":"true",onclick:e=>{ st.guides=!st.guides; e.currentTarget.classList.toggle("on",st.guides); e.currentTarget.setAttribute("aria-pressed",st.guides); redraw(); }},"Guides");
  const bgSel=h("div",{class:"sl-row"},Object.keys(BGS).map(k=>h("button",{class:"btn ghost small"+(k===st.bg?" on":""),type:"button",onclick:e=>{ st.bg=k; RR.$$(".sl-bg button",root).forEach(b=>b.classList.remove("on")); e.currentTarget.classList.add("on"); redraw(); }},k[0].toUpperCase()+k.slice(1))));
  bgSel.classList.add("sl-bg");
  const undo=h("button",{class:"btn ghost small",type:"button",onclick:()=>{ st.strokes.pop(); redraw(); }},"↶ Undo");
  const clear=h("button",{class:"btn ghost small",type:"button",onclick:()=>{ st.strokes=[]; redraw(); }},"Clear");
  const stamp=h("button",{class:"btn small",type:"button",onclick:()=>{ // auto petal
    const pts=[]; const P0=[0,-30],C1=[-46,-70],C2=[-30,-130],P1=[0,-165];
    for(let t=0;t<=1.0001;t+=.04){ const a=(1-t)**3,b=3*(1-t)**2*t,c=3*(1-t)*t**2,d=t**3; pts.push([a*P0[0]+b*C1[0]+c*C2[0]+d*P1[0], a*P0[1]+b*C1[1]+c*C2[1]+d*P1[1]]); }
    for(let t=1;t>=-.0001;t-=.04){ const a=(1-t)**3,b=3*(1-t)**2*t,c=3*(1-t)*t**2,d=t**3; pts.push([-(a*P0[0]+b*C1[0]+c*C2[0]+d*P1[0]), a*P0[1]+b*C1[1]+c*C2[1]+d*P1[1]]); }
    st.strokes.push({pts,color:st.color,size:4,n:st.n,mirror:false});
    const ring=[]; for(let a=0;a<=6.35;a+=.12) ring.push([Math.cos(a)*24,Math.sin(a)*24]); st.strokes.push({pts:ring,color:PAL[3][1],size:3,n:1,mirror:false});
    redraw(); RR.sfx.stamp(); }},"✿ Add a petal ring");
  const dl=h("button",{class:"btn teal small",type:"button",onclick:()=>{ const tmp=document.createElement("canvas"); tmp.width=S*2; tmp.height=S*2; const t=tmp.getContext("2d"); t.drawImage(cv,0,0); tmp.toBlob(b=>{ const a=h("a",{href:URL.createObjectURL(b),download:"my-rosette.png"}); document.body.append(a); a.click(); a.remove(); }); RR.toast("Saved your rosette!"); }},"⬇ Save PNG");
  const readout=h("p",{class:"sl-info"}); function info(){ readout.innerHTML=`Your rosette repeats <b>${st.n}</b> times around the centre${st.mirror?` and is also mirrored — so it has <b>${st.n}</b> mirror lines`:""}. A full circle is 360°, so each wedge is <b>${(360/st.n).toFixed(st.n===16?1:0)}°</b>.`; }
  info(); redraw();
  const wrap=h("div",{class:"sl-canvas-wrap"},cv);
  root.append(h("div",{class:"sl-grid"},wrap,h("div",{class:"sl-ctl"},
    h("label",{},"Number of wedges"),nBtns,h("label",{},"Colour"),sw,h("label",{},"Brush size"),size,h("div",{class:"sl-row"},mir,gd),h("label",{},"Background"),bgSel,h("div",{class:"sl-row"},stamp,undo,clear,dl),readout)));
  return RR.widgetBox("Symmetry Lab — Make a Rosette","Draw in ANY wedge. Watch the pattern repeat around the centre, like the stone-carvers’ rosettes. Plan your design here, then make it for real with compass and paint!",root);
};

/* ---------------- 2. LOTUS FRIEZE STUDIO ---------------- */
const MOTIFS={
 lotus:`<g><path d="M30 72 C20 50 22 24 30 8 C38 24 40 50 30 72Z"/><path d="M30 72 C14 62 6 40 8 26 C20 34 28 50 30 72Z"/><path d="M30 72 C46 62 54 40 52 26 C40 34 32 50 30 72Z"/><path d="M18 72 H42" stroke-width="3"/></g>`,
 bud:`<g><path d="M30 72 C16 52 20 28 30 8 C40 28 44 52 30 72Z"/><path d="M30 72 C18 70 14 62 16 56 C22 62 28 64 30 72Z"/><path d="M30 72 C42 70 46 62 44 56 C38 62 32 64 30 72Z"/></g>`,
 rosette:`<g transform="translate(30 40)">${Array.from({length:8},(_,i)=>`<path d="M0 -6 C-9 -14 -8 -26 0 -32 C8 -26 9 -14 0 -6Z" transform="rotate(${i*45})"/>`).join("")}<circle r="6"/></g>`,
 palmette:`<g transform="translate(30 74)">${Array.from({length:7},(_,i)=>`<path d="M0 0 C-5 -18 -4 -44 0 -64 C4 -44 5 -18 0 0Z" transform="rotate(${(i-3)*17})"/>`).join("")}</g>`
};
const PATS={ "A A A A A A":[0,0,0,0,0,0], "A B A B A B":[0,1,0,1,0,1], "A B B A B B":[0,1,1,0,1,1] };
RR.widgets.frieze=function(){
  const root=h("div",{class:"frieze"}); const keys=Object.keys(MOTIFS);
  const st={a:"lotus",b:"bud",pat:"A B A B A B",slots:Array(6).fill(null)};
  const band=h("div",{class:"fr-band"}); const info=h("p",{class:"fr-info"});
  const m=(k)=>`<svg viewBox="0 0 60 80" fill="#BFA15D" stroke="#694E24" stroke-width="2" stroke-linejoin="round">${MOTIFS[k]}</svg>`;
  function draw(){ band.innerHTML=""; st.slots.forEach((k,i)=>{ band.append(h("button",{class:"fr-slot"+(k?" on":""),type:"button","aria-label":"Slot "+(i+1)+(k?": "+k:": empty"),style:{"--d":i*120+"ms"},html:k?m(k):"<span>+</span>",onclick:()=>{ const order=[null,st.a,st.b]; const cur=order.indexOf(st.slots[i]); st.slots[i]=order[(cur+1)%3]; RR.sfx.pop(); draw(); }})); });
    const filled=st.slots.filter(Boolean).length; const seq=st.slots.map(k=>k?(k===st.a?"A":"B"):"·").join(" ");
    info.innerHTML=filled===6?`Your rhythm: <b>${seq}</b>. Repeating a motif creates <b>rhythm</b> — like a drumbeat you can see.`:`Tap a slot to place a motif (${filled}/6). Tap again to swap.`; }
  const mk=(label,which)=>h("div",{class:"fr-pick"},h("label",{},label),h("div",{class:"sl-row"},keys.map(k=>h("button",{class:"fr-m"+(st[which]===k?" on":""),type:"button","aria-label":k,html:m(k),onclick:e=>{ st[which]=k; RR.$$(".fr-m",e.currentTarget.parentNode).forEach(b=>b.classList.remove("on")); e.currentTarget.classList.add("on"); }}))));
  const pat=h("div",{class:"sl-row"},Object.keys(PATS).map(p=>h("button",{class:"btn ghost small"+(p===st.pat?" on":""),type:"button",onclick:e=>{ st.pat=p; RR.$$(".fr-pats button",root).forEach(b=>b.classList.remove("on")); e.currentTarget.classList.add("on"); }},p))); pat.classList.add("fr-pats");
  const go=h("button",{class:"btn small",type:"button",onclick:async()=>{ const seq=PATS[st.pat]; st.slots=Array(6).fill(null); draw(); for(let i=0;i<6;i++){ await RR.sleep(160); st.slots[i]=seq[i]?st.b:st.a; draw(); RR.sfx.stamp(); } }},"🖨 Print ×6");
  const clr=h("button",{class:"btn ghost small",type:"button",onclick:()=>{ st.slots=Array(6).fill(null); draw(); }},"Clear");
  root.append(band,info,mk("Motif A","a"),mk("Motif B","b"),h("label",{},"Rhythm pattern"),pat,h("div",{class:"sl-row"},go,clr)); draw();
  return RR.widgetBox("Lotus Frieze Studio","Plan your foam-print border: choose motifs, pick a rhythm, and print six repeats.",root);
};
})();
