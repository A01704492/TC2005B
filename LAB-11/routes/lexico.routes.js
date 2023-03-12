const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/lexico', (request, response, next) => {
    let html = 
        `
        <!DOCTYPE html>
        <html>
        <head><meta charset ="utf-8"></head><body>
        <title>Léxico</title>
        <style>
            body {
                margin: 0 auto;
                max-width: 75em;
                font-family: "Helvetica", "Arial", sans-serif;
                line-height: 1.5;
                padding: 4em 1em;
                
            }
            h1{
                color: rgb(0, 115, 231);
                margin-top: 5px;
                text-align: center;
                font-size: xx-large;
            }
            h2,h3 {
                margin-top: 1em;
                padding-top: 1em;
                color: #000;
                color: rgb(0, 115, 231);
                font-size: x-large;
            }
            p {
                color: #444;
            }
        </style>
        <h3>El léxico de un lenguaje  es el conjunto de palabras o símbolos que conforman su gramática y que tienen un significado específico dentro del lenguaje.</h3>
        <h4>Para mi lenguaje implementado con LOGO, algunas de las palabras claves del léxico son:</h4>
        <h5><u>Adelante</u></h5>
        <h5><u>Atras</u></h5>
        <h5><u>VueltaDerecha</u></h5>
        <h5><u>VueltaIzquierda</u></h5>
        <h5><u>AlzaPluma</u></h5>
        <h5><u>CentrarPluma</u></h5>
        <h5><u>BajarPluma</u></h5>
        <h5><u>LimpiarPantalla</u></h5>
        <h5><u>ColorPluma</u></h5>
        <h5><u>Repetir</u></h5>
        `
    response.send(html);
});

module.exports = router;