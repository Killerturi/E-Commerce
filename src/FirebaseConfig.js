import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXUU1VU3TmeL-FHps6C0McaA8ZWpq7La8",
  authDomain: "e-commerce-e1870.firebaseapp.com",
  projectId: "e-commerce-e1870",
  storageBucket: "e-commerce-e1870.appspot.com",
  messagingSenderId: "335668640867",
  appId: "1:335668640867:web:7e938b33dc76d937ee8c56",
  measurementId: "G-MHPWDXEWM7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
