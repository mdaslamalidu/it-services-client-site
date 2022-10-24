// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrciqnUZkLcMBv-HfpvZ9_z8Qi3wK6oPQ",
  authDomain: "authentic-site.firebaseapp.com",
  projectId: "authentic-site",
  storageBucket: "authentic-site.appspot.com",
  messagingSenderId: "44860784085",
  appId: "1:44860784085:web:3cdf663a6ec9d2799ed15c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;