class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get idPersona() {
        return this._idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    nombreComppleto() {
        return `${this._nombre} ${this._apellido} ${this._edad}`;
    }
    toString() {
        return `${this._idPersona} ${this.nombreComppleto()}`;
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return `${this._idEmpleado} ${super.nombreComppleto()} ${this._sueldo}`;
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorClientes;
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    toString() {
        return `${this._idCliente} ${super.nombreComppleto()} ${this._fechaRegistro}`;
    }
}

let persona1 = new Persona("Steven", "Giron", 22);
console.log(persona1.toString());

let person2 = new Persona("Sebastian", "Giron", 24);
console.log(person2.toString());

let empleado1 = new Empleado("Martha", "Rojas", 56, 1100000);
console.log(empleado1.toString());

let empleado2 = new Empleado("Dahiana", "Reyes", 25, 1500000);
console.log(empleado2.toString());

let cliente1 = new Cliente("Martha", "Rojas", 57, new Date('2021-2-13'));
console.log(cliente1.toString());

let cliente2 = new Cliente("Mincho", "Giron", 48, new Date());
console.log(cliente2.toString());

console.log(Persona.contadorPersonas);
console.log(Empleado.contadorEmpleados);
console.log(Cliente.contadorClientes);