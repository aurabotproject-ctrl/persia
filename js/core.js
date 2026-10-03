/* ===================================================================
   THE ROYAL ROAD RACE — core engine (window.RR)
   settings · safe storage · DOM helper · WebAudio sfx · read-aloud ·
   particle engine · parallax · gate doors · coin rain · assets · teams
   =================================================================== */
(function(){
"use strict";
const RR = window.RR = window.RR || {};

/* ---------- tiny helpers ---------- */
RR.$  = (s,r=document)=>r.querySelector(s);
RR.$$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
RR.h = function(tag,attrs,...kids){
  const el = tag.startsWith("svg:") ? document.createElementNS("http://www.w3.org/2000/svg",tag.slice(4)) : document.createElement(tag);
  if(attrs) for(const k in attrs){
    const v=attrs[k]; if(v==null||v===false) continue;
    if(k==="class") el.setAttribute("class",v);
    else if(k==="html") el.innerHTML=v;
    else if(k==="style" && typeof v==="object"){ for(const sk in v){ if(sk.startsWith("--")) el.style.setProperty(sk,v[sk]); else el.style[sk]=v[sk]; } }
    else if(k.startsWith("on") && typeof v==="function") el.addEventListener(k.slice(2),v);
    else if(k==="dataset") Object.assign(el.dataset,v);
    else el.setAttribute(k,v===true?"":v);
  }
  const add=k=>{ if(k==null||k===false) return; if(Array.isArray(k)) return k.forEach(add); el.append(k.nodeType?k:document.createTextNode(k)); };
  kids.forEach(add); return el;
};
RR.esc = s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
RR.rand = (a,b)=>a+Math.random()*(b-a);
RR.pick = a=>a[Math.floor(Math.random()*a.length)];
RR.shuffle = a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
RR.clamp = (v,a,b)=>Math.max(a,Math.min(b,v));
RR.slug = s=>String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
RR.sleep = ms=>new Promise(r=>setTimeout(r,ms));
RR.isMobile = ()=>matchMedia("(max-width:700px)").matches || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

/* ---------- safe storage (never required for correctness) ---------- */
RR.ls = {
  get(k,d=null){ try{ const v=localStorage.getItem("rr:"+k); return v==null?d:JSON.parse(v);}catch(e){return d} },
  set(k,v){ try{ localStorage.setItem("rr:"+k,JSON.stringify(v)); return true;}catch(e){return false} },
  del(k){ try{ localStorage.removeItem("rr:"+k);}catch(e){} }
};
RR.ss = {
  get(k,d=null){ try{ const v=sessionStorage.getItem("rr:"+k); return v==null?d:JSON.parse(v);}catch(e){return d} },
  set(k,v){ try{ sessionStorage.setItem("rr:"+k,JSON.stringify(v)); }catch(e){} }
};

/* ---------- settings (accessibility, sound, te reo, etc.) ---------- */
const DEFAULTS = { sound:false, reduceMotion:false, dyslexia:false, textSize:1, teReo:true, easyRead:false };
RR.settings = Object.assign({}, DEFAULTS, RR.ls.get("settings",{}));
RR.applySettings = function(){
  const s=RR.settings, b=document.body; if(!b) return;
  b.classList.toggle("rm", !!s.reduceMotion);
  b.classList.toggle("dys", !!s.dyslexia);
  b.classList.toggle("noreo", !s.teReo);
  b.classList.toggle("easy", !!s.easyRead);
  document.documentElement.style.setProperty("--fs", s.textSize);
};
RR.setSetting = function(k,v){ RR.settings[k]=v; RR.ls.set("settings",RR.settings); RR.applySettings();
  document.dispatchEvent(new CustomEvent("rr:settings",{detail:{k,v}})); };
RR.motionOK = ()=> !RR.settings.reduceMotion && !matchMedia("(prefers-reduced-motion:reduce)").matches;
document.addEventListener("DOMContentLoaded",RR.applySettings);

/* ---------- te reo Māori layer ---------- */
RR.DAYS = [
  {id:"mon", en:"Monday",    mi:"Rāhina", subject:"History",   icon:"scroll"},
  {id:"tue", en:"Tuesday",   mi:"Rātū",   subject:"Geography", icon:"compass"},
  {id:"wed", en:"Wednesday", mi:"Rāapa",  subject:"Science",   icon:"ibex"},
  {id:"thu", en:"Thursday",  mi:"Rāpare", subject:"Art",       icon:"rosette"},
  {id:"fri", en:"Friday",    mi:"Rāmere", subject:"Showdown",  icon:"horn"}
];
RR.dayName = d=> RR.settings.teReo ? `${d.mi} · ${d.en}` : d.en;

/* ===================================================================
   SOUND — everything synthesised with WebAudio (no files). Default muted.
   =================================================================== */
const Snd = RR.sfx = {};
let AC=null, master=null, windNode=null;
function ac(){
  if(!RR.settings.sound) return null;
  try{
    if(!AC){ AC=new (window.AudioContext||window.webkitAudioContext)(); master=AC.createGain(); master.gain.value=.55; master.connect(AC.destination); }
    if(AC.state==="suspended") AC.resume();
    return AC;
  }catch(e){return null}
}
function env(g,t0,a,d,peak,end=.0001){ g.gain.cancelScheduledValues(t0); g.gain.setValueAtTime(.0001,t0); g.gain.exponentialRampToValueAtTime(peak,t0+a); g.gain.exponentialRampToValueAtTime(end,t0+a+d); }
function tone(freq,t0,dur,{type="sine",vol=.2,slide=null,attack=.008,lp=null}={}){
  const c=ac(); if(!c) return; const t=c.currentTime+t0;
  const o=c.createOscillator(), g=c.createGain(); o.type=type; o.frequency.setValueAtTime(freq,t);
  if(slide) o.frequency.exponentialRampToValueAtTime(slide,t+dur);
  let out=o; if(lp){ const f=c.createBiquadFilter(); f.type="lowpass"; f.frequency.value=lp; o.connect(f); out=f; }
  out.connect(g); g.connect(master); env(g,t,attack,dur,vol); o.start(t); o.stop(t+dur+.1);
}
function noiseBurst(t0,dur,{vol=.2,type="lowpass",freq=400,q=1,sweepTo=null,attack=.01}={}){
  const c=ac(); if(!c) return; const t=c.currentTime+t0;
  const buf=c.createBuffer(1,Math.ceil(c.sampleRate*dur),c.sampleRate), d=buf.getChannelData(0);
  for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
  const s=c.createBufferSource(); s.buffer=buf; const f=c.createBiquadFilter(); f.type=type; f.frequency.setValueAtTime(freq,t); f.Q.value=q;
  if(sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo,t+dur);
  const g=c.createGain(); s.connect(f); f.connect(g); g.connect(master); env(g,t,attack,dur,vol); s.start(t);
}
Snd.coin   = ()=>{ tone(1318,0,.22,{type:"triangle",vol:.16}); tone(1975,.07,.4,{type:"triangle",vol:.14}); };
Snd.drum   = (v=.5)=>{ tone(130,0,.35,{slide:45,vol:v}); noiseBurst(0,.12,{vol:v*.35,freq:300}); };
Snd.horn   = (len=1.3)=>{ [196,294,392].forEach((f,i)=>tone(f,0,len,{type:"sawtooth",vol:.075,attack:.18,lp:900+i*200})); };
Snd.fanfare= ()=>{ const n=[392,392,392,523,659,784]; n.forEach((f,i)=>tone(f,i*.17,.5,{type:"sawtooth",vol:.075,lp:1600,attack:.03})); tone(523,1.05,1.4,{type:"sawtooth",vol:.07,lp:1500,attack:.05}); tone(784,1.05,1.4,{type:"sawtooth",vol:.07,lp:1500,attack:.05}); };
Snd.rumble = ()=>{ noiseBurst(0,1.5,{vol:.5,freq:140,attack:.25}); tone(48,0,1.4,{vol:.3,slide:30}); };
Snd.whoosh = ()=>{ noiseBurst(0,.5,{type:"bandpass",freq:300,sweepTo:2400,q:1.2,vol:.12,attack:.12}); };
Snd.flip   = ()=>{ Snd.whoosh(); tone(880,.25,.35,{type:"triangle",vol:.08}); };
Snd.tick   = ()=>{ tone(1500,0,.04,{type:"square",vol:.04}); };
Snd.correct= ()=>{ [523,659,784,1047].forEach((f,i)=>tone(f,i*.08,.35,{type:"triangle",vol:.13})); };
Snd.wrong  = ()=>{ tone(180,0,.5,{type:"sawtooth",vol:.12,slide:90,lp:600}); };
Snd.stamp  = ()=>{ Snd.drum(.55); noiseBurst(.02,.1,{vol:.25,freq:1800}); };
Snd.pop    = ()=>{ tone(600,0,.12,{type:"sine",vol:.12,slide:1000}); };
Snd.crackle= ()=>{ for(let i=0;i<8;i++) noiseBurst(Math.random()*.9,.04,{type:"highpass",freq:3000,vol:.12}); };
Snd.countdown=(n)=>{ n>0 ? tone(440,0,.3,{type:"triangle",vol:.2}) : Snd.horn(.9); };
Snd.drumroll=(secs=2.2)=>{ for(let t=0;t<secs;t+=.07){ tone(110,t,.1,{slide:70,vol:.1+.22*(t/secs)}); } };
Snd.wind = function(on){
  const c=ac(); if(!c){ return; }
  if(!on){ if(windNode){ try{windNode.stop()}catch(e){} windNode=null; } return; }
  if(windNode) return;
  const len=c.sampleRate*3, buf=c.createBuffer(1,len,c.sampleRate), d=buf.getChannelData(0); let last=0;
  for(let i=0;i<len;i++){ last=(last+0.02*(Math.random()*2-1))/1.02; d[i]=last*3.2; }
  const s=c.createBufferSource(); s.buffer=buf; s.loop=true;
  const f=c.createBiquadFilter(); f.type="bandpass"; f.frequency.value=380; f.Q.value=.6;
  const lfo=c.createOscillator(), lg=c.createGain(); lfo.frequency.value=.12; lg.gain.value=160; lfo.connect(lg); lg.connect(f.frequency); lfo.start();
  const g=c.createGain(); g.gain.value=.035; s.connect(f); f.connect(g); g.connect(master); s.start(); windNode=s;
};
document.addEventListener("rr:settings",e=>{ if(e.detail.k==="sound" && !e.detail.v) Snd.wind(false); });

/* ---------- read aloud (SpeechSynthesis) ---------- */
let _voice=null;
function pickVoice(){
  if(!("speechSynthesis" in window)) return;
  const vs=speechSynthesis.getVoices(); if(!vs.length) return;
  const en=vs.filter(v=>/^en/i.test(v.lang));
  const saved=(()=>{try{return localStorage.getItem("rr:voice")}catch(e){return null}})();
  const rank=v=>{ let r=0;
    if(/google/i.test(v.name)) r+=50;                         // Chrome's natural Google voices
    if(/premium|enhanced|natural|neural/i.test(v.name)) r+=40; // Mac enhanced / Edge natural voices
    if(/en[-_]NZ/i.test(v.lang)) r+=6; else if(/en[-_](AU|GB)/i.test(v.lang)) r+=5; else if(/en[-_]US/i.test(v.lang)) r+=2;
    if(/female|serena|ava|samantha|daniel|karen|moira|kate/i.test(v.name)) r+=1;
    if(/compact|espeak|zarvox|bad news|whisper|bubbles|cellos|trinoids|organ|boing/i.test(v.name)) r-=100;
    return r; };
  _voice=(saved&&vs.find(v=>v.voiceURI===saved))||en.slice().sort((x,y)=>rank(y)-rank(x))[0]||null;
}
if("speechSynthesis" in window){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }
RR.voices=()=>("speechSynthesis" in window?speechSynthesis.getVoices().filter(v=>/^en/i.test(v.lang)):[]);
RR.currentVoice=()=>{ if(!_voice) pickVoice(); return _voice; };
RR.setVoice=function(uri){ try{ if(uri) localStorage.setItem("rr:voice",uri); else localStorage.removeItem("rr:voice"); }catch(e){} pickVoice(); };
let _tick=null;
RR.speak = function(text){
  if(!("speechSynthesis" in window)) return false;
  speechSynthesis.cancel(); clearInterval(_tick);
  if(!_voice) pickVoice();
  const clean=String(text).replace(/\s+/g," ").trim();
  // short chunks stop Chrome's Google voices cutting out after ~15 seconds
  const parts=clean.match(/[^.!?;:]+[.!?;:]*\s*/g)||[clean];
  const chunks=[]; let cur="";
  parts.forEach(p=>{ if((cur+p).length>170&&cur){chunks.push(cur);cur=p}else cur+=p; }); if(cur) chunks.push(cur);
  chunks.forEach(c=>{ const u=new SpeechSynthesisUtterance(c); u.rate=.95; u.lang=(_voice&&_voice.lang)||"en-NZ"; if(_voice) u.voice=_voice; speechSynthesis.speak(u); });
  _tick=setInterval(()=>{ if(!speechSynthesis.speaking&&!speechSynthesis.pending) clearInterval(_tick); },1500);
  return true;
};
RR.stopSpeak = ()=>{ try{clearInterval(_tick);speechSynthesis.cancel()}catch(e){} };

/* ---------- toasts ---------- */
RR.toast = function(msg,ms=2600){
  let box=RR.$("#toasts"); if(!box){ box=RR.h("div",{id:"toasts","aria-live":"polite"}); document.body.append(box); }
  const t=RR.h("div",{class:"toast"},msg); box.append(t); setTimeout(()=>{t.style.transition="opacity .4s";t.style.opacity=0;setTimeout(()=>t.remove(),450)},ms);
};

/* ---------- count-up (daric counter roll) ---------- */
RR.countUp = function(el,to,ms=900,from=null){
  const start = from==null ? (parseInt(el.textContent.replace(/\D/g,""))||0) : from; const t0=performance.now();
  if(!RR.motionOK()){ el.textContent=to; return; }
  (function f(t){ const k=RR.clamp((t-t0)/ms,0,1), e=1-Math.pow(1-k,3); el.textContent=Math.round(start+(to-start)*e); if(k<1) requestAnimationFrame(f); })(t0);
};

/* ===================================================================
   PARTICLE ENGINE — canvas, capped, pauses when tab hidden
   =================================================================== */
const PRESETS = {
  motes:{ n:[34,90], blend:"lighter",
    spawn:(w,h,p,init)=>({x:RR.rand(0,w),y:init?RR.rand(0,h):h+10,r:RR.rand(.8,2.8),vy:-RR.rand(6,22),vx:RR.rand(-6,8),ph:RR.rand(0,6.28),sw:RR.rand(.4,1.4),a:RR.rand(.25,.9),c:p.color||"255,224,140"}),
    step:(p,dt,t)=>{p.y+=p.vy*dt;p.x+=p.vx*dt+Math.sin(t*p.sw+p.ph)*.18;},
    dead:(p,w,h)=>p.y<-12,
    draw:(g,p,t)=>{const a=p.a*(.55+.45*Math.sin(t*1.6+p.ph));const gr=g.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*5);gr.addColorStop(0,`rgba(${p.c},${a})`);gr.addColorStop(1,`rgba(${p.c},0)`);g.fillStyle=gr;g.beginPath();g.arc(p.x,p.y,p.r*5,0,6.283);g.fill();}},
  embers:{ n:[40,120], blend:"lighter",
    spawn:(w,h,p,init)=>({x:RR.rand(0,w),y:init?RR.rand(0,h):h+10,r:RR.rand(1,3.2),vy:-RR.rand(30,110),vx:RR.rand(-18,22),ph:RR.rand(0,6.28),a:RR.rand(.4,1),life:1,c:RR.pick(["255,122,47","255,170,60","255,90,40"])}),
    step:(p,dt,t)=>{p.y+=p.vy*dt;p.x+=p.vx*dt+Math.sin(t*2+p.ph)*.5;p.life-=dt*.12;},
    dead:(p)=>p.life<=0||p.y<-12,
    draw:(g,p)=>{g.fillStyle=`rgba(${p.c},${p.a*Math.max(p.life,0)})`;g.beginPath();g.arc(p.x,p.y,p.r,0,6.283);g.fill();}},
  petals:{ n:[22,60], blend:"source-over",
    spawn:(w,h,p,init)=>({x:RR.rand(-20,w),y:init?RR.rand(0,h):-12,r:RR.rand(4,9),vy:RR.rand(18,46),vx:RR.rand(8,30),ph:RR.rand(0,6.28),rot:RR.rand(0,6.28),vr:RR.rand(-1.5,1.5),a:RR.rand(.5,.95),c:RR.pick(p.colors||["255,182,193","255,214,224","255,160,180"])}),
    step:(p,dt,t)=>{p.y+=p.vy*dt;p.x+=p.vx*dt+Math.sin(t*1.3+p.ph)*.6;p.rot+=p.vr*dt;},
    dead:(p,w,h)=>p.y>h+16||p.x>w+20,
    draw:(g,p)=>{g.save();g.translate(p.x,p.y);g.rotate(p.rot);g.fillStyle=`rgba(${p.c},${p.a})`;g.beginPath();g.ellipse(0,0,p.r,p.r*.55,0,0,6.283);g.fill();g.restore();}},
  stars:{ n:[70,160], blend:"lighter",
    spawn:(w,h,p,init)=>({x:RR.rand(0,w),y:RR.rand(0,h*(p.maxY||.8)),r:RR.rand(.4,1.9),ph:RR.rand(0,6.28),sp:RR.rand(.6,2.6),c:RR.pick(["255,255,255","255,238,190","190,215,255"])}),
    step:()=>{}, dead:()=>false,
    draw:(g,p,t)=>{const a=.35+.65*Math.abs(Math.sin(t*p.sp+p.ph));g.fillStyle=`rgba(${p.c},${a})`;g.beginPath();g.arc(p.x,p.y,p.r,0,6.283);g.fill();}},
  dust:{ n:[40,110], blend:"source-over",
    spawn:(w,h,p,init)=>({x:init?RR.rand(0,w):-10,y:RR.rand(h*.4,h),r:RR.rand(.6,2),vx:RR.rand(40,120),vy:RR.rand(-6,6),a:RR.rand(.1,.45)}),
    step:(p,dt)=>{p.x+=p.vx*dt;p.y+=p.vy*dt}, dead:(p,w)=>p.x>w+12,
    draw:(g,p)=>{g.fillStyle=`rgba(227,203,159,${p.a})`;g.fillRect(p.x,p.y,p.r*5,p.r*.8)}},
  ash:{ n:[30,80], blend:"source-over",
    spawn:(w,h,p,init)=>({x:RR.rand(0,w),y:init?RR.rand(0,h):-8,r:RR.rand(1,3),vy:RR.rand(14,40),vx:RR.rand(-12,12),ph:RR.rand(0,6.28),a:RR.rand(.3,.7)}),
    step:(p,dt,t)=>{p.y+=p.vy*dt;p.x+=p.vx*dt+Math.sin(t+p.ph)*.4}, dead:(p,w,h)=>p.y>h+8,
    draw:(g,p)=>{g.fillStyle=`rgba(200,190,180,${p.a})`;g.beginPath();g.arc(p.x,p.y,p.r,0,6.283);g.fill()}}
};
RR.particles = function(canvas,preset="motes",opts={}){
  const P=PRESETS[preset]; const g=canvas.getContext("2d");
  let w=0,h=0,dpr=1,parts=[],raf=0,last=0,running=false,killed=false,t=0,intensity=opts.intensity??1;
  const cap = RR.isMobile()?P.n[0]:P.n[1];
  function resize(){ const r=canvas.getBoundingClientRect(); dpr=Math.min(devicePixelRatio||1,1.5); w=Math.max(1,r.width); h=Math.max(1,r.height);
    canvas.width=w*dpr; canvas.height=h*dpr; g.setTransform(dpr,0,0,dpr,0,0); }
  function target(){ return Math.round(cap*intensity*(RR.settings.reduceMotion?.15:1)); }
  function fill(init){ const n=target(); while(parts.length<n) parts.push(P.spawn(w,h,opts,init)); if(parts.length>n) parts.length=n; }
  function frame(now){
    if(!running) return; raf=requestAnimationFrame(frame);
    if(Math.abs(canvas.clientWidth-w)>2||Math.abs(canvas.clientHeight-h)>2){ resize(); fill(true); }
    const dt=Math.min(.05,(now-last)/1000||.016); last=now; t+=dt;
    g.clearRect(0,0,w,h); g.globalCompositeOperation=P.blend;
    const mv = RR.motionOK();
    for(let i=0;i<parts.length;i++){ const p=parts[i]; if(mv) P.step(p,dt,t); if(P.dead(p,w,h)) parts[i]=P.spawn(w,h,opts,false); else P.draw(g,p,t); }
    g.globalCompositeOperation="source-over";
  }
  const api={
    start(){ if(running||killed) return; if(!canvas.isConnected){ requestAnimationFrame(()=>api.start()); return; }
      resize(); fill(true); running=true; last=performance.now(); raf=requestAnimationFrame(frame); },
    stop(){ running=false; killed=true; cancelAnimationFrame(raf); },
    pause(){ running=false; cancelAnimationFrame(raf); },
    setIntensity(v){ intensity=v; fill(false); },
    resize
  };
  addEventListener("resize",()=>{ resize(); fill(true); });
  document.addEventListener("visibilitychange",()=>{ if(killed) return; document.hidden ? api.pause() : (canvas.isConnected && api.start()); });
  api.start(); return api;
};

/* ---------- pointer / gyro parallax ---------- */
RR.parallaxSVG = function(scene,strength=1){
  const layers=RR.$$("[data-depth]",scene); let tx=0,ty=0,cx=0,cy=0,raf=0;
  function tick(){ cx+=(tx-cx)*.08; cy+=(ty-cy)*.08;
    layers.forEach(l=>{ const d=parseFloat(l.dataset.depth)||0; l.style.transform=`translate3d(${(-cx*d*38*strength).toFixed(2)}px,${(-cy*d*16*strength).toFixed(2)}px,0)`; });
    raf=requestAnimationFrame(tick); }
  function move(e){ const r=scene.getBoundingClientRect(); tx=((e.clientX-r.left)/r.width-.5)*2; ty=((e.clientY-r.top)/r.height-.5)*2; }
  if(!RR.motionOK()) return {stop(){}};
  scene.addEventListener("pointermove",move);
  addEventListener("deviceorientation",e=>{ if(e.gamma!=null){ tx=RR.clamp(e.gamma/30,-1,1); ty=RR.clamp((e.beta-45)/30,-1,1);} });
  // scroll parallax (depth moves slower than scroll)
  const onScroll=()=>{ const y=scrollY; scene.style.setProperty("--sy",y); };
  addEventListener("scroll",onScroll,{passive:true});
  raf=requestAnimationFrame(tick);
  return { stop(){ cancelAnimationFrame(raf); scene.removeEventListener("pointermove",move); } };
};

/* ---------- Gate Doors page transition ---------- */
RR.gates = {
  el:null,
  build(){
    if(this.el) return this.el;
    const door=(side)=>RR.h("div",{class:"gate-door "+side},
      RR.h("div",{class:"gate-inner",html:RR.doorSVG(side)}));
    this.el=RR.h("div",{class:"gates","aria-hidden":"true"},door("l"),door("r"),RR.h("div",{class:"gate-glow"}));
    document.body.append(this.el);
    RR.assetUrl("CORE-13").then(u=>{ if(!u) return; this.el.classList.add("art"); this.el.querySelectorAll(".gate-inner").forEach((g,i)=>{ g.innerHTML=""; g.style.backgroundImage=`url("${new URL(u,location.href).href}")`; g.style.backgroundSize="198.5% 100%"; g.style.backgroundPosition=i===0?"left center":"right center"; g.style.width="100%"; g.style.height="100%"; }); });
    return this.el;
  },
  async go(swap,{sound=true}={}){
    const el=this.build();
    if(!RR.motionOK()){ await swap(); return; }
    el.classList.remove("open"); el.classList.add("show");
    void el.offsetWidth; el.classList.add("closed"); if(sound) RR.sfx.rumble();
    await RR.sleep(820);
    await swap(); window.scrollTo(0,0);
    await RR.sleep(220);
    el.classList.remove("closed"); el.classList.add("open");
    await RR.sleep(1000);
    el.classList.remove("show","open");
  }
};
RR.doorSVG = function(side){
  const flip = side==="r" ? ' transform="translate(300,0) scale(-1,1)"' : "";
  return `<svg viewBox="0 0 300 700" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dg${side}" x1="0" x2="1"><stop offset="0" stop-color="#2a2218"/><stop offset=".5" stop-color="#5b4a33"/><stop offset="1" stop-color="#2a2218"/></linearGradient>
    <linearGradient id="dgold${side}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#EAE0C5"/><stop offset=".5" stop-color="#BA9B58"/><stop offset="1" stop-color="#694E24"/></linearGradient>
  </defs>
  <g${flip}>
    <rect width="300" height="700" fill="url(#dg${side})"/>
    <rect x="12" y="12" width="276" height="676" fill="none" stroke="url(#dgold${side})" stroke-width="5"/>
    <rect x="30" y="30" width="240" height="640" fill="none" stroke="#BA9B58" stroke-opacity=".5" stroke-width="2"/>
    <!-- winged bull (lamassu) relief, simplified -->
    <g fill="none" stroke="url(#dgold${side})" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" opacity=".95">
      <path d="M80 440 C70 380 90 330 130 320 C150 270 200 270 215 320 C245 330 255 380 245 440 L245 520 L215 520 L212 470 L150 470 L148 520 L112 520 L110 470 L84 470Z"/>
      <path d="M150 322 C140 250 100 220 60 230 C80 240 90 262 100 285 C80 280 62 285 50 300 C74 298 92 306 104 322"/>
      <path d="M215 322 C230 260 260 232 280 230 C268 246 262 262 258 286"/>
      <path d="M130 322 C122 296 138 276 160 276 C180 276 198 292 190 322"/>
      <circle cx="152" cy="300" r="4" fill="#BA9B58"/>
      <path d="M118 300 L98 296 M120 308 L100 316"/>
    </g>
    <g fill="#BA9B58" opacity=".85">
      ${Array.from({length:9},(_,i)=>`<circle cx="${60+i*22}" cy="70" r="5"/><circle cx="${60+i*22}" cy="630" r="5"/>`).join("")}
    </g>
    <g stroke="#BA9B58" stroke-opacity=".6" fill="none" stroke-width="2">
      ${Array.from({length:6},(_,i)=>`<rect x="48" y="${100+i*20}" width="204" height="12" rx="2"/>`).join("")}
    </g>
    <circle cx="276" cy="360" r="14" fill="url(#dgold${side})"/><circle cx="276" cy="360" r="6" fill="#2B1B0C"/>
  </g></svg>`;
};

/* ---------- coin rain (daric / podium) ---------- */
RR.coinRain = function(opts={}){
  const n=opts.n||40, host=opts.host||document.body;
  const box=RR.h("div",{class:"coin-rain","aria-hidden":"true",style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:opts.z||8500,overflow:"hidden"}});
  host.append(box);
  if(!RR.motionOK()){ setTimeout(()=>box.remove(),300); return; }
  for(let i=0;i<n;i++){
    const s=RR.rand(18,38), c=RR.h("i",{class:"rain-coin",style:{position:"absolute",left:RR.rand(0,100)+"%",top:"-50px",width:s+"px",height:s+"px",borderRadius:"50%",
      background:"radial-gradient(circle at 35% 30%,#EAE0C5,#BA9B58 45%,#735929)",boxShadow:"inset 0 0 0 3px rgba(107,68,13,.45)",
      animation:`coinFall ${RR.rand(1.4,2.8)}s cubic-bezier(.4,.1,.6,1) ${RR.rand(0,opts.spread||1.2)}s forwards`}});
    box.append(c);
  }
  setTimeout(()=>box.remove(),5200);
  if(RR.settings.sound){ for(let i=0;i<5;i++) setTimeout(()=>RR.sfx.coin(),i*160); }
};
(function(){ const st=document.createElement("style"); st.textContent=`
@keyframes coinFall{0%{transform:translateY(0) rotateY(0)}100%{transform:translateY(112vh) rotateY(1080deg)}}
.gates{position:fixed;inset:0;z-index:9500;pointer-events:none;display:none}
.gates.show{display:block;pointer-events:all}
.gate-door{position:absolute;top:0;bottom:0;width:50.5%;transition:transform .8s cubic-bezier(.6,.05,.3,1);box-shadow:0 0 60px rgba(0,0,0,.8)}
.gate-door.l{left:0;transform:translateX(-101%)}.gate-door.r{right:0;transform:translateX(101%)}
.gate-inner,.gate-inner svg{width:100%;height:100%;display:block}
.gates.closed .gate-door{transform:none}
.gates.open .gate-door{transition-duration:1s}
.gates.open .gate-door.l{transform:translateX(-101%)}.gates.open .gate-door.r{transform:translateX(101%)}
.gate-glow{position:absolute;inset:0;background:radial-gradient(60% 80% at 50% 50%,rgba(242,220,153,.9),transparent 70%);opacity:0;transition:opacity .9s}
.gates.open .gate-glow{opacity:1;transition:opacity .15s}
.gates.open .gate-glow{animation:glowOut 1s .1s forwards}
@keyframes glowOut{to{opacity:0}}
`; document.head.append(st); })();

