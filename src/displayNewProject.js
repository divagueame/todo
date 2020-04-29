import {changeCurrentHeader} from './changeCurrentHeader.js';
import {readActiveProject, changeActiveProject} from './activeProject';
import {updateDisplayTasks} from './updateDisplayTasks';


const deleteProjectDisplay = function(deleteDiv){
    let selectorToDelete = document.querySelector(`.${deleteDiv}`);
    selectorToDelete.parentNode.removeChild(selectorToDelete)
}

const displayNewProject = function(nameToDisplay,targetDisplay){
    changeActiveProject(nameToDisplay);

    var newProjectDiv = document.createElement('div');// PROJECT NAME DISPLAY
    newProjectDiv.classList.add("projectDisplayOf"+nameToDisplay);
    newProjectDiv.classList.add("projectDisplayOf");
    newProjectDiv.addEventListener('click', function(){
        console.log("READ ACTIVE IS >",readActiveProject());

        

        if (readActiveProject()!=nameToDisplay || readActiveProject() === null ){
            console.log("DIFERENTE PROJECT ACTIVE", nameToDisplay, readActiveProject())// Update the shown tasks
            changeActiveProject(nameToDisplay);
            changeCurrentHeader(nameToDisplay);
            updateDisplayTasks(nameToDisplay);


            
        } else if (readActiveProject()==nameToDisplay) {
            console.log("SAME PROJECT ACTIVE", nameToDisplay, readActiveProject())// Update the shown tasks;
            // changeActiveProject(nameToDisplay) ; // Update Active Project
            changeCurrentHeader(nameToDisplay);
            updateDisplayTasks(nameToDisplay);

            
        } else {
            console.log("no deberia llegar aquie nunca. Revisa displayNewProject.js")
            
        // changeActiveProject(nameToDisplay) ; // Update Active Project
        }
    })

    var deleteDiv = document.createElement('div');  //DELETE PROJECT BUTTON
    deleteDiv.classList.add('deleteProject' +nameToDisplay);
    deleteDiv.classList.add('deleteProject');
    deleteDiv.innerHTML += 'X';
    deleteDiv.addEventListener('click', function(){
        console.log("X nameToDisplay is: ",nameToDisplay)
        localStorage.removeItem("Project"+nameToDisplay);
        
        deleteProjectDisplay(`projectDisplayOf${nameToDisplay}`);
        if(readActiveProject()==nameToDisplay) { //SI el current Project es el activo, cambiar el status a null
            changeActiveProject(null)
        }
    })
    newProjectDiv.innerHTML = `<div class='projectDisplayName'>${nameToDisplay}</div>`;
    targetDisplay.appendChild(newProjectDiv);
    newProjectDiv.insertAdjacentElement('beforeend', deleteDiv);
    changeCurrentHeader(nameToDisplay);
    
    updateDisplayTasks()
}



export {displayNewProject}