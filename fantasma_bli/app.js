// VARIABLES Y SELECTORES
const contenedorPrincipal = document.querySelector('#contenedorPrincipal');

let cartaRandom;
let tiempoRestante;

let juegoIniciado = false;
let tiempo = 0;
let aciertos = 0;
let fallos = 0;
let cartasRestantes = 10;





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
    const imagen10 = '<img class="imagenCarta" value="botella" src="./images/carta-10.jpg">';
    const imagen11= '<img class="imagenCarta" value="raton" src="./images/carta-11.jpg">';
    const imagen12= '<img class="imagenCarta" value="sillon" src="./images/carta-12.jpg">';
    const imagen13= '<img class="imagenCarta" value="fantasma" src="./images/carta-13.jpg">';
    const imagen14= '<img class="imagenCarta" value="sillon" src="./images/carta-14.jpg">';
    const imagen15= '<img class="imagenCarta" value="raton" src="./images/carta-15.jpg">';
    const imagen16= '<img class="imagenCarta" value="libro" src="./images/carta-16.jpg">';
    const imagen17= '<img class="imagenCarta" value="raton" src="./images/carta-17.jpg">';
    const imagen18= '<img class="imagenCarta" value="botella" src="./images/carta-18.jpg">';
    const imagen19= '<img class="imagenCarta" value="sillon" src="./images/carta-19.jpg">';
    const imagen20= '<img class="imagenCarta" value="botella" src="./images/carta-20.jpg">';
    const imagen21= '<img class="imagenCarta" value="libro" src="./images/carta-21.jpg">';
    const imagen22= '<img class="imagenCarta" value="fantasma" src="./images/carta-22.jpg">';
    const imagen23= '<img class="imagenCarta" value="botella" src="./images/carta-23.jpg">';
    const imagen24= '<img class="imagenCarta" value="raton" src="./images/carta-24.jpg">';
    const imagen25= '<img class="imagenCarta" value="fantasma" src="./images/carta-25.jpg">';
    const imagen26= '<img class="imagenCarta" value="libro" src="./images/carta-26.jpg">';
    const imagen27= '<img class="imagenCarta" value="sillon" src="./images/carta-27.jpg">';
    const imagen28= '<img class="imagenCarta" value="botella" src="./images/carta-28.jpg">';
    const imagen29= '<img class="imagenCarta" value="fantasma" src="./images/carta-29.jpg">';
    const imagen30 = '<img class="imagenCarta" value="raton" src="./images/carta-30.jpg">';
    const imagen31= '<img class="imagenCarta" value="fantasma" src="./images/carta-31.jpg">';
    const imagen32= '<img class="imagenCarta" value="sillon" src="./images/carta-32.jpg">';
    const imagen33= '<img class="imagenCarta" value="raton" src="./images/carta-33.jpg">';
    const imagen34= '<img class="imagenCarta" value="libro" src="./images/carta-34.jpg">';
    const imagen35= '<img class="imagenCarta" value="fantasma" src="./images/carta-35.jpg">';
    const imagen36= '<img class="imagenCarta" value="botella" src="./images/carta-36.jpg">';
    const imagen37= '<img class="imagenCarta" value="sillon" src="./images/carta-37.jpg">';
    const imagen38= '<img class="imagenCarta" value="botella" src="./images/carta-38.jpg">';
    const imagen39= '<img class="imagenCarta" value="libro" src="./images/carta-39.jpg">';
    const imagen40 = '<img class="imagenCarta" value="fantasma" src="./images/carta-40.jpg">';
    const imagen41= '<img class="imagenCarta" value="libro" src="./images/carta-41.jpg">';
    const imagen42= '<img class="imagenCarta" value="raton" src="./images/carta-42.jpg">';
    const imagen43= '<img class="imagenCarta" value="libro" src="./images/carta-43.jpg">';
    const imagen44= '<img class="imagenCarta" value="sillon" src="./images/carta-44.jpg">';
    const imagen45= '<img class="imagenCarta" value="sillon" src="./images/carta-45.jpg">';
    const imagen46= '<img class="imagenCarta" value="raton" src="./images/carta-46.jpg">';
    const imagen47= '<img class="imagenCarta" value="fantasma" src="./images/carta-47.jpg">';
    const imagen48= '<img class="imagenCarta" value="botella" src="./images/carta-48.jpg">';
    const imagen49= '<img class="imagenCarta" value="raton" src="./images/carta-49.jpg">';
    const imagen50 = '<img class="imagenCarta" value="sillon" src="./images/carta-50.jpg">';
    const imagen51= '<img class="imagenCarta" value="botella" src="./images/carta-51.jpg">';
    const imagen52= '<img class="imagenCarta" value="libro" src="./images/carta-52.jpg">';
    const imagen53= '<img class="imagenCarta" value="fantasma" src="./images/carta-53.jpg">';
    const imagen54= '<img class="imagenCarta" value="libro" src="./images/carta-54.jpg">';
    const imagen55= '<img class="imagenCarta" value="libro" src="./images/carta-55.jpg">';
    const imagen56= '<img class="imagenCarta" value="sillon" src="./images/carta-56.jpg">';
    const imagen57= '<img class="imagenCarta" value="botella" src="./images/carta-57.jpg">';
    const imagen58= '<img class="imagenCarta" value="raton" src="./images/carta-58.jpg">';
    const imagen59= '<img class="imagenCarta" value="botella" src="./images/carta-59.jpg">';
    const imagen60 = '<img class="imagenCarta" value="fantasma" src="./images/carta-60.jpg">';
    const imagen61= '<img class="imagenCarta" value="botella" src="./images/carta-61.jpg">';
    const imagen62= '<img class="imagenCarta" value="fantasma" src="./images/carta-62.jpg">';
    const imagen63= '<img class="imagenCarta" value="libro" src="./images/carta-63.jpg">';
    const imagen64= '<img class="imagenCarta" value="raton" src="./images/carta-64.jpg">';
    const imagen65= '<img class="imagenCarta" value="sillon" src="./images/carta-65.jpg">';
    

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
                    imagen9,
                    imagen10,
                    imagen11,
                    imagen12,
                    imagen13,
                    imagen14,
                    imagen15,
                    imagen16,
                    imagen17,
                    imagen18,
                    imagen19,
                    imagen20,
                    imagen21,
                    imagen22,
                    imagen23,
                    imagen24,
                    imagen25,
                    imagen26,
                    imagen27,
                    imagen28,
                    imagen29,
                    imagen30,
                    imagen40,
                    imagen41,
                    imagen42,
                    imagen43,
                    imagen44,
                    imagen45,
                    imagen46,
                    imagen47,
                    imagen48,
                    imagen49,
                    imagen50,
                    imagen51,
                    imagen52,
                    imagen53,
                    imagen54,
                    imagen55,
                    imagen56,
                    imagen57,
                    imagen58,
                    imagen59,
                    imagen60,
                    imagen61,
                    imagen62,
                    imagen63,
                    imagen64,
                    imagen65
                
                    
]


