# 🏺 THE ROYAL ROAD RACE
## Quest for the Seal of the Kings — A 10-Week Immersive Adventure Through Ancient Persia
### Master Build Brief + Complete Teacher Programme (Years 5–6 · NZ Curriculum · Christian Lens)

---

# 0. HOW TO USE THIS FILE (instructions to the builder AI)

You are the lead creative developer, game designer and educator. This document is the **complete recipe** for a web app + teaching programme. Build it faithfully.

**Rules for the builder:**
1. **Do not summarise or shorten the lesson content in Section 9.** Convert it into a JS data structure (`WEEKS[]`, schema in §3.8) and render it in the Teacher View and the Student Mission View.
2. **Visual quality is a core requirement, not a bonus.** Read §4 before writing any code. If a choice is between "plain and fast" and "alive and beautiful", choose alive and beautiful (while respecting performance rules).
3. Build in the order given in §12. Show a working vertical slice (Hub → Week 1 → Friday Quiz → Podium) before adding the rest.
4. Where the environment forbids something (e.g. no backend, remote images blocked), use the fallbacks stated in §3 and §4.9. Never silently drop a feature; tell the teacher what changed.
5. Everything is for children aged 9–11 in a Christian school in Aotearoa New Zealand. Content must be accurate, respectful of Persian/Iranian people and culture, and age-appropriate (battles are dramatic, never gory).
6. Use NZ English spelling (colour, organise, centre).

**Deliverables**
- A. Public **Adventure App** (student-facing, animated, immersive).
- B. **Teacher View** (PIN-protected toggle): full lesson plans, curriculum links, printable.
- C. **Friday Showdown** live team quiz (QR join, teams, individual podium, season league).
- D. **Asset slots** wired to the image files produced from the separate prompts file (§4.9).

---

# 1. THE VISION

Ten weeks. One journey. **Students are not "studying Persia" — they are racing across it.**

Each class becomes a set of rival **Courier Caravans** hired to recover the ten fragments of the legendary **Seal of the Kings**, scattered along the Royal Road from the mountains of the Zagros to the Gate of All Nations. Every week is a **Stage** of the race and a new era of Persian history, a new place, a new habitat, a new art tradition, and a new Bible story. Monday to Thursday they earn **Darics** (gold coins) and prepare. Friday is the **Showdown**: a live team quiz that decides who wins the Stage and moves their caravan along the map.

**Emotional arc:** wonder → rivalry → setbacks (sandstorms, burned cities, a stolen map) → courage → teamwork → grace (the Shadow Courier) → triumph at the Gate of All Nations.

**Learning promise:** by Week 10 every child can tell the story of Persia from Cyrus to the Sasanians, read a map of the Iranian Plateau, explain how animals suit their habitats and how humans affect them, make art in Persian traditions, and explain — with real Bible-text understanding — how God's story intersects with Persia (Isaiah, Daniel, Ezra, Esther, Nehemiah, Matthew 2, Acts 2).

**Design pillars**
1. **Story first** – every lesson opens with a dramatic "Dispatch".
2. **Choice** – every lesson ends in a "Choose Your Path" with 3 projects.
3. **Rivalry with heart** – teams compete, but cooperative moments (Week 6 Wall, Week 10 finale) matter.
4. **Faith woven in, not bolted on** – see §6.
5. **Beauty** – art-directed, animated, cinematic.

---

# 2. THE STORY WORLD & GAME MECHANICS

## 2.1 Premise (read aloud on Day 1; also the app's opening cinematic)
> *Long ago, the greatest road in the world ran from the sea of the west to the palaces of the east. Kings sent messages along it faster than any horse could gallop alone. But one night, the royal Seal — the Seal of the Kings, which could open any gate and end any war — was shattered into ten fragments by a sandstorm and scattered across the empire. A call has gone out from the Scribe of the King: "Whoever gathers all ten fragments and brings them to the Gate of All Nations will be crowned Master Couriers of the Royal Road." Your caravan has been chosen. The race begins at dawn.*

## 2.2 Characters
| Character | Role | Notes |
|---|---|---|
| **Shirin the Scribe** (girl, ~11) | Student guide / narrator voice | Ink-stained fingers, satchel of scrolls, curious, brave, honest. Delivers each "Dispatch". |
| **Farhad the Caravan Master** | Mentor | Warm, gruff, grey beard, full of road proverbs. Gives "Road Wisdom" tips. |
| **Gandom the camel** | Comic relief mascot | Grumpy, loyal; appears in loading screens, wrong-answer animations, Wed science. ("Gandom" = wheat.) |
| **The Shadow Courier** | Mystery rival | Silver half-mask, black horse. Steals/delays fragments (drives "Setback" events). **Revealed in Week 9 as Zal**, a lonely boy whose Elamite craftsman family lost everything. Week 10: teams vote to forgive him and bring him into the finale (grace arc; Romans 12:20–21; Colossians 3:13). |

## 2.3 Teams (default 6; teacher can set 2–8)
Each team picks a Caravan name on joining. Each has colour + animated crest + battle cry.
| Team | Colour | Symbol |
|---|---|---|
| The Immortals | Royal Blue | Spear & shield (glazed-brick guard style) |
| The Persian Leopards | Amber | Leopard |
| The Simurgh | Emerald | Legendary bird of Persian folklore |
| The Asiatic Cheetahs | Terracotta | Cheetah |
| The Golden Griffins | Violet | Griffin (Persepolis / Oxus-treasure style) |
| The Winged Lions | Crimson | Winged lion |

