// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInAnonymously,
//   signOut,
//   onAuthStateChanged
// } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCKG2APrCdLiwg9kgKx8d0J9gJg1ABSOWM",
//   authDomain: "car-rental-system-959b9.firebaseapp.com",
//   projectId: "car-rental-system-959b9",
//   storageBucket: "car-rental-system-959b9.appspot.com",
//   messagingSenderId: "942032087001",
//   appId: "1:942032087001:web:f6e71377d20617ff0a5bc8"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export {
//   auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInAnonymously,
//   signOut,
//   onAuthStateChanged
// };


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "car-rental-system-959b9.firebaseapp.com",
  projectId: "car-rental-system-959b9",
  storageBucket: "car-rental-system-959b9.appspot.com",
  messagingSenderId: "942032087001",
  appId: "1:942032087001:web:f6e71377d20617ff0a5bc8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
  onAuthStateChanged
};