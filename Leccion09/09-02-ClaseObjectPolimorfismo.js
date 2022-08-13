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
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto() {
            return this._nombre + " " + this._apellido;
        }
        //sobreescribiendo el metodo de la clase padre (Object)
    toString() {
        //se aplica polimorfismo
        return this.nombreCompleto();
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
console.log(persona1);
console.log(persona1.toString()); //se llama el metodo de la clase padre

let empleado1 = new Empleado("Luis", "Andamio", "Dto. Ventas");
console.log(empleado1);

console.log(empleado1.nombreCompleto());


//Sobreescribir metodos del objeto (toString)
console.log(empleado1.toString()); //Se llama el metodo definido en la clase hija