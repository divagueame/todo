

import {displayNewProject} from './displayNewProject';

const projectsListDisplay = document.querySelector(".projectsListDisplay"); 
// console.log("ACtive",activeProject)
let allProjects = [];

const newProjectFolder = function (e) {
    e.preventDefault();
    allProjects.push([e.target.elements[1].value]); // PUSH NAME TO ARRAAY butn

    displayNewProject(e.target.elements[1].value,projectsListDisplay);

}

export {newProjectFolder, allProjects}