var addword = document.querySelector("#addword");
var btnword = document.querySelector(".btnagregar");
var btnjugar = document.querySelector(".btnprincipal");
btnword.addEventListener("click", function () {
    var palabra = addword.value;

    if(palabra.length <= 8 && palabra !== "" ){
        lista.push(addword.value.toLocaleUpperCase());
        setTimeout(() => {
           // window.location = 'juego.html';
           console.log(lista);
          }, 200);
    } else {
        alert("Debe colocar menos de 8 caracteres");
        addword.value = "";
        addword.focus();
    }

});

btnjugar.addEventListener("click",function(){
    setTimeout(() => {
        window.location = 'index.html';
      }, 200);
    
});
