# The Royal Road Race — Persia, Years 5–6 (all 10 stages / weeks)

Open `index.html` through any web server (or upload the folder to Netlify Drop / GitHub Pages). Locally: `python3 -m http.server` in this folder, then visit http://localhost:8000.

| Page | For |
|---|---|
| index.html | Student adventure (map → Stage 1 → Mon–Fri missions) |
| teacher.html | Lesson plans (printable), Daric points, roster, results, image checklist, setup (starting PIN: PERSIA2026 — change it) |
| host.html | Friday Showdown big screen (QR + PIN, Fate cards, podium) |
| play.html | Students join (QR/PIN) — or `?practice=1` for solo practice |

**Live phones:** put your Firebase Realtime Database URL in `js/config.js` (steps in Teacher → Setup). Without it, everything works on one computer and in Teacher-led mode.

**Images:** drop files named by ID (e.g. `W01-HERO.png`) into `assets/`. Prompts are in Teacher → Images. The app is fully drawn in code without them.

NZC wording is paraphrased — confirm on Tāhūrangi before ERO. Scripture is paraphrased; read from your own Bible.


## Lesson slides (teacher)
`slides.html` presents each lesson on the TV / interactive whiteboard: Arrive → Discover → Discuss → Decide (situational thinking) → Do → Wrap-up, with reveals, timers, notes (N), read-aloud (R) and a slide grid (G). Open it from Teacher area → Lesson slides. Content comes from `js/data/week01.js` plus the authored layer `js/data/slides-w1.js` (retrieval, stop-and-think checks, talk prompts, scenarios, summaries, teasers). Images named `W01-MON.webp` etc. in `assets/` appear behind cover/story slides.

## Weeks 1–10
Each week lives in `js/data/weekNN.js` (lessons Mon–Fri + Friday Showdown) with slides in `js/data/slides-wN.js`. `finalize.js` sets teaching moments and balances answer positions. Week 10 is the grand-finale cumulative quiz. Generic activity widgets (sort / match / order / reveal) are in `js/widgets-generic.js`. Images are optional: drop `W06-HERO.webp`, `W06-MON.webp` etc. into `assets/`. Teacher area → "Reset to a fresh start" restores the first-time experience (Stage 1 + intro). Embers on the hero can be turned off with `RR.EMBERS=false` in `js/core.js`.
