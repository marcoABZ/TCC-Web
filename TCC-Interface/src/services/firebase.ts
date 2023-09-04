// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtN3x3H0EyWfLgzEvn0bjFCuYiTsiqnH0",
  authDomain: "tccmarcoz.firebaseapp.com",
  databaseURL: "https://tccmarcoz-default-rtdb.firebaseio.com",
  projectId: "tccmarcoz",
  storageBucket: "tccmarcoz.appspot.com",
  messagingSenderId: "973741958639",
  appId: "1:973741958639:web:52267472c9862d0673421a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);