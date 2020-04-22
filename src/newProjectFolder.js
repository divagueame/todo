

let allProjects = []
const newProjectsFolder = function (e) {
    e.preventDefault();
    console.log(e.target.elements[1].value);
    allProjects.push(e.target.elements[1].value)
    console.log(allProjects);

}

export {newProjectsFolder}