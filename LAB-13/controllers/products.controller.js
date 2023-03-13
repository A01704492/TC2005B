const Products = require('../models/products.model');

exports.listar = (request, response, next) => {
    response.render('lista', {products: Products.fetchAll()});
};