/* ===================================================================
   IMAGE ASSET SYSTEM — procedural art first; AI images upgrade it.
   assets/<ID>.webp|png|jpg  (IDs from Persia_ChatGPT_Image_Prompts.md)
   =================================================================== */
RR.assets = { cache:{}, dropped:{} };
RR.assetUrl = function(id){
  if(RR.assets.dropped[id]) return Promise.resolve(RR.assets.dropped[id]);
  if(id in RR.assets.cache) return RR.assets.cache[id];
  const neg=RR.ss.get("assetNeg",{});
  if(neg[id]) return (RR.assets.cache[id]=Promise.resolve(null));
  const tryExt=(exts)=>new Promise(res=>{
    if(!exts.length) return res(null);
    const url=`assets/${id}.${exts[0]}`, im=new Image();
    im.onload=()=>res(url); im.onerror=()=>tryExt(exts.slice(1)).then(res); im.src=url;
  });
  return (RR.assets.cache[id]=tryExt(["webp","png","jpg"]).then(u=>{ if(!u){ const n=RR.ss.get("assetNeg",{}); n[id]=1; RR.ss.set("assetNeg",n);} return u; }));
};
/* Put an image into an element as an upgraded layer (fades in over procedural art). */
RR.slot = async function(el,id,{fit="cover",pos="center"}={}){
  const u=await RR.assetUrl(id); if(!u||!el.isConnected) return false;
  const img=RR.h("div",{class:"asset-img",style:{position:"absolute",inset:0,backgroundImage:`url("${u}")`,backgroundSize:fit,backgroundPosition:pos,opacity:0,transition:"opacity 1.2s ease",zIndex:0}});
  el.prepend(img); requestAnimationFrame(()=>img.style.opacity=1); el.dataset.hasAsset=id; return true;
};

