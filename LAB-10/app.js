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

        else if (request.url === "/community" && request.method === "GET") {
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html>');
            response.write('<head><meta charset="utf-8"></head><body>');
            response.write("<h1>49ers Fan Base locations</h1>");
            response.write('<form action="/community" method="POST">');
    
            let radios = '<fieldset><legend>From which continent are you supporting us from?</legend>';
            radios += '<div><input type="radio" id="america" name="continent" value="america" checked>'
            radios += '<label for="america">America</label></div><br>';
            radios += '<div><input type="radio" id="europa" name="continent" value="europa">';
            radios += '<label for="europa">Europa</label></div><br>';
            radios += '<div><input type="radio" id="africa" name="continent" value="africa">';
            radios += '<label for="africa">Africa</label></div><br>';
            radios += '<div><input type="radio" id="asia" name="continent" value="asia">';
            radios += '<label for="asia">Asia</label></div><br>';
            radios += '<div><input type="radio" id="oceania" name="continent" value="oceania">';
            radios += '<label for="oceania">Oceania</label></div></fieldset><br>';
    
            response.write(radios);
    
            response.write('<label for="countryN">What is the name of your country?</label>');
            response.write('<input type="text" id="countryN" name="countryN"><br><br>');
    
            response.write('<input type="submit" value="Submit">');
    
            response.write("</form>");
            response.write('</body></html>');
            response.end(); 
        } 
        
        else if (request.url === "/community" && request.method === "POST") {
    
            const datos = [];
    
            request.on('data', (dato) => {
                console.log(dato);
                datos.push(dato);
            });
    
            return request.on('end', () => {
                const datos_completos = Buffer.concat(datos).toString();
                console.log(datos_completos);
                const continent = datos_completos.split('&')[0].split('=')[1];
                console.log(continent);
                if(continent === "america") {
                    response.setHeader('Content-Type', 'text/html');
                    response.write('<!DOCTYPE html>');
                    response.write("This year there will be no international games here :(");
                    response.write('<br></br>')
                    response.write('<img alt="america" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Americas_on_the_globe_%28red%29.svg/1200px-Americas_on_the_globe_%28red%29.svg.png">');
                    return response.end();
                } 
                else if(continent === "europa"){
                    response.setHeader('Content-Type', 'text/html');
                    response.write('<!DOCTYPE html>');
                    response.write("This year we'll travel to the U.K for 3 games and to Germany for 2 games!");
                    response.write('<br></br>')
                    response.write('<img alt="europa" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Europe_on_the_globe_%28red%29.svg/1200px-Europe_on_the_globe_%28red%29.svg.png">');
                    return response.end();
                } 
                else if(continent === "africa"){
                    response.setHeader('Content-Type', 'text/html');
                    response.write('<!DOCTYPE html>');
                    response.write("We'll only have official events here, no games scheduled :(");
                    response.write('<br></br>')
                    response.write('<img alt="africa" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/1200px-Africa_%28orthographic_projection%29.svg.png">');
                    return response.end();
                } 
                else if(continent === "asia"){
                    response.setHeader('Content-Type', 'text/html');
                    response.write('<!DOCTYPE html>');
                    response.write("There are no programmed events for this continent :(");
                    response.write('<br></br>')
                    response.write('<img alt="asia" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Asia_on_the_globe_%28red%29.svg/1200px-Asia_on_the_globe_%28red%29.svg.png">');
                    return response.end();
                } 
                else if(continent === "oceania"){
                    response.setHeader('Content-Type', 'text/html');
                    response.write('<!DOCTYPE html>');
                    response.write("There are no programmed events for this continent :(");
                    response.write('<br></br>')
                    response.write('<img alt="oceania" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Oceania_on_the_globe_%28red%29_%28Polynesia_centered%29.svg/1200px-Oceania_on_the_globe_%28red%29_%28Polynesia_centered%29.svg.png">');
                    return response.end();
                } 
            });
        } 
        
        else {
            response.statusCode = 404;
            response.write("URL no enocntrada, intenta otra.");
            response.end();
        }
    });

    server.listen(3000);
});
