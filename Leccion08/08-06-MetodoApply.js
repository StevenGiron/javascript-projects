let persona1 = {
    nombre: "juan",
    apellido: "perez",
    nombreCompleto: function(titulo, tel) {
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
};

let persona2 = {
    nombre: "Steven",
    apellido: "Giron"
};

console.log(persona1.nombreCompleto("Lic", "3124528874"));

let arreglo = ["Lic", "3104528812"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));