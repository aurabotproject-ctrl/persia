/* ===================================================================
   STAGE 8 — FIRE ON THE MOUNTAIN  (Week 8 · full lesson data)
   Alexander and the fall of the empire, 334–330 BC. Same schema as
   week01.js / week03.js.
   NZ English spelling. Scripture is paraphrased — read from your own
   Bible translation in class.
   =================================================================== */
(function(){
const RR=window.RR; RR.WEEKS=RR.WEEKS||{};

RR.WEEKS[8] = {
 n:8,
 title:"Fire on the Mountain",
 era:"334–330 BC",
 place:"Granicus, Issus, Gaugamela, Persepolis",
 fragment:"Fragment of Ashes",
 story:{
  briefing:"Smoke over the terrace: Persepolis is burning. We are scattered and our fragments are in danger. Will we cling to one another and to hope?",
  briefingFull:"Courier! Shirin here, and I am coughing. Look to the east: smoke is rising from the great terrace at Persepolis, and the sky has turned the colour of rust. A new army has swept across the empire, a young king from the far west whose name is Alexander. Caravans are scattered, roads are cut, and your Fragment is somewhere in the ashes. This is the heaviest week of the race, and nobody can do it alone. This week you will learn how a vast empire fell and why the old writers tell the story so differently, how cities are ruined and rebuilt, which animals of the old Persian lands are vanishing, and how artists can draw both darkness and hope. Hold on to your Caravan, Courier. Every one of you counts.",
  shadowCourier:"A silver mask glimpsed in the smoke; a small, scorched bootprint beside a rescued lamp.",
  shadowClue:"In the grey light after the fire, Gandom stops and will not move. Ahead of her, on the cold ash, a small clay lamp has been set down carefully, still faintly warm. Beside it is a bootprint, and it is much smaller than any soldier’s. Whoever carried this lamp out of the burning hall went back in again afterwards. Was that a thief, or a rescuer?",
  event:"Fire on the Mountain — every Caravan starts with three lives. A wrong answer costs a life, and teams can rally to keep each other going. No Caravan goes down alone.",
  fridayReveal:"When the smoke thins, the champions of Stage 8 find the Fragment of Ashes in a cracked clay jar beneath a fallen column, blackened at the edges and still glowing faintly in the middle, like a coal that has refused to go out. Beside it lies a second clay lamp, set down very carefully. The silver rider was here again, and this time he did not take anything away."
 },
 materials:["Alexander campaign map (large floor map, or printed A3 copies) and tokens or string for routes","Evidence cards for the Court of Inquiry (five causes) and the Accident-or-Act debate (simplified Arrian, Plutarch and Diodorus extracts, provided in the Teacher View)","Photos or the app’s scene of Persepolis ruins; Bam citadel photo; Napier Art Deco photo","Squared paper or tracing paper for reconstruction drawings","Silhouette cards for the Zoo of the Missing; endangered species data cards; graph paper and rulers","Charcoal sticks, chalk, soft erasers, off-white or grey sugar paper, spray-fix or hairspray (teacher use only)","Black paper, orange and red tissue paper, gold paint, glue sticks, scissors","Mini-whiteboards; A–D answer cards (for offline Showdown)"],

 days:{
 /* ====================================================================== MONDAY */
 mon:{
  id:"w8-mon", day:"mon", subject:"History",
  title:"The Fall: Alexander and Darius III",
  tagline:"How does a mighty empire fall, and who tells the story?",
  nzc:["SS-CC","SS-DO","EN-W","EN-R"],
  kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
  values:["Inquiry & curiosity","Integrity","Respect"],
  li:"We are learning to explain why a huge empire fell and why accounts of the fall differ.",
  sc:["I can put the key events in order: Granicus (334 BC), Issus (333 BC), Gaugamela (331 BC) and Persepolis (330 BC).","I can explain three causes of the fall of the empire.","I can compare two accounts of the burning of Persepolis."],
  vocab:[
   {w:"conquest",d:"Taking over a land or a people by force."},
   {w:"Macedonia",d:"A kingdom in the north of Greece. Alexander was its king."},
   {w:"Achaemenid",d:"The royal family (dynasty) of Cyrus, Darius I and Xerxes. Darius III was the last Achaemenid king."},
   {w:"phalanx",d:"A tight block of Macedonian soldiers carrying very long spears (sarissas)."},
   {w:"cavalry",d:"Soldiers who fight on horseback."},
   {w:"satrap",d:"A governor of a Persian province (you met this word in Week 3)."},
   {w:"Hellenistic",d:"‘Greek-like’: the age after Alexander when Greek and Eastern cultures mixed."},
   {w:"cause and effect",d:"A cause is why something happens. An effect is what happens because of it."}],
  resources:["Evidence cards for the Court of Inquiry (print from the Teacher View)","Alexander campaign map and route tokens","Timeline strip with new date cards (336, 334, 333, 331, 330, 323 BC)","Two short source extracts on the burning of Persepolis (app or printed, simplified)","Path A cause-effect chain template; Path C debate prep sheet","Pronunciation guide: Gaugamela (GOW-guh-MEE-luh), Issus (ISS-us), Granicus (gran-EYE-cus)"],
  dispatch:{
   title:"The Court of Inquiry",
   story:"Smoke is drifting across the plateau, and the caravan has been called to a tent of black felt. Shirin stands at a table spread with five clay cards. ‘An empire that stood for two hundred years has fallen in four,’ she says. ‘You are the Court of Inquiry, Courier. Here are the clues. No single clue is the whole truth, so you must weigh them and decide which mattered most. And remember, the writers who told us this story were not on the Persian side.’",
   easy:"An empire fell very quickly. Look at the five clue cards. Which clue do you think mattered most? Why?",
   teacher:[
    "BEFORE CLASS: print and cut one set of five Evidence Cards per Caravan: (1) Alexander’s tactics and leadership, (2) the decisions of King Darius III in battle, (3) the Persian army’s many peoples and divided commands, (4) distance, supplies and speed (including Persian cities that opened their gates), (5) luck and chance. Keep the same Caravans as Weeks 1–7.",
    "Read Shirin’s dispatch aloud. Pause after ‘no single clue is the whole truth’.",
    "Teams read their five cards (3 min). Ask them to rank the cards from ‘mattered most’ to ‘mattered least’ and to write ONE ‘because’ for their top card on a mini-whiteboard.",
    "Court session (4 min): each Caravan shows its ranking and gives its reason. Do not tell them who is right. Note the cards that most teams put at the top.",
    "Tell the class that historians also disagree, and that today they will see why. Share the Learning Intention and Success Criteria. Students read them chorally (1 min)."],
   retrieval:"Week 7 link-back (two minutes, mini-whiteboards): What did the Persepolis Fortification Tablets record? What is specialisation? Why do camels have wide padded feet? Then: ‘Last week we saw the empire at its busiest and most prosperous. This week we see what happened to it.’"
  },
  discovery:{
   intro:"One young king, three great battles, and one burning terrace. Follow the road from the Hellespont to Persepolis, and notice who is telling you the story.",
   cards:[
    {title:"A young king from Macedonia", icon:"scroll", body:"<b>Alexander</b> became king of <b>Macedonia</b> in <b>336 BC</b>, when he was about <b>20</b>. His father, <b>Philip II</b>, had built a strong, well-trained army with a tight block of spearmen (the <b>phalanx</b>) and fast cavalry. In <b>334 BC</b> Alexander crossed into Asia with an army of roughly <b>40,000</b> soldiers (the numbers vary in the sources). Greek writers said the war was about paying back the Persians for Xerxes’ invasion 150 years earlier. It was also about land, power and wealth."},
    {title:"Darius III, the last Achaemenid king", icon:"horn", body:"<b>Darius III</b> became king about <b>336 BC</b>, after a period of murders and plots at court. He ruled a land that was still enormous and rich, from Egypt to the Indus region. Greek writers often paint him as weak or cowardly, but they were writing about the enemy of their hero. At Issus and Gaugamela he led his army in person, and he raised new armies after each defeat. We should say that he faced a very dangerous opponent."},
    {title:"Four dates to remember", icon:"compass", body:"<b>Granicus, 334 BC:</b> Alexander’s cavalry beat the local Persian governors’ army beside a river in north-west Anatolia (modern Türkiye). <b>Issus, 333 BC:</b> a battle on a narrow coastal plain, where Darius’s huge army had little room to move. <b>Gaugamela, 331 BC:</b> a battle on an open plain in what is now northern Iraq, after which Darius fled and the road to Babylon, Susa and Persepolis lay open. <b>Persepolis, 330 BC:</b> the great terrace was burned."},
    {title:"Why did the empire fall? Not just one reason", icon:"gear", body:"Historians suggest several causes working together. <b>Tactics and leadership:</b> Alexander took risks, led charges himself and used cavalry and the phalanx together. <b>Command problems:</b> the Persian army was made up of many peoples and was hard to organise as one force, and Darius was a new king. <b>Distance and supplies:</b> the empire was so large that it was hard to defend everywhere, though Alexander also had to feed his army deep inside it. Some cities and governors, such as the governor of Babylon, chose to surrender. <b>Chance:</b> battles also turn on luck. The Greek writers do <i>not</i> agree on all of this."},
    {title:"Accident, revenge or political act?", icon:"flame", body:"In <b>330 BC</b> Alexander’s army burned the palaces at <b>Persepolis</b>. Ancient writers disagree about why. <b>Plutarch</b> and <b>Diodorus</b> describe a feast, and a woman named <b>Thaïs</b> urging the king to burn the palace as payment for Xerxes burning the temples of Athens in 480 BC. <b>Arrian</b> says that Alexander’s older general <b>Parmenion</b> objected, and that Alexander explained it as revenge on the Persians. Some modern historians think it was a deliberate political act that sent a message to the Greek cities. Others think a drunken feast got out of hand. Archaeologists find burned layers in several buildings, but the burned stones cannot tell us <i>why</i>."},
    {title:"After the fire, and who remembers what", icon:"book", body:"Later in 330 BC <b>Darius III</b> was killed by his own officers, led by <b>Bessus</b>, the governor of Bactria. Alexander ordered a royal burial for him, and went on east. Alexander died in <b>Babylon in 323 BC</b>, and his generals divided his lands. One of them, <b>Seleucus</b>, ruled much of Iran. This was the start of the <b>Hellenistic</b> age. Memory of Alexander in Iran is mixed. Some later Persian stories treat him as a destroyer; the great poem <i>Shahnameh</i> turns him into a rightful king with a Persian father. <b>Every account was written afterwards, and almost all of them by Greeks and Romans, hundreds of years later.</b> No Persian account of the conquest survives."}],
   teacher:[
    "Timeline (3 min): add the date cards to the strip you have used all term: 336 BC Alexander becomes king; 334 Granicus; 333 Issus; 331 Gaugamela; 330 Persepolis burned and Darius III killed; 323 Alexander dies. Place Xerxes (486–465 BC) well to the left so students see the 150-year gap.",
    "The four dates (5 min): use the campaign map. Put a token at the Hellespont and walk it to each battle. Pronounce the names slowly together. Students show the date on mini-whiteboards after each stop.",
    "Causes (4 min): return to the Evidence Cards from the dispatch. Ask: ‘Which cards did the discovery cards support?’ Stress that historians weigh several causes and avoid a single ‘because’. Ask for one cause on the Persian side and one on the Macedonian side.",
    "Sources (3 min): who wrote these accounts, and when? Arrian wrote about 450 years after the events, Plutarch about 400 years, Diodorus about 300. None of them were Persian. Link to Week 1 (bias) and Week 3 (propaganda). Say honestly that Persian voices are mostly missing.",
    "Sensitivity (1 min): say aloud that for Iranian-NZ students and some Zoroastrian or Muslim families this history is part of a living heritage, and that we will talk about it with care. Never ask a student to speak for a culture."]
  },
  paths:[
   {id:"A", name:"Cause–Effect Chain and Explanation", icon:"gear",
    brief:"Choose THREE causes of the fall of the Persian Empire. For each, draw a link in a chain showing the cause and what it led to, then write a paragraph explaining which cause you think mattered most and why.",
    checklist:["I named three different causes","Each link shows a cause AND an effect (‘because… so…’)","I used at least two vocabulary words (for example phalanx, satrap, cavalry)","My paragraph says which cause mattered most and gives a reason","I said ‘historians suggest’ or ‘probably’ at least once, because no single cause is certain"],
    scaffold:"<b>Chain frame:</b> Cause 1: ___ → so ___ → which led to ___. <br><b>Which mattered most?</b> I think ___ mattered most because ___. <br><b>But…</b> Other causes also mattered, such as ___. <br><b>Careful words:</b> probably · historians suggest · it seems that · one reason may be",
    diff:{supported:"Use the three ready-made cause cards and put them into a chain. Complete the frames with a partner, and write two sentences for the ‘mattered most’ paragraph.",
          standard:"Choose your own three causes, draw the chain and write a full explanation paragraph with a reason for your top cause.",
          extended:"Add a counter-argument: ‘Someone might say that ___ mattered most because ___. I disagree because ___.’ Then compare the fall of this empire with one other empire or kingdom you know."}},
   {id:"B", name:"Campaign Map with Annotated Battles", icon:"compass",
    brief:"Draw an annotated map of Alexander’s route from the Hellespont to Persepolis. Show the four key places and write a short caption for each battle: when, where, who won and one reason why.",
    checklist:["Title, compass rose, scale bar and key","The route is drawn and in the right order","Granicus, Issus, Gaugamela and Persepolis are all labelled with dates","Each has a caption of at least one sentence with a reason","I marked at least two other places for context (for example Babylon, Susa, Alexandria)"],
    scaffold:"<b>Caption frame:</b> In ___ BC, at ___, Alexander ___. This mattered because ___. <br><b>Map conventions:</b> T · A · L · K · E · S (Title · Arrow/compass · Legend · Key · Edge/border · Scale) as in Week 1. <br><b>Bank of places:</b> Hellespont · Granicus · Issus · Gaugamela · Babylon · Susa · Persepolis",
    diff:{supported:"Use an outline map with the four places already marked. Add the dates and write captions from the frame.",
          standard:"Draw the map independently with all conventions and four full captions.",
          extended:"Add a second line for Darius III’s journey and annotate where the two routes cross. Use the scale to estimate the distance from the Hellespont to Persepolis and show your working."}},
   {id:"C", name:"Debate: ‘Accident or Act?’", icon:"flame",
    brief:"Use the two source cards to prepare a debate about why Persepolis burned. Half your Caravan argues ‘a deliberate act’ and half argues ‘an accident or a drunken mistake’. Present for and against, then say what you think and how sure you are.",
    checklist:["I stated my side clearly","I used at least two pieces of evidence from the source cards","I named WHO wrote each source and WHEN","I answered one point from the other side","I finished by saying how sure we can be, and what else a historian would need"],
    scaffold:"<b>Opening:</b> We argue that the burning was ___ because … <br><b>Evidence:</b> According to ___, who wrote about ___ years later, … <br><b>Reply:</b> The other side says ___, but … <br><b>Closing:</b> We cannot be certain, because …",
    diff:{supported:"Use the evidence cards and the speech frame; one member of the pair reads the source aloud while the other states the reason.",
          standard:"Prepare your own argument with two pieces of evidence and a reply to the other side.",
          extended:"Argue the side you disagree with, then explain which side the evidence supports better and why. What would you need to find in the ground (archaeology) to be more certain?"}}
  ],
  councilFire:{
   see:{refs:["Daniel 2:31–45","Daniel 8:20–21","Daniel 2:44"],
        text:"In Daniel 2, a king dreams of a great statue made of different metals, and Daniel explains that kingdoms will rise one after another. In Daniel 8, a vision of a ram and a goat is explained as the kings of Media and Persia, and then the king of Greece. And Daniel 2:44 says that in the days of those kings God will set up a kingdom that will never be destroyed."},
   wonder:"Kingdoms rise and kingdoms fall. Persia once seemed unstoppable, and then it was gone in four years. What lasts when great empires do not?",
   weigh:"Christians read Daniel in different ways. Some see these chapters as a vision of future kingdoms, and some see them as encouragement for God’s people living under foreign rulers, and scholars disagree about when they were written. But all of them see the same big idea: God is the ruler over history, and the biggest empires do not have the last word. How does it feel to read that when a great city has just burned?",
   respond:"Write ONE thing you can build that will outlast you (for example kindness, a friendship, a promise, faith) and ONE small thing you will do this week to start building it.",
   teacher:"Daniel is read in many ways, so present this honestly: ‘Christians read Daniel in different ways, and we are going to look at what all of them agree on.’ Do not say that the Bible ‘predicts’ Alexander as if it were settled. Do not suggest that Persian rulers were evil: Cyrus and Darius I appear favourably in Ezra and Isaiah, as students learned in Weeks 2 and 3. Some students may be Jewish, Muslim or from Zoroastrian backgrounds, and may hold these stories differently. Invite them to listen respectfully and never put a student on the spot.",
   verses:["Dan 2:31–45","Dan 8:20–21","Dan 2:44"]},
  assess:{
   evidence:"The cause–effect chain or caption set; a ‘because’ sentence about which cause mattered most; observation of how students used evidence in the debate; the Path product (photographed).",
   rubric:["Names the battles or a cause with support and a prompt.","Sequences the four key events and explains two or three causes of the fall in simple cause-and-effect sentences.","Explains several causes, says which mattered most with evidence, and compares two accounts of the burning of Persepolis, naming who wrote them and when.","Evaluates how reliable the sources are, explains why no single cause is certain, and applies the idea to another example from history."]},
  nzConnection:"How do we remember the fall of something precious in Aotearoa? Different people tell the story of the same event in different ways: iwi, historians, newspapers. Ask your Māori Education lead or local iwi/hapū how the stories of your own rohe are told and by whom, and avoid generalising across iwi. Whose version of an event do we usually hear first?",
  sensitivity:"This is the story of the destruction of a heritage that Iranian-NZ students (and Zoroastrian, Muslim and other students from Iranian backgrounds) may feel proudly and personally, so tell it with respect, and avoid describing Alexander as either hero or villain. Name that nearly all the sources are Greek or Roman and were written long afterwards. Keep battle talk factual and non-graphic; students need dates, places and reasons, not details of suffering.",
  inquiry:["Could students give three causes with a ‘because’, or only one?","Who used the words ‘probably’ or ‘historians suggest’ without being prompted?","What do I need to revisit tomorrow before we move from the fire to the rebuilding of cities?"],
  widgets:[
   {type:"order", title:"The Fall of the Empire", prompt:"Put these events in the order they happened.",
    items:["Alexander becomes king of Macedonia (336 BC)","Battle of the Granicus (334 BC)","Battle of Issus (333 BC)","Battle of Gaugamela (331 BC)","Persepolis is burned and Darius III is killed (330 BC)","Alexander dies in Babylon (323 BC)"]},
   {type:"match", title:"Words of the Conquest", prompt:"Match each word to its meaning.",
    pairs:[["Phalanx","A tight block of soldiers with very long spears"],["Cavalry","Soldiers who fight on horseback"],["Satrap","A governor of a Persian province"],["Achaemenid","The royal family of Cyrus, Darius I, Xerxes and Darius III"],["Hellenistic","The age when Greek and Eastern cultures mixed after Alexander"],["Cause and effect","Why something happens, and what happens because of it"]]},
   {type:"sort", title:"Agreed, Disputed, or Opinion?", prompt:"Sort each statement. Do most sources agree, do the sources disagree, or is it an opinion?",
    bins:["Most sources agree","Sources disagree","Opinion"],
    items:[{t:"Alexander fought a battle at Gaugamela in 331 BC.",bin:0},{t:"Persepolis was burned in 330 BC.",bin:0},{t:"The fire at Persepolis was a deliberate act of revenge.",bin:1},{t:"The fire at Persepolis started by accident at a feast.",bin:1},{t:"Darius III was killed by his own officers in 330 BC.",bin:0},{t:"The exact size of the two armies at Gaugamela.",bin:1},{t:"Alexander was the greatest general who ever lived.",bin:2},{t:"Darius III was a coward.",bin:2}]},
   {type:"reveal", title:"Who Wrote It, and When?", prompt:"Tap each card to see why we must be careful with each account.",
    cards:[{front:"Arrian",back:"A Greek writer in the Roman Empire, about AD 130–150, some 450 years after the events. He used earlier accounts that are now lost, and he admired Alexander."},{front:"Plutarch",back:"A Greek writer about AD 100. He wrote lives of famous people to teach lessons about character, and tells the story of the feast and Thaïs."},{front:"Diodorus",back:"A Greek writer of the first century BC. He wrote a huge history of the world, and also includes the feast story."},{front:"The ruins themselves",back:"Archaeologists find burned layers in several buildings at Persepolis. The ruins show that there was a fire, but not who lit it or why."},{front:"Missing voices",back:"No Persian narrative of the conquest survives. We have to remember that the story we have is told by outsiders."}]}
  ]
 },

 /* ====================================================================== TUESDAY */
 tue:{
  id:"w8-tue", day:"tue", subject:"Geography — Settlements and Change",
  title:"Cities Under Attack: Destruction, Abandonment and Rebuilding",
  tagline:"When a city is broken, who decides what happens next?",
  nzc:["SS-PE","SS-CC","SS-ICO","MA-G"],
  kc:["Thinking","Using language, symbols & texts","Relating to others"],
  values:["Community & participation","Ecological sustainability","Respect"],
  li:"We are learning to explain how events change settlements, and why people rebuild or leave places.",
  sc:["I can describe how war, fire and earthquakes can change a city.","I can explain why some places are rebuilt and others are abandoned.","I can compare an ancient and a modern rebuild."],
  vocab:[
   {w:"ruin",d:"What is left of a building or city after it has been destroyed or has fallen down."},
   {w:"abandon",d:"To leave a place and not come back."},
   {w:"rebuild",d:"To build again something that was damaged or destroyed."},
   {w:"earthquake",d:"A shaking of the ground caused by sudden movement of rock deep in the earth."},
   {w:"tectonic plates",d:"The huge slabs of rock that make up the earth’s surface and slowly move."},
   {w:"adobe (mud brick)",d:"Bricks made from mud and straw, dried in the sun."},
   {w:"reconstruction",d:"Putting something back together, either in real life or as a drawing."},
   {w:"heritage",d:"Places, objects and traditions passed down from the past that people want to look after."}],
  resources:["Photo of the Persepolis ruins (app or printed)","Bam citadel (Arg-e Bam) photos, before and after","Photo of Napier’s Art Deco streets and a 1931 photo from a trustworthy source (check it is suitable)","Squared or tracing paper for reconstruction sketches","Rebuild-plan cards (priorities: homes, water, school, hospital, market, place of worship, park)","Venn diagram template; Path C comparison sheet","Local-area map for the NZ comparison"],
  dispatch:{
   title:"Before and After",
   story:"The caravan has climbed to the edge of the terrace. Below, where there was a forest of tall columns, there is smoke and grey stone, and the rooms are open to the sky. Shirin sets a roll of tracing paper in your hands. ‘Draw what you can see, Courier. Then draw what you think was here yesterday. Look for the clues: a base, a doorway, a fallen beam. A ruin is a puzzle, and you are the one who solves it.’",
   easy:"Look at the picture of the ruins. Draw what you can see. Then draw what you think the building looked like when it was whole.",
   teacher:[
    "Retrieval (2 min): Monday on mini-whiteboards: name two of the four key dates; name one cause of the fall; explain why we cannot be sure why Persepolis burned.",
    "Show the Persepolis ruins photo. Ask: ‘Which parts are still standing? Which parts are missing? Why might stone survive and wood not?’ (3 min).",
    "Before-and-after sketch (5 min): students draw the ruin on one half of the page and their idea of the whole building on the other half. They label two clues that helped them.",
    "Take two shares. Praise ‘I think… because I can see…’. Do not correct guesses yet; the Discovery will help.",
    "Share LI/SC (students read aloud)."],
   retrieval:"Monday: the four key dates (334, 333, 331, 330 BC); one cause of the fall of the empire; why we cannot be sure why Persepolis burned."
  },
  discovery:{
   intro:"Cities can be broken by war, fire, flood or earthquake. Some are rebuilt, some are left, and some become something new. Work out what makes the difference.",
   cards:[
    {title:"What the ruins of Persepolis tell us", icon:"home", body:"At Persepolis the stone columns, staircases and gateways have survived, but the wooden roofs, beams and the mud-brick walls burned or crumbled. Only a few of the great columns of the <b>Apadana</b> still stand. After the fire Persepolis was <b>not rebuilt</b> as a royal centre, and over the centuries it was partly buried by earth. The ruins were carefully excavated in the <b>1930s</b>, and in <b>1979</b> UNESCO listed Persepolis as a <b>World Heritage Site</b>. A nearby city, <b>Istakhr</b>, later became more important in the region."},
    {title:"Alexander’s new cities", icon:"compass", body:"Alexander did not only destroy; he also founded cities. The most famous is <b>Alexandria</b> in Egypt, begun in <b>331 BC</b> on the Mediterranean coast beside the Nile delta. It had a good <b>harbour</b>, fertile land behind it and sea trade in front of it. Ancient writers say he founded many more cities, and many were named after him. Some faded away. Alexandria, because of its position, grew into one of the great cities of the ancient world, and it is still a major city today."},
    {title:"A land that shakes", icon:"gear", body:"Iran lies where huge <b>tectonic plates</b> press together, so it has many earthquakes. The ancient mud-brick citadel of <b>Bam</b> (Arg-e Bam), in the south-east, was one of the largest adobe buildings in the world. In <b>December 2003</b> a powerful earthquake struck the city of Bam and killed more than 26,000 people, and the citadel was badly damaged. Since then, experts and local people have worked, with international help, to stabilise and rebuild parts of it."},
    {title:"Aotearoa also shakes", icon:"ibex", body:"New Zealand lies on the edge of two plates, so earthquakes are part of our story too. In <b>1931</b> a huge earthquake destroyed much of <b>Napier</b> and Hastings, and more than 250 people died. Napier was rebuilt within about two years, and its fashionable <b>Art Deco</b> buildings are famous today. In Canterbury, our own region, the 2010–2011 earthquakes changed Christchurch and the lives of many families. <i>Teacher: handle with whānau sensitivity; some students have lived this. Offer a choice to join in or simply listen.</i>"},
    {title:"Why do people rebuild, and why do they leave?", icon:"scroll", body:"People rebuild when a place has something they cannot easily replace: <b>resources</b> (fertile land, water, a harbour), a good <b>location</b> (on a trade route or at a crossroads), and <b>identity</b> (it is where ancestors, whānau and memories are). People leave when the resources have gone, when the danger is too great, when the reason for the city has ended (as when a capital falls), or when they are forced out. Often a place is partly rebuilt, partly changed, and partly remembered."}],
   teacher:[
    "Persepolis (4 min): return to the photo. Ask: ‘What lasted? What did not? Why?’ (stone vs wood and mud brick). Explain that the site was not rebuilt, and that people later chose other places nearby.",
    "New cities (3 min): trace Alexandria on the map. Ask: ‘Which of the four settlement questions from Week 1 does it answer? (water, soil, defence, trade).’ Link to the settlement hierarchy from Week 3.",
    "Earthquakes (4 min): show the Bam photos, then Napier. Say: ‘Many people in our community may know someone affected by an earthquake. You can always step out or listen.’ Use the word ‘recovery’ more than ‘disaster’. Do not use graphic images; show buildings and people rebuilding.",
    "Reasons to rebuild (4 min): draw a three-column chart on the board: resources, location, identity. Students add examples from Persepolis, Alexandria, Bam and Napier.",
    "Model the first step of each Path (2 min)."]
  },
  paths:[
   {id:"A", name:"Reconstruct Persepolis", icon:"home",
    brief:"Draw a two-part diagram of part of Persepolis. On the left, draw the ruin as it looks today and label what has survived. On the right, draw your imagined whole building, and explain how you used the clues.",
    checklist:["The ruin side shows at least three labelled surviving features (columns, steps, stone doorway…)","The reconstruction side adds what has been lost (roof, wooden beams, paint…)","I used two clues from the ruins to decide what to add","I explained why some materials survived and others did not","I wrote one sentence about why people today look after the ruins"],
    scaffold:"<b>Label bank:</b> column · base · staircase · doorway · terrace · roof beam · mud-brick wall. <br><b>Clue frame:</b> I added a ___ because I could see ___ in the ruins. <br><b>Why it survived:</b> The ___ lasted because it was made of ___. The ___ did not because …",
    diff:{supported:"Use a printed outline of the ruin and a label bank. Draw the missing parts on tracing paper over the top and complete the clue frame.",
          standard:"Draw both halves independently with labels and explain two clues.",
          extended:"Add a third panel showing what archaeologists are still not sure about, and what evidence they would need to be more certain."}},
   {id:"B", name:"Rebuild Plan: A Town after a Disaster", icon:"compass",
    brief:"A small imagined town has been badly damaged by an earthquake. Using the rebuild-plan cards, decide what to rebuild first, second and third, and explain your priorities. Draw a plan map showing the new town.",
    checklist:["I ranked at least five priorities","I gave a reason for each of my top three","I thought about safety (for example not rebuilding on a fault or flood-prone ground)","My plan map has a title, key and compass rose","I thought about the people who live there and asked ‘What do they need?’"],
    scaffold:"<b>Priority ladder:</b> First: ___ because … Second: ___ because … Third: ___ because … <br><b>Safety:</b> We will build away from ___ because … <br><b>People:</b> The people need ___ so we will include ___.",
    diff:{supported:"Use the priority cards and a printed outline of the town; place the cards in order and complete the ‘because’ frames for your top three.",
          standard:"Rank your own priorities, justify the top three, and draw the plan map with all conventions.",
          extended:"Add a ‘consultation’ section: write what a farmer, a nurse and a child might each want first, and explain how you would make a fair decision."}},
   {id:"C", name:"Then and Now Venn", icon:"scroll",
    brief:"Compare what happened after the burning of Persepolis with what happened after the 1931 Napier earthquake. Make a Venn diagram, then write three sentences to explain the most important similarity and difference.",
    checklist:["The Venn has at least three items in each circle and three in the middle","I compared the cause (fire and war vs earthquake)","I compared what happened next (abandoned vs rebuilt)","I gave one reason for the difference","I wrote with care and respect for people who lived through disasters"],
    scaffold:"<b>Think about:</b> Cause · Who rebuilt it? · Was it rebuilt? · Why / why not? · What do we still see today? <br><b>Sentence frames:</b> One similarity is … One difference is … I think Napier was rebuilt because … but Persepolis was not because …",
    diff:{supported:"Use the sorted cards (one for each fact) and place them in the Venn. Complete the three sentence frames.",
          standard:"Create your own Venn using the Discovery notes and write three sentences.",
          extended:"Add a third circle, either Alexandria or Bam, and decide which place shows the strongest ‘will to rebuild’. Use evidence."}}
  ],
  councilFire:{
   see:{refs:["Psalm 46:1–3","Isaiah 61:4"],
        text:"The psalmist sings that God is our refuge and strength, always ready to help in trouble, so that even if the earth shakes and the mountains fall into the sea, we need not be afraid. Isaiah promises that God’s people will rebuild the ancient ruins and restore the places that have been devastated for generations."},
   wonder:"Where do we find security when our homes or cities shake? What does it mean to say that God is a ‘refuge’?",
   weigh:"The psalm does not say that earthquakes never happen: it says that God is with people in the middle of them. Isaiah’s promise is about people rebuilding together. How does a faith that says ‘do not be afraid’ fit with being careful (for example planning safe buildings)? Is trusting God the same as ignoring risk?",
   respond:"Write a short prayer for people who are rebuilding after hardship, here or anywhere in the world. You may keep it private, or share it with your Caravan.",
   teacher:"Some students may have lived through earthquakes, either in Canterbury or in other countries, so use gentle language and offer a choice to participate. Do not promise that God prevents disasters. Psalm 46 is a poem of trust, not a promise of safety from every harm. Christians also take practical steps: building safely, helping neighbours, and rebuilding. Say that the same Psalm is loved by Jewish and Christian readers, and that many people of different faiths find comfort in a sense of refuge.",
   verses:["Ps 46:1–3","Isa 61:4"]},
  assess:{
   evidence:"The Path product (photographed); a cause–effect explanation (‘The city was ___, so ___’); the quality of reasons for the rebuild priorities.",
   rubric:["Describes one change to a settlement with support.","Describes how war, fire or an earthquake changed a place and gives one reason for rebuilding or leaving.","Explains why places are rebuilt or abandoned using resources, location and identity, with examples.","Compares an ancient and a modern example, weighs the reasons for different outcomes and shows care for the people involved."]},
  nzConnection:"Napier’s Art Deco rebuild after 1931 and the changes to Christchurch after 2010–2011 are part of our national story. Ask: what did people want to keep, and what did they decide to change? Invite your Māori Education lead or local rūnanga to share how the earthquakes and the rebuild are remembered in your rohe, and let students choose whether to take part. Avoid generalising across iwi.",
  sensitivity:"Natural disasters touch real lives. Some students and staff may have lost homes, loved ones or school buildings in the Canterbury earthquakes or elsewhere. Use recovery language, avoid distressing images, allow students to opt out, and be ready to talk with a student who becomes upset. Bam is an Iranian city whose people are still living there: treat it with respect, as a place of resilience.",
  inquiry:["Did students link the survival of materials to what they could see in the ruins?","Who named at least two reasons for rebuilding with an example?","Was the rebuild plan debate respectful and sensitive for all students?"],
  widgets:[
   {type:"sort", title:"Rebuilt or Abandoned?", prompt:"Sort each place: was it rebuilt, left as a ruin, or both in part?",
    bins:["Rebuilt","Left as ruins or faded away","Partly rebuilt"],
    items:[{t:"Napier after the 1931 earthquake",bin:0},{t:"Persepolis after the fire",bin:1},{t:"Alexandria in Egypt (founded 331 BC)",bin:0},{t:"The citadel of Bam after the 2003 earthquake",bin:2},{t:"Persepolis today as a World Heritage Site",bin:1},{t:"Many of Alexander’s other new cities",bin:1},{t:"Christchurch central city after 2011",bin:2}]},
   {type:"match", title:"Settlement Change Words", prompt:"Match each word to its meaning.",
    pairs:[["Ruin","What is left after a building has been destroyed or has fallen"],["Abandon","To leave a place and not come back"],["Rebuild","To build again after damage"],["Tectonic plates","Huge slabs of rock that make up the earth’s surface"],["Adobe","Bricks made from mud and straw, dried in the sun"],["Heritage","Places and traditions passed down that people want to protect"]]},
   {type:"order", title:"From Ruin to Recovery", prompt:"Put these steps of a rebuild in a sensible order.",
    items:["The disaster happens and people are rescued","Emergency shelter, food and water are provided","The damage is checked and the land is tested for safety","The community decides what to rebuild first","New buildings are made safer and strong","People gather to remember what was lost and celebrate what has been rebuilt"]},
   {type:"reveal", title:"Why Rebuild Here?", prompt:"Tap each card to see why people choose to rebuild a place.",
    cards:[{front:"Resources",back:"Fresh water, farmland, a harbour or building stone are hard to replace. Alexandria’s harbour is a good example."},{front:"Location",back:"A place on a trade route or at a crossroads is useful, so people keep returning to it."},{front:"Identity",back:"People rebuild a place when it holds the memories, stories and ancestors of their community. This is true of Bam’s citadel and of many places in Aotearoa."},{front:"When people choose to leave",back:"If the danger is too great or the reason for the city has gone (as when a royal capital falls), people may move on and the ruin becomes a heritage site."}]}
  ]
 },

 /* ====================================================================== WEDNESDAY */
 wed:{
  id:"w8-wed", day:"wed", subject:"Science — Extinction and Conservation",
  title:"Gone or Going: Why Animals Disappear and How We Can Help",
  tagline:"Who is missing from the old Persian lands, and what can we do?",
  nzc:["SC-LW-Eco","SC-NoS-P","MA-S","EN-W"],
  kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
  values:["Ecological sustainability","Community & participation","Inquiry & curiosity"],
  li:"We are learning to explain why species become endangered and what people can do to help.",
  sc:["I can define extinct, endangered and critically endangered.","I can name three causes of species loss.","I can propose an action plan to help one species."],
  vocab:[
   {w:"extinct",d:"When every individual of a species has died, and the species is gone for ever."},
   {w:"endangered",d:"At serious risk of becoming extinct."},
   {w:"critically endangered",d:"At extremely high risk of becoming extinct soon."},
   {w:"habitat loss",d:"When the natural home of a species is cleared, damaged or broken up."},
   {w:"introduced species",d:"A plant or animal brought by people to a place where it did not live before."},
   {w:"conservation",d:"Protecting and caring for nature, and for species at risk."},
   {w:"kaitiakitanga",d:"Guardianship and care for the environment, a Māori concept. (Learn more with your local iwi or Māori Education lead.)"},
   {w:"population",d:"All the living things of one kind in a place (from Week 1)."}],
  resources:["Silhouette cards for the Zoo of the Missing (print from the Teacher View)","Endangered species data cards: Caspian tiger, Asiatic cheetah, Persian leopard, Caspian seal, moa, huia, kākāpō, takahē","Graph paper and rulers; the rounded kākāpō counts table (see Path C)","Persuasive letter planning sheet","Kaitiaki Pledge cards (print from the Teacher View)","The animal cards you have already collected: Caspian tiger, Asiatic cheetah, Persian leopard (look back at Weeks 2 and 3)"],
  dispatch:{
   title:"Zoo of the Missing",
   story:"At dawn the caravan reaches an old royal hunting park, and it is silent. Shirin lines up four dark silhouettes on a stone wall. ‘Some of these animals still live in the old lands of Persia, and some do not. Which is which, Courier? And before you guess, remember: Gandom has already guessed, and she says they are all just clouds.’ The silhouettes wait, still and black against the morning light.",
   easy:"Look at the four dark shapes. Some of these animals are gone for ever. Some are almost gone. Can you tell which is which?",
   teacher:[
    "Retrieval (2 min): Tuesday on mini-whiteboards: name one reason a city is rebuilt; what survived at Persepolis and why; how does Alexandria answer the settlement questions?",
    "Zoo of the Missing (6 min): show four silhouette cards one at a time: Caspian tiger, Asiatic cheetah, Persian leopard, Caspian seal. Students hold up one of three cards (EXTINCT / ENDANGERED / SAFE) for each. Ask for a ‘because’.",
    "Reveal (2 min): Caspian tiger is extinct (gone by about the 1970s); the Asiatic cheetah is critically endangered, with only a handful surviving in Iran; the Persian leopard is endangered; the Caspian seal is also in serious trouble. Remind students that they have these animals as cards from Weeks 2 and 3. Gandom is wrong again.",
    "Reassure: this lesson is about hope and action, not only sadness. Share LI/SC."],
   retrieval:"Tuesday: one reason a city is rebuilt; what survived at Persepolis and why; one example of a place that was rebuilt."
  },
  discovery:{
   intro:"Some species are gone, some are hanging on, and some have been brought back from the brink. Find out why, and what makes the difference.",
   cards:[
    {title:"Extinct, endangered, critically endangered", icon:"book", body:"<b>Extinct</b> means that every individual has died: the species is gone for ever. <b>Endangered</b> means that a species is at serious risk of extinction. <b>Critically endangered</b> means the risk is extremely high. Scientists keep lists of species and how safe they are, and the words matter because they tell us how urgent the help is."},
    {title:"Four big causes", icon:"gear", body:"<b>Habitat loss:</b> forests, wetlands and grasslands are cleared for farms, towns and roads. <b>Hunting:</b> animals are killed for their skins, meat, horns or as trophies, or because people fear them. <b>Introduced species:</b> new predators, pests or diseases arrive and native animals cannot cope. <b>Climate and pollution:</b> a changing climate, polluted water and plastic can harm species, especially those living in one small place. Most species are in trouble for <i>more than one</i> reason."},
    {title:"The old Persian lands", icon:"paw", body:"The <b>Caspian tiger</b> (a cousin of the Siberian tiger) lived in forests and reedbeds around the Caspian Sea. It was hunted, its forests were cleared and its prey was lost, and it was extinct by about the <b>1970s</b>. The <b>Asiatic cheetah</b> is critically endangered: today only a small number, perhaps a few dozen at most and likely fewer, survive in Iran. The <b>Persian leopard</b> is endangered, though more numerous. The <b>Caspian seal</b>, which lives only in the Caspian Sea, is seriously endangered because of fishing nets, pollution and a changing sea. Iranian scientists and rangers are working to protect them."},
    {title:"Aotearoa’s lost and found birds", icon:"star", body:"When people arrived in Aotearoa the land had no land mammals except bats, and the birds had few predators. The giant <b>moa</b> became extinct in a few hundred years after people arrived, through hunting and forest loss. The <b>huia</b> was lost by the early 1900s, and the last widely accepted sighting was in <b>1907</b>. But some stories are about hope: the <b>takahē</b>, thought extinct, was found again in Fiordland in <b>1948</b>, and now there are about <b>500</b>. The <b>kākāpō</b>, a flightless parrot, fell to about <b>50</b> birds in the 1990s, and has been brought back to more than <b>200</b> through intensive care and predator control."},
    {title:"What works?", icon:"compass", body:"Conservation works best when it combines several things: <b>protected areas</b> (reserves, national parks, predator-free islands), <b>breeding programmes</b> (to raise numbers and spread the risk), <b>predator control</b> (traps and fences), and <b>community action</b> (farmers, schools, iwi and volunteers working together). In the south, Ngāi Tahu and the Department of Conservation are partners in caring for species such as the kākāpō. Ask your local Māori Education lead or rūnanga how kaitiakitanga is practised in your rohe, and take care not to generalise across iwi."}],
   teacher:[
    "Definitions (3 min): build a three-step ladder on the board: safe → endangered → extinct. Add ‘critically endangered’ between endangered and extinct. Ask for an example of each from the Zoo of the Missing.",
    "Causes (4 min): four corners activity. Label the four corners habitat loss, hunting, introduced species, climate and pollution. Call out an animal story and students move to the corner they think is the main cause. Remind them that many species have more than one cause.",
    "Persian and NZ stories (5 min): use the species cards. Say clearly: ‘the Caspian tiger is gone, but the kākāpō and takahē show that recovery is possible.’ Be matter-of-fact about hunting and keep it free of blame or gore.",
    "What works (3 min): ask students to match each solution to a problem: predator fence → introduced predators; reserve → habitat loss; breeding centre → tiny populations. Take three examples.",
    "Hand out the Path materials, and model the first step of each (2 min)."]
  },
  paths:[
   {id:"A", name:"Awareness Campaign: Save the Asiatic Cheetah", icon:"paw",
    brief:"Create a poster or short advertisement script to raise awareness of the Asiatic cheetah. Include a clear message, two facts, and one thing people can do to help.",
    checklist:["A clear slogan or headline","At least two accurate facts (for example how many remain, why it is in danger)","At least one action people can take","A picture that matches the message","I used careful, honest words (for example ‘only a few remain’ not ‘there are exactly …’)"],
    scaffold:"<b>Headline:</b> ‘Save the ___!’ <br><b>Facts:</b> The Asiatic cheetah is ___. It is in danger because ___. <br><b>Action:</b> You can help by … <br><b>Call to action:</b> Join us and …",
    diff:{supported:"Use the poster template with a slogan bank and two fact cards. Choose one action from the list.",
          standard:"Design your own poster or script with two facts, one action and a strong slogan.",
          extended:"Design a three-part campaign (poster, slogan and social-media post) for different audiences, such as children, farmers and visitors, and explain how each is different."}},
   {id:"B", name:"Persuasive Letter to a Decision-Maker", icon:"scroll",
    brief:"Write a letter to a person who can help a threatened species (for example a minister, a mayor, or the head of a conservation organisation). Ask for a specific action and support your request with evidence.",
    checklist:["I addressed a real or imagined decision-maker by title","I opened with a clear request","I used at least three pieces of evidence","I explained what would happen if nothing is done","I ended politely, with a clear thank-you and a request for a reply"],
    scaffold:"<b>Opening:</b> Dear ___, I am writing to ask you to … <br><b>Evidence:</b> First, … Second, … Third, … <br><b>If nothing is done:</b> Without help, the ___ could … <br><b>Closing:</b> Thank you for reading. I hope you will …",
    diff:{supported:"Use the letter frame and the evidence cards. Choose three facts, then write sentences with your partner.",
          standard:"Write a complete letter with three pieces of evidence and a polite request.",
          extended:"Add a paragraph answering an objection (for example ‘it costs too much’) with a reasoned reply, and compare the cost with the value of the species."}},
   {id:"C", name:"Data Detectives: Kākāpō Numbers", icon:"compass",
    brief:"Use the rounded kākāpō population table to draw a line graph, and then predict what might happen next. Explain what the graph shows and what could change it.",
    checklist:["I drew labelled axes (years across, number of birds up)","I plotted all four points accurately","I joined the points and gave the graph a title","I wrote what the graph shows (‘The population has…’)","I made a prediction and gave a reason for it, using careful words such as ‘might’ or ‘probably’"],
    scaffold:"<b>Rounded data (approximate; check the Department of Conservation website for the latest numbers):</b> 1995: about 50 · 2005: about 85 · 2015: about 125 · 2020: about 210 <br><b>Sentence frames:</b> Between ___ and ___ the population rose from ___ to ___. <br><b>Prediction:</b> I think the population might ___ because …",
    diff:{supported:"Use pre-drawn axes with the scale marked. Plot the four points and complete the sentence frames.",
          standard:"Draw your own axes, plot, label and write a short explanation and prediction.",
          extended:"Work out the increase between each pair of years and compare the rates. Why might the rate change? What would you need to know to make a better prediction?"}}
  ],
  councilFire:{
   see:{refs:["Genesis 1:26–28","Genesis 2:15","Psalm 72:12–14"],
        text:"In Genesis 1, God makes people in His image and gives them the task of ruling over the living things of the earth. In Genesis 2, the first man is put in the garden to work it and to take care of it. In Psalm 72, the ideal king rescues the poor who cry for help, the weak and those who have no helper, and he cares about their lives."},
   wonder:"What does it mean to ‘rule’ over creation? What do you think God wants us to do for the animals of the earth?",
   weigh:"Some people hear the word ‘rule’ and think of taking what they want. But the Bible puts it next to words like ‘work’ and ‘take care’, and the psalm describes a ruler who rescues the weak. How might that shape the way we treat vulnerable species? (Christians understand the word ‘rule’ in different ways, and many connect it to Jesus’ example of serving.)",
   respond:"Sign a Kaitiaki Pledge: write ONE promise to care for a part of the natural world, and one small action you can start this week.",
   teacher:"Genesis 1:26–28 has been understood in different ways: avoid presenting one reading as the only Christian view. The common thread to emphasise is care and responsibility. Say that kaitiakitanga is a Māori concept with its own meanings, and invite your Māori Education lead to explain it, rather than treating it as a synonym for ‘care’. Be matter-of-fact about hunting. Make sure students leave with hope: there are real success stories.",
   verses:["Gen 1:26–28","Gen 2:15","Ps 72:12–14"]},
  assess:{
   evidence:"Accuracy of definitions (extinct, endangered); use of at least two pieces of evidence in the poster, letter or graph; the quality of the prediction and its reasoning.",
   rubric:["Names an endangered or extinct animal with support.","Defines extinct and endangered, and gives two causes with an example for each.","Explains why species are lost and what helps, using at least three pieces of evidence, and uses data accurately.","Evaluates different solutions, explains trade-offs (for example people’s needs vs wildlife), and makes a reasoned prediction with careful language."]},
  nzConnection:"New Zealand has some of the world’s most remarkable conservation stories: kākāpō, takahē, kiwi, and predator-free islands and sanctuaries (for example Zealandia). Our moa and huia are gone for ever. Invite DOC, a local conservation group, or your Māori Education lead to share how people in your rohe look after native species. Avoid pan-Māori generalisations.",
  sensitivity:"Extinction can feel sad or frightening. Present it as a reason to care and to act, not to panic. Keep hunting matter-of-fact. The Asiatic cheetah is a symbol of Iran: speak of conservation efforts by Iranian scientists and rangers with respect. Avoid giving exact counts for cheetahs or tigers that may change: say ‘only a few’ or ‘about’.",
  inquiry:["Could students define ‘extinct’ and ‘endangered’ without mixing them up?","Did their evidence show more than one cause for each species?","Which students ended with a realistic action, and which with a hope only?"],
  widgets:[
   {type:"sort", title:"Extinct, Endangered or Common?", prompt:"Sort each animal into the right group.",
    bins:["Extinct","Endangered or critically endangered","Common (not at risk)"],
    items:[{t:"Caspian tiger",bin:0},{t:"Moa",bin:0},{t:"Huia",bin:0},{t:"Asiatic cheetah",bin:1},{t:"Persian leopard",bin:1},{t:"Caspian seal",bin:1},{t:"Kākāpō",bin:1},{t:"Takahē",bin:1},{t:"House sparrow",bin:2},{t:"Mallard duck",bin:2}]},
   {type:"match", title:"Match the Conservation Idea", prompt:"Match each word to its meaning, or each solution to the problem it helps.",
    pairs:[["Extinct","Every individual has died and the species is gone for ever"],["Endangered","At serious risk of becoming extinct"],["Introduced species","A plant or animal that people brought to a new place"],["Predator-free island","A place where pests have been removed so that native birds can recover"],["Breeding programme","Raising young animals with care to increase numbers"],["Kaitiakitanga","Guardianship and care of the environment (a Māori concept)"]]},
   {type:"order", title:"How a Species Slides Towards Extinction", prompt:"Put this chain of events in order.",
    items:["The animal’s habitat is cleared or damaged","Its food becomes harder to find","The population falls and groups become isolated","Fewer young are born and survive","Only a few animals remain, and the species is critically endangered"]},
   {type:"reveal", title:"Zoo of the Missing: Fact Files", prompt:"Tap each card to see the facts.",
    cards:[{front:"Caspian tiger",back:"Extinct (gone by about the 1970s). Hunted, and its river forests and prey were lost. A reminder of what can disappear."},{front:"Asiatic cheetah",back:"Critically endangered. Only a small number survive, in Iran. People are working hard to protect them, and every animal matters."},{front:"Persian leopard",back:"Endangered. Lives in mountains of Iran and neighbouring lands. Habitat loss and hunting are threats."},{front:"Caspian seal",back:"Seriously endangered. Lives only in the Caspian Sea. Fishing nets, pollution and a changing sea are threats."},{front:"Kākāpō (Aotearoa)",back:"A flightless parrot that fell to about 50 birds. Today there are over 200 thanks to intensive care and predator control: a hopeful story."}]}
  ]
 },

 /* ====================================================================== THURSDAY */
 thu:{
  id:"w8-thu", day:"thu", subject:"Art — Tone, Contrast and Light",
  title:"Fire and Ruin: Light, Shadow and Hope",
  tagline:"Draw the darkness, and then draw the one small light.",
  nzc:["VA-DI","VA-PK","VA-CI","VA-UC"],
  kc:["Thinking","Using language, symbols & texts","Managing self"],
  values:["Excellence","Innovation, inquiry & curiosity","Respect"],
  li:"We are learning to use tone and contrast to express feeling in a drawing.",
  sc:["I can use charcoal or chalk to build a range of tones from light to dark.","I can use light and dark together to make a scene dramatic.","I can explain the feeling my artwork shows."],
  vocab:[
   {w:"tone / value",d:"How light or dark something is."},
   {w:"value scale",d:"A strip that shows tone changing from white to black in steps."},
   {w:"contrast",d:"The difference between light and dark (or between colours) next to each other."},
   {w:"silhouette",d:"A solid dark shape seen against a lighter background."},
   {w:"focal point",d:"The part of the picture where the eye goes first."},
   {w:"smudge / blend",d:"To spread charcoal or chalk to make soft tones."},
   {w:"mood",d:"The feeling an artwork gives."},
   {w:"diptych",d:"An artwork made of two panels that go together."}],
  resources:["Charcoal sticks and compressed charcoal, white chalk or pastel, soft erasers, tissue for smudging","Grey or off-white sugar paper; black paper","Orange and red tissue paper, gold paint, glue sticks, scissors","Images of dramatic night scenes and ruins (app or printed), including photos of Persepolis columns at dusk","Value-scale strip templates (print from the Teacher View)","Fixative (teacher use only) or hairspray for the finished work; aprons and wet wipes"],
  dispatch:{
   title:"How Do You Draw Smoke?",
   story:"It is dusk. The fires have sunk into red embers, and the ruined columns stand black against the sky. Shirin holds a charcoal stick in her fingers, and her hands are already grey. ‘Look carefully, Courier. How would you draw smoke? How would you draw firelight on a stone? An artist can make us feel a thing without saying a word. Try making the darkest mark you can, and then the lightest. How many different greys can you make in between?’",
   easy:"Look at the picture of a night scene. How does the artist show fire, smoke and shadow? Try making the darkest and the lightest marks you can.",
   teacher:[
    "Retrieval (2 min): Wednesday on mini-whiteboards: what does extinct mean; name one cause of species loss; name one species that was brought back by conservation.",
    "Show 3–4 dramatic night paintings or photographs, including ruins at dusk. Ask: ‘How do you know it is night? Where is the light? What do you feel?’ Sensitivity: keep the images about ruins and light, not about violence (3 min).",
    "Value scale challenge (5 min): students make a five-step strip from the lightest to the darkest using charcoal and tissue. Show that pressing hard and lightly make different tones.",
    "Take two quick shares. Share LI/SC."],
   retrieval:"Wednesday: what extinct means; one cause of species loss; one success story from conservation."
  },
  discovery:{
   intro:"The darkest picture needs a spark of light. Learn how artists use tone, contrast and one small glow to tell a story of loss and hope.",
   cards:[
    {title:"A scale of tones", icon:"star", body:"<b>Tone</b> (or <b>value</b>) means how light or dark something is. A <b>value scale</b> goes from white, through greys, to black. Using many steps makes a drawing look solid and real, while using only two makes it look flat. Charcoal is perfect for this: press lightly for pale tones, harder for deep ones, and smudge to blend."},
    {title:"Contrast and drama", icon:"flame", body:"<b>Contrast</b> is the difference between light and dark that sit side by side. The stronger the contrast, the more dramatic the picture. A bright ember beside a black shadow shines, but the same ember in a bright field would not. Artists place the strongest contrast where they want you to look: the <b>focal point</b>."},
    {title:"Silhouettes", icon:"ibex", body:"A <b>silhouette</b> is a dark shape against a lighter background, so you can recognise it from the outline alone. Tall columns with bull-headed tops (like those at Persepolis), a broken doorway, a camel and a rider can all be powerful silhouettes against a glowing sky."},
    {title:"Drawing fire, smoke and ruin", icon:"scroll", body:"To draw <b>smoke</b>: smudge soft, curling shapes and lift out lighter areas with an eraser. To draw <b>firelight</b>: put the lightest tones right next to the darkest. For <b>ruins</b>: use broken, uneven lines and strong shapes. The ruin shows loss. The glow shows warmth. And the people or lamps in the drawing remind us that someone is still here."},
    {title:"The one small light", icon:"home", body:"Many artists add a <b>small spark of hope</b> to a dark scene: a lamp in a window, a green shoot in the ashes, a single star. It is small, but because the surroundings are dark, it becomes the focal point. This week our Courier carries a small lamp out of the fire. Where would you put yours?"}],
   teacher:[
    "Value scale (4 min): demonstrate on the board: lightest to darkest in five steps with chalk and charcoal. Students check their dispatch strips against it.",
    "Contrast and focal point (4 min): show one dark picture with a single bright spot. Ask: ‘Where did your eye go first? Why?’ Cover the light and ask again.",
    "Silhouettes (3 min): cut a column silhouette from black paper and hold it against an orange tissue sky. Students describe the mood.",
    "Techniques (4 min): demonstrate smudging, lifting with an eraser, and drawing with the side of the charcoal. Remind students that charcoal is dusty: wipe hands, and keep it away from clothes and faces.",
    "Hope in the dark (2 min): ask students to decide where their ‘one small light’ will go. Model the first step of each Path."]
  },
  paths:[
   {id:"A", name:"Charcoal and Chalk Night Scene", icon:"flame",
    brief:"Draw a night scene of ruined columns under a smoky sky. Use charcoal for the darks and chalk for the lights, build at least five tones, and add one small light as your focal point.",
    checklist:["My drawing has at least five different tones","The strongest contrast is at my focal point","The columns are drawn as strong silhouettes","I used smudging for smoke and an eraser for highlights","I added one small light of hope","I can explain the mood in one sentence"],
    scaffold:"<b>Steps:</b> 1 Tone the whole page with soft grey. 2 Draw the horizon and the shapes of the columns lightly. 3 Fill the columns and the ground with deep black. 4 Smudge the smoke. 5 Lift out highlights and add chalk glow near the horizon. 6 Add the small light. <br><b>Artist’s statement:</b> My picture feels ___ because I used ___. The small light shows ___.",
    diff:{supported:"Use a pre-toned page with a light pencil outline of the columns. Work with your value strip beside you, and use the artist’s statement frame.",
          standard:"Draw independently with five tones, a focal point and an artist’s statement.",
          extended:"Draw two light sources (for example fire and moon) and show how each lights the stone differently. Explain how contrast controls the mood."}},
   {id:"B", name:"Mixed-Media Collage: Ruins in Fire and Gold", icon:"star",
    brief:"Make a collage of ruined columns in black paper against a glowing sky of orange and red tissue, with a touch of gold paint as your small light.",
    checklist:["Black paper silhouettes in a clear, strong shape","Layered tissue in at least three colours for the sky","Gold used sparingly as a focal point","The layers overlap in a pleasing way","I can explain my choice of colours and shapes"],
    scaffold:"<b>Steps:</b> 1 Tear and layer tissue on a white page, light at the horizon and darker at the top. 2 Cut or tear the black silhouettes. 3 Glue them over the sky. 4 Add one touch of gold. <br><b>Artist’s statement:</b> I chose ___ for the sky because … The gold shows …",
    diff:{supported:"Use pre-cut column templates and pre-torn tissue. Choose where to glue and add your gold.",
          standard:"Create the collage independently, with an artist’s statement.",
          extended:"Add a second layer of texture (for example rubbing charcoal over the tissue, or pressing lines into the gold) and explain how texture adds to the mood."}},
   {id:"C", name:"Ruins to Restoration Diptych", icon:"home",
    brief:"Make a two-panel artwork: on the left, a ruined scene in dark tones; on the right, the same scene imagined as it was, or as it could be rebuilt, with warmer light. The two halves must clearly belong together.",
    checklist:["Both panels show the same scene from the same viewpoint","The left panel is dark and the right panel has more light","The composition matches across the two panels (the same landmarks)","I used contrast in both panels","I can explain what changes from left to right, and what stays the same"],
    scaffold:"<b>Plan:</b> 1 Choose the scene (columns, a gate, a garden). 2 Sketch the outline lightly on both panels. 3 Use dark charcoal and strong contrast on the left. 4 Use lighter tones, chalk and a touch of colour on the right. <br><b>Artist’s statement:</b> The left shows ___ and the right shows ___. The thing that stays the same is …",
    diff:{supported:"Use a printed outline of the scene on both panels and focus on the tones. Complete the statement frame.",
          standard:"Draw both panels independently with matching composition and an artist’s statement.",
          extended:"Add a middle panel showing the moment of change, and explain how the three panels tell a story of hope."}}
  ],
  councilFire:{
   see:{refs:["Isaiah 61:3","Psalm 126"],
        text:"Isaiah promises that God will give a crown of beauty in place of ashes, the oil of joy in place of mourning, and a garment of praise in place of a faint spirit. Psalm 126 recalls a time when God brought His people home, and says that those who sow in tears will reap with songs of joy."},
   wonder:"What does ‘beauty for ashes’ mean? Can something beautiful come out of something broken?",
   weigh:"Art can mourn and it can hope, and often it does both. Think of your drawing: does the darkness take away the light, or does it help the light to shine? Is it honest to show the dark parts of a story? Is it also honest to show hope?",
   respond:"Write a one-line hope statement to go with your artwork, such as ‘Even in the dark, ___.’ Share it with a partner if you wish.",
   teacher:"Keep the tone gentle: students may be thinking about a real loss in their lives. Offer them the choice of drawing a ‘ruin’ that is just stone and shadow. Say that many faiths and cultures use light as a symbol of hope, including Zoroastrian, Jewish, Muslim and Christian traditions, without claiming they mean the same thing. Psalm 126 is a song of the exiles’ return, so link back to Weeks 2 and 6.",
   verses:["Isa 61:3","Ps 126"]},
  assess:{
   evidence:"Range and control of tone (the value strip compared with the final drawing); use of contrast to create a focal point; the artist’s statement (1–2 sentences) explaining the mood.",
   rubric:["Makes marks in light and dark with support.","Uses at least three tones with some contrast and can name the feeling in the artwork.","Controls five or more tones, uses contrast deliberately to create a focal point, and explains the mood with art vocabulary.","Combines tone, silhouette and focal point with clear intent, explains how choices create meaning, and compares with other artworks."]},
  nzConnection:"Artists in Aotearoa have made powerful works about loss and hope, for example after Napier’s 1931 earthquake or in Canterbury after 2010–2011. Waiata, whakairo and other art forms also help communities to remember and to heal. Invite a local artist or your Māori Education lead to share, and take care with whānau who may have lived through these events. Do not imitate sacred or tapu designs.",
  sensitivity:"Ruin images must not be violent or graphic. Some students may connect a burning city with real fears (for example a house fire, a war on the news, or a refugee experience), so allow them to choose a gentler scene. Persepolis is a living heritage site for Iranian people: draw it as a place of beauty and memory, not just as a ruin. Be careful with fixative (teacher use only) and ventilation.",
  inquiry:["Did students use more than three tones and can they say where the strongest contrast is?","Who needed a gentler subject, and how did we respond?","How did the artist’s statements show students linking mood and technique?"],
  widgets:[
   {type:"match", title:"Art Words for Light and Dark", prompt:"Match each art word to its meaning.",
    pairs:[["Tone (value)","How light or dark something is"],["Value scale","A strip showing steps from white to black"],["Contrast","The difference between light and dark side by side"],["Silhouette","A solid dark shape against a lighter background"],["Focal point","Where the eye goes first"],["Diptych","An artwork made of two panels"]]},
   {type:"order", title:"Building a Charcoal Night Scene", prompt:"Put the steps in a sensible order.",
    items:["Tone the whole page with soft grey","Sketch the horizon and the shapes of the columns lightly","Fill the columns and the ground with deep black","Smudge the smoke and lift out highlights","Add the chalk glow and one small light"]},
   {type:"sort", title:"Drama or Calm?", prompt:"Sort each choice by the mood it usually creates.",
    bins:["Creates drama","Creates calm"],
    items:[{t:"A bright ember beside deep black",bin:0},{t:"A big jump from white to black",bin:0},{t:"A dark silhouette against a glowing sky",bin:0},{t:"A page of similar pale greys",bin:1},{t:"Soft, gentle blending with no hard edges",bin:1},{t:"A wide, quiet horizon with no strong shapes",bin:1},{t:"One tiny light in a huge dark space",bin:0},{t:"Even, soft colours across the whole page",bin:1}]},
   {type:"reveal", title:"How Do Artists Do It?", prompt:"Tap each card to see an artist’s trick.",
    cards:[{front:"Smoke",back:"Smudge soft, curling shapes with a tissue or finger, then lift lighter areas out with an eraser."},{front:"Firelight",back:"Put the brightest tone right beside the darkest. The contrast makes the light seem to glow."},{front:"Ruins",back:"Use broken, uneven outlines and strong silhouettes. The empty gaps show what is missing."},{front:"Hope",back:"Add one small light, such as a lamp or a star. In a dark picture it becomes the focal point."},{front:"Mood",back:"Many dark tones and strong contrast feel dramatic or sad. Soft, light tones feel calm or hopeful. Many artists use both."}]}
  ]
 },

 /* ====================================================================== FRIDAY */
 fri:{
  id:"w8-fri", day:"fri", subject:"Showdown",
  title:"SHOWDOWN: Fire on the Mountain",
  tagline:"Three lives each. Hold on to one another.",
  mode:"classic", fateEnabled:true, timeLimit:20,
  nzc:["SS-CC","SS-PE","SC-LW-Eco","VA-DI","RE"],
  kc:["Thinking","Managing self","Relating to others","Participating & contributing"],
  values:["Integrity","Community & participation","Excellence"],
  li:"We are learning to recall and apply our learning about Alexander and the fall of the empire, rebuilding, conservation and tone, and to support our Caravan when things go wrong.",
  sc:["I can answer questions about the fall of the empire, cities, endangered animals and art.","I can use what I learned in earlier weeks (sources, Cyrus, the Royal Road, Xerxes, Esther).","I can support my Caravan when we lose a life, and explain my thinking when I get something wrong."],
  creedPrompt:"Before the quiz, each Caravan writes a Lives Creed: ONE sentence about how you will hold on to each other and to hope when your team loses a life.",
  creedStarters:["When we lose a life, we will…","We will cling to each other by…","Even in the smoke, our Caravan will…","We will never blame…"],
  dispatch:{
   title:"Fire on the Mountain",
   story:"Smoke is still rising over the terrace, but the wind has begun to turn. ‘Every Caravan has three lives today,’ says Shirin, and her voice is steady. ‘You will lose some. That is how the fire works. But a Caravan that holds together can survive what a single runner cannot. Write your Creed, Courier. How will you cling to one another? How will you cling to hope?’ Far off, a small lamp flickers on the ash. The Showdown begins.",
   easy:"Today is Fire on the Mountain! Your team has three lives. Write a Creed about sticking together, then race in the quiz.",
   teacher:["Before the lobby opens, each team writes its Lives Creed on a strip and reads it aloud.","Teachers may display the Creeds beside those from Weeks 1 and 3.","Remind students that in Lives mode a wrong answer costs one life, and that teams can talk and encourage each other. Losing a life is part of the game, not a punishment.","Before starting, remind students of the recall areas: Alexander and the fall of the empire, rebuilding cities, endangered animals, charcoal and tone, and the earlier weeks."],
   retrieval:"The quiz is the retrieval."
  },
  questions:[
   {q:"Herodotus wrote about Persia, but he was a Greek. What should a good historian remember (Week 1)?", options:["His writing is always perfectly neutral","He may have his own point of view, so we compare him with other sources","He was Persian","Greek writers never wrote about Persia"], answer:1, boss:false, tag:"SS-DO", explain:"Every source has a point of view. Herodotus, Arrian and Plutarch were all Greek writers, so historians compare them with other evidence such as archaeology."},
   {q:"Which king let exiled peoples, including the Jews, return home (Week 2)?", options:["Cyrus","Xerxes","Darius III","Alexander"], answer:0, boss:false, tag:"SS-CC", explain:"Cyrus the Great allowed exiled peoples to return to their homelands, as in Ezra 1."},
   {q:"The Royal Road ran from Sardis to which Persian city (Week 3)?", options:["Athens","Babylon","Susa","Jerusalem"], answer:2, boss:false, tag:"SS-PE", explain:"The Royal Road ran about 2,700 km from Sardis in the west to Susa in south-west Iran, with relay stations along the way."},
   {q:"In 480 BC, Xerxes’ army burned which Greek city (Week 4)?", options:["Sparta","Athens","Troy","Corinth"], answer:1, boss:false, tag:"SS-CC", explain:"Xerxes’ army burned Athens in 480 BC. Greek writers say that this was later given as a reason for the burning of Persepolis, about 150 years later."},
   {q:"In the book of Esther, Esther became queen in the palace city of… (Week 5)", options:["Susa","Rome","Memphis","Sardis"], answer:0, boss:false, tag:"RE", explain:"Esther became queen at Susa, a royal city of the Persian kings."},
   {q:"The last king of the Achaemenid Persian Empire was…", options:["Darius I","Cyrus","Darius III","Xerxes"], answer:2, boss:false, tag:"SS-CC", explain:"Darius III ruled from about 336 BC until he was killed in 330 BC. Darius I (Week 3) had ruled nearly two centuries earlier."},
   {q:"Which battle in 331 BC opened the road to Babylon, Susa and Persepolis?", options:["Gaugamela","Marathon","Salamis","Thermopylae"], answer:0, boss:false, tag:"SS-CC", explain:"At Gaugamela in 331 BC Alexander defeated Darius III, and the road to the great Persian cities was open. Marathon, Salamis and Thermopylae were earlier battles in the Greek–Persian wars."},
   {q:"Ancient writers disagree about why Persepolis burned in 330 BC. What does a good historian do?", options:["Pick the most exciting story","Compare the accounts, check the archaeology, and say how sure we can be","Say that nothing happened","Only believe the Persian account"], answer:1, boss:false, tag:"SS-DO", teach:true, explain:"Some accounts say revenge, some say a drunken accident, and some modern historians say a deliberate political act. The burned layers show that there was a fire but not why. No Persian account survives, so we should say what we know and what we do not."},
   {q:"Which famous Egyptian port city did Alexander begin to build in 331 BC?", options:["Memphis","Thebes","Luxor","Alexandria"], answer:3, boss:false, tag:"SS-PE", explain:"Alexandria was founded in 331 BC beside the Nile delta. Its harbour and position helped it grow into one of the great cities of the ancient world."},
   {q:"BOSS ×2 — Which best explains how Alexander’s army defeated the much larger Persian Empire?", options:["Magic","Several causes together: tactics, leadership, command problems and distance","Luck only","A much bigger army"], answer:1, boss:true, tag:"SS-CC", teach:true, explain:"Historians suggest several causes: Alexander’s tactics and bold leadership, the difficulty of commanding a huge army of many peoples, the size of the empire and the surrender of some cities, and chance. No single cause tells the whole story."},
   {q:"The Caspian tiger is…", options:["Common in Iran today","Extinct (gone by about the 1970s)","A farm animal","Critically endangered with a few left"], answer:1, boss:false, tag:"SC-LW-Eco", teach:true, explain:"The Caspian tiger is extinct. Hunting, loss of its forest habitat and loss of its prey all played a part. The Asiatic cheetah is critically endangered, and in Aotearoa the kākāpō has been brought back by intensive conservation, so we know that action can help."},
   {q:"BOSS ×2 — In a dark artwork, why might an artist add one small bright light, to match the idea of ‘beauty for ashes’ in Isaiah 61?", options:["It is just decoration","It hides the ruins completely","It pretends that nothing sad happened","It draws the eye and shows hope still alive in the middle of loss"], answer:3, boss:true, tag:"VA-DI", explain:"Strong contrast makes the small light the focal point. Art can mourn what was lost and still hold on to hope, which is the heart of Isaiah’s promise of beauty in place of ashes."}
  ],
  teachingMoments:[],
  paths:[
   {id:"A", name:"Caravan Log", icon:"book",
    brief:"Reflect on your week: what you now know, what is still a mystery, and your Faith Thought.",
    checklist:["I wrote 3 things I now know","I wrote 1 thing that is still a mystery","I wrote a Faith Thought (what I learned about God or people)","I rated my own effort honestly"],
    scaffold:"<b>I now know…</b> <br><b>It is still a mystery…</b> <br><b>My Faith Thought:</b> This week I saw that God…",
    diff:{supported:"Use sentence starters and draw a picture instead of writing one of the answers.",
          standard:"Write all three sections in full sentences.",
          extended:"Connect two subjects (for example ruins and conservation, both about what we choose to protect) in one paragraph."}},
   {id:"B", name:"Question-Maker", icon:"scroll",
    brief:"Write 2 quiz questions with wrong-answer decoys for next week’s Showdown bank.",
    checklist:["Each question is clear","I wrote one correct answer and three believable decoys","I wrote a one-line explanation","I checked that the answer is correct"],
    scaffold:"<b>Question:</b> … <br><b>A)</b> … <b>B)</b> … <b>C)</b> … <b>D)</b> … <br><b>Correct:</b> … <br><b>Because:</b> …",
    diff:{supported:"Use the question frame; write one question with a partner.",
          standard:"Write two complete questions with explanations.",
          extended:"Write a Boss question that needs reasoning, not just recall."}},
   {id:"C", name:"Teach-Back Comic/Poster", icon:"star",
    brief:"Explain the week’s big idea to a younger child using a comic or poster.",
    checklist:["I picked ONE big idea","I used simple words a younger child would understand","I used at least 2 pictures","My comic/poster is neat and clear"],
    scaffold:"<b>Big idea:</b> … <br><b>Three steps to explain it:</b> 1 … 2 … 3 … <br><b>Check:</b> Could a Year 2 understand this?",
    diff:{supported:"Use a 4-panel comic template with captions provided to fill in.",
          standard:"Create your own comic/poster.",
          extended:"Add a ‘quiz the reader’ question at the end."}}
  ],
  councilFire:{
   see:{refs:["Daniel 2:44","Psalm 46:1–3","Isaiah 61:3","Genesis 2:15"],text:"This week we met a God who rules over the rise and fall of kingdoms, who is a refuge when the ground shakes, who gives beauty in place of ashes, and who puts people in the garden to take care of it."},
   wonder:"What did you notice this week about hope in hard times?",
   weigh:"Which idea made you think hardest: an empire that fell, a city that was rebuilt, an animal that is almost gone, or a small light in the dark?",
   respond:"Say your Lives Creed together. Pray for each other, for people who are rebuilding after hard times, and for the journey ahead.",
   teacher:"Keep this short and gentle, and end with hope. Some students may be carrying real sadness about loss, so celebrate how the Caravan held together, not just who won. Offer a quiet option for any student who needs it.",
   verses:["Dan 2:44","Ps 46:1–3","Isa 61:3","Gen 2:15"]},
  assess:{
   evidence:"Showdown data per concept tag (exportable); Victory Lap product; Lives Creed.",
   rubric:["Answers some questions with support.","Answers most questions accurately, including some from earlier weeks.","Explains why wrong answers were wrong, applies the ideas to new situations, and shows how sources and causes connect.","Writes strong questions with clear decoys and explanations, and connects ideas across several weeks."]},
  nzConnection:"Link back to the NZ connections of the week: whose stories of the past we hear; Napier and Canterbury rebuilds; kākāpō, takahē and the lost moa and huia; art that holds both loss and hope.",
  sensitivity:"Winning is not the point of the Showdown, and in Lives mode losing a life is part of the game. Some students may feel anxious about public rankings or about running out of lives, so offer the ‘anonymise names’ option. Check in with any student who has found this week’s themes (fire, earthquakes, extinction) difficult.",
  inquiry:["What did the Showdown data show? Which tags had the lowest success?","Which misconception needs re-teaching on Monday (a single cause for the fall of the empire, or ‘extinct’ vs ‘endangered’)?","What will I change next week?"],
  widgets:[]
 }
 }
};
})();
