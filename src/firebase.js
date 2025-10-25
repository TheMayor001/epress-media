// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQkxYX-GqgFXuo9ZHRuPYoarCKIpqLyP8",
  authDomain: "e-press-media.firebaseapp.com",
  projectId: "e-press-media",
  storageBucket: "e-press-media.firebasestorage.app",
  messagingSenderId: "238217842617",
  appId: "1:238217842617:web:870bc8b22715a6f627f068",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
