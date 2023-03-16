window.onload = inicio;

function inicio() {
	document.getElementById("botones").insertAdjacentHTML(`beforeend`,
		`<button id="botonCapricho1" type="button" class="boton" onclick="capricho1()">1º Capricho</button>`);
		//<button id="botonCapricho2" type="button" class="boton" onclick="capricho2()">2ª Capricho</button>
		//<button id="botonCapricho3" type="button" class="boton" onclick="capricho3()">3º Capricho</button>`);
}

var estado = 0; //Corresponde al avance del juego. "0" es el estado inicial, "3" el final
var edificio = ["PABELLONES", "SERRALLOS", "ARCADAS", "SALAS", "JARDINES", "TORRES"];
var colorEdificio = ["#03A9F4", "#B71C1C", "#FFEB3B", "#F5F5F5", "#43A047", "#BA68C8"];
var primerRecuento = ["1 turno extra para reconstruir", "1 turno extra para tomar dinero", "2 turnos extra para reconstruir", "Tomar la primera carta del mazo de dinero.", "Tomar gratis el edificio más barato del tablero", "Tomar gratis el primer edificio de la torre"];
var segundoRecuento = ["2 turnos extra para reconstruir", "2 turnos extra para tomar dinero", "3 turnos extra para reconstruir", "Tomar las dos primeras carta del mazo de dinero.", "Tomar gratis el edificio que se desee del tablero", "Tomar gratis el primer edificio de la torre o el que se desee del tablero"];
var tercerRecuento = [" 10 Puntos extra", "5 Puntos extra por cada Serrallo colindante al Patio de los Leones (no separados por muro)", "10 Puntos extra", "5 Puntos extra por cada Arcada colindante a la Sala que elijas de la Alhambra (no separados por muro)", "5 Puntos extra por cada Jardín colindante a un Pabellón (no separados por muro)", "3 Puntos por cada sección de muralla de una loseta de Torre que esté en la muralla exterior más larga"];
var selectorCapricho = 0;






function capricho1() {
	if (estado == 0) {
		selectorCapricho = Math.floor(Math.random() * edificio.length);
		document.getElementById("imagenCapricho").insertAdjacentHTML("beforeend",`<h4>1º Capricho del Sultán</h4> <h3 style="background:${colorEdificio[selectorCapricho]}">${edificio[selectorCapricho]}</h3`);
		document.getElementById("favorDelSultan").insertAdjacentHTML("beforeend", `<h4>El favor del Sultán consistirá en:</h4><p>${primerRecuento[selectorCapricho]}</p>`);
		document.getElementById("botones").innerHTML = "";
		document.getElementById("botones").insertAdjacentHTML("beforeend", `<button id="botonCapricho2" type="button" class="boton" onclick="capricho2()">2º Capricho</button>`);
		estado = 1;
	}

}

function capricho2() {
	if (estado == 1) {
		selectorCapricho = Math.floor(Math.random() * edificio.length);
		document.getElementById("imagenCapricho").innerHTML = "";
		document.getElementById("favorDelSultan").innerHTML = "";
		document.getElementById("imagenCapricho").insertAdjacentHTML("beforeend",`<h4>2º Capricho del Sultán</h4> <h3 style="background:${colorEdificio[selectorCapricho]}">${edificio[selectorCapricho]}</h3`);
		document.getElementById("favorDelSultan").insertAdjacentHTML("beforeend",`<h4>El favor del Sultán consistirá en:</h4><p>${segundoRecuento[selectorCapricho]}</p>`);
		document.getElementById("botones").innerHTML = "";
		document.getElementById("botones").insertAdjacentHTML("beforeend", `<button id="botonCapricho3" type="button" class="boton" onclick="capricho3()">3º Capricho</button>`);
		estado = 2;
	}

	
}

function capricho3() {
	if (estado == 2) {
		selectorCapricho = Math.floor(Math.random() * edificio.length);
		document.getElementById("imagenCapricho").innerHTML = "";
		document.getElementById("favorDelSultan").innerHTML = "";
		document.getElementById("imagenCapricho").insertAdjacentHTML("beforeend",`<h4>3º Capricho del Sultán</h4> <h3 style="background:${colorEdificio[selectorCapricho]}">${edificio[selectorCapricho]}</h3`);
		document.getElementById("favorDelSultan").insertAdjacentHTML("beforeend",`<h4>El favor del Sultán consistirá en:</h4><p>${tercerRecuento[selectorCapricho]}</p>`);
		document.getElementById("botones").innerHTML = "";
		document.getElementById("botones").insertAdjacentHTML("beforeend", `<button id="reinicio" type="button" class="boton" onclick="location.reload()">Nueva partida</button>`);

		//location.reload() --> sirve para reiniciar la web
	}
	
}










