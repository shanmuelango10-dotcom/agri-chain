/* =====================================
   🔥 FIREBASE INITIALIZATION (CLEAN)
   Project: agri-chain-final
   SDK: Firebase v9 COMPAT (Browser)
===================================== */

console.log("🔥 firebase.js loaded");

/* 🔐 FIREBASE CONFIG */
const firebaseConfig = {
  apiKey: "AIzaSyC7DvuK9O8F3r5iCPIf_sNWmC7lBLzy1Gw",
  authDomain: "agri-chain-final.firebaseapp.com",
  projectId: "agri-chain-final",
  storageBucket: "agri-chain-final.appspot.com",
  messagingSenderId: "798039198668",
  appId: "1:798039198668:web:f31089de981f3b0c27eb69"
};

/* 🛑 PREVENT MULTIPLE INITIALIZATION */
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("✅ Firebase initialized");
} else {
  console.log("ℹ️ Firebase already initialized");
}

/* 🔧 EXPOSE SERVICES (GLOBAL) */
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

/* 🌍 MAKE AVAILABLE TO ALL HTML FILES */
window.auth = auth;
window.db = db;
window.storage = storage;

/* 🧪 FINAL CHECK */
console.log("Auth:", auth ? "OK" : "ERROR");
console.log("Firestore:", db ? "OK" : "ERROR");
console.log("Storage:", storage ? "OK" : "ERROR");
