import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsEYJM5PJnRNC8nn8ewYUPdWq2cizERaU",
  authDomain: "house-marketplace-app-f5d50.firebaseapp.com",
  projectId: "house-marketplace-app-f5d50",
  storageBucket: "house-marketplace-app-f5d50.appspot.com",
  messagingSenderId: "427143522091",
  appId: "1:427143522091:web:d4e5972af5be781650c76e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
