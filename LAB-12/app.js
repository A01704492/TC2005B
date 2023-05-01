const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const ninersRuta = require('./routes/49ers.routes');
app.use(ninersRuta);

const ninersproductsRuta = require('./routes/products.routes');
app.use("/products",ninersproductsRuta);

const ninersbuy_ticketsRuta = require('./routes/buy_tickets.routes');
app.use(ninersbuy_ticketsRuta);

const ninerscommunityRuta = require('./routes/community.routes');
app.use(ninerscommunityRuta);

app.use((request, response, next) => {
    response.statusCode = 404;
    response.write("Esa ruta no existe.");
    response.end();
});

app.listen(3000);
