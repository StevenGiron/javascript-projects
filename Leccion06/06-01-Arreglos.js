//let autos = new Array("BMW", "Mercedez Benz", "Volvo");

const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for (i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

autos[1] = "MercedesBenz";
console.log(autos[1]);

autos.push("Audi");
console.log(autos);

autos[autos.length] = "Cadillac";
console.log(autos);

autos[5] = "Porshe";
console.log(autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);