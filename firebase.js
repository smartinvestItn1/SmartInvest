import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvQajNkcsd-VvnBsiX0OI_cWOdegQC9JY",
  authDomain: "smartinvest-web-dc8b7.firebaseapp.com",
  databaseURL: "https://smartinvest-web-dc8b7-default-rtdb.firebaseio.com",
  projectId: "smartinvest-web-dc8b7",
  storageBucket: "smartinvest-web-dc8b7.appspot.com",
  messagingSenderId: "865666898515",
  appId: "1:865666898515:web:b83ed75380a8ab0c5fc4a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 THIS IS WHAT MAKES YOUR DATABASE WORK
export const db = getFirestore(app);
