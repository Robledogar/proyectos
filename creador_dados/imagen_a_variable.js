

function uploadFile(num) {
  var file = document.getElementById("myFile" + num).files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var dataURL = reader.result;
    document.getElementById("myImage" + num).src = dataURL;
    console.log(file);
  };
  reader.readAsDataURL(file);
  alert(`Imagen nº${num} subida`);
}

/*function showImages() {
  document.getElementById("output").style.display = "block";
}*/

function showRandomImage(n) {
document.getElementById("randomImage").innerHTML = "";
  for (var i = 1; i<=n; i++) {
    // Obtener un número aleatorio entre 1 y 6
  var num = Math.floor(Math.random() * 6) + 1;
  // Mostrar la imagen aleatoria en el nuevo div
  document.getElementById("randomImage").insertAdjacentHTML("beforeend", '<img src="' + document.getElementById("myImage" + num).src + '">');
  }
  
}
