const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/extras', (request, response, next) => {
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
        <h3>Describe el archivo package.json</h3>
        <h4>
        El archivo "package.json" es un archivo utilizado en proyectos de desarrollo de software con Node.js. Contiene información sobre el proyecto y sus dependencias. 
        <br><br>
        Entre la información que puede contener el archivo package.json se incluyen:
        <br><br>
        1. El nombre del proyecto
        <br>
        2. La versión del proyecto
        <br>
        3. La descripción del proyecto
        <br>
        4. El autor del proyecto
        <br>
        5. La licencia del proyecto
        <br>
        6. Las dependencias del proyecto, que pueden ser módulos de Node.js o paquetes externos
        <br>
        7. Los scripts del proyecto, que son comandos que se pueden ejecutar en el proyecto, como por ejemplo, la compilación o el inicio del servidor.
        <br><br>
        El archivo package.json es importante porque es utilizado por las herramientas de gestión de dependencias de Node.js, como NPM (Node Package Manager), para instalar y gestionar las dependencias del proyecto. 
        Además, es utilizado por otras herramientas de desarrollo, como linters o test runners, para conocer las dependencias del proyecto y sus versiones.
        </h4>
        `
    response.send(html);
});

module.exports = router;