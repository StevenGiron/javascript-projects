function miFuncion(a, b) {
    console.log(arguments.length);
    return a + b;
}

let resultado = miFuncion(2, 2);
console.log(resultado);

let x = function(c, d) { return c + d; };

resultado = x(2, 3);
console.log(resultado);

(function(e, f) {
    console.log("ejecuntado funcion self-invoquing: " + (e + f));
})(3, 4);

//funcion como objeto
let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);