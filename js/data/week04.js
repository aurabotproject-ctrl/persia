/* ===================================================================
   STAGE 4 — PRIDE BEFORE THE FALL  (Week 4 · full lesson data)
   Schema identical to week01.js. NZ English spelling. Scripture is
   paraphrased — read from your own Bible translation in class.
   Historical claims are hedged where scholars disagree (numbers of
   troops, the whipped sea, the Immortals’ size, desert temperatures).
   =================================================================== */
(function(){
const RR=window.RR; RR.WEEKS=RR.WEEKS||{};

RR.WEEKS[4] = {
 n:4,
 title:"Pride Before the Fall",
 era:"490–479 BC",
 place:"Marathon, Hellespont, Thermopylae, Salamis, Susa",
 fragment:"The Fragment of the Storm",
 story:{
  briefing:"A storm has ripped away the bridge of boats. A fragment is lost in the waves, and the king is furious.",
  briefingFull:"Courier! Shirin here — salt in my hair and rope-burn on my hands. The great bridge of boats across the Hellespont has been smashed by a storm, and somewhere in those grey waves a fragment of the Seal has gone under. The king of kings is angry, and angry kings make rash choices. This week we follow the armies of Persia and Greece: a beach called Marathon, a narrow pass, a crowded strait. But listen — every army wrote its own story, and the stories do not match. Read carefully, and keep your feet dry. Gandom refuses to go near the water.",
  shadowCourier:"A silver-edged footprint on a wet quay; a rope cut cleanly, not frayed.",
  shadowClue:"Look at this rope, Courier. Storms fray rope — they do not slice it clean. And here on the quay, a footprint with a silver edge, still wet. Was the bridge broken by the weather… or by a hand? And why would anyone want the Fragment of the Storm?",
  event:"Storm at the Hellespont — the Caravans race through the waves with a limited number of lives each.",
  fridayReveal:"The champions of Stage 4 haul a sea-chest from the shallows below the broken bridge. Inside, wrapped in sailcloth, lies the Fragment of the Storm — cold, wet and humming like a far-off wave. Caught on its edge is a scrap of silver thread. The Shadow Courier has been here again… and has left a clue behind on purpose."
 },
 materials:["Large map of the Aegean and the Persian Empire; atlases","Short teacher-made source excerpts: one written from the Greek side, one from the Persian side (invented in the style of a herald and a scribe, clearly labelled as classroom ‘model’ sources)","Sand tray, Lego or clay for chokepoint models","Cut-out New Zealand shapes (to scale) for the empire map","Thermometers (or temperature probes), beakers or jars, kettle of warm (not hot) water, stopwatch/timers","Insulating materials: felt, foil, wool, bubble wrap, plain paper","Foam printing sheets, brayers, paint (blue, gold, turquoise, white), card","Mini-whiteboards; A–D answer cards (for offline Showdown)"],

 days:{
 /* ====================================================================== MONDAY */
 mon:{
  id:"w4-mon", day:"mon", subject:"History",
  title:"Marathon, Thermopylae & Salamis: Whose Story?",
  tagline:"Same battle, two headlines — who do we believe?",
  nzc:["SS-CC","SS-DO","EN-W","EN-S"],
  kc:["Thinking","Using language, symbols & texts","Relating to others"],
  values:["Integrity","Respect","Inquiry & curiosity"],
  li:"We are learning to explain how Persians and Greeks fought and to compare perspectives on the wars.",
  sc:["I can put four events in order: Marathon (490 BC), Thermopylae and Salamis (480 BC), Plataea (479 BC).","I can say why the Greek version is not the only version.","I can write about one event from two different viewpoints."],
  vocab:[
   {w:"perspective",d:"The point of view someone tells a story from, shaped by who they are and what they want."},
   {w:"invasion",d:"When an army enters another people’s land to take control of it."},
   {w:"strait",d:"A narrow stretch of water joining two larger seas."},
   {w:"Hellespont",d:"The narrow strait (today called the Dardanelles) between Asia and Europe."},
   {w:"Herodotus",d:"A Greek writer, often called the ‘Father of History’, who wrote about the wars some decades later."},
   {w:"propaganda",d:"Information shaped to make one side look good and the other look bad."},
   {w:"primary / secondary source",d:"A primary source comes from the time; a secondary source is written later about it."},
   {w:"Immortals",d:"The Persian elite guard, said to number about 10,000."}],
  resources:["Two ‘headline’ cards: Greek Herald and Persian Scribe (teacher-made)","Aegean map and timeline strip with date cards","Campaign map outline (print from Teacher View)","Hot-Seat role cards for Path C (Xerxes, cautious adviser, bold adviser, scribe)","Perspective-sorter cards (app or printed)","Recording device for Path C (optional)"],
  dispatch:{
   title:"Two Newspapers, One Battle",
   story:"Courier! The old harbour office is full of wet papers, and two of them caught my eye. One, from a Greek herald, shouts: ‘Brave defenders stand against a mighty horde!’ The other, from a Persian scribe, says: ‘Royal forces advance; the campaign continues as the king commands.’ Same battle. Different words. And look — a silver-edged boot print on this one. Someone has been reading these before us. Read both. What changed between them… and why?",
   easy:"A storm has broken the king’s bridge! Read two news stories about the same battle. What is different in each one?",
   teacher:[
    "BEFORE CLASS: print the two teacher-made headline cards (Greek Herald / Persian Scribe) about Thermopylae or Marathon. Make them short, vivid and clearly labelled as modern ‘model’ sources written for the lesson, not ancient quotations.",
    "Retrieval (2 min): Week 3 — name the road that joined Sardis to Susa; who built Persepolis; one thing Darius organised.",
    "Read Shirin’s dispatch aloud. Hand each Caravan both cards. 4 minutes: highlight in one colour what is the SAME in both reports and another colour what is DIFFERENT (words, feelings, who is the hero).",
    "Quick share: ‘Which words are loaded?’ (e.g. ‘horde’, ‘advance’). Do NOT name a winner for ‘truth’ yet — ask who might have written it, and why.",
    "Share the LI/SC; students read them chorally."],
   retrieval:"Week 3: the Royal Road (Sardis to Susa); Darius’s organisation of the empire; Persepolis."
  },
  discovery:{
   intro:"Four events, two sides, and a mountain of questions. Follow the armies — then ask who is telling the story.",
   cards:[
    {title:"490 BC: the beach at Marathon", icon:"scroll", body:"Darius sent a fleet across the Aegean Sea to punish Athens, which had helped Greek cities in Persian territory that rebelled a few years earlier. The Persians landed at the plain of <b>Marathon</b>. The Athenians (helped by a small force from Plataea) fought them and <b>won</b>. The Persian ships sailed home. For Darius it was a setback, not the end of the empire — he began planning a bigger campaign, but died in <b>486 BC</b>."},
    {title:"480 BC: the bridge of boats", icon:"compass", body:"Darius’s son <b>Xerxes</b> gathered a huge army and fleet. To cross the narrow <b>Hellespont</b> his engineers built <b>bridges of boats</b> lashed together. Herodotus says a storm wrecked the first attempt, and that an angry Xerxes had the sea whipped. Historians doubt that detail — it makes a good story for people who wanted to show Xerxes as proud. The army’s size is also uncertain: Herodotus gave millions, but most modern scholars think it was far smaller (though still very large)."},
    {title:"Thermopylae: the Hot Gates", icon:"horn", body:"A narrow pass between mountain and sea, named for its hot springs. A small Greek force, led by the Spartan king <b>Leonidas</b>, held it against the Persians for several days. Then a local man showed the Persians a hidden path round the back, and the defenders were surrounded. The Greek story is one of heroic courage. Persian forces won the pass and marched on to burn Athens."},
    {title:"Salamis and Plataea", icon:"flame", body:"In <b>480 BC</b> the Greek fleet lured Xerxes’s ships into the narrow <b>strait of Salamis</b>, where the crowded Persian ships struggled to move — a Greek victory. In <b>479 BC</b> the Greeks defeated the Persian army at <b>Plataea</b> and the invasion ended. Persia was <i>still</i> a huge, rich empire afterwards — the wars were a very big event for the Greeks, and a smaller one on the long map of Persian history."},
    {title:"Whose story do we have?", icon:"book", body:"Most of what we know comes from <b>Herodotus</b> (a Greek, writing decades later) and other Greek writers. Very few Persian accounts of these wars survive. Royal Persian inscriptions boast about kings but rarely describe defeats. Herodotus was <i>not</i> neutral — but he also tried to record what both sides said, and he is still our best long account. A good historian reads him carefully, checks him against archaeology, and remembers whose voices are missing."}],
   teacher:[
    "Timeline strip (4 min): add four date cards in order — 490 Marathon, 480 Thermopylae and Salamis, 479 Plataea. Mention Darius dying in 486 BC between the two invasions.",
    "Story (6 min): tell the four events with the big map. Use phrases such as ‘according to Herodotus…’ and ‘historians think…’ for contested details (the whipped sea, the size of the army, the exact numbers at Thermopylae).",
    "Sources (3 min): who is missing? Show the sorter: ‘Greek writer’ vs ‘Persian inscription’ vs ‘archaeology’ — what can each tell us, and what can’t it?",
    "Balance (2 min): name courage on both sides. Persian soldiers came from many peoples in the empire and were often serving as ordered. Avoid ‘goodies and baddies’; ask ‘what did each side want?’",
    "Model (2 min): write on the board one sentence from each side about the same moment (e.g. the pass). Students notice which words change."]
  },
  paths:[
   {id:"A", name:"Two Voices Report", icon:"scroll",
    brief:"Write TWO short reports of the same event: one by ‘The Greek Herald’ and one by ‘The Persian Scribe’. Then add a note explaining why they sound different.",
    checklist:["I picked ONE event (Marathon, Thermopylae or Salamis)","My Greek report has a headline and 3–4 sentences","My Persian report has a headline and 3–4 sentences","The two reports use different words and feelings for the same facts","I wrote a ‘Why they differ’ note that mentions perspective or bias"],
    scaffold:"<b>Greek Herald headline:</b> … <b>Report:</b> Today at ___ our people … <br><b>Persian Scribe headline:</b> … <b>Report:</b> By the king’s command, our forces at ___ … <br><b>Why they differ:</b> The Herald wants readers to feel ___. The Scribe wants readers to feel ___. This is called ___ (perspective / bias).",
    diff:{supported:"Use the sentence frames and the word bank (brave · mighty · defended · advanced · fleet · pass · strait). Write one report each with a partner.",
          standard:"Write both reports independently, using at least two vocabulary words, and a clear ‘Why they differ’ note.",
          extended:"Add a third voice (an ordinary soldier, a farmer or a sailor) and explain what even a third viewpoint would still not tell us."}},
   {id:"B", name:"Campaign Map & Timeline", icon:"compass",
    brief:"Draw a map of the Aegean and western Persian Empire. Show the invasion routes with arrows, label the battles and add a dated timeline strip along the bottom.",
    checklist:["Title, compass rose and key","Persian invasion arrows for 490 BC and 480 BC drawn clearly","Marathon, Hellespont, Thermopylae, Salamis and Plataea labelled","Timeline strip with all four dates in the right order","I can explain one way geography affected a battle"],
    scaffold:"<b>Places:</b> Susa · Sardis · Hellespont · Thermopylae · Athens · Marathon · Salamis · Plataea. <br><b>Dates:</b> 490 · 486 (Darius dies) · 480 · 479. <br><b>Say it:</b> At ___ in ___ BC, the ___ …",
    diff:{supported:"Use a printed outline map with the sea and coastline; add arrows, five labels and a four-box timeline.",
          standard:"Draw and label independently with a key and a full timeline.",
          extended:"Add a ‘What each side wanted’ panel and a ‘What we do not know’ panel that names two gaps in the evidence."}},
   {id:"C", name:"Hot-Seat Council Drama", icon:"horn",
    brief:"Perform Xerxes’s war council as a 2-minute scene: one adviser says ‘invade now’, another says ‘be careful’. Xerxes decides in the hot seat and the class asks him questions.",
    checklist:["Each speaker gave a clear reason for their view","Xerxes explained his choice with a ‘because’","We showed pride AND a cautious voice","Our scene lasted about 2 minutes","I can say what the scene shows about why leaders make rash choices"],
    scaffold:"<b>Bold adviser:</b> ‘Great king, we must go now because …’ <br><b>Cautious adviser:</b> ‘Great king, may I warn you …’ <br><b>Xerxes:</b> ‘I have decided … because …’ <br><b>Class question:</b> ‘Why did you ignore …?’",
    diff:{supported:"Use the role cards with ready-made lines; swap parts and perform twice.",
          standard:"Write your own two reasons per adviser and perform with expression.",
          extended:"Write a short epilogue narrated by Herodotus and one by a Persian scribe describing the council differently."}}
  ],
  councilFire:{
   see:{refs:["Prov 16:18","Prov 21:30–31","Mark 4:35–41"],
        text:"Proverbs says that pride goes before destruction and a haughty spirit before a fall, and that a horse may be made ready for battle but victory belongs to the Lord. In Mark 4, a storm rises while Jesus and his friends cross the lake; Jesus speaks to the wind and waves, and they go calm. The disciples are amazed and ask, ‘Who is this?’"},
   wonder:"Why do powerful people so often fall? What is the difference between a leader who is strong and a leader who is proud?",
   weigh:"Greek stories (which may not be true) say Xerxes had the sea whipped. Jesus did not punish the sea — he calmed it, with authority and care. What is the difference between trying to control creation and being its Lord? What does each story tell us about humility?",
   respond:"Write about a time pride made something worse for you, and one way humility could help next time.",
   teacher:"Be careful not to make ‘Persians = proud, Greeks = good’. The Proverbs are about every human heart, including ours. Some details of the whipped-sea story are doubted by historians — name this honestly. Keep the tone reflective and gentle.",
   verses:["Prov 16:18","Prov 21:30–31","Mark 4:35–41"]},
  assess:{
   evidence:"Two Voices Report (or map/drama), the ‘Why they differ’ sentence, and observation of students using ‘perspective’ and ‘bias’ correctly.",
   rubric:["Names an event or two with support; notices that two reports differ.","Orders the four events correctly and writes from two viewpoints with different language.","Explains why accounts differ using perspective and bias, and notes whose voices are missing.","Evaluates the reliability of Herodotus and applies the idea to a modern or NZ example."]},
  nzConnection:"Think of a story in Aotearoa told differently by different groups (for example, an event recorded in both a newspaper and in local oral history). How do we respect more than one account? Invite your Māori Education lead or local iwi/hapū to guide this; avoid pan-Māori generalisations, and treat any taonga or tribal accounts as theirs to share.",
  sensitivity:"Avoid ‘goodies and baddies’. Greek writers shaped how the West remembers Persia, and some of those images (‘barbarian horde’, ‘despot’) are stereotypes. Say clearly that courage and loss belong to people on both sides. Some students may be Iranian-NZ or from Muslim backgrounds; never ask them to speak for ‘Persian’ opinion.",
  inquiry:["Could students explain WHY two reports differ, not just that they do?","Who still thinks ‘the Greek version’ is the only version?","What will I adjust in tomorrow’s scale and map work?"],
  widgets:[
   {type:"order", title:"Order the Wars", prompt:"Put these events in the order they happened.",
    items:["490 BC: The Athenians win the battle of Marathon","486 BC: Darius dies; Xerxes becomes king","480 BC: Xerxes crosses the Hellespont on bridges of boats","480 BC: The Greeks hold the Hot Gates at Thermopylae, then are outflanked","480 BC: The Greek fleet wins in the strait of Salamis","479 BC: The Greeks win the battle of Plataea"]},
   {type:"sort", title:"Legend, Possible Fact or Fact?", prompt:"Sort each statement. Remember: a claim is only a ‘Fact’ when different kinds of evidence support it.",
    bins:["Legend","Possible fact","Fact"],
    items:[
     {t:"The Athenians fought the Persians at Marathon in 490 BC.",bin:2},
     {t:"Xerxes ordered his men to whip the sea after a storm.",bin:0},
     {t:"Xerxes’s army had more than two million soldiers.",bin:0},
     {t:"The Persians crossed the Hellespont on bridges made of boats.",bin:1},
     {t:"A Greek force held the narrow pass at Thermopylae for several days.",bin:2},
     {t:"A local man showed the Persians a path round the Greek defenders.",bin:1},
     {t:"Persia was still a huge empire after 479 BC.",bin:2},
     {t:"Herodotus wrote his Histories in the Greek language.",bin:2}]},
   {type:"match", title:"Whose Words?", prompt:"Match each word to what it means.",
    pairs:[["perspective","The point of view a story is told from"],["strait","A narrow stretch of water joining two seas"],["invasion","An army entering another people’s land to control it"],["Herodotus","A Greek writer who wrote about the wars"],["primary source","A source made at the time of the event"],["propaganda","Information shaped to make one side look good"]]},
   {type:"reveal", title:"Spot the Loaded Word", prompt:"Tap each card. Decide what is different about the two ways of saying the same thing.",
    cards:[
     {front:"‘A mighty horde came across the sea.’",back:"‘Horde’ makes soldiers sound like a faceless mob. A neutral version: ‘a very large army, drawn from many peoples of the empire.’"},
     {front:"‘The king’s forces advanced as planned.’",back:"This may hide losses and mistakes. Royal inscriptions often tell only success."},
     {front:"‘Brave defenders stood alone.’",back:"True for the people telling it, but the writer may leave out allies and what the other side felt."},
     {front:"‘The sea was punished for its insolence.’",back:"A story told about Xerxes by Greek writers; many historians think it is an exaggeration used to show his pride."}]}
  ]
 },

 /* ====================================================================== TUESDAY */
 tue:{
  id:"w4-tue", day:"tue", subject:"Geography — Settlements & Cities",
  title:"Straits, Harbours & Chokepoints: The Scale of an Empire",
  tagline:"How many New Zealands fit inside Persia — and why does a narrow place matter?",
  nzc:["SS-PE","SS-EW","MA-G"],
  kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
  values:["Inquiry & curiosity","Community & participation","Ecological sustainability"],
  li:"We are learning to explain how geography shapes war and settlement and to compare sizes of places using a scale.",
  sc:["I can describe how a strait or pass affects how an army moves.","I can compare the size of the empire with Aotearoa New Zealand using a scale.","I can explain why harbour towns grow."],
  vocab:[
   {w:"chokepoint",d:"A narrow place that everything has to pass through, like a pass or strait."},
   {w:"strait",d:"A narrow channel of water between two bigger bodies of water."},
   {w:"pass",d:"A gap between mountains that people can travel through."},
   {w:"harbour",d:"A sheltered place on the coast where ships can safely stop."},
   {w:"port",d:"A harbour town where goods and people come and go by ship."},
   {w:"scale",d:"How a distance or area on the map relates to the real one."},
   {w:"empire",d:"A very large area made up of many lands and peoples ruled by one government."},
   {w:"area",d:"The amount of flat surface something covers, measured in square kilometres."}],
  resources:["Large map of the empire at its greatest extent","Cut-out New Zealand shapes on card (to the map’s scale)","Rulers, atlases, string for measuring curves","Sand trays / Lego for Path B","NZ coastal map for Path C","Chokepoint cards (app or printed)"],
  dispatch:{
   title:"How Many NZs Fit in the Persian Empire?",
   story:"Shirin is standing on a table, with the empire spread beneath her. ‘Courier, quickly — everyone thinks the empire is huge, but nobody has measured it. Here are cut-outs of Aotearoa New Zealand. Place as many as you can on the map before the lamp burns out! My guess is… well, you tell me.’ Down on the quay, a new sign has been chalked: a silver arrow pointing towards the water. Someone is hurrying us along.",
   easy:"The Persian Empire was gigantic! Use cut-out New Zealands to find out how many fit inside it.",
   teacher:[
    "BEFORE CLASS: print the empire map and NZ cut-outs to the same scale (the empire ≈ 5 million km², NZ ≈ 270,000 km², so about 18–20 NZs fit — a rough figure).",
    "Retrieval (2 min): Monday — put Marathon, Thermopylae/Salamis and Plataea in order; what does ‘perspective’ mean; why is Herodotus not neutral?",
    "Estimate (2 min): each Caravan writes a guess on a whiteboard BEFORE touching the cut-outs. Record guesses.",
    "Tile the map (4 min): teams lay cut-outs across the empire (overlapping is fine, but encourage honest estimating). Compare their count with the guess. Reveal: roughly 20, depending on how the empire’s greatest extent is drawn.",
    "Share the LI/SC. Make the point: the empire spanned from Greece’s coast to the Indus region; land this big needed roads, rivers and strong ports."],
   retrieval:"Monday: the four events in order; perspective; why Herodotus is useful but not neutral."
  },
  discovery:{
   intro:"The empire was enormous — but wars and trade still came down to a few narrow places. Read the map like a general, and like a harbour master.",
   cards:[
    {title:"An empire the size of twenty New Zealands", icon:"compass", body:"At its greatest the Persian Empire covered about <b>5 million square kilometres</b> (scholars measure its edges a little differently), stretching from the Aegean coast and Egypt in the west to the Indus region in the east. Aotearoa New Zealand is about <b>270,000 km²</b>, so roughly <b>20 New Zealands</b> would fit inside! No empire before it had been so large."},
    {title:"The Hellespont: a gateway between two continents", icon:"scroll", body:"The <b>Hellespont</b> (today the Dardanelles) is a narrow strait between Asia and Europe — in places only about <b>1–2 km</b> wide. Armies moving west had to cross it, and so did ships carrying grain. Xerxes’s engineers lashed boats side by side and laid planks across them to make a <b>bridge of boats</b>. Strong winds and currents could easily wreck it."},
    {title:"Why narrow places help defenders", icon:"horn", body:"At <b>Thermopylae</b> the pass was squeezed between a steep mountain and the sea. A big army can only attack as wide as the gap — so having more soldiers helps much less. At <b>Salamis</b> the strait was so narrow that large fleets got tangled. Narrow places are called <b>chokepoints</b>: they slow big armies and help the smaller side — unless a way around is found (as at Thermopylae)."},
    {title:"Harbour towns and inland capitals", icon:"home", body:"Coastal cities such as <b>Miletus</b> and <b>Ephesus</b>, and <b>Athens</b>’s harbour, grew because ships brought trade, ideas and food. <b>Inland capitals</b> like Susa and Persepolis grew on rivers, roads and plains, and had mountains to protect them. A harbour needs <b>shelter</b> from storms, <b>deep water</b>, and <b>land routes</b> inland."},
    {title:"Aotearoa’s harbours", icon:"ibex", body:"Think of Lyttelton, Wellington or Tauranga. A good harbour is sheltered, deep and connected to roads and rail. Many Māori and later European communities settled by harbours for kai moana, safe landing and trade — each with its own history that belongs to the people of that place."}],
   teacher:[
    "Scale (5 min): explain ‘area’ and ‘scale’. Demonstrate: if one NZ cut-out equals 270,000 km², what do 20 cut-outs equal? Link to multiplication (20 × 270,000 = 5,400,000 km²).",
    "Chokepoints (6 min): on the map show the Hellespont, Thermopylae and Salamis. Use the app’s Chokepoint cards: why does being narrow help the defenders? What could go wrong (a hidden path)?",
    "Harbours (4 min): ask what a good harbour needs (shelter, depth, land routes). Link to your own nearest harbour.",
    "Close (3 min): quick whiteboard: ‘Name one way geography can beat a bigger army.’"]
  },
  paths:[
   {id:"A", name:"Empire vs NZ Map", icon:"compass",
    brief:"Overlay NZ cut-outs on the empire map using the scale. Write three observations about size, distance and what a ruler would need to govern so large an area.",
    checklist:["Map has title, compass rose and scale bar","I placed NZ cut-outs and counted them","My answer says ‘about 20’ and explains it is an estimate","I wrote 3 observations about size and distance","I wrote one question a ruler of such a large empire would face"],
    scaffold:"<b>Count:</b> About ___ New Zealands fit in the empire. <br><b>Observation frames:</b> (1) The empire is much bigger than … (2) It would take ___ weeks to travel from … to … (3) A ruler would need … <br><b>Estimate note:</b> This is an estimate because …",
    diff:{supported:"Use a printed map with a grid; count cut-outs and complete three sentence frames.",
          standard:"Overlay, count and write three observations in your own words.",
          extended:"Calculate the empire’s area from the scale (cut-outs × 270,000 km²), then compare it with a country of your choice."}},
   {id:"B", name:"Chokepoint Model", icon:"horn",
    brief:"Build a sand-tray or Lego model of Thermopylae or Salamis. Show the sea, the mountain, the narrow gap and where the armies or fleets would stand.",
    checklist:["I modelled the mountain, sea and narrow gap","I showed which side was the defenders and which the invaders","I used labels and a key","I explained why the narrow gap helped the defenders","I named one way the invaders might get round it"],
    scaffold:"<b>Say it:</b> The pass/strait is narrow, so the bigger army cannot … <br><b>What helped the defenders:</b> … <br><b>A way round:</b> The invaders could … (a hidden path, a longer route by sea).",
    diff:{supported:"Start with a base showing the mountain and sea; add pieces and four labels.",
          standard:"Build independently and explain with ‘because’ sentences.",
          extended:"Compare Thermopylae (land) and Salamis (sea): what is the same, what is different about the chokepoint effect?"}},
   {id:"C", name:"Design a Harbour Town", icon:"home",
    brief:"Choose a spot on the NZ coast and design a harbour town. Justify your site with three reasons and compare it with a Greek or Persian-coast city such as Miletus or Athens’s harbour.",
    checklist:["I chose one real or imagined NZ coastal site","I gave 3 reasons (shelter, depth, land routes, fresh water, food)","I named one hazard (storm, tsunami, erosion) and a plan","I compared with a Greek or Persian-coast harbour","I consulted local guidance about the history of the place"],
    scaffold:"<b>Reason frame:</b> I chose ___ because (1) …, (2) …, (3) …. <br><b>Hazard:</b> One risk is … so people could … <br><b>Compare:</b> Like Miletus/Athens’s harbour, my town …",
    diff:{supported:"Pick from the reason bank (shelter · depth · routes · water · food) and complete the frame.",
          standard:"Give three reasons, one hazard and one comparison.",
          extended:"Draw a simple plan of the town (wharf, market, road, warehouses) and explain how each part supports trade."}}
  ],
  councilFire:{
   see:{refs:["Job 38:8–11","Isa 40:15–17"],
        text:"In Job, God asks who shut the sea behind doors and said, ‘This far and no further; here your proud waves must stop.’ In Isaiah, the nations are like a drop in a bucket and dust on the scales, and no empire is great in comparison with God."},
   wonder:"How big is God compared with the biggest empire ever? What do the sea’s limits tell us about who is in charge?",
   weigh:"Xerxes bridged a sea and lashed its waves — but the sea stays within its edges. What is the difference between using the creation wisely and thinking we are above it?",
   respond:"Write a short, humble prayer of one or two sentences, thanking God for the sea, the shore or the harbour you know best.",
   teacher:"Isaiah 40 is not belittling nations or people — it is celebrating the greatness of God. Avoid mocking Persia. Link to kaitiakitanga (guardianship) when talking about moana and harbours.",
   verses:["Job 38:8–11","Isa 40:15–17"]},
  assess:{
   evidence:"Scale use (count and calculation), the reasoning in Path B or C (three reasons), and a photograph of the model or map.",
   rubric:["Places cut-outs or identifies a strait with support.","Estimates the empire’s size using the scale and explains one chokepoint.","Explains how geography helps or hinders armies and why harbour towns grow, with evidence.","Compares two settlements or battles and evaluates trade-offs; uses scale calculations accurately."]},
  nzConnection:"How big is your region compared with the Persian Empire? Compare the narrow passages of Aotearoa (Cook Strait, the Manawatū Gorge, Arthur’s Pass) with Thermopylae and the Hellespont. For the history of harbours near you, ask local iwi/hapū or your Māori Education lead; avoid generalising across iwi.",
  sensitivity:"Keep focus on land and sea, not on a particular modern country’s politics. When naming present-day places (Turkey, Greece, Iran), use neutral language. Avoid describing the empire’s size as ‘better’ than any other people’s land.",
  inquiry:["Could students use a scale to compare, or only count shapes?","Did students explain WHY a narrow place helps, not just name it?","Which scaffold helped the supported group most?"],
  widgets:[
   {type:"reveal", title:"Chokepoint Cards", prompt:"Tap a card to see how each place squeezed an army or a fleet.",
    cards:[
     {front:"The Hellespont",back:"A strait only about 1–2 km wide between Asia and Europe. Armies had to cross by boat or bridge — and a storm could ruin the plan."},
     {front:"Thermopylae (the Hot Gates)",back:"A narrow pass between steep mountains and the sea, named for its hot springs. A big army could only attack as wide as the gap, until a hidden path was found."},
     {front:"The strait of Salamis",back:"A narrow channel between an island and the mainland. Crowded ships found it hard to turn, which helped the Greek fleet."},
     {front:"Cook Strait (Aotearoa)",back:"A stretch of sea between the North and South Islands, famous for strong winds and currents — a modern example of how a narrow water gap shapes travel."}]},
   {type:"sort", title:"Harbour or Inland Capital?", prompt:"Sort each feature into the kind of place it helps most.",
    bins:["Harbour town","Inland capital","Both"],
    items:[
     {t:"Shelter from sea storms",bin:0},
     {t:"A river or plain with farmland nearby",bin:1},
     {t:"Mountains around for protection",bin:1},
     {t:"Ships bring goods from far away",bin:0},
     {t:"Roads and tracks for trade",bin:2},
     {t:"Fresh water to drink",bin:2},
     {t:"Deep water for big boats",bin:0},
     {t:"Close to the ruler’s court and tax stores",bin:1}]},
   {type:"match", title:"Scale and Size", prompt:"Match each fact or word to its meaning.",
    pairs:[["Persian Empire (greatest extent)","About 5 million km²"],["Aotearoa New Zealand","About 270,000 km²"],["About how many NZs fit in the empire?","Roughly 20"],["Chokepoint","A narrow place everything must pass through"],["Hellespont","The narrow strait between Asia and Europe"],["Harbour","A sheltered place for ships to stop"]]},
   {type:"order", title:"Build a Bridge of Boats", prompt:"Put the steps in order to see how engineers might have bridged the Hellespont.",
    items:["Gather many ships and line them up side by side across the strait","Anchor each ship so it will not drift","Stretch strong ropes or cables across the line of ships","Lay timber planks over the cables","Cover the planks with earth and brushwood so animals can walk","Check the bridge after storms and repair it"]}
  ]
 },

 /* ====================================================================== WEDNESDAY */
 wed:{
  id:"w4-wed", day:"wed", subject:"Science — Animal Communities & Habitats",
  title:"The Desert Challenge: Adaptations in Dasht-e Kavir & Lut",
  tagline:"Who can survive where it never rains — and what makes the best fur?",
  nzc:["SC-LW-Eco","SC-NoS-I","SC-NoS-C"],
  kc:["Thinking","Using language, symbols & texts","Managing self"],
  values:["Ecological sustainability","Inquiry & curiosity","Excellence"],
  li:"We are learning to explain desert adaptations and to carry out a fair test about insulation.",
  sc:["I can name three desert animals and give an adaptation for each.","I can plan a fair test and say what stays the same.","I can record data in a table and graph it."],
  vocab:[
   {w:"adaptation",d:"A feature or behaviour that helps a living thing survive in its habitat."},
   {w:"nocturnal",d:"Active at night and resting in the day."},
   {w:"abiotic factor",d:"A non-living part of a habitat, such as heat, water or sand."},
   {w:"insulation",d:"A material that slows down the movement of heat."},
   {w:"fair test",d:"An investigation where only one thing is changed and everything else stays the same."},
   {w:"variable",d:"Something in an experiment that can change."},
   {w:"conclusion",d:"What the results tell us, based on evidence."},
   {w:"dehydration",d:"When a body loses too much water."}],
  resources:["Thermometers or temperature probes (one per beaker)","Beakers or identical jars, a kettle of warm (not boiling) water supervised by the teacher","Insulation materials: felt, foil, wool, bubble wrap, plain paper, rubber bands","Timers and recording tables; graph paper or a graphing app","Animal Cards (collect weekly)","Desert-animal photos and fact-file sheets"],
  dispatch:{
   title:"Water for an Army",
   story:"A hot wind has blown the quay empty. Shirin unrolls a battered map and taps two blotches: Dasht-e Kavir and Dasht-e Lut — the two great deserts. ‘Courier, imagine an army marching across this. Soldiers, horses, camels, carts… and not a stream for days. How much water do you think it would need — in one day?’ Gandom the camel yawns, chews the map’s corner, and for once looks smug. Camels know something about deserts.",
   easy:"An army must walk across a desert. How much water do the people and animals need each day? Make a guess!",
   teacher:[
    "BEFORE CLASS: set the water ratios on the board — a marching adult needs about 4 litres a day in heat; a horse about 35 litres; a camel can go several days without drinking (teacher guide: ‘a few days, depending on conditions’).",
    "Retrieval (2 min): Tuesday — what is a chokepoint; roughly how many NZs fit inside the empire; why do harbour towns grow?",
    "Calculate together (4 min): ‘An army of 10,000 soldiers and 1,000 horses — how many litres each day?’ (10,000 × 4 = 40,000 L; 1,000 × 35 = 35,000 L; total 75,000 L, about 75 tonnes of water!) Emphasise that Herodotus’s army numbers are far larger than most modern estimates; scholars disagree.",
    "Discuss: why were deserts dangerous? Where would an army find water (springs, wells, qanats, rivers)?",
    "Share the LI/SC; students read them chorally."],
   retrieval:"Tuesday: chokepoint; scale and NZs in the empire; why harbour towns grow."
  },
  discovery:{
   intro:"Dasht-e Kavir and Dasht-e Lut: two of the harshest habitats on Earth. Meet the animals that make a home here.",
   cards:[
    {title:"A habitat with big swings", icon:"flame", body:"Deserts are shaped by <b>abiotic factors</b>: very little rain, scorching days and, in many places, <b>cold nights</b>. The <b>Dasht-e Lut</b> is one of the hottest places on Earth — satellites have recorded ground-surface temperatures above 70 °C (that is the ground, not the air). The <b>Dasht-e Kavir</b> is a vast salt desert, with salt crusts and mud flats. Life here must cope with heat, salt, and scarce water."},
    {title:"Sand cat: the barefoot desert hunter", icon:"paw", body:"The <b>sand cat</b> is a small wild cat with thick fur growing between its toes — like <b>built-in sandshoes</b> that protect its paws from hot sand and help it walk without sinking. Large ears help it hear prey underground. It hunts at night, rests in burrows by day, and gets most of its water from its food."},
    {title:"Jerboa: the leaping night-owl", icon:"ibex", body:"The <b>jerboa</b> is a tiny, mouse-sized rodent with enormous hind legs and a long tail for balance. It is <b>nocturnal</b> (out at night, hidden in a burrow by day, which is cooler). It gets nearly all the water it needs from its food, so it rarely has to drink."},
    {title:"Bactrian camel: the desert giant", icon:"horn", body:"The <b>Bactrian camel</b> has <b>two humps</b> (the one-humped kind is the dromedary). A hump stores <b>fat</b>, not water — the fat is an energy store. Camels have wide, padded feet that spread on sand, long eyelashes and closable nostrils against blowing sand, and can drink huge amounts quickly after a dry spell. Camels have carried people and goods across the dry lands of Asia for thousands of years."},
    {title:"Behaviour and body", icon:"star", body:"Adaptations come in two main kinds: <b>body adaptations</b> (fur, fat, feet, ears) and <b>behaviour adaptations</b> (hiding in the day, being active at night, digging burrows). Other desert-dwellers of Iran include the <b>Persian horned viper</b>, the <b>Asiatic cheetah</b> (critically endangered; only a few dozen survive in Iran) and the wild <b>onager</b>. Tonight’s Animal Cards: Bactrian camel, sand cat and jerboa."}],
   teacher:[
    "Habitat (5 min): show desert photos. Ask for abiotic factors: heat, sand, salt, little water, big temperature swings between day and night.",
    "Animals (6 min): use the app’s interactive desert scene; tap each animal for a body adaptation and a behaviour adaptation. Students tick them off on a desert-animal sheet.",
    "Insulation link (4 min): ‘Why is fur good at keeping a cat warm at night? What about keeping the heat out in the day?’ Introduce insulation and the fair test for Path A.",
    "Plan the fair test (5 min): decide on class rules — same water amount, same starting temperature, same beaker, same time intervals. Only the wrapping changes. Safety: the teacher handles warm water; do not use boiling water.",
    "Animal Cards (1 min): introduce this week’s cards."]
  },
  paths:[
   {id:"A", name:"Insulation Fair Test", icon:"flame",
    brief:"Wrap beakers in felt, foil, wool, bubble wrap and plain paper (and leave one with no wrapping as a control). Fill each with the same amount of warm water, record the temperature every 2 minutes for 10 minutes, graph it, and explain which ‘fur’ is best.",
    checklist:["I wrote a question and a prediction","I listed what I changed, measured and kept the same","I filled my results table accurately","I made a line graph with labelled axes","I wrote a conclusion that uses my data"],
    scaffold:"<b>Question:</b> Which material keeps warm water warm the longest? <br><b>Change:</b> the wrapping. <b>Measure:</b> temperature. <b>Keep the same:</b> amount of water, starting temperature, beaker, time. <br><b>Table:</b> Time (min) | none | felt | foil | wool | bubble wrap. <br><b>Conclusion frame:</b> The best insulator was ___ because the temperature dropped by only ___ °C.",
    diff:{supported:"Use the prepared table and only test three materials plus a control; the teacher helps with reading thermometers.",
          standard:"Test all materials, plot a line graph and write a conclusion using data.",
          extended:"Calculate the temperature drop for each material, rank them, and suggest improvements for a second test and why repeating the test improves reliability."}},
   {id:"B", name:"Desert Survival Guide", icon:"paw",
    brief:"Invent a new desert species and design a labelled guide page with five adaptations (body AND behaviour) that help it survive heat, cold nights, salt and scarce water.",
    checklist:["My species has a name and a labelled drawing","I gave 5 adaptations (at least one behaviour and one body)","I explained how EACH adaptation helps survival","I wrote what it eats and what might eat it","I used the words habitat, adaptation and nocturnal where suitable"],
    scaffold:"<b>Frame:</b> The ___ has ___ which helps it ___. <br><b>Behaviour:</b> It ___ at night/in the day so that … <br><b>Food chain:</b> ___ → ___ → ___",
    diff:{supported:"Use a pre-drawn outline and a bank of adaptations; label three and write two ‘has… which helps…’ sentences.",
          standard:"Draw and label independently with five adaptations and explanations.",
          extended:"Add a food web with your species in it and explain what would happen to the community if a rare drought lasted a whole year."}},
   {id:"C", name:"Double Bubble: Desert vs High Country", icon:"compass",
    brief:"Draw a Double Bubble map comparing Dasht-e Kavir with an NZ habitat such as high-country tussockland. Show what is the same, what is different, and one adaptation in each.",
    checklist:["Two main bubbles labelled","At least 3 differences (e.g. rainfall, temperature, plants, animals)","At least 2 similarities (e.g. open land, wide temperature swings)","One animal adaptation in each habitat","A sentence on what I learned"],
    scaffold:"<b>Differences:</b> The desert has … but the tussockland has … <br><b>Similarities:</b> Both have … <br><b>Adaptation:</b> In the desert, the ___ … In the tussocklands, the ___ …",
    diff:{supported:"Use a ready-made double bubble and a word bank; add two similarities and two differences.",
          standard:"Create your own double bubble and complete all sections.",
          extended:"Explain how the abiotic factors in each habitat shape the adaptations of animals there."}}
  ],
  councilFire:{
   see:{refs:["Ps 63:1","Isa 41:18","Ps 104:10–13"],
        text:"In Psalm 63 the writer says his soul thirsts for God in a dry and weary land without water. In Isaiah, God promises to open rivers on bare heights and springs in the middle of valleys, and to turn the desert into pools. Psalm 104 sings that God sends springs into the valleys, giving drink to every wild animal, and waters the mountains from his home."},
   wonder:"God provides water in dry places. What do you do when life feels dry — tired, lonely, or stuck? Where do you look for ‘water’?",
   weigh:"Desert animals survive with little water — they use what they have wisely. How can we show respect for water, a gift we often take for granted?",
   respond:"Choose one water-saving action for this week and tell a partner (for example, a shorter shower or turning off the tap while brushing teeth).",
   teacher:"These are poems of longing and promise, not scientific texts. Be sensitive: some students may have experienced real hardship; keep the language of ‘dry times’ gentle and invite, never require, personal sharing.",
   verses:["Ps 63:1","Isa 41:18","Ps 104:10–13"]},
  assess:{
   evidence:"The fair-test planning sheet and results table; the graph; accurate use of ‘adaptation’, ‘nocturnal’ and ‘insulation’.",
   rubric:["Names a desert animal and one feature with support.","Names three desert animals with adaptations and records results in a table.","Plans a fair test, draws an accurate graph and explains how adaptations help survival.","Evaluates the fair test (reliability, improvements) and links desert adaptations to a different habitat."]},
  nzConnection:"Compare the Kavir with the dry, wide-open tussocklands of Canterbury or Central Otago, where cold nights and drying winds also shape life. Link to kaitiakitanga: how do we look after water and fragile habitats in our rohe? Use local guidance for place-specific knowledge.",
  sensitivity:"The Asiatic cheetah is critically endangered — present this as a reason to care. Handle warm water safely; never use boiling water with children. Avoid describing deserts as ‘empty’ or ‘useless’: they are homes full of life.",
  inquiry:["Did students keep the test fair (same water, same start temperature)?","Could students describe the pattern in their graph with data?","What do I need to revisit before Week 5’s wetlands and rivers?"],
  widgets:[
   "animalCards",
   {type:"match", title:"Desert Adaptations", prompt:"Match each desert animal to its adaptation.",
    pairs:[["Sand cat","Furry paws that protect it from hot sand"],["Jerboa","Nocturnal, with a burrow and water from its food"],["Bactrian camel","Fat-storing humps and wide, padded feet"],["Persian horned viper","Sideways movement and burying itself in sand to hide"],["Onager (wild ass)","Fast runner that can travel far between water sources"]]},
   {type:"sort", title:"Body or Behaviour?", prompt:"Is each adaptation a body adaptation or a behaviour adaptation?",
    bins:["Body adaptation","Behaviour adaptation"],
    items:[
     {t:"Furry paws on a sand cat",bin:0},
     {t:"Hiding in a burrow in the heat of the day",bin:1},
     {t:"A camel’s long eyelashes and closable nostrils",bin:0},
     {t:"Hunting only at night",bin:1},
     {t:"A camel’s hump storing fat",bin:0},
     {t:"A jerboa’s long back legs for leaping",bin:0},
     {t:"Resting in shade at noon",bin:1},
     {t:"Travelling to a waterhole at dawn",bin:1}]},
   {type:"order", title:"Run a Fair Test", prompt:"Put the steps of a fair test about insulation in the right order.",
    items:["Ask a question: which material keeps water warm the longest?","Predict what will happen and why","Decide what to change, measure and keep the same","Fill each beaker with the same amount of warm water and wrap it","Record the temperature at the same times for each beaker","Graph the results and write a conclusion using the data"]},
   {type:"reveal", title:"Water for an Army", prompt:"Tap a card to see how much water was needed on a desert march. Remember: modern scholars debate how big the army really was.",
    cards:[
     {front:"One marching adult, one day",back:"About 4 litres of water in hot conditions."},
     {front:"One horse, one day",back:"About 35 litres — a horse drinks far more than a person."},
     {front:"10,000 people and 1,000 horses",back:"About 75,000 litres a day — roughly 75 tonnes of water, enough to fill many tanker trucks."},
     {front:"Why armies followed rivers and qanats",back:"Carrying all the water was impossible. Marching near springs, wells, rivers and qanats made big journeys possible."}]}
  ]
 },

 /* ====================================================================== THURSDAY */
 thu:{
  id:"w4-thu", day:"thu", subject:"Art — Persian Traditions",
  title:"Glazed-Brick Immortals: A Never-Ending Frieze",
  tagline:"Print a guard, repeat him, and make an army march across the wall.",
  nzc:["VA-UC","VA-PK","VA-DI"],
  kc:["Thinking","Managing self","Participating & contributing"],
  values:["Excellence","Innovation, inquiry & curiosity","Diversity"],
  li:"We are learning to make a repeating frieze using printmaking.",
  sc:["I can make a printing block.","I can repeat prints with even spacing.","I can choose a limited colour palette."],
  vocab:[
   {w:"frieze",d:"A long band of repeated pictures or patterns, often on a wall."},
   {w:"printmaking",d:"Making art by pressing an inked or painted block onto paper."},
   {w:"relief block",d:"A printing block with raised lines that pick up the paint."},
   {w:"registration",d:"Lining up each print in exactly the same position."},
   {w:"glazed brick",d:"A brick covered with a shiny coloured glaze, then fired in a kiln."},
   {w:"Immortals",d:"The Persian elite guard — said to stay at about 10,000 men."},
   {w:"rhythm",d:"The beat made by repeating shapes at even intervals."},
   {w:"layering",d:"Adding one colour over or next to another."}],
  resources:["Foam printing sheets, pencils, scissors, card","Brayers or foam rollers; paint trays","Paint: blue, turquoise, gold, white, yellow, ochre","Long strips of paper (about 1.5 m) for friezes","Pictures of the Susa glazed-brick archers and lions (app or printed)","Paper in blues/golds for mosaic (Path B)","Armour-of-God item cards for Path C"],
  dispatch:{
   title:"The Guards of Susa",
   story:"A stone wall rises ahead, covered with shining coloured bricks: archers in long robes, spears upright, marching on and on, each exactly like the next. ‘Courier,’ says Shirin, ‘Darius’s craftsmen made this at Susa. These guards were called the Immortals. Not because they never died — but because whenever one fell, another stepped into his place, so the ranks never looked any smaller. Now it’s your turn to build a never-ending army… out of paint.’",
   easy:"Look at these shiny brick guards, all in a row! Make your own repeating guard picture.",
   teacher:[
    "Retrieval (2 min): Wednesday — name two desert animals and their adaptations; what makes a test fair.",
    "Show images of the glazed-brick archers from Susa (now partly displayed in museums such as the Louvre and in Iran). Notice: colour, rhythm, repeated pose, patterned robes.",
    "Explain Immortals (2 min): Herodotus says the elite unit kept to 10,000, replacing anyone lost, so it always looked the same size. Say ‘according to Herodotus’ — it is a Greek writer’s account.",
    "Try it (4 min): students sketch one simple guard in profile. Which parts could be simplified for a printing block?",
    "Share the LI/SC."],
   retrieval:"Wednesday: two desert animals and their adaptations; what stays the same in a fair test."
  },
  discovery:{
   intro:"The Immortals marched across the walls of Susa — and you can march them across yours. Learn the printmaker’s steps, and the rhythm that makes an army.",
   cards:[
    {title:"Glazed bricks of Susa", icon:"scroll", body:"Craftspeople at Susa shaped clay bricks, painted them with glaze and <b>fired</b> them so the colours stayed bright for thousands of years. Pieces of the <b>Archers frieze</b> show figures in long patterned robes, carrying spears and quivers. The colours — <b>turquoise, yellow, white and deep blue</b> — are made from minerals and glazes."},
    {title:"Who were the Immortals?", icon:"horn", body:"According to the Greek writer Herodotus, the <b>Immortals</b> were an elite unit of about <b>10,000</b> soldiers. When one died or became ill, another took his place — so their number <i>looked</i> unchanging. It is Herodotus’s account, so historians treat details carefully, but the idea fits the glazed-brick archers who march in perfect ranks."},
    {title:"Making a foam printing block", icon:"book", body:"1. Draw a <b>simple guard</b> on paper. 2. Place it on a foam sheet and press along the lines with a blunt pencil to <b>engrave</b>. 3. Cut round the shape and glue it to card. 4. <b>Roll</b> a thin layer of paint across the foam. 5. <b>Press</b> face-down on paper, rub, and lift. Thin paint and even pressure make clear prints."},
    {title:"Repeat, register, rhythm", icon:"rosette", body:"To make a frieze, <b>mark spaces</b> on your paper with light pencil dots so each print lands in the same row. This is <b>registration</b>. Then print again and again. Even spacing makes a <b>rhythm</b>, like marching feet. Try alternating colours (blue, gold, blue, gold) for a pattern within the pattern."},
    {title:"Limited palette and layering", icon:"star", body:"Like the brick-makers, choose <b>three or four colours</b>. Print one colour first; let it dry; then <b>layer</b> a second colour over parts of it, or print gold borders along the top and bottom. A calm palette helps the repeated shapes shine."}],
   teacher:[
    "Demonstrate (6 min): carve a simple foam block live under the visualiser. Show the roll, press, lift sequence and common mistakes (too much paint, uneven press, slipping).",
    "Registration (3 min): model marking light pencil dots. Practise two prints on scrap, check spacing with a ruler.",
    "Palette (2 min): discuss three or four colours, then ask each Caravan to agree on a palette.",
    "Model Path C (4 min): show the Armour-of-God item cards — belt, breastplate, shoes, shield, helmet, sword — and ask how they might repeat in a pattern.",
    "Students choose Path A, B or C. Check drying space and clean-up routine."]
  },
  paths:[
   {id:"A", name:"Immortal Frieze", icon:"horn",
    brief:"Make a foam block of one guard and print him five times in a row on a long strip, with even spacing and a limited palette.",
    checklist:["My foam block has clear, simple lines","I printed my guard 5 times in a row","The spacing is even (registration dots helped)","I used 3–4 colours only","I can say how repetition makes rhythm"],
    scaffold:"<b>Steps:</b> 1 Sketch a simple guard in profile. 2 Press lines into foam. 3 Roll a thin layer of paint. 4 Print, lift, repeat. 5 Add a top and bottom border. <br><b>Artist’s statement:</b> My frieze repeats ___ times because …",
    diff:{supported:"Use a pre-drawn guard template and a dotted line for spacing; practise on scrap first.",
          standard:"Design your own guard, print five times with accurate registration and add a border.",
          extended:"Alternate two blocks (guard and lotus, or two colours) in an A-B-A-B rhythm and write a statement on how the pattern gives the army power."}},
   {id:"B", name:"Glazed-Brick Collage", icon:"star",
    brief:"Make a paper mosaic of an archer on a brick-shaped panel. Cut small rectangles in blues, golds and turquoise and arrange them to show the figure and his patterned robe.",
    checklist:["I sketched my archer first","I used small, evenly sized pieces (like bricks)","I used a limited palette","My robe has a clear pattern","I can describe how my collage is like glazed brick"],
    scaffold:"<b>Steps:</b> 1 Sketch the archer on a brick-shaped panel. 2 Cut small rectangles. 3 Arrange before you glue. 4 Glue, leaving thin gaps for ‘mortar’. 5 Add a border. <br><b>Artist’s statement:</b> My collage uses ___ colours to show …",
    diff:{supported:"Use a printed outline and pre-cut tiles; fill the shape and add a border.",
          standard:"Plan and cut your own pieces; create a patterned robe.",
          extended:"Make a linked pair of archers to show repeat, and explain what is lost and gained when a print becomes a mosaic."}},
   {id:"C", name:"Armour of God Frieze", icon:"trophy",
    brief:"Design a repeating guardian pattern using the items of armour from Ephesians 6:10–18 (belt of truth, breastplate of righteousness, shoes of peace, shield of faith, helmet of salvation, sword of the Spirit). Print or draw them in a repeat.",
    checklist:["I used at least three items of armour from Ephesians 6","I repeated them in an even rhythm","I used a limited palette","I can explain what each item stands for","I wrote or drew which piece I need most this week"],
    scaffold:"<b>Items:</b> belt (truth) · breastplate (righteousness) · shoes (peace) · shield (faith) · helmet (salvation) · sword (God’s word). <br><b>Artist’s statement:</b> I repeated ___ because … I need ___ most because …",
    diff:{supported:"Choose three items from the picture cards; print each twice in a pattern.",
          standard:"Print or draw all six items in a repeating frieze with a short label for each.",
          extended:"Contrast the Immortals’ armour with Paul’s image, and write a paragraph on what ‘spiritual armour’ means as a picture rather than a literal weapon."}}
  ],
  councilFire:{
   see:{refs:["Eph 6:10–18","John 11:25"],
        text:"Paul tells believers to be strong in the Lord and to put on God’s full armour: truth like a belt, righteousness like a breastplate, readiness to share the good news of peace like shoes, faith like a shield, salvation like a helmet, and God’s word like a sword — and to pray at all times. In John 11, Jesus tells Martha that he is the resurrection and the life, and that anyone who trusts in him will live even though they die."},
   wonder:"The Persians called their guards ‘Immortals’ — yet every man could fall. Who really conquers death? What does it mean to be ‘protected’?",
   weigh:"Compare human ‘immortality’ (always replacing the fallen) with Jesus’ promise of resurrection life. How is the armour in Ephesians different from the Immortals’ armour?",
   respond:"Choose which piece of the armour you need most this week and write one sentence about why.",
   teacher:"Paul’s armour is a metaphor for spiritual strength, not a call to violence or to fight people. Say this clearly. Respect the real courage of the Persian soldiers; the contrast is about the nature of the protection, not about worth.",
   verses:["Eph 6:10–18","John 11:25"]},
  assess:{
   evidence:"Technique (block clarity, even spacing, controlled paint), rhythm of the finished frieze and the artist’s statement (1–2 lines) in the Caravan Log.",
   rubric:["Makes a simple print with support.","Prints a repeated shape with mostly even spacing and a limited palette.","Controls registration, rhythm and palette precisely and explains choices.","Combines two blocks or ideas with intent and explains how repetition and colour create meaning."]},
  nzConnection:"Compare with kowhaiwhai and tukutuku — repeated patterns that carry whakapapa and story. Invite a local artist or your Māori Education lead to guide this; do NOT copy tapu or personal designs. Focus on the idea that repetition can carry meaning.",
  sensitivity:"Persian art comes from living cultures; use ‘exotic’ language sparingly. Avoid copying religious or sacred symbols into banners. The Armour of God is a picture of spiritual strength — do not encourage students to make weapons or play-fight with their artwork.",
  inquiry:["Did students manage thin paint and even pressure?","Who struggled with registration and spacing?","How well did Path C show thoughtful faith connections?"],
  widgets:[
   {type:"order", title:"Print a Frieze", prompt:"Put the steps of printmaking in the right order.",
    items:["Draw a simple design on paper","Press the lines into a foam sheet with a blunt pencil","Cut out the foam and glue it onto a card base","Roll a thin, even layer of paint over the foam","Press the block face-down on the paper, rub and lift","Move along to the next dot and print again"]},
   {type:"match", title:"Printmaker’s Words", prompt:"Match each art word with its meaning.",
    pairs:[["frieze","A long band of repeated pictures or patterns"],["registration","Lining up each print in the same place"],["rhythm","The beat made by evenly repeated shapes"],["relief block","A block with raised lines that pick up paint"],["palette","The set of colours you choose"],["glaze","A shiny coating fired onto clay"]]},
   {type:"reveal", title:"Immortals: What Do We Know?", prompt:"Tap each card to separate what Herodotus says from what the glazed bricks show.",
    cards:[
     {front:"What does Herodotus say?",back:"That the Immortals were an elite force of 10,000, always replaced when a man fell or was sick, so the number looked unchanging."},
     {front:"What do the Susa bricks show?",back:"Rows of tall archers and spearmen with patterned robes. Scholars debate whether they show the Immortals or a palace guard."},
     {front:"Why is the name interesting?",back:"Some scholars think the Greek name came from a Persian word that sounded like ‘immortal’; others are unsure. A good reminder to treat names as clues, not proof."},
     {front:"What can art tell us?",back:"Art shows what a king wanted people to see: order, strength, beauty. It does not tell the whole story of daily life."}]}
  ]
 },

 /* ====================================================================== FRIDAY */
 fri:{
  id:"w4-fri", day:"fri", subject:"Showdown",
  title:"SHOWDOWN: Storm at the Hellespont",
  tagline:"The bridge is broken. Keep your lives, hold your nerve, win the Stage.",
  mode:"classic", fateEnabled:true, timeLimit:20,
  nzc:["SS-CC","SS-PE","SC-LW-Eco","SC-NoS-I","VA-UC","RE"],
  kc:["Thinking","Managing self","Relating to others","Participating & contributing"],
  values:["Integrity","Community & participation","Excellence"],
  li:"We are learning to recall and apply our week’s learning about the Greek wars, geography, desert science and printmaking, and to work as a team.",
  sc:["I can answer questions about the wars, straits, desert animals and friezes of Week 4.","I can recall ideas from earlier weeks.","I can work with my Caravan with integrity.","I can explain my thinking when I get something wrong."],
  creedPrompt:"Before the quiz, each Caravan adds a line to its Creed: ONE sentence about how you will stay humble when you are winning — and kind when you are losing.",
  creedStarters:["When we win, we will…","When we lose, we will…","Our Caravan will never boast about…","We will remember that…"],
  dispatch:{
   title:"Storm at the Hellespont",
   story:"The storm has torn the bridge of boats from its anchors. Planks float like scattered playing cards, and the sea heaves and growls. Shirin shouts over the wind: ‘Every Caravan has limited chances to cross, Courier! One wrong step and you will lose a life. Be humble. Be careful. And whatever happens — help each other up.’ Somewhere out in the spray, a silver thread flashes on a wave.",
   easy:"A storm has wrecked the bridge! Answer carefully in the quiz — each Caravan can only afford a few mistakes.",
   teacher:["Before the lobby opens, Caravans add a line to their Creed on their strip and read it aloud.","Remind students: lives are about teamwork — discuss mistakes kindly together before choosing.","Teachers may display the updated Creeds with the Week 1 ones."],
   retrieval:"The quiz is the retrieval."
  },
  questions:[
   {q:"Which battle did Athens win against Darius’s army in 490 BC?", options:["Troy","Gaugamela","Marathon","Hastings"], answer:2, boss:false, tag:"SS-CC", explain:"At Marathon in 490 BC the Athenians (helped by a small force from Plataea) defeated the Persian landing force, and the Persian fleet sailed home."},
   {q:"How did Xerxes’s army cross the Hellespont?", options:["Through a tunnel","On a bridge of boats","In balloons","By swimming"], answer:1, boss:false, tag:"SS-CC", explain:"Engineers lashed boats side by side and laid planks across them, making a bridge of boats across the narrow strait."},
   {q:"Which 480 BC sea battle was won by the Greek ships?", options:["Marathon","Plataea","Salamis","Carrhae"], answer:2, boss:false, tag:"SS-CC", teach:true, explain:"At Salamis the Greek fleet fought in a narrow strait where the large Persian fleet struggled to manoeuvre."},
   {q:"Week 3 recall: the Royal Road ran from Sardis in the west to which royal city in the east?", options:["Susa","Athens","Marathon","Salamis"], answer:0, boss:false, tag:"SS-PE", explain:"Darius’s Royal Road linked Sardis to Susa — roughly 2,500 km — and Sardis was also close to the Greek cities at the heart of this week’s story."},
   {q:"Why do we compare Greek and Persian accounts when we can?", options:["They may show different perspectives and bias","Both are always false","To make lessons longer","Because maps are different"], answer:0, boss:false, tag:"SS-DO", explain:"Every account has a point of view. Comparing different voices helps us see bias and gaps — and few Persian accounts of these wars survive."},
   {q:"About how many New Zealands could fit inside the Persian Empire at its greatest?", options:["About 2","About 20","About 200","About 2,000"], answer:1, boss:false, tag:"MA-G", explain:"The empire covered roughly 5 million km² and NZ about 270,000 km², so about 20 New Zealands would fit — a rough estimate."},
   {q:"Why does a narrow pass like Thermopylae help the smaller army?", options:["It makes the mountain taller","It limits how many enemy soldiers can attack at once","It turns the sea warm","It gives the larger army more room"], answer:1, boss:false, tag:"SS-PE", teach:true, explain:"A big army can only attack as wide as the gap — so numbers matter less. (At Thermopylae, a hidden path eventually let the Persians go around.)"},
   {q:"The sand cat’s furry paws help it…", options:["Climb trees","Swim rivers","Walk on hot sand","Fly short distances"], answer:2, boss:false, tag:"SC-LW-Eco", explain:"Thick fur between the toes protects the sand cat’s paws from hot sand and helps it walk without sinking."},
   {q:"Which of these is a BEHAVIOUR adaptation of a jerboa?", options:["Large back legs","Being active at night","Long tail","Mouse-sized body"], answer:1, boss:false, tag:"SC-LW-Eco", explain:"Being active at night (nocturnal) is something the jerboa does — a behaviour. Long legs and tail are body adaptations."},
   {q:"BOSS ×2 — In a fair test of insulation, what must stay the SAME in every beaker?", options:["The wrapping material","The starting temperature and amount of water","The thermometer reading at the end","Nothing — each should be different"], answer:1, boss:true, tag:"SC-NoS-I", explain:"In a fair test only ONE thing changes (the wrapping). Starting temperature, water amount, beaker and timing must be the same so we can trust the result."},
   {q:"Proverbs 16:18 says pride goes before…", options:["breakfast","friends","wealth","destruction"], answer:3, boss:false, tag:"RE", explain:"Proverbs says pride goes before destruction and a haughty spirit before a fall — a warning that is true for every person and ruler."},
   {q:"BOSS ×2 — Greek writers said Xerxes had the sea whipped, while Jesus calmed the sea in Mark 4. What is the best thing to say about these two stories?", options:["Both are exactly the same kind of story","Historians doubt the whipping story, but Mark records Jesus calming the sea with authority and care","Only the whipping story is believable","Neither tells us anything"], answer:1, boss:true, tag:"RE", teach:true, explain:"The whipped-sea story comes from a Greek source and many historians think it is exaggerated. Mark tells of Jesus speaking to the storm and the disciples asking ‘Who is this?’ — the point is who has authority over creation, and how it is used."}
  ],
  paths:[
   {id:"A", name:"Caravan Log", icon:"book",
    brief:"Reflect on your week: what you now know, what is still a mystery, and your Faith Thought about pride and humility.",
    checklist:["I wrote 3 things I now know","I wrote 1 thing that is still a mystery","I wrote a Faith Thought about pride and humility","I rated my own effort honestly"],
    scaffold:"<b>I now know…</b> <br><b>It is still a mystery…</b> <br><b>My Faith Thought:</b> This week I saw that humility means…",
    diff:{supported:"Use sentence starters and draw a picture instead of writing one of the answers.",
          standard:"Write all three sections in full sentences.",
          extended:"Connect two subjects (for example, geography and history) in one paragraph about why narrow places matter."}},
   {id:"B", name:"Question-Maker", icon:"scroll",
    brief:"Write 2 quiz questions with wrong-answer decoys for next week’s Showdown bank.",
    checklist:["Each question is clear","I wrote one correct answer and three believable decoys","I wrote a one-line explanation","I checked that the answer is correct"],
    scaffold:"<b>Question:</b> … <br><b>A)</b> … <b>B)</b> … <b>C)</b> … <b>D)</b> … <br><b>Correct:</b> … <br><b>Because:</b> …",
    diff:{supported:"Use the question frame; write one question with a partner.",
          standard:"Write two complete questions with explanations.",
          extended:"Write a Boss question that asks students to compare two sources or two perspectives."}},
   {id:"C", name:"Teach-Back Comic/Poster", icon:"star",
    brief:"Explain the week’s big idea (for example, why narrow places help defenders, or why we compare sources) to a younger child using a comic or poster.",
    checklist:["I picked ONE big idea","I used simple words a younger child would understand","I used at least 2 pictures","My comic/poster is neat and clear"],
    scaffold:"<b>Big idea:</b> … <br><b>Three steps to explain it:</b> 1 … 2 … 3 … <br><b>Check:</b> Could a Year 2 understand this?",
    diff:{supported:"Use a 4-panel comic template with captions provided to fill in.",
          standard:"Create your own comic or poster.",
          extended:"Add a ‘quiz the reader’ question at the end."}}
  ],
  councilFire:{
   see:{refs:["Prov 16:18","Mark 4:35–41","Eph 6:10–18"],text:"This week we met rulers who were proud and warned that pride comes before a fall. We heard of Jesus calming a storm with a word, and of Paul’s picture of the strength God gives."},
   wonder:"What was the most important thing you learned this week about being strong — and being humble?",
   weigh:"Which of this week’s stories made you think hardest about how we treat people on the other side of a story?",
   respond:"Say your Caravan Creed together. Pray for each other and for the journey ahead.",
   teacher:"Keep this short and warm. Celebrate effort and kindness in the Showdown, not only winning.",
   verses:["Prov 16:18","Mark 4:35–41","Eph 6:10–18"]},
  assess:{
   evidence:"Showdown data per concept tag (exportable); Victory Lap product; updated Caravan Creed.",
   rubric:["Answers some questions with support.","Answers most questions accurately, including some recall from earlier weeks.","Explains why wrong answers were wrong and applies ideas across subjects.","Writes strong questions that need reasoning and uses evidence from two sources."]},
  nzConnection:"Link back to the NZ connections of the week (different accounts of the same event, Cook Strait and harbours, tussocklands, kōwhaiwhai and tukutuku).",
  sensitivity:"Winning is not the point of the Showdown — keep celebrating effort. Some students may feel anxious about losing ‘lives’; remind them that the whole Caravan shares the risk and remind them it is a game. Offer the ‘anonymise names’ option.",
  inquiry:["What did the Showdown data show? Which tags had the lowest success?","Which misconception (for example, ‘Greek version = the only version’) needs re-teaching?","What will I change next week?"],
  teachingMoments:[2,6,11],
  widgets:[]
 }
 }
};
})();
