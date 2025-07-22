// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDoBA3HZU8VqhtLGP8EG5XwaqSy1NBfv8",
  authDomain: "user-web-8e480.firebaseapp.com",
  projectId: "user-web-8e480",
  storageBucket: "user-web-8e480.appspot.com",
  messagingSenderId: "459053431380",
  appId: "1:459053431380:web:c02536fde74f8f787a0bc1",
  measurementId: "G-DP5F25X957"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
