import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvQajNkcsd-VvnBsiX0OI_cWOdegQC9JY",
  authDomain: "smartinvest-web-dc8b7.firebaseapp.com",
  projectId: "smartinvest-web-dc8b7",
  storageBucket: "smartinvest-web-dc8b7.firebasestorage.app",
  messagingSenderId: "865666898515",
  appId: "1:865666898515:web:b83ed75380a8ab0c5fc4a6",
  databaseURL: "https://smartinvest-web-dc8b7-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
