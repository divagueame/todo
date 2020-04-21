const protoNewTodo = {
    updateTodo: function(targetKey, newValue){
        this[targetKey] = newValue
    },
    getTaskId: function(obj){
        return obj.taskId
    }
};

const newTodo = (title, description, dueDate, priority)=> {
    var thisTodo = Object.create(protoNewTodo);
    thisTodo["title"] = title;
    thisTodo["description"] = description;
    thisTodo["dueDate"] = dueDate;
    thisTodo["priority"] = priority;
    thisTodo["taskId"] = title+description+dueDate+priority+"taskID";
    // thisTodo["taskId"] = ""+ title + Math.floor(10000*Math.random()) + description + dueDate + priority;

    return thisTodo
}



export {
    newTodo
}