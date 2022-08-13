//funcion de tipo expresion
let sumar = function(c, d) { return c + d; };

let resultado = sumar(2, 3);
console.log(resultado);

const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(2, 3);
console.log(resultado);


resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

//paso por referencia
const persona = {
    nombre: "Steven",
    apellido: "Giron"
};

function cambiarValorObjeto(p1) {
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}

cambiarValorObjeto(persona);

console.log(persona);