## 2.4 Currencies & scoring
- **Darics (gold coins)** – earned Mon–Thu by teacher award (see rubric below). Teacher panel: +1/+2/+3 Darics per student or per team with one tap. Individual Darics also count to individual rank.
- **Friday Showdown points** – speed + accuracy (§3.4).
- **Team score** = (sum of members' points) ÷ (number of members). *Averaging keeps teams of unequal size fair.*
- **Stage Result:** teams ranked each Friday. **Caravan Map** advances each team's caravan icon by (Friday team score + Mon–Thu team Darics average).
- **Season League:** cumulative across 10 weeks (persisted). **Individual Podium** weekly + season.
- Daric award guide: +1 effort/on task, +2 quality of thinking, +3 outstanding / helped others / showed Christlike character.

## 2.5 Fate of the Road cards (drawn by teacher via the app each Friday before the quiz)
Keep the race tight and dramatic; effects are modest so no team is crushed.
**Boons:** *Fresh Horses* (+10% next quiz round) · *Friendly Caravan* (skip one wrong-answer penalty) · *Oasis* (+5 Darics team) · *Royal Pass* (double points on one chosen question) · *Tailwind* (first correct answer on the team scores +200).
**Setbacks:** *Sandstorm* (−5 Darics team) · *Broken Wheel* (team's slowest answer scores 0 for one round) · *Bandits* (steal 5 Darics from the leader) · *Flooded River* (first question timer −3 sec for that team) · *Shadow Courier's Trick* (a wrong answer shown as a decoy for that team — teacher reveals as a gag).
**Rule:** Leader gets a setback more often than a boon; last-place team gets a boon more often (weighted draw). Show with a flourish animation (card flips, particle burst).

## 2.6 Weekly Stage Events (special Friday modes — see §3.4)
W1 Charter Day (team creeds) · W2 Camel Charge (speed round) · W3 The Royal Relay (chain questions) · W4 Storm at the Hellespont (3 lives) · W5 For Such a Time as This (final question ×3) · W6 **The Wall of 52 Days** (ALL teams cooperate to build one shared wall) · W7 Bazaar Bargains (wager Darics) · W8 Fire on the Mountain (survival; 3 lives) · W9 Starlight Navigation (pick-your-difficulty) · W10 Gate of All Nations (cumulative, ×2 points, final podium).

## 2.7 Overarching narrative beats
| Wk | Stage title | Story beat |
|---|---|---|
| 1 | The Gates of the Plateau | The Seal shatters; teams sign the Caravan Charter; first fragment in the Zagros. Shadow Courier glimpsed. |
| 2 | The King Who Opened the Gates | Cyrus & Babylon. Second fragment hidden in a clay cylinder. The map is torn — half stolen. |
| 3 | The Royal Road | Relay stations; the Behistun rock. Mudslide blocks the road; Daniel's courage. |
| 4 | Pride Before the Fall | Xerxes' storm-wrecked bridge; the Immortals. Fragment lost at sea, then recovered. |
| 5 | For Such a Time as This | Susa palace intrigue; a royal edict against a people; Esther's courage. |
| 6 | Rebuilding the Walls | Escort exiles home; Nehemiah's wall; whole class cooperates against mockers. |
| 7 | The Marketplace of the World | Bazaar bargains; thieves among the camels; ordinary lives matter. |
| 8 | Fire on the Mountain | Alexander; Persepolis burns; heaviest setback; hope in ashes. |
| 9 | Star-Watchers & Silk | Parthians, Magi; night journey; **Shadow Courier unmasked (Zal).** |
| 10 | The Gate of All Nations | Forgiveness vote; final fragment; Seal assembled; message revealed (Proverbs 2:3–6 — treasure is wisdom); Grand Finale & awards. |

**The Seal's hidden message (revealed Week 10):** *"Seek wisdom as silver and search for it as for hidden treasure."* (Proverbs 2:4). The real prize is wisdom; teacher leads closing reflection.

---

# 3. APP ARCHITECTURE & FEATURES

## 3.1 Reality check on the live quiz (read first)
A single static HTML file **cannot** sync many phones in real time on its own. The Friday Showdown needs a shared-state layer. Implement in this priority order:
1. **If building as a Claude Artifact:** call the Artifact tool's `capabilities` action first; if a shared-state capability (e.g. a shared database) is offered, use it for game/lobby/score state.
2. **Otherwise Firebase Realtime Database** (free Spark plan) or **Supabase Realtime**. Isolate all network calls behind a small `Store` interface (`createGame, joinGame, submitAnswer, onGameChange, writeScores…`) so the backend can be swapped. Provide the exact Firebase config placeholder and a 10-line setup guide for the teacher.
3. **Always include Offline Teacher-Led Mode** (no network): teacher screen runs the quiz; students answer on mini-whiteboards / A-B-C-D cards; teacher taps which teams were correct; app still runs animations, scoring, caravan map and the podium. This guarantees Friday works even when Wi-Fi fails.

## 3.2 Screens — Student/Public
1. **Opening Cinematic** (skippable, ~25 s): the shattering Seal, parallax caravan, title reveal.
2. **The Royal Road Hub:** a full-screen illustrated parchment map; SVG route path; each team's caravan icon positioned by Season progress; 10 Stage markers (locked/unlocked by teacher). Clicking a stage opens the Stage page.
3. **Stage Page (per week):** cinematic header scene (parallax, particles), Shirin's stage briefing, five day-tiles (Rāhina–Rāmere): History · Geography · Science · Art · Showdown.
4. **Mission Page (per lesson):** "The Dispatch" (story hook), "Today's Quest" (learning intention + success criteria in kid language), "Discovery" content cards, **Choose Your Path** (3 big option cards, each opening a project brief + checklist + optional scaffold), "Council Fire" reflection + Christian lens panel with Scripture and question.
5. **Caravan Log:** student reflection page per week (free-text saved locally + prompts).
6. **Animal Card Collection:** collectible wildlife cards unlocked weekly (see §9 science lessons).
7. **Trophy Room:** weekly podiums, season podium, badges.
8. **Join Page:** `?join=PIN` landing, enter PIN + nickname (first name + initial), choose team (animated crest cards, shows team sizes), waiting lobby.

## 3.3 Screens — Teacher
- **PIN gate** (default `PERSIA2026`, changeable; stored hashed in config).
- **Teacher View:** per-lesson full plan (§9 data), NZC links, timings, resources, assessment, print stylesheet (A4, clean). "Copy as text" button.
- **Class Setup:** team count, student roster (optional nicknames), week unlock calendar.
- **Daric Panel:** one-tap awards to teams/students, undo, history.
- **Showdown Console:** pick week & mode → Start Lobby → QR/PIN screen → Start → per-question controls (Next, Reveal, Pause, Skip, Add time) → Draw Fate Card → Podium Ceremony.
- **Data:** results table, export CSV (student, team, week, score, per-question correctness, mapped learning area & concept).
- **Moderation:** rename/kick player, profanity filter on nicknames.

## 3.4 Friday Showdown — detailed spec
**Lobby**
- Host screen shows large **QR code** (library: `qrcodejs` from cdnjs) encoding `{APP_URL}?join={PIN}`, plus the PIN and short URL as text fallback (Chromebooks/older devices that can't scan).
- Live roster appears as players join: each name pops in with a coin-spin animation inside their team's colour lane. Team crests glow brighter as they fill.
- Players choose a team on join (show counts; gently discourage lopsided teams: "The Leopards need you!"); teacher can rebalance by dragging.
- Lobby music/ambience (WebAudio, mutable).

**Question flow**
1. 3-2-1 horn countdown. Question appears with illustrated backdrop (week's FRI image), timer ring.
2. Student device shows 4 large answer buttons — **colour + shape + letter** (accessible).
3. **Points (classic):** correct = `500 + 500 × (timeRemaining / timeLimit)`; wrong = 0. Streak bonus +50 per consecutive correct (max +250).
4. Reveal: correct answer highlights, distribution bars, **Teacher Teaching Moment** (1–2 sentence explanation + Scripture/curriculum tag from data).
5. Between questions: mini leaderboard (top 3 individuals + team bars race). Caravan icons animate along a short strip.
6. Question types: multiple choice (default), true/false, **Boss Question** (×2 points; last 2 per quiz), and week modes below.

**Modes**
- `classic` – as above.
- `relay` (W3) – teams answer in sequence; the correct answer of one player unlocks the next player's question; chain length scored.
- `lives` (W4, W8) – 3 lives per team; wrong = lose a life; last teams standing get bonus.
- `wager` (W7) – before each question, players wager 0/100/250/500 of their points; right = gain, wrong = lose.
- `wall` (W6) – **cooperative**: every correct answer by any player lays a brick on one shared animated wall; goal 52 bricks "in 52 days"; whole class beats the Mockers meter (a time/error pressure bar). Bonus Darics to all if completed.
- `final` (W10) – cumulative, points ×2.
- `starlight` (W9) – before each question choose Easy ★ / Medium ★★ / Hard ★★★ (points ×1 / ×1.5 / ×2).

**Podium Ceremony (must be spectacular)**
1. Lights dim; torches ignite; drumroll (WebAudio).
2. **Team podium:** bars race up; revealed 3rd → 2nd → 1st; winning team's crest rises on the central step; gold coin rain + confetti (`canvas-confetti` from cdnjs); banner unfurls: "Champions of Stage N".
3. **Individual podium:** three steps with student avatar-coins and names; 3rd, 2nd, 1st reveal with camera-shake and fireworks; runner-up list below.
4. Season version in Week 10: "Master Couriers of the Royal Road" with trophy (animated gold daric trophy), per-team crest parade, fragment assembly animation (Seal re-forms, light beam, hidden message appears).
5. "Download certificate" (canvas → PNG) for top 3 and winning team.

## 3.5 State model (suggested)
```
classes/{classId}: { name, teamCount, createdAt, season: { teamTotals, playerTotals } }
games/{pin}: { classId, week, mode, status: lobby|question|reveal|podium, qIndex, qStartAt, timeLimit }
players/{pin}/{pid}: { name, teamId, score, streak, answers:{qIndex:{choice,ms,correct}} }
teams/{pin}/{teamId}: { name, color, memberCount, score }
darics/{classId}: { teamId: n, playerId: n }
```
Auto-delete game data after 30 days. Server time (`serverTimestamp`) for fairness.

## 3.6 Privacy, safety & school policy
- No accounts, no emails, **first name + initial only**, no photos. Teacher can anonymise ("Courier 7").
- No third-party trackers/analytics. Follow NZ Privacy Act 2020 principles; parental/whānau notice template included in §11.
- Profanity filter + teacher moderation; nickname length limit.
- Quiz content is whitelisted from this document only (no AI-generated live content for students).

## 3.7 Accessibility & inclusion
- Colour is never the only signal (shapes + letters). Minimum contrast WCAG AA.
- Toggles: **Reduce motion** (also honour `prefers-reduced-motion`), **Dyslexia-friendly font** (Lexend/OpenDyslexic fallback), **Text size**, **Read-aloud** (SpeechSynthesis) on all story text and questions, **Sound on/off** (default off outside Showdown).
- Keyboard navigable; focus rings; ARIA labels; screen-reader-friendly reveal text.
- ESOL support: glossary pop-ups on key words; simple-language toggle ("Easy read" versions of each Dispatch).
- Optional **te reo Māori layer**: day names Rāhina (Mon), Rātū (Tue), Rāapa (Wed), Rāpare (Thu), Rāmere (Fri); greetings, "Kia kaha!"; toggle on/off.

## 3.8 Content data schema (convert §9 into this)
```js
WEEKS = [{
  n: 1, title: "...", era: "...", place: "...", fragment: "...",
  story: { briefing: "...", shadowCourier: "...", event: "..." },
  materials: ["..."],
  days: {
    mon: lesson, tue: lesson, wed: lesson, thu: lesson,
    fri: { mode: "classic", fateEnabled: true, questions:[{q, options:[..4], answer:0-3, boss:false, explain:"...", tag:"SS-CC"}], paths:[A,B,C] }
  }
}]
lesson = { title, subject, nzc:[codes], li, sc:[..], dispatch, discovery, paths:[{id:"A",name,brief,checklist:[..],scaffold:".."}],
           councilFire:{ reflect, scripture:[refs], question, response }, assess, nzConnection, animals?:[...] }
```

---

# 4. VISUAL & EXPERIENCE DESIGN — "MASTERPIECE" SPEC

## 4.1 Art direction
Think **premium animated-film concept art meets illuminated manuscript meets Persepolis relief**. Warm, luminous, jewel-toned, never flat. Rich layered parallax scenes, gold foil UI, glowing particles, tactile parchment and carved stone.

**Palette tokens (CSS variables)**
```
--lapis:#1E3A8A;  --lapis-deep:#0F1D4A;  --turquoise:#14B8A6;  --saffron:#F59E0B;
--gold:#E8B84A;   --terracotta:#C2593A;  --plum:#4A1D5C;       --sand:#F4E3C1;
--parchment:#F1E1BE; --ink:#2B1B10;     --night:#0B1024;       --ember:#FF7A2F;
--emerald:#0E9F6E; --crimson:#B0213B;   --violet:#7C3AED;
```
**Typography (Google Fonts):** Display `Cinzel Decorative` (titles, stage names); Headings `Cinzel`; Body `Nunito` (kid-readable); Accent script `Amiri` for flourishes; Dyslexia mode `Lexend`. Always provide fallback stacks.

**UI materials:** gold-foil borders with subtle shimmer sweep; parchment cards with torn edges and soft inner shadow; carved-stone tablets for headers; lapis-and-gold tile pattern bands; wax-seal buttons that "press" with a stamp animation.

## 4.2 Hero scenes (one per Stage) — layered parallax
Each Stage page has 5–7 depth layers (sky → far mountains → mid landmarks → foreground dunes/rocks → particles). Pointer/gyro/scroll-driven parallax (GSAP ScrollTrigger from cdnjs; CSS fallback). Each Stage has its **own ambient particle system**:
| Wk | Ambient FX |
|---|---|
| 1 | Dawn mist, drifting eagles, golden dust motes |
| 2 | Garden petals + water shimmer, camel silhouettes crossing |
| 3 | Road dust, galloping rider silhouettes, relay torches |
| 4 | Storm clouds, lightning flashes, rain on sea, floating planks |
| 5 | Palace lantern glow, floating rose petals, curtain sway |
| 6 | Dust and mortar, stone-block assembly animation, birds over walls |
| 7 | Market bunting sway, spice-colour smoke wisps, bartering coin sparkles |
| 8 | **Embers rising, smoke, orange glow, falling ash** (reduced intensity on motion-reduce) |
| 9 | Dense twinkling stars, shooting star, aurora-like shimmer, caravan lanterns |
| 10 | Gold rays through the great gate, confetti-like glints, flags |

## 4.3 Signature animated moments (must build)
1. **The Shattering Seal** (opening): gold seal cracks, ten fragments fly to map positions and glow.
2. **Royal Road Route Drawing:** SVG path draws itself (`stroke-dashoffset`); caravan icons ride along via `getPointAtLength`, bobbing; dust trail particles.
3. **Gate Doors Transition:** between Hub ↔ Stage, two giant carved doors (with winged-bull relief) swing open revealing the scene, with a stone-rumble sound.
4. **Scroll Unroll:** story text appears as a papyrus scroll unrolling with ink-reveal (word-by-word fade, optional read-aloud highlight).
5. **Wax-Seal Stamp:** completing a mission stamps the page with a team-coloured seal (screen thump, particles).
6. **Daric Rain:** awarding Darics drops spinning gold coins into the team's treasure chest with a counter roll-up.
7. **Fate Card Flip:** 3D card flip, glow (boon: gold/turquoise sparkle; setback: dark smoke/lightning).
8. **Quiz Timer Ring:** burning fuse around the question that shortens as time passes.
9. **Wall of 52 Days (W6):** bricks drop with dust puffs; mockers' shadows loom; wall glows when complete.
10. **Podium Ceremony:** see §3.4 — the showpiece.
11. **Persepolis Rise (Week 10 / hub easter egg):** columns grow from the ground one by one with golden light, forming the Apadana, then the Gate.
12. **Animal Card Reveal:** foil-holo shine on collectible animal cards (tilt with pointer).
13. **Caravan Walk Cycle:** simple sprite/SVG walk cycle for camels (Gandom) on loading screens.

## 4.4 Micro-interactions
Hover/tap ripples of gold light; buttons wobble like coins; progress ring fill; sparkles on correct answers; Gandom's sad head-shake on wrong answers (gentle humour); streak flames; consistent sound cues (tiny, optional).

## 4.5 Sound (all synthesised with WebAudio so no files)
Soft ambient wind pad per Stage (very low), drum hits for countdown, coin chime for Darics, stone rumble for gates, horn fanfare for podium, crackle for W8. **Default muted** with a prominent 🔊 toggle; host console can enable.

## 4.6 Performance & technical rules
- Target 60 fps on school Chromebooks/iPads: cap particles (mobile ≤ 80, desktop ≤ 200), use `requestAnimationFrame`, pause when tab hidden, canvas for particles, CSS transforms/opacity only for animation, `will-change` sparingly.
- Respect `prefers-reduced-motion` (replace parallax/particles with static art + gentle fades).
- Lazy-load images per Stage; compress to WebP.
- Responsive: phone (portrait) for quiz play; 1366×768 laptops; 1080p classroom projector (host screens must be legible from the back of the room: min 28px body in host view, 64px+ for questions).
- No localStorage dependency for correctness; wrap storage in try/catch.

## 4.7 Layout principles
Full-bleed scenes; content on parchment/stone cards that float above scenes; large tap targets (≥ 48px); strong hierarchy; generous spacing; every screen has at least one moving or glowing element.

## 4.8 "Procedural first" rule (no-images fallback)
Build gorgeous **SVG/CSS procedural scenes** (gradient skies, layered mountain silhouettes, silhouetted camels, column silhouettes, star fields) so the app already looks stunning *before* AI images are added. Real images then slot in as upgraded layers.

## 4.9 Image asset system
- All AI images are generated separately from `Persia_ChatGPT_Image_Prompts.md`. Each has an **ID** (e.g. `W03-HERO`, `TEAM-02`, `ANIMAL-07`).
- Reference images via an `ASSETS` map `{ "W03-HERO": "data:image/webp;base64,…" | "assets/W03-HERO.webp" }`. Missing key → fallback to procedural art.
- **If the page is published as a Claude Artifact:** remote images are blocked; images must be **embedded as data URIs** (WebP, long edge ≤ 1280 px, ≤ 120 KB each, total file < 16 MB). Provide a tiny helper script/instructions for the teacher to convert images to WebP base64 and paste into `ASSETS`.
- **If hosted on a school website / Netlify / GitHub Pages:** use relative file paths.
- Provide a drag-and-drop "Asset Loader" panel in Teacher View: teacher drops PNG/JPG/WebP files named by ID; the app reads them (FileReader) and uses them for the session; optional "Export assets bundle".

## 4.10 Libraries (cdnjs preferred)
GSAP + ScrollTrigger · canvas-confetti · qrcodejs · (optional) Howler not needed · Tailwind optional. Pin exact versions.

---

# 5. NZ CURRICULUM FRAMEWORK (Years 5–6, Level 2–3, working mainly at Level 3)

> **Teacher note:** Links below use *The New Zealand Curriculum* (2007) Level 3 achievement objectives (AOs) as the stable base, paraphrased in student-friendly terms. The Ministry is rolling out refreshed learning-area documents; **before printing for ERO or moderation, confirm the exact wording and phase against Tāhūrangi (tahurangi.education.govt.nz) and TKI (nzcurriculum.tki.org.nz).** Social Sciences also draws on the *Aotearoa New Zealand's Histories* **Understand–Know–Do** framework (Understand big ideas, Know contexts, Do inquiry practices).

## 5.1 Code key (used in every lesson)
**Social Sciences (Level 3 big ideas)**
- **SS-CC** *Continuity & Change* — people remember and record the past in different ways; events and decisions have causes and consequences; perspectives on events differ.
- **SS-PE** *Place & Environment* — people interpret and represent places and environments; people's interactions with places cause changes; why people settle where they do.
- **SS-ICO** *Identity, Culture & Organisation* — cultural practices vary but meet shared needs; how groups organise and make decisions; how culture and heritage are passed on.
- **SS-EW** *The Economic World* — trade, specialisation, exchange and how resources are used.
- **SS-DO** *Do (inquiry skills)* — ask questions, find & evaluate sources, consider perspectives, communicate findings.

**Science (Level 3)**
- **SC-LW-Eco** *Living World – Ecology:* explain how living things are suited to their habitat and respond to environmental change, natural and human-induced.
- **SC-LW-LP** *Living World – Life Processes:* all living things have requirements to stay alive.
- **SC-NoS-U** *Nature of Science – Understanding about Science:* science explains the world and knowledge changes with evidence.
- **SC-NoS-I** *Investigating in Science:* ask questions, find evidence, carry out fair tests, explain.
- **SC-NoS-C** *Communicating in Science:* use scientific vocabulary, diagrams and conventions; question science texts.
- **SC-NoS-P** *Participating & Contributing:* use science to make decisions about issues (e.g. conservation).

**The Arts – Visual Arts (Level 3)**
- **VA-UC** *Understanding Visual Arts in Context:* investigate the purpose and context of art from past and present cultures.
- **VA-PK** *Developing Practical Knowledge:* explore and use art-making conventions, processes and procedures.
- **VA-DI** *Developing Ideas:* develop visual ideas from observation, imagination and the study of artists' work.
- **VA-CI** *Communicating & Interpreting:* share and interpret ideas, feelings and stories in own and others' work.

**Cross-curricular:** **EN-S** Speaking/Presenting · **EN-W** Writing · **EN-R** Reading (e.g. Nehemiah, informational texts) · **MA-G** Geometry & measurement (symmetry, scale, distance) · **MA-S** Statistics (graphs, data) · **TE** Technology (designing & making) · **HPE** teamwork/relationships · **RE** school Christian Character/Bible programme.

**Key Competencies:** Thinking · Using language, symbols & texts · Managing self · Relating to others · Participating & contributing.
**Values:** Excellence · Innovation, inquiry & curiosity · Diversity · Equity · Community & participation · Ecological sustainability · Integrity · Respect.

## 5.2 Te Tiriti & local curriculum connections (ERO-visible)
Each week includes a **"Hononga Aotearoa" (NZ connection)** — comparing Persian settlements, animals, art and trade with NZ equivalents (e.g. pā and kāinga site choices; ara/trails and pounamu trade; kākāpō/takahē conservation; kaitiakitanga; local habitats; hapū/iwi stories). **Engage local iwi/hapū or your Māori Education lead** for local content; don't present pan-Māori generalisations as local knowledge. Earthquake/disaster content (Wk 8) must be handled sensitively as whānau may have lived experience.

# 6. THE CHRISTIAN LENS — "SEE · WONDER · WEIGH · RESPOND"

The aim is **real engagement with Scripture as history, story and truth about God**, not decorative verses.

**Each lesson's Council Fire (10 min) follows 4 moves:**
1. **SEE** – read/hear the biblical text (kid-friendly paraphrase + reference; read from your Bible translation).
2. **WONDER** – what does this text show us about God, people, creation, justice?
3. **WEIGH** – connect to the lesson's evidence (archaeology, geography, science, art). Where do sources agree/differ? (Models faithful, honest inquiry.)
4. **RESPOND** – one concrete action/prayer/commitment (journal, prayer, class decision).

**Anchor themes across the term:** God is Lord of all nations and history (Isa 45; Acts 17:26) · God's providence working through ordinary & hidden events (Esther) · courage and integrity under pressure (Daniel) · prayer plus action (Nehemiah) · pride and humility (Prov 16:18) · stewardship of creation (Gen 1–2; Ps 104) · beauty and craftsmanship as worship (Exod 31, 35) · the nations drawn to Christ (Matt 2; Acts 2:9; Rev 7:9) · kingdoms rise and fall but God's kingdom endures (Dan 2).

**Guardrails (important):**
- Treat the Bible as a **historical source alongside** archaeology and other writings — be honest about debates (e.g. the identity of "Darius the Mede"; interpretive differences on Daniel's visions) and say "Christians read this in different ways".
- Respect Iranian/Persian people today and their faiths. Describe Zoroastrianism and Islam accurately and respectfully; never mock. Some students may be Iranian-NZ or from Muslim/other backgrounds.
- Don't claim archaeology "proves" the Bible; say it "illuminates" or "is consistent with" where true. The Cyrus Cylinder does not mention Jerusalem or Isaiah, but shows the **policy** of returning peoples and restoring temples that Ezra 1 describes.
- The Magi: the Bible says *Magi from the east*; it doesn't say three kings or give names. Don't teach tradition as text.
- Pray for Iranians today (Wk 10) with compassion, avoiding political commentary.

---

# 7. LESSON STRUCTURE (60 minutes, every Mon–Thu lesson)
| Time | Phase | Purpose |
|---|---|---|
| 0–10 | **The Dispatch** | Story hook + retrieval of last lesson + share LI/SC. Dramatic, interactive, immediate. |
| 10–25 | **Discovery** | Teacher-led input, sources, modelling, short guided task. |
| 25–50 | **Choose Your Path** | Students choose **A / B / C** project to show & embed learning. (25 min) |
| 50–60 | **Council Fire** | Share, self-assess vs success criteria, Christian lens (See · Wonder · Weigh · Respond), award Darics. |

**Friday (60 min):** 0–8 Fate card + lobby/QR join (teams assemble) · 8–38 Showdown (~12–14 Qs) · 38–48 Teaching moments / review misconceptions · 48–60 **Victory Lap** (3 paths, below) + podium if not already shown.
**Friday Victory Lap (3 paths, every week):** **A** *Caravan Log* (reflect: what I now know, what's still a mystery, my Faith Thought) · **B** *Question-Maker* (write 2 quiz questions with wrong-answer decoys for next week's Showdown bank) · **C** *Teach-Back Comic/Poster* (explain the week's big idea to a younger child).

# 8. TEN-WEEK OVERVIEW

| Wk | Stage · Era | **Mon** History | **Tue** Geography (settlements & cities) | **Wed** Science (animal communities & habitats) | **Thu** Art | Bible threads |
|---|---|---|---|---|---|---|
| 1 | The Gates of the Plateau · up to c. 550 BC | Before the Empire: Elam, Medes, Persians | The Great Plateau: reading the land | What is a habitat? Zagros mountain community | Pattern & symmetry: rosettes & lotus; team banners | Gen 10; Acts 17:26; Ps 104; Exod 31 |
| 2 | Cyrus the Great · 559–530 BC | Cyrus rises to Babylon | Pasargadae, Ecbatana & Babylon: royal cities & gardens | Steppe/grassland community; Cyrus's camel trick | Clay tablets & cylinder seals | Isa 44–45; Ezra 1; Gen 2; Job 39; Hab 2 |
| 3 | The Royal Road · 522–486 BC | Darius organises an empire | The Royal Road & settlements along it | Predators & the food web: lions/leopards | Relief carving: Apadana procession | Ezra 5–6; Dan 6; Isa 40; Phil 2 |
| 4 | Pride Before the Fall · 490–479 BC | Marathon, Thermopylae, Salamis: whose story? | Straits, harbours & chokepoints; empire scale | Desert habitat adaptations (Kavir/Lut) | Glazed-brick Immortals frieze (printmaking) | Prov 16; Mark 4; Job 38; Eph 6 |
| 5 | For Such a Time as This · c. 483–473 BC | Queen Esther of Susa | Susa & river-valley cities; the "tell" | Wetlands & Lake Urmia | Gold & jewel: rhyton, armlet, banquet scene | Esther; Gen 2:10–14; Ps 104 |
| 6 | Rebuilding the Walls · 458–432 BC | Ezra, Nehemiah & the return | Walled hill city: Jerusalem & the Return route | Habitat restoration & recovery | Gate of All Nations: architecture & collaborative build | Neh 1–6; Ezra 7; Isa 58; Rom 8 |
| 7 | Marketplace of the World · 5th c. BC | Everyday lives (tablets, women & workers) | Trade routes, bazaars & caravan settlements | Working animals: camels, horses & care | Woven worlds: carpets & textiles | Jer 29; Prov 11; Prov 12:10; Gen 24 |
| 8 | Fire on the Mountain · 334–330 BC | The fall: Alexander & Darius III | Settlements destroyed & rebuilt | Extinction, endangerment & conservation | Light & shadow: fire, ruin & hope | Dan 2, 8; Ps 46; Isa 61; Gen 1–2 |
| 9 | Star-Watchers & Silk · 247 BC–651 AD | Parthians & Sasanians; Persia rises again | Silk Road cities, Ctesiphon & the round city | Gulf & Caspian marine/coastal communities | Night sky painting: journey of the Magi | Matt 2; Acts 2:9; Num 24:17; Isa 60 |
| 10 | The Gate of All Nations · legacy & today | What Persia gave the world | Persia → Iran: cities then & now | Design a Wild Persia sanctuary | The Great Exhibition | Gen 12:3; Rev 7:9; Ps 78; 1 Pet 4:10 |

# 8B. ASSESSMENT, DIFFERENTIATION & ERO-READINESS

**Learning-progress rubric (use for every Path; 4 levels with adventure names)**
| Level | Name | Descriptor (generic) |
|---|---|---|
| 1 | **Scout** | Names/ identifies key ideas with support; some detail. |
| 2 | **Courier** | Describes ideas accurately in own words; uses some vocabulary/evidence. |
| 3 | **Captain** | Explains causes/reasons with evidence; uses subject vocabulary precisely; makes connections. |
| 4 | **Master of the Road** | Evaluates, compares perspectives, applies learning to new contexts (e.g. NZ), creative insight. |

**Formative assessment evidence per week:** Dispatch retrieval (oral/mini-whiteboards) · Path product (photographed) · Council Fire reflection (Caravan Log) · Friday Showdown data (per concept tag) · teacher observation notes. **Summative:** Week 5 mid-term check (cumulative Showdown mode) · Week 10 Exhibition + Grand Finale quiz + portfolio.

**Differentiation (every Path has three entry points):** *Supported* (sentence starters, word bank, partially completed template, partner) · *Standard* · *Extended* (add a perspective, a comparison, a persuasive/analytical layer, a "so what for NZ?"). ESOL: visuals, glossary, oral rehearsal, bilingual labels welcome. Learning support: read-aloud in app, chunked checklists, choice of response mode (draw / speak / record / write). Gifted: independent inquiry "Cartographer's Challenge" questions.

**ERO-friendly evidence the programme gives you:** explicit learning intentions & success criteria · curriculum links by learning area · teaching as inquiry hooks ("What did students find hard? What next?") · student agency & choice · assessment for learning · cultural responsiveness & Te Tiriti-informed practice · integrated, authentic contexts · cohesive pastoral/character integration (Christian Character) · whānau engagement (Week 10 exhibition) · data export.

**Teaching-as-inquiry prompt (add to weekly teacher reflection):** *What did my students most need this week? What did the Showdown data show? What will I change next week?*

---

# 9. THE COMPLETE 10-WEEK PROGRAMME (FULL LESSON PLANS)

---
## ⭐ STAGE 1 — THE GATES OF THE PLATEAU
**Era:** up to c. 550 BC · **Place:** Zagros Mountains, Ecbatana, Susa · **Fragment 1:** *The Fragment of Beginnings* · **Friday event:** Charter Day
**Briefing (Shirin):** "The Seal has shattered. Before we can find it, we must understand the land and peoples who made the first paths of Persia."
**Shadow Courier:** a silver glint on a ridge; hoofprints that stop at a cliff.
**Materials:** artefact envelopes (replica tablets, shards), timeline strip, large map of Iran/Middle East, atlases, salt dough or papier-mâché, school-grounds quadrats/hula hoops, foil, paint (lapis, gold, turquoise), foam printing sheets, paper for banners.

### MON · W1 — Before the Empire: Elamites, Medes and Persians (History)
- **NZC:** SS-CC, SS-DO; EN-R, EN-S
- **LI:** We are learning to describe who lived in ancient Persia and how we know about them. **SC:** I can name three peoples (Elamites, Medes, Persians) · I can explain what a source is and give an example · I can say why we use more than one source.
- **Dispatch (10):** Each team receives a sealed "Dig Envelope" (replica tablet fragment, pottery shard, a copied map). Teams guess: *Who made this? How old?* Shirin's scroll introduces the Race. Share LI/SC.
- **Discovery (15):** Timeline strip: Elam & Susa (one of the world's earliest cities, c. 4000–2700 BC) → Medes (capital Ecbatana) → Persians (Cyrus rises c. 559 BC). Sources: archaeology (objects), written records (cuneiform), Greek historians (Herodotus; not neutral), the Bible (an ancient text that mentions Elam, Persia). Quick lesson on **Persia vs Iran** (country asked the world to use "Iran" in 1935; both names matter).
- **Paths (25):** **A – Archaeologist's Field Report:** examine an artefact; fill "What I see · What I think · What I still wonder · Where could I check?" **B – Timeline Scroll:** illustrate a 2–3 m class timeline, each student a segment with date, caption, picture. **C – Voice of the Plateau (radio/podcast):** 90-second news bulletin announcing the rise of Persians among the Medes, with a "source" credit.
- **Council Fire – Christian lens:** **See:** Gen 10:22 (Elam named among Shem's descendants); Acts 17:26–27. **Wonder:** What does it mean that God set the times and places of nations? **Weigh:** How does the Bible fit with archaeology as a source? **Respond:** write one sentence thanking God for the people groups of the world and one thing you'll do to treat other peoples' stories carefully.
- **Assess:** Source-use sentence ("I know X because of source Y"). **NZ connection:** how do NZ people record the past (whakapapa, pūrākau, photographs, archives)?

### TUE · W1 — The Great Plateau: Reading the Land (Geography)
- **NZC:** SS-PE, SS-DO; MA-G
- **LI:** We are learning to locate Persia and explain why people settled where they did. **SC:** I can find the Zagros, Alborz, Caspian Sea, Persian Gulf and deserts on a map · I can use a compass and scale · I can give two reasons people settle in a place.
- **Dispatch (10):** Giant floor map: teams place "caravan tokens" using compass directions ("Move NE to the mountains"). Link to yesterday's artefacts: *where might they have been found?*
- **Discovery (15):** Iranian Plateau: high, ringed by mountains; Zagros (west), Alborz (north), deserts (Dasht-e Kavir, Dasht-e Lut), Caspian coast, Persian Gulf coast. Rivers & **qanats** (underground water tunnels; introduced). Site selection: water, soil, defence, trade. Early settlements: foothill villages → Susa. Introduce *settlement hierarchy*: farm/hamlet/village/town/city.
- **Paths (25):** **A – Relief Map:** salt dough/papier-mâché plateau with labelled ranges, deserts, seas. **B – Journey Map:** hand-drawn or digital map with title, compass rose, scale bar, key, route of the race, 8 labelled places. **C – "Why Here?" Site Selection:** given a map card with resources and hazards, choose the best village site, justify with 3 reasons; compare to how people chose pā/kāinga sites in your rohe (use local guidance).
- **Council Fire:** **See:** Acts 17:26–27; Psalm 24:1. **Wonder:** If the earth is the Lord's, how should we treat the places where we live? **Weigh:** Compare what you learned about settling with the Acts text — "exact places." **Respond:** "Place thanks" — name one feature of your local landscape you'll care for this term.
- **Assess:** Map conventions checklist; reasoning in C. **NZ connection:** NZ's mountain ranges & settlement; compare Zagros vs Southern Alps.

### WED · W1 — What Is a Habitat? The Zagros Mountain Community (Science)
- **NZC:** SC-LW-Eco, SC-LW-LP, SC-NoS-C
- **LI:** We are learning to explain what a habitat and a community are and how animals suit mountain habitats. **SC:** I can define habitat, population, community, ecosystem · I can match 3 Zagros animals to adaptations · I can record observations clearly.
- **Dispatch (10):** "Mystery Footprints" on the floor/cards: tracks of Persian leopard, ibex, bear, golden eagle. Whose are they? (Gandom the camel is wrong every time.)
- **Discovery (15):** Vocabulary: habitat, population, community, ecosystem, adaptation. Zagros community: **bezoar ibex (wild goat)**, **Persian (Caucasian) leopard**, **brown bear**, **golden eagle**, oak woodland, grasses. Adaptations: ibex hooves/climbing, thick fur, leopard camouflage, eagle eyesight. Intro **Animal Cards** (collect weekly).
- **Paths (25):** **A – Animal Fact-File & Adaptation Diagram** (labelled, 3 adaptations, why it helps). **B – Mountain Habitat Diorama** with labelled community and abiotic factors (rock, water, temperature). **C – Habitat Detectives (outdoors):** quadrat survey of school grounds → sketch + tally → "Which animals could live here and why?" compare to Zagros.
- **Council Fire:** **See:** Ps 104:16–18 (high mountains for wild goats, rocks for hyraxes); Gen 1:24–25. **Wonder:** What does it say about God that He makes so many kinds of creatures? **Weigh:** What do you see in the adaptations that fits this? **Respond:** write a two-line "Creation Wonder" note.
- **Assess:** Vocabulary use; accuracy of adaptation-habitat link. **NZ connection:** compare Zagros ibex with NZ tahr (introduced) – discuss why introduced species matter (seed for W6/W8).

### THU · W1 — Pattern, Power & Symmetry: Rosettes, Lotus & Team Banners (Art)
- **NZC:** VA-UC, VA-PK, VA-DI; MA-G
- **LI:** We are learning to use symmetry and repeated pattern as Persian artists did. **SC:** I can create a radial (rosette) pattern · I can repeat a motif in a border · I can explain why Persian palaces used patterns.
- **Dispatch (10):** Show/describe Persepolis & Achaemenid rosettes, lotus-and-bud borders. Folding challenge: fold-and-cut paper to find symmetry lines.
- **Discovery (15):** Teach radial symmetry & reflection; positive/negative shape; limited palette (lapis, turquoise, gold). Why patterns? Order, beauty, honour to the king; stone carvers' craft.
- **Paths (25):** **A – Golden Rosette:** compass/protractor-guided radial design in gold paint on lapis background. **B – Lotus Frieze:** foam-print border (repeat 6×) with rhythm. **C – Team Banner & Crest:** design your Caravan crest using symmetrical motifs + animal emblem (this becomes the team's identity for 10 weeks).
- **Council Fire:** **See:** Exod 31:1–5 (Bezalel filled with God's Spirit for skilled craftsmanship). **Wonder:** Is making beautiful things "spiritual"? **Weigh:** Persian carvers served kings; Bezalel's craft served God's worship — what's the difference? **Respond:** thank God for one artistic skill you have or admire.
- **Assess:** Symmetry/repeat accuracy; artist's statement (1–2 lines). **NZ connection:** compare with kowhaiwhai/tukutuku pattern ideas (invite local artist/Māori Ed lead; avoid imitating sacred designs).

### FRI · W1 — SHOWDOWN: Charter Day (mode: classic)
*Teams are formed; each team writes a **Caravan Creed** (one sentence about how they will race with integrity) before the quiz.*
**Questions** (✔ = correct)
1. Which mountain range runs through western Iran and the heart of ancient Persia? A) Southern Alps B) **Zagros ✔** C) Rockies D) Himalaya
2. The ancient people who lived at Susa were the… A) Vikings B) **Elamites ✔** C) Romans D) Mongols
3. The capital of the Medes was… A) **Ecbatana ✔** B) Rome C) Athens D) Memphis
4. A scientist who studies objects dug from the ground is an… A) astronomer B) **archaeologist ✔** C) meteorologist D) chemist
5. A habitat is… A) a type of tool B) **the natural home of a living thing ✔** C) a kind of map D) a desert only
6. Which animal lives in the Zagros mountains? A) Penguin B) Kākāpō C) **Bezoar ibex (wild goat) ✔** D) Walrus
7. In 1935 the country asked the world to call it… A) Persia only B) **Iran ✔** C) Babylon D) Elam
8. A rosette is… A) a weapon B) **a flower-shaped round pattern ✔** C) a river D) a tent
9. Acts 17:26 says God determined the nations' times and… A) **the exact places where they live ✔** B) the best food C) the colour of rivers D) the number of kings
10. **BOSS (×2):** Why do historians compare more than one source? A) To make lessons longer B) **To check bias and see different perspectives ✔** C) Because one source is never allowed D) Because maps are boring
11. A qanat is… A) **an underground water channel ✔** B) a type of camel C) a royal robe D) a mountain
12. **BOSS (×2):** Which is the best reason to build a village near a river? A) Rivers are pretty B) **Water for drinking, crops and travel ✔** C) Kings like boats D) Mountains are loud
**Teaching moments:** Q3, Q7, Q10 (key misconceptions: Persia vs Iran, bias).

