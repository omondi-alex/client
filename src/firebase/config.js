// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcPa3A6e7KcgMmoWgfoYFxRfjtso9t8Jw",
  authDomain: "portfolio-95467.firebaseapp.com",
  projectId: "portfolio-95467",
  storageBucket: "portfolio-95467.appspot.com",
  messagingSenderId: "157259499727",
  appId: "1:157259499727:web:e0f7151194fc29abfbcfba",
  measurementId: "G-05RL0GLY32",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
