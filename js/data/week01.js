/* ===================================================================
   STAGE 1 — THE GATES OF THE PLATEAU  (Week 1 · full lesson data)
   Schema follows the Master Build Brief §3.8, extended with the
   teacher-plan fields (timed steps, vocab, differentiation, rubric).
   NZ English spelling. Scripture is paraphrased — read from your own
   Bible translation in class.
   =================================================================== */
(function(){
const RR=window.RR; RR.WEEKS=RR.WEEKS||{};

RR.WEEKS[1] = {
 n:1,
 title:"The Gates of the Plateau",
 era:"up to c. 550 BC",
 place:"Zagros Mountains, Ecbatana, Susa",
 fragment:"The Fragment of Beginnings",
 story:{
  briefing:"The Seal has shattered. Before we can find it, we must understand the land and peoples who made the first paths of Persia.",
  briefingFull:"Courier! It is Shirin — ink on my fingers, sand in my boots. The Seal of the Kings has shattered into ten pieces, and the first one lies somewhere on the Great Plateau. But this is an old, old land. Before we can find anything, we must learn who walked here first, how the mountains and rivers shaped them, and which creatures call these mountains home. Your caravan has until Friday. Rivals are already on the road… and I think someone is watching us from the ridge.",
  shadowCourier:"A silver glint on a ridge; hoofprints that stop at a cliff.",
  shadowClue:"Hoofprints in the dust… and then, at the edge of the cliff, they simply stop. No fall. No body. Only a silver glint far along the ridge. Who — or what — leaps a gorge on horseback?",
  event:"Charter Day — each Caravan signs a Creed before the race begins.",
  fridayReveal:"The champions of Stage 1 lift the Fragment of Beginnings from the cairn on the high pass. It is warm, as if someone has just held it… and on its edge, scratched very small, is a silver mark. The Shadow Courier was here first."
 },
 materials:["Artefact (‘Dig’) envelopes — replica clay-tablet fragment, pottery shard, copied map (one per team)","Timeline strip (class length 2–3 m)","Large floor map of Iran / the Middle East + atlases","Salt dough or papier-mâché; card bases","School-grounds quadrats / hula hoops; clipboards","Foil, paint (lapis, gold, turquoise), foam printing sheets, brayers","Compass, protractor, rulers; paper for banners","Mini-whiteboards; A–D answer cards (for offline Showdown)"],

 days:{
 /* ====================================================================== MONDAY */
 mon:{
  id:"w1-mon", day:"mon", subject:"History",
  title:"Before the Empire: Elamites, Medes and Persians",
  tagline:"Who walked here first — and how can we be sure?",
  nzc:["SS-CC","SS-DO","EN-R","EN-S"],
  kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
  values:["Inquiry & curiosity","Integrity","Respect"],
  li:"We are learning to describe who lived in ancient Persia and how we know about them.",
  sc:["I can name three peoples (Elamites, Medes, Persians).","I can explain what a source is and give an example.","I can say why we use more than one source."],
  vocab:[
   {w:"source",d:"Anything that tells us about the past (an object, a text, a picture, a story)."},
   {w:"archaeologist",d:"A scientist who studies the past by digging up and examining objects."},
   {w:"artefact",d:"An object made by people long ago."},
   {w:"cuneiform",d:"Wedge-shaped writing pressed into wet clay with a reed."},
   {w:"bias",d:"When someone’s own side or opinion shapes how they tell a story."},
   {w:"Elamites",d:"People of the ancient kingdom of Elam in south-west Iran (capital: Susa)."},
   {w:"Medes",d:"People of north-western Iran; their capital was Ecbatana."},
   {w:"Persians",d:"People from Persis (Fars) in the southern Zagros; Cyrus rises among them about 559 BC."}],
  resources:["Dig envelopes (see Materials)","Timeline strip + date cards","Source-sorter cards (app) or printed set","Persia ↔ Iran flip card (app)","Path A field-report sheet (print from the Teacher View)","Recording device or tablet for Path C"],
  dispatch:{
   title:"The Dig Envelopes",
   story:"Courier! Shirin here. Last night I crept into a ruined caravan stop and found three sealed Dig Envelopes hidden under a loose stone. Inside each one: a scrap of clay tablet, a painted pottery shard, and a copied map. And look — silver hoofprints in the dust, heading east. Someone else is hunting the Seal. Open your envelope, Courier. Be a detective! Who made these things? How old are they? And how can you be sure?",
   easy:"The Seal of the Kings is broken. We must find the pieces! First, we must learn who lived here long ago. Open your Dig Envelope and look carefully. What can you find out?",
   teacher:[
    "BEFORE CLASS: prepare one Dig Envelope per team (see Materials). Form teams (‘Caravans’) of 4–5, mixed ability — students keep these teams all term. Tell them to remember their Caravan: Thursday they design its crest.",
    "Read Shirin’s dispatch aloud (or use the app’s read-aloud). Pause at ‘Be a detective!’ and let the drama land.",
    "Teams examine their envelope for 4 minutes and record on a mini-whiteboard: Who made this? How old might it be? How could we check?",
    "Take two quick shares. Praise careful language: ‘I think… because…’. Do NOT correct guesses yet — the Discovery will.",
    "Share the Learning Intention and Success Criteria (kid-language, on screen). Students read them chorally."],
   retrieval:"First lesson of the term — no retrieval. Starting Tuesday, open with 2–3 retrieval questions from the previous day on mini-whiteboards."
  },
  discovery:{
   intro:"Dig deeper, Courier. Three peoples, four kinds of evidence — and one big question: whom can we trust?",
   cards:[
    {title:"Three peoples, one plateau", icon:"scroll", body:"<b>Elamites</b> lived in the south-west, around the city of <b>Susa</b> — some of the earliest city life in the world, thousands of years before Cyrus (about 4000–2700 BC). <b>Medes</b> lived in the north-west mountains; their capital was <b>Ecbatana</b> (today the city of Hamadan). <b>Persians</b> came from <b>Persis</b> in the southern Zagros. About <b>559 BC</b> a Persian called <b>Cyrus</b> began to rise… but that is next week’s story."},
    {title:"How do we know? Four kinds of source", icon:"book", body:"<b>Archaeology</b> (objects dug from the ground) · <b>Written records</b> (clay tablets in cuneiform) · <b>Greek historians</b> (like <b>Herodotus</b> — he wrote about Persia, but he was Greek and often writing about his people’s rivals, so he is <i>not neutral</i>) · <b>The Bible</b> (an ancient text that names Elam and Persia)."},
    {title:"Why more than one source?", icon:"compass", body:"A single source can leave things out or tell only one side. When two or three <i>different</i> kinds of source agree, we can be more confident. When they disagree, that is a clue too — a good historian asks <i>why?</i>"},
    {title:"Seven coloured walls?", icon:"rosette", body:"Herodotus said Ecbatana had <b>seven walls</b>, each a different colour — white, black, purple, blue, orange, silver and gold! It is a magnificent picture. But archaeologists have not been able to confirm it. A great example of why we check our sources."},
    {title:"Persia or Iran?", icon:"home", body:"In <b>1935</b> the country asked the world to call it <b>Iran</b>. The name <b>Persia</b> comes from <b>Persis</b> (also called Pars or Fars), the home region of the Persians. Both names matter, and we treat both with respect — Persian history belongs to all the peoples and the people of Iran today."}],
   teacher:[
    "Timeline strip (5 min): unroll a strip on the floor/wall: Elam & Susa → Medes (Ecbatana) → Persians (Cyrus c. 559 BC). Add date cards as you teach. Use the app’s interactive timeline on the big screen.",
    "Sources (5 min): introduce the four source types. Run the app’s Source Sorter as a whole-class game (hands up / A–D cards). Spend 1 minute on Herodotus: ‘Why might a Greek writer see Persia differently from a Persian scribe?’",
    "Persia vs Iran (2 min): use the flip card. Keep the tone respectful. Invite Iranian-NZ students to share only if they wish — never put a child on the spot as a ‘cultural expert’.",
    "Model one source sentence on the board: ‘I know the Elamites lived at Susa because archaeologists have dug up clay tablets there.’ Students write their own on a mini-whiteboard."]
  },
  paths:[
   {id:"A", name:"Archaeologist’s Field Report", icon:"scroll",
    brief:"Choose ONE artefact from your Dig Envelope. Examine it like a real archaeologist and complete a Field Report: what you see, what you think, what you still wonder, and where you could check.",
    checklist:["I drew or described my artefact clearly","I wrote 3 things I can SEE (facts)","I wrote what I THINK and gave a ‘because’","I wrote at least one thing I still WONDER","I named one place I could CHECK (a second source)"],
    scaffold:"<b>What I see:</b> I can see… I notice… <br><b>What I think:</b> I think this was made by… because… <br><b>What I still wonder:</b> I wonder why… how… <br><b>Where could I check?</b> I could check by looking at… (a museum website, an atlas, a second source).",
    diff:{supported:"Use the word bank (clay · tablet · wedge-shaped · pottery · pattern · ancient) and the sentence frames above. Work beside a partner for the ‘Where could I check?’ box.",
          standard:"Complete all four boxes in full sentences and name one specific kind of source you would use to check.",
          extended:"Compare TWO artefacts. Which gives better evidence about everyday life? Explain how a single artefact could mislead an archaeologist."}},
   {id:"B", name:"Timeline Scroll", icon:"book",
    brief:"Build a 2–3 metre class timeline from Elam to Cyrus. Each student creates ONE segment — a date, a caption and a picture — and the whole class joins them into a scroll.",
    checklist:["My segment has a date or date range","My caption is 1–2 clear sentences in my own words","My picture matches my caption","I wrote which source tells us this (archaeology, tablet, Herodotus, Bible)","My segment fits in the right order on the strip"],
    scaffold:"<b>Segments to share out:</b> (1) Susa grows into one of the world’s earliest cities (about 4000–2700 BC) · (2) The kingdom of Elam · (3) The Medes and their capital Ecbatana · (4) The Persians in Persis · (5) About 559 BC: Cyrus begins to rise · (6) Today: archaeologists keep digging. <br><b>Caption frame:</b> About ___, the ___ … We know this from ___.",
    diff:{supported:"Choose a segment from the list. Use the caption frame and pick a picture from the picture bank.",
          standard:"Write the caption yourself, include a date, a drawing and your source credit.",
          extended:"Add an ‘inference panel’ at the end of your segment: What do we NOT know yet? How might an archaeologist find out?"}},
   {id:"C", name:"Voice of the Plateau (radio bulletin)", icon:"horn",
    brief:"Record a 90-second news bulletin announcing the rise of the Persians among the Medes. Include a ‘source’ credit so listeners know how we know.",
    checklist:["My bulletin has a headline and a sign-off (‘This is Voice of the Plateau’)","I named WHO, WHERE and WHEN","I gave a ‘source’ credit (‘according to the clay tablets…’)","It lasts about 90 seconds","I spoke clearly, with expression"],
    scaffold:"<b>Headline:</b> ‘Breaking news from the plateau!’ <br><b>Who/Where/When:</b> The Persians of Persis… under the Medes… before 550 BC. <br><b>Source credit:</b> According to ___, … <br><b>Sign-off:</b> This is ___, Voice of the Plateau.",
    diff:{supported:"Use the script frame with a partner; read it aloud twice before recording.",
          standard:"Write your own script with a source credit. Use at least two vocabulary words.",
          extended:"Add a second voice: a Greek reporter AND a Persian scribe describing the same event differently — then explain why they differ."}}
  ],
  councilFire:{
   see:{refs:["Gen 10:22","Acts 17:26–27"],
        text:"Genesis 10 lists the families of the nations, and Elam is named there as one of Shem’s sons. In Acts 17, Paul says God made every nation from one person and set the times and places where peoples would live, so that they would reach out and look for Him."},
   wonder:"What does it mean that God set the times and places of the nations? What does it tell us about how God sees every people group — including the peoples we are studying?",
   weigh:"How does the Bible fit with archaeology as a source? Where do they agree (Elam is real and in the right region)? Where does each tell only part of the story? (Look out for the Elamites, Medes and Parthians together in Acts 2:9 — we will meet them again!)",
   respond:"Write ONE sentence thanking God for the people groups of the world, and ONE thing you will do to treat other peoples’ stories carefully.",
   teacher:"Genesis 10 is often called the ‘Table of Nations’: it shows how peoples are connected rather than giving a modern anthropology. Say honestly: ‘Christians read some details differently.’ Keep the focus on what the passage affirms — God’s care for every nation.",
   verses:["Gen 10:22","Acts 17:26–27","Acts 2:9"]},
  assess:{
   evidence:"A ‘source-use’ sentence (‘I know X because of source Y’), the Path product (photographed) and observation notes from the Council Fire discussion.",
   rubric:["Names some peoples or sources with support.","Describes the three peoples accurately and gives an example of a source in their own words.","Explains why historians use more than one source, using evidence and vocabulary precisely.","Evaluates a source’s bias and compares two perspectives; applies the idea to a new context (e.g. NZ)."]},
  nzConnection:"How do people in Aotearoa record the past — whakapapa, pūrākau, photographs, archives, museums? Which ‘sources’ would a historian use 2,000 years from now? (Invite your Māori Education lead or local iwi/hapū for local knowledge; avoid pan-Māori generalisations.)",
  sensitivity:"Greek writers like Herodotus described Persians through their own perspective — name this as bias rather than ‘fact’. Treat the names Persia and Iran respectfully. Some students may be Iranian-NZ or from Muslim backgrounds; never single them out.",
  inquiry:["What did students already know about ‘how we know the past’?","Which students could name a source AND explain its limits?","What will I change in tomorrow’s map work to build on today’s source skills?"],
  widgets:["dig","timeline","sources","persiairan"]
 },

 /* ====================================================================== TUESDAY */
 tue:{
  id:"w1-tue", day:"tue", subject:"Geography — Settlements & Cities",
  title:"The Great Plateau: Reading the Land",
  tagline:"Why did people build here — and not there?",
  nzc:["SS-PE","SS-DO","MA-G"],
  kc:["Thinking","Using language, symbols & texts","Relating to others"],
  values:["Ecological sustainability","Inquiry & curiosity","Community & participation"],
  li:"We are learning to locate Persia and explain why people settled where they did.",
  sc:["I can find the Zagros, Alborz, Caspian Sea, Persian Gulf and deserts on a map.","I can use a compass and scale.","I can give two reasons people settle in a place."],
  vocab:[
   {w:"plateau",d:"A large, high, fairly flat area of land."},
   {w:"qanat",d:"A gently sloping underground tunnel that carries water from the mountains to a village."},
   {w:"settlement",d:"A place where people live together."},
   {w:"settlement hierarchy",d:"Settlements ranked by size: farm → hamlet → village → town → city."},
   {w:"compass rose",d:"The map symbol showing north, south, east and west."},
   {w:"scale",d:"How map distance relates to real distance."},
   {w:"Zagros / Alborz",d:"Iran’s western and northern mountain ranges."}],
  resources:["Giant floor map + caravan tokens","Atlases, compasses, rulers","Salt dough / papier-mâché / card bases","Site-selection cards (app or printed)","Qanat diagram (app)","Local-area map for Path C comparison"],
  dispatch:{
   title:"Caravan Tokens on the Floor-Map",
   story:"The silver hoofprints led us to a vast map spread across the floor of the old map-room! Shirin snaps her fingers: ‘Every caravan needs a navigator. Move your token — and use a compass, Courier, or you’ll end up in the salt desert!’ Remember yesterday’s artefacts? Where on this plateau might they have come from?",
   easy:"We have a giant map! Use compass directions to move your token. Where could yesterday’s objects have come from?",
   teacher:[
    "Retrieval (2 min): three mini-whiteboard questions from Monday (name two peoples; what is a source; why use more than one?).",
    "Floor map: each team places a caravan token at the start. Call directions: ‘Move NE to the mountains. Now 3 squares south…’ Teams take turns to be the navigator and call a direction.",
    "Link: ‘Yesterday’s pottery shard — where might it have been found? Why there?’ Take predictions without comment.",
    "Share LI/SC (students read aloud)."],
   retrieval:"Monday: three peoples; what a source is; why we use more than one."
  },
  discovery:{
   intro:"The plateau is a high, wild land — ringed by mountains, sprinkled with deserts, edged by two seas. Read the land like a Courier!",
   cards:[
    {title:"A high land ringed by mountains", icon:"compass", body:"The <b>Iranian Plateau</b> is high land surrounded by mountains. The <b>Zagros</b> run down the <b>west</b>; the <b>Alborz</b> curve across the <b>north</b> (Iran’s highest peak, <b>Damavand</b>, is about 5,600 m). In the middle and east lie two great deserts: the <b>Dasht-e Kavir</b> (Great Salt Desert) and the <b>Dasht-e Lut</b>. The <b>Caspian Sea</b> lies to the north and the <b>Persian Gulf</b> to the south. Iran is about <b>six times</b> the size of Aotearoa New Zealand!"},
    {title:"Water is life: rivers and qanats", icon:"flame", body:"Rain falls in the mountains but much of the plateau is dry. People learned to bring water to their fields by <b>qanats</b> — gently sloping tunnels dug underground from a ‘mother well’ in the foothills to a village below. The water flows by gravity (no pump!) and, because it is underground, less of it evaporates in the hot sun. Some qanats are thousands of years old and still work today."},
    {title:"Why here? Four questions for a settlement", icon:"home", body:"People choose a place by asking: <b>Water</b> — is there a river, spring or qanat? <b>Soil</b> — can we grow food? <b>Defence</b> — can we protect ourselves? <b>Trade</b> — are there paths to meet other peoples? The best sites answer several of them."},
    {title:"A settlement ladder", icon:"book", body:"Settlements come in sizes: a <b>farm</b> → a <b>hamlet</b> → a <b>village</b> → a <b>town</b> → a <b>city</b>. In the foothills of the Zagros, early farming <b>villages</b> grew. Susa, in the south-west, grew into a <b>city</b>. A city is more than size — it has leaders, markets, specialist workers and often walls."},
    {title:"Plateau vs Southern Alps", icon:"ibex", body:"Our own Southern Alps rise to <b>Aoraki/Mt Cook</b> (3,724 m). Damavand in Iran’s Alborz is about 5,600 m — and the plateau’s mountains are far wider. Both ranges bring rain and snow to one side and leave a drier land on the other."}],
   teacher:[
    "Landforms (6 min): label the Zagros, Alborz, Kavir, Lut, Caspian and Gulf on the big map as you talk. Students point to each on their own map.",
    "Qanat (4 min): run the animated qanat in the app. Ask: ‘Why shafts? Why a gentle slope? What would happen if the slope were steep?’",
    "Site selection (3 min): water · soil · defence · trade. Mini-whiteboards: ‘Name the best of these for a village near a river.’",
    "Settlement ladder (2 min): link to local examples — choose from your own rohe/region (e.g. a high-country farm → a small village → a town → Christchurch)."]
  },
  paths:[
   {id:"A", name:"Relief Map of the Plateau", icon:"compass",
    brief:"Build a salt-dough or papier-mâché relief map of the plateau. Show the mountain ranges, deserts and seas, and add labels.",
    checklist:["I shaped the Zagros (west) and Alborz (north)","I showed the Dasht-e Kavir and Dasht-e Lut","I showed the Caspian Sea and the Persian Gulf","I added labels and a small key","I can explain one way the land shapes where people live"],
    scaffold:"<b>Label bank:</b> Zagros · Alborz · Dasht-e Kavir · Dasht-e Lut · Caspian Sea · Persian Gulf · Susa · Ecbatana. <br><b>Say it:</b> People live near ___ because ___.",
    diff:{supported:"Use a pre-made base outline and a label bank; the teacher marks mountain positions with chalk first.",
          standard:"Build and label independently; add a key with three symbols.",
          extended:"Add a cross-section strip showing height from the Gulf up over the Zagros; explain how height affects settlement."}},
   {id:"B", name:"Journey Map of the Race", icon:"scroll",
    brief:"Draw (or build digitally) a map with a title, compass rose, scale bar and key. Show the route of the race and label 8 places.",
    checklist:["Title","Compass rose (N, S, E, W)","Scale bar","Key with symbols","Route of the race drawn clearly","8 labelled places","Neat, readable labels"],
    scaffold:"<b>Map conventions checklist:</b> T · A · L · K · E · S (Title · Arrow/compass · Legend · Key · Edge/border · Scale). <br><b>8 places to choose from:</b> Zagros · Alborz · Susa · Ecbatana · Kavir · Lut · Caspian · Gulf.",
    diff:{supported:"Use a printed outline map; trace the route and add compass, scale bar and four labels.",
          standard:"Draw independently with all conventions and 8 labels.",
          extended:"Add a scale conversion panel (1 cm = ? km) and calculate the distance of one stage of the route."}},
   {id:"C", name:"“Why Here?” Site Selection", icon:"home",
    brief:"Look at a map card showing resources and hazards. Choose the best village site and justify your choice with three reasons. Then compare it with how people chose pā or kāinga sites in your rohe.",
    checklist:["I chose ONE site","I gave 3 reasons (water, soil, defence, trade…)","I named one hazard and how people could manage it","I compared with a pā/kāinga site in my rohe (using local guidance)"],
    scaffold:"<b>Reason frame:</b> I chose Site __ because (1) …, (2) …, (3) …. <br><b>Hazard:</b> One risk is …, but people could … <br><b>Compare:</b> In our rohe, people chose sites near …",
    diff:{supported:"Pick from the reason bank (water · soil · defence · trade) and complete the frame.",
          standard:"Give three reasons and one hazard with a way to manage it.",
          extended:"Rank the four sites from best to worst and write a short persuasive paragraph; compare with a local example."}}
  ],
  councilFire:{
   see:{refs:["Acts 17:26–27","Psalm 24:1"],
        text:"Paul says God chose the exact places where peoples would live. The psalmist sings that the earth and everything in it belongs to the Lord — the world, and all who live in it."},
   wonder:"If the earth is the Lord’s, how should we treat the places where we live — our school grounds, our rivers, our maunga?",
   weigh:"Compare what you learned about settling (water, soil, defence, trade) with the Acts text — ‘exact places’. Does careful geography make God’s care less real, or help us see it more clearly?",
   respond:"‘Place thanks’: name ONE feature of your local landscape you will care for this term, and say it aloud to a partner.",
   teacher:"Avoid implying that geography ‘proves’ the Bible. Frame it as noticing: the Creator’s world has patterns we can study. Pair with kaitiakitanga language.",
   verses:["Acts 17:26–27","Ps 24:1"]},
  assess:{
   evidence:"Map conventions checklist; the reasoning in Path C (three reasons); photographs of Path products.",
   rubric:["Locates one or two features with support and a prompt.","Locates the main features accurately and uses a compass and scale correctly.","Explains why people settle in a place using water, soil, defence and trade as evidence.","Compares two settlement choices (Persian & local) and evaluates trade-offs."]},
  nzConnection:"Compare the Zagros with the Southern Alps (rain on one side, dry on the other). How did the choices of early settlers in your rohe depend on water, food, defence and travel routes? Use local guidance.",
  sensitivity:"Keep references to modern Iran neutral and respectful; this week is about land, not politics.",
  inquiry:["Which map conventions did most students forget?","Could students explain WHY a site is good, or only name features?","What scaffolds helped the supported group most?"],
  widgets:["plateauMap","qanat","siteGame","ladder"]
 },

 /* ====================================================================== WEDNESDAY */
 wed:{
  id:"w1-wed", day:"wed", subject:"Science — Animal Communities & Habitats",
  title:"What Is a Habitat? The Zagros Mountain Community",
  tagline:"Whose footprints are these? (Not Gandom’s.)",
  nzc:["SC-LW-Eco","SC-LW-LP","SC-NoS-C"],
  kc:["Thinking","Using language, symbols & texts","Managing self"],
  values:["Ecological sustainability","Inquiry & curiosity","Respect"],
  li:"We are learning to explain what a habitat and a community are and how animals suit mountain habitats.",
  sc:["I can define habitat, population, community and ecosystem.","I can match 3 Zagros animals to their adaptations.","I can record observations clearly."],
  vocab:[
   {w:"habitat",d:"The natural home of a living thing."},
   {w:"population",d:"All the living things of ONE kind in a place (e.g. all the ibex on one mountain)."},
   {w:"community",d:"All the different populations living together in one place."},
   {w:"ecosystem",d:"A community PLUS its non-living surroundings (rock, water, air, sunlight, temperature)."},
   {w:"adaptation",d:"A feature or behaviour that helps a living thing survive in its habitat."},
   {w:"abiotic",d:"Non-living parts of a habitat (rock, water, temperature)."},
   {w:"carnivore / herbivore / omnivore",d:"Eats meat / eats plants / eats both."}],
  resources:["Mystery Footprint cards (app or printed)","Animal Cards (collect weekly)","Quadrats / hula hoops, clipboards, hand lenses","Large paper for dioramas; recycled materials","Animal fact-file sheet","Photos of the four Zagros animals"],
  dispatch:{
   title:"Mystery Footprints",
   story:"Dawn on the Zagros. Cold air, thin and sharp. And there, in a patch of mud by the stream — footprints! Four sets, all different. Shirin crouches: ‘Tracks tell stories, Courier. Whose are they? Be careful — Gandom has already guessed… and she has been wrong every single time.’ Gandom the camel lifts her chin proudly. She chewed the map again.",
   easy:"Look at the tracks in the mud! Who made them? Gandom the camel guesses… but she is always wrong!",
   teacher:[
    "Retrieval (2 min): Tuesday — name a mountain range; what is a qanat; give two reasons people settle in a place.",
    "Lay out the four Mystery Footprint cards on the floor/projector (ibex hoof, leopard paw, bear paw with claw marks, eagle foot). Teams discuss: ‘Which animal? How do you know?’",
    "Use the app’s Footprint game: reveal one at a time. Gandom ‘guesses’ first — and is wrong. (Laugh with the class.)",
    "Share LI/SC; students tick off the vocabulary as it appears."],
   retrieval:"Tuesday: Zagros & Alborz; qanat; why people settle where they do."
  },
  discovery:{
   intro:"Meet the Zagros community — four animals, one mountain home, and a whole ecosystem of rock, water and sunlight.",
   cards:[
    {title:"Five big words", icon:"book", body:"<b>Habitat</b> = the natural home of a living thing. <b>Population</b> = all one kind in a place. <b>Community</b> = all the different kinds together. <b>Ecosystem</b> = the community plus rock, water, air and temperature. <b>Adaptation</b> = a feature or behaviour that helps survival."},
    {title:"The Zagros community", icon:"ibex", body:"Oak woodland and grasses cover the slopes. Living here: the <b>bezoar ibex</b> (a wild goat), the <b>Persian leopard</b> (rare and endangered), the <b>brown bear</b> and the <b>golden eagle</b>. Their food chain: grass → ibex → leopard."},
    {title:"Built for the mountain", icon:"paw", body:"<b>Ibex:</b> hard-rimmed, grippy hooves for steep rock; very long horns; a thick coat in winter. <b>Leopard:</b> spotted coat for camouflage; strong body for climbing. <b>Brown bear:</b> thick fur, powerful claws for digging, eats plants AND meat. <b>Golden eagle:</b> far sharper eyesight than ours, hooked beak and strong talons."},
    {title:"Animal Cards", icon:"star", body:"Each week you collect new <b>Animal Cards</b> — tilt them to see the holo shine! This week: ibex, leopard, bear and eagle."},
    {title:"Tahr in Aotearoa", icon:"ibex", body:"The ibex has a cousin on the other side of the world: the <b>Himalayan tahr</b>, introduced to the Southern Alps in the early 1900s. Why might an <i>introduced</i> species change a habitat? We will explore this again in Weeks 6 and 8."}],
   teacher:[
    "Vocabulary (5 min): build the five-word ladder together: habitat → population → community → ecosystem → adaptation. Use a concrete example: ‘all the ibex on one mountain = population; ibex + leopard + eagle + oaks = community; add rock + stream + weather = ecosystem’.",
    "Zagros community (5 min): use the app’s interactive habitat scene — tap each animal and plant to learn its adaptation. Students record on their fact-file.",
    "Adaptation game (3 min): ‘Hooves for what? Spots for what? Claws for what?’ Quick-fire pairs.",
    "Introduce Animal Cards (2 min). Remind students to look after them and bring them to Council Fire."]
  },
  paths:[
   {id:"A", name:"Animal Fact-File & Adaptation Diagram", icon:"paw",
    brief:"Choose one Zagros animal. Make a fact-file with a labelled adaptation diagram — three adaptations, and why each helps it survive.",
    checklist:["Animal name + habitat","A clear, labelled diagram with 3 adaptations","I explained WHY each adaptation helps","I used the words habitat, community and adaptation","I wrote what it eats and what might eat it"],
    scaffold:"<b>Frame:</b> The ___ has ___ which helps it ___. <br><b>Diet:</b> It eats … It is a herbivore/carnivore/omnivore. <br><b>Community link:</b> It lives with …",
    diff:{supported:"Use the pre-drawn outline of the animal and the label bank; complete the ‘has… which helps…’ frames.",
          standard:"Draw and label independently with three adaptations and explanations.",
          extended:"Add a food chain and explain what would happen to the community if the animal disappeared."}},
   {id:"B", name:"Mountain Habitat Diorama", icon:"ibex",
    brief:"Build a mountain habitat diorama showing the community and the non-living (abiotic) parts: rock, water, temperature, sunlight.",
    checklist:["I showed at least 3 animals/plants","I labelled the abiotic parts (rock, water, temperature)","I labelled one adaptation for each animal","I can explain one way living and non-living parts depend on each other"],
    scaffold:"<b>Label bank:</b> bezoar ibex · Persian leopard · brown bear · golden eagle · oak · grass · stream · rock · snow. <br><b>Say it:</b> The ___ depends on ___ because ___.",
    diff:{supported:"Start from a shoebox with the sky and ground already painted; add and label three things.",
          standard:"Independently build and label with an explanation for each.",
          extended:"Show a food web with arrows and explain what could change if the stream dried up."}},
   {id:"C", name:"Habitat Detectives (outdoors)", icon:"compass",
    brief:"Run a quadrat survey of the school grounds. Sketch and tally what you find, then answer: Which Zagros animals could live here — and why or why not?",
    checklist:["I placed my quadrat and recorded the location","I made a tally chart of what I found","I sketched what I saw","I compared our grounds to the Zagros with evidence","I wrote one thing I would investigate next"],
    scaffold:"<b>Table:</b> What I found | How many | Where. <br><b>Compare:</b> The Zagros animals could / could not live here because … <br><b>Next question:</b> I wonder …",
    diff:{supported:"Use a pre-made tally chart and pair with a buddy; hand lens provided.",
          standard:"Create your own table, sketch and write a short comparison.",
          extended:"Calculate the density per square metre and explain how a second quadrat would improve your data."}}
  ],
  councilFire:{
   see:{refs:["Psalm 104:16–18","Genesis 1:24–25"],
        text:"The psalmist sings that the high mountains belong to the wild goats and the rocky cliffs are a refuge for the hyraxes — God looks after every creature in its own home. In Genesis, God makes the animals of the land, each according to its kind, and sees that it is good."},
   wonder:"What does it say about God that He makes so many kinds of creatures, each in its own place?",
   weigh:"What do you see in the adaptations — hooves, spots, eyes — that fits this? How does scientific observation help us notice what the Bible celebrates?",
   respond:"Write a two-line ‘Creation Wonder’ note (a thank-you or a question you want to ask the Creator).",
   teacher:"Psalm 104 is a poem — celebrate it as praise, not a science textbook. Science explains HOW living things are suited to habitats; the psalm praises WHO made them and cares for them.",
   verses:["Ps 104:16–18","Gen 1:24–25"]},
  assess:{
   evidence:"Vocabulary use; accuracy of the adaptation–habitat link; clarity of diagrams and tally charts.",
   rubric:["Names an animal and one feature with support.","Describes three adaptations correctly and uses ‘habitat’ and ‘community’ accurately.","Explains how each adaptation helps survival in the Zagros and links animals in a community.","Predicts how a change (introduced species, drought) would affect the community."]},
  nzConnection:"Compare the Zagros ibex with the NZ tahr (introduced). Why do introduced species matter? Link to NZ habitats you know — and to kaitiakitanga (guardianship of the environment).",
  sensitivity:"The Persian leopard is rare and endangered — present this as a reason to care, not to panic. Keep the diet and food-chain talk matter-of-fact.",
  inquiry:["Which vocabulary words did students still confuse (population vs community)?","Did the outdoor quadrat produce usable data?","What do I need to revisit before Week 2’s grassland community?"],
  widgets:["footprints","zagrosHabitat","vocabMatch","animalCards"]
 },

 /* ====================================================================== THURSDAY */
 thu:{
  id:"w1-thu", day:"thu", subject:"Art — Persian Traditions",
  title:"Pattern, Power & Symmetry: Rosettes, Lotus & Team Banners",
  tagline:"Make the pattern of kings — then make it yours.",
  nzc:["VA-UC","VA-PK","VA-DI","MA-G"],
  kc:["Thinking","Managing self","Participating & contributing"],
  values:["Excellence","Innovation, inquiry & curiosity","Diversity"],
  li:"We are learning to use symmetry and repeated pattern as Persian artists did.",
  sc:["I can create a radial (rosette) pattern.","I can repeat a motif in a border.","I can explain why Persian palaces used patterns."],
  vocab:[
   {w:"rosette",d:"A flower-shaped, round pattern with petals around a centre."},
   {w:"radial symmetry",d:"A pattern that repeats evenly around a centre point."},
   {w:"reflection (mirror) symmetry",d:"One half is the mirror image of the other."},
   {w:"motif",d:"A single design unit that is repeated (e.g. a lotus)."},
   {w:"frieze / border",d:"A band of repeated pattern."},
   {w:"positive / negative shape",d:"The shape itself / the empty space around it."},
   {w:"palette",d:"The set of colours used (today: lapis, turquoise, gold)."}],
  resources:["Compass, protractors, rulers, scissors, paper for fold-and-cut","Lapis, turquoise and gold paint; foam printing sheets; brayers","Large paper for banners; fabric offcuts (optional)","Persepolis rosette and lotus-border images","The app’s Symmetry Lab (for planning)"],
  dispatch:{
   title:"The Fold-and-Cut Challenge",
   story:"On the terrace the stonecutters are working — chip, chip, chip. Patterns bloom across the stone: rosettes like suns, lotus flowers and buds in long, perfect rows. Shirin hands you a square of paper and a pair of scissors: ‘Fold it. Cut it. Open it. How many mirror lines can you find? Persian carvers made patterns like this to honour their king — and to show that order is beautiful.’",
   easy:"Fold and cut a paper shape. Open it! How many mirror lines can you find?",
   teacher:[
    "Retrieval (2 min): Wednesday — define habitat; name two Zagros animals; give one adaptation.",
    "Show images/describe Persepolis rosettes and lotus-and-bud borders (use the app’s scene or printed pictures).",
    "Fold-and-cut challenge (5 min): fold square paper into halves/quarters/eighths; cut a shape; open it. Count the lines of symmetry.",
    "Share LI/SC."],
   retrieval:"Wednesday: habitat vs community; one adaptation of the ibex/eagle/leopard."
  },
  discovery:{
   intro:"Patterns were power — and beauty. Learn the stonecutters’ secrets: symmetry, repetition and a very limited palette.",
   cards:[
    {title:"Two kinds of symmetry", icon:"rosette", body:"<b>Reflection symmetry:</b> a mirror line splits the pattern into matching halves. <b>Radial symmetry:</b> the pattern repeats evenly around a centre — like a flower or a rosette. A rosette with 8 petals has 8 mirror lines!"},
    {title:"The motifs of Persepolis", icon:"star", body:"Carvers at Persepolis (begun about <b>518 BC</b>) repeated <b>rosettes</b>, <b>lotus flowers and buds</b> and rows of marching figures. Repetition creates <b>rhythm</b> — like a drumbeat you can see."},
    {title:"Positive and negative shape", icon:"scroll", body:"A <b>positive shape</b> is the thing; the <b>negative shape</b> is the space around it. Good pattern makers make BOTH interesting."},
    {title:"A limited palette", icon:"paw", body:"Artists often used rich blues (<b>lapis</b>), <b>turquoise</b> and <b>gold</b>. Using just a few colours makes a design feel powerful and calm."},
    {title:"Why patterns?", icon:"home", body:"Patterns showed <b>order</b>, <b>beauty</b> and <b>honour to the king</b>. They also took great skill — the work of many craftspeople."}],
   teacher:[
    "Symmetry (5 min): demonstrate reflection and radial symmetry with folds; count the lines of a rosette. Use the app’s Symmetry Lab on the big screen (tap & draw in one wedge — see it mirror).",
    "Positive/negative (3 min): cut a shape from black paper; show both pieces.",
    "Palette & purpose (4 min): look at images; discuss the three reasons for pattern (order, beauty, honour).",
    "Model the first step of each Path (3 min); students choose A, B or C. Remind them: Path C is the Caravan’s identity for all ten weeks."]
  },
  paths:[
   {id:"A", name:"Golden Rosette", icon:"rosette",
    brief:"Use a compass and protractor to design a radial (rosette) pattern in gold paint on a lapis background.",
    checklist:["My centre is clear and circles are drawn with a compass","I divided the circle evenly (protractor)","My petals repeat evenly all the way round","I used lapis background and gold + turquoise accents","I can name the number of mirror lines in my design"],
    scaffold:"<b>Steps:</b> 1 Draw circles with a compass. 2 Mark equal angles (45° gives 8 petals; 30° gives 12). 3 Draw one petal. 4 Repeat. 5 Paint, light to dark. <br><b>Artist’s statement:</b> My rosette has ___ petals. I used ___ to show ___.",
    diff:{supported:"Use a pre-marked circle with angles drawn; trace and paint petals.",
          standard:"Compass-and-protractor design with your own petal shape.",
          extended:"Combine two rosettes of different sizes and explain how the repeated rhythm creates power."}},
   {id:"B", name:"Lotus Frieze", icon:"star",
    brief:"Create a foam-print border by repeating a lotus motif six times with careful rhythm.",
    checklist:["I designed my motif in foam","I printed it 6 times in a row","The spacing is even (rhythm)","I used the limited palette","I can explain why repetition creates rhythm"],
    scaffold:"<b>Steps:</b> 1 Sketch a lotus-and-bud motif. 2 Press lines into foam. 3 Roll paint thinly. 4 Print and repeat — rotate the motif for a mirror effect. <br><b>Artist’s statement:</b> I repeated my motif ___ times because …",
    diff:{supported:"Use a simple lotus template; practise printing on scrap first.",
          standard:"Design your own motif and print six repeats.",
          extended:"Alternate lotus and bud to make an A-B-A-B rhythm, then add a second border with a different pattern."}},
   {id:"C", name:"Team Banner & Crest", icon:"trophy",
    brief:"Design your Caravan’s crest using symmetrical motifs and an animal emblem. It becomes your team’s identity for all 10 weeks!",
    checklist:["Crest uses reflection OR radial symmetry","One animal emblem (leopard, simurgh, lion…)","Limited palette (3–4 colours)","A short battle cry or creed word (not required to show text)","Everyone in the team contributed"],
    scaffold:"<b>Plan:</b> 1 Choose the emblem. 2 Choose two motifs (rosette? lotus?). 3 Sketch with a mirror line down the centre. 4 Agree on colours. 5 Paint the banner together. <br><b>Artist’s statement:</b> Our crest shows ___ because ___.",
    diff:{supported:"Start with a shield outline and a printed emblem; add motifs and colour.",
          standard:"Design the crest and banner as a team with a division of roles.",
          extended:"Write an ‘explainer card’ about your crest’s symbols and how they reflect your Caravan Creed."}}
  ],
  councilFire:{
   see:{refs:["Exodus 31:1–5"],
        text:"God says He has chosen Bezalel and filled him with the Spirit — with skill, ability and knowledge — to design beautiful things in gold, silver, bronze, stone and wood, to be used in worship."},
   wonder:"Is making beautiful things ‘spiritual’? Can craftsmanship be a gift from God?",
   weigh:"Persian carvers served kings; Bezalel’s craft served God’s worship. What is the difference? What is the same (skill, patience, beauty)?",
   respond:"Thank God for ONE artistic skill you have or admire in someone else. Write or draw it in your Caravan Log.",
   teacher:"Be even-handed: Persian craftsmanship was genuinely excellent. The point is not that Persian art is ‘worse’ but to ask WHO the craft honours and why. Keep it open — ‘Christians think about this in different ways.’",
   verses:["Exod 31:1–5"]},
  assess:{
   evidence:"Accuracy of symmetry and repeat (mirror lines, even spacing); the artist’s statement (1–2 lines) in the Caravan Log.",
   rubric:["Makes a simple pattern with support.","Creates a symmetrical pattern with accurate repeats and explains one choice.","Controls radial symmetry/repeat precisely and explains why patterns were used in Persian palaces.","Combines patterns with intent, compares to other cultures and explains how design communicates identity."]},
  nzConnection:"Compare with kowhaiwhai and tukutuku — pattern as story and identity. Invite a local artist or your Māori Education lead to guide this conversation. Do NOT imitate sacred or tapu designs; focus on the idea of pattern carrying meaning.",
  sensitivity:"Persian patterns come from living cultures; avoid ‘exotic’ language. Banner designs should not copy any religious or sacred symbols.",
  inquiry:["Did students use compass/protractor accurately?","Who needed more time on printing technique?","How well did teams collaborate on the crest?"],
  widgets:["symmetryLab","frieze"]
 },

 /* ====================================================================== FRIDAY */
 fri:{
  id:"w1-fri", day:"fri", subject:"Showdown",
  title:"SHOWDOWN: Charter Day",
  tagline:"The race begins. Sign the Charter. Win the Stage.",
  mode:"classic", fateEnabled:true, timeLimit:20,
  nzc:["SS-CC","SS-PE","SC-LW-Eco","VA-UC","RE"],
  kc:["Thinking","Managing self","Relating to others","Participating & contributing"],
  values:["Integrity","Community & participation","Excellence"],
  li:"We are learning to recall and apply our week’s learning about Persia and work as a team.",
  sc:["I can answer questions about the peoples, land, animals and art of Week 1.","I can work with my Caravan with integrity.","I can explain my thinking when I get something wrong."],
  creedPrompt:"Before the quiz, each Caravan writes a Caravan Creed: ONE sentence about how you will race with integrity.",
  creedStarters:["We will always…","We promise to… even when…","Our Caravan will never…","We will cheer on…"],
  dispatch:{
   title:"Charter Day",
   story:"The Gates of the Plateau stand open. The old cairn on the high pass is waiting. But no caravan may enter until it signs the Caravan Charter. Shirin unrolls a scroll: ‘Write your Creed, Courier. How will you race? With kindness? With courage? With honesty?’ A far-off horn sounds. The Showdown begins.",
   easy:"Today is Charter Day! Your team writes a Creed, then races in the quiz.",
   teacher:["Before the lobby opens, each team writes its Caravan Creed on a strip and reads it aloud.","Teachers may display the Creeds on the wall for the rest of the term."],
   retrieval:"The quiz is the retrieval."
  },
  questions:[
   {q:"Which mountain range runs through western Iran and the heart of ancient Persia?", options:["Southern Alps","Zagros","Rockies","Himalaya"], answer:1, boss:false, tag:"SS-PE", explain:"The Zagros Mountains run down the west of Iran — home to the first Persian villages and to ibex and leopards."},
   {q:"The ancient people who lived at Susa were the…", options:["Vikings","Elamites","Romans","Mongols"], answer:1, boss:false, tag:"SS-CC", explain:"Susa was the Elamite city — one of the earliest cities in the world, long before Cyrus."},
   {q:"The capital of the Medes was…", options:["Ecbatana","Rome","Athens","Memphis"], answer:0, boss:false, tag:"SS-CC", teach:true, explain:"Ecbatana (today the city of Hamadan) was the Median capital. Herodotus said it had seven coloured walls — a story archaeologists cannot confirm."},
   {q:"A scientist who studies objects dug from the ground is an…", options:["astronomer","archaeologist","meteorologist","chemist"], answer:1, boss:false, tag:"SS-DO", explain:"Archaeologists study artefacts — pottery, tablets, tools — to learn about the past."},
   {q:"A habitat is…", options:["a type of tool","the natural home of a living thing","a kind of map","a desert only"], answer:1, boss:false, tag:"SC-LW-Eco", explain:"A habitat is the natural home of a living thing — it gives food, water, shelter and space."},
   {q:"Which animal lives in the Zagros mountains?", options:["Penguin","Kākāpō","Bezoar ibex (wild goat)","Walrus"], answer:2, boss:false, tag:"SC-LW-Eco", explain:"The bezoar ibex has grippy hooves and climbs steep rock. Kākāpō are native to Aotearoa; penguins and walruses live in other habitats."},
   {q:"In 1935 the country asked the world to call it…", options:["Persia only","Iran","Babylon","Elam"], answer:1, boss:false, tag:"SS-CC", teach:true, explain:"In 1935 the government asked the world to use ‘Iran’. ‘Persia’ comes from Persis, the home region of the Persians. Both names matter."},
   {q:"A rosette is…", options:["a weapon","a flower-shaped round pattern","a river","a tent"], answer:1, boss:false, tag:"VA-UC", explain:"A rosette is a round, flower-like pattern with petals around a centre — common at Persepolis."},
   {q:"Acts 17:26 says God determined the nations’ times and…", options:["the exact places where they live","the best food","the colour of rivers","the number of kings"], answer:0, boss:false, tag:"RE", explain:"Acts 17:26: God set the times and the exact places where peoples would live — so that they would look for Him."},
   {q:"BOSS ×2 — Why do historians compare more than one source?", options:["To make lessons longer","To check bias and see different perspectives","Because one source is never allowed","Because maps are boring"], answer:1, boss:true, tag:"SS-DO", teach:true, explain:"Every source has a point of view. Comparing different kinds of source helps us check bias and see the whole picture."},
   {q:"A qanat is…", options:["an underground water channel","a type of camel","a royal robe","a mountain"], answer:0, boss:false, tag:"SS-PE", explain:"A qanat is a gently sloping underground tunnel that carries water from the mountains to a village."},
   {q:"BOSS ×2 — Which is the best reason to build a village near a river?", options:["Rivers are pretty","Water for drinking, crops and travel","Kings like boats","Mountains are loud"], answer:1, boss:true, tag:"SS-PE", explain:"Rivers give water to drink, water to grow crops and a way to travel and trade — three big reasons to settle."}
  ],
  paths:[
   {id:"A", name:"Caravan Log", icon:"book",
    brief:"Reflect on your week: what you now know, what is still a mystery, and your Faith Thought.",
    checklist:["I wrote 3 things I now know","I wrote 1 thing that is still a mystery","I wrote a Faith Thought (what I learned about God or people)","I rated my own effort honestly"],
    scaffold:"<b>I now know…</b> <br><b>It is still a mystery…</b> <br><b>My Faith Thought:</b> This week I saw that God…",
    diff:{supported:"Use sentence starters and draw a picture instead of writing one of the answers.",
          standard:"Write all three sections in full sentences.",
          extended:"Connect two subjects (e.g. geography and science) in one paragraph."}},
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
   see:{refs:["Acts 17:26–27","Ps 24:1","Exod 31:1–5"],text:"This week we met a God who sets the places of the nations, owns the whole earth, fills creatures with fitting skill and fills people with creative skill."},
   wonder:"What was the most wonderful thing you learned about God’s world this week?",
   weigh:"Which of this week’s sources and questions made you think hardest?",
   respond:"Say your Caravan Creed together. Pray for each other and for the journey ahead.",
   teacher:"Keep this short and joyful; celebrate effort, not only winning.",
   verses:["Acts 17:26–27","Ps 24:1","Exod 31:1–5"]},
  assess:{
   evidence:"Showdown data per concept tag (exportable); Victory Lap product; Caravan Creed.",
   rubric:["Answers some questions with support.","Answers most questions accurately.","Explains why wrong answers were wrong and applies the idea.","Writes strong questions with clear decoys and explanations."]},
  nzConnection:"Link back to the NZ connections of the week (whakapapa and sources; Southern Alps; tahr; kowhaiwhai).",
  sensitivity:"Winning is not the point of the Showdown — keep celebrating effort. Some students may feel anxious about public rankings; offer the ‘anonymise names’ option.",
  inquiry:["What did the Showdown data show? Which tags had the lowest success?","Which misconception needs re-teaching on Monday?","What will I change next week?"],
  teachingMoments:[2,6,9]
 }
 }
};
})();
