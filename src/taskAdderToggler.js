const formHtmlSelector = document.querySelector('.newTodoForm');
const togglerButtonSelector = document.querySelector('.newTodoFormToggler');

const taskAdderToggler = function (elements){
    togglerButtonSelector.innerHTML = 'Choose a project or create a new one on the left panel.'
    if(elements != undefined){
        togglerButtonSelector.innerHTML = 'Click here to add a new task';
        togglerButtonSelector.addEventListener('click',function(){
        formHtmlSelector.classList.remove('newTodoFormHidden');
        togglerButtonSelector.classList.add('newTodoFormTogglerHidden');
        console.log('AHORA',elements)
        console.log('YOu cliked here bitch');
    })

    }
}

const taskAdderHide = function(){
    formHtmlSelector.classList.add('newTodoFormHidden');
    togglerButtonSelector.classList.remove('newTodoFormTogglerHidden');
}



export {taskAdderToggler,taskAdderHide}