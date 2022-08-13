let a = 10;
let min = 0;
let max = 10;

if (a >= min && a <= max) {
    console.log("dentro del rango");
} else {
    console.log("Fuera de rango");
}

let vacaciones = false;
let diaDescanso = false;

if (vacaciones || diaDescanso) {
    console.log("Puede ir al juego");
} else {
    console.log("No puede ir al juego");
}


let resultado = (3 > 2) ? "verdadero" : "false";
console.log(resultado);

let numero = 10;

resultado = (numero % 2 == 0) ? "Numero par" : "Numero impar";
console.log(resultado);