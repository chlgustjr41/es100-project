// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv0PvuxfxVaikg10MdtT6lhGS1Ba6d7Bk",
  authDomain: "es100-project.firebaseapp.com",
  projectId: "es100-project",
  storageBucket: "es100-project.appspot.com",
  messagingSenderId: "369460668897",
  appId: "1:369460668897:web:21b85636a6392b7d824aa0",
  measurementId: "G-LM2324TJZ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
