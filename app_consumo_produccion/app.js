// VARIABLES
const cantidadPiezas = document.querySelector('#cantidadPiezas');
const cantidadConsumo = document.querySelector('#cantidadConsumo');

let produccionTotal = 0;
let consumoTotal = 0;



let intervalo;

const valorProduccion = document.querySelector('.valorProduccion');
const valorConsumo = document.querySelector('.valorConsumo')

const btnMarcha = document.querySelector('.btnMarcha');
const btnParo = document.querySelector('.btnParo');

//EVENTOS
btnMarcha.addEventListener('click', marcha);
btnParo.addEventListener('click', paro);



// CLASES
class Maquina {
    constructor(produccion, consumo) {
        this.produccion = produccion;
        this.consumo = consumo;
    }
}


// INSTANCIAR Maquina1
const maquina1 = new Maquina(2,5);




// FUNCIONES
function marcha() {
   intervalo = setInterval(function() {
        produccionTotal = produccionTotal + Number(valorProduccion.innerHTML);
        consumoTotal = consumoTotal + Number(valorConsumo.innerHTML);
        cantidadPiezas.innerHTML = produccionTotal;
        cantidadConsumo.innerHTML = consumoTotal;
    }, 3000);
}


function paro() {
    clearInterval(intervalo);
}