---
## ⭐ STAGE 2 — THE KING WHO OPENED THE GATES (CYRUS THE GREAT)
**Era:** 559–530 BC · **Place:** Anshan, Pasargadae, Ecbatana, Babylon · **Fragment 2:** *Fragment of the Open Gate* · **Event:** Camel Charge (speed round)
**Briefing:** "The second fragment lies in the tomb-city of Cyrus. But the Shadow Courier has torn our map in half!" (Teams "unlock" the missing half by Friday.)
**Materials:** Cyrus Cylinder image, air-dry clay/plasticine, cuneiform alphabet strips, wooden skewers/pencils, calligraphy pens/parchment, soap or clay for seals, grassland photos, quadrat squares, coloured paper "moths", fair-test kit.

### MON · W2 — Cyrus Rises: From Anshan to the Gates of Babylon (History)
- **NZC:** SS-CC, SS-DO; EN-W, EN-S
- **LI:** We are learning to explain how Cyrus built an empire and why people remembered him as fair. **SC:** I can put Cyrus's key events in order (Media 550, Lydia ~546, Babylon 539 BC) · I can tell legend from evidence · I can give two perspectives on Cyrus.
- **Dispatch (10):** **Rumour Mill:** whisper the legend of baby Cyrus (Herodotus's tale of the king's dream & the shepherd's family). Sort cards **Legend / Possible fact / Fact**.
- **Discovery (15):** Cyrus II of Anshan defeats Astyages of Media (~550 BC), Croesus of Lydia (~546), enters Babylon (539 BC). **Cyrus Cylinder** (clay, British Museum): Cyrus presents himself as restoring temples and returning peoples/gods' images to their homes. Greek authors (Herodotus, Xenophon) praise him; Babylonian & biblical sources add perspectives. Qualities of a leader: power vs justice.
- **Paths (25):** **A – Front Page:** newspaper "BABYLON FALLS WITHOUT A STORM" (headline, 2 columns, picture, source box). **B – Courtroom: Was Cyrus Great?** prepare prosecution/defence statements with evidence; mini-hearing. **C – Storyboard/Comic:** Cyrus's rise in 8 frames with a label on each: *Legend / Evidence*.
- **Council Fire:** **See:** Isa 44:28–45:4; Ezra 1:1–4; Prov 21:1. **Wonder:** What does it say about God that He named Cyrus ahead of time and "stirred" a foreign king's heart? **Weigh:** The Cylinder shows Cyrus's own policy; Ezra says God moved him. Can both be true? **Respond:** pray for leaders (1 Tim 2:1–2): name one leader you'll pray for.
- **Assess:** Evidence-based claim ("Cyrus was fair because…"). **NZ connection:** how do NZ leaders respond to peoples whose land they governed? (keep age-appropriate; link to Treaty of Waitangi basics if class has studied.)

### TUE · W2 — Pasargadae, Ecbatana & Babylon: Royal Cities & Gardens (Geography)
- **NZC:** SS-PE, SS-ICO; MA-G
- **LI:** We are learning to explain why capital cities were built where they were and what makes a city a capital. **SC:** I can describe 3 functions of a city (government, trade, worship) · I can explain the site of Pasargadae/Ecbatana/Babylon · I can plan a capital with zones.
- **Dispatch (10):** "Where would YOU put the capital?" – teams place a pin on a blank map of NZ and justify; then compare Wellington's location reasons.
- **Discovery (15):** **Pasargadae** (plain of Fars, Cyrus's palaces, tomb, the four-part **Persian garden** with water channels), **Ecbatana** (cooler summer capital beneath Mt Alvand), **Babylon** (river city, Ishtar Gate, canals). Capital city = centre of government. Site (exact spot) vs situation (location in relation to others). The word **paradise** comes from the Persian word for a walled garden.
- **Paths (25):** **A – Capital City Plan:** bird's-eye plan with zones (palace, market, homes, gardens, defence) + key. **B – Compare Three Cities:** table + Venn comparing Pasargadae, Babylon and an NZ city. **C – Persian Garden Model:** 3D or drawn four-part garden with water channels, trees, shade; label purpose.
- **Council Fire:** **See:** Gen 2:8–15 (garden, rivers); Rev 22:1–2 (river & tree in the city). **Wonder:** Why do humans love gardens and cities together? **Weigh:** Persians made "paradise" gardens; Eden is God's garden. **Respond:** list one way you can help your school grounds feel more like a garden.
- **Assess:** Functions vocabulary; reasoned site selection.

### WED · W2 — Cyrus's Camel Secret & the Grassland Community (Science)
- **NZC:** SC-LW-Eco, SC-NoS-I, SC-NoS-C
- **LI:** We are learning to explain how grassland animals are suited to open habitats and to run a fair test. **SC:** I can name producers, consumers, decomposers · I can explain two adaptations (camouflage/speed) · I can keep one variable the same in a fair test.
- **Dispatch (10):** Tell Herodotus's story: Cyrus placed camels at the front of his army against Lydian cavalry; the horses were unsettled by the camels' smell. *What does this tell us about animal senses?* (Sniff-test mystery bags.)
- **Discovery (15):** Steppe/grassland community: grasses (producers), **Persian onager**, **goitered gazelle**, **Asiatic cheetah**, insects, vultures, decomposers. Camouflage and speed. Fair testing (change one, measure one, keep the rest same).
- **Paths (25):** **A – Camouflage Fair Test:** scatter coloured paper "moths" on grass/mat; classmates "predators" collect in 20 sec; record, graph, explain. **B – Food-Chain Mobile** (grassland chains, label producer/consumer/decomposer). **C – Predator–Prey Card Game Design:** make 8 cards with adaptation strengths and a rule set.
- **Council Fire:** **See:** Job 39:5–8 (God made the wild donkey free); Matt 6:26. **Wonder:** Why does God care for animals people can't use or tame? **Weigh:** How do adaptations show design and care? **Respond:** note one wild creature you will observe respectfully this week.
- **Assess:** Fair test planning; vocabulary. **NZ connection:** NZ tussock grasslands & who lives there (skinks, kea, falcons).

### THU · W2 — Writing in Clay: Cuneiform & Cylinder Seals (Art)
- **NZC:** VA-UC, VA-PK, VA-CI; EN-W
- **LI:** We are learning to use impressed and relief techniques to make writing-art in clay. **SC:** I can make a clay tablet with wedge marks · I can roll a seal to make a repeated print · I can explain what clay writing was used for.
- **Dispatch (10):** Hold (replica) tablets; try a mini cuneiform "name code" with wedge tools. Show the Cyrus Cylinder image.
- **Discovery (15):** Clay as paper of the ancient world; cuneiform = wedge-shaped; seals show identity/ownership. Demonstrate pressing, smoothing, scoring, rolling.
- **Paths (25):** **A – Clay Tablet:** your name + a royal "decree of kindness" in cuneiform-style marks. **B – Cylinder Seal:** carve a design into clay/foam roller; roll prints on paper; create a sequence. **C – Illuminated Decree:** calligraphy scroll with decorative border announcing a kind law for your caravan.
- **Council Fire:** **See:** Hab 2:2 (write the vision plainly on tablets); Ezra 1:1–4. **Wonder:** Why does God use words that are written down? **Weigh:** The Cylinder and Ezra both record a decree — what does a written promise do? **Respond:** write one promise you can keep this term.
- **Assess:** Technique & craftsmanship; reflection on purpose.

### FRI · W2 — SHOWDOWN: Camel Charge (mode: classic, 15 s timer, speed bonus ×1.25)
1. Who conquered Babylon in 539 BC? A) Darius III B) **Cyrus the Great ✔** C) Xerxes D) Alexander
2. Which prophet named Cyrus long before? A) **Isaiah ✔** B) Jonah C) Amos D) Micah
3. The Cyrus Cylinder is made of… A) gold B) paper C) **clay ✔** D) glass
4. Cyrus's first great capital was… A) Rome B) **Pasargadae ✔** C) Athens D) Memphis
5. In Herodotus's story, Cyrus used which animals against Lydian horses? A) Elephants B) **Camels ✔** C) Lions D) Eagles
6. In a food chain, grass is a… A) **producer ✔** B) consumer C) decomposer D) predator
7. Cuneiform writing is made of… A) letters like ours B) pictures only C) **wedge-shaped marks ✔** D) knots
8. The word "paradise" comes from a Persian word meaning… A) palace B) **walled garden ✔** C) mountain D) camel
9. In Ezra 1, Cyrus let the exiles… A) **return to Jerusalem and rebuild the temple ✔** B) stay in Babylon C) become kings D) hide
10. **BOSS:** Why might Cyrus be remembered as "great"? A) He destroyed every city B) **He let conquered peoples return and respect their own customs ✔** C) He never fought D) He was the tallest king
11. In a fair test you should change… A) everything B) **one thing at a time ✔** C) nothing D) three things
12. **BOSS:** Isaiah 45 tells us God… A) was surprised by Cyrus B) **knew and named Cyrus long before ✔** C) wasn't interested in foreign kings D) lived in Babylon
**Teaching moments:** Q9/Q10/Q12 (Cylinder vs Bible).

