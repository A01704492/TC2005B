const Product = require('../models/products.model');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const product = new Product({
        name: request.body.name,
        product: request.body.product,
        description: request.body.description,
    });

    product.save();

    response.redirect('/products/');
};

exports.listar = (request, response, next) => {
    response.render('lista', {products: Product.fetchAll()});
};