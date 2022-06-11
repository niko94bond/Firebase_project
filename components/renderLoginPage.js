

import renderLoginForm from "./renderLoginForm.js";
import renderRegisterForm from "./renderRegisterForm.js";

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
}