---

## ⭐ STAGE 3 — THE ROYAL ROAD (DARIUS THE GREAT)
**Era:** 522–486 BC · **Place:** Behistun, Susa, Persepolis, Sardis–Susa road · **Fragment 3:** *Fragment of the Swift Road* · **Event:** The Royal Relay (chain mode)
**Briefing:** "The road is longer than any story: 2,700 kilometres! A mudslide blocks the pass, and the Shadow Courier has left a riddle on the Rock of Behistun."
**Materials:** map of the Royal Road, string and scale rulers, "relay baton" (scroll tube), foil for darics, soap bars or clay with safe carving tools, wool for food-web game, large paper for frieze, lion/leopard images.

### MON · W3 — Darius the Organiser: Satraps, Coins, Roads & Law (History)
- **NZC:** SS-CC, SS-ICO, SS-EW; EN-S
- **LI:** We are learning to explain how Darius held a huge empire together. **SC:** I can name 4 tools Darius used (provinces/satraps, coinage, Royal Road, written records) · I can explain why each helped · I can give a perspective on whether he was fair or controlling.
- **Dispatch (10):** **Relay Race:** pass a scroll message by whisper down a line vs by runner relay; compare accuracy and speed. Why did couriers and stations matter?
- **Discovery (15):** Darius I (522–486 BC): about 20+ **satrapies** run by **satraps**, plus inspectors called "the King's Eyes and Ears"; the **daric** gold coin; the Royal Road (Sardis–Susa, ~2,700 km, many relay stations; Herodotus says royal riders took about a week versus about three months on foot); the **Behistun Inscription** (Old Persian, Elamite and Babylonian; key to reading cuneiform; also royal propaganda). Persepolis begun.
- **Paths (25):** **A – "King's Eye" Inspection Report** on an imagined province (roads, taxes, fairness). **B – Design a Daric:** front/back plus museum label explaining symbols and uses. **C – Persuasive Speech:** "Darius was a wise ruler" OR "Darius controlled too much", using evidence.
- **Council Fire:** **See:** Ezra 5:3–6:15 (Darius's officials search the archives at Ecbatana, find Cyrus's decree, and the temple is completed). **Wonder:** Why did one record in an archive matter so much? **Weigh:** Persian record-keeping and God's faithfulness to His promises (Isa 55:11). **Respond:** write about a promise someone kept to you; thank God for His.
- **Assess:** Cause–effect explanation with evidence. **NZ connection:** how do leaders and councils share information with communities in NZ?

### TUE · W3 — The Royal Road: A Highway Through the Landscape (Geography)
- **NZC:** SS-PE, SS-EW; MA-G
- **LI:** We are learning to explain how roads shape settlements and to use scale to measure distance. **SC:** I can use a scale bar to measure distance · I can explain why settlements grow on routes · I can describe the levels of settlement along a route.
- **Dispatch (10):** String-and-map challenge: measure the Royal Road with string and scale; teams race to estimate travel days at 30 km/day versus by relay.
- **Discovery (15):** Route features (rivers, passes, deserts); stations roughly a day's ride apart (~111 in Herodotus); **settlement growth on routes**; **Persepolis** on a terrace beside Mt Rahmat on the Marvdasht plain (view, defence, stone, space for ceremonies). Hierarchy: station → village → town → capital.
- **Paths (25):** **A – Scale Map & Distance Challenge** (map the road, mark stops, calculate distances/times). **B – Station Master's Handbook:** design a relay station and its rules; predict how a village might grow around it. **C – Persepolis Site Plan:** annotate terrace, stairs, halls and treasury; give reasons for the site.
- **Council Fire:** **See:** Isa 40:3–4; Isa 35:8. **Wonder:** What is special about "making a way" for others? **Weigh:** Roads connect people, and ideas, and faith. **Respond:** name one "road" (a kindness, a welcome) you can build for a new student.
- **Assess:** Accuracy of scale calculations; reasoning. **NZ connection:** ara/tracks in Aotearoa (e.g. pounamu trails) and how roads and rail shaped NZ towns (engage local iwi/Māori Ed lead for local stories).

### WED · W3 — Lions, Leopards & the Royal Hunt: Predators in the Food Web (Science)
- **NZC:** SC-LW-Eco, SC-NoS-C, SC-NoS-P
- **LI:** We are learning to build food webs and explain what happens when a predator disappears. **SC:** I can draw a food web with arrows showing energy flow · I can explain "apex predator" · I can predict an effect of removing one species.
- **Dispatch (10):** **String Web Game:** students hold labels (grass, ibex, onager, leopard, lion, eagle, decomposer) and pass wool to show links; remove the lion and watch the web go slack.
- **Discovery (15):** Food chain vs web; **apex predators**. The Asiatic lion once lived in Persian lands (gone from Iran by the early 1940s); the Caspian tiger is extinct; the Persian leopard survives but is endangered. **Royal hunting parks ("paradises")** appear in Persian art. What happens when predators vanish: prey booms, plants overgrazed.
- **Paths (25):** **A – "What If?" Food Web:** diagram plus 5 predictions. **B – Design the Perfect Predator:** annotated sketch using only real adaptation types. **C – Ecosystem Role-Play Report:** perform the string web with a narrator; write what the class learned.
- **Council Fire:** **See:** Dan 6:16–23; Ps 104:21. **Wonder:** The lions are in God's care and still dangerous; what does that teach us? **Weigh:** Daniel's courage next to the lions' real power. **Respond:** write "one place I need courage this week" and pray.
- **Assess:** Accurate arrows; explanation. **NZ connection:** NZ's introduced predators (stoats, rats, cats) and native birds.

