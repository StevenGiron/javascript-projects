function miFuncion() {
    console.log('Saludos desde mi funcion');
}
/*let miFuncion = function() {
    console.log('Saludos desde mi funcion');
}*/

// const miFuncionFlecha = () => {
//     console.log('Saludos desde mi funcion flecha');
// };

// const miFuncionFlecha = () => console.log('Saludos desde mi funcion flecha');

// miFuncionFlecha();

// const saludar = () => {
//     return 'saludos desde funcion flecha';
// }

const saludar = () => 'Saludos desde funcion flecha';
console.log(saludar());

const regresaObjeto = () => ({
    nombre: 'Juan',
    apellido: 'Giron'
});
console.log(regresaObjeto());

//const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Saludos con parametros');

//const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
};

console.log(funcionConVariosParametros(3, 2));