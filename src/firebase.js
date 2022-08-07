// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxb7qrKtqiLfYpE8ZE5kcz_gQQBfLM4V0",
  authDomain: "histogam-39e59.firebaseapp.com",
  projectId: "histogam-39e59",
  storageBucket: "histogam-39e59.appspot.com",
  messagingSenderId: "937027990985",
  appId: "1:937027990985:web:818be42fc4ab4e3ba9e418",
  measurementId: "G-L1FEX47MXT"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
// getAnalytics(app);

export const auth = getAuth();