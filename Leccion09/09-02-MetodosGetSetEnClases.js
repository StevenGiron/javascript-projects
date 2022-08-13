class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Steven", "Giron");
console.log(persona1);

console.log(persona1.nombre); //get

persona1.nombre = "Juan Carlos";
console.log(persona1._nombre); //set


let persona2 = new Persona("Sebastian", "Giron");
console.log(persona2);