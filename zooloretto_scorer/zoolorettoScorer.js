/*----------------------------------- VARIABLES--------------------------------------------*/
let meterEnContenedorTexto = document.getElementById("contenedorTexto");
let meterEnContenedorPrincipal = document.getElementById("contenedorPrincipal");
let meterEnContenedorBotones = document.getElementById("contenedorBotones");
let numeroJugadores = 0; // Número de jugadores seleccionado por el usuario
let pluralMoneda = "monedas";
/*------------------------------ ARRAYS DATOS JUGADORES------------------------------------*/
let jugador1 = [
	{
		nombre: "",
		puntosRecintos: 0,
		puntosPuestos: 0,
		puntosEstablo: 0,
		monedas: 0,
		puntuacionFinal: 0
	}	
];

let jugador2 = [
	{
		nombre: "",
		puntosRecintos: 0,
		puntosPuestos: 0,
		puntosEstablo: 0,
		monedas: 0,
		puntuacionFinal: 0
	}	
];

let jugador3 = [
	{
		nombre: "",
		puntosRecintos: 0,
		puntosPuestos: 0,
		puntosEstablo: 0,
		monedas: 0,
		puntuacionFinal: 0
	}	
];

let jugador4 = [
	{
		nombre: "",
		puntosRecintos: 0,
		puntosPuestos: 0,
		puntosEstablo: 0,
		monedas: 0,
		puntuacionFinal: 0
	}	
];

let jugador5 = [
	{
		nombre: "",
		puntosRecintos: 0,
		puntosPuestos: 0,
		puntosEstablo: 0,
		monedas: 0,
		puntuacionFinal: 0
	}	
];

let todosLosJugadores = [jugador1, jugador2, jugador3, jugador4, jugador5];


/*----------------------------- CARGA DE PANTALLA INICIAL----------------------------------*/
window.onload = cargarPantallaInicio;




/*----------------------------------- FUNCIONES------------------------------------------*/
function cargarPantallaInicio() {
	meterEnContenedorTexto.innerHTML = "";
	meterEnContenedorPrincipal.innerHTML = "";
	meterEnContenedorBotones.innerHTML = "";

	meterEnContenedorTexto.insertAdjacentHTML("beforeend", 
		`<h1>ZOOLORETTO</h1>
		<h2>SCORER</h2>`
		);

	meterEnContenedorPrincipal.insertAdjacentHTML("beforeend", 
		`<button id="nuevaPartida">NUEVA PARTIDA</button>
		<select id="jugadores">
			<option>2 Jugadores</option>
			<option>3 Jugadores</option>
			<option>4 Jugadores</option>
			<option>5 Jugadores</option>
		</select>`);

	meterEnContenedorBotones.innerHTML = ""

	document.getElementById("nuevaPartida").onclick = cargarPantallaPuntos; // Este botón carga la siguiente pantalla (Pantalla Puntos)
} // Final función cargarPantallaInicio()

