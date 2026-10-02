/* ===================================================================
   PROCEDURAL ART LIBRARY (SVG) — silhouettes, ridges, seal, icons.
   Everything here is drawn in code so the app is beautiful BEFORE any
   AI images are added; images then upgrade these layers (see core.js).
   =================================================================== */
(function(){
"use strict";
const RR = window.RR; const A = RR.art = {};

/* seeded random so scenes are identical every load */
A.rng = function(seed){ let a=seed>>>0; return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; };

/* midpoint-displacement ridge line → closed SVG path (peak>1 exaggerates summits) */
A._pts = function(seed,{W=1600,y=500,amp=160,rough=.52,steps=8,peak=1}={}){
  const r=A.rng(seed); let pts=[[0,y+(r()-.5)*amp*.6],[W,y+(r()-.5)*amp*.6]]; let d=amp;
  for(let s=0;s<steps;s++){ const out=[]; for(let i=0;i<pts.length-1;i++){ const a=pts[i],b=pts[i+1]; out.push(a,[(a[0]+b[0])/2,(a[1]+b[1])/2+(r()-.5)*d]); } out.push(pts[pts.length-1]); pts=out; d*=rough; }
  if(peak!==1) pts=pts.map(([x,yy])=>[x, yy<y ? y-(y-yy)*peak : yy]);
  return pts;
};
A.ridge = function(seed,o={}){
  const {W=1600,H=900,bottom=null}=o, pts=A._pts(seed,o), bot=bottom ?? H+20;
  return "M0 "+bot+" L"+pts.map(p=>p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" L")+" L"+W+" "+bot+"Z";
};
A.ridgeY = (seed,o={})=>{ const pts=A._pts(seed,o), y=o.y??500;
  return x=>{ for(let i=0;i<pts.length-1;i++){ if(x>=pts[i][0]&&x<=pts[i+1][0]){ const t=(x-pts[i][0])/(pts[i+1][0]-pts[i][0]); return pts[i][1]+(pts[i+1][1]-pts[i][1])*t; } } return y; };
};

/* ---------- silhouettes ---------- */
A.camel = (fill="#110E16")=>`
<g class="camel" fill="${fill}">
  <g class="leg b1"><path d="M30 78 L40 78 L38 118 L44 128 L32 128 L30 118Z"/></g>
  <g class="leg f1"><path d="M112 78 L122 78 L122 118 L128 128 L116 128 L112 118Z"/></g>
  <path d="M26 66 C22 52 36 46 48 50 C54 36 64 34 70 48 C86 46 104 48 122 54 C134 40 140 28 144 18 L154 14 C160 12 168 14 170 20 C170 24 164 24 160 24 L156 28 C152 42 148 56 140 70 C136 82 124 86 112 86 L40 86 C30 84 26 76 26 66Z"/>
  <path d="M26 64 C18 64 14 72 16 86 C20 80 24 76 28 74Z"/>
  <g class="leg b2"><path d="M46 78 L56 78 L54 118 L60 128 L48 128 L46 118Z"/></g>
  <g class="leg f2"><path d="M100 78 L110 78 L110 118 L116 128 L104 128 L100 118Z"/></g>
</g>`;
A.camelWalker = (scale=.5,fill)=>`<g transform="scale(${scale})">${A.camel(fill)}</g>`;
A.eagle = (fill="#0B090F")=>`<g class="eagle" fill="${fill}"><path d="M0 0 C-14 -9 -36 -12 -62 3 C-42 -3 -28 0 -15 9 L-7 13 L-9 26 L0 20 L9 26 L7 13 L15 9 C28 0 42 -3 62 3 C36 -12 14 -9 0 0Z"/></g>`;
A.ibex = (fill="#0C0A0F")=>`
<g class="ibex" fill="${fill}">
  <path d="M16 46 C14 38 24 33 38 33 L72 33 C80 32 86 26 90 18 C92 12 98 10 104 12 L112 20 C113 23 110 25 106 25 L100 27 C98 36 96 46 88 54 C80 60 60 60 44 60 C32 62 20 58 16 46Z"/>
  <path d="M80 54 L91 54 L89 104 L82 104Z M70 58 L79 56 L77 104 L71 104Z M44 58 L55 58 L52 104 L46 104Z M22 52 L35 56 L31 82 L34 104 L26 104 L23 80Z"/>
  <path d="M96 14 C84 -7 54 -9 26 10 C54 1 82 4 101 19Z"/>
  <path d="M99 27 L102 40 L95 30Z"/><path d="M16 44 L9 52 L19 51Z"/>
</g>`;
A.oak = (x,y,s=1,fill="#1B1623")=>`<g transform="translate(${x} ${y}) scale(${s})" fill="${fill}"><rect x="-2.5" y="-4" width="5" height="22"/><circle cx="0" cy="-16" r="15"/><circle cx="-12" cy="-8" r="10"/><circle cx="12" cy="-9" r="11"/><circle cx="2" cy="-28" r="9"/></g>`;
A.column = (fill="#1A1522")=>`<g fill="${fill}"><rect x="-8" y="0" width="16" height="140"/><rect x="-14" y="-6" width="28" height="8"/><rect x="-12" y="136" width="24" height="8"/><path d="M-18 -6 C-18 -26 -6 -30 0 -30 C6 -30 18 -26 18 -6Z"/></g>`;
A.star4 = (cx,cy,r,fill="#fff")=>`<path d="M${cx} ${cy-r} Q${cx+r*.12} ${cy-r*.12} ${cx+r} ${cy} Q${cx+r*.12} ${cy+r*.12} ${cx} ${cy+r} Q${cx-r*.12} ${cy+r*.12} ${cx-r} ${cy} Q${cx-r*.12} ${cy-r*.12} ${cx} ${cy-r}Z" fill="${fill}"/>`;

/* ---------- Seal of the Kings: whole + ten fragments ---------- */
A.sealGeometry = function(R=100,seed=7){
  const r=A.rng(seed), N=10, cx=0, cy=0, cuts=[];
  const base=Array.from({length:N},(_,i)=>i/N*Math.PI*2 - Math.PI/2 + (r()-.5)*.22);
  base.forEach(a=>{ const pts=[[cx+(r()-.5)*8,cy+(r()-.5)*8]]; const seg=4;
    for(let k=1;k<=seg;k++){ const rad=R*k/seg, wob=(k===seg?0:(r()-.5)*R*.12), ang=a+(r()-.5)*.1;
      pts.push([cx+Math.cos(ang)*rad+Math.cos(a+1.57)*wob, cy+Math.sin(ang)*rad+Math.sin(a+1.57)*wob]); }
    cuts.push({a,pts}); });
  const frags=[];
  for(let i=0;i<N;i++){ const c1=cuts[i], c2=cuts[(i+1)%N]; let a1=c1.a, a2=c2.a; if(a2<a1) a2+=Math.PI*2;
    const arc=[]; const steps=5; for(let s=1;s<steps;s++){ const a=a1+(a2-a1)*s/steps; arc.push([cx+Math.cos(a)*R,cy+Math.sin(a)*R]); }
    const poly=[...c1.pts, ...arc, ...c2.pts.slice().reverse().slice(0,c2.pts.length-1)];
    const mid=(a1+a2)/2; frags.push({i,poly,mid,centroid:[Math.cos(mid)*R*.55,Math.sin(mid)*R*.55]}); }
  return {R,frags,cuts};
};
A.sealFragmentPath = f=>"M"+f.poly.map(p=>p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" L")+"Z";
A.sealDefs = (id="sl")=>`
<linearGradient id="${id}Gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EAE0C5"/><stop offset=".35" stop-color="#DFBD6B"/><stop offset=".7" stop-color="#A78541"/><stop offset="1" stop-color="#573E1A"/></linearGradient>
<radialGradient id="${id}Glow"><stop offset="0" stop-color="#DAC797" stop-opacity=".95"/><stop offset="1" stop-color="#DAC797" stop-opacity="0"/></radialGradient>`;
/* engraving on the whole seal (clipped to the circle) */
A.sealEngraving = (R=100)=>`
<g fill="none" stroke="#39290E" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round">
  <circle r="${R*.88}"/><circle r="${R*.74}" stroke-dasharray="2 6"/>
  <g>${Array.from({length:16},(_,i)=>`<path d="M0 ${-R*.88} L0 ${-R*.74}" transform="rotate(${i*22.5})"/>`).join("")}</g>
  <path d="M-34 38 V-24 M34 38 V-24 M-44 -26 H44 M-44 -26 C-44 -46 -22 -50 0 -50 C22 -50 44 -46 44 -26 M-30 38 H30 M-18 -4 C-18 -14 18 -14 18 -4"/>
  <path d="M-40 -2 C-62 -6 -70 -26 -64 -38 C-56 -28 -48 -26 -40 -30 M40 -2 C62 -6 70 -26 64 -38 C56 -28 48 -26 40 -30"/>
</g>
<circle r="${R*.1}" fill="#5E718C" stroke="#39290E" stroke-opacity=".6" stroke-width="2" cy="8"/>`;

/* ---------- line icons for day tiles / UI (gold, 64×64) ---------- */
A.icon = function(name,size=56,color="currentColor",sw=3){
  const p={
    scroll:`<path d="M16 12 H44 C50 12 50 22 44 22 H20 M16 12 C10 12 10 22 16 22 V48 C16 54 24 54 24 48 V22 M20 22 V50 C20 56 46 56 50 50 V24 M26 30 H42 M26 38 H42 M26 46 H38" />`,
    compass:`<circle cx="32" cy="32" r="21"/><path d="M32 8 V14 M32 50 V56 M8 32 H14 M50 32 H56"/><path d="M40 24 L35 35 L24 40 L29 29Z" fill="currentColor" fill-opacity=".25"/><circle cx="32" cy="32" r="2.4" fill="currentColor"/>`,
    ibex:`<path d="M14 46 L24 28 L30 36 L38 20 L50 46Z" fill="currentColor" fill-opacity=".18"/><path d="M34 14 C28 8 20 8 14 14 M36 18 C44 8 54 12 52 22 M40 20 L50 24 L47 30 L40 28"/><circle cx="44" cy="22" r="1.6" fill="currentColor"/><path d="M8 52 H56"/>`,
    rosette:`<circle cx="32" cy="32" r="6"/>${Array.from({length:8},(_,i)=>`<path d="M32 26 C27 18 28 11 32 8 C36 11 37 18 32 26Z" transform="rotate(${i*45} 32 32)" fill="currentColor" fill-opacity=".18"/>`).join("")}<circle cx="32" cy="32" r="23" stroke-dasharray="1 5"/>`,
    horn:`<path d="M8 36 L34 24 C38 22 44 24 46 28 L54 14 M8 36 L34 44 C38 46 44 44 46 40 L54 54 M34 24 V44 M46 28 V40"/><circle cx="8" cy="36" r="3.4" fill="currentColor"/><path d="M52 30 H58 M52 38 H58"/>`,
    lock:`<rect x="16" y="28" width="32" height="24" rx="4" fill="currentColor" fill-opacity=".15"/><path d="M22 28 V20 C22 10 42 10 42 20 V28"/><circle cx="32" cy="40" r="3" fill="currentColor"/>`,
    gear:`<circle cx="32" cy="32" r="9"/><path d="M32 6 V14 M32 50 V58 M6 32 H14 M50 32 H58 M13.6 13.6 L19.3 19.3 M44.7 44.7 L50.4 50.4 M50.4 13.6 L44.7 19.3 M19.3 44.7 L13.6 50.4"/>`,
    speaker:`<path d="M10 26 H20 L32 16 V48 L20 38 H10Z" fill="currentColor" fill-opacity=".2"/><path d="M40 24 C46 28 46 36 40 40 M46 18 C56 26 56 38 46 46"/>`,
    mute:`<path d="M10 26 H20 L32 16 V48 L20 38 H10Z" fill="currentColor" fill-opacity=".2"/><path d="M42 26 L56 40 M56 26 L42 40"/>`,
    book:`<path d="M10 14 C20 10 28 12 32 18 C36 12 44 10 54 14 V48 C44 44 36 46 32 52 C28 46 20 44 10 48Z" fill="currentColor" fill-opacity=".14"/><path d="M32 18 V52"/>`,
    trophy:`<path d="M20 10 H44 V26 C44 36 38 42 32 42 C26 42 20 36 20 26Z" fill="currentColor" fill-opacity=".18"/><path d="M20 14 H10 C10 26 14 30 22 30 M44 14 H54 C54 26 50 30 42 30 M32 42 V50 M22 54 H42 M26 50 H38"/>`,
    paw:`<ellipse cx="32" cy="42" rx="10" ry="8" fill="currentColor" fill-opacity=".2"/><circle cx="18" cy="30" r="4.4"/><circle cx="27" cy="20" r="4.4"/><circle cx="38" cy="20" r="4.4"/><circle cx="47" cy="30" r="4.4"/>`,
    flame:`<path d="M32 8 C34 20 48 24 48 38 C48 48 40 56 32 56 C24 56 16 48 16 38 C16 30 22 26 24 20 C28 24 30 22 32 8Z" fill="currentColor" fill-opacity=".2"/><path d="M32 56 C26 56 24 50 28 44 C30 42 32 40 32 36 C38 42 40 48 38 52"/>`,
    star:`<path d="M32 8 L38 24 L55 25 L42 36 L46 53 L32 44 L18 53 L22 36 L9 25 L26 24Z" fill="currentColor" fill-opacity=".2"/>`,
    qr:`<rect x="10" y="10" width="18" height="18" rx="2"/><rect x="36" y="10" width="18" height="18" rx="2"/><rect x="10" y="36" width="18" height="18" rx="2"/><path d="M36 36 H44 V44 H36Z M48 48 H54 V54 H48Z M48 36 H54"/>`,
    print:`<path d="M18 22 V10 H46 V22 M18 46 H12 V26 H52 V46 H46 M18 38 H46 V56 H18Z"/>`,
    home:`<path d="M10 32 L32 12 L54 32 M16 28 V52 H48 V28" fill="currentColor" fill-opacity=".12"/><path d="M27 52 V38 H37 V52"/>`
  }[name]||"";
  return `<svg viewBox="0 0 64 64" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
};

/* ---------- Ecbatana: Herodotus' seven walls (colours as he described) ---------- */
A.ecbatana = (x,y,s=1)=>{
  const cols=["#f4eee0","#1a1a22","#8a2f6a","#5A4972","#CC7C3E","#c9ccd6","#BA9B58"]; // white, black, purple, blue, orange, silver, gold
  let out=`<g transform="translate(${x} ${y}) scale(${s})">`;
  out+=`<path d="M-120 0 C-90 -30 -60 -40 0 -44 C60 -40 90 -30 120 0Z" fill="#2A2235" opacity=".9"/>`;
  cols.forEach((c,i)=>{ const w=96-i*12, h=13, yy=-12-i*h; out+=`<path d="M${-w} ${yy+h} L${-w+4} ${yy} H${w-4} L${w} ${yy+h}Z" fill="${c}"/><path d="M${-w+4} ${yy-2} H${w-4}" stroke="${c}" stroke-width="4" stroke-dasharray="5 4"/><path d="M${-w+4} ${yy} H${w-4}" stroke="rgba(255,255,255,.55)" stroke-width="1.4"/>`; });
  out+=`<path d="M-8 -104 H8 L6 -116 H-6Z" fill="#BA9B58"/><circle cx="0" cy="-120" r="3" fill="#E9E0C3"/></g>`;
  return out;
};
})();
