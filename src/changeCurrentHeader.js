const changeCurrentHeader = function(newProjectTitle,target) {
    return target.innerHTML = `${newProjectTitle}`    
}

export {changeCurrentHeader}