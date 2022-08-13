//funcion constructor de obejtos
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    };
}

let padre = new Persona("Juan", "Perez", "jp@gmail.com");
console.log(padre);
console.log(padre.nombreCompleto());


let madre = new Persona("Luisa", "Acila", "la@gmail.com");
console.log(madre);
console.log(madre.nombreCompleto());

padre.nombre = "Mincho";

console.log(padre);

//otra forma de crear obejros

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena = new String("Hola");
let miCadena2 = "Hola";

let miNumero = new Number(2);
let miNumero2 = 2;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo = new Array();
let miArreglo2 = [];