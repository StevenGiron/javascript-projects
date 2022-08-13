function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallBack) {
    let resultado = op1 + op2;
    funcionCallBack(resultado);
}

sumar(2, 3, imprimir);

//Llamadas asincronas con uso setTimeout

function miFuncionCallBack() {
    console.log('Saludo asincrono despues de 3 seg');
}

setTimeout(miFuncionCallBack, 3000);

setTimeout(function() { console.log('Saludo asincrono 2') }, 4000);

setTimeout(() => console.log('Saludo asincrono 3'), 1000);


let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);