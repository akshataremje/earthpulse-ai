import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxp1hC1HqJDGBZkMJMhkSEKgyEksoYg7w",
  authDomain: "earthpulse-ai-af36f.firebaseapp.com",
  projectId: "earthpulse-ai-af36f",
  storageBucket: "earthpulse-ai-af36f.firebasestorage.app",
  messagingSenderId: "906966884428",
  appId: "1:906966884428:web:133dc38cf7b5c9319f14e9",
  measurementId: "G-S7E062THRS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);