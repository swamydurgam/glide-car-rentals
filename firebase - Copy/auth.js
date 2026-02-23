
// import {
//   auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInAnonymously
// } from "./firebase.js";

// const signInForm = document.getElementById("signInForm");
// const signUpForm = document.getElementById("signUpForm");
// const formTitle = document.getElementById("formTitle");
// const toggleText = document.getElementById("toggleText");
// const guestLoginBtn = document.getElementById("guestLogin");

// // Toggle forms
// toggleText.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (signInForm.style.display !== "none") {
//     signInForm.style.display = "none";
//     signUpForm.style.display = "block";
//     formTitle.textContent = "Sign Up";
//     toggleText.innerHTML = `Already have an account? <a href="#">Sign In</a>`;
//   } else {
//     signInForm.style.display = "block";
//     signUpForm.style.display = "none";
//     formTitle.textContent = "Sign In";
//     toggleText.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`;
//   }
// });

// // Sign In
// signInForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const email = signInEmail.value;
//   const password = signInPassword.value;

//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     alert("Login Successful");
//     window.location.href = "../mainproject/index.html";
//   } catch (error) {
//     alert(error.message);
//   }
// });

// // Sign Up
// signUpForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const email = signUpEmail.value;
//   const password = signUpPassword.value;

//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//     alert("Account Created");
//     window.location.href = "../mainproject/index.html";
//   } catch (error) {
//     alert(error.message);
//   }
// });

// // Guest Login
// guestLoginBtn.addEventListener("click", async () => {
//   try {
//     await signInAnonymously(auth);
//     alert("Guest Login Successful");
//     window.location.href = "../mainproject/index.html";
//   } catch (error) {
//     alert(error.message);
//   }
// });



import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously
} from "./firebase.js";

const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const toggleText = document.getElementById("toggleText");
const formTitle = document.getElementById("formTitle");
const guestLoginBtn = document.getElementById("guestLogin");

// Toggle Forms
toggleText.addEventListener("click", (e) => {
  e.preventDefault();

  if (signInForm.style.display !== "none") {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    formTitle.textContent = "Sign Up";
    toggleText.innerHTML = `Already have an account? <a href="#">Sign In</a>`;
  } else {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
    formTitle.textContent = "Sign In";
    toggleText.innerHTML = `Don't have an account? <a href="#">Sign Up</a>`;
  }
});

// SIGN IN
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful");
    window.location.href = "../mainproject/index.html";
  } catch (error) {
    alert(error.message);
  }
});

// SIGN UP
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account Created");
    window.location.href = "../mainproject/index.html";
  } catch (error) {
    alert(error.message);
  }
});

// GUEST LOGIN
guestLoginBtn.addEventListener("click", async () => {
  try {
    await signInAnonymously(auth);
    alert("Guest Login Successful");
    window.location.href = "../mainproject/index.html";
  } catch (error) {
    alert(error.message);
  }
});