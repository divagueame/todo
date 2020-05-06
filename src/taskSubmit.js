import {newTodo} from './newTodo';
import {updateDisplayTasks} from './updateDisplayTasks';
const taskSubmit = function(e){
    e.preventDefault();
        let newName = (e.target.elements[0].value);
        let newDescription = (e.target.elements[1].value);
        let newDate = (e.target.elements[2].value);
        let newPriority = (e.target.elements[3].value);
        let objFromForm = newTodo(newName,newDescription,newDate,newPriority);

        localStorage.setItem("Taskname"+newName,JSON.stringify(objFromForm));
        updateDisplayTasks(objFromForm.containerProject);
    
}


export {taskSubmit}