### THU · W3 — Carving the Kings: Relief Sculpture of the Apadana (Art)
- **NZC:** VA-UC, VA-PK, VA-CI
- **LI:** We are learning to create relief sculpture showing a procession. **SC:** I can make a figure in profile · I can repeat figures with rhythm · I can describe what the Apadana reliefs show.
- **Dispatch (10):** Look at Apadana relief images: delegations from many nations bringing gifts to the king. Spot animals, textiles, vessels, repetition, profile views.
- **Discovery (15):** Relief (raised and incised). Techniques: carve soap, impress clay, emboss foil. Safe tool use.
- **Paths (25):** **A – Relief Figure:** carve a gift-bearer in soap or clay. **B – Foil Emboss Panel** of repeating figures. **C – Class Procession Mural:** each team designs a section, "The Procession of the Caravans", with gifts reflecting the week's learning.
- **Council Fire:** **See:** Ps 72:10–11; Phil 2:9–11; Mark 10:42–45. **Wonder:** The reliefs show nations honouring one king; how is Jesus' kingship different (a servant-king)? **Weigh:** compare how Darius displays power with how Jesus uses it. **Respond:** one way to serve someone this week.
- **Assess:** Technique and rhythm; interpretation of the reliefs.

### FRI · W3 — SHOWDOWN: The Royal Relay (mode: relay)
1. The Royal Road ran from Sardis to… A) Rome B) **Susa ✔** C) Athens D) Sparta
2. The gold coin of Darius was the… A) denarius B) **daric ✔** C) dollar D) drachma
3. The Behistun Inscription was written in how many languages? A) One B) Two C) **Three ✔** D) Ten
4. Provincial governors were called… A) **satraps ✔** B) scribes C) immortals D) magi
5. Darius began building which ceremonial city? A) **Persepolis ✔** B) Sparta C) Jerusalem D) Troy
6. Royal riders could cross the road in about… A) a day B) **a week ✔** C) a year D) a decade
7. Why did Daniel end up in the lions' den? A) He stole B) **He kept praying to God ✔** C) He ran away D) He insulted the king
8. Where did Darius's officials find Cyrus's decree (Ezra 6)? A) **Ecbatana ✔** B) Rome C) Sparta D) Nineveh
9. An apex predator is… A) the smallest animal B) **a top predator with few natural enemies ✔** C) a grass D) a decomposer
10. **BOSS:** Which best explains how Darius governed a huge empire? A) Luck B) **Provinces, a standard coin, roads and records ✔** C) Only armies D) Weather
11. In a food web, arrows show… A) **the flow of energy ✔** B) which animal is cutest C) distance D) time
12. **BOSS:** Remove the top predator and often… A) nothing changes B) **prey increase and plants may be overgrazed ✔** C) all plants vanish at once D) rivers dry up
**Teaching moments:** Q6, Q10, Q12.

---

## ⭐ STAGE 4 — PRIDE BEFORE THE FALL (XERXES & THE GREEK WARS)
**Era:** 490–479 BC · **Place:** Marathon, Hellespont, Thermopylae, Salamis, Susa · **Fragment 4:** *Fragment of the Storm* · **Event:** Storm at the Hellespont (lives mode)
**Briefing:** "A storm has ripped away the bridge of boats. A fragment is lost in the waves, and the king is furious."
**Materials:** maps of the Aegean/empire, short Persian-side and Greek-side source excerpts (teacher-made), sand tray or Lego, thermometers, beakers, insulating materials (felt, foil, wool, bubble wrap), foam printing sheets, paint.

### MON · W4 — Marathon, Thermopylae & Salamis: Whose Story? (History)
- **NZC:** SS-CC, SS-DO; EN-W, EN-S
- **LI:** We are learning to explain how Persians and Greeks fought and to compare perspectives on the wars. **SC:** I can sequence 4 events (Marathon 490, Thermopylae and Salamis 480, Plataea 479) · I can say why the Greek version isn't the only version · I can write from two viewpoints.
- **Dispatch (10):** "Two newspapers, one battle": read a Greek herald headline and a Persian scribe headline for the same event; spot what changes.
- **Discovery (15):** Darius's expedition (Marathon); Xerxes's invasion: bridging the Hellespont with boats, the narrow pass of Thermopylae, the sea battle of Salamis, defeat at Plataea. Sources: **Herodotus (Greek, writing later, not neutral)**; few Persian written accounts of these wars. Persia stayed huge and powerful afterwards.
- **Paths (25):** **A – Two Voices Report:** "The Greek Herald" vs "The Persian Scribe". **B – Campaign Map & Timeline** (invasion arrows, labelled battles, dates). **C – Hot-Seat Council Drama:** perform Xerxes's war council (invade vs be cautious), 2-minute scene.
- **Council Fire:** **See:** Prov 16:18; Prov 21:30–31; Mark 4:35–41. **Wonder:** Why do powerful rulers fall? **Weigh:** Greek stories say Xerxes had the sea whipped; Jesus *calmed* the sea and the disciples asked "Who is this?" **Respond:** write about a time pride made things worse and how humility helps.
- **Assess:** Perspective-taking; chronological accuracy.

### TUE · W4 — Straits, Harbours & Chokepoints: The Scale of an Empire (Geography)
- **NZC:** SS-PE, SS-EW; MA-G
- **LI:** We are learning to explain how geography shapes war and settlement and to compare sizes of places. **SC:** I can describe how a strait or pass affects movement · I can compare the empire's size to NZ using a scale · I can explain why harbour towns grow.
- **Dispatch (10):** "How many NZs fit in the Persian Empire?" Estimate with cut-out NZ shapes on the empire map (empire ~5 million km², NZ ~270,000 km², so roughly 20 NZs).
- **Discovery (15):** Empire at its greatest extent; the **Hellespont**, **Thermopylae pass**, **Salamis strait**; how narrow places help defenders and slow big armies; coastal/harbour cities (Sardis, Miletus, Athens) vs inland capitals.
- **Paths (25):** **A – Empire vs NZ Map:** overlay with scale; write 3 observations. **B – Chokepoint Model** of Thermopylae or Salamis in sand/Lego; explain why geography helped the defenders. **C – Design a Harbour Town** on a NZ coast; justify the site and compare with a Greek or Persian-coast city.
- **Council Fire:** **See:** Job 38:8–11; Isa 40:15–17. **Wonder:** How big is God compared with the biggest empire? **Weigh:** the sea has "this far and no further". **Respond:** write a short humble prayer.
- **Assess:** Scale use; reasoning.

### WED · W4 — The Desert Challenge: Adaptations in Dasht-e Kavir & Lut (Science)
- **NZC:** SC-LW-Eco, SC-NoS-I, SC-NoS-C
- **LI:** We are learning to explain desert adaptations and to carry out a fair test about insulation. **SC:** I can name 3 desert animals and an adaptation each · I can plan a fair test · I can graph data.
- **Dispatch (10):** "Water for an Army": estimate how much water a marching army and its animals need in a day (teacher supplies ratios); why deserts were dangerous.
- **Discovery (15):** Abiotic factors in deserts (heat, scarce water, big temperature swings); animals: **sand cat** (furry paws), **jerboa** (nocturnal, gets water from food), **Persian horned viper**, **Asiatic cheetah**, **onager**, camels. Adaptations: behaviour (night activity), body structure (fat store, fur, feet).
- **Paths (25):** **A – Insulation Fair Test:** wrap beakers (felt, foil, wool, none), fill with warm water, record temperature over time, graph, explain the best "fur". **B – Desert Survival Guide:** invent a desert species with 5 adaptations. **C – Double Bubble:** compare Dasht-e Kavir with an NZ habitat (e.g. high-country tussockland).
- **Council Fire:** **See:** Ps 63:1; Isa 41:18; Ps 104:10–13. **Wonder:** God provides in dry places; how do we respond to dry times in life? **Weigh:** respect for water. **Respond:** one water-saving action.
- **Assess:** Fair-test design; graph; vocabulary.

### THU · W4 — Glazed-Brick Immortals: A Never-Ending Frieze (Art)
- **NZC:** VA-UC, VA-PK, VA-DI
- **LI:** We are learning to make a repeating frieze using printmaking. **SC:** I can make a printing block · I can repeat prints with even spacing · I can choose a limited colour palette.
- **Dispatch (10):** Show the Susa glazed-brick guards (colour, repetition). Who were the **Immortals**? (an elite guard whose numbers stayed ~10,000 because fallen men were replaced).
- **Discovery (15):** Demonstrate foam block making, even pressure, registration, repeating a border, layering colour.
- **Paths (25):** **A – Immortal Frieze:** foam print guard repeated 5×. **B – Glazed-Brick Collage:** paper mosaic of an archer. **C – Armour of God Frieze:** repeating guardian pattern using items from Eph 6:10–18.
- **Council Fire:** **See:** Eph 6:10–18; John 11:25. **Wonder:** The Persians called their guards "Immortals"; who really conquers death? **Weigh:** compare human "immortality" with Jesus' resurrection. **Respond:** note which piece of armour you need most this week.
- **Assess:** Technique and rhythm; thoughtfulness of Path C.

### FRI · W4 — SHOWDOWN: Storm at the Hellespont (mode: lives, 3 per team)
1. Which 490 BC battle did Athens win against Darius's army? A) **Marathon ✔** B) Troy C) Gaugamela D) Hastings
2. Xerxes crossed the Hellespont using… A) a tunnel B) **bridges of boats ✔** C) balloons D) camels
3. The 480 BC sea battle won by the Greek ships was… A) Plataea B) **Salamis ✔** C) Carrhae D) Marathon
4. Herodotus was a… A) Persian king B) **Greek historian ✔** C) Roman general D) scientist
5. Why compare Greek and Persian accounts? A) **They may show different perspectives and bias ✔** B) Both are always wrong C) To waste time D) Because maps differ
6. The Persian Immortals were… A) ghosts B) **an elite guard of about 10,000 ✔** C) priests D) sailors
7. Proverbs 16:18 says pride goes before… A) breakfast B) **destruction ✔** C) friends D) wealth
8. A frieze is… A) **a band of repeated pictures or patterns ✔** B) a type of fish C) a river D) a coin
9. The sand cat's furry paws help it… A) fly B) **walk on hot sand ✔** C) swim D) climb trees
10. **BOSS:** Most surviving written accounts of the wars are Greek, so we should… A) **read them carefully for bias ✔** B) ignore them C) copy them D) burn them
11. In a fair test of insulation, what should stay the same? A) **Starting water temperature ✔** B) The wrapping material C) Everything D) Nothing
12. **BOSS:** Jesus calming the sea (Mark 4) shows… A) pride B) **power over creation used with care ✔** C) fear D) weakness
**Teaching moments:** Q5/Q10 (bias), Q12.

---

## ⭐ STAGE 5 — FOR SUCH A TIME AS THIS (ESTHER)
**Era:** c. 483–473 BC · **Place:** Susa (winter palace), the Karkheh/Karun river plains, Lake Urmia · **Fragment 5:** *Fragment of the Golden Sceptre* · **Event:** For Such a Time as This (final question ×3) · **Mid-term check:** cumulative review round in Showdown
**Briefing:** "In the palace at Susa a decree has gone out against a whole people. Our fragment is hidden in the banquet hall, but to reach it someone must dare to step forward uninvited."
**Materials:** Esther text (read-aloud edition), palace/Susa images, clay or foil, gold/jewel-toned paper, paint, mini-whiteboards, wetland photos, trays and water/sand for evaporation model, thermometers or scales.

### MON · W5 — Queen Esther of Susa: Courage in the Palace (History)
- **NZC:** SS-CC, SS-ICO, SS-DO; EN-R, EN-W
- **LI:** We are learning to explain the events of Esther in their Persian setting and to explain why Esther's choice mattered. **SC:** I can retell the key events (banquet, Esther made queen, Haman's plot, Esther's request, Purim) · I can identify Persian customs in the story · I can explain "providence".
- **Dispatch (10):** **The Royal Summons:** a "king" (teacher) sits with a golden pointer; no-one may approach unsummoned (Esth 4:11). One brave student steps forward; discuss risk and courage.
- **Discovery (15):** Xerxes I (Ahasuerus in Hebrew) reigns 486–465 BC; the story is set mostly in **Susa**; Persian customs shown in the text: grand banquets, the king's signet ring and unchangeable laws (Esth 8:8; compare Dan 6:8), the postal system carrying edicts; Jews living across the empire; **Purim**. Archaeology of Susa's palace is consistent with the setting. God is never named in the book, yet He is at work behind events.
- **Paths (25):** **A – "Esther's Courage" Story Map/Comic** (8 frames, key verse in each). **B – Hot-Seat Interviews:** record Mordecai, Esther, Haman and Xerxes answering questions in character. **C – Persian Court Explainer:** brochure/poster on how the court worked, citing evidence from Esther and Persian sources.
- **Council Fire:** **See:** Esth 4:12–16; Prov 31:8–9. **Wonder:** What does the story show about God when He is not named? **Weigh:** how do coincidences in the plot fit with "providence"? **Respond:** "Who needs my voice?"; write one action (speak up for someone, include someone).
- **Assess:** Accurate retell; use of evidence.

### TUE · W5 — Susa: The City of Lilies and the Story of a Tell (Geography)
- **NZC:** SS-PE, SS-CC; MA-G
- **LI:** We are learning to explain why river-valley cities lasted for thousands of years and how a tell forms. **SC:** I can locate Susa and its rivers · I can explain "tell" with a diagram · I can name risks and benefits of river settlement.
- **Dispatch (10):** **Layer Cake:** build a "tell" from stacked coloured cards; each layer = a new settlement on top of the old.
- **Discovery (15):** Susa (Khuzestan plain; settled for over 5,000 years); Tigris–Euphrates region (Mesopotamia); irrigation; floods vs fertile silt; Susa's palace complex and winter-capital role; other ancient cities (Babylon).
- **Paths (25):** **A – Tell Cross-Section:** layered diagram with a timeline of Susa's peoples. **B – River Cities Map:** label rivers, cities and farmland; write benefits and risks of a river site. **C – Palace City Plan:** design a river-valley palace city with canals and defences.
- **Council Fire:** **See:** Gen 2:10–14; Neh 1:1; Dan 8:2. **Wonder:** Many Bible people lived near these rivers; why do rivers matter so much? **Weigh:** what do layers of cities tell us about history? **Respond:** thank God for a river, creek or water source you rely on.
- **Assess:** Tell diagram accuracy; benefits/risks reasoning. **NZ connection:** why many NZ towns sit on rivers/harbours and how they manage flooding.

