
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
            response.end();
        }

        else if(request.url === "/product"){
            response.setHeader('Content-Type', 'text/html');
            response.write('<a href="https://www.49ers.com/shop/">Buy 49ers products here!</a>');
            response.end();
        }

        else if(request.url === "/buy_tickets"){
            response.setHeader('Content-Type', 'text/html');
            response.write('<a href="https://www.nfl.com/tickets/">Buy tickets for nfl games here!</a>');
            response.end();
        }
        
        else {
            response.statusCode = 404;
            response.write("URL no enocntrada, intenta otra.");
            response.end();
        }
    });

    server.listen(3000);
});

