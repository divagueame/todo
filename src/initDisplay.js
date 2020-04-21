import { newTodo } from './newTodo.js';
import {displayNewCard} from './displayNewCard.js'; 

const mainContainer = document.querySelector(".container");

var projects = [];

var local = Object.values(localStorage);

const restoreLocalToProjects = function(originalArray, callbackCreateTodo){
  var returnArray = [];
  originalArray.forEach(element => {
      if (element.indexOf('{')==0)
        {
          console.log(element);
        var tempElement = JSON.parse(element);
        tempElement = callbackCreateTodo(...Object.values(tempElement));
        returnArray.push(tempElement);
        }
    });
  return returnArray
};


//Recupera projects desde LocalStorage
projects = restoreLocalToProjects(local,newTodo);


//Inserta los  diferentes projects  en HTML
for(var i=0;i<projects.length;i++){
  displayNewCard(projects[i],mainContainer);
};


export {projects}