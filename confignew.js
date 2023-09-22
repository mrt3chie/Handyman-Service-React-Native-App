import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "YOUR_INFO",
    authDomain: "YOUR_INFO",
    projectId: "YOUR_INFO",
    storageBucket: "YOUR_INFO",
    messagingSenderId: "YOUR_INFO",
    appId: "YOUR_INFO",
    measurementId: "YOUR_INFO"
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};
