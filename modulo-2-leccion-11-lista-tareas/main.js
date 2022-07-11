'use strict';

const tasksUlElement = document.querySelector('.js_taskList');

const tasks = [
    { name: "Recoger setas en el campo", 
      completed: true },
    { name: "Comprar pilas", 
      completed: true },
    { name: "Poner una lavadora de blancos", 
      completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];


//Que cuando cargue la página, se me cargue la lista de tareas

function renderEachTask(taskData) { //datos de cada tarea como parámetro, pinta cada tarea

    let html = '';

    if ( taskData.completed === true) {
      html = `<li class="taskCompleted"> <input type="checkbox" name="" id="" checked/>`
    }
    else  {
        html = `<li> <input type="checkbox" name="" id=""/>`;
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

renderAllTasks();

//quizá se pueda jugar con el índice para poner el listener en el ul y que el target te diga en qué posición del array se produce el evento de manera que entonces te ponga o quite la clase en esa posición en concreto.


