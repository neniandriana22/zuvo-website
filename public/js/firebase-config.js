// Menggunakan URL CDN untuk VS Code tanpa instalasi Node.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
// TAMBAHAN: Import Storage
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

// KONFIGURASI FIREBASE (ZUVO APP)
const firebaseConfig = {
  apiKey: "AIzaSyBqAv7-5IqiQMkyz3ai0DDmR2akhs-Zyv4",
  authDomain: "zuvo-website-691ca.firebaseapp.com",
  projectId: "zuvo-website-691ca",
  storageBucket: "zuvo-website-691ca.firebasestorage.app",
  messagingSenderId: "793411359870",
  appId: "1:793411359870:web:717a13949158ac01d9342f",
  measurementId: "G-B98QLS7WQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Storage

// PENTING: Export storage agar bisa dipakai di app.js
export { auth, db, storage };