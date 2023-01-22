import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDA-yNJ9GBbuBA0pNuCNgDAqFiXRWzJBGY",
  authDomain: "disneyplus-21e5d.firebaseapp.com",
  projectId: "disneyplus-21e5d",
  storageBucket: "disneyplus-21e5d.appspot.com",
  messagingSenderId: "1079305045653",
  appId: "1:1079305045653:web:f1277765096b7572033d9c",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

 