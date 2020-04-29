import {displayNewCard} from './displayNewCard.js';
import {readActiveProject} from './activeProject';
import {projects} from './initDisplay.js'
const mainContainer = document.querySelector(".container");
import {taskAdderToggler} from './taskAdderToggler.js';

const updateDisplayTasks = function(){


    console.log("Active project is: ",readActiveProject());
var displayArray =  projects.filter(function(x){
    if(x.containerProject == readActiveProject()){
        console.log("Is same as active, x: ", x.containerProject)
        return x;
    }

});

console.log('FILTERED Projects:  ', displayArray);

taskAdderToggler(displayArray)

mainContainer.innerHTML = "";
displayArray.forEach(function(y){    
    displayNewCard(y,mainContainer)
});


}


export {updateDisplayTasks }