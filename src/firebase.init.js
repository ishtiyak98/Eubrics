// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATaIQTXHpT9bDNhKChmtV1vOLEH4PBK3Q",
  authDomain: "eubricsassignment.firebaseapp.com",
  projectId: "eubricsassignment",
  storageBucket: "eubricsassignment.appspot.com",
  messagingSenderId: "83465407169",
  appId: "1:83465407169:web:a5a404c5a2dd3e9d836240",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
