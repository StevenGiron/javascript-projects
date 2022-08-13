var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");


var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);


function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        var cantidad = aleatorio(5, 25);
        for (var i = 0; i < cantidad; i++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (pollo.cargaOK) {
        var cantidad2 = aleatorio(10, 50);
        for (var ip = 0; ip < cantidad2; ip++) {
            var xp = aleatorio(1, 8);
            var yp = aleatorio(1, 8);
            var xp = xp * 60;
            var yp = yp * 60;
            papel.drawImage(pollo.imagen, xp, yp);
        }
    }
}




function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}