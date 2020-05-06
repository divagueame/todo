import {displayTask} from './displayTask';
import {newTodo} from './newTodo';
import {readActiveProject, changeActiveProject} from './activeProject';
const mainContainer = document.querySelector(".container");

//// UPDATE DISPLAY TASKS
const updateDisplayTasks = function(projectNameToDisplay){ // Should recover the localstorage tasks belonging to this project and display
console.log('UPDATE', projectNameToDisplay)    
    
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
  let projects = restoreLocalToProjects(local,newTodo);
  

var displayArray =  projects.filter(function(x){
    if(x.containerProject == readActiveProject()){
        console.log("Is same as active, x: ", x.containerProject)
        return x;
    }
});

// taskAdderToggler(displayArray)

mainContainer.innerHTML = "";
displayArray.forEach(function(y){    
    displayTask(y,mainContainer)
});

}

export {updateDisplayTasks}