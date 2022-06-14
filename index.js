'use strict'
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
todosButton.addEventListener('click', function(){
    renderTodoPage();
});

//About button event Listener (routing in React)
aboutButton.addEventListener('click', function(){
    renderAboutPage();
});

//Login button event Listener (routing in React)
loginButton.addEventListener('click', function(){
    renderLoginPage();
});
// console.log(homeButton);

// homeButton.setAttribute('nazwaatrybutu', 'wartoscatrybutu')

