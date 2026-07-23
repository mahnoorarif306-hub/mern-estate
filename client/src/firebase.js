// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6b4d3.firebaseapp.com",
  projectId: "mern-estate-6b4d3",
  storageBucket: "mern-estate-6b4d3.firebasestorage.app",
  messagingSenderId: "840915271374",
  appId: "1:840915271374:web:6da3578872632ff673da9f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);