 
 // importing html parameters, as variables

 const inputTask = document.querySelector('.task-input');
 const btnTask = document.querySelector('.btn-task');
 const tasks = document.querySelector('.tasks');

function liCreator() {

    const li = document.createElement('li');
    return li;
}

 // add with the enter key, using your keycode

 inputTask.addEventListener('keypress', function(e){

     if (e.keyCode === 13) {

        if(!inputTask.value) return;

        taskCreator(inputTask.value);
     }
 });

 // clearing the input for the user to type again, putting this in focus

 function inputCleaner(){

    inputTask.value = '';
    inputTask.focus();
 }

 // creating the delete task button

function getDeleteButton(li) {

    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';

    deleteButton.setAttribute('class', 'delete');
    deleteButton.setAttribute('title', 'Delete this task');

    li.appendChild(deleteButton);
}

 // creating the tasks

function taskCreator(textInput) {

    const li = liCreator();
    li.innerText = textInput;

    tasks.appendChild(li);

    inputCleaner();

    getDeleteButton(li);

    saveTasks();
}

// capture the data

 btnTask.addEventListener('click', function(){

    if(!inputTask.value) return;

    taskCreator(inputTask.value);
 })

 // putting the "delete" button to work

 document.addEventListener('click', function(e){

    const el = e.target;
    
    if (el.classList.contains('delete')) {

        el.parentElement.remove();
    }
 })

// saving tasks

function saveTasks() {

    const liTasks = tasks.querySelectorAll('li');
    
    const taskList = [];

    for (let task of liTasks ) {

        let textTask = task.innerText;

        // replacing the word delete, for nothing
        textTask = textTask.replace('delete', '').trim(); 
        // trim serves to remove the space

        taskList.push(textTask); // putting information in the array
    }

    // creating an array string, converted to JSON

    const JSONTasks = JSON.stringify(taskList);
    console.log(JSONTasks);
}