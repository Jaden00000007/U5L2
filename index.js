/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

/* === Firebase Setup === */
const firebaseConfig = {
    apiKey: "AIzaSyBAszAW2SpBZ8LWbeD1THYlY94wWkMp9ao",
    authDomain: "hot-and-cold-8235f.firebaseapp.com",
    projectId: "hot-and-cold-8235f",
    storageBucket: "hot-and-cold-8235f.firebasestorage.app",
    messagingSenderId: "524059102023",
    appId: "1:524059102023:web:22d991a8e744cf1fe39a62"
  };
  const app= initializeApp(firebaseConfig)
  const auth = getAuth(app)
  console.log(auth)
console.log(app.options.projectId)
/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    console.log("Sign in with email and password")
}

function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
        /*  Challenge:
        1 Import the createUserWithEmailAndPassword function from from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
       2 Use the code from the documentation to make this function work.
       3 Make sure to first create two consts, 'email' and 'password', to fetch the values from the input fields emailInputEl and passwordInputEl.
       4 If the creation of user is successful then you should show the logged in view using showLoggedInView()
       5 If something went wrong, then you should log the error message using console.error.
    */
        const email = emailInputEl.value
        const password = passwordInputEl.value

       createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           // Signed up 
           showLoggedInView()
           // ...
         })
         .catch((error) => {
           console.error(error.message)
           // ..
         });
}


/* == Functions - UI Functions == */
function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
}

function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
}

function showElement(element) {
    element.style.display = "flex"
}

function hideElement(element) {
    element.style.display = "none"
}

//credit: coursera