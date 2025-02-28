// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDokq5Od8m0_OlnzeTWr8xtiZK2akFt4gQ",
  authDomain: "netflixgpt-3bc63.firebaseapp.com",
  projectId: "netflixgpt-3bc63",
  storageBucket: "netflixgpt-3bc63.firebasestorage.app",
  messagingSenderId: "387090264375",
  appId: "1:387090264375:web:cd72be6f26353ae434eab2",
  measurementId: "G-RJ4QVP0VEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();