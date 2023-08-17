// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWscr_NOHlFPYBciqGE70ITDk9p_h-S0I",
  authDomain: "docs-b51d7.firebaseapp.com",
  projectId: "docs-b51d7",
  storageBucket: "docs-b51d7.appspot.com",
  messagingSenderId: "585650162507",
  appId: "1:585650162507:web:5a689558c301e62d6536ce",
  measurementId: "G-J8MNYXLYWN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);