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

console.log(persona1.nombreCompleto.call(persona2));

console.log(persona1.nombreCompleto.call(persona2, "Ing", "3104528812"));