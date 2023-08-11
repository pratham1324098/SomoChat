import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBqLWtVFfQOJkEtSc3gDoc0Ld1XJYRBdrY",
  authDomain: "chatting-app-6b35b.firebaseapp.com",
  projectId: "chatting-app-6b35b",
  storageBucket: "chatting-app-6b35b.appspot.com",
  messagingSenderId: "398560408679",
  appId: "1:398560408679:web:3d0f697a2fda43cd3b10c2",
  measurementId: "G-1LHPVBJC4B"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();