/* Runs after all week files: Friday teaching moments = questions flagged teach:true (1-based) */
(function(){
const RR=window.RR;
Object.keys(RR.WEEKS||{}).forEach(n=>{ if(+n<2) return; const f=RR.WEEKS[n].days&&RR.WEEKS[n].days.fri; if(!f||!f.questions) return;
  f.teachingMoments=f.questions.map((q,i)=>q.teach?i+1:0).filter(Boolean); });

/* Re-balance correct-answer positions: deterministic shuffle of each question's options (seeded, so every device
   sees the same order). Skips questions whose options refer to each other ("all of the above", "both", "none"). */
(function(){
  const mul=a=>()=>{ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; };
  Object.keys(RR.WEEKS||{}).forEach(n=>{ const f=RR.WEEKS[n].days&&RR.WEEKS[n].days.fri; if(!f||!f.questions||f._shuffled) return; f._shuffled=true;
    f.questions.forEach((q,qi)=>{ if(q.options.some(o=>/above|both|none of|all of|neither/i.test(o))) return;
      const rnd=mul((+n)*1000+qi*37+11); const idx=q.options.map((_,i)=>i);
      for(let i=idx.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [idx[i],idx[j]]=[idx[j],idx[i]]; }
      const opts=idx.map(i=>q.options[i]); q.answer=idx.indexOf(q.answer); q.options=opts; }); });
})();
})();
