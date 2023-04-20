// VARIABLES Y SELECTORES
const contenedorPrincipal = document.querySelector('#contenedorPrincipal');
let tiempo = 10;
let cartaRandom;
let juegoIniciado = false;





    // Imagenes
    const reverso = '<img class="imagenCarta" value="reverso" src="./images/reverso.jpg">';
    const imagen1 = '<img class="imagenCarta" value="raton" src="./images/carta-1.jpg">';
    const imagen2 = '<img class="imagenCarta" value="raton" src="./images/carta-2.jpg">';
    const imagen3 = '<img class="imagenCarta" value="fantasma" src="./images/carta-3.jpg">';
    const imagen4 = '<img class="imagenCarta" value="botella" src="./images/carta-4.jpg">';
    const imagen5 = '<img class="imagenCarta" value="libro" src="./images/carta-5.jpg">';
    const imagen6 = '<img class="imagenCarta" value="sillon" src="./images/carta-6.jpg">';
    const imagen7 = '<img class="imagenCarta" value="fantasma" src="./images/carta-7.jpg">';
    const imagen8 = '<img class="imagenCarta" value="sillon" src="./images/carta-8.jpg">';
    const imagen9 = '<img class="imagenCarta" value="libro" src="./images/carta-9.jpg">';

// ARRAY CARTAS
const mazoCartas = [
                    imagen1,
                    imagen2,
                    imagen3,
                    imagen4,
                    imagen5,
                    imagen6,
                    imagen7,
                    imagen8,
                    imagen9
]


// EVENTOS
document.addEventListener('DOMContentLoaded', cargarPantallaJuego)



// FUNCIONES
function cargarPantallaInicio() {

}


function cargarPantallaJuego() {
    contenedorPrincipal.innerHTML = `  <div id="contenedorIzquierda">
                                        <button id="btnIniciarJuego">INICIAR</button>
                                        <div id="contenedorCarta">
                                            ${reverso}
                                        </div>
                                            
                                        <div id="cajaTiempo">${tiempo}</div>
                                    </div>

                                    <div id="contenedorObjetos">
                                        <h2 id="textoHazClick">HAZ CLICK EN EL OBJETO CORRECTO</h2>
                                        <div id="objeto1" class="divObjeto" value="botella"><img src="./images/botella.jpg" class="objeto"></div>
                                        <div id="objeto2" class="divObjeto" value="fantasma"><img src="./images/fantasma.jpg" class="objeto"></div>
                                        <div id="objeto3" class="divObjeto" value="libro"><img src="./images/libro.jpg" class="objeto"></div>
                                        <div id="objeto4" class="divObjeto" value="raton"><img src="./images/raton.jpg" class="objeto"></div>
                                        <div id="objeto5" class="divObjeto" value="sillon"><img src="./images/sillon.jpg" class="objeto"></div>
                                    </div>`;

    const botonIniciarJuego = document.querySelector('#btnIniciarJuego');

    const objeto1 = document.querySelector('#objeto1');
    const objeto2 = document.querySelector('#objeto2');
    const objeto3 = document.querySelector('#objeto3');
    const objeto4 = document.querySelector('#objeto4');
    const objeto5 = document.querySelector('#objeto5');

    const cajaTiempo = document.querySelector('#cajaTiempo');
    

    botonIniciarJuego.addEventListener('click', iniciarJuego);

    objeto1.addEventListener('click', validarAcierto);
    objeto2.addEventListener('click', validarAcierto);
    objeto3.addEventListener('click', validarAcierto);
    objeto4.addEventListener('click', validarAcierto);
    objeto5.addEventListener('click', validarAcierto);

    function elegirAleatorio(array) {
        cartaRandom = array[Math.floor(Math.random() * array.length)];
        return cartaRandom;
      }

    function iniciarJuego() {
        juegoIniciado = true;
        contenedorCarta.innerHTML = elegirAleatorio(mazoCartas);
        cajaTiempo.innerHTML = tiempo;

        let tiempoRestante = setInterval(function(){
                                tiempo--;
                                cajaTiempo.innerHTML = tiempo;
                                if(tiempo === 0) {
                                console.log('El tiempo acabó');
                                contenedorCarta.innerHTML = elegirAleatorio(mazoCartas);
                                tiempo = 11;
                                }
                                }, 1000);

    }

    function validarAcierto() {

        if(juegoIniciado) {
            if(this.getAttribute('value') === contenedorCarta.firstChild.getAttribute('value')){
                console.log('Coincide');
            } else {
                console.log('NO Coincide');
            }
        }
    }

                                    
}








