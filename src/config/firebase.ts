// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore}from 'firebase/firestore';

        
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBza3ZwYpwleCL9RXQXAYn66RPsvVX-R7k",
  authDomain: "reactproject-2c62f.firebaseapp.com",
  projectId: "reactproject-2c62f",
  storageBucket: "reactproject-2c62f.firebasestorage.app",
  messagingSenderId: "653242120990",
  appId: "1:653242120990:web:72165faa05c4ba34a0a70f",
  measurementId: "G-9SPEH0WQRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth + Google Provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const dataBase = getFirestore(app);
