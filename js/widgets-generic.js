/* ===================================================================
   GENERIC DATA-DRIVEN WIDGETS — sort / match / order / reveal
   A lesson's widgets[] may hold these as plain objects:
     {type:"sort",title,prompt,bins:[..],items:[{t,bin}]}
     {type:"match",title,prompt,pairs:[[term,definition]]}
     {type:"order",title,prompt,items:[..correct order..]}
     {type:"reveal",title,prompt,cards:[{front,back}]}
   Also: finalises Friday teaching-moment lists for Weeks 2+.
   =================================================================== */
(function(){
const RR=window.RR, h=RR.h; RR.widgets=RR.widgets||{}; RR.gw={};
const done=(ok)=>{ if(ok){ RR.sfx.fanfare&&RR.sfx.fanfare(); RR.confetti&&RR.confetti({particleCount:60}); } };

/* ---- sort ---- */
RR.gw.sort=function(d){
  const items=RR.shuffle(d.items); let i=0,score=0;
  const root=h("div",{class:"sorter"}), prog=h("div",{class:"sort-prog"}), card=h("div",{class:"sort-card parchment"}), bins=h("div",{class:"sort-bins"}), fb=h("div",{class:"fb",role:"status"});
  d.bins.forEach((b,k)=>bins.append(h("button",{class:"btn ghost",type:"button","data-bin":k,onclick:()=>choose(k)},h("b",{},b))));
  function show(){
    if(i>=items.length){ card.innerHTML=`<h5>${score===items.length?"Perfect! 🏅":"Sorted!"}</h5><p>You got <b>${score}/${items.length}</b> right.</p>`; bins.hidden=true; fb.textContent=""; prog.textContent=""; done(score>=items.length-1); return; }
    prog.textContent=`Card ${i+1} of ${items.length}`; card.innerHTML=`<p class="big">${RR.esc(items[i].t)}</p>`; fb.textContent="";
    RR.$$("button",bins).forEach(b=>{b.disabled=false;b.classList.remove("right","wrong")});
  }
  function choose(k){
    const ok=k===items[i].bin; RR.$$("button",bins).forEach(b=>{ b.disabled=true; if(+b.dataset.bin===items[i].bin) b.classList.add("right"); else if(+b.dataset.bin===k) b.classList.add("wrong"); });
    if(ok){ score++; RR.sfx.correct(); fb.textContent="Correct!"; } else { RR.sfx.wrong(); fb.textContent="Not this time — the green button is the right bin."; }
    i++; setTimeout(show,1300);
  }
  root.append(d.prompt?h("p",{class:"w-hint"},d.prompt):"",prog,card,bins,fb); show();
  return RR.widgetBox(d.title||"Sort it out","",root);
};

/* ---- match ---- */
RR.gw.match=function(d){
  const root=h("div",{class:"vocab"}); let pick=null,matched=0; const P=d.pairs;
  const words=h("div",{class:"v-col"},RR.shuffle(P).map(([w])=>h("button",{class:"v-card",type:"button","data-w":w,onclick:e=>sel(e.currentTarget,"w")},w)));
  const defs=h("div",{class:"v-col"},RR.shuffle(P).map(([w,t])=>h("button",{class:"v-card def",type:"button","data-w":w,onclick:e=>sel(e.currentTarget,"d")},t)));
  const fb=h("div",{class:"fb",role:"status"});
  function sel(el,side){ if(el.classList.contains("done")) return; if(pick&&pick.side===side){ pick.el.classList.remove("on"); pick=null; }
    if(!pick){ pick={el,side}; el.classList.add("on"); RR.sfx.tick(); return; }
    const ok=pick.el.dataset.w===el.dataset.w; const a=pick.el,b=el; pick=null; a.classList.remove("on");
    if(ok){ a.classList.add("done"); b.classList.add("done"); matched++; RR.sfx.correct(); fb.textContent=matched===P.length?"All matched! 🎉":"Matched!"; if(matched===P.length) done(true); }
    else { a.classList.add("bad"); b.classList.add("bad"); RR.sfx.wrong(); fb.textContent="Not a pair — try again."; setTimeout(()=>{a.classList.remove("bad");b.classList.remove("bad");},600); } }
  root.append(h("p",{class:"w-hint"},d.prompt||"Tap a word, then tap its match."),h("div",{class:"v-grid"},words,defs),fb);
  return RR.widgetBox(d.title||"Match them up","",root);
};

/* ---- order ---- */
RR.gw.order=function(d){
  const n=d.items.length; let order=RR.shuffle(d.items.map((t,i)=>({t,i}))); if(order.every((o,k)=>o.i===k)) order.reverse();
  const root=h("div",{class:"orderw"}), list=h("ol",{class:"ord-list"}), fb=h("div",{class:"fb",role:"status"});
  function draw(){
    list.innerHTML="";
    order.forEach((o,k)=>list.append(h("li",{class:"ord-item parchment"},h("span",{class:"ord-t"},o.t),
      h("span",{class:"ord-btns"},
        h("button",{class:"btn ghost small",type:"button","aria-label":"Move up",disabled:k===0||undefined,onclick:()=>mv(k,-1)},"▲"),
        h("button",{class:"btn ghost small",type:"button","aria-label":"Move down",disabled:k===n-1||undefined,onclick:()=>mv(k,1)},"▼")))));
  }
  function mv(k,dx){ const j=k+dx; [order[k],order[j]]=[order[j],order[k]]; RR.sfx.tick(); draw(); fb.textContent=""; }
  const check=h("button",{class:"btn small",type:"button",onclick:()=>{
    const right=order.filter((o,k)=>o.i===k).length;
    if(right===n){ fb.innerHTML="<b>Perfect order! 🏅</b>"; RR.sfx.correct(); done(true); }
    else { fb.textContent=right+" of "+n+" in the right place — keep going!"; RR.sfx.wrong(); }
    RR.$$("li",list).forEach((li,k)=>li.classList.toggle("good",order[k].i===k)); }},"Check my order");
  draw(); root.append(h("p",{class:"w-hint"},d.prompt||"Use the arrows to put these in order."),list,h("div",{class:"btn-row"},check),fb);
  return RR.widgetBox(d.title||"Put it in order","",root);
};

/* ---- reveal (flip cards) ---- */
RR.gw.reveal=function(d){
  const row=h("div",{class:"gw-reveal"},d.cards.map(c=>{
    const b=h("button",{class:"flipcard gw-card",type:"button","aria-label":"Flip card: "+c.front},h("div",{class:"fc-inner"},
      h("div",{class:"fc-face fc-front parchment"},h("p",{class:"big"},c.front),h("small",{},"Tap to flip →")),
      h("div",{class:"fc-face fc-back stone"},h("p",{html:c.back}),h("small",{},"← Tap to flip back"))));
    b.addEventListener("click",()=>{ b.classList.toggle("flipped"); RR.sfx.flip&&RR.sfx.flip(); }); return b; }));
  return RR.widgetBox(d.title||"Flip to reveal","",d.prompt?h("p",{class:"w-hint"},d.prompt):"",row);
};

/* one entry point used by the mission page */
RR.buildWidget=function(w,L){
  if(typeof w==="string") return RR.widgets[w]?RR.widgets[w](L):null;
  if(w&&RR.gw[w.type]) return RR.gw[w.type](w);
  return null;
};

})();
