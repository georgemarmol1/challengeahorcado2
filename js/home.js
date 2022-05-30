function seleccion(elemento) {
  var dato = document.querySelector(elemento);
  return dato;
}
var seccion = seleccion(".presentacion");
var btnjugar = seleccion(".btnjugar");
var btnagregar = seleccion(".btnagregar");


btnjugar.addEventListener("click", function(){
 
  setTimeout(() => {
    window.location = 'juego.html';
  }, 200);
  
})

btnagregar.addEventListener("click", function(){
  setTimeout(() => {
    window.location = 'agregar.html';
  }, 200);
});