// EVENTOS
document.addEventListener('DOMContentLoaded', cargarPantallaJuego);




// FUNCIONES
function cargarPantallaInicio() {

}


function cargarPantallaJuego() {
    resetearContadores();
    contenedorPrincipal.innerHTML = `<div id="contenedorIzquierda">
                                        <button id="btnIniciarJuego">INICIAR</button>
                                        <div id="contenedorCarta">
                                            ${reverso}
                                        </div>
                                        
                                        <div id="contenedorContadores">
                                            <div class="label">
                                                <label for="cajaTiempo">Tiempo</label>
                                                <div id="cajaTiempo">${tiempo}</div>
                                            </div>

                                            <div class="label">
                                                <label for="cajaAciertos">Aciertos</label>
                                                <div id="cajaAciertos">${aciertos}</div>
                                            </div>

                                            <div class="label">
                                                <label for="cajaFallos">Fallos</label>
                                                <div id="cajaFallos">${fallos}</div>
                                            </div>

                                            <div class="label">
                                                <label for="cajaCartasRestantes">Cartas</label>
                                                <div id="cajaCartasRestantes">${cartasRestantes}</div>
                                            </div>
                                            
                                            
                                            
        
                                        </div>
                                    </div>

                                    <div id="contenedorObjetos">
                                        
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
    const cajaAciertos = document.querySelector('#cajaAciertos');
    const cajaFallos = document.querySelector('#cajaFallos');
    const cajaCartasRestantes = document.querySelector('#cajaCartasRestantes');
    

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
        botonIniciarJuego.remove()
        if(juegoIniciado != true) {
            juegoIniciado = true;
            tiempo = 0;
            aciertos = 0;
            fallos = 0;
            cartasRestantes = 10;
            
        contenedorCarta.innerHTML = elegirAleatorio(mazoCartas);
        cajaTiempo.innerHTML = tiempo;
        ajustarContadores();
        

        tiempoRestante = setInterval(function(){

                                tiempo++;
                                cajaTiempo.innerHTML = tiempo;         
                                }, 1000);
        }
        

    }

    function validarAcierto() {

        if(juegoIniciado) {
            if(this.getAttribute('value') === contenedorCarta.firstChild.getAttribute('value')){
                aciertos++;
                cartasRestantes--;
                cajaAciertos.style.backgroundColor = "green";
                setTimeout(function() {
                    cajaAciertos.style.backgroundColor = ""; 
                  }, 500);
                if(cartasRestantes != 0) {
                    contenedorCarta.innerHTML = elegirAleatorio(mazoCartas);
                } else {
                    setTimeout(function() {
                        clearInterval(tiempoRestante);
                        cargarPantallaFinal();
                      }, 1000);
                    
                }
                
            } else {
                fallos++;
                cajaFallos.style.backgroundColor = "red";
                setTimeout(function() {
                    cajaFallos.style.backgroundColor = ""; 
                  }, 500);
            }
        }
        ajustarContadores();
    }

    function ajustarContadores() {
        cajaAciertos.innerHTML = aciertos;
        cajaFallos.innerHTML = fallos;
        cajaCartasRestantes.innerHTML = cartasRestantes;
        
    }


    

                                    
}

function cargarPantallaFinal() {
    juegoIniciado = false;
    contenedorPrincipal.innerHTML = `<div id="contenedorFinal">
                                        <h1>RESULTADO</h1>
                                        <h3>HAS COMPLETADO EL JUEGO EN ${tiempo} SEGUNDOS</h3>
                                        <h3>CON ${fallos} FALLOS</h3>
                                        <button id="btnJugarDeNuevo">JUGAR DE NUEVO</button>
                                    </div>`;

    const botonJugarDeNuevo = document.querySelector('#btnJugarDeNuevo');
    botonJugarDeNuevo.addEventListener('click', cargarPantallaJuego);
    
}

function resetearContadores() {
    juegoIniciado = false;
    tiempo = 0;
    aciertos = 0;
    fallos = 0;
    cartasRestantes = 10;
}








