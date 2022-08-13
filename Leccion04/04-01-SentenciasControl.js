let condicion = false;

if (2 > 3) {
    console.log("condicion verdadera");
} else {
    console.log("condicion falsa");
}

let numero = 1;

if (numero == 1) {
    console.log("Numero uno");
} else if (numero == 2) {
    console.log("Numero dos");
} else if (numero == 3) {
    console.log("Numero tres");
} else {
    console.log("Numero desconocido");
}

let mes = 5;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "Invierno";
} else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "primavera";
} else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano";
} else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = "Otoño";
} else {
    estacion = "Valor incorrecto";
}

console.log(estacion);

let hora = 6;
let mensaje;

if (hora >= 6 && hora <= 11) {
    mensaje = "Buenos dias";
} else if (hora >= 12 && hora <= 18) {
    mensaje = "Buenas Tardes";
} else if (hora >= 19 && hora <= 24) {
    mensaje = "Buenas noches";
} else if (hora >= 0 && hora <= 6) {
    mensaje = "Durmiendo";
} else {
    mensaje = "Hora incorrecta";
}
console.log(mensaje);