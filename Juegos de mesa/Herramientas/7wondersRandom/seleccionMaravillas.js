/*----------------------VARIABLES--------------------*/
var juegoBase;
var expansiones;
var numeroRandom;

/*----------------------ARRAYS----------------------*/

var imagenesJuegoBase = [`<img src="./imagenes/colosoRodas.JPG">`,
						`<img src="./imagenes/faroAlejandria.JPG">`,
						`<img src="./imagenes/jardinesBabilonia.JPG">`,
						`<img src="./imagenes/mausoleoHalicarnaso.JPG">`,
						`<img src="./imagenes/piramidesGiza.JPG">`,
						`<img src="./imagenes/temploArtemisa.JPG">`,
						`<img src="./imagenes/zeus.JPG">`,
							];

var imagenesExpansiones = [`<img src="./imagenes/abuSimbel.JPG">`,
							`<img src="./imagenes/catan.jpg">`,
							`<img src="./imagenes/granMuralla.jpg">`,
							`<img src="./imagenes/mannekenPis.JPG">`,
							`<img src="./imagenes/roma.jpg">`,
							`<img src="./imagenes/stonehenge.jpg">`,
							];

var imagenesTotales = [];

/*----------------------RESTO DEL PROGRAMA-----------------------*/

document.getElementById("random").onclick = generarImagen;


function generarImagen() {
	imagenesTotales = [];
	juegoBase = document.getElementById("juegoBase").checked;
	expansiones = document.getElementById("expansiones").checked;

	if(juegoBase == true) {
		for (let i = 0; i < imagenesJuegoBase.length; i++) {
			imagenesTotales.push(imagenesJuegoBase[i]);
		}
	}

	if(expansiones == true) {
		for (let i = 0; i < imagenesExpansiones.length; i++) {
			imagenesTotales.push(imagenesExpansiones[i]);
		}
	}

	if (juegoBase == true || expansiones == true) {
		generarNumeroRandom();
		document.getElementById("aviso").innerHTML = ""
		document.getElementById("cajaImagen").innerHTML = imagenesTotales[numeroRandom];
	} else {
		document.getElementById("cajaImagen").innerHTML = `<img src="./imagenes/trasera.jpg">`;
		document.getElementById("aviso").innerHTML = "SELECCIONA AL MENOS UNA OPCIÓN"
	}

	

	
}

function generarNumeroRandom() {
	numeroRandom = Math.floor(Math.random()*imagenesTotales.length);
}




