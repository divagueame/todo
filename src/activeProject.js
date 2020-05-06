let activeProject = null;


const readActiveProject = function(){
    return activeProject
}
const changeActiveProject = function(newActiveProject){
    activeProject = newActiveProject;
}
console.log('Active Project on start is, ', readActiveProject());
export {readActiveProject, changeActiveProject}