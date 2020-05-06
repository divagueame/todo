import "./style.css";
import './init'
import {newProject} from './newProject';
import {taskSubmit} from './taskSubmit';



//SUBMIT Project
const newProjectForm = document.querySelector("#addProjectForm");
newProjectForm.addEventListener('submit', newProject);
newProjectForm.addEventListener('submit', function(){
    newProjectForm.reset();
});

//Submit Task
const newTaskForm = document.querySelector(".formTodo");
newTaskForm.addEventListener('submit',taskSubmit);
newTaskForm.addEventListener('submit',function(){
    newTaskForm.reset();
    // taskAdderHide();
})



//import { newTodo } from './newTodo.js';
// import {taskAdderToggler,taskAdderHide} from './taskAdderToggler.js';

/// SELECTORS

// const togglerButtonSelector = document.querySelector('.newTodoFormToggler');















//REMOVE TASK
// const removeTask = function(arrayProjects, id){
//     for(var i=0;i<arrayProjects.length;i++){
//         if(arrayProjects[i]['taskId'] == id){
//             console.log("ESTE ES... ",arrayProjects[i]['taskId']);
//             localStorage.removeItem(arrayProjects[i]['taskId']);
//             arrayProjects = arrayProjects.splice(i,1);
//         }
//     }
// };




////////////////INIT 
// togglerButtonSelector.innerHTML = 'Select a project or create a new one on the left panel.';



