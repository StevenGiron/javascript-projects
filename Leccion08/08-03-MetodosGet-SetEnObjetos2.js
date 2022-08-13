let persona = {
    nombre: "Steven",
    apellido: "Giron",
    email: "maxpowersga@gmail.com",
    edad: 22,
    idioma: "es",
    get lang() {
        return this.idioma.toLocaleUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona.nombreCompleto);

console.log(persona.lang);

persona.lang = "en";

console.log(persona.idioma);