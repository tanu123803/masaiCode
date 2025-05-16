
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
 
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBmTehyDnOPrTYsINSk95z-wrcesgwk1YE",
    authDomain: "memeplayground.firebaseapp.com",
    projectId: "memeplayground",
    storageBucket: "memeplayground.firebasestorage.app",
    messagingSenderId: "125441957404",
    appId: "1:125441957404:web:d609a0f27a9222a98589d9",
    measurementId: "G-VSCQWLG1EE"
  };

 
  const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);

