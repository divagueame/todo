import {readActiveProject} from './activeProject';
console.log('NEW TODO ACTIVATED')
const protoNewTodo = {
    updateTodo: function(targetKey, newValue){
        this[targetKey] = newValue
    },
    getTaskId: function(obj){
        return obj.taskId
    }
};

const newTodo = (title, description, dueDate, priority)=> {
    let currentActive = readActiveProject();
    let thisTodo = Object.create(protoNewTodo);
    console.log("EN TODO el container Project es: ",currentActive)
    thisTodo["title"] = title;
    thisTodo['containerProject'] = currentActive;
    thisTodo["description"] = description;
    thisTodo["dueDate"] = dueDate;
    thisTodo["priority"] = priority;
    thisTodo["completed"]= false;
    thisTodo["taskId"] = title+description+dueDate+priority+"taskID";
    return thisTodo
}



export {
    newTodo
}