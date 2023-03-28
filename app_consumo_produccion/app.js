const cantidadPiezas = document.querySelector('#cantidadPiezas');
const cantidadConsumo = document.querySelector('#cantidadConsumo');
const btnPreparar = document.querySelector('#prepararMaquinas')
const btnArranque = document.querySelector('#arrancarMaquinas');
const btnParo = document.querySelector('#pararMaquinas');
const contenedorMaquinas = document.querySelector('#contenedorMaquinas');

const spinner = document.querySelector('.spinner');

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
        this.spinner = document.querySelector('.spinner');
        this.maquinaHTML = `
        <div class="maquina">
          <div class="controlMaquina">
            <img src="maquina.png" alt="maquina">
          </div>
          <div class="infoMaquina">
          
            <div class="infoProduccion">
              <h4>Pro</h4>
              <h5 class="valorProduccion">${produccion}</h5>
            </div>
            <div class="infoConsumo">
              <h4>Con</h4>
              <h5 class="valorConsumo">${consumo}</h5>
            </div>
          </div>
        </div>
        
        `;
          
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
const maquina2 = new Maquina(4,8);
const maquina3 = new Maquina(1,1);

// ARRAY CON TODAS LAS MAQUINAS
let grupoMaquinas = [maquina1, maquina2, maquina3];




function prepararMaquinas() {
  contenedorMaquinas.innerHTML = '';
  for(let i = 0; i < grupoMaquinas.length; i++) {
    contenedorMaquinas.innerHTML += grupoMaquinas[i].maquinaHTML;
  }
  maquinasPreparadas = true;
}




function arrancarMaquinas() {

    if(maquinasPreparadas) {
      spinner.style.opacity = 1;
      for(let i = 0; i < grupoMaquinas.length; i++) {
        grupoMaquinas[i].marcha();
      }

    }
    
}

function pararMaquinas() {
    if(maquinasPreparadas) {
      spinner.style.opacity = 0;
      for(let i = 0; i < grupoMaquinas.length; i++) {
        grupoMaquinas[i].paro();
      }

    }
}















