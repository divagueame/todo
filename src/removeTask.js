import { projects} from './initDisplay.js';




const removeTask = function(arrayProjects, id){

    for(var i=0;i<arrayProjects.length;i++){

        if(arrayProjects[i]['taskId'] == id){
            localStorage.removeItem(arrayProjects[i]['taskId'])
            arrayProjects = arrayProjects.splice(i,1);
        }
    }
};

export { removeTask}