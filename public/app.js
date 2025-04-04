import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB-eQPGsM3QceZv5VgnvofZTHGh-bKqx3k",
    authDomain: "fitalpha-baadb.firebaseapp.com",
    projectId: "fitalpha-baadb",
    storageBucket: "fitalpha-baadb.appspot.com",
    messagingSenderId: "94498803754",
    appId: "1:94498803754:web:3020fb86e0f6ce6bda3353",
    measurementId: "G-07LL0ZPFFC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById("google");

if (googleLogin) {
    googleLogin.addEventListener("click", async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            alert(`Welcome, ${user.displayName}!`);
            window.location.href = "index-2.html";
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            alert(`Login failed: ${error.message}`);
        }
    });
}
