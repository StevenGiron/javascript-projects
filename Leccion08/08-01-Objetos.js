let persona = {
    nombre: "Steven",
    apellido: "Giron",
    email: "maxpowersga@gmail.com",
    edad: 22,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());

//otra forma de acceder a las propiedades
console.log(persona["apellido"]);

//for in: para recorrer las propiedades del objeto
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}


//Crear objetos con NEW
let persona2 = new Object();
persona2.nombre = "Steven";
persona2.celular = 3184305786;
persona2.direccion = "calle 12 d";

console.log(persona2.celular);