/* ===================================================================
   TEAMS & CRESTS (procedural heraldic SVG; TEAM-0x images upgrade them)
   =================================================================== */
RR.TEAMS = [
  {id:"immortals", n:1, name:"The Immortals",        color:"#2E4A8A", dark:"#1B2D5E", sym:"Spear & shield", cry:"Ten thousand strong, one heartbeat!"},
  {id:"leopards",  n:2, name:"The Persian Leopards", color:"#C8892B", dark:"#8A5A14", sym:"Leopard",        cry:"Spotted, swift and unstoppable!"},
  {id:"simurgh",   n:3, name:"The Simurgh",          color:"#2F7A57", dark:"#14452F", sym:"Legendary bird", cry:"Rise on wings of wisdom!"},
  {id:"cheetahs",  n:4, name:"The Asiatic Cheetahs", color:"#B24A2A", dark:"#6E2A14", sym:"Cheetah",        cry:"Fastest on the Royal Road!"},
  {id:"griffins",  n:5, name:"The Golden Griffins",  color:"#6B3F8F", dark:"#3F2358", sym:"Griffin",        cry:"Guardians of the gold!"},
  {id:"lions",     n:6, name:"The Winged Lions",     color:"#A0222B", dark:"#5A1218", sym:"Winged lion",    cry:"Hear us roar across the plateau!"}
];
RR.team = id=>RR.TEAMS.find(t=>t.id===id)||RR.TEAMS[0];

