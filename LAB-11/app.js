const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//rutas
const lexRuta = require('./routes/lexico.routes');
app.use(lexRuta);

const stxRuta = require('./routes/sintaxis.routes');
app.use(stxRuta);

const lbrRuta = require('./routes/libRegex.routes');
app.use(lbrRuta);

const grmRuta = require('./routes/gramatica.routes');
app.use(grmRuta);

const extRuta = require('./routes/extras.routes');
app.use(extRuta);

//html
app.use('/', (request, response, next) => {
    let html = 
        `
        <!DOCTYPE html>
        <html>
        <head><meta charset ="utf-8"></head><body>
        <title>LAB-11 Express</title>
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
        <h1>Diseño de Lenguaje inspirado en LOGO</h1>
        <br>
        <h3>Léxico</h3>
        <p>Dirigete a la ruta /lexico para más información<p>
        <h3>Sintaxis</h3>
        <p>Dirigete a la ruta /sintaxis para más información<p>
        <h3>Librería Regex</h3>
        <p>Dirigete a la ruta /libRegex para más información<p>
        <h3>Gramática</h3>
        <p>Dirigete a la ruta /gramatica para más información<p>
        <h3>Extras</h3>
        <p>Dirigete a la ruta /extras para más información<p>
        `;
    response.send(html);
});

//error
app.use((request, response, next) => {
    response.statusCode = 404;
    response.write("Esa ruta no existe, intenta con las antes mencionadas.");
    response.end();
});

app.listen(3000);