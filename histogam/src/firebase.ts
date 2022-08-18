import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";

export const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId, 
  // measurementId:process.env.REACT_APP_measurementId,

  apiKey:"AIzaSyBxb7qrKtqiLfYpE8ZE5kcz_gQQBfLM4V0",
  authDomain:"histogam-39e59.firebaseapp.com",
  projectId:"histogam-39e59",
  storageBucket:"histogam-39e59.appspot.com",
  messagingSenderId:"937027990985",
  appId:"1:937027990985:web:818be42fc4ab4e3ba9e418",
  measurementId:"G-L1FEX47MXT"


};

// Initialize Firebase
 initializeApp(firebaseConfig);
// getAnalytics(app);
export const auth = getAuth();
export const passAuth = createUserWithEmailAndPassword;
