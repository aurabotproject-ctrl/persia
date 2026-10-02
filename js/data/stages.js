/* ===================================================================
   STAGES (all 10 weeks at overview level) + NZC code key.
   Full lesson plans live in js/data/weekNN.js and register themselves
   into RR.WEEKS[n]. Weeks without a file show as "Coming soon".
   =================================================================== */
(function(){
const RR=window.RR;
RR.WEEKS = RR.WEEKS || {};

RR.STAGES = [
 {n:1, title:"The Gates of the Plateau", era:"up to c. 550 BC", place:"Zagros Mountains, Ecbatana, Susa", fragment:"The Fragment of Beginnings", event:"Charter Day", mode:"classic",
  beat:"The Seal shatters; teams sign the Caravan Charter; first fragment in the Zagros. Shadow Courier glimpsed.",
  bible:"Gen 10 · Acts 17:26 · Ps 104 · Exod 31", subjects:["Before the Empire: Elam, Medes & Persians","The Great Plateau: reading the land","What is a habitat? The Zagros community","Pattern & symmetry: rosettes, lotus & team banners"]},
 {n:2, title:"The King Who Opened the Gates", era:"559–530 BC", place:"Anshan, Pasargadae, Ecbatana, Babylon", fragment:"Fragment of the Open Gate", event:"Camel Charge", mode:"classic",
  beat:"Cyrus & Babylon. Second fragment hidden in a clay cylinder. The map is torn — half stolen.",
  bible:"Isa 44–45 · Ezra 1 · Gen 2 · Job 39 · Hab 2", subjects:["Cyrus rises to Babylon","Pasargadae, Ecbatana & Babylon: royal cities & gardens","Steppe & grassland community; Cyrus’s camel trick","Clay tablets & cylinder seals"]},
 {n:3, title:"The Royal Road", era:"522–486 BC", place:"Behistun, Susa, Persepolis, the Sardis–Susa road", fragment:"Fragment of the Swift Road", event:"The Royal Relay", mode:"relay",
  beat:"Relay stations; the Behistun rock. Mudslide blocks the road; Daniel’s courage.",
  bible:"Ezra 5–6 · Dan 6 · Isa 40 · Phil 2", subjects:["Darius organises an empire","The Royal Road & settlements along it","Predators & the food web: lions & leopards","Relief carving: the Apadana procession"]},
 {n:4, title:"Pride Before the Fall", era:"490–479 BC", place:"Marathon, Hellespont, Thermopylae, Salamis, Susa", fragment:"Fragment of the Storm", event:"Storm at the Hellespont", mode:"lives",
  beat:"Xerxes’ storm-wrecked bridge; the Immortals. Fragment lost at sea, then recovered.",
  bible:"Prov 16 · Mark 4 · Job 38 · Eph 6", subjects:["Marathon, Thermopylae, Salamis: whose story?","Straits, harbours & chokepoints","Desert habitat adaptations (Kavir & Lut)","Glazed-brick Immortals frieze"]},
 {n:5, title:"For Such a Time as This", era:"c. 483–473 BC", place:"Susa, the Karkheh & Karun river plains, Lake Urmia", fragment:"Fragment of the Golden Sceptre", event:"For Such a Time as This", mode:"classic",
  beat:"Susa palace intrigue; a royal edict against a people; Esther’s courage.",
  bible:"Esther · Gen 2:10–14 · Ps 104", subjects:["Queen Esther of Susa","Susa & river-valley cities; the tell","Wetlands & Lake Urmia","Gold & jewel: Persian splendour"]},
 {n:6, title:"Rebuilding the Walls", era:"458–432 BC", place:"Babylon → Jerusalem, Susa", fragment:"Fragment of the Wall", event:"The Wall of 52 Days", mode:"wall",
  beat:"Escort exiles home; Nehemiah’s wall; the whole class cooperates against the mockers.",
  bible:"Neh 1–6 · Ezra 7 · Isa 58 · Rom 8", subjects:["Home again: Ezra, Nehemiah & the return","Jerusalem on a hill: walls, gates & the return route","Rebuilding a habitat: restoration & recovery","Build the gate: architecture & a collaborative gate"]},
 {n:7, title:"The Marketplace of the World", era:"5th century BC", place:"Persepolis region, bazaars, Royal Road stations", fragment:"Fragment of the Market", event:"Bazaar Bargains", mode:"wager",
  beat:"Bazaar bargains; thieves among the camels; ordinary lives matter.",
  bible:"Jer 29 · Prov 11 · Prov 12:10 · Gen 24", subjects:["Ordinary lives in an extraordinary empire","Bazaars, caravans & trade routes","Working animals: camels, horses & mules","Woven worlds: carpets & textile pattern"]},
 {n:8, title:"Fire on the Mountain", era:"334–330 BC", place:"Granicus, Issus, Gaugamela, Persepolis", fragment:"Fragment of Ashes", event:"Fire on the Mountain", mode:"lives",
  beat:"Alexander; Persepolis burns; the heaviest setback; hope in the ashes.",
  bible:"Dan 2, 8 · Ps 46 · Isa 61 · Gen 1–2", subjects:["The fall: Alexander & Darius III","Cities under attack: destruction & rebuilding","Gone or going: extinction & conservation","Fire & ruin: light, shadow & hope"]},
 {n:9, title:"Star-Watchers & Silk", era:"247 BC – 651 AD", place:"Nisa, Ctesiphon, Gur, the Silk Road, the Gulf & Caspian", fragment:"Fragment of the Star", event:"Starlight Navigation", mode:"starlight",
  beat:"Parthians, Magi; a night journey; the Shadow Courier is unmasked (Zal).",
  bible:"Matt 2 · Acts 2:9 · Num 24:17 · Isa 60", subjects:["Parthians & Sasanians: Persia rises again","Silk Road cities, Ctesiphon & the round city","Gulf & Caspian: coastal and marine communities","Star-gazers’ night: painting the journey of the Magi"]},
 {n:10,title:"The Gate of All Nations", era:"legacy & today", place:"The Gate at Persepolis", fragment:"The Fragment of Wisdom", event:"Gate of All Nations — Grand Finale", mode:"final",
  beat:"Forgiveness vote; the final fragment; the Seal assembled; its message revealed (Proverbs 2:3–6).",
  bible:"Gen 12:3 · Rev 7:9 · Ps 78 · 1 Pet 4:10", subjects:["What Persia gave the world","Persia to Iran: cities then & now","Wild Persia: design a sanctuary","The Great Exhibition: Persian gallery night"]}
];
RR.stage = n => RR.STAGES.find(s=>s.n===n);

/* ---------- NZC code key (Level 3, paraphrased — confirm wording on Tāhūrangi / TKI before ERO) ---------- */
RR.NZC = {
 "SS-CC":{area:"Social Sciences",strand:"Continuity & Change",text:"Students understand how people remember and record the past in different ways, how events have causes and consequences, and that perspectives on events differ."},
 "SS-PE":{area:"Social Sciences",strand:"Place & Environment",text:"Students understand how people interpret and represent places and environments, why people settle where they do, and how people’s interactions with places cause change."},
 "SS-ICO":{area:"Social Sciences",strand:"Identity, Culture & Organisation",text:"Students understand how cultural practices vary but meet shared needs, how groups organise and make decisions, and how culture and heritage are passed on."},
 "SS-EW":{area:"Social Sciences",strand:"The Economic World",text:"Students understand trade, specialisation and exchange, and how resources are used."},
 "SS-DO":{area:"Social Sciences",strand:"Inquiry practices (Do)",text:"Students ask questions, find and evaluate sources, consider perspectives and communicate findings."},
 "SC-LW-Eco":{area:"Science",strand:"Living World — Ecology",text:"Students explain how living things are suited to their habitat and respond to environmental change, both natural and human-induced."},
 "SC-LW-LP":{area:"Science",strand:"Living World — Life Processes",text:"Students understand that all living things have requirements to stay alive."},
 "SC-NoS-U":{area:"Science",strand:"Nature of Science — Understanding about Science",text:"Students understand that science explains the world and that scientific knowledge changes with evidence."},
 "SC-NoS-I":{area:"Science",strand:"Nature of Science — Investigating",text:"Students ask questions, find evidence, carry out fair tests and explain their findings."},
 "SC-NoS-C":{area:"Science",strand:"Nature of Science — Communicating",text:"Students use scientific vocabulary, diagrams and conventions, and question science texts."},
 "SC-NoS-P":{area:"Science",strand:"Nature of Science — Participating & Contributing",text:"Students use science to make decisions about issues (e.g. conservation)."},
 "VA-UC":{area:"The Arts — Visual Arts",strand:"Understanding Visual Arts in Context",text:"Students investigate the purpose of and context for art from past and present cultures."},
 "VA-PK":{area:"The Arts — Visual Arts",strand:"Developing Practical Knowledge",text:"Students explore and use art-making conventions, processes and procedures."},
 "VA-DI":{area:"The Arts — Visual Arts",strand:"Developing Ideas",text:"Students develop visual ideas from observation, imagination and the study of artists’ work."},
 "VA-CI":{area:"The Arts — Visual Arts",strand:"Communicating & Interpreting",text:"Students share and interpret ideas, feelings and stories in their own and others’ work."},
 "EN-S":{area:"English",strand:"Speaking & Presenting",text:"Students speak and present with purpose for a known audience."},
 "EN-W":{area:"English",strand:"Writing",text:"Students write for a purpose, organising ideas and using language features."},
 "EN-R":{area:"English",strand:"Reading",text:"Students read informational and narrative texts and make meaning from them."},
 "MA-G":{area:"Mathematics & Statistics",strand:"Geometry & Measurement",text:"Students use symmetry, scale, direction and distance."},
 "MA-S":{area:"Mathematics & Statistics",strand:"Statistics",text:"Students collect, organise, display and interpret data."},
 "TE":{area:"Technology",strand:"Designing & Making",text:"Students design and make to meet a purpose."},
 "HPE":{area:"Health & PE",strand:"Relationships & teamwork",text:"Students work cooperatively and build positive relationships."},
 "RE":{area:"Christian Character / Bible programme",strand:"Special character",text:"Students engage with Scripture and Christian character as part of the school’s special character programme."}
};
RR.KC = ["Thinking","Using language, symbols & texts","Managing self","Relating to others","Participating & contributing"];
RR.RUBRIC_NAMES = ["Scout","Courier","Captain","Master of the Road"];

/* Weekly Friday Showdown mode descriptions (for host console) */
RR.MODES = {
 classic:{name:"Classic",desc:"Speed + accuracy. Boss questions score ×2."},
 relay:{name:"Relay",desc:"Teams answer in sequence (coming Week 3)."},
 lives:{name:"Lives",desc:"3 lives per team (coming Week 4)."},
 wager:{name:"Wager",desc:"Wager points before each question (coming Week 7)."},
 wall:{name:"Wall",desc:"Whole class cooperates (coming Week 6)."},
 starlight:{name:"Starlight",desc:"Choose ★/★★/★★★ before each question (coming Week 9)."},
 final:{name:"Final",desc:"Cumulative, ×2 points (coming Week 10)."}
};
})();
