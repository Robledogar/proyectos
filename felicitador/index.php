<!DOCTYPE html>
<html>
<head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js"></script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Calculadora Aniversario</title>

	<style>
		@import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Creepster&family=Monoton&family=Permanent+Marker&family=Press+Start+2P&family=Rubik+Gemstones&family=Rubik+Moonrocks&family=Rubik+Puddles&family=Rubik+Vinyl&display=swap');
	  form {
	    width: 300px;
	    margin: 0 auto;
	    text-align: center;
	  }
	  label {
	    display: block;
	    
	  }
	  input[type="number"] {
	    width: 100%;
	    padding: 12px 20px;
	    margin: 8px 0;
	    box-sizing: border-box;
	    border: 2px solid #ccc;
	    border-radius: 4px;
	  }
	  input[type="submit"] {
	    width: 100%;
	    background-color: black;
	    color: white;
	    padding: 14px 20px;
	    margin: 8px 0;
	    border: none;
	    border-radius: 4px;
	    cursor: pointer;
	     }
	  #result {
	    margin: 20px auto;
	   	width: 300px;
	   	height: 300px;
	    text-align: center;
	    background-color: black;
	    border: 1px solid #ccc;
  		padding: 20px;
  		color: #333;

  		
	  }

	  #descargar {
	    width: 100%;
	    background-color: black;
	    color: white;
	    padding: 14px 20px;
	    margin: 8px 0;
	    border: none;
	    border-radius: 4px;
	    cursor: pointer;
	    }

	   .enunciado {
	   	margin-top: 30px;
	   	font-size: 20px;
	   }

	   #titulo {
	   	
	   	
	   }

	   /* 
	   	font-family: 'Covered By Your Grace', cursive;
		font-family: 'Creepster', cursive;
		font-family: 'Monoton', cursive;
		font-family: 'Permanent Marker', cursive;
		font-family: 'Press Start 2P', cursive;
		font-family: 'Rubik Gemstones', cursive;
		font-family: 'Rubik Moonrocks', cursive;
		font-family: 'Rubik Puddles', cursive;
		font-family: 'Rubik Vinyl', cursive; 
		*/

	   #feliz {
	   	font-family: 'Rubik Gemstones', cursive;
	   	color: #2ea1da;
	   	font-size: 60px;
	   	position: relative;
	   	top: -80px;
	   }

	   #cumpleanos {
	   	font-family: 'Rubik Gemstones', cursive;
	   	color: #2ea1da;
	   	font-size: 40px;
	   	position: relative;
	   	top: -150px;

	   
	   }

	   #años {
	   	font-family: 'Rubik Moonrocks', cursive;
	   	color: #e83879;
	   	font-size: 60px;
	   	position: relative;
	   	top: -210px;
	   	left: 0px;
	   

	   }

	   #meses {
	   	font-family: 'Rubik Puddles', cursive;
	   	color: #fbb845;
	   	font-size: 25px;
	   	position: relative;
	   	top: -270px;
	   	
	   	
	   }

	   #dias {
	   	font-family: 'Rubik Puddles', cursive;
	   	color: #fbb845;
	   	font-size: 40px;
	   	position: relative;
	   	top: -310px;

	   }

	   #horas {
	   	font-family: 'Rubik Puddles', cursive;
	   	color: #fbb845;
	   	font-size: 25px;
	   	position: relative;
	   	top: -350px;
	   }

	   #segundos {
	   	font-family: 'Rubik Puddles', cursive;
	   	color: #f4e8d0;
	   	font-size: 24px;
	   	position: relative;
	   	top: -360px;
	   }

	   
	  
</style>


</head>
<body>
	<form action="aniversario.php" method="post">
  		<label class="enunciado" for="years">¿Cuantos años cumple?</label><br>
  		<input type="number" id="years" name="years"><br>
  		<input type="submit" value="Generar la imagen">
	</form> 

<?php
if (isset($_POST['years'])) {
  $years = $_POST['years'];

  // Calcula el número de meses
  $months = $years * 12;

  // Calcula el número de días
  $days = $years * 365;

  // Calcula el número de segundos
  $seconds = $years * 365 * 24 * 60 * 60;

  // Calcula el número de horas
  $hours = $years * 365 * 24;
}
?>

<div id="result">
  <?php
  if (isset($_POST['years'])) {
    $years = $_POST['years'];

    // Calcula el número de meses
    $months = $years * 12;

    // Calcula el número de días
    $days = $years * 365;

    // Calcula el número de segundos
    $seconds = $years * 365 * 24 * 60 * 60;

    // Calcula el número de horas
    $hours = $years * 365 * 24;

    // Muestra los resultados
    
  }
  ?>
  <div id="titulo">
  	<p id="feliz">FELIZ</p>
  	<p id="cumpleanos">CUMPLEAÑOS</p>
  </div>

  <div id="años">
  	<?php echo "<p>$years Años</p>"; ?>
  </div>

  <div id="meses">
  	<?php echo "<p>$months Meses</p>"; ?>
  </div>

  <div id="dias">
  	<?php echo "<p>$days Días</p>"; ?>
  </div>

  <div id="horas">
  	<?php echo "<p>$hours Horas</p>"; ?>
  </div>

  <div id="segundos">
  	<?php echo "<p>$seconds Segundos</p>"; ?>
  </div>

  

</div>

<button id="descargar">Descargar la imagen</button>

<script>
  document.getElementById('descargar').addEventListener('click', function() {
  // Crea una imagen a partir del contenido del elemento #result
  html2canvas(document.querySelector('#result')).then(canvas => {
    // Convierte la imagen a JPEG
    let imagen = canvas.toDataURL("image/jpeg");

    // Descarga la imagen
    let link = document.createElement('a');
    link.download = 'FelizCumpleaños.jpg';
    link.href = imagen;
    link.click();
  });
});

</script>





</body>
</html>