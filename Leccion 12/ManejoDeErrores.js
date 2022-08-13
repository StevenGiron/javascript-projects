"use strict";
try {
    let x = 10;
    //miFuncion();
    throw 'Mi error';
} catch (error) {
    console.log(error);
} finally {
    console.log('termina la revision de errores');
}

console.log("Continuamos...");