
const removeTask = function(arrayProjects, id){

    console.log("TENEMOS ESTe id: ", id)

    
    for(var i=0;i<arrayProjects.length;i++){

        if(arrayProjects[i]['taskId'] == id){
            console.log("ESTE ES... ",arrayProjects[i]['taskId']);
            localStorage.removeItem(arrayProjects[i]['taskId']);
            arrayProjects = arrayProjects.splice(i,1);
        }
    }
};

export { removeTask}