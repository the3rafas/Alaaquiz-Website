// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcp2qfUzAu0sX121VsnJJ-86OpB8P5bQ8",
  authDomain: "salama-db.firebaseapp.com",
  projectId: "salama-db",
  storageBucket: "salama-db.appspot.com",
  messagingSenderId: "334776869497",
  appId: "1:334776869497:web:9958172e65b8187b086aa8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
