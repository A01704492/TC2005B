const Product = require('../models/products.model');

exports.get_products = (request, response, next) => {
    let cookies = request.get('Cookie') || '';
    let productConsultas = cookies.split(';')[0].split('=')[1] || 0;
    productConsultas++;
    response.setHeader('Set-Cookie', 'mainConsultas=' + productConsultas + '; HttpOnly');
    
    response.render('products');
};

exports.get_nuevo = (request, response, next) => {
    let cookies = request.get('Cookie') || '';
    let nuevoConsultas = cookies.split(';')[0].split('=')[1] || 0;
    nuevoConsultas++;
    response.setHeader('Set-Cookie', 'mainConsultas=' + nuevoConsultas + '; HttpOnly');
    
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const product = new Product({
        name: request.body.name,
        product: request.body.product,
        description: request.body.description,
    });

    product.save();

    request.session.ultimo_producto = product.name;

    response.redirect('/products/');
};

exports.listar = (request, response, next) => {

    response.render('lista', {
        products: Product.fetchAll(),
        ultimo_producto: request.session.ultimo_producto || '',
    });
};