// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD1YwSWkKkEyyLBpep4ZRWi0m9iGjsx6A",
  authDomain: "weatherapp-fdc26.firebaseapp.com",
  projectId: "weatherapp-fdc26",
  storageBucket: "weatherapp-fdc26.appspot.com",
  messagingSenderId: "936980279008",
  appId: "1:936980279008:web:d4087324bd5b06b0a32a85",
  measurementId: "G-HK48BFBCKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);