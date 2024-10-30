// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCP0mLPqVKfb0fvqWgzKQMxzjEQNEexWdU",
  authDomain: "airline-website-4f183.firebaseapp.com",
  projectId: "airline-website-4f183",
  storageBucket: "airline-website-4f183.appspot.com",
  messagingSenderId: "671046887849",
  appId: "1:671046887849:web:0f86f631e9a6016d1b3cb8",
  measurementId: "G-Y74BBPRBKT"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export default app;

