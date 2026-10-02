/* ===================================================================
   THE ROYAL ROAD RACE — configuration  (the ONLY file you need to edit)

   LIVE QUIZ SETUP (about 5 minutes, free):
   1. Go to https://console.firebase.google.com → Add project (name it e.g. "persia-race").
      (You can switch Google Analytics OFF.)
   2. Build → Realtime Database → Create database → choose a location → "Start in test mode".
   3. Copy the database URL shown at the top (looks like
      https://persia-race-default-rtdb.firebaseio.com ) and paste it into firebaseUrl below.
   4. Rules tab → paste these rules and Publish (open for classroom use; no personal data is stored):
        { "rules": { ".read": true, ".write": true } }
      TIP: after the term, delete the database — or set a reminder to clear "games" monthly.
   5. Upload this folder to GitHub / Netlify as usual. Done!

   If firebaseUrl is left empty the app still works:
     • "Practice mode" runs the quiz between tabs on ONE device (great for trying it out).
     • "Offline Teacher-Led mode" runs the Showdown from the teacher's screen with no devices.
   =================================================================== */
window.RR_CONFIG = {
  firebaseUrl: "",                 // ← paste your Realtime Database URL here
  classId: "class1",               // change if you run several classes from one database
  appUrl: "",                      // optional: public address of this folder (used in the QR code).
                                   // Leave empty to auto-detect from the page you open the host screen on.

  /* Teacher PIN (default: PERSIA2026). To change it: open the Teacher page → Settings → "Change PIN",
     then paste the two lines it shows you here. */
  teacherPinHash:     "d2282eb56e06fa00171e8c676679f5500b138c2a01381163e2f80319bfe4ef2b",
  teacherPinHashLite: "d2fba9df3"
};
