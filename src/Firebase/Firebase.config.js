// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqg-LLrgAQQ60MkNekm0U-H0Oz3FfTcA8",
  authDomain: "techfusionhub-c1573.firebaseapp.com",
  projectId: "techfusionhub-c1573",
  storageBucket: "techfusionhub-c1573.appspot.com",
  messagingSenderId: "1734794162",
  appId: "1:1734794162:web:0f7975d9b6d4c791c5a2ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
