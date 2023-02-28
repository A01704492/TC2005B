// Definición de FileSystem

const filesystem = require('fs');

// Función 1 - Promedio

function promedio(){
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    var promedioArreglo = (suma/arreglo.length);
    return parseInt(promedioArreglo);
}

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000,50];
console.log("El promedio del arreglo es: " + promedio(arreglo));

// Función 2 - WriteFile

function newFile(string){
    const filesystem = require('fs');
    filesystem.writeFileSync('LAB-8.txt', string);
    return string;
}

let fileStr = "holaholaholahola";
console.log("El string " + newFile(fileStr) + " se ha escrito en LAB-8.txt");

// Función 3 - Factorial

function factorial(numero) {
    if (numero === 0) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
}  

let numeroFactorial = 6;
console.log("El número factorial de ", numeroFactorial, " es: ", factorial(numeroFactorial));

// Ejercicio 4 - Server

const http = require('http');
filesystem.readFile("/Users/diegovega/ConstdeSoftware/TC2005B/LAB-6/LAB-6(OpcionB).html", function(err, html) {
    if(err){
        throw err;
    }

    const server = http.createServer((request, response) => {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    });

    server.listen(3000);
});