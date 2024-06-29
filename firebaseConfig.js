// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpMO6MXHkBNi5RRQzlGF6w5KkHdhnbFtw",
  authDomain: "jse-website.firebaseapp.com",
  projectId: "jse-website",
  storageBucket: "jse-website.appspot.com",
  messagingSenderId: "460856000627",
  appId: "1:460856000627:web:3d1fa4719aab558907ea06",
  measurementId: "G-801S1XZ926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
// const analytics = getAnalytics(app);