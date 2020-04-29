let currentProjectDisplay = document.querySelector('.currentWorkingProject');

const changeCurrentHeader = function(newProjectTitle) {
    return currentProjectDisplay.innerHTML = `${newProjectTitle}`    
}

export {changeCurrentHeader}