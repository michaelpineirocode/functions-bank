// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT1MpK1HYMHjBu8zqvVJuAGpssgn0ICUo",
  authDomain: "functions-bank.firebaseapp.com",
  databaseURL: "https://functions-bank-default-rtdb.firebaseio.com",
  projectId: "functions-bank",
  storageBucket: "functions-bank.appspot.com",
  messagingSenderId: "87983874345",
  appId: "1:87983874345:web:1dceacf8c3663831705738",
  measurementId: "G-PHS3VDBETW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);