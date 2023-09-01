import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDW7zR5rc6wFHfB8MTShllDdSLLhLFPFhw",
    authDomain: "quiz-app-f65f0.firebaseapp.com",
    projectId: "quiz-app-f65f0",
    storageBucket: "quiz-app-f65f0.appspot.com",
    messagingSenderId: "247235793857",
    appId: "1:247235793857:web:f74938ae2f7c795efa9540",
    measurementId: "G-JFY7YFBRMP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(database);

const auth = getAuth(app);
function getInputValue(inputId) {
    return document.getElementById(inputId).value;
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();


    var Email = getInputValue("email")
    var Password = getInputValue("password")


    signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("You are Loged in")
            window.location.href = "quiz.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})

