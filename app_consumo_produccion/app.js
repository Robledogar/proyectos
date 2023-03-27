// VARIABLES
const cantidadPiezas = document.querySelector('#cantidadPiezas');
const cantidadConsumo = document.querySelector('#cantidadConsumo');

let produccionTotal = 0;
let consumoTotal = 0;











// CLASES
class Maquina {
    constructor(produccion, consumo) {
        this.produccion = produccion;
        this.consumo = consumo;
        this.btnMarcha = document.querySelector('.btnMarcha');
        this.btnParo = document.querySelector('.btnParo');
        this.intervalo = null;

        //EVENTOS
        this.btnMarcha.addEventListener('click', this.marcha.bind(this));
        this.btnParo.addEventListener('click', this.paro.bind(this));
    }

    // METODOS
    marcha() {
            this.intervalo = setInterval(() => {
            produccionTotal = produccionTotal + this.produccion;
            consumoTotal = consumoTotal + this.consumo;
            cantidadPiezas.innerHTML = produccionTotal;
            cantidadConsumo.innerHTML = consumoTotal;
        }, 3000);
    }
 
 
    paro() {
        clearInterval(this.intervalo);
    }
}


// INSTANCIAR Maquina1
const maquina1 = new Maquina(2,5);














