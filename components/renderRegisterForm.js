// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM2XjABVZ8WNFtMLFifSaZN4e1-LnKBi8",
  authDomain: "fir-project-c2298.firebaseapp.com",
  projectId: "fir-project-c2298",
  storageBucket: "fir-project-c2298.appspot.com",
  messagingSenderId: "460513750070",
  appId: "1:460513750070:web:a4b7b29d14830351dd3c97",
  measurementId: "G-ZLNXHLZSZV",
  databaseURL: 'https://arpfrontpl3-firebase-default-rtdb.europe-west1.firebasedatabase.app'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import{
  getAuth,
  createUserWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js'

const auth = getAuth();


export default function(){
    const contentContainer = document.querySelector('.content');

    //creating the form
    const formRegister = document.createElement('form');
    formRegister.setAttribute('id', 'form-register');

    //creating email input abd setting atributes
    const inputEmailRegister = document.createElement("input");
    inputEmailRegister.setAttribute("type", "email");
    inputEmailRegister.setAttribute("id", "input-email-register");
    inputEmailRegister.setAttribute("placeholder", "email");
    
    //creating first password input and setting atributes
    const firstInputPasswordRegister = document.createElement("input");
    firstInputPasswordRegister.setAttribute("type", "password");
    firstInputPasswordRegister.setAttribute("id", "first-Input-Password-Register");
    firstInputPasswordRegister.setAttribute("placeholder", "password");
    
    //creating second password input and setting attributes
    const secondInputPasswordRegister = document.createElement("input");
    secondInputPasswordRegister.setAttribute("type", "password");
    secondInputPasswordRegister.setAttribute("placeholder", "password");
    secondInputPasswordRegister.setAttribute("id","second-input-password-register");

    //creating the submit button
    const submitButtonRegister = document.createElement("button");
    submitButtonRegister.setAttribute("type", "submit");
    submitButtonRegister.textContent = "Register";

    //appending children to register form
    formRegister.appendChild(inputEmailRegister);
    formRegister.appendChild(firstInputPasswordRegister);
    formRegister.appendChild(secondInputPasswordRegister);
    formRegister.appendChild(submitButtonRegister);
    
    //appending the form to content conteiner
    contentContainer.appendChild(formRegister);
 
    const formRegisterInDOM = document.getElementById("form-register");
    formRegisterInDOM.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("input-email-register").value;
      const password1 = document.getElementById(
        "first-Input-Password-Register"
      ).value;
      const password2 = document.getElementById(
        "second-input-password-register"
      ).value;
      const password = password1;
      if (password1 === password2 && email.includes("@")) {
        console.log(email, password1, password2);
  
        //firebase auth
        createUserWithEmailAndPassword (auth, email, password).then ((userCredentials)=>{
          const user = userCredentials.user;
          console.log(user)

          
        });
      }
    });
  }