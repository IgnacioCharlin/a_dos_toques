import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACiaJMOoIsU-jT1ZU95jY-sfcxuDSuilM",
  authDomain: "a-dos-toques-560fd.firebaseapp.com",
  projectId: "a-dos-toques-560fd",
  storageBucket: "a-dos-toques-560fd.appspot.com",
  messagingSenderId: "652846164931",
  appId: "1:652846164931:web:a55820d52977b90aef6b76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

