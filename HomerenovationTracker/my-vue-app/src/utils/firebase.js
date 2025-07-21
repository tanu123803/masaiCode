
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcu_wKkD9iH0_a_d0fO10fb6t1YJNKDJI",
  authDomain: "homerenovationtracker.firebaseapp.com",
  projectId: "homerenovationtracker",
  storageBucket: "homerenovationtracker.firebasestorage.app",
  messagingSenderId: "893196250633",
  appId: "1:893196250633:web:9b249e0b5d29f9cad312d8",
  measurementId: "G-KF64JN0KBG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}