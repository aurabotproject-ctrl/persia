/* ===================================================================
   STAGE 2 — THE KING WHO OPENED THE GATES  (Week 2 · full lesson data)
   Same schema as week01.js. NZ English spelling. Scripture is
   paraphrased — read from your own Bible translation in class.
   =================================================================== */
(function(){
const RR=window.RR; RR.WEEKS=RR.WEEKS||{};

RR.WEEKS[2] = {
 n:2,
 title:"The King Who Opened the Gates",
 era:"559–530 BC",
 place:"Anshan, Pasargadae, Ecbatana, Babylon",
 fragment:"Fragment of the Open Gate",
 story:{
  briefing:"The second fragment lies in the tomb-city of Cyrus — but the Shadow Courier has torn our map in half! Win back the missing half by Friday.",
  briefingFull:"Courier! Shirin again — and I have bad news. The second fragment of the Seal lies in the tomb-city of Cyrus, the king who opened the gates of Babylon. But look at this: someone crept into the map-room in the night and tore our map exactly in half. Silver ink on the torn edge. Gandom is innocent, for once (she was asleep, and she has paper on her breath, but that is a different story). We must learn how Cyrus rose from a small kingdom to the gates of the greatest city in the world, why people remembered him, and where the missing half might be. Your caravan has until Friday.",
  shadowCourier:"A torn map; a silver thumbprint on the ripped edge.",
  shadowClue:"The torn edge of the map is smooth, as if cut with something very sharp. In the corner, pressed into the ink, is a silver thumbprint — and beside it, a tiny wedge-shaped mark, like a clay tablet signature. Who writes in wedges AND leaves silver prints?",
  event:"Camel Charge — a speed round. Answer fast, answer well: every correct answer wins back a piece of the torn map.",
  fridayReveal:"The champions of Stage 2 lift the Fragment of the Open Gate from beneath the stone steps of the tomb at Pasargadae. Its edge is cut with one clean wedge — and next to the silver mark from last week is a second, new one: a tiny open gate. The Shadow Courier is leaving a trail of signs. And the missing half of the map? It is rolled inside the fragment’s case, with a message: ‘The road is longer than any story.’"
 },
 materials:["Cyrus Cylinder image (British Museum) and a replica clay tablet if available","Air-dry clay or plasticine; wooden skewers or pencils for wedge marks","Cuneiform name-code strips (printed)","Calligraphy pens and parchment-coloured paper","Soap, clay or foam sheets and rollers for cylinder seals","Grassland photographs; quadrat squares or hoops","Coloured paper ‘moths’ (several colours, same size) and a green mat or grass area","Fair-test kit: stopwatch, tallies, graph paper","Blank outline map of NZ; map of Persia, Lydia and Babylon","Mini-whiteboards; A–D answer cards (for offline Showdown)"],

 days:{
 /* ====================================================================== MONDAY */
 mon:{
  id:"w2-mon", day:"mon", subject:"History",
  title:"Cyrus Rises: From Anshan to the Gates of Babylon",
  tagline:"Legend, evidence — and a king remembered as fair.",
  nzc:["SS-CC","SS-DO","EN-W","EN-S"],
  kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
  values:["Integrity","Fairness","Inquiry & curiosity"],
  li:"We are learning to explain how Cyrus built an empire and why people remembered him as fair.",
  sc:["I can put Cyrus’s key events in order (Media about 550 BC, Lydia about 546 BC, Babylon 539 BC).","I can tell legend from evidence.","I can give two perspectives on Cyrus."],
  vocab:[
   {w:"empire",d:"A large group of lands and peoples ruled by one king or government."},
   {w:"conquer",d:"To take control of a place or people by force."},
   {w:"legend",d:"A story told for a very long time that may contain some truth but cannot be fully checked."},
   {w:"evidence",d:"Facts or objects that help show whether something is true."},
   {w:"perspective",d:"A point of view — how a person sees something because of who they are."},
   {w:"cylinder",d:"A round, tube-shaped object. The Cyrus Cylinder is a clay barrel covered in writing."},
   {w:"decree",d:"An official order or announcement from a ruler."},
   {w:"exile",d:"A person forced to live away from their home country."}],
  resources:["Rumour Mill story cards (app or printed)","Legend / Possible fact / Fact sort cards","Cyrus Cylinder image","Timeline strip from Week 1 (add the new date cards)","Path A newspaper template; Path B courtroom role cards; Path C 8-frame storyboard sheet","Map of Anshan, Ecbatana, Sardis and Babylon"],
  dispatch:{
   title:"The Rumour Mill",
   story:"Courier! The torn map has led us to a bustling market, where everyone has a story about the great king Cyrus. ‘He was a baby left on a mountain!’ ‘A king’s dream warned of him!’ ‘A shepherd’s wife raised him!’ Shirin raises one eyebrow: ‘Stories are fun — but which ones are true? Whisper it along the line, Courier, and watch it change. Then we sort the legend from the evidence.’",
   easy:"Everyone has a story about King Cyrus! Some are legends, and some are true. Let’s sort them out.",
   teacher:[
    "Retrieval (2 min): Friday — name two of the three peoples of the plateau; what is a source; why do historians use more than one?",
    "Rumour Mill (4 min): whisper a short sentence about baby Cyrus down each caravan line (e.g. ‘A king dreamed his grandson would take his throne, so he ordered the baby to be taken away — but a shepherd’s family raised him’). Compare the first and last version. Why do stories change?",
    "Tell the legend briefly: the Greek historian Herodotus tells this story. It has the shape of many ancient hero legends, so historians doubt the details.",
    "Sort (3 min): use the Legend / Possible fact / Fact widget on the big screen — hands up or A–C cards.",
    "Share LI/SC; students read them together."],
   retrieval:"Friday: three peoples of the plateau; what a source is; why we compare sources."
  },
  discovery:{
   intro:"One king, three conquests, many stories — and one clay Cylinder. Let’s separate what we know from what we are told.",
   cards:[
    {title:"A small kingdom, a big ambition", icon:"scroll", body:"About <b>559 BC</b> a Persian called <b>Cyrus II</b> became king of <b>Anshan</b> in the southern Zagros. Not long after, he challenged his overlord, <b>Astyages</b> of the <b>Medes</b> — and about <b>550 BC</b> the Median army went over to Cyrus’s side. Cyrus now ruled the Medes and Persians together, with a capital at <b>Ecbatana</b> to add to his own homeland."},
    {title:"Three big dates", icon:"horn", body:"<b>About 550 BC</b> — Cyrus takes over the Median kingdom. <b>About 546 BC</b> — he defeats <b>Croesus</b>, the rich king of <b>Lydia</b> (in what is now western Turkey), and captures his capital <b>Sardis</b>. <b>539 BC</b> — he enters <b>Babylon</b>, the biggest city in the world. Some details are uncertain: ancient writers did not agree on every date."},
    {title:"The Babylon surprise", icon:"home", body:"Babylonian records say the city fell with little fighting. The Babylonian king, <b>Nabonidus</b>, was unpopular with some of his own priests, and Cyrus’s army entered the city. Cyrus said he came as the one chosen by the god Marduk — which tells us how he wanted Babylonians to see him."},
    {title:"The Cyrus Cylinder", icon:"book", body:"A <b>clay barrel</b> about the length of your forearm, written in Babylonian <b>cuneiform</b> and found in Babylon in 1879. It is now in the <b>British Museum</b>. In it, Cyrus says he restored temples, brought home the statues of gods to their sanctuaries and let peoples return to their own towns. It is a real ancient source — but <b>Cyrus’s own team wrote it</b>, so it shows how he wanted to be seen. It is not a modern ‘human rights charter’, and some scholars think it follows an old Babylonian habit of kings praising themselves."},
    {title:"Whose voice? Many perspectives", icon:"compass", body:"<b>Greek writers</b> like Herodotus and Xenophon praised Cyrus, though they were not Persian. <b>Babylonian records</b> show a king who respected local gods. The <b>Bible</b> (Isaiah and Ezra) says that Cyrus let the exiles from Judah go home to rebuild the temple in Jerusalem. Each source has its own purpose — and together they give a fuller picture."}],
   teacher:[
    "Timeline (4 min): add Cyrus 559, Media about 550, Lydia about 546, Babylon 539 to the Week 1 timeline strip. Stand 4 students as ‘living dates’ and have the class order them.",
    "Three conquests (4 min): point to Anshan, Ecbatana, Sardis and Babylon on the map; talk about how far apart these are.",
    "Cylinder (4 min): show the image. Read two or three plain sentences from a teacher-prepared summary. Ask: ‘Who wrote this? Who was it for? Why might a king want it written?’ Be careful: do not call it the ‘first charter of human rights’ — scholars disagree, and it is better to describe what it says.",
    "Perspectives (3 min): a quick three-column chart: Greek / Babylonian / Biblical. What does each source tell us? What might each leave out?"]
  },
  paths:[
   {id:"A", name:"Front Page: Babylon Falls Without a Storm", icon:"scroll",
    brief:"Write a newspaper front page for the day Cyrus entered Babylon. Include a headline, two columns, a picture and a source box saying how we know.",
    checklist:["Headline names Cyrus and Babylon (539 BC)","Two columns of clear facts in my own words","A picture with a caption","A source box (e.g. ‘The Cyrus Cylinder says…’)","I separated what the sources say from what is only a rumour"],
    scaffold:"<b>Headline:</b> BABYLON FALLS WITHOUT A STORM! <br><b>Column 1:</b> Who? What? Where? When? <br><b>Column 2:</b> Why do people say Cyrus was fair? <br><b>Source box:</b> According to the Cyrus Cylinder… Some historians say… but…",
    diff:{supported:"Use the newspaper template with sentence frames and a word bank (Cyrus · Babylon · gates · Cylinder · fair · temple).",
          standard:"Write both columns independently and include a source box with two sources.",
          extended:"Add a second, short ‘Babylonian priest’ opinion column that shows a different perspective, and explain why it differs."}},
   {id:"B", name:"Courtroom: Was Cyrus Great?", icon:"trophy",
    brief:"Prepare a prosecution OR defence statement about whether Cyrus deserves the title ‘Great’, using at least two pieces of evidence. Then hold a mini-hearing.",
    checklist:["I picked my side (prosecution or defence)","I gave 2 pieces of evidence and named the source","I thought about what the other side would say","I spoke clearly and listened politely to the other side","I changed my mind or explained why I did not"],
    scaffold:"<b>Opening:</b> Your Honour, Cyrus was / was not great because… <br><b>Evidence 1:</b> The Cylinder says… <br><b>Evidence 2:</b> Herodotus / Ezra says… <br><b>Reply to the other side:</b> They might say… but…",
    diff:{supported:"Use the evidence cards and sentence frames; prepare with a partner.",
          standard:"Prepare your own statement with two named sources and one reply to the other side.",
          extended:"Act as the judge: write a fair verdict that weighs power (conquest) and justice (kindness) and says what more evidence you would want."}},
   {id:"C", name:"Storyboard: Cyrus’s Rise", icon:"book",
    brief:"Draw an 8-frame storyboard of Cyrus’s rise, with a label under each frame saying LEGEND or EVIDENCE, and a short caption.",
    checklist:["Eight frames in the correct order","Dates on at least three frames (550, 546, 539 BC)","Each frame is labelled Legend or Evidence","Captions are in my own words","The final frame shows Cyrus at Babylon"],
    scaffold:"<b>Frames:</b> 1 Baby Cyrus (legend) · 2 King of Anshan · 3 Medes join him · 4 Croesus of Lydia · 5 Sardis · 6 March to Babylon · 7 The gates open · 8 The Cylinder. <br><b>Label:</b> Legend / Evidence.",
    diff:{supported:"Use the pre-numbered frames with the captions partly written.",
          standard:"Write your own captions and label each frame as Legend or Evidence.",
          extended:"Add a ‘Source Box’ under three frames naming where the information comes from, and say how sure we can be."}}
  ],
  councilFire:{
   see:{refs:["Isa 44:28–45:4","Ezra 1:1–4","Prov 21:1"],
        text:"In Isaiah, God says Cyrus will be His shepherd and that He will open doors for him, naming him even though Cyrus did not know God. In Ezra, Cyrus announces that the exiles may return to rebuild the temple in Jerusalem, and the Lord had stirred his heart. The proverb says a king’s heart is like channels of water in the Lord’s hand: He can turn it wherever He wishes."},
   wonder:"What does it say about God that He named a foreign king before he ever came to power and stirred his heart? Does God care about the leaders of every nation?",
   weigh:"The Cylinder shows Cyrus’s own policy and how he wanted to be seen; Ezra says God moved him. Can both be true? What does each source tell us — and what does neither tell us?",
   respond:"Paul tells Christians to pray for kings and all in authority (1 Timothy 2:1–2). Name ONE leader (a teacher, a principal, a mayor, a prime minister) you will pray for this week.",
   teacher:"Present the Cylinder and Ezra respectfully side by side — they are not the same document and do not mention each other. Christians read Isaiah’s naming of Cyrus as prophecy; some scholars date the passage differently. Either way, Cyrus appears in the Bible as a ruler God used. Avoid claiming the Cylinder ‘proves’ the Bible, or that the Bible ‘explains away’ the Cylinder.",
   verses:["Isa 44:28–45:4","Ezra 1:1–4","Prov 21:1","1 Tim 2:1–2"]},
  assess:{
   evidence:"A claim-and-evidence sentence (‘Cyrus was fair because…’), the Path product (photographed) and observation of Council Fire discussion.",
   rubric:["Names Cyrus and one event with support.","Orders Cyrus’s main events and separates a legend from evidence with an example.","Explains why Cyrus was remembered as fair, using a named source and a perspective.","Weighs two or more perspectives, notes the Cylinder’s purpose and bias, and forms a reasoned judgement."]},
  nzConnection:"How have leaders in Aotearoa responded to peoples whose land they governed? If your class has already met Te Tiriti o Waitangi, link its promises to the idea of a leader keeping their word. Keep it age-appropriate and invite your Māori Education lead or local iwi/hapū to guide the conversation; avoid pan-Māori generalisations.",
  sensitivity:"Cyrus is a hero in Iranian memory and a figure in the Bible — treat his story with respect. Avoid presenting the Cylinder as a modern ‘human rights charter’ and avoid saying one source is simply ‘true’. Some students may be Iranian-NZ or from Muslim backgrounds; invite, never expect, personal contributions.",
  inquiry:["Could students separate a legend from evidence — and say why?","Did they notice that the Cylinder was written for Cyrus?","What do I need to revisit before Tuesday’s city work?"],
  widgets:[
   {type:"sort", title:"Legend, possible fact or fact?", prompt:"Sort each statement about Cyrus into the right bin. Think about who tells the story and whether anything else supports it.",
    bins:["Legend","Possible fact","Fact"],
    items:[
     {t:"A shepherd’s family secretly raised baby Cyrus after the king ordered him taken away.", bin:0},
     {t:"A king’s dream about his grandson made him afraid for his throne.", bin:0},
     {t:"Cyrus was an animal-lover who talked to his horse every morning.", bin:0},
     {t:"Cyrus’s army entered Babylon without a long siege or a great battle.", bin:1},
     {t:"Cyrus defeated Croesus of Lydia, probably about 546 BC.", bin:1},
     {t:"Cyrus was widely remembered as a fair and respectful ruler.", bin:1},
     {t:"Cyrus entered Babylon in 539 BC.", bin:2},
     {t:"The Cyrus Cylinder is made of clay and written in cuneiform.", bin:2},
     {t:"The Cyrus Cylinder is held in the British Museum in London.", bin:2}]},
   {type:"order", title:"Cyrus’s rise, in order", prompt:"Put these events in the order they happened.",
    items:["Cyrus becomes king of Anshan (about 559 BC)","The Medes join Cyrus; he rules the Medes and Persians (about 550 BC)","Cyrus defeats Croesus and captures Sardis (about 546 BC)","Cyrus enters Babylon (539 BC)","The Cylinder is written and later buried; it is found in 1879"]},
   {type:"match", title:"Words of the week", prompt:"Match each word to its meaning.",
    pairs:[["empire","Many lands and peoples ruled by one king"],["legend","A story told for a very long time that cannot be fully checked"],["evidence","Facts or objects that help show what is true"],["perspective","A point of view shaped by who you are"],["decree","An official order from a ruler"],["exile","A person forced to live away from home"]]},
   {type:"reveal", title:"Three sources, three voices", prompt:"Tap each card to see what that source says — and what it might leave out.",
    cards:[
     {front:"The Cyrus Cylinder (Babylonian clay)", back:"Cyrus says he restored temples and let peoples return home. But Cyrus’s own scribes wrote it, so it shows how he wanted to be seen."},
     {front:"Herodotus and Xenophon (Greek writers)", back:"They praise Cyrus’s skill and fairness, but they wrote later, in Greek, partly as stories. They are not neutral."},
     {front:"The Bible (Isaiah and Ezra)", back:"It says God named Cyrus and moved him to let the exiles return and rebuild the temple. It tells the story from the point of view of the people of Judah."},
     {front:"Babylonian records", back:"They suggest Babylon fell with little fighting and that some in the city welcomed Cyrus — but the records come from the winning side."}]}
  ]
 },

 /* ====================================================================== TUESDAY */
 tue:{
  id:"w2-tue", day:"tue", subject:"Geography — Cities & Capitals",
  title:"Pasargadae, Ecbatana & Babylon: Royal Cities and Gardens",
  tagline:"Why was the capital built right there?",
  nzc:["SS-PE","SS-ICO","MA-G"],
  kc:["Thinking","Using language, symbols & texts","Relating to others"],
  values:["Community & participation","Ecological sustainability","Inquiry & curiosity"],
  li:"We are learning to explain why capital cities were built where they were and what makes a city a capital.",
  sc:["I can describe three functions of a city (government, trade, worship).","I can explain the site of Pasargadae, Ecbatana or Babylon.","I can plan a capital city with zones."],
  vocab:[
   {w:"capital",d:"The city where a country or empire is governed from."},
   {w:"function",d:"What a place is used for (government, trade, worship…)."},
   {w:"site",d:"The exact spot where a city is built."},
   {w:"situation",d:"Where a city is in relation to other places (rivers, routes, neighbours)."},
   {w:"zone",d:"A part of a city used for one main purpose (e.g. markets, homes)."},
   {w:"canal",d:"A human-made waterway for moving water or boats."},
   {w:"paradise",d:"From an old Persian word for a walled garden."},
   {w:"palace",d:"A large home and workplace for a ruler."}],
  resources:["Blank NZ outline map and sticky pins","Maps of Fars, Hamadan and Babylon (app or printed)","Pasargadae garden plan (app or printed)","Capital-plan graph paper; coloured pencils","Venn diagram / comparison table sheet","Clay, card, string and sand for Path C garden model"],
  dispatch:{
   title:"Where Would YOU Put the Capital?",
   story:"Shirin spreads half a map on the table. ‘Our map is torn, Courier — but a king has to put his capital somewhere! Here is a blank land with a river, a plain, a mountain and a coast. Where would YOU put the capital? Pin your choice — and be ready to defend it.’ Behind her, Gandom stares at a pin. She has already eaten two.",
   easy:"If you were the king, where would you build your capital? Pin it on the map and say why.",
   teacher:[
    "Retrieval (2 min): Monday — what year did Cyrus enter Babylon? What is a legend? Name one source about Cyrus.",
    "Pin it (4 min): each caravan places one pin on a blank map of NZ and gives two reasons (central, port, safe from floods, near farms…).",
    "Reveal (2 min): Wellington — central, a good harbour, and Cook Strait between the islands. Compare: did any team’s reasons match?",
    "Share LI/SC; invite students to read them aloud."],
   retrieval:"Monday: 539 BC; legend vs evidence; one source for Cyrus."
  },
  discovery:{
   intro:"Capitals are chosen — and the choice tells a story. Visit three royal cities and one very special garden.",
   cards:[
    {title:"What makes a capital?", icon:"home", body:"A <b>capital</b> is the centre of government. Great cities often have three main <b>functions</b>: <b>government</b> (rulers and officials), <b>trade</b> (markets and workshops) and <b>worship</b> (temples and shrines). <b>Site</b> is the exact spot; <b>situation</b> is where it lies in relation to roads, rivers and neighbours."},
    {title:"Pasargadae: the tomb-city", icon:"star", body:"Cyrus built <b>Pasargadae</b> on a high plain in <b>Fars</b>, his homeland, at about 1,900 m above sea level. Its remains include palaces, a garden and the stone <b>tomb</b> that tradition links to Cyrus. It was a ceremonial and royal centre more than a busy trading city. Its royal spaces were open, with gardens and wide courtyards."},
    {title:"Ecbatana: the cool summer capital", icon:"ibex", body:"<b>Ecbatana</b> (today’s <b>Hamadan</b>) lies high on the slopes of <b>Mount Alvand</b>, in the Median heartland. Its cool air made it a pleasant summer capital, and it sat on the main route across the Zagros. Later Persian kings kept spending their summers there. Archaeologists have found only a little of the ancient city — the modern city sits on top of it."},
    {title:"Babylon: the river city", icon:"compass", body:"<b>Babylon</b> stood on the <b>Euphrates</b> river in a flat, fertile plain. Canals brought water to farms, and ships and caravans brought goods. The <b>Ishtar Gate</b>, with its blue glazed bricks, was built before Cyrus by <b>Nebuchadnezzar II</b>. Babylon was one of the biggest and busiest cities of its day."},
    {title:"The Persian garden — and a famous word", icon:"flame", body:"At Pasargadae a garden was laid out with straight <b>stone water channels</b> and pavilions. Later gardens often used a <b>four-part plan</b>, with water dividing the space into quarters — a lovely idea in a dry land. Our word <b>paradise</b> comes from an old Persian word for a <b>walled garden</b>. Historians still debate how the first gardens looked, so this is a clue, not a certainty."}],
   teacher:[
    "Functions (4 min): on the board, draw three columns: government / trade / worship. Place a few places in each (palace, market, temple). Ask: could one building have more than one function?",
    "Three cities (6 min): use the map. Compare the three cities by site (high plain / cool mountain slope / river plain) and situation (routes, neighbours). Why choose each?",
    "Garden (3 min): show the plan. Trace the water channels. Ask: why is water so special here? How does shade help in the heat?",
    "Link to NZ (2 min): compare Pasargadae with Wellington and Babylon with a river city such as Hamilton or Christchurch. Keep it factual."]
  },
  paths:[
   {id:"A", name:"Capital City Plan", icon:"home",
    brief:"Draw a bird’s-eye plan of your own capital city, divided into zones, with a key. Mark where the palace, markets, homes, gardens and defences go, and explain your choices.",
    checklist:["Bird’s-eye view with a title","At least 5 zones (palace, market, homes, gardens, defence)","A key with symbols or colours","Water source and route marked","I can explain two reasons for my site"],
    scaffold:"<b>Zones:</b> palace · market · homes · gardens · defence · temple. <br><b>Explain:</b> I put the ___ near ___ because ___. <br><b>Site:</b> My capital is on ___ because ___.",
    diff:{supported:"Use the zone outline with labelled boxes; place and colour the zones, then complete the explanation frames.",
          standard:"Draw and label independently with a key and two reasons.",
          extended:"Add a second plan of the same city 100 years later after it has grown, and explain what changed and why."}},
   {id:"B", name:"Compare Three Cities", icon:"compass",
    brief:"Compare Pasargadae, Babylon and a New Zealand city using a table and a Venn diagram. Explain which is the best site and why.",
    checklist:["Table covers site, situation, functions and water","Venn diagram shows what is the same and different","I used geography words (site, situation, function)","I gave a reasoned opinion","Facts are accurate"],
    scaffold:"<b>Table headings:</b> Name · Site · Situation · Water · Functions. <br><b>Venn:</b> Pasargadae only · Both · NZ city only. <br><b>Judgement:</b> I think ___ is the best site because ___.",
    diff:{supported:"Use a partly-filled table and a word bank; compare two cities rather than three.",
          standard:"Complete the table for three cities and one Venn.",
          extended:"Explain how site and situation changed what each city was used for; predict how each might have to adapt to a flood, drought or invasion."}},
   {id:"C", name:"Persian Garden Model", icon:"flame",
    brief:"Make a drawn or 3D model of a four-part Persian garden with water channels, trees and shade. Label the purpose of each part.",
    checklist:["Four-part garden plan","Water channels drawn or modelled","Trees and shade labelled","At least three labels with purposes (cooling, food, rest)","I can explain why gardens mattered in a dry land"],
    scaffold:"<b>Label bank:</b> water channel · pavilion · fruit tree · shade · path · pool. <br><b>Say it:</b> The water helps by ___. The shade helps by ___.",
    diff:{supported:"Use a pre-drawn square with a cross of channels; add and label four items.",
          standard:"Plan and build independently with labels explaining purpose.",
          extended:"Add a short plaque explaining how the word ‘paradise’ is linked to gardens, and compare to a garden in your own community."}}
  ],
  councilFire:{
   see:{refs:["Gen 2:8–15","Rev 22:1–2"],
        text:"In Genesis, God plants a garden in Eden, with a river flowing out of it to water the garden. In Revelation, John sees a river of life and a tree of life in the middle of the city, with leaves for the healing of the nations."},
   wonder:"Why do people love gardens and cities together? What does it say that the Bible begins in a garden and ends with a garden-city?",
   weigh:"Persians made walled ‘paradise’ gardens to bring shade and water to dry land; Eden is God’s garden. What do human gardens echo about what God first made? Where do they fall short?",
   respond:"Write ONE way you can help your school grounds feel more like a garden — for others, for animals, or for the soil.",
   teacher:"Be careful not to claim Persian gardens ‘prove’ Eden or that ‘paradise’ means the same thing everywhere. Say: ‘People across cultures have loved gardens — Christians see that as an echo of how God made us.’",
   verses:["Gen 2:8–15","Rev 22:1–2"]},
  assess:{
   evidence:"Use of function / site / situation vocabulary in Path products; reasoned site selection; photographs of plans and models.",
   rubric:["Names a city or function with support.","Describes the three functions and locates a capital on a map.","Explains why a capital was sited where it was, using water, routes and defence as evidence.","Compares two cities’ sites and justifies which is better, weighing trade-offs."]},
  nzConnection:"Why is Wellington our capital — harbour, centre of the country, Cook Strait? Compare with other possible capitals students suggested. Invite your Māori Education lead or local iwi/hapū to talk about places that mattered in your own rohe before European towns; avoid pan-Māori generalisations.",
  sensitivity:"Keep references to modern Iran, Iraq and the Middle East neutral — today’s cities and sites are living places. Ruins are the remains of real communities. Treat Babylon (modern Iraq) with the same respect as Persian sites.",
  inquiry:["Could students explain a site in terms of water, routes and defence?","Did they use the words site and situation correctly?","What do I need to revisit before Wednesday’s grassland work?"],
  widgets:[
   {type:"match", title:"Cities and their clues", prompt:"Match each place to its description.",
    pairs:[["Pasargadae","Cyrus’s royal centre on a high plain in Fars, with a garden and a tomb"],["Ecbatana","A cooler summer capital on the slopes of Mount Alvand (today’s Hamadan)"],["Babylon","A river city on the Euphrates, with canals and the Ishtar Gate"],["Sardis","Capital of Lydia, captured by Cyrus about 546 BC"],["Anshan","Cyrus’s home kingdom in the southern Zagros"]]},
   {type:"sort", title:"A capital’s three functions", prompt:"Is each of these mostly about government, trade or worship?",
    bins:["Government","Trade","Worship"],
    items:[
     {t:"A throne room where the king meets his officials", bin:0},
     {t:"Scribes writing decrees on clay tablets", bin:0},
     {t:"A market with spice and cloth sellers", bin:1},
     {t:"A harbour or river quay where boats are unloaded", bin:1},
     {t:"A caravan stop where merchants rest their camels", bin:1},
     {t:"A temple where people bring offerings", bin:2},
     {t:"A shrine with a priest and an altar", bin:2}]},
   {type:"reveal", title:"Site or situation?", prompt:"Tap each card to see whether it describes the SITE (exact spot) or the SITUATION (where it is in relation to others).",
    cards:[
     {front:"Babylon is built on flat land beside the Euphrates.", back:"SITE — the exact spot (flat, beside a river)."},
     {front:"Babylon sits where trade routes meet and near other great cities.", back:"SITUATION — its position in relation to routes and neighbours."},
     {front:"Ecbatana lies on the cool slopes of Mount Alvand.", back:"SITE — the land and spot where the city stands."},
     {front:"Ecbatana is on the route across the Zagros mountains.", back:"SITUATION — its connection to the wider region."}]}
  ]
 },

 /* ====================================================================== WEDNESDAY */
 wed:{
  id:"w2-wed", day:"wed", subject:"Science — Grassland Communities & Fair Tests",
  title:"Cyrus’s Camel Secret & the Grassland Community",
  tagline:"Why did the horses refuse to charge?",
  nzc:["SC-LW-Eco","SC-NoS-I","SC-NoS-C"],
  kc:["Thinking","Using language, symbols & texts","Managing self"],
  values:["Ecological sustainability","Inquiry & curiosity","Respect"],
  li:"We are learning to explain how grassland animals suit open habitats and to run a fair test.",
  sc:["I can name a producer, a consumer and a decomposer.","I can explain two adaptations (camouflage and speed).","I can keep one variable the same in a fair test."],
  vocab:[
   {w:"producer",d:"A living thing (like grass) that makes its own food from sunlight."},
   {w:"consumer",d:"A living thing that eats other living things."},
   {w:"decomposer",d:"A living thing (like a fungus) that breaks down dead plants and animals."},
   {w:"predator",d:"An animal that hunts and eats other animals."},
   {w:"prey",d:"An animal that is hunted and eaten."},
   {w:"camouflage",d:"Colours or patterns that help an animal blend in."},
   {w:"variable",d:"Something that can change in an experiment."},
   {w:"fair test",d:"An experiment where only one thing is changed, one thing is measured and everything else stays the same."}],
  resources:["Sniff-test mystery bags (safe smells in closed pots)","Grassland photos and animal cards (app)","Coloured paper ‘moths’ (several colours, same size)","Green mat or grass patch; timer; clipboards","Food-chain mobile materials (card, string, coat hangers)","Card-game template for Path C; graph paper"],
  dispatch:{
   title:"Cyrus’s Camel Trick",
   story:"The map is torn but the story is old: before the siege of Sardis, the Lydian cavalry thundered out to meet Cyrus’s army. Cyrus had a clever plan. ‘He put his camels at the front,’ says Shirin, ‘and the Lydian horses took one sniff and wanted nothing to do with them!’ Gandom raises her head, offended. ‘What does that tell us about animal senses, Courier?’",
   easy:"Cyrus put camels at the front of his army — and the horses were scared! Why? Try our smell-test bags.",
   teacher:[
    "Retrieval (2 min): Tuesday — name the three functions of a city; what is the difference between site and situation?",
    "Tell Herodotus’s story (3 min): this is a story from a Greek writer, so we treat it as a ‘possible fact’ — historians think horses really can be unsettled by the smell and sight of camels.",
    "Sniff-test mystery bags (4 min): pass closed pots with safe smells; groups guess without peeking. Discuss: what senses do animals use? Which senses are strongest for horses (smell, hearing)?",
    "Share LI/SC; students tick the vocabulary as it appears."],
   retrieval:"Tuesday: three functions of a city; site vs situation."
  },
  discovery:{
   intro:"Welcome to the open steppe — wide skies, long grass, sharp eyes and fast legs.",
   cards:[
    {title:"A community on the plains", icon:"paw", body:"Wide, grassy plains cover parts of Iran. <b>Grasses</b> are the <b>producers</b> — they make food from sunlight. <b>Insects</b>, the <b>Persian onager</b> and the <b>goitered gazelle</b> eat the plants and are <b>consumers</b>. <b>Predators</b> such as the <b>Asiatic cheetah</b> hunt them. <b>Vultures</b> clean up dead animals, and <b>fungi</b> and bacteria are <b>decomposers</b> that return nutrients to the soil."},
    {title:"The three big animals", icon:"ibex", body:"<b>Persian onager (a wild ass):</b> long legs, big ears and fast, steady running; endangered. <b>Goitered gazelle:</b> sandy-coloured coat for camouflage and speed; males have a swollen throat in the breeding season. <b>Asiatic cheetah:</b> the fastest land animal, built for short, super-fast chases; critically endangered, with only a very small number left in Iran."},
    {title:"Two adaptations: hide or run", icon:"compass", body:"On open ground there is nowhere to hide — so animals either <b>blend in</b> (camouflage: sandy fur, spots) or <b>run</b> (long legs, strong lungs, big eyes and ears). Both help predators catch food or help prey escape."},
    {title:"What is a fair test?", icon:"gear", body:"A scientist <b>changes one thing</b> (the variable), <b>measures one thing</b> and <b>keeps everything else the same</b>. If we change colour AND background AND time, we can’t tell which one made the difference."},
    {title:"Animal Cards: this week’s three", icon:"star", body:"Collect this week’s <b>Animal Cards</b>: the <b>onager</b>, the <b>goitered gazelle</b> and the <b>Asiatic cheetah</b>. Tilt them to see the holo shine, and read how each is suited to the open plains."}],
   teacher:[
    "Community (5 min): build a food chain on the board: grass → onager → cheetah → vultures and decomposers. Label producer / consumer / decomposer.",
    "Adaptations (3 min): quick-fire pairs: ‘long legs for?’, ‘sandy colour for?’, ‘big ears for?’ Link to last week’s adaptation words.",
    "Fair test (5 min): model with a paper ‘moth’ example. Ask: What do we change? What do we measure? What stays the same? Use mini-whiteboards.",
    "Animal Cards (2 min): hand out. Remind students to treat the endangered cards as a reason to care, not as a game."]
  },
  paths:[
   {id:"A", name:"Camouflage Fair Test", icon:"compass",
    brief:"Scatter coloured paper ‘moths’ on grass or a green mat. Classmates act as ‘predators’ and collect for 20 seconds. Record, graph and explain which colours survived best.",
    checklist:["I wrote a question and a prediction","I changed ONE thing (colour) and kept everything else the same","I recorded results in a table","I drew a bar graph","I explained the result using the word camouflage"],
    scaffold:"<b>Question:</b> Which colour of moth is hardest to find on grass? <br><b>Change:</b> colour. <b>Measure:</b> number found in 20 seconds. <b>Same:</b> size, number of each colour, time, background. <br><b>Conclusion:</b> The ___ moths were found least because ___.",
    diff:{supported:"Use the table template and sentence frames; test just three colours.",
          standard:"Plan the test independently, record in a table and graph the results.",
          extended:"Repeat on a second background (e.g. brown paper) and explain why the best colour changed."}},
   {id:"B", name:"Grassland Food-Chain Mobile", icon:"paw",
    brief:"Make a hanging mobile of two grassland food chains (e.g. grass → onager → cheetah) and label each link as producer, consumer or decomposer.",
    checklist:["Two food chains of at least 3 links","Arrows show who eats whom","Every living thing is labelled (producer / consumer / decomposer)","A decomposer is included","I can explain what would change if one link disappeared"],
    scaffold:"<b>Chain:</b> grass → ___ → ___. <br><b>Labels:</b> producer · consumer · decomposer. <br><b>Say it:</b> If the ___ disappeared, then ___.",
    diff:{supported:"Use ready-cut animal cards and a chain strip; add arrows and labels.",
          standard:"Draw and label two chains independently.",
          extended:"Link both chains into a small food web and predict three changes if one species vanished."}},
   {id:"C", name:"Predator–Prey Card Game", icon:"trophy",
    brief:"Design a card game with 8 grassland creatures. Give each strengths (speed, camouflage, senses) and write a rule set for a fair game.",
    checklist:["8 cards, each with a name and a picture","Each card has two realistic adaptations","A clear rule for who ‘wins’ when two cards meet","The rules are fair and easy to follow","I tested the game with a partner"],
    scaffold:"<b>Card:</b> Name · Habitat · Speed (1–5) · Camouflage (1–5) · Special sense. <br><b>Rule:</b> When a predator meets prey, compare ___ to decide. <br><b>Test:</b> What did we change after playing?",
    diff:{supported:"Use blank card templates with the stat boxes; use only 6 cards.",
          standard:"Create 8 cards and a written rule set; test once.",
          extended:"Balance the game using data: swap a rule after testing and explain how you kept the test fair."}}
  ],
  councilFire:{
   see:{refs:["Job 39:5–8","Matt 6:26"],
        text:"In Job, God asks who set the wild donkey free, whose home is the open steppe and who laughs at the noise of the city. In Matthew, Jesus says to look at the birds: they do not plant or harvest, yet the heavenly Father feeds them — and you are worth much more to Him."},
   wonder:"Why does God care for animals that people cannot use or tame? What does that say about how He sees the wild world?",
   weigh:"Adaptations like speed and camouflage help animals survive. How can careful science help us notice God’s care? What is the difference between ‘how it works’ and ‘who looks after it’?",
   respond:"Choose ONE wild creature (a bird, an insect, a skink) to observe respectfully this week. Write what you noticed and say thank you.",
   teacher:"Job 39 is poetry in a speech from God, not a field guide. Enjoy it as praise. Avoid saying that science ‘proves design’; instead ask: ‘What does this make us wonder?’ Christians have different views on how the details fit together, but the passage affirms that God cares for the wild.",
   verses:["Job 39:5–8","Matt 6:26"]},
  assess:{
   evidence:"Fair-test plan (what changed / measured / kept the same); correct use of producer, consumer, decomposer; the graph and conclusion.",
   rubric:["Names an animal or a food-chain link with support.","Labels producers, consumers and decomposers and names an adaptation.","Plans and carries out a fair test with one variable and explains the result using camouflage or speed.","Evaluates the test, suggests improvements, and predicts how a change would affect a grassland community."]},
  nzConnection:"NZ tussock grasslands are home to skinks, kea and kārearea (NZ falcon). Compare: which of our animals use camouflage, and which use speed? Link to kaitiakitanga. Invite your Māori Education lead or local iwi/hapū for local knowledge about native species; avoid pan-Māori generalisations.",
  sensitivity:"The Asiatic cheetah and Persian onager are rare and endangered — present this as a reason to care, not to panic. Keep the predator–prey talk matter-of-fact. Take care that ‘predator’ games do not become rough: no touching, no chasing, and keep everyone safe.",
  inquiry:["Could students name the variable they changed — and the ones they kept the same?","Which students used ‘camouflage’ accurately in their conclusion?","What do I need to revisit before Thursday’s art lesson?"],
  widgets:[
   "animalCards",
   {type:"sort", title:"Producer, consumer or decomposer?", prompt:"Sort each living thing of the steppe into the right role in the food chain.",
    bins:["Producer","Consumer","Decomposer"],
    items:[
     {t:"Feather grass on the plain", bin:0},
     {t:"Wildflowers that make food from sunlight", bin:0},
     {t:"Persian onager grazing", bin:1},
     {t:"Goitered gazelle", bin:1},
     {t:"Asiatic cheetah", bin:1},
     {t:"Vulture feeding on a dead animal", bin:1},
     {t:"Fungus breaking down fallen leaves and dung", bin:2},
     {t:"Bacteria in the soil", bin:2}]},
   {type:"match", title:"Adaptations at work", prompt:"Match each adaptation to the job it does.",
    pairs:[["Sandy-coloured coat","Helps an animal blend in on open ground"],["Long, strong legs","Fast running to escape (or to catch prey)"],["Big ears","Hear danger or prey from far away"],["Eyes on the sides of the head","See a wide area to spot predators"],["Light, slim body","Quick bursts of speed with less weight"]]},
   {type:"order", title:"Plan a fair test", prompt:"Put the steps of a fair test in the right order.",
    items:["Ask a question you can test (Which colour moth is hardest to find?)","Choose ONE thing to change (colour)","Decide what to measure (how many are found in 20 seconds)","Keep everything else the same (size, number, time, background)","Run the test and record the results in a table","Graph the results and explain what they show"]}
  ]
 },

 /* ====================================================================== THURSDAY */
 thu:{
  id:"w2-thu", day:"thu", subject:"Art — Writing in Clay",
  title:"Writing in Clay: Cuneiform and Cylinder Seals",
  tagline:"Press, roll, repeat — and make a promise in clay.",
  nzc:["VA-UC","VA-PK","VA-CI","EN-W"],
  kc:["Thinking","Managing self","Participating & contributing"],
  values:["Excellence","Innovation, inquiry & curiosity","Integrity"],
  li:"We are learning to use impressed and relief techniques to make writing-art in clay.",
  sc:["I can make a clay tablet with wedge marks.","I can roll a seal to make a repeated print.","I can explain what clay writing was used for."],
  vocab:[
   {w:"cuneiform",d:"Wedge-shaped writing pressed into wet clay with a reed."},
   {w:"tablet",d:"A flat piece of clay used for writing."},
   {w:"stylus",d:"A pointed tool (a reed in ancient times) used to press marks into clay."},
   {w:"cylinder seal",d:"A small stone cylinder carved with a design, rolled over wet clay to leave a print."},
   {w:"impress",d:"To press a shape into a soft surface."},
   {w:"relief",d:"A design that is raised up from a surface."},
   {w:"scribe",d:"A person trained to write official documents."},
   {w:"calligraphy",d:"Beautiful, careful handwriting."}],
  resources:["Air-dry clay or plasticine; rolling pins; boards","Wooden skewers, pencils or reeds for wedge marks","Cuneiform name-code strips","Soap, foam, clay or dowel rollers for seals","Paper and ink pads or paint for prints","Calligraphy pens and parchment paper; border templates","Image of the Cyrus Cylinder and a cylinder seal"],
  dispatch:{
   title:"Wedge-Name Code",
   story:"Shirin hands each caravan a smooth clay tablet and a wooden wedge. ‘This is how the clerks of Babylon wrote — and how Cyrus’s decrees were written. A king’s word, pressed into clay! Can you write your name in wedges? And look — the thumbprint on our torn map had a wedge mark. Someone who writes in clay is leaving us clues.’",
   easy:"Press wedge marks into clay and write your name-code! Someone left a wedge on our map.",
   teacher:[
    "Retrieval (2 min): Wednesday — name a producer, a consumer and a decomposer; what makes a test fair?",
    "Hold (replica) tablets or look at photos. Ask: What is it made of? How was it made? Why clay?",
    "Name-code (5 min): use the printed strip; students press their initials in wedge marks. Keep clay damp; wash hands.",
    "Show the Cyrus Cylinder image again: its writing is cuneiform. Share LI/SC."],
   retrieval:"Wednesday: producer / consumer / decomposer; fair test = change one thing."
  },
  discovery:{
   intro:"Clay was the paper of the ancient world — cheap, strong and everywhere. And seals were the world’s first signatures.",
   cards:[
    {title:"Clay: the paper of the ancient world", icon:"scroll", body:"People in Mesopotamia and Persia wrote on <b>clay tablets</b>. Clay was easy to find, cheap, and — once dried or baked — lasted for thousands of years. That is why we still have so many tablets today, while writing on cloth or leather has mostly rotted away."},
    {title:"Cuneiform: wedge writing", icon:"gear", body:"<b>Cuneiform</b> means ‘wedge-shaped’. A scribe pressed the end of a cut reed into wet clay to make wedge marks. Different groups of wedges stood for words or sounds. Cuneiform was used for languages like Babylonian, Elamite and Old Persian, and was used for about 3,000 years."},
    {title:"Cylinder seals: signatures in stone", icon:"star", body:"A <b>cylinder seal</b> is a small stone tube carved with a design. Rolled over wet clay, it leaves a repeating print — a mark of <b>identity or ownership</b>, like a signature. Seals were used to close jars, doors and letters so people knew who had sent them."},
    {title:"Art techniques: press, smooth, score, roll", icon:"compass", body:"<b>Press</b> a shape into clay (impress); <b>smooth</b> to remove cracks; <b>score</b> (scratch) to join pieces; <b>roll</b> a seal for a repeat pattern. Raised designs are called <b>relief</b>, and pressed-in designs are <b>incised</b> or <b>impressed</b>."},
    {title:"The Cylinder: a decree to be remembered", icon:"book", body:"The <b>Cyrus Cylinder</b> was shaped like a barrel and covered in cuneiform. Rulers sometimes buried barrels like this in the walls of buildings they had repaired, so future builders would find their name. It tells us what Cyrus wanted people to remember. Calligraphy is another way to make words beautiful."}],
   teacher:[
    "Clay & cuneiform (5 min): demonstrate making a flat tablet, smoothing the edges and pressing wedge marks at an angle. Show how marks are made with the corner of a flat stick.",
    "Seals (4 min): show how a design cut into soap or foam leaves a raised print. Roll slowly for an even pattern. Practise on scrap first.",
    "Calligraphy (3 min): hold the pen at a steady angle; keep strokes even; plan the border before the words.",
    "Model the first step of each Path (3 min); students choose A, B or C. Remind them about careful work and clean-up."]
  },
  paths:[
   {id:"A", name:"Clay Tablet: A Decree of Kindness", icon:"scroll",
    brief:"Make a clay tablet with your name and a short royal ‘decree of kindness’ in cuneiform-style marks. Add a key on paper showing what your marks mean.",
    checklist:["Smooth, flat tablet","Wedge marks clear and evenly spaced","My name appears on the tablet","A decree of kindness is shown (in marks or in the key)","I wrote a key and one sentence about why people wrote on clay"],
    scaffold:"<b>Steps:</b> 1 Roll clay about 1 cm thick. 2 Cut a rectangle. 3 Smooth edges. 4 Press wedges in rows. 5 Let it dry. <br><b>Decree idea:</b> ‘In this caravan, everyone shall be welcomed.’ <br><b>Say it:</b> People wrote on clay because ___.",
    diff:{supported:"Use the name-code strip and pre-cut clay; press three words only.",
          standard:"Write your name and decree with a key and a sentence.",
          extended:"Add a seal print to your tablet and explain how scribes made documents hard to forge."}},
   {id:"B", name:"Cylinder Seal Prints", icon:"star",
    brief:"Carve a design into clay or foam, wrap it around a roller (or roll the clay) and print a repeating sequence on paper. Create a pattern that tells something about you or your caravan.",
    checklist:["A clear, simple design","Design carved or pressed deeply enough to print","Printed at least 5 times in a row","Even spacing and pressure","I can explain what my seal shows and why people used seals"],
    scaffold:"<b>Steps:</b> 1 Sketch a simple design (animal, plant, pattern). 2 Carve or press into soap/clay/foam. 3 Roll in thin paint. 4 Print along the paper. <br><b>Statement:</b> My seal shows ___ because ___.",
    diff:{supported:"Use a ready-made foam strip and simple template; print three times.",
          standard:"Design your own seal and print five repeats.",
          extended:"Make a sequence that tells a story from left to right and explain how the repeats create rhythm."}},
   {id:"C", name:"Illuminated Decree Scroll", icon:"horn",
    brief:"Use calligraphy and a decorative border to write a kind law for your caravan (e.g. ‘Every voice is heard’). Make it look like a royal scroll.",
    checklist:["Border planned and neat","A short, kind law written in clear lettering","Spacing and slope are even","A decorative symbol or seal at the bottom","I can explain why leaders write decrees down"],
    scaffold:"<b>Law frame:</b> In our caravan, we promise to ___. <br><b>Border idea:</b> rosettes or lotus from Week 1. <br><b>Say it:</b> Writing a law down helps because ___.",
    diff:{supported:"Use a lined guide sheet and trace the first letter; short law of eight words.",
          standard:"Write your own law with a border and a seal mark.",
          extended:"Write two linked laws and explain how they would be fair for people who disagree."}}
  ],
  councilFire:{
   see:{refs:["Hab 2:2","Ezra 1:1–4"],
        text:"In Habakkuk, God tells the prophet to write the vision down and make it plain on tablets so that a runner can read it. In Ezra, the decree of Cyrus is written and sent through the whole kingdom."},
   wonder:"Why does God use words that are written down? Why do written promises matter?",
   weigh:"The Cylinder and Ezra both record a decree. What does a written promise do that a spoken one might not? How do we keep a promise even when no one can see?",
   respond:"Write ONE promise you can keep this term — to a friend, to your family or to God — and sign it with your seal mark.",
   teacher:"Habakkuk 2:2 is about a message made clear; do not claim that it means clay tablets specifically. Keep the focus on the value of clear, written words. Remember that decrees can be used well or badly — it is the character of the person who keeps them that matters.",
   verses:["Hab 2:2","Ezra 1:1–4"]},
  assess:{
   evidence:"Craftsmanship and technique (even wedges, clean seal print, neat calligraphy); explanation of purpose in the artist’s statement.",
   rubric:["Makes wedge marks or a seal print with support.","Makes a tablet or seal with clear marks and explains one use of clay writing.","Controls impressing, rolling or calligraphy with care and explains why seals and tablets mattered.","Combines techniques with intent, compares writing in clay with other forms of record, and evaluates which is best for lasting messages."]},
  nzConnection:"How are promises and agreements recorded in Aotearoa — signatures, carving, whakapapa, documents like Te Tiriti? Invite your Māori Education lead or local iwi/hapū to guide this; do not copy sacred or tapu designs, and avoid pan-Māori generalisations.",
  sensitivity:"Treat Mesopotamian and Persian writing as the achievement of real, skilled cultures. Use clay and tools safely — wooden skewers are pointed, so supervise carefully. Do not use any sacred scripts or religious texts as ‘decoration’.",
  inquiry:["Were wedge marks and seal prints even and controlled?","Which students could explain why clay was used?","What do I need to revisit before Friday’s Showdown?"],
  widgets:[
   {type:"match", title:"Clay-writing words", prompt:"Match each word to its meaning.",
    pairs:[["cuneiform","Wedge-shaped writing pressed into clay"],["stylus","A pointed tool for pressing marks"],["cylinder seal","A small stone roller carved to leave a repeating print"],["scribe","A trained writer of official documents"],["relief","A design that is raised up from the surface"],["calligraphy","Beautiful, careful handwriting"]]},
   {type:"order", title:"Making a clay tablet", prompt:"Put the steps in the right order.",
    items:["Roll the clay to an even thickness","Cut a neat rectangle and smooth the edges","Press wedge marks in straight rows","Add a seal print if you have one","Leave it to dry slowly, away from heat"]},
   {type:"reveal", title:"What was clay writing used for?", prompt:"Tap each card to find out how people used clay and seals.",
    cards:[
     {front:"Letters and orders", back:"Officials and kings sent messages on tablets. A seal showed who sent them."},
     {front:"Records and receipts", back:"Scribes noted grain, animals and goods, like an ancient shop receipt."},
     {front:"Royal inscriptions", back:"Kings had their deeds written on clay barrels, like the Cyrus Cylinder, to be remembered."},
     {front:"Seals", back:"A rolled seal marked ownership on jars, doors and bundles, like a signature."}]}
  ]
 },

 /* ====================================================================== FRIDAY */
 fri:{
  id:"w2-fri", day:"fri", subject:"Showdown",
  title:"SHOWDOWN: Camel Charge",
  tagline:"Charge fast. Think faster. Win back the torn map.",
  mode:"classic", fateEnabled:true, timeLimit:20,
  nzc:["SS-CC","SS-PE","SC-LW-Eco","VA-UC","RE"],
  kc:["Thinking","Managing self","Relating to others","Participating & contributing"],
  values:["Integrity","Community & participation","Excellence"],
  li:"We are learning to recall and apply our week’s learning about Cyrus, royal cities, grasslands and clay writing, and to work as a team.",
  sc:["I can answer questions about Cyrus, the royal cities, grassland animals and cuneiform.","I can work with my Caravan with integrity.","I can explain my thinking when I get something wrong."],
  creedPrompt:"Before the quiz, look at your Caravan Creed from Week 1 and add ONE promise about being fair — to rivals, to teammates, and to people who are different from you.",
  creedStarters:["We will treat others fairly even when…","Our Caravan promises to be kind to…","We will keep our word, especially when…","We will not blame…"],
  dispatch:{
   title:"The Camel Charge",
   story:"The camels are lined up at the starting gate, snorting. ‘This is the Camel Charge, Courier,’ says Shirin. ‘Speed matters — but so does honesty. Each right answer wins back a piece of the torn map. Add a promise to your Creed, then charge!’ Gandom steps forward. She has not been asked, but she is ready.",
   easy:"Today is the Camel Charge! Add a promise to your Creed, then race in the quiz.",
   teacher:["Before the lobby opens, each caravan reads its Week 1 Creed, then adds a new line about fairness and reads it aloud.","Remind teams: speed bonus is for accurate answers; careless clicking loses points.","Display the updated Creeds on the wall for the term."],
   retrieval:"The quiz is the retrieval."
  },
  questions:[
   {q:"Who entered Babylon in 539 BC?", options:["Darius III","Cyrus the Great","Xerxes","Alexander"], answer:1, boss:false, tag:"SS-CC", explain:"Cyrus II of Persia entered Babylon in 539 BC, according to Babylonian records, with little fighting."},
   {q:"Herodotus was a Greek writer who wrote about Persia. What should we remember when we read him?", options:["He was perfectly neutral","He wrote from a Greek point of view, so we should check other sources","He was Persian","He lived during Cyrus’s reign"], answer:1, boss:false, tag:"SS-DO", explain:"Herodotus is useful but not neutral — a good historian compares him with other sources, as we learned in Week 1."},
   {q:"Cyrus’s first great royal city, with a garden and a tomb, was…", options:["Rome","Athens","Pasargadae","Memphis"], answer:2, boss:false, tag:"SS-PE", explain:"Pasargadae, on the plain of Fars, was Cyrus’s royal centre — with palaces, a garden and the tomb linked to him."},
   {q:"From Week 1: Ecbatana was the capital of which people?", options:["The Elamites","The Medes","The Romans","The Greeks"], answer:1, boss:false, tag:"SS-CC", explain:"Ecbatana (modern Hamadan) was the Median capital, and later a cool summer capital of the Persian kings."},
   {q:"In Herodotus’s story, which animals did Cyrus put at the front of his army against the Lydian horses?", options:["Elephants","Camels","Lions","Eagles"], answer:1, boss:false, tag:"SC-LW-Eco", explain:"Herodotus says the Lydian horses were frightened by the smell and sight of camels. It is a Greek story, but it shows how animals’ senses matter."},
   {q:"In a food chain, grass is a…", options:["producer","consumer","decomposer","predator"], answer:0, boss:false, tag:"SC-LW-Eco", explain:"Grass makes its own food from sunlight, so it is a producer. Onagers and gazelles are consumers; fungi are decomposers."},
   {q:"Cuneiform writing is made of…", options:["letters like ours","pictures only","wedge-shaped marks","knots"], answer:2, boss:false, tag:"VA-UC", explain:"Cuneiform means ‘wedge-shaped’ — scribes pressed a reed into wet clay to make wedge marks."},
   {q:"The word ‘paradise’ comes from an old Persian word meaning…", options:["palace","walled garden","mountain","camel"], answer:1, boss:false, tag:"SS-PE", explain:"‘Paradise’ comes from an old Iranian word for a walled garden, like the gardens of Pasargadae."},
   {q:"In Ezra 1, Cyrus announced that the exiles could…", options:["return to Jerusalem and rebuild the temple","stay in Babylon forever","become kings","hide in the desert"], answer:0, boss:false, tag:"RE", teach:true, explain:"Ezra 1 says Cyrus announced the exiles could return to Jerusalem and rebuild the temple. The Cylinder does not mention this — but it shows a similar policy of returning peoples."},
   {q:"BOSS ×2 — The Cyrus Cylinder was written for Cyrus. Which is the best way to use it as a source?", options:["Trust everything it says because it is old","Ignore it because it is biased","Use it as real evidence of how Cyrus wanted to be seen, and compare it with other sources","Call it a modern charter of human rights"], answer:2, boss:true, tag:"SS-DO", teach:true, explain:"The Cylinder is a genuine ancient source that shows Cyrus’s policy and image. Because it was written by his own side, a good historian also looks at other sources, such as Babylonian records, Greek writers and the Bible."},
   {q:"In a fair test you should change…", options:["everything","one thing at a time","nothing","three things"], answer:1, boss:false, tag:"SC-NoS-I", explain:"A fair test changes ONE variable, measures one thing and keeps everything else the same."},
   {q:"BOSS ×2 — Isaiah 44–45 tells us that God…", options:["was surprised by Cyrus","named Cyrus long before he ruled and used him, even though Cyrus did not know Him","was not interested in foreign kings","lived only in Babylon"], answer:1, boss:true, tag:"RE", teach:true, explain:"Isaiah says God named Cyrus ahead of time and would open doors for him, showing that God is Lord over all nations and rulers."}
  ],
  paths:[
   {id:"A", name:"Caravan Log", icon:"book",
    brief:"Reflect on your week: what you now know, what is still a mystery, and your Faith Thought.",
    checklist:["I wrote 3 things I now know","I wrote 1 thing that is still a mystery","I wrote a Faith Thought (what I learned about God or people)","I rated my own effort honestly"],
    scaffold:"<b>I now know…</b> <br><b>It is still a mystery…</b> <br><b>My Faith Thought:</b> This week I saw that God…",
    diff:{supported:"Use sentence starters and draw a picture instead of writing one of the answers.",
          standard:"Write all three sections in full sentences.",
          extended:"Connect two subjects (e.g. history and science) in one paragraph."}},
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
   see:{refs:["Isa 45:1–4","Job 39:5–8","Hab 2:2"],text:"This week we met a God who names a foreign king and opens doors, who sets the wild donkey free on the open plains, and who asks for His words to be written down plainly."},
   wonder:"What was the most wonderful thing you learned this week about leaders, animals or words?",
   weigh:"Which source or question made you think hardest — and how did you decide what to trust?",
   respond:"Say your Caravan Creed together, including your new promise about fairness. Pray for the leaders you named on Monday.",
   teacher:"Keep this short and joyful; celebrate effort, not only winning. Be gentle with students who find public rankings stressful.",
   verses:["Isa 45:1–4","Job 39:5–8","Hab 2:2"]},
  assess:{
   evidence:"Showdown data per concept tag (exportable); Victory Lap product; updated Caravan Creed.",
   rubric:["Answers some questions with support.","Answers most questions accurately.","Explains why wrong answers were wrong and applies the idea to a new situation.","Writes strong questions with clear decoys and explanations that show reasoning about sources."]},
  nzConnection:"Link back to this week’s NZ connections: leaders keeping their word (Te Tiriti), Wellington as capital, tussock grassland animals, and ways of recording promises.",
  sensitivity:"Winning is not the point of the Showdown — keep celebrating effort. Some students may feel anxious about public rankings; offer the ‘anonymise names’ option. Take care when discussing Cyrus and the Bible so no student feels their own faith or background is being judged.",
  inquiry:["What did the Showdown data show? Which tags had the lowest success?","Which misconception (e.g. calling the Cylinder a ‘human rights charter’) needs re-teaching?","What will I change next week?"],
  widgets:[],
  teachingMoments:[8,9,11]
 }
 }
};
})();
