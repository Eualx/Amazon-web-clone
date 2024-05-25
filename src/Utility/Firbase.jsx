import firebase from "firebase/compat/app";

// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQnfDXfj2HqvT7JXhNuVT0lreoAn6Cm48",
  authDomain: "clone-68af8.firebaseapp.com",
  projectId: "clone-68af8",
  storageBucket: "clone-68af8.appspot.com",
  messagingSenderId: "283001301150",
  appId: "1:283001301150:web:533c8c38bfe15c9a19b38f"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();






