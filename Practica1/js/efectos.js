function efecto1(){
    var c1=document.getElementById("menu");
    c1.innerHTML="<div style='font-size: 0.8rem;'> <ul><li><a href='#'>Ocupacion</a></li><li><a href= '#'>Tipo</a></li><li><a href= '#'>Ubicacion</a></li><li><a href= '#'>Mapa</a></li>";
}
function efecto2(){
    var c5=document.getElementById("ing");
    c5.style.backgroundImage="url(../practica1/img/fondo.jpg)"
}
function efecto3(){
    var c3=document.getElementById("texto1");
    c3.style.color="#0ebaee";
    c3.style.transform="scale(0.9)";
    c3.style.transition="all 0.9s";
}
function efecto4(){
    var c4=document.getElementById("texto4");
    c4.style.color="#0ebaee";
    c4.style.textAlign="center";
    c4.style.transition="all 0.9s";
    c4.style.fontSize="2rem";
}
function efecto5(){
    var c2=document.getElementById("ing");
    c2.innerHTML="<div style='font-size:1.5rem; border-radius: 10px;' >La era de los libros digitales<br>Terminamos este viaje dando un buen salto adelante en el tiempo hasta llegar a los primeros años de la década de 1970. En este período, el Proyecto Gutenberg dio a luz los primeros libros electrónicos. Durante varios años, los libros digitales eran producidos con un único objetivo: archivar obras, sobre todo libros de dominio público. Fue en el siglo XXI cuando el formato digital empezó a considerarse también para la publicación. En el año 2000 se publicó el primer libro en formato electrónico: la novela.</div>"
    c2.style.color="blue";

}
function efecto6(){
    var c6=document.getElementById("logo");
    c6.style.width="15rem"
    c6.style.transform="scale(0.9)";
    c6.style.transition="all 0.9s";
}
function efecto7() {
    var elem = document.getElementById("ani");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 1150) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.right = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
}