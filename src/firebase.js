// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {  getAuth } from "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqAQgX81kX4ebXyLFqqgUTqrUeGGJtfHE",
  authDomain: "bookstay-97c52.firebaseapp.com",
  projectId: "bookstay-97c52",
  storageBucket: "bookstay-97c52.appspot.com",
  messagingSenderId: "152888808799",
  appId: "1:152888808799:web:eabe0ee870bd12e71092ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider = new GoogleAuthProvider();

export { auth,provider }; 