### WED · W5 — Rivers, Marshes & Lake Urmia: Wetland Communities (Science)
- **NZC:** SC-LW-Eco, SC-NoS-I, SC-NoS-P
- **LI:** We are learning to describe a wetland community and how people affect it. **SC:** I can build a wetland food web with decomposers · I can explain interdependence · I can describe a human impact on a lake.
- **Dispatch (10):** "Pink Mystery": show photos of flamingos at Lake Urmia. What do they eat, and why does the water look pink? (Tiny brine shrimp and algae.)
- **Discovery (15):** Wetlands: **flamingos, pelicans, brine shrimp, water buffalo, otters, fish (e.g. Karun River), reed warblers, reeds**. Decomposers. **Lake Urmia** is a large salt lake that has shrunk due to drought and water use. Interdependence.
- **Paths (25):** **A – Wetland Food Web Diorama/Chart** with decomposers and arrows. **B – Evaporation Model Investigation:** measure water loss in 3 trays (shade/sun/wind); relate to lake shrinking. **C – Documentary Script:** "A Day on the Lake" narration with 5 science facts.
- **Council Fire:** **See:** Gen 1:20–22; Ps 104:25. **Wonder:** What does it say about God's care when the waters "teem with life"? **Weigh:** what happens when we use too much water? **Respond:** one stewardship action (Gen 2:15).
- **Assess:** Food-web accuracy; investigation recording.
- **Animal Cards unlocked:** flamingo, water buffalo.

### THU · W5 — Gold & Jewel: Persian Splendour (Art)
- **NZC:** VA-UC, VA-PK, VA-CI
- **LI:** We are learning to design luxury objects in the style of Achaemenid metalwork. **SC:** I can use an animal form in a design · I can show shine with colour/foil · I can explain how objects showed royal power.
- **Dispatch (10):** Hook: Esth 1:7 describes drinks served in goblets of gold, each one different. Show **rhyton** (animal-headed drinking horn) and griffin armlet images.
- **Discovery (15):** Animal forms (lion, ibex, griffin), repoussé (pushing metal from behind), colour contrast of warm/cool, balance and decoration.
- **Paths (25):** **A – Rhyton:** model an animal-headed horn in clay or foil. **B – Griffin Armlet:** repoussé foil with jewels. **C – Banquet Painting:** paint the banquet scene (Esth 5–7) using warm/cool contrast and gold accents.
- **Council Fire:** **See:** Esth 1:7; Matt 6:19–21; Prov 31:30. **Wonder:** What do beautiful things tell us about what people value? **Weigh:** the palace's wealth vs Esther's character. **Respond:** name one thing you treasure that isn't a thing.
- **Assess:** Craftsmanship; use of contrast; reflection.

### FRI · W5 — SHOWDOWN: For Such a Time as This (mode: classic + mid-term review mix; last question ×3)
1. In Hebrew, Xerxes is called… A) **Ahasuerus ✔** B) Cyrus C) Darius D) Haman
2. Esther lived in which Persian city? A) **Susa ✔** B) Athens C) Rome D) Cairo
3. Who raised Esther? A) Haman B) **Mordecai ✔** C) Ezra D) Daniel
4. "For such a time as this" is found in… A) **Esther 4:14 ✔** B) Genesis 1 C) John 3 D) Psalm 23
5. The villain who plotted against the Jews was… A) **Haman ✔** B) Nehemiah C) Cyrus D) Daniel
6. Jews remember these events at the festival of… A) Christmas B) **Purim ✔** C) Nowruz only D) Easter
7. Lake Urmia is famous for… A) penguins B) **flamingos and brine shrimp ✔** C) kiwis D) whales
8. A mound formed by layers of ancient settlements is a… A) mole B) **tell ✔** C) bridge D) harbour
9. A rhyton is… A) a sword B) **a drinking horn ending in an animal head ✔** C) a coin D) a wall
10. (Review) Who named Cyrus long before he was born? A) Esther B) **Isaiah ✔** C) Haman D) Ezra
11. (Review) Which Persian king built the Royal Road? A) **Darius I ✔** B) Alexander C) Cyrus D) Nehemiah
12. **BOSS (×3):** The book of Esther never names God, but shows… A) **God working behind the scenes ✔** B) God was absent C) the king was God D) nothing matters
**Teaching moments:** Q4/Q12 (providence); share a mid-term reflection circle after the quiz.

---

## ⭐ STAGE 6 — REBUILDING THE WALLS (EZRA & NEHEMIAH)
**Era:** 458–432 BC (Ezra 458, Nehemiah 445) · **Place:** Babylon → Jerusalem, Susa · **Fragment 6:** *Fragment of the Wall* · **Event:** The Wall of 52 Days (cooperative; all teams together)
**Briefing:** "Mockers are laughing at the half-built walls of Jerusalem. The only way to get our fragment is to work as ONE caravan."
**Materials:** Neh 1–6 reading, brick-pattern paper/building blocks, jenga-style blocks, planning charts, cardboard/clay for gate models, wetland/forest restoration photos.

### MON · W6 — Home Again: Persian Rule, Ezra & Nehemiah (History)
- **NZC:** SS-CC, SS-DO; EN-W, EN-S
- **LI:** We are learning to explain why Persian kings supported rebuilding Jerusalem and how Nehemiah led. **SC:** I can sequence the three returns (538 BC, 458 BC, 445 BC) · I can explain Nehemiah's leadership steps · I can use a source.
- **Dispatch (10):** **Escape Room:** teams reconstruct the "decree" from cut-up phrases, then plan "what must happen next".
- **Discovery (15):** Return under Cyrus (Ezra 1–2), Ezra the scribe (Ezra 7), **Nehemiah** (cupbearer to Artaxerxes I, Neh 1–2; completes wall in 52 days, Neh 6:15). Judah was a Persian province (Yehud) in the satrapy "Beyond the River". Opposition: Sanballat, Tobiah. Source: the **Elephantine papyri** (Jewish community in Egypt writing to Persian officials) show Persian administration at work.
- **Paths (25):** **A – Nehemiah's Project Plan:** plan the wall (roles, steps, risks), inspired by Neh 3. **B – Cupbearer's Request Letter:** persuasive letter to Artaxerxes (Neh 2). **C – Returnee Diary:** 3 diary entries from a family on the road from Babylon.
- **Council Fire:** **See:** Neh 1:4–11; Neh 4:9; Ezra 7:10. **Wonder:** Nehemiah prayed then planned; why both? **Weigh:** pray + act in a big team job. **Respond:** write "one big job I need to pray and plan for."
- **Assess:** Planning detail; clear causation.

### TUE · W6 — Jerusalem on a Hill: Walls, Gates & the Return Route (Geography)
- **NZC:** SS-PE, SS-ICO; MA-G
- **LI:** We are learning to explain why a walled hill city was built where it was and to map a long journey. **SC:** I can name 4 reasons Jerusalem's site worked (hill, spring, defence, routes) · I can map the return route · I can describe how gates and walls function.
- **Dispatch (10):** "Build a city wall": teams use blocks; test what works against "invaders" (a rolling ball).
- **Discovery (15):** Jerusalem on a ridge, spring (Gihon), valleys as natural defences; city gates as markets and courts; the **Fertile Crescent** route from Babylon (roughly 1,400 km around the desert).
- **Paths (25):** **A – Model:** a walled city with labelled gates. **B – Return Route Map** with distances and hazards (desert, rivers); compute travel days. **C – Settlement Comparison:** Jerusalem vs a hilltop pā/defended settlement in your rohe (teacher consults local mana whenua).
- **Council Fire:** **See:** Ps 122; Ps 125:2; Neh 3. **Wonder:** What is the job of a wall and gates? **Weigh:** strong boundaries and open welcome. **Respond:** one way our class is "a place with open gates".
- **Assess:** Mapping accuracy; site-choice explanation.

### WED · W6 — Rebuilding a Habitat: Restoration & Recovery (Science)
- **NZC:** SC-LW-Eco, SC-NoS-P, SC-NoS-I
- **LI:** We are learning to explain how habitats are damaged and restored. **SC:** I can name human causes of habitat damage · I can explain a restoration step · I can model what happens when a link in a web is lost.
- **Dispatch (10):** **Jenga Web:** each block = a species; remove blocks in turn; when does the tower fall?
- **Discovery (15):** Natural and human-caused change; **Persian fallow deer** (thought lost, rediscovered in Iran in the 1950s, then protected and reintroduced); **Zagros oak woodland** loss; restoration: protect, replant, remove pests; NZ examples (predator control, native plantings).
- **Paths (25):** **A – Restoration Plan** for a damaged habitat (steps, species, timeline). **B – Jenga Web Investigation:** record data on which removals cause collapse. **C – Two Habitats, One Problem:** compare a Persian and an NZ restoration story.
- **Council Fire:** **See:** Isa 58:12; Rom 8:19–21; Gen 2:15. **Wonder:** What does it mean to be a "repairer of broken walls and restorer of streets"? **Weigh:** restoring habitats parallels rebuilding walls. **Respond:** one hands-on restoration act at school or home.
- **Assess:** Plan quality; vocabulary.
- **Animal Cards unlocked:** Persian fallow deer.

### THU · W6 — Build the Gate: Architecture & a Collaborative Gate of Welcome (Art)
- **NZC:** VA-UC, VA-PK, VA-DI; TE
- **LI:** We are learning to design and construct an architectural form using symmetry and repeating columns. **SC:** I can draw a symmetrical gate with a ruler · I can design a column capital · I can work with a team on a shared structure.
- **Dispatch (10):** Show Persepolis's **Gate of All Nations**: huge winged, human-headed bulls guarding the entrance; columns, stairs; "everyone entering is greeted by guardians".
- **Discovery (15):** Column parts (base, shaft, capital); symmetry; proportion; materials (cardboard, clay).
- **Paths (25):** **A – 3D Gate Model** with guardian figures. **B – Elevation Drawing** (ruler, symmetry, labelled parts). **C – Design a "Gate of Welcome" for our school** blending pattern ideas (with Māori Ed lead's guidance; respect cultural protocols).
- **Council Fire:** **See:** Neh 3:28–30; 1 Pet 2:5. **Wonder:** Everyone built the part in front of their own house; what does that say about teamwork? **Weigh:** "living stones". **Respond:** commit to one team job.
- **Assess:** Symmetry/proportion; teamwork evidence.

### FRI · W6 — SHOWDOWN: The Wall of 52 Days (mode: wall — whole class cooperates)
1. Who was cupbearer to King Artaxerxes? A) **Nehemiah ✔** B) Daniel C) Haman D) Mordecai
2. The wall was finished in how many days? A) 12 B) **52 ✔** C) 152 D) 365
3. Who was the priest-scribe who taught the Law? A) Cyrus B) **Ezra ✔** C) Haman D) Xerxes
4. Which Persian king supported Nehemiah? A) Darius III B) **Artaxerxes ✔** C) Alexander D) Xerxes II
5. Habitat restoration means… A) **helping a damaged habitat recover ✔** B) building a mall C) draining swamps D) hunting
6. Which animal was rediscovered in Iran after being feared lost? A) Caspian tiger B) **Persian fallow deer ✔** C) Dodo D) Moa
7. Why was Jerusalem on a hill? A) **Defence and spring water ✔** B) Boats C) Snow D) Fashion
8. The Gate of All Nations at Persepolis is guarded by… A) **human-headed winged bulls ✔** B) dragons C) elephants D) kiwis
9. Nehemiah 4:9 teaches… A) **pray and take action ✔** B) just wait C) only fight D) run
10. **BOSS:** Why did Persian kings help rebuild temples? A) **Policy of respecting local peoples (and God moved their hearts) ✔** B) They were bored C) They were scared D) Accident
11. A "tell" is… A) **layers of ancient settlements ✔** B) A shop C) A temple D) A tree
12. **BOSS:** In a food web, removing many links leads to… A) **ecosystem collapse ✔** B) nothing C) bigger animals D) bluer skies
**Special:** wall counter hits 52 bricks → all teams gain +5 Darics each; if not, "Mockers" appear.
**Teaching moments:** Q9/Q10.

---

## ⭐ STAGE 7 — THE MARKETPLACE OF THE WORLD (DAILY LIFE, TRADE & ANIMALS AT WORK)
**Era:** 5th century BC · **Place:** Persepolis region, bazaars, Royal Road stations · **Fragment 7:** *Fragment of the Market* · **Event:** Bazaar Bargains (wager mode)
**Briefing:** "A thief has hidden our fragment among the market stalls. Trade fairly, watch the camels, and find it before sunset."
**Materials:** ration "tablet" cards, barley/rice or counters, trade goods cards, sand tray, weighing bowls, shoe-box looms/card looms, wool/yarn, squared paper.

### MON · W7 — Ordinary Lives in an Extraordinary Empire (History)
- **NZC:** SS-ICO, SS-CC, SS-DO
- **LI:** We are learning to describe daily life for ordinary Persians using real evidence. **SC:** I can describe 3 jobs/roles · I can explain what the Persepolis Fortification Tablets show · I can compare life then and now.
- **Dispatch (10):** **Ration Chits:** each student receives a "tablet" with a job and ration; discuss fairness (extra rations for hard work, mothers).
- **Discovery (15):** The **Persepolis Fortification Tablets** (clay tablets in Elamite) record rations paid to workers, including women and children; **Aramaic** as common language; farmers, builders, craftspeople, scribes; food (bread, dates, wine); boys' training in riding, shooting and truth-telling (Greek writers); the empire was a mix of languages and customs.
- **Paths (25):** **A – "A Day in the Life" Illustrated Diary** (choose a role). **B – Ration Ledger:** maths/economics problems from sample ration data plus a short explanation. **C – Museum Display:** captions for 5 everyday items.
- **Council Fire:** **See:** Jer 29:4–7; Col 3:23; Prov 31:10–31. **Wonder:** What gives ordinary work dignity? **Weigh:** exiles were told to build houses and plant gardens in a foreign land; what does that say about daily faithfulness? **Respond:** one ordinary task you'll do wholeheartedly this week.
- **Assess:** Evidence-based description. **NZ connection:** compare roles and fairness in the NZ workplace (age-appropriate).

### TUE · W7 — Bazaars, Caravans & Trade Routes: How Trade Shapes Settlements (Geography)
- **NZC:** SS-EW, SS-PE; MA-S
- **LI:** We are learning to explain how trade shapes the growth of towns and cities. **SC:** I can show trade flows with arrows · I can explain specialisation · I can describe a trade hub.
- **Dispatch (10):** **Bazaar Simulation:** teams trade goods cards (lapis, turquoise, saffron, wool, grain, pottery); who needs what and why?
- **Discovery (15):** Goods moved along the Royal Road and beyond; **specialisation**; trade hubs at crossroads and water; later **caravanserais** (roadside inns; explain they became common in later centuries).
- **Paths (25):** **A – Trade Route Map:** arrows with goods and legend. **B – Bazaar Data:** run trade rounds, graph results, explain. **C – Design a Caravan Stop:** plan with services (water, stables, market, rest) and justify location.
- **Council Fire:** **See:** Prov 11:1; Prov 16:11; Mic 6:11. **Wonder:** What makes trade fair? **Weigh:** honest scales vs cheating; which matters in your daily life (sharing, swapping)? **Respond:** one fairness promise.
- **Assess:** Specialisation vocabulary; flow-map accuracy. **NZ connection:** pounamu trade routes (with local guidance) and NZ export ports/goods today.