function cargarPantallaPuntos() {
	
		numeroJugadores = document.getElementById("jugadores").value; //Recoge el valor del la selección del número de jugadores y lo guarda en la variable
	
	
	
	meterEnContenedorTexto.innerHTML = "<h2>TABLA DE PUNTUACIÓN</h2>";
	meterEnContenedorPrincipal.innerHTML = "";
	meterEnContenedorBotones.innerHTML = " ";

	if (numeroJugadores == "2 Jugadores") {
		meterEnContenedorPrincipal.insertAdjacentHTML("beforeend", 
			`<table>

				<tr> <!--Este tr es la cabecera de la tabla -->
					<td>JUGADOR</td>
					<td>RECINTOS</td>
					<td>PUESTOS</td>
					<td>ESTABLO</td>
					<td>MONEDAS</td>
				</tr>

				<tr> <!--Un tr para cada jugador -->
					<td><input type="text" id="nombreJ1" class="inputNombres"></td>
					<td><input type="number" id="recintosJ1" min="0"></td>
					<td><input type="number" id="puestosJ1" min="0"></td>
					<td><input type="number" id="establoJ1" max="0"></td>
					<td><input type="number" id="monedasJ1" min="0"></td>
				</tr>

				<tr> 
					<td><input type="text" id="nombreJ2" class="inputNombres"></td>
					<td><input type="number" id="recintosJ2" min="0"></td>
					<td><input type="number" id="puestosJ2" min="0"></td>
					<td><input type="number" id="establoJ2" max="0"></td>
					<td><input type="number" id="monedasJ2" min="0"></td>
				</tr>
			</table>`);

	} else if (numeroJugadores == "3 Jugadores") {
		meterEnContenedorPrincipal.insertAdjacentHTML("beforeend", 
			`<table>

				<tr> <!--Este tr es la cabecera de la tabla -->
					<td>JUGADOR</td>
					<td>RECINTOS</td>
					<td>PUESTOS</td>
					<td>ESTABLO</td>
					<td>MONEDAS</td>
				</tr>

				<tr> <!--Un tr para cada jugador -->
					<td><input type="text" id="nombreJ1" class="inputNombres"></td>
					<td><input type="number" id="recintosJ1" min="0"></td>
					<td><input type="number" id="puestosJ1" min="0"></td>
					<td><input type="number" id="establoJ1" max="0"></td>
					<td><input type="number" id="monedasJ1" min="0"></td>
				</tr>

				<tr> 
					<td><input type="text" id="nombreJ2" class="inputNombres"></td>
					<td><input type="number" id="recintosJ2" min="0"></td>
					<td><input type="number" id="puestosJ2" min="0"></td>
					<td><input type="number" id="establoJ2" max="0"></td>
					<td><input type="number" id="monedasJ2" min="0"></td>
				</tr>

				<tr> 
					<td><input type="text" id="nombreJ3" class="inputNombres"></td>
					<td><input type="number" id="recintosJ3" min="0"></td>
					<td><input type="number" id="puestosJ3" min="0"></td>
					<td><input type="number" id="establoJ3" max="0"></td>
					<td><input type="number" id="monedasJ3" min="0"></td>
				</tr>

			</table>`);
	} else if (numeroJugadores == "4 Jugadores") {
		meterEnContenedorPrincipal.insertAdjacentHTML("beforeend", 
			`<table>

				<tr> <!--Este tr es la cabecera de la tabla -->
					<td>JUGADOR</td>
					<td>RECINTOS</td>
					<td>PUESTOS</td>
					<td>ESTABLO</td>
					<td>MONEDAS</td>
				</tr>

				<tr> <!--Un tr para cada jugador -->
					<td><input type="text" id="nombreJ1" class="inputNombres"></td>
					<td><input type="number" id="recintosJ1" min="0"></td>
					<td><input type="number" id="puestosJ1" min="0"></td>
					<td><input type="number" id="establoJ1" max="0"></td>
					<td><input type="number" id="monedasJ1" min="0"></td>
				</tr>

				<tr> 
					<td><input type="text" id="nombreJ2" class="inputNombres"></td>
					<td><input type="number" id="recintosJ2" min="0"></td>
					<td><input type="number" id="puestosJ2" min="0"></td>
					<td><input type="number" id="establoJ2" max="0"></td>
					<td><input type="number" id="monedasJ2" min="0"></td>
				</tr>
				
				<tr> 
					<td><input type="text" id="nombreJ3" class="inputNombres"></td>
					<td><input type="number" id="recintosJ3" min="0"></td>
					<td><input type="number" id="puestosJ3" min="0"></td>
					<td><input type="number" id="establoJ3" max="0"></td>
					<td><input type="number" id="monedasJ3" min="0"></td>
				</tr>

				<tr> 
					<td><input type="text" id="nombreJ4" class="inputNombres"></td>
					<td><input type="number" id="recintosJ4" min="0"></td>
					<td><input type="number" id="puestosJ4" min="0"></td>
					<td><input type="number" id="establoJ4" max="0"></td>
					<td><input type="number" id="monedasJ4" min="0"></td>
				</tr>

			</table>`);
	} else if (numeroJugadores == "5 Jugadores") {
		meterEnContenedorPrincipal.insertAdjacentHTML("beforeend", 
			`<table>

				<tr> <!--Este tr es la cabecera de la tabla -->
					<td>JUGADOR</td>
					<td>RECINTOS</td>
					<td>PUESTOS</td>
					<td>ESTABLO</td>
					<td>MONEDAS</td>
				</tr>

				<tr> <!--Un tr para cada jugador -->
					<td><input type="text" id="nombreJ1" class="inputNombres"></td>
					<td><input type="number" id="recintosJ1" min="0"></td>
					<td><input type="number" id="puestosJ1" min="0"></td>
					<td><input type="number" id="establoJ1" max="0"></td>
					<td><input type="number" id="monedasJ1" min="0"></td>
				</tr>

				<tr> 
					<td><input type="text" id="nombreJ2" class="inputNombres"></td>
					<td><input type="number" id="recintosJ2" min="0"></td>
					<td><input type="number" id="puestosJ2" min="0"></td>
					<td><input type="number" id="establoJ2" max="0"></td>
					<td><input type="number" id="monedasJ2" min="0"></td>
				</tr>
				
				<tr> 
					<td><input type="text" id="nombreJ3" class="inputNombres"></td>
					<td><input type="number" id="recintosJ3" min="0"></td>
					<td><input type="number" id="puestosJ3" min="0"></td>
					<td><input type="number" id="establoJ3" max="0"></td>
					<td><input type="number" id="monedasJ3" min="0"></td>
				</tr>

				<tr> 
					<td><input type="text" id="nombreJ4" class="inputNombres"></td>
					<td><input type="number" id="recintosJ4" min="0"></td>
					<td><input type="number" id="puestosJ4" min="0"></td>
					<td><input type="number" id="establoJ4" max="0"></td>
					<td><input type="number" id="monedasJ4" min="0"></td>
				</tr>

				<tr> 
					<td><input type="text" id="nombreJ5" class="inputNombres"></td>
					<td><input type="number" id="recintosJ5" min="0"></td>
					<td><input type="number" id="puestosJ5" min="0"></td>
					<td><input type="number" id="establoJ5" max="0"></td>
					<td><input type="number" id="monedasJ5" min="0"></td>
				</tr>

			</table>`);
	}
	
	meterEnContenedorBotones.insertAdjacentHTML("beforeend", 
		`<button id="volverInicio">ATRAS </button>
		<button id="verResultado">VER RESULTADO</button>`
		);

	document.getElementById("volverInicio").onclick = cargarPantallaInicio; // Este botón nos lleva a la pantalla de inicio
	document.getElementById("verResultado").onclick = cargarPantallaResultado;
} // Final función cargarPantallaPuntos()

