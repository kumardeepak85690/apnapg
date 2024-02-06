// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dd29b.firebaseapp.com",
  projectId: "mern-estate-dd29b",
  storageBucket: "mern-estate-dd29b.appspot.com",
  messagingSenderId: "333373448790",
  appId: "1:333373448790:web:d524b97b8c3cbe90ce11f7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
