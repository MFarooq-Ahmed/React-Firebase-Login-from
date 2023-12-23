import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBCMvARK7bIqLMbsqVt-uTbbHGFvlQDGqM",
  authDomain: "fire-assignment-1.firebaseapp.com",
  databaseURL: "https://fire-assignment-1-default-rtdb.firebaseio.com",
  projectId: "fire-assignment-1",
  storageBucket: "fire-assignment-1.appspot.com",
  messagingSenderId: "1081830619985",
  appId: "1:1081830619985:web:b732b808d630379ff27170",
  measurementId: "G-MEDL3GQQDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth , createUserWithEmailAndPassword }