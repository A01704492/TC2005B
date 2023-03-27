const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const ninersproductsRuta = require('./routes/products.routes');
app.use('/products', ninersproductsRuta);

app.use((request, response, next) => {
    response.statusCode = 404;
    response.write("Esa ruta no existe.");
    response.end();
});

app.listen(3000);