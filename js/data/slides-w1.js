/* ===================================================================
   LESSON SLIDES — authored layer for Stage 1 (Week 1).
   The slide builder (js/slides.js) pulls the story, vocab, learning
   intentions, discovery cards, Council Fire and Paths from week01.js and
   adds what is authored here: retrieval, stop-and-think checks, talk
   prompts, situational-thinking scenarios, summaries and teasers.
   NZ English. Scripture paraphrased.
   =================================================================== */
(function(){
const RR=window.RR; RR.SLIDES=RR.SLIDES||{};
RR.SLIDES[1]={
 mon:{
  hook:["Open your Dig Envelope with your Caravan.","Look closely: who made these things? How old might they be?","Write your best guesses on your whiteboard: “I think … because …”","How could we check that we are right?"],
  prior:["What do you already know about ancient Persia?","How could anyone know what happened 2,500 years ago?"],
  checks:[
   {q:"Which people lived around Susa — and whose capital was Ecbatana?",a:"Elamites — Susa.  Medes — Ecbatana.  The Persians came from Persis, in the southern Zagros."},
   {q:"Herodotus was a Greek historian. Is he a perfectly neutral source? Why or why not?",a:"No. He wrote from his own people’s point of view — useful, but we must check for bias."},
   {q:"Two sources tell different stories about the same king. What does a good historian do?",a:"Asks WHY they differ, looks for a third source, and checks who might be biased."},
   {q:"Can we say “Ecbatana had seven coloured walls” is a fact?",a:"Not yet. Only one source says so and archaeologists cannot confirm it."},
   {q:"Why do we use both names — Persia and Iran — with respect?",a:"Persia comes from Persis, the home of the Persians. In 1935 the country asked to be called Iran. Both names matter."}],
  talk:[
   {q:"Which would you trust more: a clay tablet written by a king, or a story told by his rival? Why?",starters:["I would trust … more because …","Both are useful because …","I would check by …"]},
   {q:"In 2,000 years’ time, what ‘sources’ would a historian use to learn about OUR class?",starters:["They could find …","A photo would show … but not …","A written record might be biased because …"]}],
  say:"Let students argue both sides — the aim is to hear ‘because’. Invite whakapapa, pūrākau and photographs as sources of the past.",
  situations:[
   {title:"The Two Reports",story:"You find two reports of the same battle. The king’s scribe says it was a glorious victory. A travelling trader says it was a draw and both sides went home. Your caravan must write the history. What do you do?",
    options:["Believe the king’s scribe — he was there!","Believe the trader — kings like to boast.","Use both, look for a third source, and ask who gains from each story."],best:2,
    think:"C. Each report holds a clue. Good historians weigh who is telling the story and why — and keep looking for more evidence."},
   {title:"The Golden Walls",story:"Your caravan’s report is due. You love the story that Ecbatana had seven coloured walls — but you cannot confirm it. Your teammate says, “Just write it as a fact — it sounds amazing!”",
    options:["Write it as fact. It is exciting!","Leave it out completely.","Include it, labelled: “Herodotus says … but this is not yet confirmed.”"],best:2,
    think:"C. Being honest about what we know — and don’t yet know — is integrity. The Bible calls us to let our ‘yes’ be yes: truthful words, even when the exciting version is tempting."}],
  sum:["A SOURCE is anything that tells us about the past — objects, writing, pictures, stories.","Three peoples shared the plateau: Elamites (Susa), Medes (Ecbatana) and Persians (Persis).","Good historians use MORE THAN ONE source and always check for bias."],
  exit:"Finish the sentence on your whiteboard:  “I know ______ because of ______ (a source).”",
  next:{title:"Tuesday · Geography",text:"The silver hoofprints lead to an enormous floor-map in an old map-room. Bring your compass, Navigator — tomorrow we read the land itself, and find out where those Dig Envelope objects might have come from."}
 },
 tue:{
  hook:["Place your Caravan token at the start of the floor-map.","Navigator: call a compass direction — N, NE, E, SE…","Predict: where might yesterday’s objects have come from? Why there?"],
  retrieval:[{q:"Name the three peoples of the plateau.",a:"Elamites, Medes and Persians."},{q:"What is a source? Give one example.",a:"Anything that tells us about the past — e.g. a clay tablet, a pot, a Greek historian, the Bible."},{q:"Why do historians use more than one source?",a:"One source can leave things out or be biased; agreement between sources builds confidence."}],
  checks:[
   {q:"Which range runs down the WEST of Iran, and which curves across the NORTH?",a:"Zagros — west.  Alborz — north. (Damavand, in the Alborz, is about 5,600 m.)"},
   {q:"Why does a qanat lose less water than an open ditch?",a:"It runs underground, so less evaporates in the sun — and it flows by gravity, with no pump."},
   {q:"What are the four settlement questions?",a:"Water · Soil · Defence · Trade."},
   {q:"Put in order, smallest to largest: city, hamlet, farm, town, village.",a:"Farm → hamlet → village → town → city."},
   {q:"Iran is about how many times the size of Aotearoa? Which peak is higher — Damavand or Aoraki?",a:"About six times the size. Damavand (≈5,600 m) is higher than Aoraki/Mt Cook (3,724 m)."}],
  talk:[
   {q:"Which of the four questions — water, soil, defence, trade — matters MOST for a brand-new settlement? Defend your choice.",starters:["The most important is … because …","Without … a village would …","On the other hand …"]},
   {q:"If our school had to move, where would you choose to settle it? Use the four questions.",starters:["I would choose … because it has …","The best site answers … questions."]}],
  say:"Push for trade-offs: no site is perfect. Link back to Monday — what source would tell us a settlement’s story?",
  situations:[
   {title:"Choose the Site",story:"Your caravan is founding a village. Site A: a flat plain by a river — wide open to raiders. Site B: a rocky hilltop — easy to defend, no water. Site C: foothills with a spring, fertile soil, hills behind you and a track to the trade road.",
    options:["Site A — water is life!","Site B — safety first!","Site C — it answers the most questions."],best:2,
    think:"C answers water, soil, defence AND trade. A and B each solve one problem and create another. Real settlers weighed trade-offs, just like you."},
   {title:"The Qanat Dilemma",story:"An upstream village wants to dig a new qanat. It would be a great help to them — but the village downstream would get less water. How should it be decided?",
    options:["First come, first served.","Share, talk and agree a fair rule together.","The stronger village decides."],best:1,
    think:"B. Water is shared life. The psalmist says the earth and everything in it belongs to the Lord — we are caretakers, and caretakers think of their neighbours too."}],
  sum:["The Iranian Plateau is a high land ringed by the Zagros and Alborz, with great deserts and two seas.","Qanats carry water underground by gravity — clever engineering that still works today.","People settle where they find WATER, SOIL, DEFENCE and TRADE."],
  exit:"Finish the sentence:  “One reason people settle in a place is ______ because ______.”",
  next:{title:"Wednesday · Science",text:"Dawn on the Zagros. Cold, thin air — and fresh footprints in the mud by the stream. Four different animals. Gandom the camel has already guessed… and she is always wrong. Whose tracks are they?"}
 },
 wed:{
  hook:["Study the four mystery footprints.","Which animal made each one? How do you know?","Gandom has guessed again… prove her wrong with EVIDENCE!"],
  retrieval:[{q:"Which mountains run down the west of Iran?",a:"The Zagros."},{q:"What is a qanat, and why is it clever?",a:"An underground water tunnel; gravity does the work and less water evaporates."},{q:"Name the four settlement questions.",a:"Water, soil, defence, trade."}],
  checks:[
   {q:"What is the difference between a habitat and a community? Give an example from the Zagros.",a:"Habitat = the natural home (oak woodland). Community = all the different living things together (ibex, leopard, bear, eagle…)."},
   {q:"Complete the food chain:  grass → ______ → ______",a:"Grass → ibex → leopard."},
   {q:"Match each adaptation to its animal: grippy hooves · spotted camouflage coat · razor-sharp eyesight.",a:"Ibex · leopard · golden eagle."},
   {q:"Why is it an advantage for a bear to eat both plants AND meat?",a:"When one food is scarce (like in winter) it can switch to another."},
   {q:"The Himalayan tahr was introduced to the Southern Alps. Why might an introduced animal change a habitat?",a:"It can eat the plants native animals need and damage the soil — the community is thrown out of balance."}],
  talk:[
   {q:"If the leopards vanished from the Zagros, what could happen to the ibex… and then to the grass?",starters:["First … would happen because …","Then …","In the end the community would …"]},
   {q:"Which adaptation would YOU most like for a day — and how would it help you survive in the mountains?",starters:["I would choose … because …","It would help me …"]}],
  say:"Listen for cause-and-effect chains (‘because… so… then…’). Name the Aotearoa link: our own introduced species (tahr, possums, stoats).",
  situations:[
   {title:"The Footprint Dispute",story:"A teammate loudly declares, “Bear tracks! Definitely!” But the print shows four slim toes and no claw marks. Your team is about to write it in the Field Notebook.",
    options:["Go along with it — don’t make a fuss.","Kindly say, “Show me your evidence — what do you see?”","Ignore them and write your own answer."],best:1,
    think:"B. Scientists test ideas against evidence — and do it kindly. Being gentle AND honest is how a good team finds the truth."},
   {title:"Leopards and Goats",story:"Mountain farmers are losing goats to leopards, and some want to hunt every leopard. But Persian leopards are rare and endangered, and they keep ibex numbers in balance.",
    options:["Hunt them all — protect the farms.","Use guard dogs and safe enclosures, and share the costs fairly.","Do nothing — it is not our problem."],best:1,
    think:"B. People and wildlife both matter. The psalmist sings that God cares for every creature in its home — and we are called to look after both neighbours and nature."}],
  sum:["A HABITAT is a living thing’s home; a COMMUNITY is all the different kinds together; an ECOSYSTEM adds rock, water and weather.","Animals have ADAPTATIONS that help them survive: grippy hooves, camouflage, sharp eyes.","Everything is linked: grass → ibex → leopard. Change one part and the rest feels it."],
  exit:"Finish the sentence:  “The ______ is adapted to the mountains because it has ______ which helps it ______.”",
  next:{title:"Thursday · Art",text:"On the palace terrace the stonecutters are chipping away — rosettes like suns, lotus flowers in perfect rows. Tomorrow you fold, cut and carve patterns the way Persian artists did, and begin your Caravan’s banner."}
 },
 thu:{
  hook:["Fold a square of paper into halves, quarters, then eighths.","Cut a shape into the folded edges — then open it!","How many lines of symmetry can you find?"],
  retrieval:[{q:"Explain habitat, community and ecosystem in your own words.",a:"Home · all the kinds together · community plus rock, water, air and temperature."},{q:"Name one Zagros animal and one adaptation.",a:"e.g. ibex — hard-rimmed hooves for steep rock."},{q:"Finish the chain:  grass → ibex → ______",a:"Leopard."}],
  checks:[
   {q:"How many mirror lines does a rosette with 8 petals have?",a:"8 — and it also has radial (turning) symmetry."},
   {q:"Why is repeated pattern like ‘a drumbeat you can see’?",a:"Repetition creates rhythm — the eye follows the beat across the stone."},
   {q:"In a lotus-and-bud border, what is the NEGATIVE shape?",a:"The space around and between the lotus flowers and buds."},
   {q:"Why would artists use only a few colours — lapis, turquoise and gold?",a:"A limited palette feels powerful, calm and unified."},
   {q:"Persian patterns honoured the king. Who was Bezalel’s craft for?",a:"God — his skill was a gift, used to make beautiful things for worship."}],
  talk:[
   {q:"Can making something beautiful be a way of saying ‘thank you’ to God? Why or why not?",starters:["I think … because …","A beautiful thing can show …","Skill is a gift when …"]},
   {q:"Where do you see repeating patterns in Aotearoa — in buildings, weaving or carving? What do they mean to the people who make them?",starters:["I notice … repeated …","This pattern tells a story about …"]}],
  say:"Invite your local iwi/hapū or Māori Education lead for kōwhaiwhai and tāniko — avoid generalising; honour the maker’s own meaning.",
  situations:[
   {title:"The Rushed Border",story:"Lunch is in five minutes. Your lotus border has two uneven gaps — one very noticeable. A friend says, “It’s fine. Nobody will notice.”",
    options:["Leave it — good enough!","Pause and fix the spacing, even if it takes longer.","Copy your friend’s border instead."],best:1,
    think:"B. Craftsmanship means patience and care — Bezalel’s skill was a gift worth using well. Doing your best work is a way of honouring the people (and the God) your work is for."},
   {title:"The Banner Battle",story:"Your Caravan cannot agree on the symbol for its banner. Three people want three different animals, and the arguing is eating up your working time.",
    options:["The loudest voice wins.","Vote, and everyone supports the result.","Each person sketches an idea; the team combines the best parts."],best:2,
    think:"C (or B done kindly). Great teams listen, value every idea and build something none of them could make alone — just like the many craftspeople who carved Persepolis."}],
  sum:["SYMMETRY: reflection (mirror lines) and radial (repeating round a centre).","Persian artists used REPETITION, positive and negative shape, and a LIMITED PALETTE to create power and beauty.","Skilled craft is a gift — Bezalel’s work shows beauty can honour God."],
  exit:"Finish the sentence:  “My pattern shows ______ symmetry because ______.”",
  next:{title:"Friday · Charter Day & the Showdown",text:"The Gates of the Plateau stand open — but no Caravan may enter until it signs the Charter. Tomorrow: write your Creed, then race your team in the Showdown!"}
 },
 fri:{
  retrieval:[
   {q:"Monday: What is a source — and why do we use more than one?",a:"Anything that tells us about the past. One source can be biased or incomplete."},
   {q:"Tuesday: Name the four settlement questions.",a:"Water, soil, defence, trade."},
   {q:"Wednesday: What is an adaptation? Give one.",a:"A feature or behaviour that helps survival — e.g. the ibex’s grippy hooves."},
   {q:"Thursday: What is radial symmetry?",a:"A pattern repeating evenly around a centre, like a rosette."}],
  talk:[
   {q:"What was the most surprising thing you learned this week?",starters:["I was surprised that …","I used to think … but now I know …"]},
   {q:"What question about Persia are you still wondering?",starters:["I still wonder …","I would like to find out …"]}],
  situations:[
   {title:"One Point Short",story:"Your Caravan loses the Boss Round by a single point. The winning team celebrates loudly. Someone on your team mutters, “That’s not fair!”",
    options:["Agree loudly and blame the question.","Congratulate them, and decide what to practise next time.","Say nothing and sulk for the rest of the day."],best:1,
    think:"B. Winning well and losing well both take character. Being able to say ‘well done!’ to a rival is a mark of a true Courier."},
   {title:"The Wrong Answer",story:"A teammate taps the wrong answer in the last second and your Caravan drops a place. They look crushed.",
    options:["Tell them it was their fault.","Say, “We win and lose as a team — shake it off!”","Pretend it never happened."],best:1,
    think:"B. Encouragement is a team’s secret weapon. The Charter you write today is a promise about exactly this kind of moment."}],
  sum:["You can now name the three peoples, find the great landforms, explain habitats and communities, and create patterns with symmetry.","A good Courier thinks carefully, checks sources, and treats rivals and teammates with respect.","Stage 1 is complete — a Fragment of the Seal is waiting at the cairn."],
  exit:"Finish the sentence:  “This week I learned ______ and I am still wondering ______.”"
 }
};
})();
