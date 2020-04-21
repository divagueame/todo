import {displayNewCard} from './displayNewCard.js';
import { newTodo } from './newTodo.js';
import {projects} from './initDisplay.js';

const mainContainer = document.querySelector(".container");


const updateLocalStorage = function(target, todoObj){
    localStorage.setItem(target, JSON.stringify(todoObj));
}

function createNewTaskForm(e) {
    e.preventDefault();
    var newName = (e.target.elements[0].value);
    var newDescription = (e.target.elements[1].value);
    var newDate = (e.target.elements[2].value);
    var newPriority = (e.target.elements[3].value);
    var objFromForm = newTodo(newName,newDescription,newDate,newPriority);
    displayNewCard(objFromForm,mainContainer);
    projects.push(objFromForm);
    updateLocalStorage(objFromForm['taskId'],objFromForm);

}



export {createNewTaskForm}