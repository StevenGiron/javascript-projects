let numero = 5;
let numerTexto = "valor desconocido";

switch (numero) {
    case 1:
        numerTexto = "Numero uno";
        break;
    case 2:
        numerTexto = "Numero dos";
        break;
    case 3:
        numerTexto = "Numero tres";
        break;
    default:
        numerTexto = "Caso no encontrado";
}
console.log(numerTexto);


let mes = 12;
let estacion = "Estacion desconocida";

switch (mes) {
    case 1:
    case 2:
    case 12:
        estacion = "Invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Verano";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "que?";

}
console.log(estacion);