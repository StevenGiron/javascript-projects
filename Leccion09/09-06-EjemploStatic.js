class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;

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
    nombreCompleto() {
            return this.idPersona + " " + this._nombre + " " + this._apellido;
        }
        //sobreescribiendo el metodo de la clase padre (Object)
    toString() {
        //se aplica polimorfismo
        return this.nombreCompleto();
    }
    static saludar() {
        console.log("saludos desde el metodo static");
    }
    static saludar2(Persona) {
        console.log(Persona._nombre + " " + Persona._apellido);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); //llamar al constructor padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
            this._departamento = departamento;
        }
        //Sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ", " + this._departamento;
    }
}

let persona1 = new Persona("Steven", "Giron");
console.log(persona1.toString());

let empleado1 = new Empleado("Luis", "Andamio", "Dto. Ventas");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);