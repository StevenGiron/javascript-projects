async function fucincionConPromesaAwaitTimeout() {
    console.log('inicio funcion');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con Await y Timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('fin funcion');
}

fucincionConPromesaAwaitTimeout();