// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhYzqkSZ9fVmAifyWpmqFFNXKrux8gP7s",
    authDomain: "digiteca.firebaseapp.com",
    projectId: "digiteca",
    storageBucket: "digiteca.firebasestorage.app",
    messagingSenderId: "728549293274",
    appId: "1:728549293274:web:73ab58b060bf05b35139e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);