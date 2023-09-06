import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4ScaEIp9GS40MH5iulM0_u8xTCmszyl0",
    authDomain: "handyman-application.firebaseapp.com",
    projectId: "handyman-application",
    storageBucket: "handyman-application.appspot.com",
    messagingSenderId: "615134807170",
    appId: "1:615134807170:web:444e0fff05c5b9f39f609b",
    measurementId: "G-83Y1N6ZTHN"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};