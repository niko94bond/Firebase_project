'use strict'


import {
    getAuth, 
    signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(`User is logged in (${user.email}), onAuthStateChanged`);
    } else {
      console.log(`No user logged in. onAuthStateChanged`);
      renderHomePage();
    }
  });

//Importing components
import renderHomePage from "./components/renderHomePage.js";
import renderTodoPage from "./components/renderTodoPage.js";
import renderAboutPage from "./components/renderAboutPage.js";
import renderLoginPage from "./components/renderLoginPage.js";

//Selecting the most important elements of the page

//Selecting navbar anchors          

const homeButton = document.getElementById('home-anchor');
const todosButton = document.getElementById('todos-anchor');
const aboutButton = document.getElementById('about-anchor');
const loginButton = document.getElementById('login-anchor');

//Selecting the content section
const contentSection = document.querySelector('.content');
const string = "123@123.pl";

// Adding event Lesteners to the navbar buttons

//Home button event Listener (routing in React)
homeButton.addEventListener('click', function(){
    renderHomePage();
});

//Todos button event Listener (routing in React)
todosButton.addEventListener("click", function () {
    const user = auth.currentUser;
    user ? renderTodoPage() : renderLoginPage();
  });

//About button event Listener (routing in React)
aboutButton.addEventListener('click', function(){
    renderAboutPage();
});

// Login button event listener
loginButton.addEventListener("click", function () {
    renderLoginPage();
    const user = auth.currentUser;
    if (user) {
      signOut(auth)
        .then(() => {
          renderHomePage();
          loginButton.textContent = "Log in";
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      contentSection.innerHTML = "";
      renderLoginPage();
    }
});
// logoutButton.addEventListener('click', function(){

// })
// console.log(homeButton);

// homeButton.setAttribute('nazwaatrybutu', 'wartoscatrybutu')

