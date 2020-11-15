var dato = document.getElementById("contenido");
function efecto1() {
    dato.style = "background: rgb(60, 184, 60);"
}
function efecto2() {
    dato.style = "font-weight: bold;"
}
function efecto3() {
    dato.style = "text-align: justify;"
}
function efecto4() {
    dato.style = "background: yellow;}";
    var elem = document.getElementById("texto1");
    elem.style = "width: 50px; height: 50px; position: absolute; background: red;";
    
}
function efecto5() {
    var dato = document.getElementById("contenido2");
    dato.style = "width: 65%;height: 470px;position: relative;background: yellow;";
    dato.innerHTML = `
    <div id='animate' style = "position: absolute; background: red;">
    <span  class="texto2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aliquid dolorum? Commodi ipsam laborum doloribus assumenda at laudantium qui, minus molestiae quidem facere, nesciunt fugit cum iusto. Nisi, aut facere.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente dolore itaque sequi illum! Optio ad, dolor repudiandae quibusdam dolorum incidunt excepturi possimus iusto dignissimos magnam vero nesciunt minus pariatur.
</span>
    </div>`;
    var elem = document.getElementById("animate");
    console.log(elem);
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px"; 
            //elem.style.left = pos + "px";
        }
    }
    
}

function efecto6() {
    var sm1 = document.getElementById("subMenu");
    sm1.style.color = "red";
    
}

function suma() {
    var su = document.getElementById("su");
    su.innerHTML = "<span>+</span> ";
}
function resta() {
    var su = document.getElementById("re");
    su.innerHTML = "<span>-</span> ";
}
function multiplicacion() {
    var su = document.getElementById("mu");
    su.innerHTML = "<span>*</span> ";
}
function division() {
    var su = document.getElementById("di");
    su.innerHTML = "<span>/</span> ";
}