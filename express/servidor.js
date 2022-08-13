var express = require("express");
var app = express();

app.get("/", inicio);

function inicio(peticion, resultado) {
    resultado.send("este es el home. genial");
}

app.listen(8989);