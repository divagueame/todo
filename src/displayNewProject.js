import {changeCurrentHeader} from './changeCurrentHeader.js';

import {readActiveProject, changeActiveProject} from './activeProject';
import {updateDisplayTasks} from './updateDisplayTasks';

let currentProjectDisplay = document.querySelector('.currentWorkingProject');



const deleteProjectDisplay = function(deleteDiv){
    let selectorToDelete = document.querySelector(`.${deleteDiv}`);
    selectorToDelete.parentNode.removeChild(selectorToDelete)
}

const displayNewProject = function(nameToDisplay,targetDisplay){
    changeActiveProject(nameToDisplay) ; // Update Active Project

    var newProjectDiv = document.createElement('div');// PROJECT NAME DISPLAY
    newProjectDiv.classList.add("projectDisplayOf"+nameToDisplay);
    newProjectDiv.classList.add("projectDisplayOf");
    newProjectDiv.addEventListener('click', function(){

        if (readActiveProject()!=nameToDisplay){
            console.log("DIFERENTE PROJECT ACTIVE")// Update the shown tasks
            changeActiveProject(nameToDisplay);
            updateDisplayTasks(nameToDisplay);
        } else {
            console.log("SAME PROJECT ACTIVE");//  Do no need to change the display of the tasks.
        }
    })

    var deleteDiv = document.createElement('div');  //DELETE PROJECT BUTTON
    deleteDiv.classList.add('deleteProject' +nameToDisplay);
    deleteDiv.classList.add('deleteProject');
    deleteDiv.innerHTML += 'X';
    deleteDiv.addEventListener('click', function(){
        
        deleteProjectDisplay(`projectDisplayOf${nameToDisplay}`);
        if(readActiveProject()==nameToDisplay) { //SI el current Project es el activo, cambiar el status a null
            changeActiveProject(null)
        }
    })
    newProjectDiv.innerHTML = `<div class='projectDisplayName'>${nameToDisplay}</div>`;
    targetDisplay.appendChild(newProjectDiv);
    newProjectDiv.insertAdjacentElement('beforeend', deleteDiv)
    changeCurrentHeader(nameToDisplay,currentProjectDisplay)
}


export {displayNewProject}