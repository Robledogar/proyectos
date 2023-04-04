// VARIABLES

const contenedor = document.querySelector('#contenedor');


// EVENTOS
document.addEventListener("DOMContentLoaded", inicio);





// FUNCIONES 
function inicio() {
    contenedor.innerHTML = `<h1>ISTAMBUL</h1>
                           <h2>MODO SOLITARIO</h2>
                           <button id="botonComenzar">COMENZAR</button>`;
    const btnComenzar = document.querySelector('#botonComenzar');
    btnComenzar.addEventListener('click', comenzar);
}

function comenzar() {
    contenedor.innerHTML = `<img class="carta" src="images/17.jpg">
                            <button id="botonNuevaCarta">NUEVA CARTA</button>`;
}