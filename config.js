import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { auth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNDshD2XObP51LGB-HKMwg6GfRKCxTl4Y",
  authDomain: "motors-olx.firebaseapp.com",
  projectId: "motors-olx",
  storageBucket: "motors-olx.appspot.com",
  messagingSenderId: "406476077777",
  appId: "1:406476077777:web:d186e18dd03a66a46563f0",
  measurementId: "G-YXV5SG85SP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = auth(app);
export const analytics = getAnalytics(app);