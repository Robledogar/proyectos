window.onload = inicio;


function inicio() {
	document.getElementById("random").onclick = generarEdificios;
}

let numeroRandom;

function generarEdificios() {
	numeroRandom = Math.floor(Math.random()*edificiosV1.length);
	document.getElementById("edificioN1").innerHTML = edificiosV1[numeroRandom];

	numeroRandom = Math.floor(Math.random()*edificiosV2.length);
	document.getElementById("edificioN2").innerHTML = edificiosV2[numeroRandom];
	edificiosV2.splice(numeroRandom,1);

	numeroRandom = Math.floor(Math.random()*edificiosV2.length);
	document.getElementById("edificioN3").innerHTML = edificiosV2[numeroRandom];
	edificiosV2 = ["HACIENDA", "CASETA DE OBRA", "CABAÑA FORESTAL", "MERCADO NEGRO", "REGISTRO DE PROPIEDAD"];

	numeroRandom = Math.floor(Math.random()*edificiosV3.length);
	document.getElementById("edificioN4").innerHTML = edificiosV3[numeroRandom];

	numeroRandom = Math.floor(Math.random()*edificiosV4.length);
	document.getElementById("edificioN5").innerHTML = edificiosV4[numeroRandom];

	numeroRandom = Math.floor(Math.random()*edificiosV5.length);
	document.getElementById("edificioN6").innerHTML = edificiosV5[numeroRandom];
	edificiosV5.splice(numeroRandom,1);

	numeroRandom = Math.floor(Math.random()*edificiosV5.length);
	document.getElementById("edificioN7").innerHTML = edificiosV5[numeroRandom];
	edificiosV5 = ["OFICINA", "MERCADO GRANDE", "PUESTO COMERCIAL", "IGLESIA", "OFICINA DE CONSTRUCCIÓN"];

	numeroRandom = Math.floor(Math.random()*edificiosV6.length);
	document.getElementById("edificioN8").innerHTML = edificiosV6[numeroRandom];

	numeroRandom = Math.floor(Math.random()*edificiosV7.length);
	document.getElementById("edificioN9").innerHTML = edificiosV7[numeroRandom];

	numeroRandom = Math.floor(Math.random()*edificiosV8.length);
	document.getElementById("edificioN10").innerHTML = edificiosV8[numeroRandom];
	edificiosV8.splice(numeroRandom,1);

	numeroRandom = Math.floor(Math.random()*edificiosV8.length);
	document.getElementById("edificioN11").innerHTML = edificiosV8[numeroRandom];
	edificiosV8 = ["FÁBRICA", "PUERTO", "FÁBRICA ESPECIALIZADA", "BIBLIOTECA", "ORFEBRE"];

	numeroRandom = Math.floor(Math.random()*edificiosV9.length);
	document.getElementById("edificioN12").innerHTML = edificiosV9[numeroRandom];


	numeroRandom = Math.floor(Math.random()*edificiosE.length);
	document.getElementById("edificioG1").innerHTML = edificiosE[numeroRandom];
	edificiosE.splice(numeroRandom,1);

	numeroRandom = Math.floor(Math.random()*edificiosE.length);
	document.getElementById("edificioG2").innerHTML = edificiosE[numeroRandom];
	edificiosE.splice(numeroRandom,1);

	numeroRandom = Math.floor(Math.random()*edificiosE.length);
	document.getElementById("edificioG3").innerHTML = edificiosE[numeroRandom];
	edificiosE.splice(numeroRandom,1);

	numeroRandom = Math.floor(Math.random()*edificiosE.length);
	document.getElementById("edificioG4").innerHTML = edificiosE[numeroRandom];
	edificiosE.splice(numeroRandom,1);

	numeroRandom = Math.floor(Math.random()*edificiosE.length);
	document.getElementById("edificioG5").innerHTML = edificiosE[numeroRandom];
	edificiosE.splice(numeroRandom,1);
	edificiosE = ["COFRADÍA", "RESIDENCIA", "FORTALEZA", "ADUANA", "AYUNTAMIENTO", "ESTATUA", "CLAUSTRO", "JARDÍN"]
}


let edificiosV1 = ["MERCADO PEQUEÑO", "ACUEDUCTO"];
let edificiosV2 = ["HACIENDA", "CASETA DE OBRA", "CABAÑA FORESTAL", "MERCADO NEGRO", "REGISTRO DE PROPIEDAD"];
let edificiosV3 = ["ALMACEN PEQUEÑO", "DEPÓSITO", "CAPILLA"];
let edificiosV4 = ["HOSPICIO", "POSADA", "CABAÑA DEL CAZADOR"];
let edificiosV5 = ["OFICINA", "MERCADO GRANDE", "PUESTO COMERCIAL", "IGLESIA", "OFICINA DE CONSTRUCCIÓN"];
let edificiosV6 = ["ALMACEN GRANDE", "DÁRSENA", "PROVEEDOR"];
let edificiosV7 = ["UNIVERSIDAD", "FARO", "VILLA"];
let edificiosV8 = ["FÁBRICA", "PUERTO", "FÁBRICA ESPECIALIZADA", "BIBLIOTECA", "ORFEBRE"];
let edificiosV9 = ["MUELLE", "CASA SINDICAL"];

let edificiosE = ["COFRADÍA", "RESIDENCIA", "FORTALEZA", "ADUANA", "AYUNTAMIENTO", "ESTATUA", "CLAUSTRO", "JARDÍN"]


