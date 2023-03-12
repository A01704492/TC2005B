const Perro = require('../models/perros.model');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const perro = new Perro({
        nombre: request.body.nombre,
        raza: request.body.raza,
        descripcion: request.body.descripcion,
    });

    perro.save();

    exports.accion = (request, response, next) => {
        response.setHeader('Set-Cookie', 'ultimo_perro' + perro.nombre);
    }
    response.redirect('/perros/');
};

exports.listar = (request, response, next) => {

    console.log(request.get('Cookie').split('='[1]));
    
    response.render('lista', { razas: Perro.fetchAll() });
};
