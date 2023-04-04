// VARIABLES

const contenedor = document.querySelector('#contenedor');


// EVENTOS
document.addEventListener("DOMContentLoaded", inicio);


// ARRAY
const arrayCartas = [
    '<img class="carta" src="images/1.jpg"',
    '<img class="carta" src="images/1.jpg"',
    '<img class="carta" src="images/2.jpg"',
    '<img class="carta" src="images/3.jpg"',
    '<img class="carta" src="images/4.jpg"',
    '<img class="carta" src="images/5.jpg"',
    '<img class="carta" src="images/5.jpg"',
    '<img class="carta" src="images/6.jpg"',
    '<img class="carta" src="images/6.jpg"',
    '<img class="carta" src="images/8.jpg"',
    '<img class="carta" src="images/8.jpg"',
    '<img class="carta" src="images/9.jpg"',
    '<img class="carta" src="images/9.jpg"',
    '<img class="carta" src="images/10.jpg"',
    '<img class="carta" src="images/10.jpg"',
    '<img class="carta" src="images/11.jpg"',
    '<img class="carta" src="images/11.jpg"',
    '<img class="carta" src="images/12.jpg"',
    '<img class="carta" src="images/12.jpg"',
    '<img class="carta" src="images/13.jpg"',
    '<img class="carta" src="images/13.jpg"',
    '<img class="carta" src="images/14.jpg"',
    '<img class="carta" src="images/15.jpg"',
    '<img class="carta" src="images/16.jpg"',
    '<img class="carta" src="images/16.jpg"',
    '<img class="carta" src="images/18.jpg"',
    '<img class="carta" src="images/18.jpg"',
    
];


// FUNCIONES 
function inicio() {
    contenedor.innerHTML = `<h1>ISTAMBUL</h1>
                           <h2>MODO SOLITARIO</h2>
                           <button class="boton" id="botonComenzar">COMENZAR</button>`;
    const btnComenzar = document.querySelector('#botonComenzar');
    btnComenzar.addEventListener('click', comenzar);
}

function comenzar() {
    contenedor.innerHTML = `<img class="carta" src="images/17.jpg">
                            <button class="boton" id="botonPrimeraCarta">SACAR 1ª CARTA</button>`;
    const btnPrimeraCarta = document.querySelector('#botonPrimeraCarta');
    btnPrimeraCarta.addEventListener('click', nuevaCarta);
}

function nuevaCarta() {
    let random = Math.floor(Math.random() * arrayCartas.length);
    contenedor.innerHTML = `${arrayCartas[random]}
                            <br>
                            <button class="boton" id="botonNuevaCarta">NUEVA CARTA</button>
                            `;
    const btnNuevaCarta = document.querySelector('#botonNuevaCarta');
    btnNuevaCarta.addEventListener('click', nuevaCarta);

}

