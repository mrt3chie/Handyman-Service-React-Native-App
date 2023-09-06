// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyB4ScaEIp9GS40MH5iulM0_u8xTCmszyl0",
  authDomain: "handyman-application.firebaseapp.com",
  projectId: "handyman-application",
  storageBucket: "handyman-application.appspot.com",
  messagingSenderId: "615134807170",
  appId: "1:615134807170:web:444e0fff05c5b9f39f609b",
  measurementId: "G-83Y1N6ZTHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const data = getDatabase(app);

const db = getFirestore();

export {auth,db,data,app};