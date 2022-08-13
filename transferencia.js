class cliente {
    constructor(banco, numeroCuenta, saldo) {
        this.banco = banco;
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }
    transferir() {
        if (this.banco == datos[1]) {
            this.saldo -= datos[3];
            console.log(this.saldo);
        } else {
            this.saldo -= (datos[3] + costoT);
            console.log(this.saldo);
        }
    }
}

class destino {
    constructor(bancoDestino, numeroCuentaDestino, saldoDestino) {
        this.bancoDestino = bancoDestino;
        this.numeroCuentaDestino = numeroCuentaDestino;
        this.saldoDestino = saldoDestino;
    }
    recibir() {
        this.saldoDestino += datos[3];
        console.log(this.saldoDestino);

    }
}

function verificación() {
    var tv = document.getElementById("dinero");
    datos[2] = parseInt(tv.value);
    if (datos[2] == destinos[0].numeroCuentaDestino) {
        titulo.innerHTML = "Digite el valor a transferir:";
        return true;
    } else {
        cont--;
        alert("cuenta incorrecta");
        return false;
    }
}

function tomarValor() {
    var tv = document.getElementById("dinero");
    if (cont == 1) {
        datos[1] = parseInt(tv.value);
        p.innerHTML = "";
        titulo.innerHTML = "Digite el numero de cuenta:";
    }
    if (cont == 2) {
        verificación();
    }

    if (cont == 3) {
        datos[3] = parseInt(tv.value);
        clientes[0].transferir();
        destinos[0].recibir();
    }
    cont++;
    console.log(datos[cont]);
    console.log(datos);
}


var fecha = new Date();
var hora = fecha.getHours();
console.log(hora);

var cont = 1;
var datos = [];
var t = document.getElementById("aceptar");
t.addEventListener("click", tomarValor);
var titulo = document.getElementById("titulo");
var p = document.getElementById("parrafo");

titulo.innerHTML = "Seleccione el banco de destino: <br>";
p.innerHTML = "<br> 1. Neki. <br> 2. Bancolombia <br> 3. Daviplata <br>";

var costoT = 100000;
var monto = 0;
var clientes = [];
var destinos = [];

clientes.push(new cliente("Bancolombia", 123456, 6000000));
destinos.push(new destino("Neki", 654321, 6000000));