// Import the functions you need from the SDKs you need
import { initializeApp } from "https://gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM2XjABVZ8WNFtMLFifSaZN4e1-LnKBi8",
  authDomain: "fir-project-c2298.firebaseapp.com",
  projectId: "fir-project-c2298",
  storageBucket: "fir-project-c2298.appspot.com",
  messagingSenderId: "460513750070",
  appId: "1:460513750070:web:a4b7b29d14830351dd3c97",
  measurementId: "G-ZLNXHLZSZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);