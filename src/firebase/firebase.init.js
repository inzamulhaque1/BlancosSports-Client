// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7sXAEYAQZrg_oFCPbRLu3vFbq6xcaqqQ",
  authDomain: "blancos-sports.firebaseapp.com",
  projectId: "blancos-sports",
  storageBucket: "blancos-sports.appspot.com", // Corrected storageBucket value
  messagingSenderId: "1098610350671",
  appId: "1:1098610350671:web:bedc1280515aba583e283a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
