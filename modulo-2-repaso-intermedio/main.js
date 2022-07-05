'use strict';

//Elementos del html que necesito: las dos caritas, el selector de mood y el botón.
//Escuchar el evento click sobre el botón: actualizarSelect() + cambiarFondo()

//actualizarSelect()
//recoger el valor del imput: good, bad
//añadir o quitar clase hidden según el valor del imput

//cambiarFondo()
//Crear una función que genere un número aleatorio
//Recoger el random, verificar si es par o impar y cambiar el color de fondo


const happyFace = document.querySelector('.js_happyFace');
const sadFace = document.querySelector('.js_sadFace');
const selectInput = document.querySelector('.js_selector');
const button = document.querySelector('.js_button');
const main = document.querySelector('.js_main');



//Versión más sencilla de pintar la carita: en realidad sólo había que crear un sólo div de face e imprimir ahí el value que sería la carita en sí.

// function updateMain2 (){
//     const selectValue = selectInput.value;
//     face.innerHTML =selectValue
// }

function updateMain (){
    const value = selectInput.value;
    console.log(value);

    if (value === 'bad'){
      happyFace.classList.add('hidden');
      sadFace.classList.remove('hidden');   
    } else if (value === 'good'){
        happyFace.classList.remove('hidden');
        sadFace.classList.add('hidden');
    }

}

//Math es un objeto de js que tiene muchos métodos (return es un método de Math) -- floor (redondea hacia abajo) y ceil (redondea hacia arriba) es un método para redondear.

const getRandom = (max) => {
    return parseInt(Math.random()*max);
}

const changeBackground = () => {
    const randomNumber = getRandom(100);

    console.log(randomNumber);

    if (randomNumber % 2 === 0){
        //console.log ('es par');
        main.classList.add('yellow');
        main.classList.remove('orange');
    } 
    else {
        //console.log ('es impar');
        main.classList.add('orange');
        main.classList.remove('yellow');
    }

    
}


function handleClick (ev){
    ev.preventDefault();
    updateMain();
    changeBackground();
}

button.addEventListener('click', handleClick); //aquí handleClick es un callback que funciona como parámetro, no la ejecutamos nosotras,es ejecutada por el navegador (función ejecutada por otra función)
