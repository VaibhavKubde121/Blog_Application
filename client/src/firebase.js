
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "blog-application-ff36f.firebaseapp.com",
    projectId: "blog-application-ff36f",
    storageBucket: "blog-application-ff36f.appspot.com",
    messagingSenderId: "1002331899095",
    appId: "1:1002331899095:web:849cfa8a72b3bc08c11c92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);