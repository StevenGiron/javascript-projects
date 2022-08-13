var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var color_lineas = "#FAA";



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

for (l = 0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(color_lineas, 0, yi, xf, 300);
}

dibujarLinea(color_lineas, 1, 1, 1, 299);
dibujarLinea(color_lineas, 1, 299, 299, 299);


function dibujoPorClick() {

    var xxx = parseInt(texto.value);
}