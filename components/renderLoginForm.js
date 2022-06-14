
export default function() {
    const contentContainer = document.querySelector('.content');
    const form = document.createElement('form');
    form.setAttribute('id', 'login-form');
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "input-email");
    inputEmail.setAttribute("placeholder", "email");
    const inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("id", "input-password");
    inputPassword.setAttribute("placeholder", "password");
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Log in";
    form.appendChild(inputEmail);
    form.appendChild(inputPassword);
    form.appendChild(submitButton);
    return form;

}
    