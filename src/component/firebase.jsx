// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6rRS_PL_lF2Q0eiH_yFZME3CZeC8vDtI",
  authDomain: "trekkers-4bb55.firebaseapp.com",
  projectId: "trekkers-4bb55",
  storageBucket: "trekkers-4bb55.appspot.com",
  messagingSenderId: "36040125312",
  appId: "1:36040125312:web:83634db9801d8164cdef65",
  measurementId: "G-5CRXTZQBTX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
