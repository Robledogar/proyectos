const cantidadPiezas = document.querySelector('#cantidadPiezas');
const cantidadConsumo = document.querySelector('#cantidadConsumo');
const btnPreparar = document.querySelector('#prepararMaquinas')
const btnArranque = document.querySelector('#arrancarMaquinas');
const btnParo = document.querySelector('#pararMaquinas');
const contenedorMaquinas = document.querySelector('#contenedorMaquinas');

btnPreparar.addEventListener('click', prepararMaquinas);
btnArranque.addEventListener('click', arrancarMaquinas);
btnParo.addEventListener('click', pararMaquinas);

let produccionTotal = 0;
let consumoTotal = 0;
let maquinasPreparadas = false;

// CLASES
class Maquina {
    constructor(produccion, consumo) {
        this.produccion = produccion;
        this.consumo = consumo;
        this.btnMarcha = document.querySelector('.btnMarcha');
        this.btnParo = document.querySelector('.btnParo');
        this.intervalo = null;
          
    }

    // METODOS
    marcha() {
            this.intervalo = setInterval(() => {
            produccionTotal = produccionTotal + this.produccion;
            consumoTotal = consumoTotal + this.consumo;
            cantidadPiezas.innerHTML = `${produccionTotal} Piezas`;
            cantidadConsumo.innerHTML = `${consumoTotal} KW`;
        }, 3000);
    }
 
 
    paro() {
        clearInterval(this.intervalo);
    }
}


// INSTANCIAR maquinas
const maquina1 = new Maquina(2,5);
const maquina2 = new Maquina(4,10);


const maquina1HTML = `
<div class="maquina">
  <div class="controlMaquina">
    <img src="maquina.png" alt="maquina">
    <div class="btnsMaquina">
      <button class="btnMarcha">M</button>
      <button class="btnParo">P</button>
    </div>
  </div>
  <div class="infoMaquina">
    <div class="infoProduccion">
      <h4>Pro</h4>
      <h5 class="valorProduccion">2</h5>
    </div>
    <div class="infoConsumo">
      <h4>Con</h4>
      <h5 class="valorConsumo">5</h5>
    </div>
  </div>
</div>

`;

const maquina2HTML = `
<div class="maquina">
  <div class="controlMaquina">
    <img src="maquina.png" alt="maquina">
    <div class="btnsMaquina">
      <button class="btnMarcha">M</button>
      <button class="btnParo">P</button>
    </div>
  </div>
  <div class="infoMaquina">
    <div class="infoProduccion">
      <h4>Pro</h4>
      <h5 class="valorProduccion">4</h5>
    </div>
    <div class="infoConsumo">
      <h4>Con</h4>
      <h5 class="valorConsumo">10</h5>
    </div>
  </div>
</div>
`;


function prepararMaquinas () {
        contenedorMaquinas.innerHTML = maquina1HTML + maquina2HTML;
        maquinasPreparadas = true;
  
}


function arrancarMaquinas() {
    if(maquinasPreparadas) {
        maquina1.marcha();
        maquina2.marcha();
    }
    
}

function pararMaquinas() {
    maquina1.paro();
    maquina2.paro();
}















