import{getDatabase,ref, push, } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyC_rHQ2nla6PtMNLKYrpid_aNwg8RxPSUY",
  authDomain: "arpfrontpl3-firebase.firebaseapp.com",
  projectId: "arpfrontpl3-firebase",
  storageBucket: "arpfrontpl3-firebase.appspot.com",
  messagingSenderId: "1084280855387",
  appId: "1:1084280855387:web:8ee81418a75c69fb2ad87e",
  measurementId: "G-HFEXP7R7XG",
  databaseURL: 'https://arpfrontpl3-firebase-default-rtdb.europe-west1.firebasedatabase.app'
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();


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

    
    
    fieldSet.appendChild(legend);
    fieldSet.appendChild(divWork);
    fieldSet.appendChild(divLife);
    fieldSet.appendChild(divSport);
    fieldSet.appendChild(divEducation);

    form.appendChild(input);

    form.appendChild(fieldSet);
    contentContainer.appendChild(form);

    const formInDOM = document.getElementById('todo-form');
    const inputInDOM = document.getElementById('todo-input');

    const radios = document.getElementsByName('category')


    formInDOM.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedCategory = Array.from(radios).find((el) => el.checked).value;
        const todo = inputInDOM.value;
        const response = {
            todo:todo,
            category: selectedCategory,
            
        };
        console.log(response);

        push(ref(database, "todos/" + auth.currentUser.uid), response).then(()=>{
            console.log("sussess operation");
        })
    });
        

}