const GOLD="#E9D18B", GOLD2="#937739";
const EMBLEMS = {
  immortals:()=>`
    <path d="M50 17 L58 38 L50 33 L42 38Z" fill="${GOLD}" stroke="${GOLD2}" stroke-width="1.2"/>
    <rect x="48.6" y="34" width="2.8" height="68" fill="${GOLD}"/>
    <circle cx="50" cy="70" r="22" fill="#1B1A21" stroke="${GOLD}" stroke-width="3"/>
    <g fill="${GOLD}">${Array.from({length:8},(_,i)=>`<ellipse cx="50" cy="58" rx="3.2" ry="8" transform="rotate(${i*45} 50 70)"/>`).join("")}</g>
    <circle cx="50" cy="70" r="4.5" fill="#4F4064" stroke="${GOLD}" stroke-width="1.5"/>`,
  leopards:()=>`
    <circle cx="31" cy="46" r="8" fill="${GOLD}"/><circle cx="69" cy="46" r="8" fill="${GOLD}"/>
    <circle cx="31" cy="46" r="4" fill="#42290C"/><circle cx="69" cy="46" r="4" fill="#42290C"/>
    <ellipse cx="50" cy="66" rx="23" ry="22" fill="${GOLD}"/>
    ${[[34,56],[40,52],[60,52],[66,56],[32,68],[68,68],[38,78],[62,78],[50,50]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2.4" fill="#42290C"/>`).join("")}
    <path d="M36 62 Q42 57 47 63 Q42 66 36 62Z M64 62 Q58 57 53 63 Q58 66 64 62Z" fill="#211812"/>
    <path d="M44 72 L56 72 L50 79Z" fill="#211812"/><path d="M50 79 V84 M50 84 Q44 88 40 84 M50 84 Q56 88 60 84" stroke="#211812" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  simurgh:()=>`
    ${[[20,44],[30,32],[50,27],[70,32],[80,44]].map(([x,y])=>`<path d="M50 84 Q${(x+50)/2} ${(y+84)/2+10} ${x} ${y}" stroke="${GOLD}" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="4.6" fill="#104F3A" stroke="${GOLD}" stroke-width="1.6"/>`).join("")}
    <ellipse cx="50" cy="80" rx="9" ry="15" fill="${GOLD}"/><circle cx="50" cy="62" r="7" fill="${GOLD}"/>
    <path d="M56 62 L66 65 L56 67Z" fill="#EAE0C5"/><circle cx="52.5" cy="60.5" r="1.6" fill="#211812"/>
    <path d="M47 55 Q45 47 40 45 M50 54 Q50 45 50 41 M53 55 Q56 47 61 46" stroke="${GOLD}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
  cheetahs:()=>`
    <circle cx="33" cy="47" r="6.5" fill="#CEB084"/><circle cx="67" cy="47" r="6.5" fill="#CEB084"/>
    <ellipse cx="50" cy="66" rx="20" ry="23" fill="#CEB084"/>
    ${[[38,52],[50,48],[62,52],[36,62],[64,62],[40,74],[60,74],[44,56],[56,56]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.9" fill="#442616"/>`).join("")}
    <path d="M38 62 Q42 58 46 63 Q42 65 38 62Z M62 62 Q58 58 54 63 Q58 65 62 62Z" fill="#211812"/>
    <path d="M40 64 Q38 76 43 86 M60 64 Q62 76 57 86" stroke="#211812" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M45 73 L55 73 L50 79Z" fill="#211812"/>`,
  griffins:()=>`
    <path d="M52 78 C26 82 12 62 10 36 C24 48 34 48 44 44 C40 54 46 66 52 78Z" fill="${GOLD}" stroke="${GOLD2}" stroke-width="1.5"/>
    <path d="M18 44 C26 52 34 54 42 52 M16 54 C24 62 32 62 40 60" stroke="${GOLD2}" stroke-width="1.6" fill="none"/>
    <circle cx="60" cy="52" r="15" fill="${GOLD}"/>
    <path d="M70 52 C82 50 88 56 84 66 C80 60 76 60 70 60Z" fill="#EAE0C5" stroke="${GOLD2}" stroke-width="1.2"/>
    <circle cx="62" cy="50" r="2.6" fill="#211812"/>
    <path d="M52 40 L46 28 M58 38 L56 25 M64 38 L68 27" stroke="${GOLD}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M50 66 C52 82 60 90 66 92 C66 82 70 72 74 66Z" fill="${GOLD}"/>`,
  lions:()=>`
    <path d="M6 58 C14 44 24 42 34 46 C28 52 26 58 30 66 C20 66 12 64 6 58Z" fill="${GOLD}" stroke="${GOLD2}" stroke-width="1.2"/>
    <path d="M94 58 C86 44 76 42 66 46 C72 52 74 58 70 66 C80 66 88 64 94 58Z" fill="${GOLD}" stroke="${GOLD2}" stroke-width="1.2"/>
    <g fill="#CEA34C">${Array.from({length:12},(_,i)=>`<circle cx="50" cy="38" r="8" transform="rotate(${i*30} 50 66)"/>`).join("")}</g>
    <circle cx="50" cy="66" r="19" fill="${GOLD}"/>
    <circle cx="43" cy="62" r="2.4" fill="#211812"/><circle cx="57" cy="62" r="2.4" fill="#211812"/>
    <path d="M45 70 L55 70 L50 77Z" fill="#61361D"/><path d="M50 77 V82 M50 82 Q44 86 40 82 M50 82 Q56 86 60 82" stroke="#61361D" stroke-width="2" fill="none" stroke-linecap="round"/>`
};
RR.crest = function(id,size=96,{glow=false}={}){
  const t=RR.team(id), uid="c"+Math.random().toString(36).slice(2,7);
  return `<svg class="crest" width="${size}" height="${Math.round(size*1.2)}" viewBox="0 0 100 120" role="img" aria-label="${RR.esc(t.name)} crest" xmlns="http://www.w3.org/2000/svg" ${glow?'style="filter:drop-shadow(0 0 12px '+t.color+')"':""}>
  <defs>
    <linearGradient id="${uid}f" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.color}"/><stop offset="1" stop-color="${t.dark}"/></linearGradient>
    <linearGradient id="${uid}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EAE0C5"/><stop offset=".5" stop-color="#BA9B58"/><stop offset="1" stop-color="#694E24"/></linearGradient>
    <clipPath id="${uid}c"><path d="M50 8 L88 19 V58 C88 85 68 104 50 112 C32 104 12 85 12 58 V19Z"/></clipPath>
  </defs>
  <path d="M50 3 L94 16 V58 C94 90 72 110 50 118 C28 110 6 90 6 58 V16Z" fill="url(#${uid}g)"/>
  <path d="M50 8 L88 19 V58 C88 85 68 104 50 112 C32 104 12 85 12 58 V19Z" fill="url(#${uid}f)"/>
  <g clip-path="url(#${uid}c)"><path d="M0 0H100V30Q50 40 0 30Z" fill="rgba(255,255,255,.12)"/>
  <path d="M-10 90 Q50 60 110 90 V130 H-10Z" fill="rgba(0,0,0,.18)"/></g>
  ${EMBLEMS[id]()}
  <path d="M50 8 L88 19 V58 C88 85 68 104 50 112 C32 104 12 85 12 58 V19Z" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="1.2"/>
  </svg>`;
};
RR.crestEl = (id,size=96,opts)=>{ const w=RR.h("span",{class:"crest-wrap",html:RR.crest(id,size,opts),style:{display:"inline-block",position:"relative",width:size+"px",height:Math.round(size*1.2)+"px"}});
  RR.assetUrl("TEAM-0"+RR.team(id).n).then(u=>{ if(u){ w.innerHTML=""; w.append(RR.h("img",{src:u,alt:RR.team(id).name,style:{width:"100%",height:"100%",objectFit:"contain"}})); } }); return w; };

/* ---------- Fate of the Road cards ---------- */
RR.FATE = [
  {id:"horses",  kind:"boon",    name:"Fresh Horses",       icon:"🐎", text:"Your team scores +10% on every question tonight.", fx:"Team points ×1.1 for this Showdown."},
  {id:"friendly",kind:"boon",    name:"Friendly Caravan",   icon:"🤝", text:"A kind caravan shares its water. Your first wrong answer still earns 250 points.", fx:"First wrong answer on the team scores 250."},
  {id:"oasis",   kind:"boon",    name:"Oasis",              icon:"🌴", text:"Cool water and shade! Your team gains 5 Darics.", fx:"+5 Darics (team)."},
  {id:"royalpass",kind:"boon",   name:"Royal Pass",         icon:"📜", text:"The king’s own pass. Double your team’s points on one question you choose.", fx:"Host taps ‘Use Royal Pass’ on one question: that team’s points ×2."},
  {id:"tailwind",kind:"boon",    name:"Tailwind",           icon:"🌬️", text:"The wind is at your back! Your team’s first correct answer scores +200.", fx:"First correct answer on the team: +200."},
  {id:"sandstorm",kind:"setback",name:"Sandstorm",          icon:"🌪️", text:"Sand in the eyes! Your team loses 5 Darics.", fx:"−5 Darics (team)."},
  {id:"wheel",   kind:"setback", name:"Broken Wheel",       icon:"🛞", text:"Crack! Your team’s slowest correct answer on question 1 scores 0.", fx:"Slowest correct answerer on Q1 scores 0."},
  {id:"bandits", kind:"setback", name:"Bandits!",           icon:"🥷", text:"Bandits steal 5 Darics from the leading team and give them to you… or, if you lead, they take them from you.", fx:"Leader −5 Darics; trailing drawer +5 (or −5 if drawer leads)."},
  {id:"river",   kind:"setback", name:"Flooded River",      icon:"🌊", text:"The ford is flooded! Your team has 3 seconds less on question 1.", fx:"Q1 timer −3 s for the team."},
  {id:"trick",   kind:"setback", name:"Shadow Courier’s Trick", icon:"🎭", text:"A silver mask flickers… a decoy message appears on your screens. Don’t be fooled! (It’s just a gag — your points are safe.)", fx:"Cosmetic decoy banner on the team’s devices for Q1. No points effect."}
];
/* weighted: leader (rank 0) → more setbacks; last place → more boons */
RR.drawFate = function(rank=null,total=1,exclude=[]){
  let pBoon=.5; if(rank!=null && total>1){ pBoon = rank===0 ? .3 : (rank===total-1 ? .75 : .5); }
  const boon = Math.random()<pBoon;
  const pool = RR.FATE.filter(f=>(f.kind==="boon")===boon && !exclude.includes(f.id));
  return RR.pick(pool.length?pool:RR.FATE);
};

/* ---------- confetti wrapper ---------- */
RR.confetti = function(opts={}){
  if(!window.confetti || !RR.motionOK()) return;
  const colors=["#BA9B58","#DAC797","#5E718C","#2A2A33","#95513B","#574A6B"];
  confetti(Object.assign({particleCount:120,spread:80,origin:{y:.6},colors,scalar:1.1},opts));
};
RR.fireworks = function(ms=2500){
  if(!window.confetti || !RR.motionOK()) return;
  const end=Date.now()+ms, colors=["#BA9B58","#DAC797","#5E718C","#ffffff","#B8863C"];
  (function f(){ confetti({particleCount:5,angle:RR.rand(55,125),spread:55,startVelocity:55,origin:{x:Math.random(),y:Math.random()*.4+.1},colors,ticks:90,gravity:1.1,scalar:1.2});
    if(Date.now()<end) setTimeout(f,170); })();
};

})();

