document.addEventListener("DOMContentLoaded", function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");

   for (let i = 1; i <= 12; i++) {
       const imagen = document.createElement("picture");

       console.log(imagen);

   }
}