function cargarPantallaResultado() {
	if (numeroJugadores == "2 Jugadores") {
		jugador1.nombre = document.getElementById("nombreJ1").value;
		jugador1.puntosRecintos = document.getElementById("recintosJ1").value;
		jugador1.puntosPuestos = document.getElementById("puestosJ1").value;
		jugador1.puntosEstablo = document.getElementById("establoJ1").value;
		jugador1.monedas = document.getElementById("monedasJ1").value;
		jugador1.puntuacionFinal = parseFloat(jugador1.puntosRecintos) + parseFloat(jugador1.puntosPuestos) + parseFloat(jugador1.puntosEstablo);
		
		jugador2.nombre = document.getElementById("nombreJ2").value;
		jugador2.puntosRecintos = document.getElementById("recintosJ2").value;
		jugador2.puntosPuestos = document.getElementById("puestosJ2").value;
		jugador2.puntosEstablo = document.getElementById("establoJ2").value;
		jugador2.monedas = document.getElementById("monedasJ2").value;
		jugador2.puntuacionFinal = parseFloat(jugador2.puntosRecintos) + parseFloat(jugador2.puntosPuestos) + parseFloat(jugador2.puntosEstablo);

		
	} else if (numeroJugadores == "3 Jugadores") {
		jugador1.nombre = document.getElementById("nombreJ1").value;
		jugador1.puntosRecintos = document.getElementById("recintosJ1").value;
		jugador1.puntosPuestos = document.getElementById("puestosJ1").value;
		jugador1.puntosEstablo = document.getElementById("establoJ1").value;
		jugador1.monedas = document.getElementById("monedasJ1").value;
		jugador1.puntuacionFinal = parseFloat(jugador1.puntosRecintos) + parseFloat(jugador1.puntosPuestos) + parseFloat(jugador1.puntosEstablo);
		
		jugador2.nombre = document.getElementById("nombreJ2").value;
		jugador2.puntosRecintos = document.getElementById("recintosJ2").value;
		jugador2.puntosPuestos = document.getElementById("puestosJ2").value;
		jugador2.puntosEstablo = document.getElementById("establoJ2").value;
		jugador2.monedas = document.getElementById("monedasJ2").value;
		jugador2.puntuacionFinal = parseFloat(jugador2.puntosRecintos) + parseFloat(jugador2.puntosPuestos) + parseFloat(jugador2.puntosEstablo);

		jugador3.nombre = document.getElementById("nombreJ3").value;
		jugador3.puntosRecintos = document.getElementById("recintosJ3").value;
		jugador3.puntosPuestos = document.getElementById("puestosJ3").value;
		jugador3.puntosEstablo = document.getElementById("establoJ3").value;
		jugador3.monedas = document.getElementById("monedasJ3").value;
		jugador3.puntuacionFinal = parseFloat(jugador3.puntosRecintos) + parseFloat(jugador3.puntosPuestos) + parseFloat(jugador2.puntosEstablo);
		

	} else if (numeroJugadores == "4 Jugadores") {
		jugador1.nombre = document.getElementById("nombreJ1").value;
		jugador1.puntosRecintos = document.getElementById("recintosJ1").value;
		jugador1.puntosPuestos = document.getElementById("puestosJ1").value;
		jugador1.puntosEstablo = document.getElementById("establoJ1").value;
		jugador1.monedas = document.getElementById("monedasJ1").value;
		jugador1.puntuacionFinal = parseFloat(jugador1.puntosRecintos) + parseFloat(jugador1.puntosPuestos) + parseFloat(jugador1.puntosEstablo);
		
		jugador2.nombre = document.getElementById("nombreJ2").value;
		jugador2.puntosRecintos = document.getElementById("recintosJ2").value;
		jugador2.puntosPuestos = document.getElementById("puestosJ2").value;
		jugador2.puntosEstablo = document.getElementById("establoJ2").value;
		jugador2.monedas = document.getElementById("monedasJ2").value;
		jugador2.puntuacionFinal = parseFloat(jugador2.puntosRecintos) + parseFloat(jugador2.puntosPuestos) + parseFloat(jugador2.puntosEstablo);

		jugador3.nombre = document.getElementById("nombreJ3").value;
		jugador3.puntosRecintos = document.getElementById("recintosJ3").value;
		jugador3.puntosPuestos = document.getElementById("puestosJ3").value;
		jugador3.puntosEstablo = document.getElementById("establoJ3").value;
		jugador3.monedas = document.getElementById("monedasJ3").value;
		jugador3.puntuacionFinal = parseFloat(jugador3.puntosRecintos) + parseFloat(jugador3.puntosPuestos) + parseFloat(jugador2.puntosEstablo);
		
		jugador4.nombre = document.getElementById("nombreJ4").value;
		jugador4.puntosRecintos = document.getElementById("recintosJ4").value;
		jugador4.puntosPuestos = document.getElementById("puestosJ4").value;
		jugador4.puntosEstablo = document.getElementById("establoJ4").value;
		jugador4.monedas = document.getElementById("monedasJ4").value;
		jugador4.puntuacionFinal = parseFloat(jugador4.puntosRecintos) + parseFloat(jugador4.puntosPuestos) + parseFloat(jugador2.puntosEstablo);

	} else if (numeroJugadores == "5 Jugadores") {
		jugador1.nombre = document.getElementById("nombreJ1").value;
		jugador1.puntosRecintos = document.getElementById("recintosJ1").value;
		jugador1.puntosPuestos = document.getElementById("puestosJ1").value;
		jugador1.puntosEstablo = document.getElementById("establoJ1").value;
		jugador1.monedas = document.getElementById("monedasJ1").value;
		jugador1.puntuacionFinal = parseFloat(jugador1.puntosRecintos) + parseFloat(jugador1.puntosPuestos) + parseFloat(jugador1.puntosEstablo);
		
		jugador2.nombre = document.getElementById("nombreJ2").value;
		jugador2.puntosRecintos = document.getElementById("recintosJ2").value;
		jugador2.puntosPuestos = document.getElementById("puestosJ2").value;
		jugador2.puntosEstablo = document.getElementById("establoJ2").value;
		jugador2.monedas = document.getElementById("monedasJ2").value;
		jugador2.puntuacionFinal = parseFloat(jugador2.puntosRecintos) + parseFloat(jugador2.puntosPuestos) + parseFloat(jugador2.puntosEstablo);

		jugador3.nombre = document.getElementById("nombreJ3").value;
		jugador3.puntosRecintos = document.getElementById("recintosJ3").value;
		jugador3.puntosPuestos = document.getElementById("puestosJ3").value;
		jugador3.puntosEstablo = document.getElementById("establoJ3").value;
		jugador3.monedas = document.getElementById("monedasJ3").value;
		jugador3.puntuacionFinal = parseFloat(jugador3.puntosRecintos) + parseFloat(jugador3.puntosPuestos) + parseFloat(jugador3.puntosEstablo);
		
		jugador4.nombre = document.getElementById("nombreJ4").value;
		jugador4.puntosRecintos = document.getElementById("recintosJ4").value;
		jugador4.puntosPuestos = document.getElementById("puestosJ4").value;
		jugador4.puntosEstablo = document.getElementById("establoJ4").value;
		jugador4.monedas = document.getElementById("monedasJ4").value;
		jugador4.puntuacionFinal = parseFloat(jugador4.puntosRecintos) + parseFloat(jugador4.puntosPuestos) + parseFloat(jugador4.puntosEstablo);

		jugador5.nombre = document.getElementById("nombreJ5").value;
		jugador5.puntosRecintos = document.getElementById("recintosJ5").value;
		jugador5.puntosPuestos = document.getElementById("puestosJ5").value;
		jugador5.puntosEstablo = document.getElementById("establoJ5").value;
		jugador5.monedas = document.getElementById("monedasJ5").value;
		jugador5.puntuacionFinal = parseFloat(jugador5.puntosRecintos) + parseFloat(jugador5.puntosPuestos) + parseFloat(jugador5.puntosEstablo);
	}

	meterEnContenedorTexto.innerHTML = "<h2>RESULTADO FINAL</h2>";
	meterEnContenedorPrincipal.innerHTML = "";
	meterEnContenedorBotones.innerHTML = "";

    meterEnContenedorPrincipal.insertAdjacentHTML ("beforeend", `
    	<h3><span>${jugador1.nombre}: </span> <span>${jugador1.puntuacionFinal}</span> PTS y ${jugador1.monedas} <img src="./coin.png"> </h3>
    	<h3><span>${jugador2.nombre}: </span> <span>${jugador2.puntuacionFinal}</span> PTS y ${jugador2.monedas} <img src="./coin.png"> </h3>
    	`);

    if (numeroJugadores == "3 Jugadores"|| numeroJugadores == "4 Jugadores" || numeroJugadores == "5 Jugadores") {
    	meterEnContenedorPrincipal.insertAdjacentHTML ("beforeend", `
    	<h3><span>${jugador3.nombre}: </span> <span>${jugador3.puntuacionFinal}</span> PTS y ${jugador3.monedas} <img src="./coin.png"> </h3>
    	`);
    }

    if (numeroJugadores == "4 Jugadores" || numeroJugadores == "5 Jugadores") {
    	meterEnContenedorPrincipal.insertAdjacentHTML ("beforeend", `
    	<h3><span>${jugador4.nombre}: </span> <span>${jugador4.puntuacionFinal}</span> PTS y ${jugador4.monedas} <img src="./coin.png"> </h3>
    	`);
    }

    if (numeroJugadores == "5 Jugadores") {
    	meterEnContenedorPrincipal.insertAdjacentHTML ("beforeend", `
    	<h3><span>${jugador5.nombre}: </span> <span>${jugador5.puntuacionFinal}</span> PTS y ${jugador5.monedas} <img src="./coin.png"> </h3>
    	`);
    }

   
    	/* -----------------SISTEMA DE LOGROS------------------ */
				

	



		







        /*------------------ Botón "Salir"--------------------*/

	meterEnContenedorBotones.insertAdjacentHTML("beforeend", 
		`<button id="salir">SALIR</button>`
		);
	
	document.getElementById("salir").onclick = cargarPantallaInicio;



} // Final función cargarPantallaResultado()







/*



						------------GRÁFICAS------------

			------------------ Crea el canvas --------------------
	meterEnContenedorPrincipal.insertAdjacentHTML("beforeend", 
		`<canvas id="graficaPuntuacion"></canvas>`
		);

// PUNTUACIÓN FINAL:							
	const graficaPuntos = document.getElementById("graficaPuntuacion"); // Referencia de la gráfica en el Dom
	const etiquetasPuntosTotales = [jugador1.nombre, jugador2.nombre]; //Etiquetas de la gráfica (eje X)
	
	const puntosTotales = {
    label: "PUNTUACIÓN FINAL",
    data: [jugador1.puntuacionFinal, jugador2.puntuacionFinal], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
     backgroundColor: 'rgba(143,236,143,0.8)',
       
    borderColor: 'rgba(211,93,110, 1)',// Color del borde
    borderWidth: 0,// Ancho del borde
	}

  new Chart(graficaPuntos, {
    type: 'bar',// Tipo de gráfica (line, bar)
    data: {
        labels: etiquetasPuntosTotales,
        datasets: [
            puntosTotales
            // Aquí más datos...
        ]
    },
    options: {

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true // Para que empiece en el 0
                }
            }],
        },
    }
});


		


*/