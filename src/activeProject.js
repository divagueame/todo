let activeProject = null;

const readActiveProject = function(){
    return activeProject
}
const changeActiveProject = function(newActiveProject){
    activeProject = newActiveProject;
}

export {readActiveProject, changeActiveProject}