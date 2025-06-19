

//signup 

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBG2ScraKdJrqXfZz4m-xjTBSSkUOJQmjo",
  authDomain: "gym1-e1817.firebaseapp.com",
  databaseURL: "https://gym1-e1817-default-rtdb.firebaseio.com",
  projectId: "gym1-e1817",
  storageBucket: "gym1-e1817.appspot.com",
  messagingSenderId: "328723117009",
  appId: "1:328723117009:web:45a28940e7e24c0883a6f0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const alertBox = document.getElementById("alertBox");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
      alertBox.style.display = "block";
      alertBox.style.color = "green";
      alertBox.innerText = "Login successful!";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    })
    .catch((error) => {
      // Login failed
      alertBox.style.display = "block";
      alertBox.style.color = "red";
      alertBox.innerHTML = `
        Invalid credentials.<br>
        <a href="signup.html" style="color: blue; text-decoration: underline;">Click here to Sign Up</a>
      `;
    });
});
