let persona = {
    nombre: "Steven",
    apellido: "Giron",
    email: "maxpowersga@gmail.com",
    edad: 22,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
};

//Agregar y modificar propiedades
persona.telefono = "318436786";
persona.telefono = "3104528812";
console.log(persona);

//Eliminar propiedades
delete persona.telefono;
console.log(persona);

//otras formas de imprimir objetos
//1 concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido);

// 2 For in
for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//otra
let personaArray = Object.values(persona);
console.log(personaArray);

//otra
let personaString = JSON.stringify(persona);
console.log(personaString);