// SHOULD retrieve Local projects and display them on the left panel
//  Starts active project and sets it to null
import {newProjectOnList} from './newProjectOnList'
import {updateDisplayTasks} from './updateDisplayTasks';

const projectsListDisplay = document.querySelector(".projectsListDisplay"); 


let storedProjects = Object.entries(localStorage);
storedProjects = storedProjects.filter((x) => { // Recupera projects del Localstorage y los muestra en el left display
  if(x[0].substr(0,7)=='Project'){   
    newProjectOnList(x[1],projectsListDisplay)
    return x
  }
});
