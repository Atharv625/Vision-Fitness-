// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { 
    getAuth, GoogleAuthProvider, signInWithPopup 
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// ✅ Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-eQPGsM3QceZv5VgnvofZTHGh-bKqx3k",
    authDomain: "fitalpha-baadb.firebaseapp.com",
    projectId: "fitalpha-baadb",
    storageBucket: "fitalpha-baadb.firebasestorage.app",
    messagingSenderId: "94498803754",
    appId: "1:94498803754:web:3020fb86e0f6ce6bda3353",
    measurementId: "G-07LL0ZPFFC"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

// ✅ Google Authentication
const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById("google");

// Check if the button exists to avoid errors
if (googleLogin) {
    googleLogin.addEventListener("click", async function () {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            console.log("User:", user);
            alert(`Welcome, ${user.displayName}!`);
            
            // Redirect after login
            window.location.href = "index.html";
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            alert(`Google Login Failed! ${error.message}`);
        }
    });
} else {
    console.error("Google login button not found! Make sure the HTML has an element with id='google'");
}
