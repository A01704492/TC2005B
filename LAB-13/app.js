const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const ninersproductsRuta = require('./routes/products.routes');
app.use(ninersproductsRuta);

app.use((request, response, next) => {
    response.statusCode = 404;
    response.write("Esa ruta no existe.");
    response.end();
});

app.listen(3000);