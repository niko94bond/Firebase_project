

import renderLoginForm from "./renderLoginForm.js";
import renderRegisterForm from "./renderRegisterForm.js";
import renderHomePage from "./renderHomePage.js";
import {
    getAuth, 
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

const auth = getAuth;

export default function(){

    const contentContainer = document.querySelector('.content');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const label = document.createElement('label');
    const form = renderLoginForm();
    const registerButton = document.createElement('button');
    registerButton.setAttribute("id", "register-button");
    registerButton.textContent = 'Register';

    //setting atributes

    h2.textContent = 'Log in or sign up';
    p.textContent = 'Our authentication mechanism is suuper secure and cool';
    label.textContent = 'log in:';

    contentContainer.innerHTML="";    
    contentContainer.appendChild(h2);
    contentContainer.appendChild(p);
    contentContainer.appendChild(label);
    contentContainer.appendChild(form);
    contentContainer.appendChild(registerButton)
    const registerButtonInDOM = document.getElementById('register-button');
    registerButtonInDOM.addEventListener("click", function (e){
        contentContainer.innerHTML = "";
        renderRegisterForm();
    });

    const formInDOM = document.getElementById('logIn-form');
    formInDOM.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById('input-email').value;
        const password = document.getElementById('input-password').value;

        signInWithEmailAndPassword(auth,email, password).then((userCredentials)=>{
            const user = userCredentials.user;
            console.log(user);
            document.getElementById("login-anchor").textContent = "Logout";
        });
    });







}