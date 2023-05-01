const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

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
