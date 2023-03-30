// VARIABLES
const piezasTerritorio = document.querySelector('#piezasTerritorio');
const fichasSeguidores = document.querySelector('#fichasSeguidores');
const marcador = document.querySelector('#marcador');
const reglamento = document.querySelector('#reglamento');




const contenedorInteractivo = document.querySelector('#contenedorInteractivo');

// OBJETO CON LAS IMAGENES
const imagenes = {
    piezasTerritorio: '<img src="images/piezasTerritorio.png" alt="piezas">',
    seguidores: '<img src="images/Seguidores.png" alt="piezas">',
    marcador: '<img src="images/Marcador.png" alt="piezas">',
    reglamento:'<h1 style="color: red;">LO TENÉS EN LA MAAAAANO BOBO</h1>'
  };


//EVENTOS
piezasTerritorio.addEventListener('mouseover', function() {
    generarImagen(imagenes.piezasTerritorio)
}) ;
piezasTerritorio.addEventListener('mouseout', function() {
    eliminarImagen()
}) ;


fichasSeguidores.addEventListener('mouseover', function() {
    generarImagen(imagenes.seguidores)
}) ;
fichasSeguidores.addEventListener('mouseout', function() {
    eliminarImagen()
}) ;


marcador.addEventListener('mouseover', function() {
    generarImagen(imagenes.marcador)
}) ;
marcador.addEventListener('mouseout', function() {
    eliminarImagen()
}) ;

reglamento.addEventListener('mouseover', function() {
    generarImagen(imagenes.reglamento)
}) ;
reglamento.addEventListener('mouseout', function() {
    eliminarImagen()
}) ;


// FUNCIONES 
function generarImagen(imagen) {
    setTimeout(function() {
        contenedorInteractivo.innerHTML = imagen;
      }, 100);
    
}


function eliminarImagen() {
    contenedorInteractivo.innerHTML = '';
}