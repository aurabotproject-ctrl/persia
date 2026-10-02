/* ===================================================================
   STAGE 3 — THE ROYAL ROAD  (Week 3 · full lesson data)
   Darius I (522–486 BC). Same schema as week01.js.
   NZ English spelling. Scripture is paraphrased — read from your own
   Bible translation in class.
   =================================================================== */
(function(){
const RR=window.RR; RR.WEEKS=RR.WEEKS||{};

RR.WEEKS[3] = {
 n:3,
 title:"The Royal Road",
 era:"522–486 BC",
 place:"Behistun, Susa, Persepolis, the Sardis–Susa road",
 fragment:"Fragment of the Swift Road",
 story:{
  briefing:"The road is longer than any story: 2,700 kilometres! A mudslide blocks the pass, and the Shadow Courier has left a riddle on the Rock of Behistun.",
  briefingFull:"Courier! Shirin here, mud to my knees. The Royal Road is longer than any story I know: about 2,700 kilometres from the sea at Sardis to the palace at Susa, and a mudslide has just buried the pass. Worse, someone has been up the Rock of Behistun in the night and left a riddle scratched beside the king’s great carving. This week you will learn how one king kept a vast empire connected with roads, coins, officials and records, and why a message that could take three months on foot could arrive in about a week. Pass the baton, Courier. The Swift Road is waiting.",
  shadowCourier:"A riddle scratched below the king’s carving on the Rock of Behistun.",
  shadowClue:"Scratched into the cliff beneath the king’s carving, in neat, fresh letters: ‘The king wrote it in three tongues so that all would read. Who reads it first… reads it best.’ The scratches are still pale. Whoever wrote them climbed a sheer cliff in the dark.",
  event:"The Royal Relay — Caravans pass the baton down the line, and every answer is a link in the chain.",
  fridayReveal:"The mud is cleared and the champions of Stage 3 run the final leg to the relay station. In the baton tube, wrapped in wool, lies the Fragment of the Swift Road. It hums faintly, as if it remembers every rider who ever carried it. Beside it lies a second scrap: a drawing of three lines of writing, and under it, in silver ink, the words: ‘Read all three.’"
 },
 materials:["Large map of the Royal Road (Sardis to Susa) with scale bar","String and scale rulers; calculators","‘Relay baton’ (scroll tube) with a short written message inside","Foil for darics; card for coin templates","Soap bars or air-dry clay with safe carving tools (plastic knives, blunt skewers, lolly sticks)","Balls of wool for the string web game; labels (grass, ibex, onager, leopard, lion, eagle, decomposer)","Large paper/butcher’s paper for the procession mural","Images of Apadana reliefs, the Behistun carving, lions and leopards","Mini-whiteboards; A–D answer cards (for offline Showdown)"],

 days:{
 /* ====================================================================== MONDAY */
 mon:{
  id:"w3-mon", day:"mon", subject:"History",
  title:"Darius the Organiser: Satraps, Coins, Roads & Law",
  tagline:"How do you hold the biggest empire in the world together?",
  nzc:["SS-CC","SS-ICO","SS-EW","EN-S"],
  kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
  values:["Inquiry & curiosity","Integrity","Community & participation"],
  li:"We are learning to explain how Darius held a huge empire together.",
  sc:["I can name four tools Darius used (provinces and satraps, coinage, the Royal Road, written records).","I can explain why each tool helped.","I can give a perspective on whether Darius was fair or controlling."],
  vocab:[
   {w:"empire",d:"Many lands and peoples ruled by one government or king."},
   {w:"satrap",d:"A governor who ran a province (satrapy) for the Persian king."},
   {w:"satrapy",d:"One of the provinces of the Persian Empire."},
   {w:"daric",d:"The Persian gold coin, showing a kneeling archer, introduced under Darius."},
   {w:"inscription",d:"Writing carved into stone or rock."},
   {w:"propaganda",d:"Information shaped to make a ruler look good and persuade people."},
   {w:"archive",d:"A place where official records are kept safe."},
   {w:"decree",d:"An official order or announcement from a ruler."}],
  resources:["Baton (scroll tube) and a short written message","Timeline strip with new date cards (522 BC, 518 BC, 516 BC)","Map of the empire’s provinces (app or printed)","Daric template and foil","Path A inspection-report sheet (print from the Teacher View)","Behistun Inscription image"],
  dispatch:{
   title:"The Relay Race",
   story:"Mud, rain and no road: the pass is blocked and the caravan has stopped. Shirin pulls a scroll tube from her pack. ‘A message must reach the king before sundown, Courier. Two ways to send it: whisper it down the line, or run it hand to hand. Which one will arrive correct? Which one will arrive first? Try both. And think about this: a king ruled lands from the sea to the mountains. How did his orders ever get there?’",
   easy:"Pass a message two ways: whispering down a line, and carrying a written scroll in relays. Which is faster? Which is more accurate?",
   teacher:[
    "BEFORE CLASS: write a 20-word ‘royal order’ on a slip of paper and put it in the baton tube. Prepare a second, identical-length order to whisper. Form Caravans of 4–5 (same teams as Weeks 1–2).",
    "Read Shirin’s dispatch aloud. Pause after ‘Which one will arrive correct?’",
    "Round 1 (3 min): whisper the order down a Caravan line. The last person says it aloud; compare it with the original. Expect giggles and mistakes.",
    "Round 2 (3 min): pass the baton in relay; the last student reads the written order aloud. Compare it with the original. Time both rounds.",
    "Discuss (2 min): Which was faster? Which was more accurate? What did couriers, stations and written messages give a king? Take two shares, without correcting yet.",
    "Share the Learning Intention and Success Criteria. Students read them chorally."],
   retrieval:"Start of the unit’s new stage. Quick link back: ‘Last week, Cyrus began an empire. Today we ask how the next king kept it together.’ One question: what did a good king need to hold lands together? (Take 2 ideas.)"
  },
  discovery:{
   intro:"One king, an enormous empire, and four big tools. Find out how Darius used them, and decide for yourself whether he was fair.",
   cards:[
    {title:"Darius takes the throne", icon:"scroll", body:"<b>Darius I</b> ruled from about <b>522 to 486 BC</b>. He was a Persian nobleman who became king after a time of upheaval following the death of Cyrus’s son Cambyses. The empire he ruled stretched from the Aegean Sea in the west to the Indus region in the east: probably the biggest the world had seen so far. Holding it together was a huge challenge."},
    {title:"Tool 1: provinces and satraps", icon:"compass", body:"Darius divided the empire into about <b>twenty or more provinces</b> called <b>satrapies</b> (the exact number depends on which list you read). Each was run by a governor called a <b>satrap</b>, who collected taxes and kept order. To check on them, the king sent inspectors. Greek writers call them ‘the King’s Eyes and Ears’. Persian rulers were not only strict: local laws and customs were often allowed to carry on."},
    {title:"Tool 2: the daric", icon:"star", body:"Darius introduced a <b>gold coin</b>, the <b>daric</b>, showing a kneeling archer. Gold and silver coins gave the empire a <i>standard</i> money that officials and soldiers could be paid with. Taxes, though, were still often paid in goods such as grain, animals and silver. Coins helped trade and organisation, but did not replace everything."},
    {title:"Tool 3: the Royal Road", icon:"horn", body:"The <b>Royal Road</b> ran from <b>Sardis</b> in the west to <b>Susa</b> in the south-west of Iran: about <b>2,700 km</b>. The Greek historian <b>Herodotus</b> says it had around <b>111 relay stations</b>, and that ordinary travellers needed about three months, while royal riders passing messages could manage it in about a <b>week</b>. Remember: Herodotus is a Greek, not a neutral reporter, so treat the numbers as ‘about’."},
    {title:"Tool 4: records and the Rock of Behistun", icon:"book", body:"On a cliff at <b>Behistun</b> Darius had a huge carving made, with writing in <b>three languages</b>: Old Persian, Elamite and Babylonian. It tells how he became king. It is also <b>propaganda</b>: Darius is telling the story his way. In the 1800s scholars used the three languages (just like a Rosetta stone) to help read cuneiform again. Darius’s officials also kept archives of records, which matters in Ezra’s story today."},
    {title:"Fair or controlling?", icon:"lock", body:"Some say Darius was a wise organiser: roads, coins and records helped trade, travel and justice. Others point out that taxes were heavy, that rebellions were crushed, and that the Behistun carving shows rebel kings in chains. <b>Both</b> are parts of the picture. Your job: weigh the evidence, and say <i>whose</i> perspective you are using."}],
   teacher:[
    "Timeline (3 min): add date cards to the strip: Cyrus c. 559–530 BC; Darius 522–486 BC; Persepolis begun c. 518 BC.",
    "Four tools (7 min): present each tool in one minute; use the app’s province map and daric zoom. After each, students show on mini-whiteboards: ‘This helped because…’.",
    "Behistun (3 min): show the carving. Ask: ‘Who made this? Who is it for? Is it neutral?’ Link to Week 1’s bias lesson. Mention the three languages and how later scholars used them.",
    "Perspective (2 min): introduce the fair/controlling question. Write two column headings on the board. Do NOT settle it: students decide later in Path C.",
    "Be careful with numbers: say ‘about’ and name Herodotus as the source for stations and travel times."]
  },
  paths:[
   {id:"A", name:"The King’s Eye: Inspection Report", icon:"scroll",
    brief:"You are one of the King’s Eyes and Ears. Visit an imagined province and write an inspection report for Darius: how are the roads, the taxes, the fairness of the satrap? End with a recommendation.",
    checklist:["I named my imagined province and its satrap","I reported on roads and stations","I reported on taxes and whether they were fair","I gave one piece of good news and one problem","I made a recommendation to the king and explained why"],
    scaffold:"<b>Headline:</b> Report from the province of ___ <br><b>Roads:</b> The road is … because … <br><b>Taxes:</b> People pay … and it is / is not fair because … <br><b>Good news / problem:</b> … <br><b>Recommendation:</b> I advise the king to … because …",
    diff:{supported:"Use the report frame and the word bank (satrap · tax · road · station · fair). Work with a partner on the recommendation.",
          standard:"Write a full report in your own words, with a reason for each judgement.",
          extended:"Write TWO reports of the same province: one from the satrap and one from a local farmer. Explain why they differ."}},
   {id:"B", name:"Design a Daric", icon:"star",
    brief:"Design the front and back of a gold coin for Darius’s empire, then write a museum label explaining its symbols and what it was used for.",
    checklist:["Front and back both designed","Each symbol has a reason","My museum label says what the coin was used for","I explained how a standard coin helps an empire","My drawing is neat and my label is clear"],
    scaffold:"<b>Front:</b> shows ___ because ___. <br><b>Back:</b> shows ___ because ___. <br><b>Museum label:</b> This coin was used to … It helped the empire by … <br><b>Challenge:</b> Why might a king want his picture on a coin?",
    diff:{supported:"Use the circular template and the label frame; choose symbols from a bank (archer, crown, spear, bow).",
          standard:"Design both sides and write a four-sentence museum label.",
          extended:"Compare your coin with a New Zealand coin. What do they each say about the people who made them?"}},
   {id:"C", name:"Persuasive Speech: Wise or Controlling?", icon:"horn",
    brief:"Choose a side: ‘Darius was a wise ruler’ OR ‘Darius controlled too much’. Write and deliver a 60-second speech using at least three pieces of evidence.",
    checklist:["I stated my opinion clearly at the start","I used three pieces of evidence from today","I named the source of at least one piece of evidence","I answered one point from the other side","My ending was strong"],
    scaffold:"<b>Opening:</b> I believe Darius was … <br><b>Evidence 1, 2, 3:</b> For example, … This shows … <br><b>Other side:</b> Some say … but … <br><b>Closing:</b> So, in the end, …",
    diff:{supported:"Use the speech frame with a partner; the evidence cards give you three facts to arrange.",
          standard:"Write your own speech with three evidence points and a counter-argument.",
          extended:"Argue the opposite side to your own belief for 30 seconds, then explain which side you find stronger and why."}}
  ],
  councilFire:{
   see:{refs:["Ezra 5:3–6:15","Isa 55:11"],
        text:"In Ezra, local officials question the Jews rebuilding the temple, so Darius orders a search of the royal records. A scroll is found at Ecbatana with Cyrus’s earlier decree, and Darius commands that the work go on and that it be paid for. The temple is finished. Isaiah says that God’s word does not return empty: it does what He sends it to do."},
   wonder:"Why did one record in an archive matter so much? What might it mean that a promise made years earlier was found and kept?",
   weigh:"Persian record-keeping helped Darius run his empire. In Ezra, the same records helped a small people keep a promise made long before. How might we see God at work in the ordinary tools of a ruler, without saying that Darius was God’s servant in the same way as Israel’s kings? (Christians think about this in different ways.)",
   respond:"Write about a promise someone has kept to you, and thank God for His faithfulness. Then write one promise you can keep this week.",
   teacher:"Ezra 5–6 is the book’s account of the temple’s completion, c. 516–515 BC. Keep the focus on the record found and the promise honoured. Say honestly that historians cannot confirm every detail of the Ezra story from outside sources, and that Christians read it as part of Scripture. Do not suggest that all Persian rulers shared the Jewish faith.",
   verses:["Ezra 5:3–6:15","Isa 55:11"]},
  assess:{
   evidence:"A cause-and-effect explanation (‘Darius used ___ so that ___’); the Path product (photographed); notes from the Council Fire discussion.",
   rubric:["Names one or two of Darius’s tools with support.","Names all four tools and explains simply why each helped.","Explains cause and effect for each tool using evidence, and says whose perspective a source shows.","Evaluates whether Darius was fair or controlling, weighing different sources and perspectives, and applies the idea to another leader."]},
  nzConnection:"How do leaders, councils and iwi share information with their communities in Aotearoa today? Think of newsletters, hui, notices, radio, websites. Which methods reach everyone, and which might leave people out? (Invite your Māori Education lead or local iwi/hapū to share how information moves in your rohe; avoid pan-Māori generalisations.)",
  sensitivity:"Darius’s own inscription shows him winning against rebels, and Greek writers show him as an enemy. Name both as perspectives rather than ‘the truth’. Some students may be Iranian-NZ or from Muslim backgrounds: treat Iranian history as a heritage to be proud of, not as a villain’s story, and never single students out.",
  inquiry:["Could students explain how each tool helped, not just name it?","Who used a source name (Herodotus, Behistun) correctly?","What do I need to revisit tomorrow before we measure the road?"],
  widgets:[
   {type:"match", title:"Darius’s Four Tools", prompt:"Match each tool of the empire to what it did.",
    pairs:[["Satrapy","A province run by a governor for the king"],["Satrap","The governor who collected taxes and kept order"],["Daric","A gold coin with a kneeling archer"],["Royal Road","About 2,700 km from Sardis to Susa, with relay stations"],["Behistun Inscription","Rock carving in three languages telling Darius’s story"],["King’s Eyes and Ears","Inspectors who checked on the governors"]]},
   {type:"order", title:"Darius’s Timeline", prompt:"Put these events in the order they happened.",
    items:["Cyrus founds the Persian Empire (about 559 BC onward)","Darius becomes king (522 BC)","Work begins on Persepolis (about 518 BC)","The temple in Jerusalem is completed (about 516–515 BC)","Darius dies (486 BC)"]},
   {type:"sort", title:"Fact, Reported, or Opinion?", prompt:"Sort each statement. Is it well-supported by several sources, reported by one source, or an opinion?",
    bins:["Well-supported fact","Reported by one source","Opinion"],
    items:[{t:"Darius I ruled from about 522 to 486 BC.",bin:0},{t:"The Behistun Inscription has writing in three languages.",bin:0},{t:"Herodotus says the Royal Road had about 111 stations.",bin:1},{t:"Herodotus says royal riders could do the journey in about a week.",bin:1},{t:"Darius was the wisest king who ever lived.",bin:2},{t:"The darics were far prettier than any other coin.",bin:2},{t:"Satraps were appointed to run provinces.",bin:0},{t:"The King’s Eyes and Ears always told the truth.",bin:2}]},
   {type:"reveal", title:"Who Wrote It? Whose Side?", prompt:"Tap each card to see whose perspective the source shows.",
    cards:[{front:"The Behistun Inscription",back:"Written by Darius’s own officials. It tells the story Darius wanted told: propaganda as well as history."},{front:"Herodotus",back:"A Greek writer, working about fifty years later. He had access to stories but was not neutral about Persia."},{front:"Ezra 5–6",back:"A Jewish account that describes the temple’s completion under Darius. It is concerned with God’s faithfulness to His people."},{front:"A clay tablet from the archives",back:"Everyday records of rations and payments. Not usually written to impress anyone, which makes it very useful."}]}
  ]
 },

 /* ====================================================================== TUESDAY */
 tue:{
  id:"w3-tue", day:"tue", subject:"Geography — Routes & Settlements",
  title:"The Royal Road: A Highway Through the Landscape",
  tagline:"Why do towns grow along a road?",
  nzc:["SS-PE","SS-EW","MA-G"],
  kc:["Thinking","Using language, symbols & texts","Relating to others"],
  values:["Community & participation","Inquiry & curiosity","Ecological sustainability"],
  li:"We are learning to explain how roads shape settlements and to use scale to measure distance.",
  sc:["I can use a scale bar to measure distance on a map.","I can explain why settlements grow along routes.","I can describe the levels of settlement along a route."],
  vocab:[
   {w:"route",d:"A way from one place to another."},
   {w:"relay station",d:"A stopping place on a road where riders swap tired horses for fresh ones."},
   {w:"scale bar",d:"A line on a map showing what a distance on the map equals in real life."},
   {w:"pass",d:"A gap between mountains that people can travel through."},
   {w:"terrace",d:"A flat, raised platform, built up from the ground."},
   {w:"hierarchy",d:"An order from smallest to largest, or least to most important."},
   {w:"capital",d:"The most important city, where the ruler and government are based."}],
  resources:["Large map of the Royal Road with scale bar","String, scale rulers, calculators","Atlases","Persepolis plan and photos (app or printed)","Relay station planning sheets","Local-area map for the NZ comparison"],
  dispatch:{
   title:"String and Scale",
   story:"The mud is still deep, so Shirin spreads the great map of the Royal Road across the ground. ‘We cannot ride today, so we shall measure instead,’ she says. ‘String along the road, then lay it against the scale bar. How many kilometres is it? And how long would it take if you walked 30 kilometres a day? How long by relay?’ Gandom the camel has already tried to eat the string.",
   easy:"Use string to follow the Royal Road on the map. Measure it against the scale bar. How many days would it take to walk it?",
   teacher:[
    "Retrieval (2 min): Monday — name two tools of Darius; what is a satrap; what does ‘about 2,700 km’ tell us about the empire?",
    "Give each Caravan a piece of string, a map and a scale bar. Teams lay the string along the road from Sardis to Susa, mark the length, and measure it against the scale bar.",
    "Calculate: 2,700 ÷ 30 = about 90 days on foot. Then: if royal riders took about a week, roughly how far per day? (about 385 km). Compare with a modern car at 100 km/h.",
    "Take two predictions about why the relay was so much faster (fresh horses, no stopping to rest, a fixed route).",
    "Share LI/SC (students read aloud)."],
   retrieval:"Monday: the four tools of Darius; satrap; why records mattered."
  },
  discovery:{
   intro:"A road is more than a line on a map. Follow the Royal Road and watch how a route can make a town, and a town can make a city.",
   cards:[
    {title:"Measuring the road", icon:"compass", body:"Maps use a <b>scale</b>. If <b>1 cm</b> on the map equals <b>100 km</b>, a road that measures 27 cm is about <b>2,700 km</b>. That is about seven trips from Christchurch to Dunedin (roughly 360 km each way, depending on the route), and further than the whole length of New Zealand. Use a string for a winding road, then lay it against the scale bar."},
    {title:"The shape of the road", icon:"scroll", body:"The Royal Road ran from <b>Sardis</b> near the Aegean coast, across the plains and mountains of Anatolia, through Assyria and along the foothills of the Zagros to <b>Susa</b>. Travellers had to deal with <b>rivers</b>, <b>mountain passes</b> and <b>hot, dry land</b>. Roads usually follow the easiest way, but where a pass or a river crossing is the only way, everyone has to go through it."},
    {title:"Stations a day apart", icon:"horn", body:"Herodotus says the road had about <b>111 stations</b>, each roughly a day’s journey apart for an ordinary traveller. At each one, a royal rider could hand the message to a fresh rider with a fresh horse. Think of it like a <b>relay race</b>: nobody runs the whole way, and nobody gets tired."},
    {title:"How a road makes a town", icon:"home", body:"A station needs food, water, a stable and beds. Soon traders stop there too, and farmers come to sell food. A <b>station</b> becomes a <b>village</b>, a village becomes a <b>town</b>, and a town on several roads can become a <b>capital</b>. Roads <i>pull</i> settlement towards them."},
    {title:"Persepolis: a site chosen with care", icon:"rosette", body:"<b>Persepolis</b> was begun about <b>518 BC</b>. It stands on a huge stone <b>terrace</b> at the foot of <b>Mount Rahmat</b> on the open <b>Marvdasht plain</b> in Persis. Why there? The land is flat enough for big halls and ceremonies, the mountain gives a backdrop and some defence, there is good stone nearby, and it is in the Persian homeland. It was a place for great ceremonies, rather than an everyday city."}],
   teacher:[
    "Scale (5 min): demonstrate on the board: 1 cm = 100 km. Students practise two measurements on mini-whiteboards.",
    "Route features (3 min): show where the road meets rivers, passes and deserts. Ask: ‘What would a rider need to cross each?’",
    "Settlement growth (4 min): act out the growth. One student sits as a ‘station’; add a stable, a market, a house. Draw the hierarchy: station → village → town → capital.",
    "Persepolis (3 min): show plan and photos. Teams predict why the kings chose this place; reveal the card after.",
    "Be careful: numbers like 111 stations come from Herodotus. Say ‘about’ or ‘according to’."]
  },
  paths:[
   {id:"A", name:"Scale Map and Distance Challenge", icon:"compass",
    brief:"Draw a map of the Royal Road with a title, compass rose, scale bar and key. Mark at least six stops, then calculate the distance between two stops and the time it would take at 30 km/day and by relay.",
    checklist:["Title, compass rose, scale bar and key","Sardis and Susa marked clearly","At least six stops labelled","One distance measured with string and scale","Travel time calculated for walking and relay"],
    scaffold:"<b>Measure:</b> My string measured ___ cm. The scale says 1 cm = ___ km. So the distance is ___ km. <br><b>Walking:</b> ___ km ÷ 30 = ___ days. <br><b>Relay:</b> A rider might do about 385 km a day, so ___ km ÷ 385 = ___ days.",
    diff:{supported:"Use a printed outline map and a ready-made scale bar; complete the measure frame with a partner.",
          standard:"Draw independently with all the map conventions and two calculations.",
          extended:"Calculate the time for a rider who travels at 200 km/day, and compare with the relay. Explain why the relay is faster than one rider."}},
   {id:"B", name:"The Station Master’s Handbook", icon:"horn",
    brief:"Design a relay station and write its rules. Show the buildings, the animals, the supplies and the people. Then predict how a village might grow around it.",
    checklist:["Plan of the station with labelled buildings","At least five rules for riders and station staff","A list of supplies the station needs","A prediction of how a village could grow, with a reason","Labels and key are clear"],
    scaffold:"<b>Buildings:</b> stable, well, store, rest room … <br><b>Rules:</b> 1 Fresh horse for every rider. 2 … <br><b>Supplies:</b> food, water, … <br><b>Prediction:</b> In ten years, the station might become a village because …",
    diff:{supported:"Use the station template and choose five buildings from the word bank. Complete the prediction frame.",
          standard:"Create your own station plan with rules and a prediction.",
          extended:"Add a second station a day’s ride away and explain how the two might compete or cooperate as they grow."}},
   {id:"C", name:"Persepolis Site Plan", icon:"rosette",
    brief:"Annotate a plan of the Persepolis terrace. Label the stairs, halls, gates and treasury, then give three reasons the site was chosen.",
    checklist:["I labelled the terrace, stairs and at least three buildings","I wrote three reasons the site was chosen","I included one disadvantage of the site","I used a key or numbers","I can explain what the site was used for"],
    scaffold:"<b>Labels:</b> terrace · stairway · Gate of All Nations · Apadana · Treasury · Hall of 100 Columns. <br><b>Reasons:</b> The site was chosen because (1) … (2) … (3) … <br><b>Disadvantage:</b> A problem might be …",
    diff:{supported:"Use a pre-labelled plan with a bank of reasons; match the reasons to the right feature.",
          standard:"Annotate independently and give three reasons with explanations.",
          extended:"Compare Persepolis with Susa as a capital. Which was better for ruling the empire, and which for great ceremonies? Justify your view."}}
  ],
  councilFire:{
   see:{refs:["Isa 40:3–4","Isa 35:8"],
        text:"Isaiah speaks of a voice calling to prepare a way: valleys lifted up, mountains made low, rough ground made smooth. Elsewhere he describes a highway where the redeemed will walk, a road marked out for God’s people."},
   wonder:"What is special about ‘making a way’ for others? Who builds the road, and who walks it?",
   weigh:"Persian roads carried messages, soldiers, traders and officials. Isaiah’s picture of a road is about God coming to His people and bringing them home. How does a road join people, ideas and faith? Is a road good or bad in itself, or does it depend on how it is used?",
   respond:"Name one ‘road’ (a kindness, a welcome, an invitation) you can build for a new student or a lonely classmate this week.",
   teacher:"Isaiah 40 is poetry, with the road imagery used for God’s coming and the return from exile. Do not claim the Persian road was ‘the’ road of Isaiah. Use it as a picture: when we prepare a way for others, we reflect something of God’s heart. Keep it practical and kind.",
   verses:["Isa 40:3–4","Isa 35:8"]},
  assess:{
   evidence:"Accuracy of scale calculations; the reasoning in Path B or C (reasons for the settlement or site); photographs of Path products.",
   rubric:["Measures a distance with support and names one reason roads matter.","Uses the scale bar accurately and explains why settlements grow on routes.","Calculates distances and times correctly, and explains how a station could grow into a village or town.","Evaluates a site or route, weighs advantages and disadvantages, and compares with another place."]},
  nzConnection:"Think about ara and tracks in Aotearoa: well-known travel routes, including trails used to carry pounamu, and how roads and rail shaped New Zealand towns. How did the route to the West Coast shape Arthur’s Pass? Where does your own town sit on a route? (Invite local iwi/hapū or your Māori Education lead to share the stories of ara in your rohe; avoid generalising across iwi.)",
  sensitivity:"Keep references to modern Iran, Iraq and Turkey neutral and respectful: this week is about an ancient road, not modern borders. The Royal Road was also used by armies and tax collectors, and people had little say. Talk about both the benefits and the costs.",
  inquiry:["Did students use the scale bar correctly, or just guess?","Could they explain why a town grows on a route, not only that it does?","Which scaffold helped the supported group most?"],
  widgets:[
   {type:"order", title:"From Station to Capital", prompt:"Put the settlement levels in order from smallest to largest.",
    items:["Relay station","Village","Town","City","Capital"]},
   {type:"match", title:"Map Words", prompt:"Match each map word to its meaning.",
    pairs:[["Scale bar","Shows how map distance equals real distance"],["Compass rose","Shows north, south, east and west"],["Key","Explains the symbols on the map"],["Route","A way from one place to another"],["Pass","A gap between mountains people can travel through"],["Relay station","A stop where riders swap for fresh horses"]]},
   {type:"sort", title:"Good Site or Poor Site?", prompt:"Persepolis was built on a terrace beside Mount Rahmat. Sort these statements about the site.",
    bins:["Advantage","Disadvantage","Unknown or debated"],
    items:[{t:"The Marvdasht plain is wide and flat, with room for big halls.",bin:0},{t:"Mount Rahmat gives a backdrop and some protection.",bin:0},{t:"Good stone was available nearby.",bin:0},{t:"It is a long way from the Mediterranean coast.",bin:1},{t:"The dry summers meant water had to be managed carefully.",bin:1},{t:"Exactly why Darius chose this spot is not written down.",bin:2},{t:"It was in the Persian homeland, Persis.",bin:0}]},
   {type:"reveal", title:"Calculate the Journey", prompt:"Tap each card to check your thinking.",
    cards:[{front:"2,700 km at 30 km a day (walking)",back:"2,700 ÷ 30 = about 90 days. Herodotus says ordinary travellers needed about three months."},{front:"2,700 km in about 7 days (royal riders)",back:"2,700 ÷ 7 = roughly 385 km a day. Only possible with fresh riders and horses at every station."},{front:"Why do roads create towns?",back:"People need food, water and rest. Traders follow travellers. Markets, houses and workshops grow."},{front:"If 1 cm = 100 km, how long is a 12 cm line?",back:"12 × 100 = 1,200 km."}]}
  ]
 },

 /* ====================================================================== WEDNESDAY */
 wed:{
  id:"w3-wed", day:"wed", subject:"Science — Food Webs & Predators",
  title:"Lions, Leopards & the Royal Hunt: Predators in the Food Web",
  tagline:"What happens when the top predator disappears?",
  nzc:["SC-LW-Eco","SC-NoS-C","SC-NoS-P"],
  kc:["Thinking","Using language, symbols & texts","Managing self"],
  values:["Ecological sustainability","Inquiry & curiosity","Respect"],
  li:"We are learning to build food webs and explain what happens when a predator disappears.",
  sc:["I can draw a food web with arrows showing the flow of energy.","I can explain what an apex predator is.","I can predict what happens when one species is removed."],
  vocab:[
   {w:"food chain",d:"A single line showing who eats whom: grass → ibex → leopard."},
   {w:"food web",d:"Many food chains joined together to show all the feeding links in a community."},
   {w:"producer",d:"A living thing that makes its own food, such as a plant."},
   {w:"consumer",d:"A living thing that gets energy by eating others."},
   {w:"predator / prey",d:"The animal that hunts / the animal that is hunted."},
   {w:"apex predator",d:"A top predator with few or no natural enemies."},
   {w:"decomposer",d:"A living thing (such as a fungus or bacterium) that breaks down dead material."},
   {w:"extinct",d:"No longer alive anywhere in the world."},
   {w:"endangered",d:"At risk of becoming extinct."}],
  resources:["Balls of wool; labels (grass, ibex, onager, leopard, lion, eagle, decomposer)","Animal Cards (Asiatic lion, Caspian tiger)","Food web planning sheets","Images of Persian hunting scenes and ‘paradise’ gardens","Large paper for Path A and Path C","Clipboards and pencils"],
  dispatch:{
   title:"The String Web Game",
   story:"The mudslide has cleared one side of the pass, and Shirin leads you into a hunting park: walls, trees, a stream, and a thousand rustles in the grass. ‘Persian kings kept enclosed gardens full of animals,’ she says. ‘But even a king’s garden is a web. Take a label, Courier. Hold the wool. Pull one thread… and see what moves.’ Gandom the camel is already being very careful not to stand on the string.",
   easy:"Each person is an animal or plant. Pass the wool to show who eats whom. Then take one person away. What happens to the web?",
   teacher:[
    "BEFORE CLASS: prepare labels: grass, ibex, onager, leopard, lion, golden eagle, decomposer. A class of 25+ can add extra grass, extra ibex and so on.",
    "Retrieval (2 min): Tuesday — what is a scale bar; what is a relay station; name one level of settlement.",
    "Students stand in a circle holding their label. Start with the sun-fed grass holding the wool. Pass the wool to something that eats grass (ibex/onager), then to what eats them (leopard/lion/eagle), and onwards, always holding a piece of the string. Everything eventually links to the decomposer.",
    "Remove the lion: that student drops the string. Ask: who feels the slack? Who feels it next? What would the ibex and onager do? What would happen to the grass?",
    "Share LI/SC; students read aloud. Take care that the ‘removed’ student is not left out. Give them a role as observer or recorder."],
   retrieval:"Tuesday: scale bar; relay station; the levels from station to capital."
  },
  discovery:{
   intro:"Every animal is part of a web. Meet the great cats of the old Persian lands, and find out what happens when the top of the web is lost.",
   cards:[
    {title:"Chain or web?", icon:"book", body:"A <b>food chain</b> is one line: <b>grass → ibex → leopard</b>. But most animals eat more than one thing, and are eaten by more than one thing, so the lines tangle into a <b>food web</b>. The <b>arrows</b> show the flow of <b>energy</b>: they point <i>from</i> the food <i>to</i> the animal that eats it. Plants (producers) start the flow with energy from the sun."},
    {title:"Apex predators", icon:"paw", body:"An <b>apex predator</b> is at the top of a food web, with few or no natural enemies. In the old Persian lands, apex predators included the <b>Asiatic lion</b>, the <b>Caspian tiger</b> and the <b>Persian leopard</b>. They help keep prey populations in balance, which in turn protects plants."},
    {title:"The Asiatic lion", icon:"flame", body:"The <b>Asiatic lion</b> once lived across south-west Asia, including parts of Iran and Iraq. Lions disappeared from Iran in the early <b>1940s</b>, after hunting and the loss of their habitat. Today a small population survives in the <b>Gir Forest</b> of India. Persian reliefs and carvings often show lions, as symbols of power."},
    {title:"The Caspian tiger", icon:"paw", body:"The <b>Caspian tiger</b> lived in the forests and reed-beds near the Caspian Sea and in Central Asia. It is now <b>extinct</b>, with the last known animals gone by about the <b>1970s</b>. Scientists have found that its DNA is very close to the Siberian (Amur) tiger. The <b>Persian leopard</b> survives, but is <b>endangered</b>: a good reason to protect it."},
    {title:"The royal paradise", icon:"star", body:"Persian kings built walled gardens and hunting parks with trees, water and animals. The Old Persian word <i>pairidaeza</i> meant ‘walled enclosure’, and it is where our word <b>paradise</b> comes from. Reliefs and later writing show kings hunting lions: partly sport, and partly a show of power. Today we think more about <b>protecting</b> animals than hunting them."},
    {title:"What if the top goes missing?", icon:"compass", body:"Remove the top predator and the animals it hunted may <b>increase</b>. More ibex and onager eat more plants. Plants can be <b>overgrazed</b>, soil may wash away, and other animals can lose food and shelter. Scientists call this a <b>cascade</b>. It does not always happen the same way, so we say ‘<i>may</i>’ and ‘<i>often</i>’, not ‘always’."}],
   teacher:[
    "Vocabulary (4 min): build the ladder together: producer → consumer → predator → apex predator, with decomposers recycling at the end.",
    "Food web (5 min): draw a web on the board with the class. Insist that arrows point from food to eater. Check with the whiteboard: ‘Which way does the arrow go from grass to ibex?’",
    "Persian cats (4 min): use the Animal Cards (Asiatic lion, Caspian tiger). Talk about extinction with care: this is a reason to protect, not to despair.",
    "Cascade (2 min): return to the string game. Use the cause-and-effect chain: lion gone → more prey → less grass.",
    "Be careful with dates: ‘early 1940s’ for lions in Iran, ‘about the 1970s’ for the Caspian tiger. Say that exact dates are uncertain."]
  },
  paths:[
   {id:"A", name:"‘What If?’ Food Web", icon:"compass",
    brief:"Draw a food web for the Zagros or Persian grasslands with at least eight living things. Add arrows for the flow of energy. Then write five ‘What if…?’ predictions.",
    checklist:["At least eight organisms, including a producer, a decomposer and an apex predator","Every arrow points from food to eater","I wrote five ‘What if…?’ predictions","Each prediction has a ‘because’","I used the words predator, prey and apex predator"],
    scaffold:"<b>Organisms:</b> grass, oak, ibex, onager, hare, leopard, lion, eagle, fungus. <br><b>Prediction frame:</b> If the ___ disappeared, then ___ would … because …",
    diff:{supported:"Start with a half-drawn web; add arrows and three more organisms. Use the prediction frame for three ‘What if…?’ questions.",
          standard:"Draw independently and write five predictions with reasons.",
          extended:"Choose one prediction and trace its effects for three steps (first, then, after that), explaining why a scientist cannot be sure."}},
   {id:"B", name:"Design the Perfect Predator", icon:"paw",
    brief:"Draw and label an imaginary predator for a Persian habitat, using only real types of adaptation. Explain how each feature helps it catch food and survive.",
    checklist:["A clear, annotated sketch","At least four adaptations, all based on real animals","Each adaptation explained: ‘has… which helps…’","I named its habitat and its prey","I named one weakness or limit"],
    scaffold:"<b>Adaptation bank:</b> forward-facing eyes, camouflage fur, retractable claws, powerful jaws, night vision, speed, patience. <br><b>Frame:</b> My predator has ___ which helps it ___. <br><b>Weakness:</b> It might struggle when …",
    diff:{supported:"Use a pre-drawn outline and the adaptation bank; complete four ‘has… which helps…’ sentences.",
          standard:"Draw independently with four adaptations and a weakness.",
          extended:"Add a second drawing of its prey, with adaptations to avoid it. Explain how the two ‘race’ each other over time."}},
   {id:"C", name:"Ecosystem Role-Play Report", icon:"horn",
    brief:"Re-run the string web with a narrator. Your Caravan performs a ‘predator disappears’ scene, then writes a short report on what the class learned.",
    checklist:["Each person has a role (producer, prey, predator, decomposer, narrator)","The narrator explains each link clearly","We removed one species and showed the effects","The report names three effects","The report says what we would do to protect the predator"],
    scaffold:"<b>Narrator frame:</b> The grass gives energy to … <br><b>Effect frame:</b> When the ___ was removed, the ___ … so the ___ … <br><b>Report:</b> We learned that … We would protect the ___ by …",
    diff:{supported:"Use the script frame and perform in a small group; the narrator reads from the card.",
          standard:"Write your own narration and a short report with three effects.",
          extended:"Run it twice (removing a different species each time) and compare the results in a table."}}
  ],
  councilFire:{
   see:{refs:["Daniel 6:16–23","Psalm 104:21"],
        text:"In Daniel, the king is sorry that he must send Daniel into the lions’ den, and he spends a sleepless night. In the morning, Daniel says that God sent His angel and shut the lions’ mouths. The psalmist, meanwhile, says that young lions roar for their prey and seek their food from God."},
   wonder:"The lions are in God’s care and still dangerous. What does that teach us about trusting God, and about respecting the power of wild animals?",
   weigh:"Daniel’s courage is set beside the lions’ real strength. The story does not say lions are weak or that danger is not real. How does Daniel’s trust compare with the way the king trusted his own power? (In Daniel 6, ‘Darius the Mede’ is the king. Historians and Christians debate how he relates to Darius I, so we will not assume they are the same.)",
   respond:"Write: ‘One place I need courage this week is…’. Then pray for that courage, quietly or aloud.",
   teacher:"Be honest that the identity of ‘Darius the Mede’ is discussed among scholars; some link him to Cyrus’s general or governor, others to Darius I under a different title. We will not settle that today. Keep the focus on Daniel’s faithfulness and the real power of lions. Psalm 104 is praise poetry, not a science textbook.",
   verses:["Dan 6:16–23","Ps 104:21"]},
  assess:{
   evidence:"Accuracy of arrows (food → eater); the explanation of what happens when a predator is removed; use of vocabulary.",
   rubric:["Draws a food chain with support.","Draws a food web with correctly directed arrows and defines apex predator.","Explains what happens when a species is removed, using cause and effect and vocabulary.","Predicts and evaluates multiple effects, noting uncertainty, and links to a real conservation example."]},
  nzConnection:"New Zealand’s native birds evolved with few land predators. Introduced stoats, rats and possums, and cats, have had a huge effect. Why are predator-free sanctuaries such as Zealandia, or predator control programmes, so important? What might a ‘cascade’ look like in a New Zealand forest? (Invite DOC or a local conservation group, and your Māori Education lead for the idea of kaitiakitanga; avoid pan-Māori generalisations.)",
  sensitivity:"Extinction can feel sad: present it as a reason to care, not to panic. Keep the hunting talk matter-of-fact: kings hunting lions was a display of power, and today we value protecting predators. Be careful that ‘royal hunt’ does not become a game that glorifies killing.",
  inquiry:["Did students point the arrows from food to eater?","Who could explain a cascade with at least two steps?","What do I need to revisit about the difference between a chain and a web?"],
  widgets:[
   "animalCards",
   {type:"order", title:"The Cascade", prompt:"Put this cause-and-effect chain in order.",
    items:["The top predator disappears","The number of grazers goes up","The grazers eat more plants","Plants are overgrazed and soil is bare","Other animals lose food and shelter"]},
   {type:"sort", title:"Producer, Consumer or Decomposer?", prompt:"Sort each living thing by its job in a food web.",
    bins:["Producer","Consumer","Decomposer"],
    items:[{t:"Grass",bin:0},{t:"Oak tree",bin:0},{t:"Ibex",bin:1},{t:"Persian leopard",bin:1},{t:"Asiatic lion",bin:1},{t:"Golden eagle",bin:1},{t:"Fungus on a fallen log",bin:2},{t:"Bacteria in the soil",bin:2}]},
   {type:"reveal", title:"Which Way Does the Arrow Point?", prompt:"Tap each card to check the direction of the arrow.",
    cards:[{front:"Grass and an ibex",back:"Grass → ibex. The arrow points from the food to the eater: the ibex gets energy from the grass."},{front:"Ibex and a leopard",back:"Ibex → leopard. The leopard gets energy from the ibex."},{front:"Dead leopard and a fungus",back:"Leopard → decomposer. When living things die, decomposers break them down and return nutrients to the soil."},{front:"Is the lion eaten by anything?",back:"Not usually. That is what makes it an apex predator, with few or no natural enemies."}]}
  ]
 },

 /* ====================================================================== THURSDAY */
 thu:{
  id:"w3-thu", day:"thu", subject:"Art — Relief Sculpture",
  title:"Carving the Kings: Relief Sculpture of the Apadana",
  tagline:"Carve a procession of nations — then make your own.",
  nzc:["VA-UC","VA-PK","VA-CI"],
  kc:["Thinking","Managing self","Participating & contributing"],
  values:["Excellence","Diversity","Community & participation"],
  li:"We are learning to create relief sculpture showing a procession.",
  sc:["I can make a figure in profile.","I can repeat figures with rhythm.","I can describe what the Apadana reliefs show."],
  vocab:[
   {w:"relief",d:"A sculpture where shapes stand out from a flat background."},
   {w:"low relief",d:"A relief that rises only a little from the background."},
   {w:"incised",d:"Carved into the surface as lines or grooves."},
   {w:"profile",d:"A figure seen from the side."},
   {w:"procession",d:"A line of people moving together in a ceremony."},
   {w:"delegation",d:"A group sent to represent their people or country."},
   {w:"emboss",d:"To press a pattern so that it stands out from a surface."},
   {w:"Apadana",d:"The great columned audience hall at Persepolis."}],
  resources:["Soap bars or air-dry clay; plastic knives, blunt skewers, lolly sticks","Foil, soft pencils, pads or foam for embossing","Large paper/butcher’s paper for the mural; paints","Images of the Apadana reliefs (app or printed)","Plastic trays to catch soap shavings","Aprons or old shirts"],
  dispatch:{
   title:"Spot the Procession",
   story:"At last the pass is open and the road leads to the great stone terrace. Up the steps, along the walls, a stone parade is marching: delegations from many nations, carrying gifts and leading animals. Shirin taps the carving. ‘Look carefully, Courier. Count the faces. Find the animals. Spot the pots and the cloth. Whose gifts are these? And why did the king want them carved in stone?’",
   easy:"Look at the stone carving. Who is in the procession? What are they carrying? What animals can you see?",
   teacher:[
    "Retrieval (2 min): Wednesday — what is an apex predator; which way do arrows point in a food web; one cause-and-effect from a missing predator.",
    "Show 2–3 images of the Apadana reliefs. Students spot on mini-whiteboards: animals, textiles, vessels, repeated figures, profile views.",
    "Take one share per spot. Ask: ‘How do you know they come from different places?’ (clothes, hairstyles, gifts).",
    "Say honestly that we do not know exactly who each delegation was, and some labels are debated. Share LI/SC."],
   retrieval:"Wednesday: apex predator; arrows from food to eater; the cascade."
  },
  discovery:{
   intro:"Stone that tells a story. Learn how relief sculpture works, and how to make your own procession.",
   cards:[
    {title:"What is a relief?", icon:"scroll", body:"A <b>relief</b> is a sculpture that stays attached to a flat background, so the shapes stand out. <b>Low relief</b> is shallow, and <b>high relief</b> stands out far. Some reliefs are <b>incised</b>: lines are cut into the surface. The carvings at Persepolis were originally <b>painted in bright colours</b>, though little paint is left today."},
    {title:"The Apadana stairways", icon:"rosette", body:"The <b>Apadana</b> was a huge columned hall at Persepolis, begun under Darius. Its stairways are covered in carvings of <b>delegations</b> from many parts of the empire, usually counted as about <b>23</b> groups, bringing gifts: animals, cloth, vessels, metal goods. Experts debate exactly who each group is, and some identifications are uncertain."},
    {title:"The art of the procession", icon:"horn", body:"The figures walk in a line, in <b>profile</b>, one after another. This repetition gives <b>rhythm</b>, like marching. Small changes in clothes, hair, gifts and animals show who is from where. The same figure may repeat with only small differences, which is how carvers made huge scenes in a short time."},
    {title:"Why carve it?", icon:"star", body:"The reliefs show a peaceful, orderly empire with the king at the centre. This is how the Persian court <i>wanted</i> to be seen: it is art, but it is also a message. Notice what is <b>not</b> shown: the taxes, the soldiers and the people who did not want to be ruled. Art is a source with a point of view."},
    {title:"Safe carving: three ways", icon:"gear", body:"<b>Soap:</b> scrape away the background with a plastic knife or blunt skewer, leaving the figure raised. <b>Clay:</b> press shapes and lines into a flat slab, or add small pieces to build up. <b>Foil:</b> press a pattern into foil over a soft pad with a blunt pencil. Always carve <b>away from your body</b>, keep your tools on the table, and keep the shavings in the tray."}],
   teacher:[
    "Relief (3 min): show a soft clay slab. Press a shape and show low relief. Show an incised line.",
    "Apadana (4 min): study one image together: what is repeated, what is different?",
    "Interpretation (3 min): ask students to decide whose story the reliefs tell, and whose might be missing. Link to the bias lesson from Week 1.",
    "Safety (3 min): model safe tool use. Set rules: sit down, tool away from body, hands behind the blade, tidy as you go. Use plastic knives only.",
    "Model the first step of each Path (2 min). Remind students that Path C is a whole-class mural, with each Caravan creating a section."]
  },
  paths:[
   {id:"A", name:"Relief Figure", icon:"scroll",
    brief:"Carve a gift-bearer in soap or clay. Show the figure in profile with something to carry, and keep the background flat.",
    checklist:["My figure is in profile","The figure is raised from a flat background","I included a gift or an animal","I added at least three details (clothes, hair, pattern)","I used the tools safely and tidied up"],
    scaffold:"<b>Steps:</b> 1 Sketch the figure in profile. 2 Press or draw the outline on the soap/clay. 3 Remove the background in thin layers. 4 Add details with incised lines. <br><b>Artist’s statement:</b> My figure comes from ___ and carries ___ because …",
    diff:{supported:"Use a printed outline to press into the soap or clay; add three details from the detail bank.",
          standard:"Design and carve your own figure with three details and an artist’s statement.",
          extended:"Carve two figures with a contrasting gift and clothes, and explain how you made them look like people from different places."}},
   {id:"B", name:"Foil Emboss Panel", icon:"rosette",
    brief:"Create an embossed foil panel showing a repeating line of figures. Use rhythm and a careful repeat.",
    checklist:["At least four figures in a row","The figures are in profile","The spacing is even (rhythm)","I changed one detail on each figure","The foil is smooth with a clear raised pattern"],
    scaffold:"<b>Steps:</b> 1 Draw one figure on paper. 2 Place foil over a soft pad. 3 Trace the outline with a blunt pencil. 4 Repeat with a changed detail. <br><b>Artist’s statement:</b> I repeated my figure ___ times so that the panel feels …",
    diff:{supported:"Use a single template figure and trace four times, changing one detail.",
          standard:"Design your own figure and repeat it at least four times, changing a detail each time.",
          extended:"Alternate two different figures (A-B-A-B) and add an incised border."}},
   {id:"C", name:"Class Procession Mural: ‘The Procession of the Caravans’", icon:"horn",
    brief:"Each Caravan designs one section of a class mural. Show figures bringing gifts that reflect this week’s learning, such as a daric, a scroll, a station horn or a leopard.",
    checklist:["Our section joins neatly to the next","All figures are in profile and moving the same way","Each gift links to something we learned this week","We used a limited palette","Everyone contributed and we shared jobs"],
    scaffold:"<b>Plan:</b> 1 Agree the gifts (a daric, a scroll, a baton, a map). 2 Sketch with the figures in a line. 3 Assign roles: outlines, colour, details. 4 Join the sections. <br><b>Artist’s statement:</b> Our section shows ___ bringing ___ because …",
    diff:{supported:"Start with figure templates and choose gifts from a bank; assign one job to each team member.",
          standard:"Design the section as a team, with gifts linked to learning, and a short caption.",
          extended:"Add a caption panel that explains each gift and what it says about the week, and propose how the whole mural should be displayed."}}
  ],
  councilFire:{
   see:{refs:["Psalm 72:10–11","Philippians 2:9–11","Mark 10:42–45"],
        text:"The psalm pictures kings from far away bringing gifts and bowing to a righteous king. Paul writes that God has given Jesus the highest name, and that every knee will one day bow to him. In Mark, Jesus tells his friends that those who rule over nations often lord it over them, but that whoever wants to be great must serve, because he came to serve and give his life for many."},
   wonder:"The reliefs show nations honouring one king. How is Jesus’ kingship different? What does it mean to be a servant-king?",
   weigh:"Compare how Darius displayed power (stone, gifts, a staircase) with how Jesus used power (washing feet, serving, giving himself). What might each tell us about what makes a ruler great? (Be fair: Persian art also showed order and a peaceful empire, and many people valued that.)",
   respond:"Choose one way you can serve someone this week. Write it on your Caravan Log and tell a partner.",
   teacher:"Keep the comparison respectful: the reliefs are a masterpiece of craft, and Darius was a skilled organiser. The contrast is about how kingship is understood, not about running down Persian culture. Be careful with language about ‘false’ kings. Acknowledge that Muslim students may honour Jesus (Isa) as a prophet; do not press anyone to agree with the passage.",
   verses:["Ps 72:10–11","Phil 2:9–11","Mark 10:42–45"]},
  assess:{
   evidence:"Technique (profile, raised figure, rhythm) in the carving or embossing; the artist’s statement; the group’s contribution to the mural.",
   rubric:["Makes a simple figure with support.","Creates a figure in profile with some relief and repeats it with rhythm.","Controls relief and repetition, and explains what the Apadana reliefs show and why they were made.","Combines technique and meaning with intent, and evaluates whose story the reliefs tell."]},
  nzConnection:"Compare with the way carvings in Aotearoa tell stories: whakairo on a wharenui carries whakapapa and history. Invite your Māori Education lead or a local carver to guide this conversation. Do NOT imitate sacred or tapu carving; focus on the idea that carving can carry meaning and honour people.",
  sensitivity:"Persian reliefs come from a living cultural heritage, so avoid describing them as ‘exotic’. Soap and clay carving should use only blunt, plastic tools and close supervision. Some students may have faith traditions that restrict the making of human figures: offer a non-figure option (a pattern or animal) without making a fuss.",
  inquiry:["Were the figures in profile, with rhythm?","Who needed help with safe tool use?","How well did Caravans share the mural jobs?"],
  widgets:[
   {type:"match", title:"Relief Words", prompt:"Match each art word to its meaning.",
    pairs:[["Relief","A sculpture that stands out from a flat background"],["Incised","Lines carved into a surface"],["Profile","A figure seen from the side"],["Procession","A line of people moving together"],["Delegation","A group sent to represent their people"],["Emboss","To press a pattern so it stands out"]]},
   {type:"order", title:"Making a Soap Relief", prompt:"Put the steps of soap carving in a sensible order.",
    items:["Sketch the figure in profile","Press or trace the outline on the soap","Carve away the background in thin layers, away from your body","Add details with incised lines","Tidy the shavings into the tray"]},
   {type:"reveal", title:"Reading the Procession", prompt:"Tap each card to see what a clue in the relief might tell us.",
    cards:[{front:"Different clothes and hairstyles",back:"Carvers showed delegations as people from different lands. Experts compare these with other evidence, but some identifications are debated."},{front:"Animals led by the figures",back:"Animals such as horses, camels and bulls are shown as gifts. They hint at what each region was known for."},{front:"Figures all walking in the same direction",back:"This gives rhythm and order. It shows a calm, organised procession and not a battle."},{front:"What is missing?",back:"The reliefs do not show tax collectors, rebels or ordinary workers. Remember that art is a source with a point of view."}]}
  ]
 },

 /* ====================================================================== FRIDAY */
 fri:{
  id:"w3-fri", day:"fri", subject:"Showdown",
  title:"SHOWDOWN: The Royal Relay",
  tagline:"Pass the baton. Win the Stage.",
  mode:"classic", fateEnabled:true, timeLimit:20,
  nzc:["SS-CC","SS-PE","SC-LW-Eco","VA-UC","RE"],
  kc:["Thinking","Managing self","Relating to others","Participating & contributing"],
  values:["Integrity","Community & participation","Excellence"],
  li:"We are learning to recall and apply our week’s learning about Darius, the Royal Road, food webs and relief sculpture, and to work as a team.",
  sc:["I can answer questions about Darius’s tools, the Royal Road, predators and the Apadana reliefs.","I can work with my Caravan like a relay team, with integrity.","I can explain my thinking when I get something wrong."],
  creedPrompt:"Before the quiz, each Caravan writes a Relay Creed: ONE sentence about how your team will pass the baton well, supporting each other so no one is left behind.",
  creedStarters:["We will pass the baton by…","When someone stumbles, we will…","Our Caravan will always…","We will cheer on…"],
  dispatch:{
   title:"The Royal Relay",
   story:"The last stretch of the Swift Road waits ahead, and at every station a fresh rider stands ready. ‘A relay is not won by the fastest runner,’ says Shirin, ‘but by the team that passes the baton well. Write your Creed, Courier. How will your Caravan carry the message? With care, with courage, with kindness to the one who falls behind?’ A horn sounds from the next station. The Showdown begins.",
   easy:"Today is the Royal Relay! Your team writes a Creed, then races in the quiz.",
   teacher:["Before the lobby opens, each team writes its Relay Creed on a strip and reads it aloud.","Teachers may display the Creeds beside the Week 1 Creeds.","Before starting, remind students of the three recall areas this week: Darius’s tools, the food web, and what we learned in earlier weeks."],
   retrieval:"The quiz is the retrieval."
  },
  questions:[
   {q:"Susa, the southern end of the Royal Road, was long before the home of which ancient people (Week 1)?", options:["Vikings","Elamites","Romans","Mongols"], answer:1, boss:false, tag:"SS-CC", explain:"Susa was an Elamite city, one of the world’s earliest, long before Darius made it a royal centre at the end of the Royal Road from Sardis."},
   {q:"The gold coin introduced by Darius was the…", options:["denarius","daric","dollar","drachma"], answer:1, boss:false, tag:"SS-EW", explain:"The daric was the Persian gold coin, showing a kneeling archer. The denarius was Roman and the drachma was Greek."},
   {q:"The Behistun Inscription was written in how many languages?", options:["One","Two","Three","Ten"], answer:2, boss:false, tag:"SS-CC", explain:"Three: Old Persian, Elamite and Babylonian. Later scholars used the three versions to help read cuneiform."},
   {q:"The governors who ran the provinces of the Persian Empire were called…", options:["satraps","scribes","immortals","magi"], answer:0, boss:false, tag:"SS-ICO", teach:true, explain:"Satraps ran the satrapies (provinces), collecting taxes and keeping order. The King’s Eyes and Ears checked on them."},
   {q:"Darius began building which great ceremonial city?", options:["Persepolis","Sparta","Jerusalem","Troy"], answer:0, boss:false, tag:"SS-PE", explain:"Persepolis was begun about 518 BC on a terrace at the foot of Mount Rahmat on the Marvdasht plain."},
   {q:"According to Herodotus, royal riders could cross the Royal Road in about…", options:["a day","a week","a year","a decade"], answer:1, boss:false, tag:"SS-PE", teach:true, explain:"Herodotus says royal riders took about a week, with fresh riders and horses at relay stations, while ordinary travellers needed about three months. Remember that he is a Greek source, so we say ‘about’."},
   {q:"Why did Daniel end up in the lions’ den in the Bible story?", options:["He stole","He kept praying to God","He ran away","He insulted the king"], answer:1, boss:false, tag:"RE", explain:"Daniel kept praying to God, even after a law was passed forbidding it. The story shows his courage and God’s care."},
   {q:"Darius’s officials searched the archives and found a decree made by which earlier king (Week 2)?", options:["Cyrus","Xerxes","Alexander","Cambyses"], answer:0, boss:false, tag:"SS-CC", explain:"Ezra 6 tells how Cyrus’s earlier decree was found at Ecbatana, so work on the temple could continue. Record-keeping mattered."},
   {q:"An apex predator is…", options:["the smallest animal","a top predator with few natural enemies","a kind of grass","a decomposer"], answer:1, boss:false, tag:"SC-LW-Eco", explain:"Apex predators sit at the top of a food web and have few or no natural enemies. Lions and leopards were apex predators of the old Persian lands."},
   {q:"BOSS ×2 — Which best explains how Darius governed a huge empire?", options:["Luck","Provinces, a standard coin, roads and records","Only armies","Good weather"], answer:1, boss:true, tag:"SS-CC", teach:true, explain:"Darius used satrapies with governors, the gold daric, the Royal Road with relay stations, and written records. Armies mattered too, but they were not the only tool."},
   {q:"In a food web, the arrows show…", options:["the flow of energy","which animal is cutest","distance","time"], answer:0, boss:false, tag:"SC-NoS-C", explain:"Arrows show the flow of energy and point from the food to the animal that eats it, for example grass → ibex → leopard."},
   {q:"BOSS ×2 — If the top predator is removed from a food web, often…", options:["nothing changes","prey increase and plants may be overgrazed","all plants vanish at once","rivers dry up"], answer:1, boss:true, tag:"SC-LW-Eco", teach:true, explain:"Without the top predator, grazers may increase and overgraze plants, which can harm other animals too. Scientists say ‘may’ and ‘often’ because the exact effects vary."}
  ],
  teachingMoments:[4,6,10],
  paths:[
   {id:"A", name:"Caravan Log", icon:"book",
    brief:"Reflect on your week: what you now know, what is still a mystery, and your Faith Thought.",
    checklist:["I wrote 3 things I now know","I wrote 1 thing that is still a mystery","I wrote a Faith Thought (what I learned about God or people)","I rated my own effort honestly"],
    scaffold:"<b>I now know…</b> <br><b>It is still a mystery…</b> <br><b>My Faith Thought:</b> This week I saw that God…",
    diff:{supported:"Use sentence starters and draw a picture instead of writing one of the answers.",
          standard:"Write all three sections in full sentences.",
          extended:"Connect two subjects (for example roads and food webs, both about ‘links’) in one paragraph."}},
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
   see:{refs:["Ezra 6:1–12","Isa 40:3–4","Dan 6:19–23","Mark 10:42–45"],text:"This week we met a record found in an archive so that a promise could be kept, a road made ready for others, a man of courage among lions, and a servant-king who gives his life for others."},
   wonder:"What was the most important ‘road’, ‘record’ or ‘promise’ you noticed this week?",
   weigh:"Which of this week’s ideas, an organised empire, a food web, or a servant-king, made you think hardest?",
   respond:"Say your Relay Creed together. Pray for each other and for the journey ahead.",
   teacher:"Keep this short and joyful; celebrate teamwork and effort, not only winning.",
   verses:["Ezra 6:1–12","Isa 40:3–4","Dan 6:19–23","Mark 10:42–45"]},
  assess:{
   evidence:"Showdown data per concept tag (exportable); Victory Lap product; Relay Creed.",
   rubric:["Answers some questions with support.","Answers most questions accurately.","Explains why wrong answers were wrong and applies the idea to new situations.","Writes strong questions with clear decoys and explanations."]},
  nzConnection:"Link back to the NZ connections of the week: how communities share information; ara and tracks; predator-free New Zealand; carving that carries stories.",
  sensitivity:"Winning is not the point of the Showdown: keep celebrating effort. Some students may feel anxious about public rankings; offer the ‘anonymise names’ option. In a relay, remind students that every runner counts.",
  inquiry:["What did the Showdown data show? Which tags had the lowest success?","Which misconception needs re-teaching on Monday (the direction of food-web arrows, or Herodotus’ numbers)?","What will I change next week?"],
  widgets:[]
 }
 }
};
})();
