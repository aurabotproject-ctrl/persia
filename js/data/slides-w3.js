/* ===================================================================
   LESSON SLIDES — authored layer for Stage 3 (Week 3: The Royal Road).
   Same keys as slides-w1.js: hook, prior/retrieval, checks, talk, say,
   situations, sum, exit, next (fri: retrieval, talk, situations, sum, exit).
   NZ English. Scripture paraphrased.
   =================================================================== */
(function(){
const RR=window.RR; RR.SLIDES=RR.SLIDES||{};
RR.SLIDES[3]={
 mon:{
  hook:["Whisper the message down your Caravan line.","Now pass the written scroll in a relay.","Which was faster? Which was more accurate? Write your answer on your whiteboard.","How would a king rule lands from the sea to the mountains?"],
  prior:["Last stage, Cyrus began a huge empire. What does a ruler need to keep it together?","How can one person’s orders reach a place months away?"],
  checks:[
   {q:"Name the four tools Darius used to hold his empire together.",a:"Provinces run by satraps · the gold daric · the Royal Road with relay stations · written records (such as archives and the Behistun Inscription)."},
   {q:"What did a satrap do, and who checked on satraps?",a:"A satrap governed a province, collecting taxes and keeping order. The King’s Eyes and Ears (inspectors) checked on them."},
   {q:"Why might a standard gold coin help an empire?",a:"Officials and soldiers could be paid with it and traders could use it everywhere. But taxes were also paid in goods, so coins did not replace everything."},
   {q:"The Behistun Inscription is carved in three languages. Is it a neutral source? Why or why not?",a:"No. Darius had it made to tell the story of how he became king, so it is propaganda as well as history. The three languages (Old Persian, Elamite, Babylonian) later helped scholars read cuneiform."},
   {q:"According to Herodotus, how long did the Royal Road take for royal riders and for ordinary travellers?",a:"About a week for royal riders using relay stations, and about three months on foot. Herodotus is a Greek source, so we say ‘about’."}],
  talk:[
   {q:"Was Darius a wise organiser or a ruler who controlled too much? Choose a side and give one piece of evidence.",starters:["I think Darius was … because …","One piece of evidence is …","Someone on the other side might say …"]},
   {q:"If a record is kept in an archive, who is it for? Who might it leave out?",starters:["An archive helps … because …","It might leave out …","A good historian would also check …"]}],
  say:"Let students argue both sides; the aim is to hear ‘because’. Name Iranian history as a heritage to be proud of. Invite local ways of sharing information (hui, newsletters, notices) without generalising across iwi.",
  situations:[
   {title:"The Tax Collector",story:"You are a satrap. A flood has ruined the harvest in one village. The king’s tax is due, and a messenger says that a late payment will be reported to the King’s Eyes and Ears. The villagers beg for time. What do you do?",
    options:["Collect the full tax anyway, so the king is not angry.","Report the flood honestly and ask the king for more time for the village.","Hide the flood and take the grain from a neighbouring village."],best:1,
    think:"B. Honest reporting is a mark of integrity, and a good ruler listens to those who suffer. Hiding the truth (A or C) would harm people and break trust."},
   {title:"The Lost Record",story:"Your team finds an old record that says something different from the story you planned to tell. Telling the new story means redoing your poster, and the deadline is soon.",
    options:["Ignore the record and keep your poster.","Rewrite the poster to include what the record says, and explain why.","Tear the record up so no one finds out."],best:1,
    think:"B. Records matter because they are true. In Ezra, an old record was found, and a promise could be kept. Following the evidence is honest, even when it is inconvenient."}],
  sum:["Darius held a huge empire together with FOUR tools: provinces and satraps, the daric coin, the Royal Road, and written records.","Sources have a point of view: the Behistun Inscription is Darius’s own story, and Herodotus is a Greek writer.","In Ezra, a record in an archive helped a promise to be kept, and Scripture shows God’s faithfulness."],
  exit:"Finish the sentence on your whiteboard:  “Darius used ______ so that ______.”",
  next:{title:"Tuesday · Geography",text:"The mud is deep and the pass is blocked, so Shirin spreads the great map of the Royal Road on the ground. Bring string and a scale bar, Navigator: tomorrow we measure the road and find out why towns grow along it."}
 },
 tue:{
  hook:["Lay your string along the Royal Road, from Sardis to Susa.","Measure the string against the scale bar. How many kilometres is it?","How many days is that at 30 km a day? How many by relay?"],
  retrieval:[{q:"Name two of Darius’s four tools.",a:"Any two of: provinces and satraps, the daric, the Royal Road, written records."},{q:"What did a satrap do?",a:"Governed a province for the king, collected taxes and kept order."},{q:"Why is the Behistun Inscription both a source and propaganda?",a:"It tells us about Darius, but he made it to tell the story he wanted told."}],
  checks:[
   {q:"If 1 cm on a map equals 100 km, how far is a line measuring 12 cm?",a:"12 × 100 = 1,200 km."},
   {q:"About how long is the Royal Road, and how many days is that at 30 km a day?",a:"About 2,700 km. 2,700 ÷ 30 = about 90 days (about three months)."},
   {q:"Why was a relay so much faster than one rider?",a:"Each rider handed the message to a fresh rider with a fresh horse at a station, so nobody got tired and nothing stopped."},
   {q:"Put in order from smallest to largest: town, capital, relay station, village.",a:"Relay station → village → town → capital."},
   {q:"Why was Persepolis built where it was? Give two reasons, and say one thing we are not sure about.",a:"Flat plain for big halls, Mount Rahmat for a backdrop and some defence, nearby stone, and a place in the Persian homeland. We are not sure exactly why Darius chose that spot, because it is not written down."}],
  talk:[
   {q:"Is a road always a good thing for a place? Think about who benefits and who might lose.",starters:["A road helps … because …","But it could also …","It depends on …"]},
   {q:"Where does your own town sit on a route? What helped it grow?",starters:["Our town is on …","It grew because …","Without the road …"]}],
  say:"Push for trade-offs: roads carried traders AND armies and tax collectors. Link to local ara and tracks; invite local iwi or your Māori Education lead for the stories of your own rohe, and avoid generalising across iwi.",
  situations:[
   {title:"Where Should the Station Go?",story:"You are planning a relay station. Site A: beside a river but in a flood-prone hollow. Site B: on a dry hill, with no water for a day’s ride. Site C: on a gentle rise beside a spring, with a flat clearing for stables.",
    options:["Site A — the river is useful, so ignore the flood risk.","Site B — it is safe from floods.","Site C — it has water, safe ground and space."],best:2,
    think:"C. Good planners weigh water, safety and space, just as with settlement sites in Week 1. A and B each solve one problem and cause another."},
   {title:"A Road Through the Field",story:"A farmer’s field lies in the best route for a new road. The king’s officials say the road will bring great benefits to many, but the farmer will lose some of the harvest.",
    options:["Build through the field with no discussion.","Talk with the farmer, agree a fair payment or another route.","Move the road to the next valley regardless of the cost."],best:1,
    think:"B. Roads help many, but fairness means listening to those who lose out. Scripture calls leaders to act justly and love their neighbours."}],
  sum:["A SCALE BAR lets us turn map distance into real distance: 1 cm = 100 km means a 27 cm line is 2,700 km.","Roads pull settlement: station → village → town → capital.","Persepolis was built on a terrace beside Mount Rahmat for flat land, backdrop, stone and ceremony."],
  exit:"Finish the sentence:  “Settlements grow along roads because ______.”",
  next:{title:"Wednesday · Science",text:"At last the pass is partly clear, and Shirin leads you into a royal hunting park, where grass rustles and shadows move. Take a label and hold the wool, Courier: tomorrow you find out what happens when the lion lets go of the string."}
 },
 wed:{
  hook:["Take a label: grass, ibex, onager, leopard, lion, eagle or decomposer.","Hold the wool and pass it to whoever eats you, or whoever you eat.","Now the lion lets go. Who feels it first?"],
  retrieval:[{q:"What is a scale bar for?",a:"It shows how distance on a map equals real distance."},{q:"What is a relay station?",a:"A stop where riders swapped tired horses for fresh ones, so messages could keep moving."},{q:"Name the levels of settlement along a route.",a:"Station, village, town, capital."}],
  checks:[
   {q:"What is the difference between a food chain and a food web?",a:"A chain is one line (grass → ibex → leopard). A web joins many chains, showing all the feeding links."},
   {q:"In a food web arrow from grass to ibex, which way does the arrow point, and why?",a:"Grass → ibex. The arrow points from the food to the eater, showing the flow of energy."},
   {q:"What is an apex predator? Name one from the old Persian lands.",a:"A top predator with few or no natural enemies. Examples: the Asiatic lion, the Caspian tiger, the Persian leopard."},
   {q:"Which of these is extinct, and which is endangered: Caspian tiger, Persian leopard?",a:"The Caspian tiger is extinct (gone by about the 1970s). The Persian leopard survives but is endangered."},
   {q:"What often happens if the top predator is removed?",a:"Prey may increase, plants may be overgrazed, and other animals can lose food and shelter. Scientists say ‘may’ and ‘often’ because the effects vary."}],
  talk:[
   {q:"If the lions vanished from the old Persian lands, what could happen next? Trace three steps.",starters:["First … would happen because …","Then …","In the end …"]},
   {q:"Why do you think kings kept hunting parks, and what do we do differently today?",starters:["Kings wanted … because …","Today we try to …","I think it is better to …"]}],
  say:"Listen for cause-and-effect chains (‘because… so… then…’). Link to Aotearoa: stoats, rats and possums, and predator-free sanctuaries. Mention kaitiakitanga with care, and invite local voices without generalising across iwi.",
  situations:[
   {title:"The Missing Predator",story:"A group wants to bring back predators to a forest that has lost them. A farmer worries about her sheep. A scientist says that without the predators, the deer are destroying the young trees.",
    options:["Ignore the farmer — the forest matters more.","Ignore the scientist — the sheep matter more.","Listen to both, then look for ways to protect sheep and the forest."],best:2,
    think:"C. Good decisions listen to everyone and use evidence. People and wildlife both matter; the psalmist says God provides for the creatures, and we are called to look after them."},
   {title:"The Cascade Claim",story:"A teammate says, ‘If the lion goes, the grass ALWAYS disappears.’ You know that scientists say ‘often’ or ‘may’, and that some effects are uncertain.",
    options:["Agree. It sounds dramatic.","Say, ‘It may happen. Let’s write what the evidence shows and say we are not certain.’","Say nobody can know anything about food webs."],best:1,
    think:"B. Honest science says what we know and what we do not. Being careful with words is part of telling the truth."}],
  sum:["A FOOD WEB shows many feeding links. Arrows point from food to eater and show the flow of ENERGY.","An APEX PREDATOR is at the top of the web. The Asiatic lion is gone from Iran, the Caspian tiger is extinct, and the Persian leopard is endangered.","Removing a top predator can cause a CASCADE: prey increase, plants are overgrazed, and the web changes."],
  exit:"Finish the sentence:  “If the ______ disappeared, then ______ because ______.”",
  next:{title:"Thursday · Art",text:"At last the road opens onto the great stone terrace. Up the stairs, a stone parade is marching: nations, gifts, animals. Tomorrow you carve your own procession, soap or clay or foil, and add it to the mural."}
 },
 thu:{
  hook:["Study the Apadana relief images.","Spot: animals, cloth, vessels, repeated figures, profile views.","How can you tell that the people come from different places?"],
  retrieval:[{q:"Draw the arrow between grass and an ibex.",a:"Grass → ibex (from the food to the eater)."},{q:"What is an apex predator?",a:"A top predator with few or no natural enemies."},{q:"What may happen if the top predator disappears?",a:"Prey may increase, plants be overgrazed, and the web changes (a cascade)."}],
  checks:[
   {q:"What is a relief sculpture, and what does ‘incised’ mean?",a:"A relief stands out from a flat background. Incised means lines cut into the surface."},
   {q:"Why are the Apadana figures all in profile and walking the same way?",a:"This gives rhythm and order, showing a calm, organised procession."},
   {q:"What does the Apadana relief show, and what might it leave out?",a:"Delegations from many parts of the empire bringing gifts to the king. It does not show taxes, soldiers or those who did not want to be ruled."},
   {q:"Why do experts disagree about who each delegation is?",a:"There are few written labels, so they compare clothes, hairstyles and gifts with other evidence, and some identifications are uncertain."},
   {q:"Name two safety rules for soap or clay carving.",a:"Carve away from your body; keep tools on the table; use only plastic or blunt tools; tidy shavings into the tray."}],
  talk:[
   {q:"The reliefs show a calm, orderly empire. Whose story are they telling, and whose might be missing?",starters:["They tell the story of … because …","Someone missing might be …","I would check with another source such as …"]},
   {q:"Carvings in Aotearoa also tell stories. What do they say about the people who made them?",starters:["Carving can show …","A story might be told by …","The maker chooses …"]}],
  say:"Be even-handed: the Persian carving is a masterpiece of craft. For whakairo, invite a local carver or your Māori Education lead; do not imitate tapu carving, and honour the maker’s own meaning.",
  situations:[
   {title:"The Slipped Chisel",story:"Your soap relief has a big crack where you carved too deep. The bell is about to go, and a friend says, ‘Just start again quickly with a rushed one.’",
    options:["Rush a new one and finish it badly.","Take a breath, fix it by smoothing the soap, and finish it carefully.","Throw it away and do nothing."],best:1,
    think:"B. Craft means patience and care, and mistakes are part of learning. Bezalel’s skill was a gift worth using well."},
   {title:"The Mural Join",story:"Your Caravan’s section of the mural does not quite line up with the next team’s. They are frustrated and so are you.",
    options:["Say it is their fault.","Meet with them, agree how to adjust the join, and fix it together.","Redraw their section without asking."],best:1,
    think:"B. Good teams talk, listen and build something none could make alone. Jesus taught that great people serve others."}],
  sum:["A RELIEF stands out from a flat background; the Apadana reliefs show a procession of delegations in profile, repeated with rhythm.","Art is a SOURCE with a point of view: it shows how the court wanted to be seen.","Jesus described greatness as service: ‘whoever wants to be great must serve’."],
  exit:"Finish the sentence:  “My relief shows ______ and uses rhythm by ______.”",
  next:{title:"Friday · The Royal Relay",text:"The last leg of the Swift Road waits, and every station has a fresh rider. Tomorrow: write your Relay Creed, pass the baton well, and race your team in the Showdown!"}
 },
 fri:{
  retrieval:[
   {q:"Monday: Name Darius’s four tools for holding the empire together.",a:"Provinces and satraps, the daric, the Royal Road, written records."},
   {q:"Tuesday: How long is the Royal Road, and how long did royal riders need, according to Herodotus?",a:"About 2,700 km; about a week."},
   {q:"Wednesday: What often happens when the top predator is removed?",a:"Prey may increase, plants may be overgrazed, and the web changes."},
   {q:"Thursday: What is a relief sculpture, and what does the Apadana relief show?",a:"A sculpture that stands out from a flat background; delegations bringing gifts to the king."}],
  talk:[
   {q:"What was the most surprising thing you learned this week?",starters:["I was surprised that …","I used to think … but now I know …"]},
   {q:"What question about Persia are you still wondering?",starters:["I still wonder …","I would like to find out …"]}],
  situations:[
   {title:"The Dropped Baton",story:"In the relay game, your teammate drops the baton and your Caravan falls behind. They look upset.",
    options:["Blame them loudly.","Say, ‘It happens. Pick it up and let’s go together!’","Quit and say the game is silly."],best:1,
    think:"B. A relay is won by a team that passes the baton well and supports each other. Encouragement is a team’s strongest tool."},
   {title:"The Winning Team",story:"Another Caravan wins by one point. Your team feels cheated and someone says, ‘They only won because of a lucky guess.’",
    options:["Agree and complain loudly.","Congratulate them and decide what to practise next time.","Say nothing and sulk."],best:1,
    think:"B. Winning well and losing well both take character. Saying ‘well done’ to a rival is the mark of a true Courier."}],
  sum:["Darius held an empire together with satraps, the daric, the Royal Road and written records.","The Royal Road, food webs and relief carving are all about LINKS: places, living things and people joined together.","Stage 3 is complete, and the Fragment of the Swift Road is waiting at the relay station."],
  exit:"Finish the sentence:  “This week I learned ______ and I am still wondering ______.”"
 }
};
})();
