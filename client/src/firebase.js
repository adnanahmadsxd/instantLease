// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "instantlease-f4313.firebaseapp.com",
  projectId: "instantlease-f4313",
  storageBucket: "instantlease-f4313.appspot.com",
  messagingSenderId: "58827151495",
  appId: "1:58827151495:web:7e31bce0d376f85d2f0022",
  measurementId: "G-FPRCL12WGS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);