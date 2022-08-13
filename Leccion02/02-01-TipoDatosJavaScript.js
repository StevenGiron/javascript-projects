//String: es una cadena de caracteres, deben ir entre doble comilla
var nombre = "Steven";
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

//Number
var numero = 1000;



//Object
var objeto = {
    nombre: "Steven",
    apellido: "Girón",
    telefono: "3184305786"
};

console.log(typeof objeto);

//Boolean (True-False)
var bandera = true;
console.log(typeof bandera);

//Function 
function miFuncion() {}
console.log(miFuncion);

//Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Clase: tambien es una funcion

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ["BMW", "Audi", "Volvo"];
console.log(typeof autos);

var z = "";
console.log(z);
console.log(typeof z);