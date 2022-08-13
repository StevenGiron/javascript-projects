var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, yf;
var color_lineas = "#FAA";

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

for (l = 0; l <= lineas; l++) {
    xi = 10 * l;
    yf = 10 * (l + 1);
    dibujarLinea(color_lineas, xi, 0, 300, yf);
}



dibujarLinea(color_lineas, 1, 1, 1, 299);
dibujarLinea(color_lineas, 1, 299, 299, 299);