### WED · W7 — Working Animals: Camels, Horses & Mules (Science)
- **NZC:** SC-LW-Eco, SC-LW-LP, SC-NoS-I
- **LI:** We are learning to explain how working animals suit their roles and how people should care for them. **SC:** I can explain camel adaptations · I can run a fair test on foot shape in sand · I can describe animal welfare needs.
- **Dispatch (10):** **Camel Mystery Boxes:** feel a pad, an eyelash, a tuft; match to nostrils, eyes, feet, hump (fat store).
- **Discovery (15):** Domestic vs wild; camels (dromedary and Bactrian), horses, mules and donkeys on the Royal Road; needs of animals (food, water, rest, shelter); modern animal welfare.
- **Paths (25):** **A – Foot-in-Sand Fair Test:** press wide vs narrow "feet" into a sand tray; measure depth; explain camel pads. **B – Design a Transport Animal** for a new habitat; label adaptations. **C – Wild vs Domestic:** compare onager and horse (Venn + 3 questions).
- **Council Fire:** **See:** Gen 24:10–20; Prov 12:10. **Wonder:** What does it mean to care for animals? **Weigh:** Rebekah watered the camels; link to farm animals today. **Respond:** an animal-care action.
- **Assess:** Fair-test accuracy; vocabulary. **NZ connection:** NZ farm and working dogs, horses.
- **Animal Cards unlocked:** Bactrian camel, onager.

### THU · W7 — Woven Worlds: Carpets & Textile Pattern (Art)
- **NZC:** VA-UC, VA-PK, VA-DI; MA-G
- **LI:** We are learning to design a symmetrical woven pattern. **SC:** I can plan a design on squared paper · I can weave over and under · I can describe patterns used in Persian textiles.
- **Dispatch (10):** Show carpet/textile patterns (medallion, border, repeated motifs). Why do patterns repeat?
- **Discovery (15):** Symmetry across two axes; colour contrast; weaving structure (warp, weft).
- **Paths (25):** **A – Cardboard Loom Carpet** (small weaving). **B – Medallion Carpet Design** on squared paper (mirror symmetry both ways). **C – Textile Collage:** layer fabric/paper into a carpet-style piece.
- **Council Fire:** **See:** Exod 35:25–26, 30–35; Ps 139:13. **Wonder:** God values skilled hands, including spinners and weavers. **Weigh:** what do handmade things say about the maker? **Respond:** thank someone who makes things for you.
- **Assess:** Symmetry; craft.

### FRI · W7 — SHOWDOWN: Bazaar Bargains (mode: wager)
1. The Persepolis Fortification Tablets record… A) **rations paid to workers ✔** B) poems C) battles only D) recipes
2. The common language across much of the empire was… A) **Aramaic ✔** B) Latin C) English D) Māori
3. A group of traders travelling together is a… A) crew B) **caravan ✔** C) choir D) class
4. Camels' wide padded feet help them… A) **not sink in sand ✔** B) fly C) swim D) climb
5. Proverbs 11:1 says… A) **dishonest scales are wrong and honest weights please God ✔** B) money is evil C) all trade is bad D) swap everything
6. A roadside inn for travellers was a… A) **caravanserai ✔** B) mosque C) barn D) fort
7. Mirror patterns in carpets show… A) **symmetry ✔** B) chaos C) time D) maps
8. Jer 29:7 told the exiles to… A) **seek the peace and prosperity of the city ✔** B) leave C) fight D) hide
9. Specialisation means… A) **people focus on jobs they do well ✔** B) everyone does everything C) no trade D) no money
10. **BOSS:** Domestic animals differ from wild because… A) **people care for and breed them ✔** B) they are always smaller C) they can't breathe D) they are fictional
11. Why trade? A) **People need things others produce ✔** B) Because kings say so C) For fun only D) no reason
12. **BOSS:** Which fair-test step is correct for the sand test? A) **Use the same weight and sand each time ✔** B) Change weight each time C) Use different sand D) Skip measuring
**Teaching moments:** Q9/Q11.

---

## ⭐ STAGE 8 — FIRE ON THE MOUNTAIN (ALEXANDER & THE FALL OF THE EMPIRE)
**Era:** 334–330 BC · **Place:** Granicus, Issus, Gaugamela, Persepolis · **Fragment 8:** *Fragment of Ashes* · **Event:** Fire on the Mountain (lives mode)
**Briefing:** "Smoke over the terrace: Persepolis is burning. We are scattered and our fragments are in danger. Will we cling to one another and to hope?"
**Materials:** Alexander campaign map, source cards (Arrian, Plutarch, Diodorus; simplified), charcoal, chalk, black paper, orange tissue, gold paint, endangered species data cards.

### MON · W8 — The Fall: Alexander & Darius III (History)
- **NZC:** SS-CC, SS-DO; EN-W
- **LI:** We are learning to explain why a huge empire fell and why accounts differ. **SC:** I can sequence key events (Granicus 334, Issus 333, Gaugamela 331, Persepolis 330 BC) · I can explain 3 causes of the fall · I can compare two accounts of the burning.
- **Dispatch (10):** **Court of Inquiry:** teams receive "evidence cards" (weak command, Alexander's tactics, regional rivalries, supply lines, bad luck). Rank the most important causes and justify.
- **Discovery (15):** Alexander of Macedon invades; Darius III is defeated; Persepolis burned in 330 BC (accident, revenge or political act? sources disagree); Darius III killed by his own officers; the Hellenistic world follows. Later Persians remembered Alexander with mixed feelings.
- **Paths (25):** **A – Cause–Effect Chain & Explanation** (3 causes + consequences). **B – Campaign Map** with annotated battles. **C – Debate: "Accident or Act?"** use evidence cards; present for/against.
- **Council Fire:** **See:** Dan 2:31–45; Dan 8:20–21; Dan 2:44. **Wonder:** Kingdoms rise and fall; what lasts? **Weigh:** Christians read Daniel in different ways, but all see God as ruler of history. **Respond:** write one thing you can build that outlasts you (kindness, faith).
- **Assess:** Cause-and-effect chain; perspective evidence.

### TUE · W8 — Cities Under Attack: Destruction, Abandonment & Rebuilding (Geography)
- **NZC:** SS-PE, SS-CC, SS-ICO
- **LI:** We are learning to explain how events change settlements and how people rebuild. **SC:** I can describe how war, fire and earthquakes change a city · I can explain why places are rebuilt or abandoned · I can compare an ancient and a modern rebuild.
- **Dispatch (10):** "Before and After": show a ruined Persepolis photo; students sketch what it was.
- **Discovery (15):** Persepolis ruins; Alexander founded many new cities (Alexandria); Iran is earthquake-prone (e.g. the Bam citadel); NZ cities and recovery after disasters (handle with whānau sensitivity); reasons to rebuild (resources, identity, location).
- **Paths (25):** **A – Reconstruct Persepolis** (diagram of ruin + imagined whole). **B – Rebuild Plan:** a town after a disaster; decide priorities. **C – Then & Now Venn:** compare Persepolis recovery and a NZ rebuild.
- **Council Fire:** **See:** Ps 46:1–3; Isa 61:4. **Wonder:** Where do we find security when our homes or cities shake? **Weigh:** God is "refuge" in disaster; people rebuild together. **Respond:** write a prayer for people rebuilding after hardship.
- **Assess:** Cause-effect explanation; sensitivity.

### WED · W8 — Gone or Going: Extinction & Conservation (Science)
- **NZC:** SC-LW-Eco, SC-NoS-P, MA-S
- **LI:** We are learning to explain why species become endangered and what people can do. **SC:** I can define extinct/endangered · I can name 3 causes · I can propose an action plan.
- **Dispatch (10):** **Zoo of the Missing:** silhouette cards; which are extinct, endangered, or safe? Reveal **Caspian tiger** (extinct), **Asiatic cheetah** (critically endangered; very few left), **Persian leopard** (endangered), **Caspian seal** (endangered).
- **Discovery (15):** Causes: habitat loss, hunting, introduced species, climate. Solutions: protected areas, breeding, community action. NZ stories: moa/huia lost, **kākāpō** and **takahē** recovery.
- **Paths (25):** **A – Awareness Campaign Poster/Ad** for the Asiatic cheetah. **B – Persuasive Letter** to a decision-maker with evidence. **C – Data Detectives:** graph population numbers (given data) and predict future.
- **Council Fire:** **See:** Gen 1:26–28; Gen 2:15; Ps 72:12–14. **Wonder:** What does it mean to "rule" creation? **Weigh:** The True King rescues the weak; how does that shape care for vulnerable species? **Respond:** sign a **Kaitiaki Pledge**.
- **Assess:** Evidence use; persuasive structure.
- **Animal Cards unlocked:** Caspian tiger (extinct), Asiatic cheetah.

### THU · W8 — Fire & Ruin: Light, Shadow and Hope (Art)
- **NZC:** VA-DI, VA-PK, VA-CI
- **LI:** We are learning to use tone and contrast to express emotion. **SC:** I can use charcoal/chalk to build tone · I can use light and dark for drama · I can explain the feeling in my artwork.
- **Dispatch (10):** Show dramatic night paintings. How do artists show fire and smoke? **Sensitivity:** ruin images are not violent.
- **Discovery (15):** Value scale, contrast, silhouette, focal point; adding a small light of hope.
- **Paths (25):** **A – Charcoal & Chalk Night Scene:** ruined columns, smoky sky. **B – Mixed-Media Collage:** black paper ruins with orange tissue and gold. **C – Ruins to Restoration Diptych:** left ruin / right restored vision.
- **Council Fire:** **See:** Isa 61:3; Ps 126. **Wonder:** What is "beauty for ashes"? **Weigh:** art can mourn and hope. **Respond:** write a one-line hope statement.
- **Assess:** Tone control; explanation.

### FRI · W8 — SHOWDOWN: Fire on the Mountain (mode: lives, 3 per team)
1. Who conquered the Persian Empire? A) Cyrus B) **Alexander the Great ✔** C) Xerxes D) Nehemiah
2. The last Achaemenid king was… A) **Darius III ✔** B) Darius I C) Cyrus D) Esther
3. The battle of 331 BC was… A) Marathon B) **Gaugamela ✔** C) Salamis D) Carrhae
4. Persepolis was burned in… A) 530 BC B) 480 BC C) **330 BC ✔** D) 33 AD
5. The Caspian tiger is… A) common B) **extinct ✔** C) a house pet D) invisible
6. The Asiatic cheetah today is… A) **critically endangered ✔** B) extinct C) abundant D) a mascot
7. Which NZ bird has been saved by intensive conservation? A) **Kākāpō ✔** B) Moa C) Huia D) Dodo
8. Daniel 8:20–21 names the kings of Media and Persia and… A) **Greece ✔** B) Rome C) Egypt D) NZ
9. Psalm 46:1 says God is our… A) **refuge and strength ✔** B) enemy C) rival D) crowd
10. **BOSS:** Which best explains how Alexander's smaller army won? A) **Strong tactics, leadership and Persian command problems ✔** B) Magic C) Luck only D) Bigger numbers
11. Charcoal drawings use contrast to show… A) **light and dark ✔** B) only colour C) only lines D) nothing
12. **BOSS:** Isaiah 61:3 promises "beauty for…" A) **ashes ✔** B) gold C) camels D) bricks
**Teaching moments:** Q5, Q10 (not a single cause), Q12.

---

## ⭐ STAGE 9 — STAR-WATCHERS & SILK (PARTHIANS, MAGI, SASANIANS)
**Era:** 247 BC–651 AD · **Place:** Nisa, Ctesiphon, Gur/Firuzabad, Silk Road, Persian Gulf, Caspian · **Fragment 9:** *Fragment of the Star* · **Event:** Starlight Navigation (difficulty-pick mode)
**Briefing:** "Night falls. The only guide is the stars, and a masked rider is closing in. At last the Shadow Courier shows his face."
**Materials:** star maps, black paper, white/gold pastels, watercolour + wax/oil pastel (resist), compass and rulers for city plan, coastal/mangrove images.

### MON · W9 — Parthians & Sasanians: Persia Rises Again (History)
- **NZC:** SS-CC, SS-DO; EN-S
- **LI:** We are learning to describe how Persian empires re-emerged after Alexander and what made them powerful. **SC:** I can sequence Parthians (c. 247 BC–224 AD) and Sasanians (224–651 AD) · I can explain the "Parthian shot" · I can compare them with the Achaemenids.
- **Dispatch (10):** **Parthian Shot Demo:** foam arrows; ride-and-turn sketch. Why was it so powerful?
- **Discovery (15):** After Alexander: Seleucids; **Parthians** (horse archers, Nisa; beat Rome at Carrhae in 53 BC; Silk Road middlemen); **Sasanians** (Ardashir I, Ctesiphon; Shapur I captured the Roman emperor Valerian in 260 AD); early Christians and the **Church of the East** in Persia; Gundeshapur centre of learning.
- **Paths (25):** **A – Three Empires Chart:** Achaemenid, Parthian, Sasanian. **B – Rome vs Persia Infographic.** **C – Comic: "The Parthian Shot at Carrhae".**
- **Council Fire:** **See:** Matt 2:1–12; Acts 2:9–11. **Wonder:** Why did God invite star-watchers from the east to meet Jesus early? **Weigh:** Medes, Parthians and Elamites were at Pentecost; the gospel reached Persian lands early. **Respond:** write about someone from another culture you want to honour and learn from.
- **Assess:** Comparison accuracy; scripture handling (no "three kings" claims).

