import "./style.css";

import {projects} from './initDisplay.js';
import {createNewTaskForm} from './createNewTaskForm.js';
window.addEventListener('load',function(){   
})




const newTaskForm = document.querySelector("form");

newTaskForm.addEventListener('submit',createNewTaskForm);
newTaskForm.addEventListener('submit',function(){
    newTaskForm.reset()
})

newTaskForm.addEventListener('click',function(){
    console.log("PROJECTS: ",projects);
    
    console.log("LOCAL STORAGE: ", localStorage)
})

