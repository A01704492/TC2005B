const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/gramatica', (request, response, next) => {
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
        <h3>Se está trabajando en la gramática</h3>
        `
    response.send(html);
});

module.exports = router;