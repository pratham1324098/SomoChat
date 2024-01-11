import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "",
  authDomain: "chatting-app-.firebaseapp.com",
  projectId: "chatting-app-",
  storageBucket: "chatting-app-.appspot.com",
  messagingSenderId: "",
  appId: "1:398560408679:web:",
  measurementId: "G-"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
