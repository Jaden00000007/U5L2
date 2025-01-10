/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import { signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"

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

const userProfilePictureEl = document.getElementById("user-profile-picture")

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

const signOutButtonEl = document.getElementById("sign-out-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

signOutButtonEl.addEventListener("click", authSignOut)
/* === Main Code === */

showLoggedOutView()

onAuthStateChanged(auth, (user) => {
    if (user) {
    const uid = user.uid;
    showLoggedInView()
  } else {
    showLoggedOutView
  }
});

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function showProfilePicture(imgElement, user) {
    if (user.photoURL) {
        imgElement.src = user.photoURL
    }
    else{
        imgElement.src = "assets/images/defaultPic.jpg"
    }
 }
 
 function showUserGreeting(element, user) {
    /*  Challenge:
        Use the documentation to make this function work.
       
        This function has two parameters: element and user
       
        We will call this function inside of onAuthStateChanged when the user is logged in.
       
        The function will be called with the following arguments:
        showUserGreeting(userGreetingEl, user)
       
        If the user has a display name, then set the textContent of element to:
        "Hi ___ ( your first name)"
        Where __ is replaced with the actual first name of the user
       
        Otherwise, set the textContent of element to:
        "Hey friend, how are you?"
    */
        if (user.displayName) {
            const firstName = user.displayName.split(" ")[0];
            element.textContent = `Hi ${firstName}`;
        } 
        else {
            element.textContent = "Hi Guest";
        }
 }
 

function authSignOut() {
    /*  Challenge:
         Import the signOut function from 'firebase/auth'
 
 
        Use the code from the documentation to make this function work.
   
        If the log out is successful then you should show the logged out view using showLoggedOutView()
        If something went wrong, then you should log the error message using console.error.
    */
    const auth = getAuth();
    signOut(auth).then(() => {
    console.log("User sign out successful")
    showLoggedOutView()
    }).catch((error) => {
    console.error(error.message)
    });
 }
 

function authSignInWithEmail() {
    console.log("Sign in with email and password")
    /*  Challenge:
  1  Import the signInWithEmailAndPassword function from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
  2 Use the code from the documentation to make this function work.
  3  Make sure to first create two consts, 'email' and 'password', to fetch the values from the input fields emailInputEl and passwordInputEl.
   4 If the login is successful then you should show the logged in view using showLoggedInView()
   5   If something went wrong, then you should log the error message using console.error.
    */
    const email = emailInputEl.value
    const password = passwordInputEl.value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        showLoggedInView()
        // ...
      })
      .catch((error) => {
        console.error(error.message)
      });
}


function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
        /*  Challenge:
    1 Import the createUserWithEmailAndPassword function from 'firebase/auth'
    2 Use the code from the documentation to make this function work.
    3 Make sure to first create two consts, 'email' and 'password', to fetch the values from the input fields emailInputEl and passwordInputEl.
    4 If the creation of user is successful then you should show the logged in view using showLoggedInView()
    5 If something went wrong, then you should log the error message using console.error.
    */
    const email = emailInputEl.value
    const password= passwordInputEl.value


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up
        showLoggedInView()
    })
    .catch((error) => {
    console.error(error.message)
  });
} // of authCreateAccountWithEmail()


function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideView(viewLoggedIn)
    showView(viewLoggedOut)
 }
 
 function showLoggedInView() {
    hideView(viewLoggedOut)
    showView(viewLoggedIn)
 }
 
 function showView(view) {
    view.style.display = "flex"
 } 
 
 function hideView(view) {
    view.style.display = "none"
 }
 
//credit: coursera
