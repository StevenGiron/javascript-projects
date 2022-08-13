class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles() {
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
}

let empelado1 = new Empleado('Martha', 5000, );
let gerente1 = new Gerente('Steven', 5000, 'Sistemas');

imprimir(gerente1);