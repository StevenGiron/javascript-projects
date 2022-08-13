var ej = document.getElementById("cuadro");
var papel = ej.getContext("2d");
var x = 0;
var y = 0;

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var pollo = {
    url: "pollo.png"
};

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarImagen);

function movimiento(xinicial, yinicial, xfinal, yfinal, arrastrar) {
    arrastrar.beginPath();
    arrastrar.strokeStyle = color;
    arrastrar.lineWidth = 3;
    arrastrar.moveTo(xinicial, yinicial);
    arrastrar.lineTo(xfinal, yfinal);
    arrastrar.stroke();
    arrastrar.closePath();
}

function cargarImagen() {
    papel.drawImage(pollo.imagen, 0, 0);

}

function moverPollo(evento) {
    var desplazamiento = 10;
    switch (evento.keyCode) {
        case teclas.RIGHT:
            movimiento(x, y, x + desplazamiento, y);
            break;

        default:
            break;
    }
}