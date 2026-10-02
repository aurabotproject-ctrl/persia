/* ===================================================================
   STAGE 6 — REBUILDING THE WALLS  (Week 6 · full lesson data)
   Ezra (458 BC) and Nehemiah (445 BC) under Artaxerxes I.
   Same schema as week01.js / week03.js.
   NZ English spelling. Scripture is paraphrased — read from your own
   Bible translation in class.
   =================================================================== */
(function(){
const RR=window.RR; RR.WEEKS=RR.WEEKS||{};

RR.WEEKS[6] = {
 n:6,
 title:"Rebuilding the Walls",
 era:"458–432 BC",
 place:"Babylon → Jerusalem, Susa",
 fragment:"Fragment of the Wall",
 story:{
  briefing:"Mockers are laughing at the half-built walls of Jerusalem. The only way to get our fragment is to work as ONE caravan.",
  briefingFull:"Courier! Shirin here, dust in my hair and a trowel in my belt. We have followed the Royal Road all the way to Jerusalem, and what a sight: a hill city with its walls tumbled down, gates burnt and gaps big enough to drive a cart through. A man called Nehemiah has asked every family to repair the stretch in front of their own house. Some people are cheering. Others, on the hill opposite, are laughing and shouting that a fox could knock the whole thing over. The next Fragment is hidden somewhere in that wall, and no single caravan can lift it alone. This week you will learn how the Persian kings helped the returning families, how a hill city defends itself, how a damaged habitat can be repaired, and how to build a gate that welcomes. Work as ONE caravan, Courier. Bring your trowel. And watch the ridge: someone is watching us again.",
  shadowCourier:"A fresh silver brick, set neatly in a gap in the wall overnight.",
  shadowClue:"At dawn, one gap in the north wall is mended: a single brick, set perfectly straight, still damp with mortar. Beside it, scratched very small, is a silver mark and three words: ‘Build, then guard.’ Nobody in the camp admits to laying it. Someone mends walls by night, and keeps the best secrets.",
  event:"The Wall of 52 Days — every Caravan adds bricks to ONE shared wall. If the wall is finished, everyone gains.",
  fridayReveal:"The last brick of the class wall is set, and the mockers on the ridge fall quiet. Behind a loose stone in the gate-tower the champions of Stage 6 find the Fragment of the Wall, rough as mortar and warm as a hearth. It fits against the other fragments with a quiet click. Beside it lies a bundle of old letters tied with cord, and a silver note: ‘The walls are only the first gate. The road goes on to the market of the world.’"
 },
 materials:["Neh 1–6 reading (your own Bible translation); copies of the ‘decree phrase’ cut-up strips for the Escape Room","Building blocks (wooden or foam), a small ball for the ‘invader’ test","Jenga-style blocks and a marker pen (one set per team)","Planning charts and A3 paper; brick-pattern paper for the class wall (52 bricks)","Large map of the Middle East; string; calculators","Cardboard, clay or air-dry clay for gate models; rulers, set squares, pencils","Photos of wetland and forest restoration (including a Canterbury or local example)","Mini-whiteboards; A–D answer cards (for offline Showdown)"],

 days:{
 /* ====================================================================== MONDAY */
 mon:{
  id:"w6-mon", day:"mon", subject:"History",
  title:"Home Again: Persian Rule, Ezra & Nehemiah",
  tagline:"Why would a Persian king help rebuild a city that was not his?",
  nzc:["SS-CC","SS-DO","EN-W","EN-S"],
  kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
  values:["Inquiry & curiosity","Integrity","Community & participation"],
  li:"We are learning to explain why Persian kings supported rebuilding Jerusalem and how Nehemiah led.",
  sc:["I can sequence the three returns (538 BC, 458 BC, 445 BC).","I can explain Nehemiah’s leadership steps.","I can use a source and say what it shows."],
  vocab:[
   {w:"exile",d:"Being made to live far from your homeland."},
   {w:"province",d:"A region of an empire run by a governor. Judah was a small Persian province called Yehud."},
   {w:"cupbearer",d:"A trusted royal servant who tasted and served the king’s wine. He was often close to the king and had to be loyal."},
   {w:"scribe",d:"A person trained to read, write and copy important texts. Ezra was a priest and a scribe."},
   {w:"decree",d:"An official order or announcement from a ruler."},
   {w:"governor",d:"An official put in charge of a province. Nehemiah later served as governor of Judah."},
   {w:"opposition",d:"People who work against a plan or try to stop it."},
   {w:"papyrus",d:"Ancient paper made from a reed; letters on papyrus have survived in Egypt’s dry sand."}],
  resources:["‘Decree’ cut-up phrase strips (one set per team)","Timeline strip with new date cards (538 BC, 458 BC, 445 BC, 52 days)","Map of the three returns (app or printed)","Path A project-plan sheet and brick-pattern paper","Path B request-letter frame","Source card: Elephantine papyri (app or printed)","Neh 1–2 and Neh 6 reading (your own Bible)"],
  dispatch:{
   title:"The Broken Decree",
   story:"The caravan reaches a tumbled stone gatehouse where a heap of old tablets and scraps lies under a tarpaulin. Shirin kneels. ‘Look, Courier. A royal decree, torn into strips by the wind. Put the pieces back in order, and work out what it permitted. Then tell me: if you were the king, what must happen NEXT for this to be more than words on a strip?’ Behind her on the hill, a city waits with no walls.",
   easy:"A royal order has been torn into pieces! Put the pieces in order and read what the king allowed. Then plan what must happen next.",
   teacher:[
    "BEFORE CLASS: write a short, simple ‘decree’ in 6–8 phrases on strips (for example: ‘By order of the king…’, ‘the people may go home…’, ‘and rebuild their house of worship…’, ‘timber will be given from the royal forest…’, ‘and the governors must help.’). Cut into strips and make one set per Caravan (teams of 4–5, the same teams as Weeks 1–5).",
    "Retrieval (3 min): from Week 5 — which queen did God use ‘for such a time as this’? Which Persian city was her home palace? Take two ideas.",
    "Read Shirin’s dispatch aloud. Pause at ‘what must happen NEXT’.",
    "Escape Room (5 min): teams put the decree strips in the order that makes best sense. The first team to agree shouts ‘Seal it!’ and explains their order. Other teams check their own.",
    "Planning (2 min): on mini-whiteboards, teams write ‘What must happen next?’ (people, tools, materials, protection). Take quick shares without correcting.",
    "Share the Learning Intention and Success Criteria. Students read them chorally."],
   retrieval:"Week 5: Esther, Xerxes (Ahasuerus) and the city of Susa. What did a king’s decree do, and why did people have to obey it?"
  },
  discovery:{
   intro:"Three journeys, one king’s support, one leader who prayed and then planned. Learn how Persian rule made the return possible, and how Nehemiah got a huge job done.",
   cards:[
    {title:"Three returns, three dates", icon:"scroll", body:"Around <b>538 BC</b>, <b>Cyrus</b> allowed exiled peoples, including Jewish families from Babylon, to go home and rebuild their temple (<b>Ezra 1–2</b>). About <b>458 BC</b> the priest and scribe <b>Ezra</b> led a second group under <b>Artaxerxes I</b> (<b>Ezra 7–8</b>). About <b>445 BC</b> <b>Nehemiah</b> came as an official with a mission to rebuild the walls. <i>Some scholars date Ezra’s journey to a different year, so historians say ‘about’.</i>"},
    {title:"A province called Yehud", icon:"compass", body:"Judah was a small <b>province</b> of the Persian Empire, called <b>Yehud</b>. It sat in a huge region called <b>‘Beyond the River’</b> (west of the Euphrates), ruled from a satrapy centre. The Persian way was often to let local peoples keep their customs and worship while paying taxes. That policy helps explain why kings backed local temples, though Jewish and Christian readers also see <b>God moving the kings’ hearts</b>."},
    {title:"Ezra: the scribe who studied, did and taught", icon:"book", body:"<b>Ezra</b> was a priest and a skilled scribe. The book of Ezra says he had set his heart to <b>study</b> the Law, to <b>do</b> it, and to <b>teach</b> it (<b>Ezra 7:10</b>). He led a caravan from Babylon, praying and fasting before the dangerous journey instead of asking the king for soldiers. The trip took about <b>four months</b>."},
    {title:"Nehemiah: cupbearer, prayer-warrior, project leader", icon:"flame", body:"<b>Nehemiah</b> served as <b>cupbearer</b> to King <b>Artaxerxes I</b> in Susa. When he heard Jerusalem’s walls were broken, he wept, fasted and prayed (<b>Neh 1</b>). Months later, when the king noticed his sad face, Nehemiah <b>prayed a quick prayer and then asked</b> for letters of safe passage and timber (<b>Neh 2</b>). He inspected the walls at night, shared the plan, and gave each family a section (<b>Neh 3</b>). The wall was finished in <b>52 days</b> (<b>Neh 6:15</b>)."},
    {title:"Opposition and a historical source", icon:"horn", body:"Not everyone cheered. <b>Sanballat</b>, <b>Tobiah</b> and <b>Geshem</b> mocked, plotted and sent messages to scare the builders (<b>Neh 4 and 6</b>). Nehemiah’s answer: <b>pray, post a guard and keep building</b> (<b>Neh 4:9</b>). A non-biblical source: the <b>Elephantine papyri</b>, letters from a Jewish community in Egypt, about 407 BC, writing to Persian officials in Judah to ask for help to rebuild their temple. They show how a Persian province really worked: letters, officials, permissions and replies."}],
   teacher:[
    "Timeline (4 min): add three date cards to the class strip: 538 BC (Cyrus), 458 BC (Ezra), 445 BC (Nehemiah). Mini-whiteboards: ‘Who came first? How many years between Ezra and Nehemiah?’ (13). Say honestly: ‘Scholars debate Ezra’s date, so we say about.’",
    "Persian policy (4 min): ask ‘Why might a king want a province to be peaceful and loyal?’ Draw out: a settled province pays taxes and does not rebel. Add: ‘Christians also read that God worked through the king’s decisions.’ Keep both ideas side by side.",
    "Nehemiah’s steps (4 min): chart five steps on the board: HEAR the problem → PRAY → ASK (with a plan) → LOOK and SHARE the plan → ORGANISE everyone and PROTECT the builders. Ask: ‘Which step would you find hardest?’",
    "Source (3 min): show the Elephantine papyri card. Ask: ‘What does a letter to officials tell us that a story does not? What does it leave out?’ Model a source sentence: ‘I know Persian provinces used letters because the Elephantine papyri show…’.",
    "Model the first step of Paths A–C (2 min); students choose."]
  },
  paths:[
   {id:"A", name:"Nehemiah’s Project Plan", icon:"gear",
    brief:"Plan the wall like Nehemiah, inspired by Neh 3: choose roles, sections of wall, materials, steps and risks. Show who builds what, and what could go wrong.",
    checklist:["I listed at least 5 jobs or sections and who does each","I put the steps in a sensible order","I named 3 materials or tools","I named 2 risks (such as mockers, weather, shortage) and a plan for each","I explained why teamwork matters in a job this big"],
    scaffold:"<b>Project:</b> Rebuild the wall of ___. <br><b>Jobs and roles:</b> ___ builds ___ because ___. <br><b>Steps:</b> First… Then… Finally… <br><b>Risks:</b> One risk is ___. We will ___. <br><b>Prayer and plan:</b> We will ask God for ___ and we will ___.",
    diff:{supported:"Use the planning chart with the roles pre-printed; choose five and fill in who and why.",
          standard:"Create your own plan with roles, steps, materials and two risks with responses.",
          extended:"Add a timeline for 52 days (for example, week 1: clear rubble; week 2: …) and explain which job must be done first and why."}},
   {id:"B", name:"Cupbearer’s Request Letter", icon:"scroll",
    brief:"Write a polite, persuasive letter from Nehemiah to King Artaxerxes (Neh 2). Explain the problem, ask for what you need, and show you have a plan.",
    checklist:["I used a respectful greeting for a king","I explained the problem clearly","I made a specific request (permission, letters of passage, timber)","I gave at least two reasons the king would benefit","I ended politely and signed as Nehemiah"],
    scaffold:"<b>Greeting:</b> To King Artaxerxes, may you live long. <br><b>Problem:</b> The city of my ancestors lies in ruins because… <br><b>Request:</b> If it pleases the king, I ask for… <br><b>Plan:</b> I will… and I will return to report… <br><b>Why it helps:</b> A peaceful, safe province will… <br><b>Sign-off:</b> Your faithful servant, Nehemiah.",
    diff:{supported:"Use the letter frame with starters for each paragraph; share your ideas with a partner first.",
          standard:"Write the letter independently using the frame, with a clear request and two reasons.",
          extended:"Write TWO versions: one for the king’s ears (focus on the province’s benefits) and one prayer to God (what Nehemiah really felt). Explain why they are different."}},
   {id:"C", name:"Returnee Diary", icon:"book",
    brief:"Write three diary entries from a family on the road from Babylon to Jerusalem: leaving, the journey, and arriving at the broken city.",
    checklist:["I wrote three dated entries (leaving, journey, arrival)","I included at least two true details (distance, desert, camp, dust, fear, joy)","I showed feelings, not only facts","I used the words exile, province or decree","I included a prayer or hope"],
    scaffold:"<b>Entry 1 (leaving):</b> Today we left Babylon because… I feel… <br><b>Entry 2 (journey):</b> The road was… We worry about… We were glad when… <br><b>Entry 3 (arrival):</b> When I saw the walls… I will…",
    diff:{supported:"Use the entry starters and a word bank (dust · camp · camel · decree · hope · ruins) for each entry.",
          standard:"Write three full entries with true details and feelings.",
          extended:"Write from two different family members (a child who has only known Babylon, and a grandparent who remembers a story of home) and show how their feelings differ."}}
  ],
  councilFire:{
   see:{refs:["Neh 1:4–11","Neh 4:9","Ezra 7:10"],
        text:"Nehemiah hears about Jerusalem’s broken walls and sits down and weeps. He fasts and prays, confessing his people’s failures and asking God to give him favour with the king. Later, when enemies threaten the builders, he says they prayed to God and also set a guard day and night. And Ezra had set his heart to study God’s law, to live it, and to teach it."},
   wonder:"Nehemiah prayed AND planned. Why do you think he did both? What would have gone wrong if he had only prayed? What if he had only planned?",
   weigh:"Think of a big team job, for example a school production or a garden. What does it look like to pray AND to plan and work hard? How is this different from asking God to do everything, or from trusting only yourself?",
   respond:"Write: ‘One big job I need to pray and plan for is…’. Then write one prayer and one first step.",
   teacher:"Historians cannot confirm every detail of Ezra and Nehemiah from outside sources, and the date of Ezra’s journey is debated. Christians read the books as Scripture; others in the class may read them as history or as stories. Keep the focus on leadership and perseverance. Avoid suggesting that all Persian rulers shared Jewish faith, and never put students of other faiths on the spot.",
   verses:["Neh 1:4–11","Neh 2:4–8","Neh 4:9","Ezra 7:10"]},
  assess:{
   evidence:"Planning detail (Path A) or the letter or diary (B/C); a source sentence (‘I know… because…’); observation notes from the Council Fire.",
   rubric:["Names Ezra or Nehemiah and one thing they did, with support.","Sequences the three returns correctly and describes Nehemiah’s main steps.","Explains why Persian kings supported rebuilding, using evidence and the idea of policy, and explains cause and effect in the Nehemiah story.","Evaluates Nehemiah’s leadership, weighs different explanations for the king’s support (policy and faith), and says what a source can and cannot tell us."]},
  nzConnection:"How do communities in Aotearoa rebuild after something is lost or damaged, for example a marae, a church or community hall after an earthquake or flood? Who leads? How do whānau and neighbours share the work? (Invite your Māori Education lead or local iwi/hapū to share how rebuilding looks in your own rohe, and avoid generalising across iwi. Canterbury classes may also wish to talk about the rebuilding after the earthquakes.)",
  sensitivity:"The Persian kings in this story are shown helping the Jewish people. Present Persian rule as complex: kings supported local temples for many reasons, including policy. Some students may be Iranian-NZ, Muslim, Jewish or from a Zoroastrian background; treat the story with respect and never ask a child to speak for a whole community. Do not suggest that the biblical account is the only way to see the history.",
  inquiry:["Could students put the three returns in order and explain why each happened?","Who could give TWO reasons the king helped, not just one?","Did students show Nehemiah’s steps (hear, pray, ask, plan, organise) in their plan, letter or diary?"],
  widgets:[
   {type:"order", title:"The Three Returns", prompt:"Put these events in the order they happened.",
    items:["Cyrus lets exiled peoples go home (about 538 BC)","The temple in Jerusalem is completed (about 516–515 BC)","Ezra leads a caravan from Babylon (about 458 BC)","Nehemiah arrives to rebuild the walls (about 445 BC)","The wall is finished in 52 days"]},
   {type:"match", title:"Who or What Is It?", prompt:"Match each name or word to its meaning.",
    pairs:[["Ezra","A priest and scribe who taught the Law"],["Nehemiah","The king’s cupbearer who led the wall-building"],["Artaxerxes I","The Persian king Nehemiah served"],["Yehud","The Persian name for the province of Judah"],["Cupbearer","A trusted servant who tasted and served the king’s wine"],["Sanballat","A leader who mocked and opposed the builders"]]},
   {type:"sort", title:"Nehemiah: Pray, Plan or Protect?", prompt:"Sort each action into the bin that fits best.",
    bins:["Pray","Plan","Protect"],
    items:[{t:"Nehemiah weeps, fasts and confesses to God (Neh 1)",bin:0},{t:"He asks the king for letters and timber (Neh 2)",bin:1},{t:"He inspects the walls at night before telling anyone",bin:1},{t:"Every family repairs the section in front of their house (Neh 3)",bin:1},{t:"Half the men build while the other half stand guard with spears (Neh 4)",bin:2},{t:"‘We prayed to our God and posted a guard’ (Neh 4:9)",bin:0},{t:"Builders keep a weapon within reach while they work",bin:2},{t:"He prays a quick prayer before answering the king (Neh 2:4)",bin:0}]},
   {type:"reveal", title:"What Do the Sources Say?", prompt:"Tap each card to see what a source shows, and what it might leave out.",
    cards:[{front:"Ezra and Nehemiah (Bible books)",back:"Tell the story of the returns and the rebuilding from a faith perspective, with names, dates and prayers. They focus on God’s faithfulness and on the community."},{front:"The Elephantine papyri",back:"Letters (about 407 BC) from a Jewish community in Egypt to Persian officials. They show how permission, letters and replies worked in the empire. They do not mention Ezra’s or Nehemiah’s walls directly."},{front:"Persian royal policy",back:"Persian kings often let conquered peoples worship in their own way. Historians say this helped keep provinces quiet and loyal. It was policy, not only kindness."},{front:"A stone wall that still stands",back:"Archaeologists have found remains of walls in Jerusalem from different times. Experts debate which parts belong to which period, so we say ‘may be’ about Nehemiah’s wall."}]}
  ]
 },

 /* ====================================================================== TUESDAY */
 tue:{
  id:"w6-tue", day:"tue", subject:"Geography — Settlements & Cities",
  title:"Jerusalem on a Hill: Walls, Gates & the Return Route",
  tagline:"Why was the city built on a hill, and what do walls and gates do?",
  nzc:["SS-PE","SS-ICO","MA-G"],
  kc:["Thinking","Using language, symbols & texts","Relating to others"],
  values:["Inquiry & curiosity","Ecological sustainability","Community & participation"],
  li:"We are learning to explain why a walled hill city was built where it was, and to map a long journey.",
  sc:["I can name four reasons Jerusalem’s site worked (hill, spring, defence, routes).","I can map the return route from Babylon to Jerusalem.","I can describe how gates and walls work."],
  vocab:[
   {w:"ridge",d:"A long, narrow stretch of high land."},
   {w:"spring",d:"Water that flows naturally out of the ground. Jerusalem’s main spring was the Gihon."},
   {w:"fortification",d:"A wall, tower or other structure that protects a place."},
   {w:"gate",d:"An opening in a wall that can be opened or closed. Gates were also markets and courts."},
   {w:"Fertile Crescent",d:"A curve of green farmland from the Persian Gulf up the rivers and round to the Mediterranean."},
   {w:"route",d:"A way from one place to another."},
   {w:"hazard",d:"Something that could cause harm or delay on a journey."},
   {w:"scale",d:"How map distance relates to real distance."}],
  resources:["Wooden or foam blocks; small ball or marble (‘invader’); sand tray (optional)","Large map of the Middle East; string; atlases","Cardboard, clay, glue, small sticks for gates","Return-route outline map and a hazard card set","Jerusalem hill-and-valleys diagram (app or printed)","Local-area map for Path C"],
  dispatch:{
   title:"Build a City Wall",
   story:"The caravan arrives at a pile of fallen stones. Shirin tosses you a handful of blocks. ‘Nehemiah’s workers needed a wall that would stop an enemy, but also let friends in. You have five minutes. Build a wall around the village on the table, then we will test it with an invader.’ She holds up a small ball and grins. ‘Be ready. Walls always get tested.’",
   easy:"Build a wall from blocks around a small village. Then we roll a ball at it. Does your wall hold?",
   teacher:[
    "BEFORE CLASS: set out a block set per Caravan, a small cardboard ‘village’, and a small ball (the ‘invader’). Use a tray or table edge so the ball does not roll far.",
    "Retrieval (2 min): Monday — name two of Nehemiah’s steps; which king did he serve; how long did the wall take?",
    "Read Shirin’s dispatch. Teams build a wall around the village (4 min): they must include one gate.",
    "Test (3 min): roll the ball at each wall and at each gate. Which designs hold? Why did a gate become a weak point? Record observations on a mini-whiteboard.",
    "Share the LI/SC and draw out ideas: shape, thickness, height, and the role of the gate. Say: ‘Cities do not only need walls: they need smart gates.’"],
   retrieval:"Monday: Nehemiah’s steps (hear, pray, ask, plan, organise); his king; the 52 days."
  },
  discovery:{
   intro:"A hill, a spring, deep valleys and busy roads: Jerusalem’s site gave it four big advantages, and every one of them shows up on a map.",
   cards:[
    {title:"A city on a ridge", icon:"compass", body:"Ancient <b>Jerusalem</b> sat on a rocky <b>ridge</b>, with deep <b>valleys</b> on several sides that worked like natural moats. An enemy had to climb up steep ground to attack. This is one reason people chose the site long before the Persians. Ancient Jerusalem was small, perhaps as little as a few hectares, much smaller than a modern city. <i>Archaeologists still debate how big the city was in Nehemiah’s time.</i>"},
    {title:"The Gihon spring", icon:"flame", body:"Water was life. Just outside the old city lay the <b>Gihon spring</b>, a rare natural source in the hills. Over time, people dug channels and tunnels to bring spring water safely inside the walls. Having water inside a wall means a city can survive a <b>siege</b>."},
    {title:"Walls and gates", icon:"home", body:"A wall keeps a city safe, but a wall with no gates is just a fence! <b>Gates</b> let in traders, farmers and visitors. Gates were also the city’s <b>market</b> and <b>court</b>, where elders sat to settle disputes. Nehemiah 3 lists gates, including the <b>Sheep Gate</b>, <b>Fish Gate</b>, <b>Valley Gate</b>, <b>Water Gate</b> and <b>Horse Gate</b>. Each name hints at what came through it."},
    {title:"The return route", icon:"scroll", body:"From <b>Babylon</b>, travellers could not cross the Syrian Desert directly, so they followed the curve of the <b>Fertile Crescent</b>: up the <b>Euphrates</b>, round the north and then south toward Jerusalem. The distance was roughly <b>1,400 km</b>. Ezra’s group took about <b>four months</b>, including rests and camps (<b>Ezra 7:9</b>)."},
    {title:"Hill city, hill pā", icon:"paw", body:"Many people around the world chose high places for settlements: for defence, view and safety. In Aotearoa, many pā were built on ridges, headlands or other high ground, with ditches and palisades. Each pā was a choice made for a particular place and iwi, so we <b>ask local mana whenua</b> about pā in our own area."}],
   teacher:[
    "Site (5 min): show the Jerusalem diagram. Point to the ridge, valleys and Gihon. Ask: ‘Which of the four reasons does each feature give: hill, spring, defence, routes?’ Mini-whiteboards: students match feature to reason.",
    "Gates (3 min): read out a few gate names from Neh 3 and ask students to guess what came through each. Link to a market (Sheep Gate) or a water source (Water Gate).",
    "Route (4 min): trace the Fertile Crescent on the big map, tracking with string. Calculate: ‘If a caravan walks 25 km a day, how many days is 1,400 km?’ (56). Compare with Ezra’s four months, including rests.",
    "Local link (3 min): ‘Why would people choose a hill or a ridge?’ Collect ideas. Say clearly: ‘Pā sites were chosen by specific iwi for specific reasons. Our teacher will invite local mana whenua to share the stories of our own area.’"]
  },
  paths:[
   {id:"A", name:"Walled City Model with Gates", icon:"home",
    brief:"Build a model of a walled hill city with at least three labelled gates. Show the ridge, the valleys and a water source.",
    checklist:["My model shows a hill or ridge","I included at least 3 gates and labelled what each is for","I showed a water source (spring or tunnel)","I included a key or labels","I can explain two ways the site helps defence"],
    scaffold:"<b>Label bank:</b> wall · gate · tower · spring · valley · ridge · market · road. <br><b>Say it:</b> The ___ gate is where ___ come in. The wall protects the city because ___.",
    diff:{supported:"Use a pre-made base with the hill shaped; add a wall, three gates and labels from the bank.",
          standard:"Build and label independently with a key and a water source.",
          extended:"Add a cut-away showing how spring water could reach the city safely and explain why this matters in a siege."}},
   {id:"B", name:"Return Route Map", icon:"compass",
    brief:"Draw a map of the return route from Babylon to Jerusalem with a title, compass rose, scale bar and key. Mark at least six places, three hazards, and calculate the journey time.",
    checklist:["Title, compass rose, scale bar and key","Route shown clearly around the desert","At least 6 labelled places (such as Babylon, the Euphrates, Jerusalem, the Mediterranean)","3 hazards (desert, rivers, bandits, thirst, weather)","Distance and travel days calculated"],
    scaffold:"<b>Route:</b> Babylon → along the Euphrates → around the desert → south to Jerusalem. <br><b>Calculate:</b> ___ km ÷ ___ km per day = ___ days. <br><b>Hazards:</b> One risk is ___ and travellers could ___.",
    diff:{supported:"Use a printed outline map; trace the route, add compass and scale bar, and mark three places.",
          standard:"Draw independently with all map conventions and 6 places, and calculate the days at 25 km a day.",
          extended:"Calculate the journey at three speeds (20, 25, 30 km a day), compare with Ezra’s four-month trip, and explain what could account for the difference."}},
   {id:"C", name:"Settlement Comparison: Jerusalem and a Hill Settlement at Home", icon:"ibex",
    brief:"Compare Jerusalem with a hilltop or defended settlement in your own area (such as a pā site or a historic hill fort, chosen with guidance from local mana whenua or your Māori Education lead). How are their sites alike and different?",
    checklist:["I described the site of each settlement","I gave two similarities and two differences","I named at least one way water, defence and routes mattered in each","I used local guidance and avoided generalising across iwi","I wrote a conclusion"],
    scaffold:"<b>Similar:</b> Both… <br><b>Different:</b> But in ___, … whereas in ___… <br><b>Local guidance:</b> Our teacher invited ___ to tell us… <br><b>Conclusion:</b> People chose these places because…",
    diff:{supported:"Use a two-column table with sentence starters; choose from a bank of features (hill, water, view, wall, route).",
          standard:"Write a paragraph comparing the two with two similarities and two differences.",
          extended:"Argue which site was better defended and explain what other factors (water, food, trade) also mattered."}}
  ],
  councilFire:{
   see:{refs:["Ps 122","Ps 125:2","Neh 3"],
        text:"Psalm 122 is a song of joy about going up to Jerusalem, a city joined firmly together, where people gather for peace. Psalm 125 says the hills surround Jerusalem and the Lord surrounds His people. In Nehemiah 3, priests, goldsmiths, perfumers, rulers and ordinary families repair the wall together, each taking a section."},
   wonder:"What is the job of a wall? What is the job of a gate? What would happen to a city that had one but not the other?",
   weigh:"A good community has strong boundaries (to keep people safe) and open welcome (to let others in). How can a classroom or a school do both?",
   respond:"Write or draw one way our class can be ‘a place with open gates’, where new people feel welcome and safe.",
   teacher:"Keep a balanced tone. Walls can protect, and walls can also exclude. Do not draw modern political conclusions about walls or borders. Keep the focus on the ancient city, and the Psalm’s idea of peace and belonging.",
   verses:["Ps 122","Ps 125:2","Neh 3"]},
  assess:{
   evidence:"The map (conventions, accuracy of route and calculations); a site explanation using at least three of: hill, spring, defence, routes; photograph of the model.",
   rubric:["Names one or two features of Jerusalem’s site with support.","Names four reasons the site worked and uses a compass and scale bar on a map.","Explains how each feature helped the city, calculates journey time, and describes what walls and gates do.","Compares Jerusalem with another settlement, weighs advantages and disadvantages, and evaluates what else mattered."]},
  nzConnection:"Compare the choice of high places for settlement in Jerusalem with pā on ridges and headlands in Aotearoa. Invite your Māori Education lead or local iwi/hapū to share the stories of pā or kāinga in your rohe, and avoid generalising across iwi. How did people there use water, food, defence and trade routes to choose where to live? Canterbury classes might explore how the Port Hills or Banks Peninsula shaped settlement.",
  sensitivity:"Jerusalem is sacred to Jews, Christians and Muslims, and is a sensitive subject today. Keep this lesson to the ancient city and its landforms. Do not draw modern political conclusions, and never ask a student to speak for a whole community.",
  inquiry:["Could students explain WHY each feature mattered (not only name it)?","Did students use scale and calculations correctly in Path B?","How did students explain the role of gates, not only walls?"],
  widgets:[
   {type:"match", title:"Jerusalem’s Site", prompt:"Match each feature to how it helped the city.",
    pairs:[["Ridge","High ground that is hard for enemies to climb"],["Valleys","Natural moats on several sides"],["Gihon spring","A reliable source of water close to the city"],["Gates","Let people in and out and served as market and court"],["Wall","Stops enemies and protects the people inside"],["Trade routes","Brought travellers, goods and news"]]},
   {type:"order", title:"The Road from Babylon", prompt:"Put the stages of the return journey in order.",
    items:["Leave Babylon beside the Euphrates","Follow the Fertile Crescent north-west along the river","Turn south, away from the desert, toward the Mediterranean coast","Cross hills and valleys toward the highlands","Arrive at the hill city of Jerusalem"]},
   {type:"sort", title:"Wall or Gate?", prompt:"Is each description mostly about the wall or the gate?",
    bins:["Wall","Gate"],
    items:[{t:"Stops enemies climbing in",bin:0},{t:"Lets traders and farmers come in",bin:1},{t:"Where elders met to settle disputes",bin:1},{t:"A thick, high barrier around the city",bin:0},{t:"Where guards watched and could close the way",bin:1},{t:"Marks the edge of the city",bin:0},{t:"A good place for a market",bin:1},{t:"Gets stronger when it is thicker and higher",bin:0}]},
   {type:"reveal", title:"Why Build Here?", prompt:"Tap each card to see how the site helped ancient Jerusalem.",
    cards:[{front:"The ridge",back:"High ground means better views and a harder climb for enemies. Valleys on several sides add natural protection."},{front:"The spring",back:"The Gihon gave a reliable water supply. Water inside the walls helps a city survive a siege."},{front:"The routes",back:"Roads crossed the hills nearby, so travellers, traders and news could reach the city."},{front:"The limits",back:"The site was small and the land around is dry. Cities need food as well as defence, so people relied on farms and trade."}]}
  ]
 },

 /* ====================================================================== WEDNESDAY */
 wed:{
  id:"w6-wed", day:"wed", subject:"Science — Habitats & Restoration",
  title:"Rebuilding a Habitat: Restoration & Recovery",
  tagline:"What happens when a link in the web is lost, and how do we help it recover?",
  nzc:["SC-LW-Eco","SC-NoS-P","SC-NoS-I"],
  kc:["Thinking","Using language, symbols & texts","Managing self"],
  values:["Ecological sustainability","Inquiry & curiosity","Community & participation"],
  li:"We are learning to explain how habitats are damaged and how they can be restored.",
  sc:["I can name human causes of habitat damage.","I can explain one restoration step.","I can model what happens when a link in a web is lost."],
  vocab:[
   {w:"habitat",d:"The natural home of a living thing."},
   {w:"restoration",d:"Repairing a damaged place or habitat so living things can return."},
   {w:"ecosystem",d:"A community of living things plus the non-living parts (soil, water, air, sunlight) around them."},
   {w:"extinct",d:"No more living members of that kind of living thing exist."},
   {w:"endangered",d:"At risk of becoming extinct."},
   {w:"reintroduction",d:"Bringing an animal back into a place where it used to live."},
   {w:"introduced species",d:"A living thing brought by people to a place where it did not live before."},
   {w:"predator control",d:"Trapping or removing predators that harm native animals."}],
  resources:["Jenga-style blocks and a marker pen per team","Recording table for the Jenga Web","Photos of Zagros oak woodland and Persian fallow deer","Photos of a NZ restoration site (a Canterbury or local example if possible)","Animal Cards (collect weekly)","Recording sheets and A3 paper"],
  dispatch:{
   title:"The Jenga Web",
   story:"Under the oaks of a dry hill, Shirin stacks a tower of wooden blocks. ‘Each block is a living thing: grass, oak, deer, bee, fox, fungus, seed. Take it in turns to pull one out. The tower is the web of life. Be careful, Courier, because I have never seen the tower fall without somebody gasping.’ Gandom the camel leans in, nudges a block, and the tower begins to wobble.",
   easy:"Each block is a plant or an animal. Take turns pulling one block out. When does the tower fall?",
   teacher:[
    "BEFORE CLASS: Label the blocks on a Jenga-style set with species (grass, oak, acorn-eating bird, fallow deer, beetle, fungus, shrub, wolf, bee, seed…). Use a marker; allow 12–15 labelled blocks per Caravan.",
    "Retrieval (2 min): Tuesday — name two features that helped Jerusalem’s defence; what is a gate for; how long is the return route?",
    "Read the dispatch. Teams take turns removing a block (3 min per round) and saying which species they removed and what they think will happen. Record on a table: Round · block removed · did the tower wobble or fall?",
    "Discuss (3 min): ‘When did the tower first wobble? Were all blocks equally important? Did removing blocks from the bottom or the middle matter more?’",
    "Link: ‘In a real habitat, nature has many links, and it can lose them when people clear forests, drain wetlands or bring in new species.’ Share LI/SC."],
   retrieval:"Tuesday: ridge, spring, valleys and routes; the job of gates; about 1,400 km by the Fertile Crescent."
  },
  discovery:{
   intro:"Habitats change. Some changes are natural. Others are caused by people. And some damaged places can be repaired, though it takes patience, teamwork and hard work, like rebuilding a wall.",
   cards:[
    {title:"Change, damage and recovery", icon:"book", body:"Habitats change naturally through fire, flood or drought. People can also change habitats by <b>clearing forests</b>, <b>overgrazing</b>, <b>draining wetlands</b>, <b>polluting water</b> or <b>bringing in new species</b>. A habitat that has been damaged can <b>recover</b>, but sometimes it needs help. <b>Restoration</b> is repair work: protect the place, replant, remove pests."},
    {title:"The Zagros oak woodland", icon:"star", body:"The slopes of the Zagros were once covered in <b>oak woodland</b> (Persian oak and wild pistachio). Over many centuries, woodland has been lost to <b>wood cutting</b>, <b>grazing</b> and <b>farming</b>. Without trees, soil washes off the slopes and streams can dry up. Today, projects in Iran work to <b>protect and replant</b> oak forest, though the work is slow."},
    {title:"The Persian fallow deer: a rediscovery", icon:"paw", body:"The <b>Persian fallow deer</b> has <b>palmate antlers</b> (flat, like open hands) and a reddish-brown coat with white spots in summer. Hunting and loss of riverside woodland nearly wiped it out. It was thought to be <b>lost</b> until a few were found alive in <b>Iran in the 1950s</b>. Since then, it has been <b>protected</b> in reserves and some deer have been <b>reintroduced</b> to other places. It is still rare, so people keep a close watch. <i>Scientists say ‘thought lost’ because small numbers can hide in remote places.</i>"},
    {title:"Restoration steps", icon:"gear", body:"Most restoration follows steps: <b>1 Protect</b> the place (fences, reserves). <b>2 Remove the cause</b> of harm (overgrazing, pests, pollution). <b>3 Replant</b> or <b>reintroduce</b> native species. <b>4 Monitor</b> and keep caring. Success takes years, and different groups, scientists, farmers, iwi and schools, must work together."},
    {title:"Restoration in Aotearoa", icon:"home", body:"New Zealand has restoration stories of its own: <b>predator control</b> to protect native birds, <b>native plantings</b> along streams, and <b>wetland restoration</b> such as <b>Travis Wetland</b> in Christchurch. Many of these projects are led by communities, volunteers, schools and <b>iwi</b>, often through the idea of <b>kaitiakitanga</b> (guardianship). Ask your local iwi or Māori Education lead how restoration works in your rohe."}],
   teacher:[
    "Web discussion (4 min): reflect on the Jenga results. ‘What did we learn about links? Which blocks mattered most? Did we ever notice the tower fell after several small removals?’ Use ‘often’ and ‘may’: real ecosystems vary.",
    "Causes (4 min): list human causes of habitat damage on the board. Students sort each as: clearing · grazing · draining · pollution · introduced species. Ask ‘Which of these happens in our region?’",
    "Fallow deer (4 min): show the photo. Tell the rediscovery story, using hedged language. Ask: ‘Why might a small group be at risk even after it is protected?’ (small numbers, disease, one disaster).",
    "Restoration steps (3 min): list the four steps. Link to the wall: ‘Protect, remove the cause, rebuild, monitor: Nehemiah’s steps again!’ Introduce Animal Cards (1 min)."]
  },
  paths:[
   {id:"A", name:"Restoration Plan", icon:"gear",
    brief:"Choose a damaged habitat (an oak woodland, a wetland, a stream or a local site). Write a restoration plan with steps, species, helpers and a timeline.",
    checklist:["I named the habitat and what damaged it","I wrote at least 4 steps in a sensible order","I named two species to protect or bring back","I named who would help (scientists, schools, iwi, farmers)","I explained how we would know if it worked"],
    scaffold:"<b>Habitat:</b> ___ <br><b>What went wrong:</b> It was damaged because… <br><b>Steps:</b> 1 Protect… 2 Remove… 3 Replant… 4 Monitor… <br><b>Helpers:</b> ___, ___ and ___ will help. <br><b>Success:</b> We will know it is working when…",
    diff:{supported:"Use the step frame and a species bank (oak · fallow deer · grass · beetle · bird · stream); complete each step with a sentence.",
          standard:"Write the plan independently with four steps, two species and two helpers.",
          extended:"Add a 10-year timeline and explain which step must come first and why, and one thing that could go wrong."}},
   {id:"B", name:"Jenga Web Investigation", icon:"compass",
    brief:"Investigate the Jenga web as a scientist. Record which blocks are removed and when the tower wobbles or falls, then analyse your data and draw a conclusion.",
    checklist:["I recorded each round in a table (block removed · result)","I repeated the test at least twice","I noticed a pattern in the data","I wrote a conclusion that uses evidence","I explained how a Jenga tower is and is not like a real ecosystem"],
    scaffold:"<b>Question:</b> Does removing blocks from the bottom make the tower fall sooner? <br><b>Table:</b> Round · Block removed · Wobble? · Fell? <br><b>Pattern:</b> I noticed that… <br><b>Conclusion:</b> The data suggests… <br><b>Limitation:</b> A real ecosystem is different because…",
    diff:{supported:"Use a pre-made table and work with a partner to record; complete the sentence ‘The tower fell when…’.",
          standard:"Run two trials, record the results, and write a conclusion with one limitation.",
          extended:"Design a fair test: change one variable (for example, remove only ‘top’ blocks) and explain what you kept the same."}},
   {id:"C", name:"Two Habitats, One Problem", icon:"ibex",
    brief:"Compare a Persian restoration story (Zagros oak woodland or the Persian fallow deer) with a New Zealand restoration story (such as Travis Wetland or predator control for a native bird). What problem do both share, and how are the solutions alike and different?",
    checklist:["I described the Persian story in my own words","I described a NZ story with a real example","I named one shared problem","I gave two similarities and one difference in the solutions","I used the words habitat, restoration and ecosystem"],
    scaffold:"<b>Persian story:</b> In Iran, … <br><b>NZ story:</b> In Aotearoa, … <br><b>Shared problem:</b> Both… <br><b>Similar:</b> Both used… <br><b>Different:</b> In ___, however, …",
    diff:{supported:"Use a two-column table with a word bank (protect · replant · pests · deer · wetland · birds) to complete.",
          standard:"Write a short comparison with two similarities and a difference.",
          extended:"Evaluate which story shows the faster recovery and explain what else you would need to know to be sure."}}
  ],
  councilFire:{
   see:{refs:["Isa 58:12","Rom 8:19–21","Gen 2:15"],
        text:"Isaiah says that those who help others will be called ‘repairers of broken walls’ and ‘restorers of streets to live in’. Paul writes that the whole creation waits, as if with eager hope, to be set free from decay. In Genesis, God places the first human in the garden to work it and take care of it."},
   wonder:"What does it mean to be a ‘repairer of broken walls and restorer of streets’? What did Nehemiah’s workers do, and what could we repair today?",
   weigh:"Rebuilding walls and restoring habitats are both about repair and care. What do they share? What might be different (people and wildlife, buildings and ecosystems)?",
   respond:"Choose ONE hands-on restoration act you can do at school or home this term (for example, planting, weeding, rubbish collection, or building a bird box), and write who will help you.",
   teacher:"Present stewardship as a gift and a responsibility, not guilt. Christians hold a range of views on how creation’s ‘waiting’ in Romans 8 should be read; keep the focus on care for creation. Link to kaitiakitanga with care and invite local voices, without generalising across iwi.",
   verses:["Isa 58:12","Rom 8:19–21","Gen 2:15"]},
  assess:{
   evidence:"Vocabulary use; the quality and sequence of restoration steps; Jenga data table and conclusion; photograph of Path products.",
   rubric:["Names one human cause of habitat damage or one restoration step, with support.","Describes causes of damage and several restoration steps accurately, using the key vocabulary.","Explains how losing one link affects others, and explains why each restoration step helps.","Compares two restoration stories, evaluates the limits of the Jenga model, and proposes how to test whether restoration worked."]},
  nzConnection:"Aotearoa has many restoration stories: native plantings on riverbanks, wetlands like Travis Wetland, predator-free sanctuaries and kākāpō recovery. Which are in your area? Who is leading them? Link to kaitiakitanga and invite your local iwi, Māori Education lead or a local restoration group to visit or share; avoid generalising across iwi.",
  sensitivity:"Habitat loss can feel heavy for some students. Frame it as ‘a problem people can help fix’, with real examples of recovery. The fallow-deer story is one of hope. Avoid blaming any country or people for environmental harm; these are shared problems.",
  inquiry:["Could students link ‘a lost block’ to ‘a lost species’ and explain the cascade?","Did students recognise that a model (Jenga) has limits?","Which restoration step did students find hardest to explain?"],
  widgets:[
   {type:"sort", title:"Damage or Repair?", prompt:"Does each action damage a habitat, or help restore it?",
    bins:["Damages a habitat","Helps restore a habitat"],
    items:[{t:"Cutting down a whole woodland for firewood",bin:0},{t:"Planting native trees along a stream",bin:1},{t:"Draining a wetland to make a car park",bin:0},{t:"Trapping rats and stoats to protect native birds",bin:1},{t:"Letting too many animals graze a hillside bare",bin:0},{t:"Fencing a stream so stock cannot trample it",bin:1},{t:"Pouring waste into a river",bin:0},{t:"Taking part in a school planting day",bin:1}]},
   {type:"match", title:"Restoration Words", prompt:"Match each word to its meaning.",
    pairs:[["Habitat","The natural home of a living thing"],["Restoration","Repairing a damaged place so living things can return"],["Reintroduction","Bringing an animal back to where it used to live"],["Extinct","No living members of that kind remain"],["Endangered","At risk of becoming extinct"],["Introduced species","A living thing brought by people to a new place"],["Kaitiakitanga","Guardianship and care of the environment"]]},
   {type:"order", title:"Steps of Restoration", prompt:"Put these restoration steps in a sensible order.",
    items:["Protect the damaged place (fence or reserve)","Remove the cause of harm (pests, overgrazing or pollution)","Replant native plants or reintroduce animals","Monitor how the place is recovering","Keep caring and share what you learned"]},
   {type:"reveal", title:"The Persian Fallow Deer Story", prompt:"Tap each card to follow the deer’s story.",
    cards:[{front:"Who is it?",back:"The Persian fallow deer, with flat, hand-shaped (palmate) antlers and a spotted summer coat. It once lived in woodland along rivers in the Middle East."},{front:"What went wrong?",back:"Hunting and loss of woodland by rivers reduced the numbers until people feared it was gone."},{front:"The rediscovery",back:"In the 1950s, a few were found alive in Iran. Protecting them became a priority."},{front:"The recovery work",back:"Protected reserves, breeding and some reintroduction to other places. It is still rare, so careful monitoring continues."}]},
   "animalCards"
  ]
 },

 /* ====================================================================== THURSDAY */
 thu:{
  id:"w6-thu", day:"thu", subject:"Art — Architecture",
  title:"Build the Gate: Architecture & a Collaborative Gate of Welcome",
  tagline:"Draw it, build it, and make it together.",
  nzc:["VA-UC","VA-PK","VA-DI","TE"],
  kc:["Thinking","Managing self","Participating & contributing"],
  values:["Excellence","Innovation, inquiry & curiosity","Community & participation"],
  li:"We are learning to design and construct an architectural form using symmetry and repeating columns.",
  sc:["I can draw a symmetrical gate with a ruler.","I can design a column capital.","I can work with a team on a shared structure."],
  vocab:[
   {w:"architecture",d:"The art and science of designing buildings and structures."},
   {w:"column",d:"An upright support. It has a base, a shaft and a capital."},
   {w:"capital",d:"The decorated top of a column."},
   {w:"shaft",d:"The long main body of a column."},
   {w:"elevation",d:"A drawing of the front of a building, as if you stand facing it."},
   {w:"symmetry",d:"When one half of a design mirrors the other half."},
   {w:"proportion",d:"How the sizes of parts compare with each other and with the whole."},
   {w:"guardian figure",d:"A statue placed to ‘watch over’ an entrance (at Persepolis, huge winged bulls with human heads)."}],
  resources:["Rulers, set squares, pencils, fine-liners","Cardboard, card tubes, air-dry clay, glue guns (teacher only) or PVA","Photos of the Gate of All Nations at Persepolis and column capitals","Large brown paper or board for the class gate","Templates for column parts (base, shaft, capital)","Paint in lapis, turquoise, gold and stone colours"],
  dispatch:{
   title:"The Gate of All Nations",
   story:"On the terrace at Persepolis, Shirin holds up a drawing of a tremendous gate: two enormous bulls, each with wings and a bearded human head, stand guard on either side, with tall columns beyond. ‘Everyone who entered the royal city was greeted by guardians, Courier. The gate said: “You are about to meet the king, so be ready.” A good gate says something. Now study it. What do you see? What does it say?’",
   easy:"Look at the picture of the huge gate with the winged bulls. What do you see? What do you think the gate is saying?",
   teacher:[
    "Retrieval (2 min): Wednesday — name a human cause of habitat damage; list two restoration steps; what is a reintroduction?",
    "Show the Gate of All Nations at Persepolis (photo or app scene). Allow 60 seconds of silent looking. Then ask: ‘What do you see? What materials? How tall? What is the message?’",
    "Think-pair-share (3 min): ‘If you were a traveller arriving here, how would you feel? Why might a king put guardians at the gate?’ Draw out: power, welcome, protection and meaning.",
    "Teach the key idea (2 min): this gate was one of the entrances to the royal terrace, probably built under Xerxes. Persian architects used huge stone columns and guardians to impress visitors. Share the LI/SC."],
   retrieval:"Wednesday: causes of habitat damage; the four restoration steps; the Persian fallow deer’s rediscovery."
  },
  discovery:{
   intro:"A strong gate needs a plan. Learn the secrets of columns, symmetry and proportion, then build something none of you could build alone.",
   cards:[
    {title:"A gate with guardians", icon:"horn", body:"The <b>Gate of All Nations</b> at Persepolis had huge guardian figures: <b>bulls with wings and human heads</b>, carved from stone. Guardians like these were also used in Assyrian and Babylonian palaces, and the Persian builders borrowed ideas from many lands. The gate had <b>four tall columns</b> inside. Visitors passed between the giants on their way to the king’s halls."},
    {title:"Parts of a column", icon:"scroll", body:"Every column has three parts: a <b>base</b> at the bottom, a <b>shaft</b> (the long middle) and a <b>capital</b> at the top. Persian columns were very tall and slim, some well over <b>twenty metres</b>, with <b>fluted</b> (grooved) shafts. Their capitals were carved with the front halves of <b>bulls</b> or <b>lions</b> back to back, which held up cedar beams."},
    {title:"Symmetry in buildings", icon:"rosette", body:"A <b>symmetrical</b> gate has a mirror line down the middle: the left side matches the right. Architects use symmetry to make a building feel calm, ordered and strong. A good drawing begins with a <b>centre line</b> and uses a ruler to keep matching parts the same size."},
    {title:"Proportion and repeating columns", icon:"compass", body:"<b>Proportion</b> is about how parts fit together: how tall a column is compared with how wide, how far apart the columns stand. A row of <b>repeating columns</b> makes a strong <b>rhythm</b>, like a drumbeat you can see. Try drawing a column twice as tall as it is wide, then repeat it evenly."},
    {title:"Everyone built the part in front of their own house", icon:"home", body:"In <b>Nehemiah 3</b>, families repaired the wall <b>in front of their own house</b>. Each person did a small part, but together they finished a whole wall. The same is true when building a gate: each person adds a column, a stone or a panel, and the whole is bigger than any one part."}],
   teacher:[
    "Column anatomy (4 min): draw a column on the board: base, shaft, capital. Label each part. Ask: ‘What do the three parts do?’ Mini-whiteboards: students sketch a column with three labelled parts.",
    "Symmetry and elevation (4 min): demonstrate drawing a symmetrical gate with a centre line and ruler. Model: draw the centre line, mark equal distances left and right, repeat columns at equal spacing.",
    "Materials (3 min): show cardboard tubes, clay and PVA. Safety: scissors away from the body, glue guns teacher only.",
    "Team plan (3 min): for Path C, each Caravan agrees on a job for each person (a column, a guardian, a roof beam, a pattern panel) before any building begins. Remind them: Nehemiah’s workers each had a section."]
  },
  paths:[
   {id:"A", name:"3D Gate Model with Guardian Figures", icon:"home",
    brief:"Build a 3D model of a gate with at least two columns and one pair of guardian figures. Show symmetry, repeating columns and the three parts of a column.",
    checklist:["My gate is symmetrical (a centre line works)","I built at least 2 columns with base, shaft and capital","I made a matching pair of guardian figures","I used materials safely and neatly","I can explain what my gate ‘says’ to a visitor"],
    scaffold:"<b>Steps:</b> 1 Draw the plan. 2 Build the base. 3 Make the columns. 4 Add the guardians. 5 Check both sides match. <br><b>Say it:</b> My gate shows ___ because ___.",
    diff:{supported:"Use pre-cut card pieces and a template for the column; add guardians and decoration.",
          standard:"Plan and build independently, with matching columns and guardians.",
          extended:"Add a roof beam or lintel and a decorated capital, and explain how your design helps people feel welcome or safe."}},
   {id:"B", name:"Elevation Drawing", icon:"compass",
    brief:"Draw a front elevation of a symmetrical gate using a ruler. Label the parts of the columns and show repeating columns with even spacing.",
    checklist:["I drew a centre line and the left and right sides match","I drew at least 4 columns with even spacing","I labelled base, shaft and capital on one column","I used a ruler for straight lines","I wrote a short artist’s statement"],
    scaffold:"<b>Steps:</b> 1 Centre line. 2 Ground line. 3 Mark column positions at equal spacing. 4 Draw columns with a ruler. 5 Add capitals and details. <br><b>Artist’s statement:</b> My gate is symmetrical because… I repeated ___ columns to show…",
    diff:{supported:"Use squared paper so lines and spacing are easier; start with the centre line already drawn.",
          standard:"Draw independently with a ruler, four columns and labels.",
          extended:"Add a scale (1 cm = 1 m) and calculate the real height of the gate; add decoration with positive and negative shapes."}},
   {id:"C", name:"Design a ‘Gate of Welcome’ for Our School", icon:"star",
    brief:"As a Caravan, design a ‘Gate of Welcome’ for our school. It should blend pattern ideas from this term (and from our community) and say ‘you belong here’. Take guidance from your Māori Education lead about cultural protocols.",
    checklist:["Our design has a centre line and symmetry","Everyone in our Caravan has a job and a section","We included a welcome idea (words, shapes or symbols)","We did not copy sacred or tapu designs","We can explain what our gate says to a new student"],
    scaffold:"<b>Plan:</b> 1 Agree the message. 2 Choose shapes and patterns. 3 Share out the parts (one each). 4 Build or paint. 5 Join the parts. <br><b>Statement:</b> Our gate says ___ because ___.",
    diff:{supported:"Start from a pre-made gate outline; each student designs one panel with a welcome word or shape.",
          standard:"Design the gate as a team with a division of roles, and write a short statement.",
          extended:"Write a ‘guide card’ for visitors that explains the gate’s symbols and how they reflect your school values."}}
  ],
  councilFire:{
   see:{refs:["Neh 3:28–30","1 Pet 2:5"],
        text:"Nehemiah 3 lists men who repair the wall each in front of their own house: priests, goldsmiths, merchants, even daughters work beside their fathers. Peter writes that those who trust in Christ are like living stones, being built into a spiritual house."},
   wonder:"Everyone built the part in front of their own house. What does this tell us about teamwork? What would have happened if some people said, ‘Someone else will do it’?",
   weigh:"Peter calls believers ‘living stones’ being built together. What does it mean to be a stone in a wall? How is our class like a wall, with each stone different but needed?",
   respond:"Choose ONE team job you will commit to this week (for example, tidying, encouraging, finishing your part), and write it in your Caravan Log.",
   teacher:"Keep the conversation open. The ‘living stones’ image is Christian; other students may see the idea of community differently. Invite all to think about what makes any team strong. Avoid suggesting that Persian art is worse; the aim is to ask what a gate or a building says, and who it welcomes.",
   verses:["Neh 3:28–30","1 Pet 2:5"]},
  assess:{
   evidence:"Symmetry and proportion in the drawing or model; labelled column parts; evidence of teamwork (role in the group, the team plan); the artist’s statement.",
   rubric:["Makes a simple gate or column with support.","Draws or builds a symmetrical gate with labelled column parts and repeated columns.","Controls symmetry, proportion and repeat accurately and explains what the gate communicates.","Designs with intent, compares architecture from different cultures, and evaluates how the team plan contributed to the finished structure."]},
  nzConnection:"Compare gates and entrances in Aotearoa, such as the pare (carved lintel over a wharenui door) and waharoa (gateways) that welcome visitors. Invite your Māori Education lead or local iwi/hapū to guide this conversation. Do NOT imitate sacred or tapu designs; focus on the idea that an entrance can carry a message of welcome. Persian and Māori traditions are both living cultures.",
  sensitivity:"The Gate of All Nations honours a king’s power, and the figures are guardian creatures, not worshipped objects in our classroom; avoid describing them as ‘pagan’ or ‘exotic’. Design tasks must not copy sacred symbols from any religion or culture. Group work: watch for students who take over, and make sure every student has a real part.",
  inquiry:["Did students use a ruler and a centre line to keep the gate symmetrical?","Could they name base, shaft and capital?","Which Caravans shared jobs well, and which need support with team planning?"],
  widgets:[
   {type:"match", title:"Column and Gate Words", prompt:"Match each word to its meaning.",
    pairs:[["Base","The bottom part of a column"],["Shaft","The long middle of a column"],["Capital","The decorated top of a column"],["Elevation","A drawing of the front of a building"],["Symmetry","One half mirrors the other half"],["Proportion","How the sizes of parts compare"]]},
   {type:"order", title:"Draw a Symmetrical Gate", prompt:"Put the steps of drawing a gate in a sensible order.",
    items:["Draw a centre line and a ground line","Mark equal distances left and right of the centre","Draw the columns with a ruler","Add capitals and a lintel across the top","Add patterns and check both sides match"]},
   {type:"sort", title:"Symmetrical or Not?", prompt:"Sort each description. Is it symmetrical or not symmetrical?",
    bins:["Symmetrical","Not symmetrical"],
    items:[{t:"A gate where the left tower matches the right tower",bin:0},{t:"A row of four evenly spaced, identical columns",bin:0},{t:"A drawing where one side has two columns and the other has five",bin:1},{t:"A rosette with eight identical petals",bin:0},{t:"Two guardian bulls facing the same way on one side only",bin:1},{t:"A gate with a mirror line down the middle",bin:0},{t:"A tower with a window on the left and a door on the right",bin:1},{t:"A banner with the same pattern on both halves",bin:0}]},
   {type:"reveal", title:"The Gate of All Nations", prompt:"Tap each card to explore the gate.",
    cards:[{front:"The guardians",back:"Huge bulls with wings and human heads stood on either side of the entrance, as protectors and as a sign of power."},{front:"The columns",back:"Tall, slim columns held up the roof. Their capitals were carved as animals, and the shafts were grooved (fluted)."},{front:"The message",back:"The gate told every visitor that the king’s city was powerful and orderly. Its name, ‘All Nations’ or ‘All Lands’, hints that delegations came from many places."},{front:"Whose gate?",back:"The gate was designed for the king and his court. We do not have a record of what every visitor felt, which is a reminder that buildings tell part of the story."}]}
  ]
 },

 /* ====================================================================== FRIDAY */
 fri:{
  id:"w6-fri", day:"fri", subject:"Showdown",
  title:"SHOWDOWN: The Wall of 52 Days",
  tagline:"Build the wall together. Win the Stage.",
  mode:"classic", fateEnabled:true, timeLimit:20,
  nzc:["SS-CC","SS-PE","SC-LW-Eco","VA-UC","RE"],
  kc:["Thinking","Managing self","Relating to others","Participating & contributing"],
  values:["Integrity","Community & participation","Excellence"],
  li:"We are learning to recall and apply our week’s learning about Ezra, Nehemiah, Jerusalem, restoration and architecture, and to work as one team.",
  sc:["I can answer questions about the returns, the wall, restoration and gates.","I can work with my Caravan, and with the whole class, with integrity.","I can explain my thinking when I get something wrong."],
  creedPrompt:"Before the quiz, each Caravan writes a Wall Creed: ONE sentence about how your team will work with the whole class so that no gap is left in the wall.",
  creedStarters:["We will build together by…","When someone is mocked or struggling, we will…","Our Caravan will always…","We will cheer on…"],
  dispatch:{
   title:"The Wall of 52 Days",
   story:"Dawn on the hill of Jerusalem. The wall stands half-built and every gap is a dare. On the opposite ridge the mockers are laughing again. ‘One caravan cannot finish this wall alone, Courier,’ says Shirin, handing you a trowel. ‘Write your Creed. How will you build with the others? With patience, with courage, with kindness to the builder who falls behind?’ A horn sounds from the gate-tower. The Showdown begins, and every right answer lays a brick on the wall.",
   easy:"Today is the Wall of 52 Days! Your team writes a Creed, then races in the quiz. Every right answer adds a brick to the class wall.",
   teacher:["Before the lobby opens, each team writes its Wall Creed on a strip and reads it aloud. Display them beside the Creeds from Weeks 1–5.","OPTIONAL CLASS WALL: draw a wall of 52 bricks on the whiteboard. After each question, the class adds bricks for the number of Caravans that answered correctly. If the class reaches 52 bricks by the end, award every Caravan a bonus; if the wall is incomplete, the ‘mockers’ appear (a light-hearted cheer of ‘Keep building!’), and the class tries again next week. Keep this cooperative: Caravans cheer one another on.","Before starting, remind students of this week’s recall areas (Nehemiah, Jerusalem, restoration, gates and columns) and that Weeks 1–5 questions will appear too."],
   retrieval:"The quiz is the retrieval."
  },
  questions:[
   {q:"Who was cupbearer to King Artaxerxes and led the rebuilding of Jerusalem’s wall?", options:["Daniel","Nehemiah","Haman","Mordecai"], answer:1, boss:false, tag:"SS-CC", explain:"Nehemiah served the king in Susa as cupbearer, then asked for permission and supplies to rebuild Jerusalem’s wall (Nehemiah 1–2)."},
   {q:"According to Nehemiah 6:15, the wall was finished in how many days?", options:["12","152","52","365"], answer:2, boss:false, tag:"SS-DO", explain:"The book of Nehemiah says the wall was completed in 52 days, an astonishing team effort by many families working together."},
   {q:"Which was the main reason Jerusalem was built on a hill?", options:["It had a harbour","Snow for skiing","It looked fashionable","Defence and a nearby spring"], answer:3, boss:false, tag:"SS-PE", explain:"The ridge and deep valleys gave natural defence, and the Gihon spring supplied water."},
   {q:"The Gate of All Nations at Persepolis was guarded by…", options:["Dragons","Human-headed winged bulls","Elephants","Kiwis"], answer:1, boss:false, tag:"VA-UC", explain:"Huge stone bulls with wings and human heads guarded the gate, a sign of power and protection."},
   {q:"What does habitat restoration mean?", options:["Building a shopping mall","Draining a swamp","Hunting animals","Helping a damaged habitat recover"], answer:3, boss:false, tag:"SC-LW-Eco", teach:true, explain:"Restoration means repairing a damaged place, by protecting it, removing the cause of harm, replanting and monitoring, so that living things can return. The Persian fallow deer, thought lost and found again in Iran in the 1950s, is one story of recovery."},
   {q:"What does Nehemiah 4:9 teach?", options:["Wait and do nothing","Only fight","Run away","Pray and take action"], answer:3, boss:false, tag:"RE", teach:true, explain:"Nehemiah’s people prayed to God and also posted a guard day and night. They trusted God and did their part."},
   {q:"Which king allowed exiles to go home and rebuild in about 538 BC (Week 2)?", options:["Cyrus","Xerxes","Alexander","Cambyses"], answer:0, boss:false, tag:"SS-CC", explain:"Cyrus the Great issued the policy that let exiled peoples return home, including Jewish families from Babylon (Ezra 1)."},
   {q:"Which gold coin was introduced by Darius to help run the empire (Week 3)?", options:["Denarius","Dollar","Daric","Drachma"], answer:2, boss:false, tag:"SS-EW", explain:"The daric was the Persian gold coin with a kneeling archer. The denarius was Roman and the drachma was Greek."},
   {q:"Esther was queen to Xerxes at the palace in Susa (Week 5). Before the Persians, Susa was a city of which ancient people (Week 1)?", options:["Vikings","Romans","Elamites","Mongols"], answer:2, boss:false, tag:"SS-CC", explain:"Susa was an Elamite city, one of the world’s earliest, long before it became a royal palace for the Persian kings. Both Esther and Nehemiah’s stories are set there."},
   {q:"BOSS ×2 — Why did Persian kings often help rebuild local temples?", options:["They were bored","They were scared of the Greeks","Policy of respecting local peoples (and Christians also see God moving their hearts)","It was an accident"], answer:2, boss:true, tag:"SS-CC", teach:true, explain:"Persian kings often let local peoples keep their customs and worship, which helped keep provinces peaceful and loyal. Believers also read the Bible as saying that God moved the kings’ hearts."},
   {q:"In 480 BC the Greeks defeated Xerxes’ fleet in the narrow waters of which battle (Week 4)?", options:["Marathon","Salamis","Troy","Gaugamela"], answer:1, boss:false, tag:"SS-CC", explain:"The Battle of Salamis was a naval battle in narrow waters. Marathon (490 BC) was a land battle under Darius. Historians note that most of our detail comes from Greek writers."},
   {q:"BOSS ×2 — In a food web, removing many links often leads to…", options:["nothing at all","bigger animals","bluer skies","ecosystem collapse"], answer:3, boss:true, tag:"SC-LW-Eco", explain:"A food web works by links. When many links are lost, the community may collapse, which is why restoration tries to rebuild links."}
  ],
  teachingMoments:[],
  paths:[
   {id:"A", name:"Caravan Log", icon:"book",
    brief:"Reflect on your week: what you now know, what is still a mystery, and your Faith Thought.",
    checklist:["I wrote 3 things I now know","I wrote 1 thing that is still a mystery","I wrote a Faith Thought (what I learned about God or people)","I rated my own effort honestly"],
    scaffold:"<b>I now know…</b> <br><b>It is still a mystery…</b> <br><b>My Faith Thought:</b> This week I saw that God…",
    diff:{supported:"Use sentence starters and draw a picture instead of writing one of the answers.",
          standard:"Write all three sections in full sentences.",
          extended:"Connect two subjects (for example, rebuilding a wall and restoring a habitat, both about repair) in one paragraph."}},
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
   see:{refs:["Neh 4:9","Neh 6:15","Isa 58:12","1 Pet 2:5"],text:"This week we met builders who prayed and posted a guard, a wall finished by many families in 52 days, repairers of broken walls and restorers of streets, and living stones being built together."},
   wonder:"What was the most important lesson about teamwork, prayer or repair that you noticed this week?",
   weigh:"Which of this week’s ideas, a wall built by many hands, a habitat that can recover, or a gate that welcomes, made you think hardest?",
   respond:"Say your Wall Creed together. Pray for each other and for any big job your class is facing.",
   teacher:"Keep this short and joyful; celebrate teamwork and effort, not only winning. If you use the class wall, keep the focus on ‘we’ finishing it together.",
   verses:["Neh 4:9","Neh 6:15","Isa 58:12","1 Pet 2:5"]},
  assess:{
   evidence:"Showdown data per concept tag (exportable); Victory Lap product; Wall Creed.",
   rubric:["Answers some questions with support.","Answers most questions accurately.","Explains why wrong answers were wrong and applies the ideas to new situations.","Writes strong questions with clear decoys and explanations."]},
  nzConnection:"Link back to the NZ connections of the week: rebuilding after loss; hill-top pā and local settlement choices; restoration of wetlands, streams and forests; gates and entrances that welcome.",
  sensitivity:"Winning is not the point of the Showdown: keep celebrating effort. Some students may feel anxious about public rankings; offer the ‘anonymise names’ option. If using the class wall, make sure no Caravan is blamed for gaps.",
  inquiry:["What did the Showdown data show? Which tags had the lowest success?","Which misconception needs re-teaching on Monday (for example, Ezra vs Nehemiah, or what restoration means)?","What will I change next week?"],
  widgets:[]
 }
 }
};
})();
