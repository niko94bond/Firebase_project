import {
    ref,
    push,
  } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
  import firebase from "../firebaseConfig.js";
  

const app = firebase.app;
const auth = firebase.auth;
const database = firebase.database;


export default function(){
    const contentContainer = document.querySelector('.content');
    const form = document.createElement('form');
    form.setAttribute('id', 'todo-form')

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "todo-input");
    
    const fieldSet = document.createElement("fieldset");
    fieldSet.setAttribute("id", "todo-fieldset")
    
    const legend = document.createElement("legend");
    legend.textContent = "Select a category";
       
    const divWork = document.createElement('div');
    divWork.setAttribute('id', 'div-work');
    const radioCategoryWork = document.createElement('input')
    radioCategoryWork.setAttribute('type', 'radio');
    radioCategoryWork.setAttribute('id', 'radio-work');
    radioCategoryWork.setAttribute('name', 'category');
    radioCategoryWork.setAttribute('value', 'work');
    radioCategoryWork.setAttribute('checked', 'true');
    const radioCategoryWorkLabel = document.createElement("label");
    radioCategoryWorkLabel.setAttribute("for", "radio-work");
    radioCategoryWorkLabel.textContent = "Work";
    divWork.appendChild(radioCategoryWork);
    divWork.appendChild(radioCategoryWorkLabel);

    //life

    const divLife = document.createElement('div');
    divLife.setAttribute('id', 'div-Life');
    const radioCategoryLife = document.createElement('input')
    radioCategoryLife.setAttribute('type', 'radio');
    radioCategoryLife.setAttribute('id', 'radio-Life');
    radioCategoryLife.setAttribute('name', 'category');
    radioCategoryLife.setAttribute('value', 'Life');
    const radioCategoryLifeLabel = document.createElement("label");
    radioCategoryLifeLabel.setAttribute("for", "radio-Life");
    radioCategoryLifeLabel.textContent = "Life";
    divLife.appendChild(radioCategoryLife);
    divLife.appendChild(radioCategoryLifeLabel);

    //sport

    const divSport = document.createElement('div');
    divSport.setAttribute('id', 'div-Sport');
    const radioCategorySport = document.createElement('input')
    radioCategorySport.setAttribute('type', 'radio');
    radioCategorySport.setAttribute('id', 'radio-Sport');
    radioCategorySport.setAttribute('name', 'category');
    radioCategorySport.setAttribute('value', 'Sport');
    
    const radioCategorySportLabel = document.createElement("label");
    radioCategorySportLabel.setAttribute("for", "radio-Sport");
    radioCategorySportLabel.textContent = "Sport";
    divSport.appendChild(radioCategorySport);
    divSport.appendChild(radioCategorySportLabel);

    //Education
    const divEducation = document.createElement('div');
    divEducation.setAttribute('id', 'div-Education');
    const radioCategoryEducation = document.createElement('input')
    radioCategoryEducation.setAttribute('type', 'radio');
    radioCategoryEducation.setAttribute('id', 'radio-Education');
    radioCategoryEducation.setAttribute('name', 'category');
    radioCategoryEducation.setAttribute('value', 'Education');
    
    const radioCategoryEducationLabel = document.createElement("label");
    radioCategoryEducationLabel.setAttribute("for", "radio-Education");
    radioCategoryEducationLabel.textContent = "Education";
    divEducation.appendChild(radioCategoryEducation);
    divEducation.appendChild(radioCategoryEducationLabel);

    // creating the submit button
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("todo-form-submit-button");
    submitButton.textContent = "Add todo";
    
    fieldSet.appendChild(legend);
    fieldSet.appendChild(divWork);
    fieldSet.appendChild(divLife);
    fieldSet.appendChild(divSport);
    fieldSet.appendChild(divEducation);

    // appending the input to the form
    form.appendChild(input);

    // appending the fieldset to form
    form.appendChild(fieldSet);

    // appending the submit button to form
    form.appendChild(submitButton);

    return todoForm;
    // appending the form to content container
    //contentContainer.appendChild(form);

    // const formInDOM = document.getElementById('todo-form');
    // const inputInDOM = document.getElementById('todo-input');

    // const radios = document.getElementsByName('category')


    // formInDOM.addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     const selectedCategory = Array.from(radios).find((el) => el.checked).value;
    //     const todo = inputInDOM.value;
    //     const response = {
    //         todo:todo,
    //         category: selectedCategory,
            
    //     };
    //     console.log(response);

    //     push(ref(database, "todos/" + auth.currentUser.uid), response).then(()=>{
    //         console.log("sussess operation");
    //     })
    // });
        

}
