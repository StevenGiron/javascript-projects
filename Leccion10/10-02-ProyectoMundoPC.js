class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this.idRaton;
    }

    toString() {
        return `Raton: [idRaton: ${this._idRaton}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}.]`;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString() {
        return `Teclado: [idTeclado: ${this._idTeclado}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}.]`;
    }
}

class Monitor {
    static contadorMonitores = 0;
    constructor(marca, tamaño) {
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamaño() {
        return this._tamaño;
    }

    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}.]`;
    }
}

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado) {
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    toString() {
        return `idComputadora: ${this._idComputadora}, Nombre: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }

}

class Orden {
    static contadorOrdenes = 0;
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];

    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadoras(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let computadorasOrden = "";
        for (let computadora of this._computadoras) {
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }

}


let raton1 = new Raton('USB', 'dragon');
console.log(raton1.toString());

let raton2 = new Raton('Bluetooth', 'MSI');

let teclado1 = new Teclado('USB', 'dragon');
console.log(teclado1.toString());

let teclado2 = new Teclado('Bluetooth', 'MSI');

let monitor1 = new Monitor('Samsung', '24"');
console.log(monitor1.toString());

let monitor2 = new Monitor('MSI', '20"');

let computadora1 = new Computadora("Armada", monitor1, raton1, teclado1);

let computadora2 = new Computadora("Completa", monitor2, raton2, teclado2);


console.log(computadora1.toString());

let orden1 = new Orden();

orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora2);

orden1.mostrarOrden();