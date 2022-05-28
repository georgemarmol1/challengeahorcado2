var addword = document.querySelector("#addword");
var btnword = document.querySelector(".btnagregar");
var btnjugar = document.querySelector(".btnprincipal");
btnword.addEventListener("click", function () {
    lista.push(addword.textContent.toLocaleUpperCase());

    if(addword.value <= 8 || addword.value != " " ){
        var palabra = addword.value.toUpperCase();
        setTimeout(() => {
            window.location = 'juego.html';
          }, 200);
    } else {
        alert("No cumple con el maximo de caracteres");
        addword.value = " ";
        addword.focus();
    }

});

btnjugar.addEventListener("click",function(){
    setTimeout(() => {
        window.location = 'index.html';
      }, 200);
    
});
