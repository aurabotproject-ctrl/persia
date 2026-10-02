/* ===================================================================
   LESSON SLIDES — authored layer for Stage 2 (Week 2).
   Pulls story, vocab, discovery cards, Council Fire and Paths from
   week02.js and adds retrieval, checks, talk prompts, situations,
   summaries and teasers. NZ English. Scripture paraphrased.
   =================================================================== */
(function(){
const RR=window.RR; RR.SLIDES=RR.SLIDES||{};
RR.SLIDES[2]={
 mon:{
  hook:["Whisper-down-the-line: pass the story of baby Cyrus along your Caravan.","Compare the first and last version — what changed?","Which parts of a story like this could be checked? Which could not?"],
  prior:["Who were the three peoples of the plateau? (Week 1)","Why can’t we trust every old story just because it is old?"],
  checks:[
   {q:"Put in order: Cyrus enters Babylon · Cyrus takes over the Median kingdom · Cyrus defeats Croesus of Lydia.",a:"About 550 BC the Medes · about 546 BC Lydia · 539 BC Babylon."},
   {q:"What is the difference between a legend and evidence?",a:"A legend is a story told for a long time that cannot be fully checked. Evidence is something we can examine — like an object, a record or a text."},
   {q:"What is the Cyrus Cylinder, and who wrote it?",a:"A clay barrel covered in Babylonian cuneiform, found at Babylon and now in the British Museum. It was written for Cyrus, so it shows how he wanted to be seen."},
   {q:"Why should we be careful about calling the Cylinder a modern ‘human rights charter’?",a:"It is an ancient royal inscription with its own purpose. Scholars disagree about how to read it, so it is better to describe what it actually says."},
   {q:"Name two sources besides the Cylinder that tell us about Cyrus.",a:"Greek writers (Herodotus, Xenophon), Babylonian records and the Bible (Isaiah and Ezra)."}],
  talk:[
   {q:"If you were a Babylonian, would you have trusted a conqueror who said he came in peace? What might make you trust — or doubt — him?",starters:["I would trust him if …","I would doubt him because …","I would watch to see whether …"]},
   {q:"Is a king ‘great’ because he wins battles, or because he treats people well? Can he be both?",starters:["A king is great if …","Winning battles shows …, but …","Fairness matters because …"]}],
  say:"Aim for balanced voices. Let students argue ‘great’ and ‘not great’, and keep asking ‘what is your evidence?’. Invite — never expect — Iranian-NZ students to share, and keep the Cylinder described rather than praised.",
  situations:[
   {title:"The Boastful Scribe",story:"You find a clay tablet in which a king says he is kind, fair and loved by everyone. It was written by the king’s own scribes. Your caravan has to write the history. What do you do?",
    options:["Copy it — it is an ancient source, so it must be true.","Throw it out — kings always boast.","Use it, but say who wrote it, and look for other sources to compare."],best:2,
    think:"C. The tablet is real evidence of how the king wanted to be seen. A good historian uses it carefully and keeps checking with other voices."},
   {title:"The Exciting Legend",story:"Your report needs a gripping start. A teammate says, “Let’s say baby Cyrus was raised by a shepherd — that’s what Herodotus wrote. It is a fact!”",
    options:["Write it as a fact — it makes a great story.","Leave it out completely.","Include it, labelled: “A legend told by Herodotus says … but historians cannot confirm it.”"],best:2,
    think:"C. Telling an exciting story is fine when we are honest about what is legend and what is evidence. Truthful words build trust."}],
  sum:["Cyrus rose from king of Anshan (559 BC) to ruler of the Medes (about 550), Lydia (about 546) and Babylon (539 BC).","Stories (legends) and evidence are different — good historians sort them carefully.","Each source — the Cylinder, Greek writers, Babylon and the Bible — has its own voice and purpose."],
  exit:"Finish the sentence on your whiteboard:  “Cyrus was remembered as fair because ______ (evidence).”",
  next:{title:"Tuesday · Geography",text:"Half the map is torn, but the royal cities are still out there. Tomorrow we visit Pasargadae, Ecbatana and Babylon — and ask why a king would build a capital right there."}
 },
 tue:{
  hook:["Pin it! Where would YOU put the capital of a brand-new country?","Give two reasons for your choice.","Compare with Wellington — what do you notice?"],
  retrieval:[{q:"In what year did Cyrus enter Babylon?",a:"539 BC."},{q:"What is the difference between a legend and evidence?",a:"A legend cannot be fully checked; evidence is something we can examine or compare."},{q:"Name one source about Cyrus and one thing to be careful about with it.",a:"The Cylinder — it was written for Cyrus. Herodotus — a Greek writer, not neutral."}],
  checks:[
   {q:"What are the three functions of a city?",a:"Government, trade and worship (temples and shrines)."},
   {q:"What is the difference between a city’s site and its situation?",a:"Site = the exact spot. Situation = where it lies in relation to roads, rivers and neighbours."},
   {q:"Why was Ecbatana a good summer capital?",a:"It lay high on the slopes of Mount Alvand, so the air was cooler, and it stood on a major route across the Zagros."},
   {q:"What helped Babylon to grow so big?",a:"Its site on the Euphrates — fertile land, canals and river transport — plus its position on trade routes."},
   {q:"Where does the word ‘paradise’ come from?",a:"An old Persian word for a walled garden."}],
  talk:[
   {q:"Would you rather live in a capital city or a small village? Use ideas about functions, jobs and space.",starters:["In a capital there is … but …","In a village you can … but …","I prefer … because …"]},
   {q:"Why would a king put water channels and shade in a garden in a dry land?",starters:["Water helps because …","Shade helps because …","A garden also shows …"]}],
  say:"Push for trade-offs: no site is perfect. Keep modern Iran, Iraq and the Middle East neutral — the ruins are the remains of real communities.",
  situations:[
   {title:"Choose the Capital",story:"Site A: a hot, flat plain beside a river — rich farms, but a long way from other lands. Site B: a high cool valley on the main trade route, with a spring. Site C: a mountain top with no water. You must pick a capital for your caravan’s kingdom.",
    options:["Site A — rivers mean food.","Site B — it answers water, routes and comfort.","Site C — nobody can attack us."],best:1,
    think:"B. It has water and a route for trade and travel, and the air is cooler. A and C each solve one problem but create another."},
   {title:"The Shared Garden",story:"Your school is planning a garden. One group wants a vegetable patch. Another wants flowers and a seat in the shade. A third wants to leave it as a wild patch for insects and birds.",
    options:["The group with the most people decides.","Combine the ideas: a few vegetables, flowers, shade, and a wild corner.","Cancel the garden."],best:1,
    think:"B. Good planners listen, weigh needs and make a place for everyone — people and creatures. That is a little like how the Bible describes God’s first garden."}],
  sum:["A capital is the centre of government; cities also serve trade and worship.","Site is the exact spot; situation is the place in relation to others.","Persian royal gardens used water and shade, and gave us the word ‘paradise’."],
  exit:"Finish the sentence:  “A good site for a capital has ______ because ______.”",
  next:{title:"Wednesday · Science",text:"Before the siege of Sardis, the Lydian horses took one sniff of Cyrus’s camels… and wanted nothing to do with them! Tomorrow we explore the grassland community — and run a fair test."}
 },
 wed:{
  hook:["Sniff-test mystery bags: guess the smell without peeking.","Why might a horse be frightened by camels?","What do animals’ senses tell us about how they live?"],
  retrieval:[{q:"Name the three functions of a city.",a:"Government, trade, worship."},{q:"What is the difference between site and situation?",a:"Site = exact spot; situation = place in relation to others."},{q:"Why did Persian gardens have water channels?",a:"Water brought life, coolness and food in a dry land."}],
  checks:[
   {q:"Sort into producer, consumer or decomposer: grass · onager · fungus · cheetah.",a:"Grass — producer. Onager and cheetah — consumers. Fungus — decomposer."},
   {q:"Complete the chain: grass → ______ → ______.",a:"Grass → onager (or gazelle) → Asiatic cheetah."},
   {q:"Name two ways animals survive on open ground.",a:"Camouflage (blend in) and speed (run away or catch prey)."},
   {q:"In a fair test, what do you change, measure and keep the same?",a:"Change ONE thing, measure ONE thing, keep everything else the same."},
   {q:"Why is it a problem if we change colour AND background in the moth test?",a:"We would not know which change caused the result."}],
  talk:[
   {q:"Why does God care about animals that people cannot tame or use?",starters:["I think God cares because …","It shows that …","Job 39 reminds me that …"]},
   {q:"How could we make our fair test even fairer next time?",starters:["We could repeat it …","We could keep … the same.","A better measurement would be …"]}],
  say:"Celebrate sharp observation. Keep predator–prey games safe — no chasing or touching. Present rare animals as a reason to care, not to panic.",
  situations:[
   {title:"The Unfair Test",story:"Your team is testing which colour of paper moth is hardest to find. One group tests red moths on the grass and blue moths on the mat, and says, “Red won!”",
    options:["Agree — they have a result.","Ask them to test every colour on the same background, with the same time and number.","Decide the result does not matter."],best:1,
    think:"B. A fair test changes one thing only. Different backgrounds mean we cannot tell why red won. Honest science checks its own method."},
   {title:"The Tempting Peek",story:"Your test is going badly: your prediction is wrong. A teammate says, “Let’s just change the numbers in the table so we look right.”",
    options:["Change the numbers quietly.","Record the true results and explain why the prediction was wrong.","Throw away the table."],best:1,
    think:"B. Real results matter more than a right guess. Scientists learn from wrong predictions — and telling the truth builds trust."}],
  sum:["Grassland communities have producers (grass), consumers (onager, gazelle, cheetah, vultures) and decomposers (fungi).","Open-ground animals survive by camouflage and speed.","A fair test changes one thing, measures one thing and keeps the rest the same."],
  exit:"Finish the sentence:  “In my fair test I changed ______ and kept ______ the same.”",
  next:{title:"Thursday · Art",text:"A thumbprint on our torn map held a tiny wedge-shaped mark. Tomorrow we press our own words into clay — and roll a seal that says who we are."}
 },
 thu:{
  hook:["Hold a clay tablet — what is it made from? How was it made?","Press your initials in wedge marks.","Why would a king choose clay for his words?"],
  retrieval:[{q:"Name a producer, a consumer and a decomposer of the grassland.",a:"Grass; onager, gazelle or cheetah; fungi or bacteria."},{q:"What are two adaptations for life on open ground?",a:"Camouflage and speed."},{q:"What do we change in a fair test?",a:"Only one thing."}],
  checks:[
   {q:"What does ‘cuneiform’ mean, and how was it written?",a:"‘Wedge-shaped’. A scribe pressed a cut reed into wet clay."},
   {q:"What is a cylinder seal used for?",a:"Rolled over wet clay to leave a repeating print that showed identity or ownership."},
   {q:"Why do we still have so many clay tablets today?",a:"Clay lasts: once dried or baked, it survives thousands of years, unlike cloth or leather."},
   {q:"Name two art techniques used today.",a:"Impressing (pressing into clay), smoothing, scoring, rolling a seal, relief, calligraphy."},
   {q:"Why did Cyrus’s scribes write on a clay barrel?",a:"To record what he wanted remembered. Rulers often buried clay barrels in repaired buildings for future generations to find."}],
  talk:[
   {q:"A written promise is different from a spoken one. How?",starters:["A written promise …","A spoken promise can …","It helps to write it because …"]},
   {q:"What is your ‘seal’ — a picture or mark that says who you are?",starters:["My mark would be … because …","It shows my …","My caravan’s mark would be …"]}],
  say:"Praise careful, patient craft over speed. Remind students: pointed tools are for clay, not for people. Do not copy sacred scripts or religious symbols as decoration.",
  situations:[
   {title:"The Cracked Tablet",story:"Your clay tablet cracked while drying, right through the middle of your decree. Lunch is in five minutes, and a friend says, “Just stick it back together and say nothing.”",
    options:["Hide the crack and say nothing.","Ask for help: mend it with a little water and slip, and explain what happened.","Start again and do not tell anyone."],best:1,
    think:"B. Honest repair and asking for help are part of good craft. Ancient scribes also made mistakes; their tablets show corrections."},
   {title:"The Forged Seal",story:"A classmate says, “I could copy your seal print and sign your name on a note. Nobody would know.”",
    options:["Say nothing — it is only a game.","Say it is wrong to copy someone’s signature, and offer to make a different seal together.","Copy their seal first."],best:1,
    think:"B. A seal says ‘this is mine’ — copying it to trick people is dishonest. The Bible calls us to let our word be trustworthy."}],
  sum:["Cuneiform is wedge-shaped writing pressed into wet clay with a reed.","Cylinder seals were rolled in clay as signatures of identity and ownership.","The Cyrus Cylinder is a clay barrel of cuneiform, written to record what Cyrus wanted remembered."],
  exit:"Finish the sentence:  “Clay writing lasted because ______, and a seal shows ______.”",
  next:{title:"Friday · The Camel Charge",text:"The camels are lined up and snorting. Tomorrow: add a promise about fairness to your Creed — then charge to win back the torn map!"}
 },
 fri:{
  retrieval:[
   {q:"Monday: In what year did Cyrus enter Babylon, and who wrote the Cylinder?",a:"539 BC. The Cylinder was written for Cyrus by Babylonian scribes."},
   {q:"Tuesday: What are the three functions of a city?",a:"Government, trade and worship."},
   {q:"Wednesday: What is a fair test?",a:"Change one thing, measure one thing, keep everything else the same."},
   {q:"Thursday: What is cuneiform?",a:"Wedge-shaped writing pressed into wet clay."}],
  talk:[
   {q:"What was the most surprising thing you learned this week?",starters:["I was surprised that …","I used to think … but now I know …"]},
   {q:"What question about Cyrus, Babylon or the grassland are you still wondering?",starters:["I still wonder …","I would like to find out …"]}],
  situations:[
   {title:"The Last-Second Click",story:"The timer is nearly out and your Caravan is one point behind. A teammate wants to click quickly without reading the question.",
    options:["Click fast — speed wins!","Take a breath, read the question, and answer carefully.","Argue about who should click."],best:1,
    think:"B. Speed helps, but accuracy comes first. A calm, careful answer is worth more than a rushed wrong one."},
   {title:"The Fair Rival",story:"The team that beat you whispers, “We were lucky.” Your team feels cross and wants to blame the question.",
    options:["Blame the question loudly.","Say ‘well done’ and decide what you will practise next time.","Say nothing and sulk."],best:1,
    think:"B. Fairness means giving credit to a rival. Cyrus is remembered as a king who treated others fairly — a good model for a Courier."}],
  sum:["You can now explain Cyrus’s rise, why capitals are sited where they are, how grassland animals survive and how clay writing worked.","A good Courier checks sources, tests fairly and treats others with fairness.","Stage 2 is complete — the Fragment of the Open Gate is waiting at the tomb at Pasargadae."],
  exit:"Finish the sentence:  “This week I learned ______ and I am still wondering ______.”"
 }
};
})();