/* ---------- medals (emoji until medal-*.webp exists) ---------- */
RR.medal = function(i){
  const e=["🥇","🥈","🥉"][i]||"", n=["gold","silver","bronze"][i];
  const s=RR.h("span",{class:"medal-ico"},e);
  if(n) RR.assetUrl("medal-"+n).then(u=>{ if(u&&s.isConnected!==false){ s.textContent=""; s.append(RR.h("img",{src:u,alt:["1st","2nd","3rd"][i],class:"medal-img"})); } });
  return s;
};
/* body flags once generated art exists */
document.addEventListener("DOMContentLoaded",()=>{
  RR.assetUrl("CORE-12").then(u=>{ if(u&&document.body.matches(".host,.player")){ document.body.classList.add("arena-art"); document.documentElement.style.setProperty("--arena",`url("${new URL(u,location.href).href}")`); } });
  RR.assetUrl("CORE-15").then(u=>{ if(u) document.body.classList.add("art-fate"); });
});

/* ---------- parallax photo layers (FX-01..06) over a hero; no-ops if files are missing ---------- */
RR.parallax=async function(wrap,hero,onLeave){
  /* Lightweight version: the photo hero is ONE layer that drifts gently with the mouse; the dust/ember overlays only fade
     (no filters, no big stacked layers — those made Chrome tear on Retina screens). */
  const ids=["FX-05","FX-06"], urls=await Promise.all(ids.map(RR.assetUrl));
  const L=RR.h("div",{class:"px-layers","aria-hidden":"true"});
  const mk=(cls,u)=>{ if(!u) return; L.append(RR.h("div",{class:"px "+cls,style:{backgroundImage:`url("${new URL(u,location.href).href}")`}})); };
  mk("px-dust",urls[0]); mk("px-embers",urls[1]);
  if(L.children.length){ wrap.append(L); wrap.classList.add("has-px"); }
  if(!RR.motionOK()) return;
  let img=null, tx=0,ty=0,cx=0,cy=0,raf=0,vis=true;
  const grab=()=>{ img=hero.querySelector(".asset-img"); if(img){ img.style.transform="scale(1.06)"; img.style.willChange="transform"; } return img; };
  const io=new IntersectionObserver(es=>{ vis=es[0].isIntersecting; if(vis) kick(); }); io.observe(wrap);
  function tick(){ raf=0; if(!vis) return; if(!img&&!grab()) return;
    cx+=(tx-cx)*.06; cy+=(ty-cy)*.06;
    img.style.transform=`translate3d(${(-cx*18).toFixed(1)}px,${(-cy*8).toFixed(1)}px,0) scale(1.06)`;
    if(Math.abs(tx-cx)>.001||Math.abs(ty-cy)>.001) raf=requestAnimationFrame(tick); }
  function kick(){ if(!raf&&vis) raf=requestAnimationFrame(tick); }
  const on=e=>{ tx=e.clientX/innerWidth-.5; ty=e.clientY/innerHeight-.5; kick(); };
  addEventListener("mousemove",on,{passive:true});
  onLeave&&onLeave(()=>{ removeEventListener("mousemove",on); io.disconnect(); cancelAnimationFrame(raf); vis=false; });
};

