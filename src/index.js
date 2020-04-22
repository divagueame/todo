
import "./style.css";
import {projects} from './initDisplay.js';
import {createNewTaskForm} from './createNewTaskForm.js';
import {newProjectFolder} from './newProjectFolder.js';


const newProjectForm = document.querySelector("#addProjectForm");



newProjectForm.addEventListener('submit', newProjectFolder);
newProjectForm.addEventListener('submit', function(){
    newProjectForm.reset();
});

const newTaskForm = document.querySelector(".formTodo");

newTaskForm.addEventListener('submit',createNewTaskForm);
newTaskForm.addEventListener('submit',function(){
    newTaskForm.reset()
})

newTaskForm.addEventListener('click',function(){
    console.log("PROJECTS: ",projects); 
    
    // console.log("LOCAL STORAGE: ", localStorage)
})

