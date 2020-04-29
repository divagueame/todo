import { newTodo } from './newTodo.js';
import {displayNewCard} from './displayNewCard.js'; 
import {displayNewProject} from './displayNewProject';
import {changeCurrentHeader} from './changeCurrentHeader.js';

const togglerButtonSelector = document.querySelector('.newTodoFormToggler');
togglerButtonSelector.innerHTML = 'Select a project or create a new one on the left panel.';

const mainContainer = document.querySelector(".container");
const projectsListDisplay = document.querySelector(".projectsListDisplay"); 
let projects = [];


let currentProjectDisplay = document.querySelector('.currentWorkingProject');


let storedProjects = Object.entries(localStorage);
console.log("Stored projects in Local ",storedProjects)
storedProjects = storedProjects.filter((x) => { // Recupera projects del Localstorage y los muestra en el left display
  if(x[0].substr(0,7)=='Project'){   
    displayNewProject(x[1],projectsListDisplay)
    return x
  }
});

currentProjectDisplay.innerHTML = '';

//Recover tasks from Local
const restoreLocalToProjects = function(originalArray, callbackCreateTodo){
  let returnArray = [];
  originalArray.forEach(element => {
      if (element.indexOf('{')==0)
        {
        let tempElement = JSON.parse(element);
        let belongsTo = Object.values(tempElement)[1];
        tempElement = callbackCreateTodo(...Object.values(tempElement));
        tempElement.updateTodo('containerProject',belongsTo)
        returnArray.push(tempElement);
        }
    });
    console.log("HA RECUPERADO ESTAS TASKS DEL LOCALSTORAGE: ",returnArray)
  return returnArray
};


//Recupera projects desde LocalStorage

let local = Object.values(localStorage);

projects = restoreLocalToProjects(local,newTodo);

// //Inserta los  diferentes projects  en HTML
// for(var i=0;i<projects.length;i++){
//   displayNewCard(projects[i],mainContainer);
// };


export {projects}