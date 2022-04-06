function verResultado() {
	var jugador1 = document.getElementById("jugador1").value;
	var jugador2 = document.getElementById("jugador2").value;
	
	var puntosAzulesJ1 = document.getElementById("puntosAzulesJ1").value;
	var puntosAzulesJ2 = document.getElementById("puntosAzulesJ2").value;

	var puntosVerdesJ1 = document.getElementById("puntosVerdesJ1").value;
	var puntosVerdesJ2 = document.getElementById("puntosVerdesJ2").value;

	var puntosAmarillasJ1 = document.getElementById("puntosAmarillasJ1").value;
	var puntosAmarillasJ2 = document.getElementById("puntosAmarillasJ2").value;

	var puntosVioletasJ1 = document.getElementById("puntosVioletasJ1").value;
	var puntosVioletasJ2 = document.getElementById("puntosVioletasJ2").value;

	var puntosMaravillasJ1 = document.getElementById("puntosMaravillasJ1").value;
	var puntosMaravillasJ2 = document.getElementById("puntosMaravillasJ2").value;

	var puntosProgresoJ1 = document.getElementById("puntosProgresoJ1").value;
	var puntosProgresoJ2 = document.getElementById("puntosProgresoJ2").value;

	var puntosMonedasJ1 = document.getElementById("puntosMonedasJ1").value;
	var puntosMonedasJ2 = document.getElementById("puntosMonedasJ2").value;

	var puntosMilitaresJ1 = document.getElementById("puntosMilitaresJ1").value;
	var puntosMilitaresJ2 = document.getElementById("puntosMilitaresJ2").value;

	//var resultadoJ1 = parseFloat(puntosAzulesJ1) + parseFloat(puntosVerdesJ1) + parseFloat(puntosAmarillasJ1) + parseFloat(puntosVioletasJ1) + parseFloat(puntosMaravillasJ1) + parseFloat(puntosProgresoJ1) + parseFloat(puntosMonedasJ1) + parseFloat(puntosMilitaresJ1);


	document.getElementById("sumaJ1").innerHTML = parseFloat(puntosAzulesJ1) + parseFloat(puntosVerdesJ1) + parseFloat(puntosAmarillasJ1) + parseFloat(puntosVioletasJ1) + parseFloat(puntosMaravillasJ1) + parseFloat(puntosProgresoJ1) + parseFloat(puntosMonedasJ1) + parseFloat(puntosMilitaresJ1);
	document.getElementById("sumaJ2").innerHTML = parseFloat(puntosAzulesJ2) + parseFloat(puntosVerdesJ2) + parseFloat(puntosAmarillasJ2) + parseFloat(puntosVioletasJ2) + parseFloat(puntosMaravillasJ2) + parseFloat(puntosProgresoJ2) + parseFloat(puntosMonedasJ2) + parseFloat(puntosMilitaresJ2);

	}