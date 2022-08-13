let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion) {
        resolver('Resolvió correcto');
    } else {
        rechazar('Se producjo un error');
    }
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// miPromesa
//     .then(valor => console.log(valor))
//     .catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    setTimeout(() => resolver('Saludos con promesa y timeout'), 6000);
});

// promesa.then(valor => console.log(valor));

//async indica que una funcion regresa una promesa

async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}

miFuncionConPromesa.then(valor => constructor(valor));