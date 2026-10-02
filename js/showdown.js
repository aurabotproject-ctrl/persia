/* ===================================================================
   SHOWDOWN — shared logic for host.html and play.html
   Pure scoring (RR.SD.compute) + answer shapes + paths + helpers.
   The host is the scoring authority; players only send {a, t}.
   =================================================================== */
(function(){
"use strict";
const RR=window.RR; const SD=RR.SD={};

/* Answer tiles: colour + shape + letter, so colour is never the only cue */
SD.SHAPES=[
  {k:"tri",c:"#A5333A",d:"#8C1F31",l:"A",svg:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 4 L37 35 H3Z" fill="currentColor"/></svg>'},
  {k:"dia",c:"#485971",d:"#2D3746",l:"B",svg:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 2 L38 20 L20 38 L2 20Z" fill="currentColor"/></svg>'},
  {k:"cir",c:"#A8843A",d:"#7B5D0F",l:"C",svg:'<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="currentColor"/></svg>'},
  {k:"sq", c:"#4A6E3A",d:"#1C4C0F",l:"D",svg:'<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="5" y="5" width="30" height="30" rx="3" fill="currentColor"/></svg>'}
];

SD.newPin=()=>String(Math.floor(100000+Math.random()*900000));
SD.gp=(pin,p="")=>`games/${pin}${p?"/"+p:""}`;
SD.lesson=week=>{ const W=RR.WEEKS[week]; return W&&W.days&&W.days.fri; };
SD.questions=week=>{ const L=SD.lesson(week); return (L&&L.questions)||[]; };
SD.limitFor=(week,q)=>{ const L=SD.lesson(week); const base=(L&&L.timeLimit)||20; const Q=SD.questions(week)[q]; return (Q&&Q.boss)?base+10:base; };
SD.isTeaching=(week,q)=>{ const L=SD.lesson(week); const Q=SD.questions(week)[q]; return !!((Q&&Q.teach)||(L&&(L.teachingMoments||[]).includes(q+1))); };

/* join URL for the QR code (always play.html next to wherever host.html is) */
SD.joinUrl=pin=>{ const u=new URL("play.html",location.href); u.search=""; u.hash=""; u.searchParams.set("pin",pin); return u.href; };

/* ---------- scoring ----------
   per question: base = 500 + 500 × (time left ÷ limit); boss ×2 (base only);
   streak bonus = +50 per consecutive correct answer before this one (max +250).
   Fate modifiers are applied here so every device would get the same result.
   inputs:
     qs      array of questions [{answer,boss}]
     limits  array of ms limits
     answers {qIndex:{pid:{a,t}}}   (t = ms after the question opened)
     players {pid:{team}}
     fate    {teamId: fateId}
     rp      {teamId: qIndex}  (Royal Pass use)
     upTo    last question index to include (inclusive)
   returns {players:{pid:{score,streak,correct,delta,last}}, teams:{id:{score,n}}, perQ:[…]}  */
SD.compute=function(qs,limits,answers,players,fate={},rp={},upTo=qs.length-1){
  const pids=Object.keys(players); const P={}; pids.forEach(id=>P[id]={score:0,streak:0,correct:0,delta:0,last:null});
  const tFlag={}; const perQ=[];
  for(let q=0;q<=upTo&&q<qs.length;q++){
    const Q=qs[q], ans=answers[q]||{}; const lim=limits[q];
    // Q1 'wheel' – find slowest correct in each team that holds Broken Wheel
    const slowest={};
    if(q===0){ pids.forEach(id=>{ const t=players[id].team; if(fate[t]!=="wheel") return; const a=ans[id]; if(a && a.a===Q.answer){ if(!slowest[t]||a.t>slowest[t].t) slowest[t]={id,t:a.t}; } }); }
    const order=pids.slice().sort((x,y)=>((ans[x]?ans[x].t:1e9)-(ans[y]?ans[y].t:1e9)));
    const dist=[0,0,0,0]; let nCorrect=0, nAns=0;
    order.forEach(id=>{
      const pl=players[id], p=P[id], a=ans[id], team=pl.team, f=fate[team]; tFlag[team]=tFlag[team]||{};
      let eff=lim; if(q===0&&f==="river") eff=lim-3000;
      let valid=!!a && typeof a.t==="number" && a.t<=eff+500 && a.a>=0 && a.a<4;
      let pts=0, ok=false;
      if(valid){ dist[a.a]++; nAns++; ok=a.a===Q.answer; }
      if(ok){
        nCorrect++;
        const left=RR.clamp(1-Math.max(0,a.t)/eff,0,1);
        const base=Math.round(500+500*left);
        const bonus=Math.min(250,50*p.streak);
        pts=(Q.boss?base*2:base)+bonus;
        if(f==="horses") pts=Math.round(pts*1.1);
        if(f==="tailwind" && !tFlag[team].tail){ tFlag[team].tail=true; pts+=200; }
        if(rp[team]===q) pts*=2;
        if(q===0 && slowest[team] && slowest[team].id===id) pts=0;
        p.streak++; p.correct++; p.last=true;
      } else {
        p.streak=0; p.last=valid?false:null;
        if(valid && f==="friendly" && !tFlag[team].fr){ tFlag[team].fr=true; pts=250; }
      }
      p.delta=pts; p.score+=pts;
    });
    perQ.push({dist,nCorrect,nAns});
  }
  const T={}; pids.forEach(id=>{ const t=players[id].team; T[t]=T[t]||{sum:0,n:0}; T[t].sum+=P[id].score; T[t].n++; });
  const teams={}; Object.keys(T).forEach(t=>teams[t]={score:T[t].n?T[t].sum/T[t].n:0,n:T[t].n});
  return {players:P,teams,perQ};
};
/* offline (teacher-led) team scoring helper */
SD.flatPoints=(q,Q)=> Q&&Q.boss?200:100;

SD.rankTeams=teams=>Object.entries(teams).map(([id,t])=>({id,score:t.score,n:t.n||0})).sort((a,b)=>b.score-a.score);
SD.rankPlayers=(players,scores)=>Object.entries(players).map(([id,p])=>({id,name:p.name,team:p.team,score:(scores[id]&&scores[id].score)||0})).sort((a,b)=>b.score-a.score);

/* Darics awarded for a finished Showdown */
SD.DARICS_TEAM=[10,6,3];
SD.DARICS_PLAYER=[5,3,2];

/* ---------- tiny helpers ---------- */
SD.cleanName=s=>String(s||"").replace(/[<>]/g,"").replace(/\s+/g," ").trim().slice(0,16);
SD.pid=()=>"p"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
})();
