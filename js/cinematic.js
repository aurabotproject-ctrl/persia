/* ===================================================================
   OPENING CINEMATIC (~28 s, skippable): the Seal of the Kings shatters
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, h=RR.h, A=RR.art;
const LINES=[
 "Long ago, the greatest road in the world ran from the sea of the west to the palaces of the east.",
 "Kings sent messages along it faster than any horse could gallop alone.",
 "But one night, a sandstorm shattered the Seal of the Kings — the seal that could open any gate and end any war —",
 "…into ten fragments, scattered across the empire.",
 "A call has gone out: whoever gathers all ten and carries them to the Gate of All Nations will be crowned Master Couriers of the Royal Road.",
 "Your caravan has been chosen. The race begins at dawn."
];
RR.cinematic = {
  async play(){
    const geo=A.sealGeometry(120,7);
    const el=h("div",{id:"cine",class:"cine",role:"dialog","aria-label":"Opening story"});
    const frags=geo.frags.map((f,i)=>`<g class="frag" data-i="${i}"><path d="${A.sealFragmentPath(f)}" fill="url(#sealGold)" stroke="#39290E" stroke-width="2" stroke-linejoin="round"/></g>`).join("");
    const cracks=geo.cuts.map(c=>`<path class="crack" d="M${c.pts.map(p=>p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" L")}" fill="none" stroke="#EAE0C5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1"/>`).join("");
    el.innerHTML=`
      <canvas class="cine-stars"></canvas>
      <div class="cine-glow"></div>
      <svg class="cine-seal" viewBox="-260 -260 520 520" aria-hidden="true">
        <defs>${A.sealDefs("seal").replace(/id="sealGold"/,'id="sealGold"')}<filter id="cglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <clipPath id="sealClip"><circle r="120"/></clipPath></defs>
        <circle r="190" fill="url(#sealGlow)" class="cine-halo"/>
        <g class="whole" filter="url(#cglow)"><circle r="120" fill="url(#sealGold)" stroke="#39290E" stroke-width="3"/><g clip-path="url(#sealClip)">${A.sealEngraving(120)}</g></g>
        <g class="cracks" clip-path="url(#sealClip)">${cracks}</g>
        <g class="frags" filter="url(#cglow)" style="display:none">${frags}</g>
        <g class="stars10"></g>
      </svg>
      <svg class="cine-dunes" viewBox="0 0 1600 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <path d="M0 300 V190 C200 150 380 210 600 180 S1000 120 1300 170 S1500 160 1600 150 V300Z" fill="#120E17"/>
        <path d="M0 300 V240 C260 210 520 250 800 230 S1280 200 1600 235 V300Z" fill="#0A080D"/>
        <g class="cine-car">${[0,1,2,3].map(i=>`<g transform="translate(${-i*86} 0)">${`<g transform="translate(0 -64) scale(.42)">${A.camel("#060508")}</g>`}</g>`).join("")}</g>
      </svg>
      <div class="cine-text" aria-live="polite"></div>
      <div class="cine-title" hidden><h1 class="gold-text">The Royal Road Race</h1><p>Quest for the Seal of the Kings</p><button class="btn" id="cineGo" type="button">Begin the Race</button></div>
      <div class="cine-ctl"><button class="btn ghost small" id="cineSkip" type="button">Skip ▸▸</button><button class="btn ghost small" id="cineSnd" type="button" aria-pressed="${RR.settings.sound}">${RR.settings.sound?"🔊 Sound on":"🔇 Sound off"}</button></div>`;
    document.body.append(el); document.body.classList.add("noscroll");
    const fx=RR.particles(el.querySelector(".cine-stars"),"stars",{maxY:.7});
    let skipped=false, done; const finished=new Promise(r=>done=r);
    const $=s=>el.querySelector(s);
    const wait=async ms=>{ const t0=performance.now(); while(!skipped && performance.now()-t0<ms) await RR.sleep(60); };
    const finish=()=>{ fx.stop(); RR.sfx.wind(false); el.classList.add("out"); setTimeout(()=>{ el.remove(); document.body.classList.remove("noscroll"); done(); },700); RR.ls.set("seenIntro",true); };
    $("#cineSkip").onclick=()=>{ skipped=true; };
    $("#cineSnd").onclick=e=>{ RR.setSetting("sound",!RR.settings.sound); e.currentTarget.textContent=RR.settings.sound?"🔊 Sound on":"🔇 Sound off"; if(RR.settings.sound) RR.sfx.wind(true); };
    $("#cineGo").onclick=()=>{ RR.sfx.stamp(); finish(); };
    if(RR.settings.sound) RR.sfx.wind(true);

    const say=async(txt,ms)=>{ const box=$(".cine-text"); box.innerHTML=""; const words=txt.split(" "); const p=h("p",{},words.map((w,i)=>h("span",{style:{animationDelay:(i*.09)+"s"}},w+" "))); box.append(p); box.classList.add("on"); await wait(ms); box.classList.remove("on"); await wait(500); };

    if(!RR.motionOK()){ // reduced motion: simple static story
      $(".cine-seal").style.opacity=.9; $(".cine-text").innerHTML="<p>"+LINES[0]+" "+LINES[1]+"</p>"; $(".cine-text").classList.add("on");
      await wait(600); $(".cine-title").hidden=false; $(".cine-text").classList.remove("on"); return finished;
    }
    (async()=>{
      await wait(900);
      await say(LINES[0],4600); if(skipped) return end();
      $(".cine-seal").classList.add("show"); $(".cine-halo").classList.add("pulse");
      await say(LINES[1],3400); if(skipped) return end();
      await say(LINES[2],3200); if(skipped) return end();
      // crack
      RR.sfx.drum(.6); $(".cine-seal").classList.add("shake");
      RR.$$(".crack",el).forEach((c,i)=>{ c.style.animationDelay=(i*.07)+"s"; c.classList.add("go"); });
      await wait(1300); if(skipped) return end();
      // shatter
      $(".whole").style.display="none"; $(".cracks").style.display="none"; $(".frags").style.display="";
      RR.sfx.whoosh(); el.classList.add("flash");
      const targets=Array.from({length:10},(_,i)=>{ const a=i/10*Math.PI*2+.3; const r=170+(i%3)*45; return [Math.cos(a)*r*1.5,Math.sin(a)*r*.9]; });
      RR.$$(".frag",el).forEach((f,i)=>{ const c=geo.frags[i].centroid; f.style.setProperty("--tx",targets[i][0]+"px"); f.style.setProperty("--ty",targets[i][1]+"px"); f.style.setProperty("--r",(i%2?1:-1)*(120+i*20)+"deg"); f.style.animationDelay=(i*.05)+"s"; f.classList.add("fly"); });
      await say(LINES[3],3400); if(skipped) return end();
      await say(LINES[4],5600); if(skipped) return end();
      await say(LINES[5],3400); end();
    })();
    function end(){ $(".cine-text").classList.remove("on"); $(".cine-seal").classList.add("final"); RR.sfx.fanfare(); el.classList.add("titled"); RR.slot(el,"CORE-01",{fit:"cover",pos:"center"}); $(".cine-title").hidden=false; RR.confetti&&RR.confetti({particleCount:60,spread:100,origin:{y:.35}}); }
    return finished;
  }
};
})();
