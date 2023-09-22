// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "YOUR_INFO",
  projectId: "YOUR_INFO",
  storageBucket: "YOUR_INFO",
  messagingSenderId: "YOUR_INFO",
  appId: "YOUR_INFO",
  measurementId: "YOUR_INFO"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const data = getDatabase(app);

const db = getFirestore();

export {auth,db,data,app};
