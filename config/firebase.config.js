import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPvzgvHcIBNhodYZu7Bs_dqRhX7Ei8BM4",
  authDomain: "basechatfirebaseapp.firebaseapp.com",
  projectId: "basechatfirebaseapp",
  storageBucket: "basechatfirebaseapp.appspot.com",
  messagingSenderId: "692754963632",
  appId: "1:692754963632:web:328bad05828e2a2a046f75",
  measurementId: "G-3LBP6D7CQX",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
