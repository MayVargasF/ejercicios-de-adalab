'use strict';

//Elementos del html que necesito: las dos caritas, el selector de mood y el botón.
//Escuchar el evento click sobre el botón
//recoger el valor del imput: good, bad
//añadir o quitar clase hidden según el valor del imput
//BONUS: lo del generar el número y todo eso.


const happyFace = document.querySelector('.js_happyFace');
const sadFace = document.querySelector('.js_sadFace');
const selectInput = document.querySelector('.js_selector');
const button = document.querySelector('.js_button');

const generarAleatorio = (min,max) => {
    return Math.random()
}


function handleClick (ev){
    ev.preventDefault();
   
    const value = selectInput.value;
    console.log(value);

    if (value === 'bad'){
      happyFace.classList.add('hidden');
      sadFace.classList.remove('hidden');   
    } else if (value === 'good'){
        happyFace.classList.remove('hidden');
        sadFace.classList.add('hidden');
    }

    generarAleatorio(1,100)
  
}

button.addEventListener('click', handleClick);
