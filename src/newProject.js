import {changeCurrentHeader} from './changeCurrentHeader.js';
import {readActiveProject, changeActiveProject} from './activeProject';
import {newProjectOnList} from './newProjectOnList'
const projectsListDisplay = document.querySelector(".projectsListDisplay"); 

// NEW PROJECT  ===>> Onclick>
//                  // save the input project name in local storage . CHECKED
//                  // Change PROJECT header. CHECKED
//                  // Change active project CHECKED
//                  // Update project list from localstorage
//                  // Update current tasks. It should display an empty one.

const newProject = function (e) {
    e.preventDefault();
    let projectTitle = [e.target.elements[1].value][0]
    //Save the new project in localstorage
    localStorage.setItem("Project"+projectTitle,projectTitle);
    // Update to Project Header
    changeCurrentHeader(projectTitle);
    //Update Active project
    changeActiveProject(projectTitle);
    console.log('Current active Project is: ', readActiveProject())
    //Update Project list
    newProjectOnList(projectTitle,projectsListDisplay);
    // currentProjectDisplay.innerHTML = [e.target.elements[1].value];
    // mainContainer.innerHTML = "";

};
export {newProject}