/* ---------- which week is 'live' for the teacher / Showdown host ---------- */
RR.weeks=()=>Object.keys(RR.WEEKS||{}).map(Number).sort((a,b)=>a-b);
RR.activeWeek=()=>{ const w=RR.weeks(), s=+RR.ls.get("activeWeek",0); return w.includes(s)?s:(w[w.length-1]||1); };
RR.setActiveWeek=n=>RR.ls.set("activeWeek",+n);

/* ---------- resting-camel garnish for waiting screens ---------- */
RR.restCamel=function(host,cls="rest-camel"){
  RR.assetUrl("CARAVAN-5").then(u=>{ if(!u||!host.isConnected) return; host.append(RR.h("img",{class:cls,src:u,alt:"","aria-hidden":"true"})); });
};

/* ---------- light ember sparks for the stage hero (one small canvas; set RR.EMBERS=false to turn off) ---------- */
RR.EMBERS=true;
RR.embers=function(wrap,onLeave){
  if(!RR.EMBERS||!RR.motionOK()) return;
  const cv=RR.h("canvas",{class:"ember-cv","aria-hidden":"true"}); wrap.append(cv);
  const ctx=cv.getContext("2d"); let W=0,H=0,raf=0,vis=true,last=0;
  const N=46, P=[];
  const mk=(init)=>({x:Math.random()*W,y:init?Math.random()*H:H+10,r:1.3+Math.random()*2.4,vy:14+Math.random()*30,sw:Math.random()*6.28,sa:8+Math.random()*18,a:.35+Math.random()*.6,hue:18+Math.random()*28});
  function size(){ W=cv.width=Math.max(300,wrap.clientWidth); H=cv.height=Math.max(200,wrap.clientHeight); }
  size(); for(let i=0;i<N;i++) P.push(mk(true));
  const ro=new ResizeObserver(size); ro.observe(wrap);
  const io=new IntersectionObserver(es=>{ vis=es[0].isIntersecting; if(vis&&!raf){ last=performance.now(); raf=requestAnimationFrame(tick);} }); io.observe(wrap);
  function tick(t){ raf=0; if(!vis||document.hidden) return; const dt=Math.min(.05,(t-last)/1000); last=t;
    ctx.clearRect(0,0,W,H);
    for(const p of P){ p.y-=p.vy*dt; p.sw+=dt*1.3; const x=p.x+Math.sin(p.sw)*p.sa; if(p.y<-10){ Object.assign(p,mk(false)); }
      const fade=Math.min(1,p.y/(H*.25),(H-p.y)/40+.2); ctx.globalAlpha=Math.max(0,p.a*fade);
      ctx.fillStyle=`hsl(${p.hue},95%,62%)`; ctx.shadowColor=`hsl(${p.hue},100%,55%)`; ctx.shadowBlur=9;
      ctx.beginPath(); ctx.arc(x,p.y,p.r,0,6.283); ctx.fill(); }
    raf=requestAnimationFrame(tick); }
  last=performance.now(); raf=requestAnimationFrame(tick);
  document.addEventListener("visibilitychange",()=>{ if(!document.hidden&&!raf){ last=performance.now(); raf=requestAnimationFrame(tick);} });
  onLeave&&onLeave(()=>{ vis=false; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); });
};

/* per-week Showdown backdrop */
RR.setBackdrop=function(w){ try{ document.documentElement.style.setProperty("--sdbg","url("+new URL("assets/SHOWDOWN-BG-"+(+w||1)+".webp",location.href).href+")"); }catch(e){} };

/* teacher-controlled: how many stages (weeks) are open to students on this device */
RR.openWeeks=()=>{ const n=+RR.ls.get("openWeeks",10); return n>=1&&n<=10?n:10; };
RR.setOpenWeeks=n=>RR.ls.set("openWeeks",+n);
