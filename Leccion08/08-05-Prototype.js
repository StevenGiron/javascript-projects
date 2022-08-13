//funcion constructor de obejtos
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    };
}

Persona.prototype.telefono;

let padre = new Persona("Juan", "Perez", "jp@gmail.com", "3104528812");
console.log(padre);
padre.telefono = 3104528812;
console.log(padre.telefono);


let madre = new Persona("Luisa", "Acila", "la@gmail.com");
console.log(madre);