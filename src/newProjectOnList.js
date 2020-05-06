import {readActiveProject, changeActiveProject} from './activeProject';
import {changeCurrentHeader} from './changeCurrentHeader.js';
import {updateDisplayTasks} from "./updateDisplayTasks";
import { newProject } from './newProject';

// DISPLAY NEW PROJECT
const deleteProjectDisplay = function(deleteDiv){
    let selectorToDelete = document.querySelector(`.${deleteDiv}`);
    selectorToDelete.parentNode.removeChild(selectorToDelete)
}



const newProjectOnList = function(nameToDisplay,targetDisplay){

    var newProjectDiv = document.createElement('div');// PROJECT NAME DISPLAY
    newProjectDiv.classList.add("projectDisplayOf"+nameToDisplay);
    newProjectDiv.classList.add("projectDisplayOf");
    newProjectDiv
    .addEventListener('click', function(){
        changeActiveProject(nameToDisplay);
        changeCurrentHeader(nameToDisplay);
        console.log('Current active Project is: ', readActiveProject())
    
    })


    ///////////           DELETE PROJECT BUTTON             /////////////////////////////
    var deleteDiv = document.createElement('div');  
    deleteDiv.classList.add('deleteProject' +nameToDisplay);
    deleteDiv.classList.add('deleteProject');
    deleteDiv.innerHTML += 'X';

    deleteDiv.addEventListener('click', function(){
    //Update ActiveProject to null / CHECK
    changeActiveProject(null);
    console.log('Current active Project is: ', readActiveProject())

    // Remove Project Header / CHECK
    changeCurrentHeader(" ")

    //Remove project from local storage / CHECK
    localStorage.removeItem("Project"+nameToDisplay);
    
    //Remove project name from the left panel / CHECK
    this.parentElement.remove();

    // Remove linked tasks of this project 
    clearProjectTasks(nameToDisplay)
    // updateDisplayTasks();
    event.stopPropagation();
    });

    newProjectDiv.innerHTML = `<div class='projectDisplayName'>${nameToDisplay}</div>`;
    targetDisplay.appendChild(newProjectDiv);
    newProjectDiv.insertAdjacentElement('beforeend', deleteDiv);
    
    // updateDisplayTasks()
}



////////CLEAR PROJECT TASKS
const clearProjectTasks = function(deletedProject){
    Object.values(localStorage).forEach((objInLocal)=>{
        if((objInLocal.indexOf('{')==0)){
        var ProjectName = JSON.parse(objInLocal);
        ProjectName = Object.values(ProjectName)[1];
            if(deletedProject === ProjectName){
                // console.log("PROJECT NAME delete! ",ProjectName);
                var getTaskNameToRemove = JSON.parse(objInLocal);
                getTaskNameToRemove = Object.values(getTaskNameToRemove)[0]
                // console.log("OBJ corresponde! ", getTaskNameToRemove);
                localStorage.removeItem('Taskname'+getTaskNameToRemove)
            }
        }
    }
    )
}







export {newProjectOnList}