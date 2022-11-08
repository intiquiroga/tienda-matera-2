// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN0u14C2cXEmFnnNM-VZGOhc2mXcm36MU",
  authDomain: "tienda-matera.firebaseapp.com",
  projectId: "tienda-matera",
  storageBucket: "tienda-matera.appspot.com",
  messagingSenderId: "910816085054",
  appId: "1:910816085054:web:f9f5250a0c251a4527bd6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);