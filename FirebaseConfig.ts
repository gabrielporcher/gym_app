// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYsBBeQ94rcZAhIUypnjcHrYwNMVqN7GM",
  authDomain: "gym-app-c85b4.firebaseapp.com",
  projectId: "gym-app-c85b4",
  storageBucket: "gym-app-c85b4.firebasestorage.app",
  messagingSenderId: "20354049653",
  appId: "1:20354049653:web:3a5b0f9ec1faf5460fba3c",
  measurementId: "G-H55294DLTT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);