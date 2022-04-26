// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHPjxueAzh-KdM4UVph85yJ5l6ft87grY",
  authDomain: "meguiae0001.firebaseapp.com",
  projectId: "meguiae0001",
  storageBucket: "meguiae0001.appspot.com",
  messagingSenderId: "87564409462",
  appId: "1:87564409462:web:f5a87a20023dd3ba2f5d57",
  measurementId: "G-C57L1348X2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
