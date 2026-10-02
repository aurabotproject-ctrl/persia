/* ===================================================================
   WIDGETS — Monday (History): Dig Envelope · Timeline · Source Sorter · Persia↔Iran
   Each widget is a small self-contained interactive that the Mission page drops
   into the Discovery section. RR.widgets[name](lesson) → HTMLElement
   =================================================================== */
(function(){
"use strict";
const RR=window.RR, h=RR.h; RR.widgets=RR.widgets||{};
RR.widgetBox=function(title,sub,...kids){
  return h("section",{class:"widget foil"},
    h("header",{class:"w-head"},h("h4",{class:"gold-text"},title),sub&&h("p",{},sub)),
    h("div",{class:"w-body"},...kids));
};
const say=(who,text)=>h("div",{class:"say "+who},h("b",{},who==="gandom"?"Gandom:":"Shirin:")," ",text);

/* ---------------- 1. DIG ENVELOPE ---------------- */
const ARTEFACTS=[
 {id:"tablet",name:"Clay tablet fragment",
  svg:()=>{ let w=""; const r=RR.art.rng(5); for(let row=0;row<5;row++){ for(let i=0;i<9;i++){ const x=30+i*18+(r()*4), y=42+row*20+(r()*3), a=(r()-.5)*40; if(r()>.12) w+=`<path d="M${x} ${y} l9 -4 l-3 10z" transform="rotate(${a.toFixed(0)} ${x} ${y})" fill="#623E25" opacity=".85"/>`; } }
    return `<svg viewBox="0 0 220 170" role="img" aria-label="A broken clay tablet covered in wedge-shaped marks"><defs><linearGradient id="clay" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D7B58D"/><stop offset="1" stop-color="#b98450"/></linearGradient></defs><path d="M20 34 C34 14 92 10 150 14 C192 16 208 38 205 72 C203 112 192 142 150 148 C102 154 42 152 24 128 C10 100 8 56 20 34Z" fill="url(#clay)" stroke="#623E25" stroke-width="2.5"/>${w}</svg>`; },
  q:"Who might have made this?", opts:["Scribes pressing a reed into wet clay","Sailors carving driftwood","Farmers weaving cloth"], a:0,
  note:"This kind of wedge-shaped writing is called <b>cuneiform</b>. Scribes pressed a reed into wet clay. Elam and its neighbours used writing like this — so a tablet is a <b>written source</b>. We would still ask: who wrote it, and why?"},
 {id:"shard",name:"Painted pottery shard",
  svg:()=>`<svg viewBox="0 0 220 170" role="img" aria-label="A broken piece of painted pottery with bands and triangles"><defs><clipPath id="shardClip"><path d="M26 134 C14 92 36 40 90 22 C132 8 184 30 200 74 L152 84 C142 106 122 124 98 138 C70 154 38 156 26 134Z"/></clipPath><linearGradient id="potg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#CB8D68"/><stop offset="1" stop-color="#9C5F41"/></linearGradient></defs><path d="M26 134 C14 92 36 40 90 22 C132 8 184 30 200 74 L152 84 C142 106 122 124 98 138 C70 154 38 156 26 134Z" fill="url(#potg)" stroke="#53311C" stroke-width="2.5"/><g clip-path="url(#shardClip)" fill="none" stroke="#351E11" stroke-width="5"><path d="M10 70 C70 40 140 40 220 70"/><path d="M10 96 C70 66 140 66 220 96"/><path d="M10 122 C70 92 140 92 220 122"/><g fill="#351E11" stroke="none">${Array.from({length:8},(_,i)=>`<path d="M${30+i*22} ${78+Math.sin(i)*-10} l9 -18 l9 18z" opacity=".9"/>`).join("")}</g></g></svg>`,
  q:"What can pottery help archaeologists work out?", opts:["How old a site is, and how people lived","What the weather will be tomorrow","The names of the kings"], a:0,
  note:"Pottery is the most common thing archaeologists dig up. Styles change over time, so a shard helps date a site — it is a <b>material source</b>. Be careful though: a shard tells us about <i>things</i>, not what people <i>thought</i>."},
 {id:"map",name:"Copied map",
  svg:()=>`<svg viewBox="0 0 220 170" role="img" aria-label="A hand-copied map with mountains, a river and a cross marking a spot"><defs><linearGradient id="mapg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0E6CA"/><stop offset="1" stop-color="#D3BC8F"/></linearGradient></defs><path d="M14 22 L196 14 L204 90 L198 152 L24 158 L12 96Z" fill="url(#mapg)" stroke="#5C4020" stroke-width="2.5"/><g fill="#9C7B48" stroke="#5C4020" stroke-width="1.6"><path d="M32 70 l14 -26 l14 26z"/><path d="M54 76 l16 -30 l16 30z"/><path d="M148 64 l12 -22 l12 22z"/></g><path d="M20 118 C60 100 90 130 130 112 S180 96 198 110" fill="none" stroke="#5C7480" stroke-width="4"/><path d="M40 132 C70 120 100 90 150 100 S180 120 170 122" fill="none" stroke="#9D4040" stroke-width="2.4" stroke-dasharray="5 6"/><path d="M168 118 l14 14 M182 118 l-14 14" stroke="#9D4040" stroke-width="5" stroke-linecap="round"/></svg>`,
  q:"What should we ALWAYS ask about a map from long ago?", opts:["Who drew it, when and why?","Is the paper pretty?","How many colours does it have?"], a:0,
  note:"A map is a <b>representation</b> — someone chose what to show. A copied map might have errors, or show only what the mapmaker thought mattered. Ask: <b>who made it, when, why?</b>"}
];
RR.widgets.dig=function(){
  const root=h("div",{class:"dig"}); const grid=h("div",{class:"dig-grid"}); const detail=h("div",{class:"dig-detail",hidden:true});
  const done=new Set();
  ARTEFACTS.forEach(a=>{
    const card=h("button",{class:"artefact",type:"button","aria-label":"Examine: "+a.name},
      h("div",{class:"art-svg",html:a.svg()}),h("span",{class:"art-name"},a.name),h("span",{class:"art-tick"},"✓ examined"));
    card.addEventListener("click",()=>{ RR.sfx.pop(); open(a,card); });
    a.el=card; grid.append(card);
  });
  function open(a,card){
    RR.$$(".artefact",grid).forEach(c=>c.classList.remove("on")); card.classList.add("on");
    detail.hidden=false; detail.innerHTML="";
    const fb=h("div",{class:"fb",hidden:true}), note=h("div",{class:"note parchment",hidden:true,html:a.note});
    const opts=h("div",{class:"opts"},a.opts.map((o,i)=>h("button",{class:"btn ghost small",type:"button",onclick:e=>{
      RR.$$(".opts button",detail).forEach(b=>b.disabled=true);
      const ok=i===a.a; e.currentTarget.classList.add(ok?"right":"wrong");
      fb.hidden=false; fb.textContent=ok?"Sharp thinking, Courier!":"Not quite — but good guessing. Read the archaeologist’s note.";
      ok?RR.sfx.correct():RR.sfx.wrong(); note.hidden=false; done.add(a.id); a.el.classList.add("seen");
      if(done.size===ARTEFACTS.length){ RR.toast("All three artefacts examined! 🏺"); RR.sfx.coin(); }
    }},o)));
    detail.append(h("h5",{},a.name),h("p",{},"Look closely… ",h("b",{},a.q)),opts,fb,note);
  }
  root.append(h("p",{class:"w-hint"},"Tap an artefact from your Dig Envelope. Examine it, make a guess, then read what the archaeologist says."),grid,detail);
  return RR.widgetBox("The Dig Envelope","Three artefacts. Who made them? How can we be sure?",root);
};

/* ---------------- 2. TIMELINE ---------------- */
const TL=[
 {when:"about 4000–2700 BC",name:"Elam & Susa",icon:"scroll",color:"#95513B",text:"In the south-west, <b>Susa</b> grows into one of the world’s earliest cities. The Elamites build a kingdom with kings, craftspeople — and writing."},
 {when:"before 550 BC",name:"The Medes",icon:"compass",color:"#5E718C",text:"In the mountains of the north-west the <b>Medes</b> build their capital, <b>Ecbatana</b> (today’s Hamadan). Greek writers say it had seven coloured walls!"},
 {when:"about 559 BC",name:"The Persians rise",icon:"star",color:"#BA9B58",text:"From <b>Persis</b> in the southern Zagros, the Persians come into the spotlight. A young king called <b>Cyrus</b> is about to change the world… (Week 2!)"},
 {when:"today",name:"The digging goes on",icon:"book",color:"#574A6B",text:"Archaeologists keep digging at <b>Susa</b> and other sites, and reading cuneiform tablets. Our picture of the past keeps changing as new evidence comes to light."}
];
RR.widgets.timeline=function(){
  const root=h("div",{class:"timeline"}); const track=h("div",{class:"tl-track"}); const card=h("div",{class:"tl-card parchment",html:"<p>Tap a glowing seal on the road to travel through time.</p>"});
  TL.forEach((t,i)=>{
    const b=h("button",{class:"tl-node",type:"button",style:{"--c":t.color},"aria-label":t.name+", "+t.when},
      h("span",{class:"tl-seal",html:RR.art.icon(t.icon,34,"#EAE3CB",3)}),h("span",{class:"tl-when"},t.when),h("span",{class:"tl-name"},t.name));
    b.addEventListener("click",()=>{ RR.$$(".tl-node",root).forEach(n=>n.classList.remove("on")); b.classList.add("on"); RR.sfx.stamp();
      card.innerHTML=`<h5>${t.name} <small>· ${t.when}</small></h5><p>${t.text}</p>`; card.classList.remove("pop"); void card.offsetWidth; card.classList.add("pop"); });
    track.append(b);
  });
  root.append(track,card); setTimeout(()=>track.firstChild&&track.firstChild.click(),50);
  return RR.widgetBox("Timeline of the Plateau","From the first cities to the rise of Cyrus.",root);
};

/* ---------------- 3. SOURCE SORTER ---------------- */
const SRC=[
 {t:"A broken pottery bowl dug from the ground at Susa",a:"arch"},
 {t:"A clay tablet covered in wedge-shaped writing",a:"rec"},
 {t:"Herodotus describes the seven coloured walls of Ecbatana",a:"greek"},
 {t:"Genesis 10 names Elam as one of Shem’s sons",a:"bible"},
 {t:"A bronze arrowhead found in the earth",a:"arch"},
 {t:"A scribe’s list of grain stored in a temple, pressed into clay",a:"rec"}
];
const BINS=[{id:"arch",name:"Archaeology",sub:"objects from the ground"},{id:"rec",name:"Written record",sub:"tablets & inscriptions"},{id:"greek",name:"Greek historian",sub:"e.g. Herodotus"},{id:"bible",name:"The Bible",sub:"an ancient text"}];
RR.widgets.sources=function(){
  const items=RR.shuffle(SRC); let i=0,score=0;
  const root=h("div",{class:"sorter"}); const prog=h("div",{class:"sort-prog"}); const card=h("div",{class:"sort-card parchment"}); const bins=h("div",{class:"sort-bins"}); const fb=h("div",{class:"fb",role:"status"});
  BINS.forEach(b=>bins.append(h("button",{class:"btn ghost",type:"button","data-bin":b.id,onclick:()=>choose(b.id)},h("b",{},b.name),h("small",{},b.sub))));
  function show(){
    if(i>=items.length){ const bias=h("div",{class:"note parchment"},h("b",{},"Think about it: "),"Which of these might be ",h("i",{},"biased"),"? (Hint: Herodotus was Greek — he often wrote about his people’s rivals.)");
      card.innerHTML=`<h5>${score===items.length?"Perfect! 🏅":"Sorted!"}</h5><p>You got <b>${score}/${items.length}</b> right.</p>`; card.append(bias); bins.hidden=true; fb.textContent=""; prog.textContent=""; if(score>=items.length-1){ RR.sfx.fanfare(); RR.confetti({particleCount:70}); } return; }
    prog.textContent=`Source ${i+1} of ${items.length}`; card.innerHTML=`<p class="big">“${RR.esc(items[i].t)}”</p><p class="small">What kind of source is this?</p>`; fb.textContent="";
    RR.$$("button",bins).forEach(b=>{b.disabled=false;b.classList.remove("right","wrong")});
  }
  function choose(id){
    const ok=id===items[i].a; RR.$$("button",bins).forEach(b=>{ b.disabled=true; if(b.dataset.bin===items[i].a) b.classList.add("right"); else if(b.dataset.bin===id) b.classList.add("wrong"); });
    if(ok){ score++; RR.sfx.correct(); fb.textContent="Correct!"; } else { RR.sfx.wrong(); fb.textContent="Not this time — the green one is the right bin."; }
    i++; setTimeout(show,1300);
  }
  root.append(prog,card,bins,fb); show();
  return RR.widgetBox("Source Sorter","Four kinds of evidence. Which is which?",root);
};

/* ---------------- 4. PERSIA ↔ IRAN flip card ---------------- */
RR.widgets.persiairan=function(){
  const flip=h("button",{class:"flipcard",type:"button","aria-label":"Flip the card: Persia or Iran"},
    h("div",{class:"fc-inner"},
      h("div",{class:"fc-face fc-front parchment"},h("h3",{},"PERSIA"),h("p",{},"The name the ancient Greeks used, from ",h("b",{},"Persis"),", the home region of the Persians (also called Pars or Fars)."),h("small",{},"Tap to flip →")),
      h("div",{class:"fc-face fc-back stone"},h("h3",{},"IRAN"),h("p",{},"In ",h("b",{},"1935"),", the country asked the world to use ",h("b",{},"Iran"),". Both names matter. We treat both with respect, and remember that Iran today is home to many peoples."),h("small",{},"← Tap to flip back"))));
  flip.addEventListener("click",()=>{ flip.classList.toggle("flipped"); RR.sfx.flip(); });
  return RR.widgetBox("Persia or Iran?","One land, two names.",flip);
};
})();
