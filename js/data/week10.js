/* ===================================================================
   STAGE 10 — THE GATE OF ALL NATIONS  (Week 10 · full lesson data)
   Legacy, Iran today, wild Persia, and the Great Exhibition.
   Same schema as week01.js. NZ English spelling. Scripture is
   paraphrased — read from your own Bible translation in class.
   =================================================================== */
(function(){
const RR=window.RR; RR.WEEKS=RR.WEEKS||{};

/* shared Friday Victory-Lap paths (same shape as earlier weeks) */
const FRI_PATHS=[
 {id:"A", name:"Caravan Log: The Whole Journey", icon:"book",
  brief:"Look back over all ten stages. Write about the road you have travelled: what you now know, what is still a mystery, and your Faith Thought for the whole unit.",
  checklist:["I named 3 things I know now that I did not know in Week 1","I named 1 thing that is still a mystery","I wrote a Faith Thought about God and the nations","I named one moment I am proud of as a Courier","I rated my own effort honestly"],
  scaffold:"<b>In Week 1 I thought…</b> <br><b>Now I know…</b> <br><b>It is still a mystery…</b> <br><b>My Faith Thought:</b> This unit I saw that God…",
  diff:{supported:"Use the sentence starters and draw one of your answers. Choose your favourite stage and write three sentences about it.",
        standard:"Write all four sections in full sentences, with at least one example from each of three different stages.",
        extended:"Connect two stages that seem far apart (for example Cyrus and Nehemiah, or the Royal Road and the Silk Road) in one paragraph that explains what links them."}},
 {id:"B", name:"Question-Maker: The Hall of Fame", icon:"scroll",
  brief:"Write 2 quiz questions with wrong-answer decoys that could go into a ‘Persia Hall of Fame’ quiz for next year’s class.",
  checklist:["Each question is clear and about a different week","I wrote one correct answer and three believable decoys","I wrote a one-line explanation","I checked the answer against our notes","One of my questions needs thinking, not only remembering"],
  scaffold:"<b>Question:</b> … <br><b>A)</b> … <b>B)</b> … <b>C)</b> … <b>D)</b> … <br><b>Correct:</b> … <br><b>Because:</b> …",
  diff:{supported:"Use the question frame and write one question with a partner.",
        standard:"Write two complete questions with explanations from two different weeks.",
        extended:"Write a Boss question that asks next year’s class to compare two stages, and write the explanation a teacher could read aloud."}},
 {id:"C", name:"Teach-Back Comic/Poster: The Big Story", icon:"star",
  brief:"Tell the story of the Royal Road Race to a younger child in a comic or poster: the Seal, the nations, the Gate.",
  checklist:["I picked ONE big idea from the unit","I used simple words a younger child would understand","I used at least 3 pictures","My comic or poster is neat and clear","I included a ‘quiz the reader’ question"],
  scaffold:"<b>Big idea:</b> … <br><b>Three steps to explain it:</b> 1 … 2 … 3 … <br><b>Check:</b> Could a Year 2 understand this?",
  diff:{supported:"Use a 4-panel comic template with captions to fill in.",
        standard:"Create your own comic or poster with a title and at least three pictures.",
        extended:"Add a ‘Did you know?’ box that shows where scholars disagree or where we cannot be sure."}}
];

RR.WEEKS[10] = {
 n:10,
 title:"The Gate of All Nations",
 era:"legacy & today",
 place:"The Gate at Persepolis",
 fragment:"The Fragment of Wisdom",
 story:{
  briefing:"All nine fragments gleam. But the last piece waits at the Gate, and the Shadow Courier stands before it. Do we trust him?",
  briefingFull:"Courier! It is Shirin — and this is the last time I will write to you from the road. Nine fragments of the Seal gleam in your caravan’s pack. The tenth, the Fragment of Wisdom, waits at the great Gate of All Nations, where long ago envoys from many lands passed beneath carved stone bulls to bring their gifts. And at the Gate, with his hood pushed back, stands the one we have chased since the Plateau: Zal, the Shadow Courier. He asks to walk with us. Do we trust him? Before you decide, look back along the road and ask the biggest question of all: what did Persia leave to the world, what lives in those lands today, and what will you leave behind? This week you will build a museum, learn the cities of modern Iran, design a sanctuary for wild creatures and open the Great Exhibition. Then, on Friday, the Gate.",
  shadowCourier:"Zal, with his hood down, stands before the carved bulls of the Gate.",
  shadowClue:"At the Gate, in the shade of the great carved bulls, a lone rider waits. No mask now. He holds out a battered satchel and says only: ‘I did not come to take the last piece. I came to hand back what I took. Will you hear me out?’ Everyone looks at your Caravan.",
  event:"Gate of All Nations — the Grand Finale: a whole-unit Showdown, a Forgiveness Vote, the last fragment and the Seal made whole.",
  fridayReveal:"The vote is cast, and the Caravans choose to forgive Zal. He steps aside and the great Gate swings open. Beyond it, on a plain stone shelf, rests the Fragment of Wisdom. One by one the fragments leap from your packs and slot together, and the Seal of the Kings is whole again. Light spills across its face, and along the rim words appear that every Courier can read: the search for wisdom is like searching for silver and hidden treasure, and the one who searches will find the knowledge of God. Shirin smiles. ‘The road was never only about the Seal,’ she says. ‘It was about who you became on the way.’"
 },
 materials:["Museum labels (card, lanyards, small stands) for the ‘Persia Gives’ exhibits","Mystery Bag items: pistachios, saffron (a few threads in a small jar), a chess piece, a tulip bulb, a pair of pyjamas or a pyjama label, a spinach leaf or packet, a jasmine or lilac photo","Large map of Iran with sticky dots, and ancient-to-modern matching cards","City data cards (teacher-prepared and checked against a current source) for Iranian and NZ cities; graph paper or a spreadsheet","Photos of the Gate of All Nations bulls, windcatchers at Yazd and the Persian garden at Pasargadae","Big paper, coloured pencils and a map outline for the reserve blueprints; species cards for the Field Guide","Gallery supplies: display tables, sticky labels, clipboards, name tags for roles, audio recorders or tablets","Whānau invitations, simple refreshments (check allergies) and a printed gallery guide","Certificates for every child with a named strength","Mini-whiteboards; A–D answer cards (for offline Showdown)"],

 days:{
 /* ====================================================================== MONDAY */
 mon:{
  id:"w10-mon", day:"mon", subject:"History — Legacy",
  title:"What Persia Gave the World",
  tagline:"What did a vanished empire leave in your kitchen, your cupboard and your language?",
  nzc:["SS-CC","SS-ICO","SS-DO","EN-W"],
  kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
  values:["Inquiry & curiosity","Respect","Community & participation"],
  li:"We are learning to identify Persian contributions to our world and to judge how important they are.",
  sc:["I can name five Persian legacies.","I can explain one legacy in detail and say how we know.","I can choose a legacy to showcase and say why it matters."],
  vocab:[
   {w:"legacy",d:"Something handed down from people of the past that still matters today."},
   {w:"influence",d:"The power to change or shape something else, such as language, ideas or art."},
   {w:"loanword",d:"A word one language borrows from another (for example ‘bazaar’ in English)."},
   {w:"origin",d:"Where something first came from. Historians often say ‘probably’ because origins can be hard to prove."},
   {w:"qanat",d:"An underground sloping tunnel that carries water from the mountains to a village."},
   {w:"windcatcher",d:"A tall tower on a building that catches breezes and draws cool air down inside."},
   {w:"epic",d:"A very long poem that tells the story of heroes and a people’s past."},
   {w:"algorithm",d:"A set of steps for solving a problem. The word comes from the name of the scholar al-Khwarizmi."}],
  resources:["Mystery Bag and items (see Materials)","Legacy cards (app or printed): gardens, qanats, coins, roads, carpets, windcatchers, chess, polo, Shahnameh, words","‘Persian words in English’ list (app or printed)","Museum label template (print from the Teacher View)","Word Detectives booklet pages","Time-capsule letter paper"],
  dispatch:{
   title:"The Mystery Bag",
   story:"The Gate is a day’s ride away, and Shirin has pulled a heavy cloth bag from her saddle. ‘Reach in, Courier. No peeking! Feel it, smell it, shake it. Every single thing in this bag has a Persian story. Before the week is out you will be able to say what.’ Gandom the camel pokes her nose in first. She chews a pistachio shell and looks very pleased with herself.",
   easy:"Reach into the bag. Feel and smell the things inside. What could they be? Every one has a link to Persia!",
   teacher:[
    "BEFORE CLASS: fill the bag with 6–8 items (pistachios in a shell, a few saffron threads in a closed jar, a chess piece, a tulip bulb, pyjamas or a label, a spinach leaf, a lilac or jasmine photo). Check allergies: pistachio is a nut, so use a photo or a sealed packet if any student has a nut allergy.",
    "Read Shirin’s dispatch aloud (1 min). Pass the bag round the Caravans: each student feels ONE item without looking and whispers a guess to their team (4 min).",
    "Reveal the items one by one. Ask: ‘Which of these is a thing we eat? Wear? Play? Grow?’ Take quick answers (3 min).",
    "Do not tell the Persian links yet. Say: ‘By the end of today you will know why each of these is in the bag.’",
    "Share the Learning Intention and Success Criteria (students read them chorally) (2 min)."],
   retrieval:"Quick link to the whole journey: ‘On a mini-whiteboard, write ONE thing Persia is famous for from any week.’ Collect three answers and say: ‘Today we turn those into legacies.’"
  },
  discovery:{
   intro:"A legacy is something handed down. The Persian Empire ended long ago, but look around: Persia is still in our gardens, our words and our games.",
   cards:[
    {title:"Gardens and the word ‘paradise’", icon:"flame", body:"The Persians loved walled gardens with water, shade and fruit trees. Their word for such a garden, <b>pairidaeza</b>, became our word <b>paradise</b>. The garden at <b>Pasargadae</b> is among the oldest known planned gardens, and UNESCO lists ‘The Persian Garden’ as World Heritage. Many later cultures, in many lands, copied the idea of a garden as a peaceful, watered place."},
    {title:"Qanats, coins and roads", icon:"compass", body:"<b>Qanats</b> brought water underground to dry lands, and the idea spread widely and some still work today. The gold <b>daric</b> helped trade and payment across a huge empire. The <b>Royal Road</b> and its relay stations were an organised system of messages that later empires admired and copied. Many societies built roads and post systems, so we say Persia <i>helped to spread</i> these ideas, not that it invented them all."},
    {title:"Carpets, windcatchers, chess and polo", icon:"rosette", body:"Persian <b>carpets</b> are famous. The oldest almost complete knotted carpet, the <b>Pazyryk carpet</b> (found in Siberia, about 2,400 years old), may have been made in the Persian world, though scholars disagree. <b>Windcatchers</b> cool houses in desert cities such as Yazd. <b>Chess</b> reached Persia from India and became <i>shatranj</i>. <b>Polo</b> was played in Persia for many centuries, and its true beginnings are debated."},
    {title:"Stories and scholars", icon:"book", body:"The <b>Shahnameh</b> (‘Book of Kings’), a Persian epic poem of about 50,000 couplets, was finished by the poet <b>Ferdowsi</b> about the year 1010 AD. Later Persian-speaking scholars shaped mathematics, medicine and poetry. The word <b>algorithm</b> comes from the name of <b>al-Khwarizmi</b>, a scholar from the Persian-speaking world who worked in Baghdad about 1,200 years ago. Many peoples, including Arabs, Turks and Indians, shared in the same golden age of learning."},
    {title:"Persian words in English", icon:"scroll", body:"English has borrowed many Persian words, sometimes by way of other languages: <b>paradise, caravan, bazaar, pyjamas, khaki, lilac, jasmine, spinach, magic, checkmate</b> and <b>algorithm</b> (from a name). Checkmate comes from <i>shah mat</i>, which most scholars take to mean ‘the king is helpless’. <i>Magic</i> comes from the <b>magi</b>, the Persian priests we met in Week 9. Words travel along trade routes, just as people do."}],
   teacher:[
    "Link the bag (4 min): hold up each item and give its Persian link (pistachios and saffron are crops long grown in Iran; chess/shatranj; tulip bulb and tulip’s link to a Persian word for turban, through Turkish; pyjamas from a Persian word for leg-garment; spinach).",
    "Legacy cards (6 min): show the first three discovery cards on the big screen. Ask: ‘Which of these legacies do you use or see?’ Keep the language careful: ‘Persia helped spread…’, ‘scholars think…’.",
    "Words (3 min): read the word list aloud and ask students to hum the beat of each syllable. Play ‘Persian or not?’ with 4 words on the mini-whiteboards.",
    "Judging (2 min): ask students to pick their top legacy and rate it for importance (1–5) on a whiteboard. Hear one reason from each of three students.",
    "Invite Iranian-NZ students to share ONLY if they wish. Never ask a child to speak for a whole culture."]
  },
  paths:[
   {id:"A", name:"“Persia Gives” Museum Exhibit", icon:"scroll",
    brief:"Make an exhibit for the class museum: one object (or a drawing or model) and a museum label that tells visitors what it is, where it comes from and why it matters. These exhibits become part of Thursday’s Gallery Night.",
    checklist:["I chose ONE Persian legacy","My object or drawing is clear and neat","My label has a title, a 2–3 sentence description and a ‘why it matters’ line","I used a hedge word where scholars disagree (‘probably’, ‘many scholars think’)","I named how we know (a source)"],
    scaffold:"<b>Label frame:</b> Title: … <br><b>What it is:</b> This is a … <br><b>Where it comes from:</b> It probably began in … <br><b>Why it matters:</b> We still … <br><b>How we know:</b> We know from …",
    diff:{supported:"Choose from the picture bank (garden, qanat, coin, chess piece). Use the label frame and complete each line with a partner.",
          standard:"Write your own label with all five parts and a clear drawing or model.",
          extended:"Write TWO labels for the same object: a short one for a child and a longer one for an adult, and say what you left out of the short one."}},
   {id:"B", name:"Word Detectives Booklet", icon:"book",
    brief:"Make a little booklet of Persian words used in English. For each word, give the word, the Persian source and a sentence of your own. Finish with a mystery word for a friend to guess.",
    checklist:["I included at least 6 words","For each word I wrote the Persian source (or ‘from the name of’)","I wrote my own sentence for each word","I drew a picture for at least 3 words","I wrote one mystery word clue"],
    scaffold:"<b>Page frame:</b> Word: … <br><b>From Persian:</b> … which meant … <br><b>My sentence:</b> … <br><b>Mystery clue:</b> I am a … that … Who am I?",
    diff:{supported:"Use the word bank (paradise, caravan, bazaar, pyjamas, jasmine, spinach) and the page frame. Draw a picture for each word.",
          standard:"Choose your own six words from the list and write your own sentences and sources.",
          extended:"Group your words by theme (food, clothes, travel, ideas) and add a note about why trade routes spread words so far. Include one word where scholars disagree about the route it took."}},
   {id:"C", name:"Time-Capsule Letter", icon:"horn",
    brief:"Write a letter to Cyrus or Nehemiah (or both) from 2,500 years in the future. Say what you would thank them for, what has lasted and what has changed.",
    checklist:["I started with a greeting and said who I am and when I am writing","I named 3 things that have lasted (legacies)","I said thank you for one specific thing","I told them one thing that has changed","I ended with a hope for the future"],
    scaffold:"<b>Dear …</b> I am writing from the year … in Aotearoa New Zealand. <br><b>Thank you for…</b> <br><b>Still with us today…</b> <br><b>Changed…</b> <br><b>My hope is…</b>",
    diff:{supported:"Use the letter frame and tell about two legacies. Read your letter aloud to a partner.",
          standard:"Write a letter of three paragraphs with three legacies and a specific thank-you.",
          extended:"Write a short reply from Cyrus or Nehemiah that shows what he cared about, using what we know from Scripture and other sources, and say which parts are your imagination."}}
  ],
  councilFire:{
   see:{refs:["Gen 12:2–3","Ps 78:4–7","Rev 7:9"],
        text:"God promises Abraham that He will make him a blessing, and that through his family every people on earth will be blessed. In Psalm 78, the singer says that the stories of what God has done must be told to the next generation so that they will trust Him. In Revelation 7, John sees a huge crowd from every nation, tribe, people and language standing together before God."},
   wonder:"What do you want to hand down to the next generation? What would you like people to say about the stories you tell and the things you make?",
   weigh:"Persia left gardens, words and roads to the world, and the Bible says God’s plan blesses every nation. How does a legacy of kindness compare with a legacy of buildings and coins? Which lasts longer?",
   respond:"Write a one-sentence legacy statement for yourself: ‘I want to be remembered for…’. Keep it in your Caravan Log.",
   teacher:"Genesis 12:3 and Revelation 7:9 are Christian texts about God’s global plan and are not teaching that Persian culture is Christian. Present the legacies as achievements of real Persian and Iranian peoples. Students of other faiths may take part in the legacy-statement task without writing about God.",
   verses:["Gen 12:2–3","Ps 78:4–7","Rev 7:9"]},
  assess:{
   evidence:"The legacy explanation (oral or written), the museum label or booklet page, and notes from the Council Fire talk.",
   rubric:["Names one or two legacies with support.","Names five legacies and explains one in detail with a source.","Explains how a legacy spread and uses hedge words accurately where scholars disagree.","Judges the importance of different legacies with reasons, and compares a Persian legacy with one from another culture."]},
  nzConnection:"What have people brought to Aotearoa that is now part of everyday life, and what was here first? Think of words (te reo Māori words in English), foods, games and ideas. Invite your Māori Education lead or local iwi/hapū to share how local knowledge is handed down; avoid pan-Māori generalisations.",
  sensitivity:"Present Persian legacies as achievements of real peoples, not as ‘exotic’ curiosities. Where scholars disagree about origins (chess, polo, carpets), say so. Be careful with the Mystery Bag around nut allergies. Do not suggest that Persians ‘gave’ everything: ideas moved in many directions.",
  inquiry:["Could students name five legacies and explain one with a source?","Who used a hedge word (‘probably’, ‘many scholars think’)?","What do I need to revisit before tomorrow’s modern Iran lesson?"],
  widgets:[
   {type:"match", title:"Persian Words in English", prompt:"Match each English word to the Persian idea behind it.",
    pairs:[["paradise","From a Persian word for a walled garden"],["caravan","From a Persian word for a group of travellers"],["bazaar","From a Persian word for a marketplace"],["pyjamas","From words meaning ‘leg garment’, by way of South Asia"],["checkmate","From shah mat: ‘the king is helpless’"],["algorithm","From the name of al-Khwarizmi, a scholar"],["magic","From the magi, the Persian priests"]]},
   {type:"sort", title:"Persian Legacy or Not?", prompt:"Is each item a legacy of Persia and its neighbours, or does it come from somewhere else?",
    bins:["Persian legacy (or spread by Persia)","Not from Persia"],
    items:[{t:"The word ‘paradise’ (from pairidaeza)",bin:0},{t:"Qanats: underground water tunnels",bin:0},{t:"The gold daric coin",bin:0},{t:"The Shahnameh epic poem",bin:0},{t:"Windcatchers for cooling houses",bin:0},{t:"The word ‘kiwi’ (from te reo Māori)",bin:1},{t:"The word ‘kangaroo’ (from an Aboriginal Australian language)",bin:1},{t:"The word ‘tsunami’ (from Japanese)",bin:1}]},
   {type:"order", title:"A Legacy Timeline", prompt:"Put these events in the order they happened.",
    items:["Cyrus founds the Persian Empire (about 559 BC onward)","Darius begins the Royal Road and Persepolis (about 520–518 BC)","The Pazyryk carpet is made (about 400–300 BC)","Al-Khwarizmi works in Baghdad (about 800s AD)","Ferdowsi finishes the Shahnameh (about 1010 AD)"]},
   {type:"reveal", title:"Where Did It Come From?", prompt:"Tap each card to see the Persian link and what scholars still debate.",
    cards:[{front:"Chess",back:"Reached Persia from India as chatrang, became shatranj, and later spread to Europe. The game’s very first beginnings are still debated."},{front:"Polo",back:"Played in Persia for many centuries and loved by kings. Scholars debate where it began, probably among horse-riding peoples of Central Asia and Iran."},{front:"Windcatchers",back:"Tall towers in desert cities such as Yazd that catch a breeze and cool the house below. They belong to later centuries, not to the Achaemenid age."},{front:"Pazyryk carpet",back:"A knotted carpet found in a frozen tomb in Siberia. Some scholars think it came from the Persian world, but this is debated."}]}
  ]
 },

 /* ====================================================================== TUESDAY */
 tue:{
  id:"w10-tue", day:"tue", subject:"Geography — Iran Today",
  title:"Persia to Iran: Cities Then & Now",
  tagline:"The old names are still on the map. Who lives there now?",
  nzc:["SS-PE","SS-ICO","MA-S","SS-DO"],
  kc:["Thinking","Using language, symbols & texts","Relating to others"],
  values:["Respect","Community & participation","Diversity"],
  li:"We are learning to compare ancient and modern settlements and to speak about modern Iran respectfully.",
  sc:["I can name four modern Iranian cities and where they are.","I can describe what has changed and what has continued since ancient times.","I can compare data about an Iranian city and a New Zealand city."],
  vocab:[
   {w:"continuity",d:"Something that stays the same over time."},
   {w:"change",d:"Something that is different from before."},
   {w:"population",d:"The number of people living in a place."},
   {w:"urban",d:"To do with towns and cities."},
   {w:"capital city",d:"The city where a country’s government sits (Tehran for Iran; Wellington for New Zealand)."},
   {w:"windcatcher (badgir)",d:"A tower on a building that catches breezes to cool it."},
   {w:"stereotype",d:"A fixed, unfair picture of a group of people."}],
  resources:["Floor or wall map of Iran with sticky dots","Ancient-to-modern matching cards (app or printed)","City data cards (check against a current source before use)","Graph paper, rulers, or a spreadsheet for Path B","Photos of modern Iranian cities: Tehran, Isfahan, Shiraz, Yazd","Travel guide template (print from the Teacher View)"],
  dispatch:{
   title:"Then & Now Cards",
   story:"The Gate is close, and the road runs through towns you have never visited. ‘The old names are still on the map, Courier,’ says Shirin, unrolling a worn card. ‘Persepolis is near a city called Shiraz. Ecbatana, where the Medes ruled, is today Hamadan. Susa is a town called Shush. Match the old with the new. And remember: real families live in these places today.’",
   easy:"Match each ancient place with where it is today. Real people live there now!",
   teacher:[
    "Retrieval (2 min): Monday — name two legacies; what is a loanword; why use a hedge word?",
    "Deal ancient-to-modern cards to the Caravans: Persepolis–near Shiraz; Ecbatana–Hamadan; Susa–Shush; Pasargadae–near Shiraz and Persepolis; Isfahan; Tehran; Yazd (6 min). Teams match, then mark the modern cities on the big map with sticky dots.",
    "Say clearly: ‘We are learning about the land and cities of Iran today, and about the people who live there. We speak about them as we would about our own neighbours.’ (1 min)",
    "Share the Learning Intention and Success Criteria (students read them chorally)."],
   retrieval:"Monday: legacies; the word ‘legacy’; one Persian word in English."
  },
  discovery:{
   intro:"Iran today is a large, varied country. Its cities are old and new at the same time. Let’s look at four of them.",
   cards:[
    {title:"A big country with many peoples", icon:"compass", body:"Iran is about <b>six times</b> the size of Aotearoa New Zealand and has about <b>90 million</b> people (check a current source). Persian (Farsi) is the main language, and many people also speak Azeri, Kurdish, Luri, Arabic, Baluchi and other languages. Iran has mountains, deserts, forests and two coastlines, so its cities look very different from each other."},
    {title:"Four modern cities", icon:"home", body:"<b>Tehran</b> is the capital and the biggest city (about 9 million people in the city, more in the wider area). <b>Isfahan</b> is famous for its beautiful bridges and a great public square, from the 1600s. <b>Shiraz</b> is near Persepolis and known for gardens and poetry. <b>Yazd</b> is a desert city with windcatchers, mud-brick lanes and a UNESCO-listed old town."},
    {title:"Then and now", icon:"scroll", body:"<b>Persepolis</b> (UNESCO site) sits about 60 km north-east of <b>Shiraz</b>. <b>Ecbatana</b> lies under the modern city of <b>Hamadan</b>. <b>Susa</b> is the town of <b>Shush</b>, where archaeologists still work. <b>Pasargadae</b>, Cyrus’s capital, is a quiet UNESCO site on a high plain. Old cities often grow on the same spot because the water, soil and routes are still good — as you learned in Week 1."},
    {title:"What has changed, what has stayed", icon:"flame", body:"<b>Changed:</b> Cities now have motorways, apartments, universities and technology. <b>Stayed the same:</b> People still choose sites near water and trade routes, still use qanats and old bazaars in some places, and still love gardens, poetry and hospitality. The relay-station idea lives on in modern roads and rail."},
    {title:"Windcatchers at Yazd", icon:"gear", body:"In hot, dry Yazd, builders designed tall <b>windcatchers</b> (<i>badgirs</i>) that catch breezes and draw cool air down into the house, sometimes over a pool of water. They are a clever adaptation to a desert habitat, just like the adaptations you studied in Week 4."}],
   teacher:[
    "Big picture (4 min): show the map and the six-times comparison with NZ. Ask: ‘What would the climate be like in a country this big?’ Keep to land, language and culture — avoid current politics.",
    "Four cities (5 min): look at a photo of each (Tehran, Isfahan, Shiraz, Yazd). Students write ONE word for each on a mini-whiteboard. Discuss: ‘What does the photo show that surprises you?’",
    "Then and now (3 min): use the matching answers to ask: ‘Why might a city grow in the same place for 2,500 years?’",
    "Data skim (3 min): show the city data cards. Point out the difference between city and wider-area figures and say that numbers change. Always check against a current source and round numbers."]
  },
  paths:[
   {id:"A", name:"Then & Now Map Pair", icon:"compass",
    brief:"Make two linked maps: one of the ancient places we studied and one of the modern cities of Iran. Use arrows or numbers to show which place is which.",
    checklist:["Both maps have a title, compass rose, scale bar and key","I labelled at least 4 ancient places and 4 modern cities","I linked ancient and modern places with numbers or arrows","I wrote a sentence on one thing that changed and one that stayed the same","I used respectful, accurate language"],
    scaffold:"<b>Ancient:</b> Persepolis · Pasargadae · Susa · Ecbatana. <br><b>Modern:</b> Shiraz · Shush · Hamadan · Tehran · Isfahan · Yazd. <br><b>Sentence frame:</b> Then, … Now, … But … is still the same.",
    diff:{supported:"Use a printed outline map and pre-made dots; add labels and join pairs with arrows.",
          standard:"Draw both maps with all conventions and link the pairs.",
          extended:"Add a third layer: a trade route (the Royal Road or Silk Road) and explain how that route helped some cities grow."}},
   {id:"B", name:"Data Comparison", icon:"gear",
    brief:"Use the data cards to graph the population of ONE Iranian city and ONE New Zealand city. Write three sentences comparing them and say what the graph does not tell us.",
    checklist:["My graph has a title and labelled axes","My bars or points are accurate and use a sensible scale","I compared the two cities in three sentences","I used ‘about’ or ‘roughly’ for approximate numbers","I named one thing the graph does NOT tell us"],
    scaffold:"<b>Graph:</b> Title · x-axis (city) · y-axis (people) · scale. <br><b>Sentence frames:</b> … is about … times bigger than … <br>The graph does not show … <br>I would also like to know …",
    diff:{supported:"Use a pre-made bar graph template with a scale already marked; add bars and one sentence.",
          standard:"Draw your own bar graph, write three comparison sentences and one limitation.",
          extended:"Compare four cities (two Iranian, two NZ), calculate the ratio between the largest and smallest, and explain why population alone does not make a city better or worse."}},
   {id:"C", name:"Travel Guide Page", icon:"star",
    brief:"Make a one-page travel guide to a modern Iranian city. Show what a visitor might see, eat and learn, and what the ancient past adds to the story.",
    checklist:["Title and a welcoming heading","A map or locator showing where the city is","At least three things to see or do (from our sources)","One link to the ancient past","Respectful language and no stereotypes"],
    scaffold:"<b>Welcome to … </b> <br><b>Where it is:</b> … <br><b>Must-see:</b> 1 … 2 … 3 … <br><b>The ancient link:</b> … <br><b>Did you know?</b> …",
    diff:{supported:"Use the template and choose from a picture bank of the city; write short captions.",
          standard:"Design your own page with at least three attractions and one ancient link.",
          extended:"Add a ‘Meet the locals’ box that describes everyday life using a respectful, researched approach, and say how you checked that your picture is not a stereotype."}}
  ],
  councilFire:{
   see:{refs:["Rev 7:9","Matt 28:19","1 Tim 2:1–2"],
        text:"In Revelation 7, John sees a crowd from every nation, tribe, people and language standing together before God. In Matthew 28, Jesus sends His followers to all nations. In 1 Timothy 2, Paul asks Christians to pray for everyone, including kings and all who are in authority, so that people can live peaceful and quiet lives."},
   wonder:"People today live in the lands we have studied. How can we love them and treat them as our neighbours?",
   weigh:"What does it mean to respect people whose beliefs and cultures may be different from ours? What would respectful language sound like when we talk about another country?",
   respond:"Write a short prayer for Iranian families and for Iranian-NZ neighbours. Students from other faith backgrounds may write a kind wish or a message of goodwill instead.",
   teacher:"Keep prayer focused on families, children, peace and welcome, and avoid politics. Matthew 28:19 is a Christian text, and a Christian school may present it as such; do not suggest that Muslim, Jewish or Zoroastrian-background students should change their beliefs. Frame the task as care for people. Never single out Iranian-NZ students.",
   verses:["Rev 7:9","Matt 28:19","1 Tim 2:1–2"]},
  assess:{
   evidence:"Matching accuracy; the comparative statement (‘Then…, now…, still…’); the graph or map; the language used in the Council Fire task.",
   rubric:["Names one or two modern places with support.","Names four modern cities and links two to ancient places.","Describes change and continuity with examples and compares data accurately.","Explains why places last for centuries and evaluates what graphs and maps do not show; speaks respectfully about people today."]},
  nzConnection:"Compare an old settlement in your rohe with the city or town that stands there today: what stayed (water, routes, soil) and what changed? Compare the sizes of Auckland, Wellington and Christchurch with Tehran, Isfahan and Shiraz. Invite local iwi or your Māori Education lead to share place names and stories; avoid pan-Māori generalisations.",
  sensitivity:"Keep content cultural and geographic, not political. Do not use news images or comment on the government. Avoid stereotypes (deserts only, camels only, headlines only). Iranian-NZ students may have family in Iran and may feel anxious about world news; give them the option to share or stay quiet. Check city data against a current source; give rounded figures.",
  inquiry:["Could students describe both change and continuity for a city?","Did the graphs use sensible scales?","Which words did students use for modern Iran? Was the language respectful?"],
  widgets:[
   {type:"match", title:"Then & Now", prompt:"Match each ancient place with its modern link.",
    pairs:[["Persepolis","Near the modern city of Shiraz"],["Ecbatana","Under the modern city of Hamadan"],["Susa","The modern town of Shush"],["Pasargadae","A quiet UNESCO site on a high plain"],["Yazd","A desert city famous for windcatchers"],["Tehran","The capital of modern Iran"]]},
   {type:"sort", title:"Change or Continuity?", prompt:"Decide whether each item has changed since ancient times or has continued.",
    bins:["Has changed","Has continued"],
    items:[{t:"Motorways and high-speed trains",bin:0},{t:"Apartments and glass towers",bin:0},{t:"Universities and hospitals",bin:0},{t:"Choosing a site near water",bin:1},{t:"Bazaars as places to trade",bin:1},{t:"Qanats in dry areas",bin:1},{t:"Love of gardens and poetry",bin:1},{t:"Hospitality to guests",bin:1}]},
   {type:"order", title:"Biggest to Smallest", prompt:"Put these cities in order from the largest to the smallest population (approximate, check with your data card).",
    items:["Tehran","Isfahan","Shiraz","Yazd","Shush (Susa)"]},
   {type:"reveal", title:"Windcatchers & Water", prompt:"Tap each card to learn how desert cities stay cool.",
    cards:[{front:"What is a windcatcher?",back:"A tall tower (badgir) with openings that catch the breeze and send cool air down into the house."},{front:"Why do they work?",back:"Warm air rises and escapes; cooler air from higher up is pulled down. A water pool below can cool it even more."},{front:"What is a qanat for?",back:"It brings water underground from the mountains to the city so less is lost to the sun."},{front:"Is this old or new?",back:"Both. Builders still use and study these ideas today, and engineers admire them as clever, low-energy design."}]}
  ]
 },

 /* ====================================================================== WEDNESDAY */
 wed:{
  id:"w10-wed", day:"wed", subject:"Science — Wild Persia",
  title:"Wild Persia: Design a Sanctuary",
  tagline:"You know the habitats. You know the food webs. Now: can you protect them?",
  nzc:["SC-LW-Eco","SC-NoS-C","SC-NoS-P"],
  kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
  values:["Ecological sustainability","Community & participation","Innovation, inquiry & curiosity"],
  li:"We are learning to apply what we know about habitats and communities to design a reserve and propose actions to protect wildlife.",
  sc:["I can design a reserve with at least three habitats.","I can justify my choice of species using adaptations and food webs.","I can propose one real action that helps wildlife."],
  vocab:[
   {w:"reserve / sanctuary",d:"A protected area where wildlife and habitats are kept safe."},
   {w:"core area",d:"The most strictly protected heart of a reserve."},
   {w:"buffer zone",d:"A gentler area around the core, with careful use by people."},
   {w:"corridor",d:"A strip of habitat that joins two protected areas so animals can travel safely."},
   {w:"conservation",d:"Looking after nature so living things and their habitats survive."},
   {w:"endangered / extinct",d:"Very few left in the wild / none left anywhere."},
   {w:"kaitiakitanga",d:"Guardianship and care of the environment (a Māori concept; use with care and local guidance)."}],
  resources:["Large paper and a map outline for the Reserve Blueprint","Species cards from earlier weeks (ibex, leopard, cheetah, fallow deer, seals, dugong, hawksbill turtle)","Animal Cards (new: hawksbill turtle)","Food-web card set and wool","Field Guide template and pitch planner (print from the Teacher View)","Photos of kākāpō and takahē recovery, plus a trap-line or planting photo from your school or area"],
  dispatch:{
   title:"Quick-Fire Recap",
   story:"A hush has fallen over the road. In the dusk, a shape moves among the rocks: spots, long legs, a glance, then nothing. ‘An Asiatic cheetah,’ whispers Shirin. ‘There are fewer than twenty left in Iran. We have met so many creatures on this road, Courier. Now it’s your turn. If you were in charge of a sanctuary for wild Persia, how would you design it?’",
   easy:"We have met many animals on our journey. Now you will design a safe place for them to live.",
   teacher:[
    "Retrieval (2 min): Tuesday — name two modern cities; one thing that has continued since ancient times.",
    "Quick-fire recap (6 min): call out a word (habitat, community, adaptation, food web, apex predator, conservation) and have Caravans write a definition on a whiteboard in 20 seconds. Award a point for a clear definition and an example.",
    "Show the Animal Cards collected so far and ask: ‘Which three animals have you met in each habitat? Which are endangered or extinct?’ (2 min).",
    "Share the Learning Intention and Success Criteria."],
   retrieval:"Tuesday: modern cities, change and continuity."
  },
  discovery:{
   intro:"A good sanctuary is more than a fence. It is a plan for habitats, food webs and people working together.",
   cards:[
    {title:"Four ideas for a good reserve", icon:"compass", body:"<b>1. A protected core:</b> a heart where animals are left in peace. <b>2. A buffer zone:</b> where careful, low-impact use is allowed. <b>3. Corridors:</b> strips of habitat that link areas so animals can find food, mates and new homes. <b>4. Water:</b> springs, rivers, wetlands and, in dry lands, watering points. Local people must be part of the plan or it will not last."},
    {title:"Wild Persia: three habitats, many animals", icon:"paw", body:"<b>Mountains:</b> bezoar ibex, Persian leopard, brown bear, golden eagle (Week 1). <b>Plains and steppe:</b> Persian onager, goitered gazelle and the Asiatic cheetah (Week 2). <b>Desert and wetland:</b> sand cats and jerboas (Week 4), flamingos and water buffalo of the wetlands (Week 5). Each habitat has its own food web."},
    {title:"The gulf and the Caspian", icon:"flame", body:"Iran has two seas. In the south, the Persian Gulf has <b>dugongs</b> (sea-cows) and the <b>hawksbill turtle</b>, which nests on the beaches of islands such as Qeshm and Hengam. In the north, the <b>Caspian seal</b> lives in the Caspian Sea. The hawksbill turtle is critically endangered worldwide: it feeds on sponges on coral reefs and has a beautiful patterned shell that humans once hunted. Protecting beaches, reefs and nests helps it."},
    {title:"The Asiatic cheetah", icon:"star", body:"Once cheetahs ranged across much of Asia. Today the <b>Asiatic cheetah</b> survives only in Iran, and fewer than about 20 are thought to remain (numbers change, so check a current source). Threats include lack of prey, roads and habitat loss. Iran’s scientists, rangers and local herders work to protect the cheetah and its prey."},
    {title:"Recovery is possible", icon:"home", body:"In Aotearoa, <b>kākāpō</b> and <b>takahē</b> were once thought lost or nearly gone, and careful work by DOC rangers, scientists and volunteers has helped their numbers recover. Predator control and sanctuaries matter. Every recovery story shows that human action can protect as well as harm."}],
   teacher:[
    "Design principles (5 min): sketch a simple reserve on the board: core, buffer, corridor, water. Ask: ‘What would go wrong if the corridor were cut?’",
    "Habitat tour (4 min): look at the three habitats and ask Caravans to match each animal to its habitat and food link.",
    "Gulf, Caspian and cheetah (3 min): show the hawksbill turtle Animal Card; explain it is the new Stage 10 card. Say clearly that the cheetah numbers are small and can change.",
    "Local link (3 min): show a DOC recovery story and a local trap-line or planting project. Invite a local Māori Education lead or iwi/hapū person to share local kaitiakitanga practice, avoiding pan-Māori generalisations."]
  },
  paths:[
   {id:"A", name:"Reserve Blueprint", icon:"compass",
    brief:"Design a wildlife reserve on a map. Include at least three habitats, a protected core, a buffer zone, a corridor and a water source. Add a key and a short explanation.",
    checklist:["My map has a title, compass rose and key","I showed at least 3 habitats","I marked core, buffer, corridor and water","I chose at least 3 species and gave reasons","I wrote one action local people could do"],
    scaffold:"<b>Plan:</b> Title · habitats · core · buffer · corridor · water. <br><b>Say it:</b> I put the … in the … because … <br><b>Action:</b> Local people could …",
    diff:{supported:"Use a pre-drawn map and a label bank; add core, buffer, corridor and water using colours.",
          standard:"Draw and label independently and give three reasons for your layout.",
          extended:"Add a food web for each habitat and explain what would happen if one corridor were blocked."}},
   {id:"B", name:"Field Guide: Six Species", icon:"paw",
    brief:"Make a field guide page for six species of wild Persia. For each, give its habitat, an adaptation, what it eats and what might eat it. Join them in a food web.",
    checklist:["Six different species (from at least 3 habitats)","One clear adaptation for each, with a ‘helps it…’ sentence","Diet and a predator or threat for each","A food web linking at least 4 of the species","Status (endangered, extinct or secure) where known"],
    scaffold:"<b>Page frame:</b> Species … Habitat … <br><b>Adaptation:</b> It has … which helps it … <br><b>Food:</b> It eats … and is eaten by … <br><b>Status:</b> …",
    diff:{supported:"Use the species cards and a 3-box frame for each page; draw arrows for a 3-step food chain.",
          standard:"Complete six pages with adaptations and link four in a food web.",
          extended:"Add a ‘What if?’ page: what would happen to the community if one apex predator or one prey animal vanished, using careful words such as ‘may’ and ‘often’."}},
   {id:"C", name:"Pitch: Save the Asiatic Cheetah", icon:"horn",
    brief:"Make a 2-minute pitch to a council of rangers and scientists to protect the Asiatic cheetah. Include what is wrong, three actions and one thing you will do yourself.",
    checklist:["My pitch has a strong opening line","I explained the problem using at least two facts","I gave three clear actions (prey, roads, local people)","I included one thing I will do myself","I spoke clearly within two minutes"],
    scaffold:"<b>Open:</b> Imagine … <br><b>Problem:</b> The Asiatic cheetah … because … <br><b>Three actions:</b> 1 … 2 … 3 … <br><b>Close:</b> I will …",
    diff:{supported:"Use the pitch frame and rehearse with a partner. Read from your notes.",
          standard:"Write and present your own pitch with three actions.",
          extended:"Add a response to a hard question (a herder worried about livestock) and show how both people and cheetahs can win."}}
  ],
  councilFire:{
   see:{refs:["Gen 2:15","Ps 24:1","Rev 22:2"],
        text:"In Genesis, God puts the first man in the garden to work it and take care of it. The psalmist sings that the earth and everything in it belongs to the Lord. In Revelation 22, John sees the tree of life by the river of the city, and its leaves are for the healing of the nations."},
   wonder:"How can we act as caretakers of God’s world? What does it look like to care for a place for people we will never meet?",
   weigh:"Compare Genesis 2:15 with the idea of kaitiakitanga at school. What is the same and what might be different? Where do we need local knowledge?",
   respond:"Choose a real action to carry out: a planting, a pest trap, a clean-up, or a letter. Write it in your Caravan Log with a date.",
   teacher:"Genesis 2:15 sets caring for creation as a human task. Take care to say that Christians hold a range of views on how to apply it. Kaitiakitanga is a Māori concept with its own meaning; invite a Māori Education lead or local iwi/hapū to speak to it rather than explaining it for them. Keep the tone hopeful: recovery stories are real.",
   verses:["Gen 2:15","Ps 24:1","Rev 22:2"]},
  assess:{
   evidence:"Application of concepts in the blueprint, field guide or pitch; justification using adaptations and food webs; the action committed to.",
   rubric:["Names some animals and habitats with support.","Designs a reserve with three habitats and names core, buffer, corridor and water.","Justifies species choices with adaptations and food webs, and proposes realistic actions.","Evaluates trade-offs between people and wildlife and explains how a change would ripple through a community."]},
  nzConnection:"Compare Persian reserves with Aotearoa’s predator-free islands and sanctuaries, and with the recovery of kākāpō and takahē. What actions could your school or whānau take? Invite your Māori Education lead or local iwi/hapū for kaitiakitanga in your rohe; avoid pan-Māori generalisations.",
  sensitivity:"Present endangered species as a reason to care, not to panic. Say that cheetah numbers are small and may change. Be matter-of-fact about food chains. Do not suggest that Iranians are careless about wildlife: Iranian scientists and rangers are active in conservation.",
  inquiry:["Could students use ‘corridor’, ‘core’ and ‘buffer’ correctly?","Did their species choices fit the habitat?","Which action will actually be carried out, and who will check?"],
  widgets:[
   {type:"match", title:"Reserve Words", prompt:"Match each reserve idea to what it means.",
    pairs:[["Core area","The most strictly protected heart of a reserve"],["Buffer zone","A gentler area around the core with careful use"],["Corridor","A habitat strip joining two areas so animals can travel"],["Conservation","Looking after nature so living things survive"],["Endangered","Very few left in the wild"],["Extinct","None left anywhere"]]},
   {type:"sort", title:"Which Habitat?", prompt:"Sort each animal into the wild Persian habitat where it lives.",
    bins:["Mountains","Seas and coasts"],
    items:[{t:"Bezoar ibex",bin:0},{t:"Persian leopard",bin:0},{t:"Brown bear",bin:0},{t:"Golden eagle",bin:0},{t:"Dugong",bin:1},{t:"Hawksbill turtle",bin:1},{t:"Caspian seal",bin:1}]},
   {type:"order", title:"Recovery Steps", prompt:"Put these steps of a wildlife recovery in a sensible order.",
    items:["Scientists count and study the animals","The threat (such as predators or habitat loss) is identified","Habitat is protected or restored","Animals are protected, helped or moved to a safe place","Numbers are checked every year and plans are improved"]},
   {type:"reveal", title:"Meet the Hawksbill Turtle", prompt:"Tap each card to learn about this Gulf visitor.",
    cards:[{front:"Where does it live?",back:"Warm seas around coral reefs, including the Persian Gulf, where it nests on island beaches such as Qeshm and Hengam."},{front:"What is its adaptation?",back:"A narrow, bird-like beak that reaches into reef cracks to eat sponges, and a patterned shell for camouflage."},{front:"Why is it in trouble?",back:"It is critically endangered: its shell was hunted, nests are lost to beach changes and reefs are damaged."},{front:"What helps?",back:"Protecting nesting beaches, keeping lights and litter away, caring for reefs and stopping illegal trade."}]},
   "animalCards"
  ]
 },

 /* ====================================================================== THURSDAY */
 thu:{
  id:"w10-thu", day:"thu", subject:"Art — The Great Exhibition",
  title:"The Great Exhibition: Persian Gallery Night",
  tagline:"Curate it. Explain it. Share it.",
  nzc:["VA-UC","VA-CI","VA-DI","EN-S"],
  kc:["Thinking","Using language, symbols & texts","Managing self","Participating & contributing"],
  values:["Excellence","Community & participation","Respect"],
  li:"We are learning to curate and explain artworks, and to talk about our own and others’ work respectfully.",
  sc:["I can write a clear museum label.","I can talk about my artwork to a visitor.","I can describe a classmate’s work respectfully."],
  vocab:[
   {w:"curator",d:"A person who chooses, arranges and explains the objects in a museum or gallery."},
   {w:"exhibition",d:"A public display of artworks or objects."},
   {w:"artist’s statement",d:"A short text where the artist explains what they made and why."},
   {w:"label",d:"A small card that gives the title, maker, materials and a short explanation."},
   {w:"theme",d:"A big idea that links several artworks together."},
   {w:"gallery guide",d:"A person or a leaflet that helps visitors explore an exhibition."},
   {w:"audio guide",d:"A recorded tour that visitors listen to as they look."}],
  resources:["The whole term’s artwork: rosettes, clay cylinders, reliefs, glazed bricks, jewel work, Magi night paintings, carpets","Label cards and pens; small stands and tables","Role badges: curator, guide, artist, photographer","Audio recorders or tablets","Whānau invitations and gallery guide (print from the Teacher View)","Gallery-night checklist and certificates"],
  dispatch:{
   title:"Gallery Rules & Roles",
   story:"The Gate is almost in sight, and the road has turned into a stone hall. ‘Every great caravan leaves a mark, Courier,’ says Shirin. ‘Tomorrow we race at the Gate. Tonight, we show what we made along the road. A gallery has rules and jobs, and everyone has a part. Who will be curator? Who will guide visitors?’",
   easy:"We are making a gallery! Choose a job and learn the gallery rules.",
   teacher:[
    "Retrieval (2 min): Wednesday — name a reserve idea; name one endangered animal.",
    "Walk through ‘Gallery Rules’ together (4 min): look with your eyes, ask permission to touch, speak softly, say something kind, thank the artist.",
    "Roles (3 min): assign or choose roles for each Caravan: curator (arranges), guide (talks to visitors), artist (answers questions), photographer (records with permission).",
    "Share the Learning Intention and Success Criteria (1 min)."],
   retrieval:"Wednesday: core, buffer, corridor; one endangered animal."
  },
  discovery:{
   intro:"A great gallery tells a story. Today you will learn how curators choose, arrange and explain.",
   cards:[
    {title:"What does a curator do?", icon:"scroll", body:"A <b>curator</b> chooses which artworks to show, arranges them in a sensible order, and writes the labels. They ask: ‘What story do these objects tell together?’"},
    {title:"Write a good label", icon:"book", body:"A museum label gives the <b>title</b>, the <b>maker</b>, the <b>materials</b>, a <b>short explanation</b> (2–3 sentences) and sometimes a <b>question</b> for visitors. Short, clear words work best. Use hedge words where we are not sure (‘probably’, ‘some scholars think’)."},
    {title:"Group by theme", icon:"compass", body:"Group artworks by idea: <b>Pattern and power</b> (rosettes, reliefs), <b>Writing and records</b> (cylinders, clay tablets), <b>Colour and craft</b> (glazed bricks, jewels), <b>Journeys</b> (maps, Magi paintings), <b>Legacy</b> (Persian words, museum exhibits)."},
    {title:"Guiding questions", icon:"horn", body:"A good guide asks open questions: ‘What do you notice first?’ ‘What colours has the artist chosen?’ ‘What do you wonder?’ This helps visitors look slowly, and it respects what they bring."},
    {title:"Respect for every maker", icon:"star", body:"Say what you notice before you say what you like. Never say a classmate’s work is bad. Use the sentence: ‘I noticed… I wonder… I like… because…’."}],
   teacher:[
    "Curator’s job (4 min): look at two artworks side by side and ask: ‘What links them? What could the theme be?’",
    "Label writing (5 min): model a label for one artwork on the board using the frame (title, maker, materials, explanation, question).",
    "Arranging (3 min): show how to group by theme, and how to leave space so every work can be seen.",
    "Guiding and respect (3 min): model a guide asking an open question and a visitor responding. Practise ‘I noticed… I wonder… I like…’ in pairs."]
  },
  paths:[
   {id:"A", name:"Curate a Gallery Wall", icon:"rosette",
    brief:"Curate a wall or table for your Caravan: choose 5–8 artworks from the term, group them by a theme, arrange them with care and give the wall a title and an introduction panel.",
    checklist:["My wall has a title and a theme","I chose 5–8 artworks and arranged them in a clear order","Every artwork has a label","I wrote a 3-sentence introduction panel","I left enough space so each work can be seen"],
    scaffold:"<b>Title:</b> … <br><b>Theme:</b> This wall shows … <br><b>Introduction:</b> This wall is about… The works were made by… We want visitors to notice… <br><b>Order:</b> First … then … finally …",
    diff:{supported:"Use a ready-made theme and choose five artworks from a printed bank; write labels with the frame.",
          standard:"Choose your own theme and write all the labels and the introduction panel.",
          extended:"Curate a ‘conversation’ between two works from different weeks (for example a rosette and a relief) and explain what they say together."}},
   {id:"B", name:"Artist Statement & Gallery Guide", icon:"book",
    brief:"Write an artist’s statement for your best artwork and a one-page gallery guide that tells visitors which works to see and what to ask.",
    checklist:["My statement says what I made, how, and why","I named the Persian idea or technique that inspired me","My gallery guide lists at least 5 works and a question for each","I used clear, kind language","I proofread my work"],
    scaffold:"<b>Statement:</b> I made … using … I was inspired by … I want visitors to … <br><b>Guide:</b> 1 … Ask: … 2 … Ask: …",
    diff:{supported:"Use the statement frame and write a guide with three stops.",
          standard:"Write a statement of 4–5 sentences and a guide with five stops and questions.",
          extended:"Write a guide with two routes (a 10-minute route for young children and a 20-minute route for adults) and explain the choices."}},
   {id:"C", name:"Audio Guide", icon:"horn",
    brief:"Record a 60-second audio tour of one gallery wall or table. Speak clearly, say something about each work and ask visitors one question.",
    checklist:["I introduced myself and the wall","I described at least 3 works clearly","I included one fact from our learning","I asked visitors one question","My recording lasts about 60 seconds"],
    scaffold:"<b>Hello and welcome to…</b> <br><b>First, look at…</b> <br><b>This was made by… using…</b> <br><b>Did you know?</b> … <br><b>What do you notice?</b>",
    diff:{supported:"Use the script frame and rehearse with a partner before recording.",
          standard:"Write and record your own 60-second tour.",
          extended:"Record a tour for two audiences (a younger child and a visitor from another country) and explain what you changed."}}
  ],
  councilFire:{
   see:{refs:["Col 3:17","1 Pet 4:10"],
        text:"Paul says that whatever we do, in words or actions, we should do it all in the name of the Lord Jesus, giving thanks to God. Peter says that each of us has received a gift and should use it to serve others, as good stewards of God’s many-sided grace."},
   wonder:"Whose glory are our gifts for? Why might it matter who we are serving when we make or show something?",
   weigh:"Persian craftspeople served kings; Bezalel’s craft served God’s worship (Week 1). Our own gifts can serve our friends and families. How can serving others change the way we make things?",
   respond:"Thank a teacher or helper. Write them a short note naming one thing they did to help you.",
   teacher:"Keep the tone celebratory and humble: the aim is to serve and thank, not to compete. Invite students of other faiths to take part with their own words of thanks. Be sure that every child has at least one piece on show and a role at the exhibition.",
   verses:["Col 3:17","1 Pet 4:10"]},
  assess:{
   evidence:"Label clarity (title, maker, materials, explanation); speaking to a visitor or recording; respectful comment on a classmate’s work.",
   rubric:["Writes a short label with help and names one feature of an artwork.","Writes a clear label with title, maker, materials and a 2–3 sentence explanation, and speaks to a visitor.","Groups works by a theme, explains choices and asks open questions.","Curates with a clear idea, compares works from different weeks and uses precise art vocabulary."]},
  nzConnection:"How do museums and marae in Aotearoa display taonga and share stories? Visit a local museum or invite a guide. Invite your Māori Education lead or local iwi/hapū for protocols around displaying taonga; do not imitate tapu designs, and avoid pan-Māori generalisations.",
  sensitivity:"Make sure every child’s work is displayed and respected, and nobody is ranked. Some students may feel nervous about speaking to visitors: offer the audio-guide option. Check food allergies and any whānau cultural or dietary needs before sharing refreshments. Get consent before any photographs of students are shared.",
  inquiry:["Did every student write a label that a visitor could read?","Who needs more support to speak confidently?","What do whānau say about the evening? Collect feedback."],
  widgets:[
   {type:"order", title:"Setting Up the Gallery", prompt:"Put the steps of preparing an exhibition in a sensible order.",
    items:["Choose a theme","Select artworks that fit the theme","Write labels for each artwork","Arrange the works with space between them","Welcome visitors and guide them with open questions"]},
   {type:"match", title:"Gallery Roles & Words", prompt:"Match each gallery word to what it means.",
    pairs:[["Curator","Chooses, arranges and explains the works"],["Label","A small card with title, maker and a short explanation"],["Theme","A big idea that links artworks together"],["Artist’s statement","The maker’s own words about their work"],["Audio guide","A recorded tour for visitors"],["Exhibition","A public display of artworks"]]},
   {type:"sort", title:"Kind or Unkind Feedback?", prompt:"Sort each comment into kind feedback that helps, or unkind feedback that does not.",
    bins:["Kind and helpful","Unkind or unhelpful"],
    items:[{t:"I noticed you used a repeating pattern. I like the rhythm.",bin:0},{t:"I wonder what inspired the colours you chose.",bin:0},{t:"I like how your label is easy to read.",bin:0},{t:"That is rubbish.",bin:1},{t:"Mine is much better than yours.",bin:1},{t:"I would try adding more detail to the border next time.",bin:0},{t:"Why did you even make that?",bin:1}]},
   {type:"reveal", title:"Good Guide Questions", prompt:"Tap each card to see why the question works.",
    cards:[{front:"What do you notice first?",back:"This lets the visitor look slowly and say what they see, with no wrong answer."},{front:"What do you wonder?",back:"This invites curiosity and makes the visitor an explorer."},{front:"Where do you see a pattern repeat?",back:"This links to what we learned about rhythm and symmetry."},{front:"What story do you think this tells?",back:"This asks the visitor to interpret, and reminds us that art is a source with a point of view."}]}
  ]
 },

 /* ====================================================================== FRIDAY */
 fri:{
  id:"w10-fri", day:"fri", subject:"Showdown",
  title:"SHOWDOWN: The Gate of All Nations",
  tagline:"All ten weeks. One Gate. One last race.",
  mode:"classic", fateEnabled:true, timeLimit:20,
  nzc:["SS-CC","SS-PE","SC-LW-Eco","VA-UC","RE"],
  kc:["Thinking","Managing self","Relating to others","Participating & contributing"],
  values:["Integrity","Community & participation","Excellence"],
  li:"We are learning to recall and apply what we have learned across the whole Persia unit, and to celebrate our journey as a team.",
  sc:["I can answer questions from across all ten weeks of the unit.","I can work with my Caravan with integrity and encourage others.","I can explain what I have learned about God, people and the nations."],
  creedPrompt:"Before the final quiz, each Caravan writes a Gate Creed: ONE sentence about how you want to be remembered when the race is over.",
  creedStarters:["We want to be remembered for…","We will leave behind…","When the race is over, we will…","We will always treat other people…"],
  dispatch:{
   title:"The Gate of All Nations",
   story:"The great carved bulls stand guard, and the Gate towers above your caravan. Zal waits in the shade with his hood down. ‘Before the Gate opens,’ says Shirin, ‘you must write your last Creed. Not how you will win, but how you will be remembered. Ten weeks ago you signed a Charter. Now it is time to look back and look forward.’ A horn rolls out across the plain. The Grand Finale begins.",
   easy:"Today is the Grand Finale! Your team writes a Creed, takes the final quiz, and opens the Gate.",
   teacher:["Before the lobby opens, each team writes its Gate Creed on a strip and reads it aloud. Display them beside the Week 1 and Week 3 Creeds.","Remind students that today’s questions come from all ten weeks, and that celebrating effort matters more than winning.","After the quiz: Council Fire, the Forgiveness Vote for Zal, the last fragment and the Seal made whole, then the team podium, the individual podium and the season awards. Close with a whānau toast or shared kai."],
   retrieval:"The quiz is the retrieval."
  },
  questions:[
   {q:"Long before the Persians rose, which ancient people lived at Susa (Week 1)?", options:["Vikings","Romans","Elamites","Mongols"], answer:2, boss:false, tag:"SS-CC", explain:"Susa was an Elamite city, one of the earliest cities in the world, long before Cyrus."},
   {q:"The famous Cyrus Cylinder, found in Babylon, is made of… (Week 2)", options:["gold","clay","wood","silk"], answer:1, boss:false, tag:"SS-CC", teach:true, explain:"The Cyrus Cylinder is a barrel of baked clay with cuneiform writing. It describes Cyrus entering Babylon in 539 BC. People debate how to describe it, but it is certainly an important source."},
   {q:"The Royal Road from Sardis to Susa was about how long? (Week 3)", options:["27 km","270 km","2,700 km","27,000 km"], answer:2, boss:false, tag:"SS-PE", explain:"About 2,700 km. Royal riders using relay stations could cover it in about a week, according to Herodotus."},
   {q:"Xerxes ordered a bridge of boats across which narrow strait, and a storm wrecked it? (Week 4)", options:["Hellespont","Cook Strait","Bass Strait","Panama Canal"], answer:0, boss:false, tag:"SS-PE", explain:"The Hellespont is the narrow strait between Asia and Europe. Greek writers say a storm destroyed the first bridges, and Xerxes had them rebuilt."},
   {q:"In the book of Esther, what did Queen Esther do for her people at Susa? (Week 5)", options:["She hid from the king","She courageously went to the king to plead for her people","She led an army","She built a wall"], answer:1, boss:false, tag:"RE", explain:"Esther risked her own safety to speak to the king and ask him to save her people. Her story is about courage."},
   {q:"How many days did it take Nehemiah’s people to rebuild the wall of Jerusalem? (Week 6)", options:["5 days","500 days","52 days","52 months"], answer:2, boss:false, tag:"RE", explain:"Nehemiah 6 says the wall was finished in 52 days, even though some people mocked and threatened the builders."},
   {q:"Which leader’s army defeated Darius III and then burned Persepolis in 330 BC? (Week 8)", options:["Cyrus","Alexander the Great","Xerxes","Nehemiah"], answer:1, boss:false, tag:"SS-CC", teach:true, explain:"Alexander of Macedon defeated the last Achaemenid king, Darius III, and Persepolis burned in 330 BC. Historians still debate whether it was planned or a drunken act."},
   {q:"The ‘Parthian shot’ was a famous trick. What was it? (Week 9)", options:["Shooting backwards while riding away","A kind of drum","A gold coin","A type of cheese"], answer:0, boss:false, tag:"SS-CC", explain:"Parthian horse archers pretended to retreat and then turned in the saddle to shoot arrows at pursuers."},
   {q:"In what year did the country ask the world to call it ‘Iran’? (Week 1 and today)", options:["1835","535","2035","1935"], answer:3, boss:false, tag:"SS-CC", explain:"In 1935 the government asked other countries to use ‘Iran’. ‘Persia’ comes from Persis, the home region of the Persians. Both names matter."},
   {q:"BOSS ×2 — Which is the best evidence that Persia’s ideas travelled far beyond its borders?", options:["Persia was a big country","Persian kings were rich","English borrowed words such as paradise, caravan and bazaar from Persian","There are deserts in Iran"], answer:2, boss:true, tag:"SS-CC", teach:true, explain:"Words travel with people and goods. ‘Paradise’ (from a Persian word for a walled garden), ‘caravan’ and ‘bazaar’ are Persian loanwords still used in English today. Size and wealth are not evidence of influence."},
   {q:"What is a ‘corridor’ in a wildlife reserve? (Week 10)", options:["A hallway in a museum","A strip of habitat that links two areas so animals can travel safely","The strictly protected core","A kind of trap"], answer:1, boss:false, tag:"SC-LW-Eco", explain:"A corridor is a strip of habitat that joins protected areas so animals can find food, mates and new homes safely."},
   {q:"BOSS ×2 — Revelation 7:9 describes a crowd that is…", options:["from only one nation","made up of kings only","from every nation, tribe, people and language, standing together before God","empty"], answer:2, boss:true, tag:"RE", explain:"John sees a huge crowd from every nation, tribe, people and language standing together before God. It echoes God’s promise in Genesis 12:3 to bless all nations."}
  ],
  teachingMoments:[],
  paths:FRI_PATHS,
  councilFire:{
   see:{refs:["Gen 12:3","Rev 7:9","Ps 78:4","1 Pet 4:10","Prov 2:3–6"],
        text:"God promised to bless all the nations of the earth, and John sees them gathered together before Him. The psalmist says we must tell the next generation about God’s deeds, and Peter says to use our gifts to serve one another. The Proverbs tell us that if we search for wisdom like silver and hidden treasure, we will find the knowledge of God, because the Lord gives wisdom."},
   wonder:"What is the best thing you will carry out of this journey? Who will you tell?",
   weigh:"What did Persia teach us about nations, kindness and power? What do you think God wants the nations to be like at the end of the story?",
   respond:"Hold your Seal piece. Say your Gate Creed together, and say thank you to someone in your Caravan. Take part in the Forgiveness Vote with a thoughtful heart (see Col 3:13: ‘forgive as the Lord forgave you’).",
   teacher:"Make this ceremony joyful and not a contest. Frame the Forgiveness Vote as a chance to discuss what forgiveness does and does not mean: it does not pretend a wrong did not happen, but it chooses mercy. Students of other faiths may take part in the spirit of kindness. Invite whānau to share the final toast or kai.",
   verses:["Gen 12:3","Rev 7:9","Ps 78:4","1 Pet 4:10","Prov 2:3–6"]},
  assess:{
   evidence:"Showdown data per concept tag (exportable); Victory Lap product; Gate Creed; reflection in the Caravan Log; the unit portfolio.",
   rubric:["Answers some questions with support.","Answers most questions accurately across several weeks.","Explains why wrong answers were wrong and links ideas from different weeks.","Writes strong questions that connect weeks, and reflects thoughtfully on learning and character."]},
  nzConnection:"Link back to each week’s NZ connection: sources and whakapapa; the Southern Alps; the Royal Road and ara; sea straits and harbours; kākāpō and predator-free sanctuaries; kowhaiwhai; museums and taonga. Thank any guests from local iwi or your Māori Education lead.",
  sensitivity:"This is a celebration: winning is not the point. Some students may feel anxious about public podiums; offer the ‘anonymise names’ option. Make sure every child receives a certificate that names a real strength. Be mindful of allergies and cultural or dietary needs at the whānau toast or kai.",
  inquiry:["What did the Showdown data show across the ten weeks? Which tags had the lowest success?","Which misconceptions should I address at the start of next term?","What would I change for the next group of Couriers?"],
  widgets:[]
 }
 }
};
})();
