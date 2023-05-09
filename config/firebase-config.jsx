// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//this is what we want to used
import {  getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDZC6A67wdv19E-1HjlpqdkH2snHe0o3Tc",
  authDomain: "kelarin-routerapp-tailwind.firebaseapp.com",
  projectId: "kelarin-routerapp-tailwind",
  storageBucket: "kelarin-routerapp-tailwind.appspot.com",
  messagingSenderId: "300161848549",
  appId: "1:300161848549:web:0dc4b756c5f6b9f967b00c",
  measurementId: "G-CDEQ00PMR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)