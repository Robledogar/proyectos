window.onload = inicio;
let letras = ["A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "E", "E", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "I", "J", "J", "K", "K", "L", "L", "L", "M", "M", "N", "N", "N", "O", "O", "O", "P", "P", "Q", "R", "R", "S", "S", "T", "T", "T", "U", "U", "V", "V", "Y", "Z", "Z"];
let cartas = [  "(LAS 4 PALABRAS DEL TITULAR DEBEN EMPEZAR CON LA MISMA LETRA)",//Trabalenguas
				"(LAS 4 PALABRAS DEL TITULAR DEBEN EMPEZAR CON LA MISMA LETRA)", 			
				"ACTUALIDAD", //temas
				"CORAZÓN", 
				"CULTURA", 
				"DEPORTES", 
				"ECONOMÍA", 
				"SOCIEDAD", 
				"EFEMÉRIDES", 
				"EL TIEMPO", 
				"ESCÁNDALOS DE FAMOSOS", 
				"EXPOSICIONES", 
				"HORÓSCOPO", 
				"INFORMACIÓN DE TRÁFICO", 
				"LOTERÍA",
				"MÚSICA Y ESPECTÁCULOS", 
				"NACIMIENTOS", 
				"NECROLÓGICAS", 
				"NOTICIAS INTERNACIONALES", 
				"NOTICIAS LOCALES", 
				"NOTICIAS NACIONALES", 
				"NOTICIAS REGIONALES", 
				"OFERTAS DE EMPLEO", 
				"PASATIEMPOS", 
				"POLÍTICA", 
				"PROGRESOS CIENTÍFICOS", 
				"PUBLICIDAD", 
				"RELIGIÓN", 
				"RUMORES Y COTILLEOS", 
				"SALUD Y BIENESTAR", 
				"SUCESOS", 
				"CINE Y TELEVISIÓN", 
				"TRABAJO", 
				"ESOTERÍSMO", 
				"GASTRONOMÍA", 
				"INTERNET", 
				"(A ELECCIÓN DEL EDITOR)", 
				"(A ELECCIÓN DEL EDITOR)", 
				"(A ELECCIÓN DEL EDITOR)", 
				"NUEVE DE CADA DIEZ...",//Frase inicial
				"PIERDE 20 KILOS EN TRES DÍAS POR...",
				"UN HOMBRE DE 90 AÑOS DE CASA...", 
				"(EL EDITOR INVENTA UNA)", 
				"(EL EDITOR INVENTA UNA)", 
				"(EL EDITOR INVENTA UNA)", 
				"(EL EDITOR INVENTA UNA)", 
				"MUJER ENBARAZADA DE 9 MESES...", 
				"FRANCISCO FRANCO APARECE Y...", 
				"SE ALQUILA...", 
				"SE BUSCA...", 
				"SE VENDE...", 
				"AUMENTE SU...", 
				"EL MARIDO PILLA A SU MUJER...",
				"ENCUENTRAN A UN FAMOSO...", 
				"LA MAYORÍA DE LAS MUJERES PREFIEREN...", 
				"LA MAYORÍA DE LOS HOMBRES PREFIEREN...", 
				"LA MUJER PILLA A SU MARIDO...", 
				"LA TIERRA INVADIDA POR...", 
				"NOVIA CELOSA...", 
				"NOVIO CELOSO...", 
				"NIÑO PRODIGIO...",
				];

let letraRandom;
let cartaRandom;
let tituloCarta;
let segundos = 0;
let relojActivo = 0;




function inicio() {
	document.getElementById("nuevaRonda").onclick = nuevaRonda;
	
	document.getElementById("contador").onclick = iniciarReloj;
	
}

function iniciarReloj() {
	if (segundos == 0) {
		segundos = 120;
		setTimeout(cuentaAtras,1000);
	}
		

	
	
}



function nuevaRonda(){
	
	
	if(relojActivo == 0) {
		segundos = 0;
		document.getElementById("tiempo").innerHTML = "";
		document.getElementById("tiempoRestante").innerHTML = "";
			if(letras.length < 8) {
				location.reload();// hay que buscar una manera de recargar el array de las letras
			}
	
		generarCarta();

			if(tituloCarta == "TRABALENGUAS") {
				generarUnaLetra();
			} else {
				generarCuatroLetras();
			}					
	}
}


function cuentaAtras() {
	if (segundos >=0) {
		relojActivo = 1;
		document.getElementById("tiempo").innerHTML = segundos;
		document.getElementById("tiempoRestante").innerHTML = "TIEMPO RESTANTE";
		segundos --;
		setTimeout(cuentaAtras,1000);
	} else {
		document.getElementById("audio").play(); 
		relojActivo = 0;
	}

	
	
	
}





function generarCarta() {
	document.getElementById("contenedorCarta").innerHTML = "";
	cartaRandom = Math.floor(Math.random()*cartas.length);
	if (cartaRandom <= 1) {
		tituloCarta = "TRABALENGUAS";
	}else if(cartaRandom > 1 && cartaRandom <= 38) {
		tituloCarta = "TEMA";
	} else {
		tituloCarta = "FRASE INICIAL";
	}




	document.getElementById("contenedorCarta").insertAdjacentHTML("beforeend",
		`<div class="carta">
			<div class="cartaTitulo">
				<h4>${tituloCarta}</h4>
			</div>
			<div class="cartaTexto">
				<h5>${cartas[cartaRandom]}</h5>
			</div>	
		</div>`);
	cartas.splice(cartaRandom,1);
}

function generarUnaLetra() {
	document.getElementById("contenedorLetras").innerHTML = "";
	insertarLetra();
}

function generarCuatroLetras() {
	document.getElementById("contenedorLetras").innerHTML = "";
	insertarLetra();
	insertarLetra();
	insertarLetra();
	insertarLetra();
}

function insertarLetra() {
	letraRandom = Math.floor(Math.random()*letras.length);
	document.getElementById("contenedorLetras").insertAdjacentHTML("beforeend", 
		`<div class="letra">
			<h3>${letras[letraRandom]}</h3>
		</div>`);
	letras.splice(letraRandom,1);
	

}