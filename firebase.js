console.log("firebase.js loaded");

/* 🔐 CONFIG */
const firebaseConfig = {
  apiKey: "AIzaSyC7DvuK9O8F3r5iCPIf_sNWmC7lBLzy1Gw",
  authDomain: "agri-chain-final.firebaseapp.com",
  projectId: "agri-chain-final",
  storageBucket: "agri-chain-final.appspot.com",
  messagingSenderId: "798039198668",
  appId: "1:798039198668:web:f31089de981f3b0c27eb69"
};

/* 🛑 INIT */
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase initialized");
}

/* ✅ SERVICES */
window.auth = firebase.auth();
window.db = firebase.firestore();

/* 🧪 DEBUG */
console.log("Auth:", auth ? "OK" : "MISSING");
console.log("Firestore:", db ? "OK" : "MISSING");
