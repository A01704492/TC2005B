console.log("hola mundo");
console.info("Este script se está ejectuando desde una computadora y no desde el navegador");
console.warn("document, alert, confirm y prompt, no existen en el entorno de ejecución de node ");
console.error("Asi se ve un error");

//fs es el modulo para trabajar con el sistema de archivos
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'hola desde node');

console.log("Terminamos de escribir el archivo");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000,50]

for(let item of arreglo){
    setTimeout(() => {console.log(item);}, item)
}

// http es el módulo que permite crear un servidor que pueda atender peticiones http

const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>Chilaquiles</h1>")
    response.write("hola desde casa");
    response.end();
});

server.listen(3000);