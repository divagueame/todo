
import { newTodo } from './newTodo.js';
import {projects} from './initDisplay.js';
import { updateDisplayTasks } from './updateDisplayTasks.js';


function createNewTaskForm(e) {
    e.preventDefault();
    let newName = (e.target.elements[0].value);
    let newDescription = (e.target.elements[1].value);
    let newDate = (e.target.elements[2].value);
    let newPriority = (e.target.elements[3].value);
    let objFromForm = newTodo(newName,newDescription,newDate,newPriority);
    projects.push(objFromForm);
    updateDisplayTasks();
    // displayNewCard(objFromForm,mainContainer); //
    // console.log("EN local se guarda: ",objFromForm['taskId'],objFromForm)
    // console.log("Task Se guarad en local como Taskname"+newName,JSON.stringify(objFromForm))
    localStorage.setItem("Taskname"+newName,JSON.stringify(objFromForm))

}





export {createNewTaskForm}