let miNumero = "18x";
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
    console.log("no es un numero");
} else {
    if (edad >= 18) {
        console.log("puede votar");
    } else {
        console.log("no puede votar");
    }
}


if (isNaN(edad)) {
    console.log("no es un numero");
} else {
    let resultado = (edad >= 18) ? "Puede votar" : "No puede votar";
    console.log(resultado);
}