const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/libRegex', (request, response, next) => {
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
        <h3>¿Como se hace la implementación de un lenguaje utilizando la librería de regex?.</h3>
        <h4>
        <br>
        1. Definir la gramática del lenguaje: La gramática define las reglas sintácticas del lenguaje, como la estructura de las sentencias, las expresiones y las declaraciones.
        <br><br><br>
        2. Identificar los patrones de texto: Con base en la gramática, se pueden identificar los patrones de texto que corresponden a cada regla sintáctica. Estos patrones se pueden expresar utilizando expresiones regulares.
        <br><br><br>
        3. Crear las expresiones regulares: Utilizando la librería de regex, se pueden crear las expresiones regulares correspondientes a cada patrón de texto identificado en la gramática.
        <br><br><br>
        4. Validar las cadenas de texto: Una vez definidas las expresiones regulares, se pueden utilizar para validar las cadenas de texto que corresponden al lenguaje.
        <br><br><br>
        5. Desarrollar la aplicación: Finalmente, se puede utilizar la validación de las cadenas de texto para desarrollar la aplicación que implementa el lenguaje.</h4>
        `
    response.send(html);
});

module.exports = router;