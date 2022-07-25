'use strict';

const tasksUlElement = document.querySelector('.js_taskList');

const tasks = [
    { id:654564,
      name: "Recoger setas en el campo", 
      completed: true },
    { id:12574,
      name: "Comprar pilas", 
      completed: true },
    { id:478244,
      name: "Poner una lavadora de blancos", 
      completed: true },
    {
      id:2547554,
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];


//Que cuando cargue la página, se me cargue la lista de tareas

function renderEachTask(taskData) { //datos de cada tarea como parámetro, pinta cada tarea

    let html = '';

    if ( taskData.completed === true) {
      html = `<li class="js_task taskCompleted" id=${taskData.id}> <input type="checkbox" name="" id="" checked/>`
    }
    else  {
        html = `<li class="js_task" id=${taskData.id}> <input type="checkbox" name="" id=""/>`;
    }

    html += `${taskData.name} </li>`;

    return html;

}

// esta función pinta todas las tareas usando la función de pintar cada tarea con un bucle for para recorrer todo el array (todas las tareas)

function renderAllTasks() {

 tasksUlElement.innerHTML = ''; //vaciamos el ul por si tenía algo

 for (const eachTask of tasks) {
    const html = renderEachTask(eachTask);

    tasksUlElement.innerHTML += html;
 };
}

function handleClickTask(event) {
 
  const clickedTaskId = parseInt(event.currentTarget.id);

  const taskFound = tasks.find ((task) => task.id === clickedTaskId);

  if(taskFound.completed === true) {
    taskFound.completed === false
  } else {
    taskFound.completed === true
  }

  renderAllTasks();

}


renderAllTasks();

//quizá se pueda jugar con el índice para poner el listener en el ul y que el target te diga en qué posición del array se produce el evento de manera que entonces te ponga o quite la clase en esa posición en concreto.



const allLi = document.querySelectorAll('.js_task'); //nos devuelve un array, tenemos que poner el evento a cada li

for (const eachLi of allLi) {
 eachLi.addEventListener('click',handleClickTask);
}


