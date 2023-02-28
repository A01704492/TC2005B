const filesystem = require('fs');

const http = require('http');
filesystem.readFile("/Users/diegovega/ConstdeSoftware/TC2005B/LAB-6/LAB-6(OpcionB).html", function(err, html) {
    if(err){
        throw err;
    }

    const server = http.createServer((request, response) => {
        console.log(request.url);

        if(request.url === "/"){
            response.setHeader('Content-Type', 'text/html');
            response.write(html);
            response.write('<a href="/product">Accede a la página oficial de los 49ers</a>');
            response.end();
        }

        else if(request.url === "/product"){

        }

        else if(request.url === "/product"){

        }
        
        else {
            response.statusCode = 404;
            response.write("URL no enocntrada, intenta otra.");
            response.end();
        }
    });

    server.listen(3000);
});