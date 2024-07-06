// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmxf2xJ64blN2jc-Chd-FPdsvGBGFNzew",
    authDomain: "chatapp-8ae30.firebaseapp.com",
    projectId: "chatapp-8ae30",
    storageBucket: "chatapp-8ae30.appspot.com",
    messagingSenderId: "314824130029",
    appId: "1:314824130029:web:1f4225b11579bcd66dbbe4",
    measurementId: "G-QVH4WQWT05"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth }