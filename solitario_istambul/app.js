// VARIABLES
const botonera = document.querySelector('#botonera');
const contenedor = document.querySelector('#contenedor');

let juegoEmpezado;
let random;
let cartaBarajar;



// EVENTOS
document.addEventListener("DOMContentLoaded", inicio);


// ARRAYS
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

let copiaArrayCartas = [];


// FUNCIONES 

//Carga la pantalla de inicio
function inicio() {
    juegoEmpezado = false;
    botonera.innerHTML = '';
    contenedor.innerHTML = `<h1>ISTAMBUL</h1>
                           <h2>MODO SOLITARIO</h2>
                           <button class="boton" id="botonComenzar">COMENZAR JUEGO</button>
                           <button class="boton" id="botonReglamento">REGLAMENTO</button>`;

    const btnComenzar = document.querySelector('#botonComenzar');
    const btnReglamento = document.querySelector('#botonReglamento');

    btnComenzar.addEventListener('click', comenzar);
    btnReglamento.addEventListener('click', mostrarReglamento);
}

// Carga la imagen del juego, prepara el mazo de cartas y carga el botón de sacar 1ª carta
function comenzar() {
    
    contenedor.innerHTML = `<img class="carta" src="images/17.jpg">
                            <button class="boton" id="botonPrimeraCarta">SACAR 1ª CARTA</button>`;

    const btnPrimeraCarta = document.querySelector('#botonPrimeraCarta');
    btnPrimeraCarta.addEventListener('click', sacarPrimeraCarta); 
}

function sacarPrimeraCarta() {
    barajarMazo();

    botonera.innerHTML = `  <button class="botonBotonera" id="botonConsultaReglamento" title="Consultar reglamento">?</button>
                            <button class="botonBotonera" id="botonVolverInicio" title="Finalizar juego">X</button>
                            `;
    const btnConsultarReglamento = document.querySelector('#botonConsultaReglamento');
    const btnVolverInicio = document.querySelector('#botonVolverInicio');

    btnConsultarReglamento.addEventListener('click', mostrarReglamento);
    btnVolverInicio.addEventListener('click', asegurarFinJuego);

    nuevaCarta();
}

// Genera una carta aleatoria, la elimina del array y carga el botón Nueva carta
function nuevaCarta() {
    juegoEmpezado = true;
    cartaBarajar = false;
    
    contenedor.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';

    setTimeout(function() {
        random = Math.floor(Math.random() * copiaArrayCartas.length);
        contenedor.innerHTML = `${copiaArrayCartas[random]}
                            <br>
                            <button class="boton" id="botonNuevaCarta">SACAR CARTA</button>
                            `;
        const btnNuevaCarta = document.querySelector('#botonNuevaCarta');
        btnNuevaCarta.addEventListener('click', nuevaCarta);
        copiaArrayCartas.splice(random, 1);

        if (contenedor.querySelector('.carta').getAttribute('src') === 'images/18.jpg') {
            btnNuevaCarta.textContent = 'BARAJAR MAZO';
            barajarMazo();
            cartaBarajar = true;
          }
        
      }, 1500);
      
  console.log(copiaArrayCartas);
}

// Copia el arrayCartas original
function barajarMazo() {
    copiaArrayCartas = [...arrayCartas];
};

// Muestra el reglamento del juego
function mostrarReglamento() {
    console.log(random);
    contenedor.innerHTML = `<div id="textoReglamento"> 
                                <h3>REGLAMENTO</h3>
                                <h4>Acciones de Mani:</h4>
                                <p>Mani lleva a cabo una acción por turno.</p>
                                <br>
                                <p>Si no tiene fichas de ayudante debajo:</p>
                                <p>Envíale a la Loseta 7. La Fuente, reúne sus fichas de ayudante y toma una Gema de la Loseta 13. PALACIO DEL SULTAN o de la loseta 16. TRATANTE DE GEMAS (de la que menos gemas tenga, en caso de igualdad, tú eliges la que toma).</p>
                                <br>
                                <p>Si tiene alguna ficha debajo:</p>
                                <p>Voltea la carta superior del mazo de Mani y envíale a la loseta que indica la carta, dejando en ella una de sus fichas o recogiendo otra suya que allí estuviera y resuelve según cada loseta:</p>
                                <br>
                                <p>1 CARRETERO: Si aún no tiene el carro lleno, Mani toma una ficha del carro y la coloca en él, si es su última ficha de carro se lleva una Gema.</p>
                                <p>2 ALMACEN DE TELAS: No realiza acciones.</p>
                                <p>3 ALMACEN DE ESPECIAS: No realiza acciones.</p>
                                <p>4 ALMACEN DE FRUTAS: No realiza acciones.</p>
                                <p>5 ESTAFETA: Mueve el marcador correspondiente.</p>
                                <p>6 CARAVASAR: Elimina del juego la carta superior.</p>
                                <p>8 MERCADO NEGRO: No realiza acciones.</p>
                                <p>9 CASA DE TÉ: No realiza acciones.</p>
                                <p>10 GRAN MERCADO: Elimina del juego la ficha superior.</p>
                                <p>11 MERCADILLO: Elimina del juego la ficha superior.</p>
                                <p>12 CUARTELILLO: Si el sobrino de Mani está aquí, Roba una nueva carta del mazo de Mani y envía a la localización de la carta al sobrino, llevando a cabo la acción de esa loseta.</p>
                                <p>13 PALACIO DEL SULTAN: No realiza acciones.</p>
                                <p>14 MEZQUITA PEQUEÑA: Si no tiene en su poder alguna loseta roja o verde, toma la loseta que menos coste tenga, si ambas cuestan lo mismo, toma la que te falte a ti, si persiste la igualdad, eliges tu la que toma. Si tiene una de las dos en su poder, toma la otra y coge una Gema. Si tiene ambas, toma la que te falte a ti.</p>
                                <p>15 GRAN MEZQUITA: Si no tiene en su poder alguna loseta amarilla o azul, toma la loseta amarilla. Si tiene la amarilla en su poder, toma la azul y coge una nueva ficha bajo su control y una Gema. Si tiene ambas, toma la que te falte a ti.</p>
                                <p>16 TRATANTE DE GEMAS: No realiza acciones</p>
                            
                                <h4>Nuestras acciones</h4>
                                <p>Moveremos y llevaremos a cabo las acciones tal y como indican las reglas del juego con la salvedad de que no podemos llevar a nuestro personaje a una loseta donde haya una ficha de ayudante de Mani o el mismo.</p>
                                <h4>Nuestros Encuentros</h4>
                                <p>Se llevan a cabo como dicen las reglas, exceptuando el encuentro con el propio Mani que no tendrá efecto y solo se producirá si Mani se mueve a nuestra loseta, en tal caso nos cobraremos de la banca 2 monedas (emulando el pago de Mani a nosotros por tratar de hacer una acción donde esta nuestro personaje).</p>
                                <h4>Encuentros de Mani</h4>
                                <p>Si se encuentra con el alguna de las 2 fichas de Gobernador o Contrabandista, Mani tomará un turno extra y luego lanzaremos los 2 dados de 6 para reubicar al Gobernador o Contabandista. Esto solo lo llevara a cabo una vez por turno, si se volviese a encontrar con otra ficha de Gobernador o Contrabandista en el turno extra, no tomará un segundo turno extra.</p>
                                <br>
                                <p>Si se encuentra con nuestro sobrino, mandará a este al cuartelillo y tomará un turno extra, pero como antes, un solo turno extra.</p>
                                <br>
                                <p>Si se encuentra con nuestro personaje, cobraremos de la banca 2 monedas y  Mani lleva a cabo la acción correspondiente a la loseta.</p>
                                <h4>El objetivo del juego es lograr todas las gemas de nuestro carro antes que lo haga Mani.</h4>
                                <p>Probar a ganar ubicando las losetas con los números de caminos cortos y una vez superado, el de los caminos largos o de forma aleatoria.</p>
                                </div>
                                <br>
                                <button class="boton" id="btnVolverAlJuego">VOLVER</button>
                                `;
    const btnVolverInicio = document.querySelector('#btnVolverAlJuego');

    btnVolverInicio.addEventListener('click', volverAlJuego);
     
}

function volverAlJuego() {

    if(juegoEmpezado) { 

        if (cartaBarajar) {
            nuevaCarta()
          } else {
            contenedor.innerHTML = `${copiaArrayCartas[random]}
                            <br>
                            <button class="boton" id="botonNuevaCarta">SACAR CARTA</button>
                            `;
            const btnNuevaCarta = document.querySelector('#botonNuevaCarta');
            btnNuevaCarta.addEventListener('click', nuevaCarta);
          }
       
    } else {
        inicio();
    }    
}

function asegurarFinJuego() {
    
    contenedor.innerHTML = ` <h3>¿Quieres salir del juego?</h3>
                                <button class="boton" id="botonSalir">SALIR</button>
                                <button class="boton" id="botonContinuar">CONTINUAR</button>  
                            `;
    const btnSalir = document.querySelector('#botonSalir');
    const btnContinuar = document.querySelector('#botonContinuar');

    btnSalir.addEventListener('click', inicio);
    btnContinuar.addEventListener('click', volverAlJuego);
}
