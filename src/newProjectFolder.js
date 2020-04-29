import {updateLocalStorage} from './createNewTaskForm.js';
import {displayNewProject} from './displayNewProject';

const mainContainer = document.querySelector(".container");
const projectsListDisplay = document.querySelector(".projectsListDisplay"); 
// console.log("ACtive",activeProject)
let allProjects = [];

let currentProjectDisplay = document.querySelector('.currentWorkingProject');



const newProjectFolder = function (e) {
    e.preventDefault();
    allProjects.push([e.target.elements[1].value]); // PUSH NAME TO ARRAAY butn
    
    displayNewProject(e.target.elements[1].value,projectsListDisplay);
    currentProjectDisplay.innerHTML = [e.target.elements[1].value];
    mainContainer.innerHTML = "";
    localStorage.setItem("Project"+[e.target.elements[1].value],[e.target.elements[1].value])
}

export {newProjectFolder, allProjects}