### TUE · W9 — Silk Road Cities, Ctesiphon & the Round City (Geography)
- **NZC:** SS-PE, SS-EW; MA-G
- **LI:** We are learning to explain how crossroads cities grow and how cities were planned. **SC:** I can plot a Silk Road route · I can explain why Ctesiphon was a major city · I can draw a concentric circular city plan.
- **Dispatch (10):** Compass challenge: draw a circle city with a compass; why choose a circle?
- **Discovery (15):** Silk Road (linked East and West; Parthians controlled routes), Ctesiphon (Tigris; Taq Kasra arch), **Gur/Firuzabad** (Ardashir's circular city), caravan hubs. Crossroads and rivers as city-makers.
- **Paths (25):** **A – Circular City Plan** with concentric zones. **B – Silk Road Journey Map** with city hubs and goods. **C – Postcard from Ctesiphon** (map + writing).
- **Council Fire:** **See:** Matt 5:14–16; Isa 60:1–3. **Wonder:** A city on a hill can't be hidden; what does that say about our school? **Weigh:** light attracts travellers (like the Magi). **Respond:** one way to be "light" at school.
- **Assess:** Compass/ruler skills; reasoning.

### WED · W9 — Gulf & Caspian: Coastal and Marine Communities (Science)
- **NZC:** SC-LW-Eco, SC-NoS-C, SC-NoS-P
- **LI:** We are learning to describe coastal habitats and why mangroves matter. **SC:** I can describe a mangrove community · I can explain "nursery habitat" · I can compare with an NZ coast.
- **Dispatch (10):** **Pearl Mystery:** how does a pearl form? (Oyster, irritant, layers.)
- **Discovery (15):** **Hara mangroves** (Persian Gulf) as nurseries; **dugongs, hawksbill turtles, pearl oysters, flamingos**; Caspian Sea: **Caspian seal, sturgeon**; coastal zonation; threats (pollution, overfishing).
- **Paths (25):** **A – Coastal Zone Cross-Section** diagram. **B – Mangrove Food Web** with nursery role. **C – NZ Coast Compare:** estuary or rocky shore vs mangrove; include kaitiakitanga practices (kaimoana care) with local guidance.
- **Council Fire:** **See:** Ps 8:3–8; Ps 148:7; Job 12:7–10. **Wonder:** What do sea creatures teach us about God's creativity? **Weigh:** observation as worship. **Respond:** one way to care for local water.
- **Assess:** Diagram accuracy; vocabulary.
- **Animal Cards unlocked:** dugong, Caspian seal.

### THU · W9 — Star-Gazers' Night: Painting the Journey of the Magi (Art)
- **NZC:** VA-DI, VA-PK, VA-CI
- **LI:** We are learning to paint atmosphere with watercolour resist and silhouette. **SC:** I can use wax resist · I can build a night gradient · I can design a silhouette caravan.
- **Dispatch (10):** Look at night skies; how do painters show stars and space?
- **Discovery (15):** Wax resist, wet-on-wet graded wash, silhouette; composition with horizon; star shapes.
- **Paths (25):** **A – Watercolour Resist Night Sky** with caravan. **B – Sasanian-Style Silver Roundel:** foil emboss of a rider/animal. **C – Star-Watcher's Chart:** decorative star wheel with constellation shapes.
- **Council Fire:** **See:** Num 24:17; Matt 2:2, 10–11; Ps 19:1. **Wonder:** The heavens declare God's glory; the Magi followed a sign; where does creation point? **Weigh:** the Bible says "Magi", not names or a fixed number. **Respond:** write a short praise line.
- **Assess:** Technique; thoughtfulness.

### FRI · W9 — SHOWDOWN: Starlight Navigation (mode: starlight — choose ★/★★/★★★ before each question)
1. The "Parthian shot" was… A) **shooting backward while retreating ✔** B) a drum C) a coin D) a type of cheese
2. Parthians defeated Rome at Carrhae in… A) 530 BC B) **53 BC ✔** C) 53 AD D) 5 AD
3. The Sasanian empire began in… A) 247 BC B) **224 AD ✔** C) 330 BC D) 1000 AD
4. Matthew 2 visitors from the east are called… A) shepherds B) **Magi ✔** C) soldiers D) fishermen
5. Acts 2:9 includes people from… A) **Parthia, Media and Elam ✔** B) Mars C) NZ D) Antarctica
6. Mangroves are important because… A) **they shelter young fish ✔** B) they are noisy C) they are deserts D) they are mines
7. A dugong is a… A) bird B) **sea mammal ✔** C) insect D) tree
8. Numbers 24:17 says "a star will come out of…" A) **Jacob ✔** B) Rome C) Egypt D) Babylon
9. The Silk Road was… A) **a network of trade routes ✔** B) one road C) a fabric D) a game
10. **BOSS:** Matthew 5:14 says believers are… A) **a city on a hill, a light ✔** B) a caravan C) a rock D) a camel
11. A circular city plan has… A) random roads B) **concentric rings ✔** C) squares only D) no centre
12. **BOSS:** The Bible says the Magi… A) were three kings B) **came from the east to worship Jesus ✔** C) were Roman D) brought camels only
**Teaching moments:** Q12 (tradition vs text).

---

## ⭐ STAGE 10 — THE GATE OF ALL NATIONS (LEGACY & GRAND FINALE)
**Era:** legacy to today · **Place:** Persepolis Gate · **Fragment 10:** *The Fragment of Wisdom* · **Event:** Gate of All Nations (cumulative, ×2 points, final podium)
**Briefing:** "All nine fragments gleam. But the last piece waits at the Gate, and the Shadow Courier stands before it. Do we trust him?"
**Materials:** artefact museum labels, mystery bag items (chess piece, pistachios, saffron, tulip, pyjamas, etc.), exhibition tables, labels, audio recorders, whānau invitations, certificates.

### MON · W10 — What Persia Gave the World (History/Legacy)
- **NZC:** SS-CC, SS-ICO, SS-DO; EN-W
- **LI:** We are learning to identify Persian contributions to our world and judge their importance. **SC:** I can name 5 legacies · I can explain one in detail · I can choose a legacy to showcase.
- **Dispatch (10):** **Mystery Bag:** feel and guess items (pistachio, saffron, chess piece, tulip bulb, pyjamas label…).
- **Discovery (15):** Legacies: paradise gardens, qanats, coins/administration, road/relay idea, carpets, windcatchers, chess/shatranj, polo, Shahnameh, English words from Persian (**paradise, caravan, bazaar, pyjamas, khaki, lilac, jasmine, spinach, checkmate, magic**), later Persian scholars (the word **algorithm** is from the name of al-Khwarizmi).
- **Paths (25):** **A – "Persia Gives" Museum Exhibit** (object + label). **B – Word Detectives Booklet** of Persian words in English. **C – Time-Capsule Letter** to Cyrus or Nehemiah: what we'd say thanks for.
- **Council Fire:** **See:** Gen 12:2–3; Ps 78:4–7; Rev 7:9. **Wonder:** What legacy do we want to leave? **Weigh:** God's plan blesses all nations. **Respond:** write a legacy statement.
- **Assess:** Legacy explanation.

### TUE · W10 — Persia to Iran: Cities Then & Now (Geography)
- **NZC:** SS-PE, SS-ICO, MA-S
- **LI:** We are learning to compare ancient and modern settlements. **SC:** I can name 4 modern Iranian cities · I can describe changes and continuities · I can compare data with NZ.
- **Dispatch (10):** **Then & Now Cards:** match ancient sites to modern places (Persepolis–Shiraz area, Ecbatana–Hamadan, Susa–Shush, Isfahan, Tehran, Yazd).
- **Discovery (15):** Iran today is a large country with diverse peoples and cities (Tehran, Isfahan, Shiraz, Yazd); desert-city adaptations (windcatchers). Keep content cultural/geographic, not political. NZ comparison data.
- **Paths (25):** **A – Then & Now Map Pair.** **B – Data Comparison:** graph a modern Iranian city's population vs an NZ city (teacher provides data). **C – Travel Guide Page** for a modern Iranian city.
- **Council Fire:** **See:** Rev 7:9; Matt 28:19; 1 Tim 2:1–2. **Wonder:** People today live in these lands; how can we love them? **Weigh:** respect and prayer. **Respond:** write a prayer for Iranian families and Iranian-NZ neighbours.
- **Assess:** Comparative reasoning; respectful language.

### WED · W10 — Wild Persia: Design a Sanctuary (Science)
- **NZC:** SC-LW-Eco, SC-NoS-C, SC-NoS-P
- **LI:** We are learning to apply what we know about habitats and communities. **SC:** I can design a reserve with 3 habitats · I can justify species choices · I can propose actions.
- **Dispatch (10):** Quick-fire recap: habitat, community, adaptation, food web, conservation.
- **Discovery (15):** Reserve design principles (protected core, corridors, water, community involvement).
- **Paths (25):** **A – Reserve Blueprint** (map + explanation). **B – Field Guide:** 6 species with adaptations and food web. **C – Pitch:** 2-minute pitch to save the Asiatic cheetah.
- **Council Fire:** **See:** Gen 2:15; Ps 24:1; Rev 22:2. **Wonder:** How can we act as caretakers? **Weigh:** kaitiakitanga at school. **Respond:** commit to a real action (planting, trapping, clean-up).
- **Assess:** Application of concepts; justification.

### THU · W10 — The Great Exhibition: Persian Gallery Night (Art)
- **NZC:** VA-UC, VA-CI, VA-DI
- **LI:** We are learning to curate and explain artworks. **SC:** I can write a label · I can talk about my artwork · I can describe a classmate's work respectfully.
- **Dispatch (10):** Walk through "gallery rules" and roles: curator, guide, artist, photographer.
- **Discovery (15):** Label writing; arranging themes; guiding questions for visitors.
- **Paths (25):** **A – Curate a Gallery Wall** by theme. **B – Artist Statement & Gallery Guide.** **C – Audio Guide:** record a 60-second tour.
- **Council Fire:** **See:** Col 3:17; 1 Pet 4:10. **Wonder:** Whose glory are our gifts for? **Weigh:** serve others with your talent. **Respond:** thank a teacher or helper.
- **Assess:** Label clarity; speaking.
- **Event:** invite whānau; celebrate with a "Persian Gallery Night".

### FRI · W10 — GRAND FINALE SHOWDOWN: The Gate of All Nations (mode: final — cumulative, ×2 points)
1. The Cyrus Cylinder is made of… A) **clay ✔** B) gold C) wood D) silk
2. The Royal Road was about… A) 27 km B) 270 km C) **2,700 km ✔** D) 27,000 km
3. Esther lived in… A) Athens B) **Susa ✔** C) Rome D) Jerusalem
4. Nehemiah's wall took… A) **52 days ✔** B) 52 years C) 5 days D) 500 days
5. Persepolis burned in… A) 530 BC B) **330 BC ✔** C) 33 AD D) 1000 AD
6. The "Parthian shot" is… A) **shooting backward while retreating ✔** B) a drum C) a coin D) a cheese
7. English "paradise" comes from… A) Latin B) Greek C) **Persian ✔** D) Māori
8. The country asked to be called "Iran" in… A) 1835 B) **1935 ✔** C) 2035 D) 535
9. Which animal is extinct? A) Persian leopard B) **Caspian tiger ✔** C) Dugong D) Camel
10. In Matthew 2, Magi came to… A) **worship Jesus ✔** B) fight Herod C) sell spices D) race
11. Daniel was thrown to lions after… A) stealing B) **praying ✔** C) lying D) running
12. **BOSS (×3):** Revelation 7:9 shows… A) **people from every nation worshipping together ✔** B) only one nation C) no one D) only kings
**Finale sequence:** Forgiveness Vote for Zal → Final fragment assembled (animation) → hidden message revealed (Prov 2:4) → **Team podium** → **Individual podium** → Season awards (below) → whānau toast/feast.

---

# 10. SEASON AWARDS (Grand Finale)
**Team:** 🏆 **Master Couriers of the Royal Road** (Golden Daric Trophy) · 🥈 Silver Caravan · 🥉 Bronze Caravan.
**Individual podium:** 🥇 Gold · 🥈 Silver · 🥉 Bronze (season points).
**Character awards (teacher-chosen, with a Bible-based citation):**
- **Esther Award – Courage** (Esth 4:14) · **Daniel Award – Integrity** (Dan 6) · **Nehemiah Award – Teamwork & Perseverance** (Neh 4) · **Bezalel Award – Craftsmanship** (Exod 31) · **Kaitiaki Award – Care for Creation** (Gen 2:15) · **Grace Award – Forgiveness/Kindness** (Col 3:13) · **Scribe Award – Best Questions & Writing** · **Explorer Award – Best Maps & Geography** · **Caravan Spirit Award – Best encourager.**
Printable certificates for every child (canvas → PNG/PDF) with their specific strength named.

# 11. TEACHER RESOURCES TO INCLUDE IN THE APP
1. **Whānau letter template** (term overview, Christian lens, how Friday quiz works, privacy, invitation to Week 10 Exhibition).
2. **Weekly planner view** (print-ready) and a one-page **Term Overview** with curriculum coverage grid.
3. **Glossary** (settlement, satrap, qanat, cuneiform, relief, frieze, habitat, adaptation, apex predator, kaitiakitanga, etc.) with pronunciation.
4. **Source Pack list** (teacher to print/prepare): British Museum (Cyrus Cylinder page), UNESCO World Heritage pages (Persepolis, Pasargadae, The Persian Garden, Susa, Hyrcanian Forests), Livius.org (Persian Empire), Oriental Institute/ISAC (Persepolis Fortification Archive), IUCN Red List (species status), DOC NZ (kākāpō/takahē recovery), Te Ara (NZ encyclopaedia), TKI/Tāhūrangi (curriculum).
5. **Content-sensitivity notes** per week (Esther & Haman, battles, fire/ruin imagery, earthquakes, modern Iran).
6. **Print-friendly Path scaffolds** (sentence starters, label templates, planning grids) for every Path A/B/C.
7. **Rubric sheets** (Scout / Courier / Captain / Master) for each learning area.
8. **Data export** (CSV) and a **weekly reflection form** (Teaching as Inquiry).

# 12. BUILD ORDER & ACCEPTANCE CHECKLIST
**Build order**
1. Design tokens, fonts, global styles, procedural SVG scenes, particle engine.
2. Hub map + route drawing + gate-door transition.
3. Stage page template + Mission page template (render from `WEEKS` data).
4. Week 1 content fully wired; then all weeks.
5. Teacher View with PIN, print CSS.
6. Showdown: offline mode first → networked mode (lobby, QR, join, scoring) → modes → podium ceremony.
7. Season league + Trophy Room + Daric panel + Fate cards.
8. Animal Cards, Caravan Log, accessibility toggles, te reo layer.
9. Asset Loader + image slots; performance pass; reduced-motion pass.

**Acceptance checklist**
- [ ] Opening cinematic, hub map, 10 stage pages, 40 lessons (each with 3 Paths) and 10 Showdowns all present.
- [ ] Every lesson shows LI/SC, NZC codes, Dispatch, Discovery, Paths A/B/C, Council Fire (Scripture + question + response), Assessment.
- [ ] QR join works; PIN fallback; team choice; live roster; scoring; podium ceremony with team + individual podiums.
- [ ] Offline Teacher-Led mode works with no network.
- [ ] Reduced-motion, read-aloud, dyslexia font, sound toggle all function.
- [ ] 60 fps on a typical school Chromebook; mobile quiz screen is large and clear.
- [ ] No personal data beyond first name + initial; data auto-expiry.
- [ ] All Bible references and facts match this document; no invented facts.
- [ ] Visual wow: parallax, particles, route animation, coin rain, fate cards, podium all present.

# 13. IMAGE ASSET ID PATTERN (matches prompts file)
`CORE-01..16` (title art, logo, map, textures, coin, trophy, podium…) · `TEAM-01..06` (crests) · `CHAR-01..06` (Shirin, Farhad, Gandom, Shadow Courier, Zal unmasked, group) · `W01-HERO … W10-HERO` · `W01-MON … W10-THU` (40 day-card images) · `W01-FRI … W10-FRI` (arena images) · `ANIMAL-01..18` (Animal Cards) · `FX-01..06` (parallax and particle layers).

*End of backbone file.*
