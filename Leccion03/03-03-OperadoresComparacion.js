let a = 3;
let b = 2;
let c = "3";

let z = a == b; // se revisa el valor sin importar el tipo
console.log(z);

z = a === c; //revisa si los valores son iguales pero tambien los tipos
console.log(z);


z = a != c;
console.log(z);

z = a !== c;
console.log(z);

z = a < b;
console.log(z);

z = a <= b;
console.log(z);