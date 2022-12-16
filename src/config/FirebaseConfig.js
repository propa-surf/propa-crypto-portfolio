// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKZSxzdTCVIW9Fx0wH6gJ-97Y290N9Q14",
  authDomain: "coin-portfolio-3a93e.firebaseapp.com",
  projectId: "coin-portfolio-3a93e",
  storageBucket: "coin-portfolio-3a93e.appspot.com",
  messagingSenderId: "966288985816",
  appId: "1:966288985816:web:52e27854fe7fe51b9d11ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)