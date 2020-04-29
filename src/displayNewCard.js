import {removeTask} from './removeTask.js';
import { projects} from './initDisplay.js';


const displayNewCard = function(obj,targetElement){
    var newCard = document.createElement("div");
    newCard.classList.add("task-container");

    Object.entries(obj).forEach(function(x){
        if(x[0]!="taskId"){
            newCard.innerHTML += `<div class='task-item ${x[0]}-item'>${x[1]}</div>`
        }
        else {
            var thisId = obj["taskId"];
            var deleteButton =  `<div class='removeTaskButton' id='${thisId}'>Delete task</div>`;
            newCard.innerHTML += deleteButton;
        }
    });

    newCard.lastChild.addEventListener('click',function(){
        this.parentElement.remove();

        var thisId = obj["title"];
        console.log("thisId is:",thisId);
        console.log("Whose obj is:",obj);
        localStorage.removeItem(`Taskname${thisId}`)
        removeTask(projects, obj["taskId"]);

        
    });

    targetElement.appendChild(newCard)
    
}

export {displayNewCard}