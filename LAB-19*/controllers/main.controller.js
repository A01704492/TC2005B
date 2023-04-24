const Escuderia = require('../models/escuderias.model');

exports.getLogin = (request, response, next) => {

    response.render('login', {
        titulo: 'Escuderias',
    });
};

exports.getMain = (request, response, next) => {
    
    let cookies = request.get('Cookie') || '';
    let mainConsultas = cookies.split(';')[0].split('=')[1] || 0;
    mainConsultas++;
    response.setHeader('Set-Cookie', 'mainConsultas=' + mainConsultas + '; HttpOnly');

    response.render('main', {
        titulo: 'Colores',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.getRegister = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let registerConsultas = cookies.split(';')[0].split('=')[1] || 0;
    registerConsultas++;
    response.setHeader('Set-Cookie', 'registerConsultas=' + registerConsultas + '; HttpOnly');

    response.render('register', {
        titulo: 'Registrar',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.getRB = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let blueConsultas = cookies.split(';')[0].split('=')[1] || 0;
    blueConsultas++;
    response.setHeader('Set-Cookie', 'blueConsultas=' + blueConsultas + '; HttpOnly');

    response.render('redBull', {
        titulo: 'Red Bull',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.getAM = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let yellowConsultas = cookies.split(';')[0].split('=')[1] || 0;
    yellowConsultas++;
    response.setHeader('Set-Cookie', 'yellowConsultas=' + yellowConsultas + '; HttpOnly');

    response.render('astonMartin', {
        titulo: 'Aston Martin',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.getMB = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let greenConsultas = cookies.split(';')[0].split('=')[1] || 0;
    greenConsultas++;
    response.setHeader('Set-Cookie', 'greenConsultas=' + greenConsultas + '; HttpOnly');

    response.render('mercedes', {
        titulo: 'Mercedes',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.getFR = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let greenConsultas = cookies.split(';')[0].split('=')[1] || 0;
    greenConsultas++;
    response.setHeader('Set-Cookie', 'greenConsultas=' + greenConsultas + '; HttpOnly');

    response.render('ferrari', {
        titulo: 'Ferrari',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.getML = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let greenConsultas = cookies.split(';')[0].split('=')[1] || 0;
    greenConsultas++;
    response.setHeader('Set-Cookie', 'greenConsultas=' + greenConsultas + '; HttpOnly');

    response.render('mclaren', {
        titulo: 'McLaren',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.getAP = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let greenConsultas = cookies.split(';')[0].split('=')[1] || 0;
    greenConsultas++;
    response.setHeader('Set-Cookie', 'greenConsultas=' + greenConsultas + '; HttpOnly');

    response.render('alpine', {
        titulo: 'Alpine',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.getHA = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let greenConsultas = cookies.split(';')[0].split('=')[1] || 0;
    greenConsultas++;
    response.setHeader('Set-Cookie', 'greenConsultas=' + greenConsultas + '; HttpOnly');

    response.render('haas', {
        titulo: 'Haas',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.getAR = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let greenConsultas = cookies.split(';')[0].split('=')[1] || 0;
    greenConsultas++;
    response.setHeader('Set-Cookie', 'greenConsultas=' + greenConsultas + '; HttpOnly');

    response.render('alfaromeo', {
        titulo: 'Alfa Romeo',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.getAT = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let greenConsultas = cookies.split(';')[0].split('=')[1] || 0;
    greenConsultas++;
    response.setHeader('Set-Cookie', 'greenConsultas=' + greenConsultas + '; HttpOnly');

    response.render('alphatauri', {
        titulo: 'Alpha Tauri',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || ''
    });
};

exports.postEscuderia = (request, response, next) => {

    const escuderia = new Escuderia({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
    });

    escuderia.save()
    .then(([rows, fieldData]) => {
        response.redirect('/list');
    })
    .catch((error) => {console.log(error)});

    console.log("Se ha guardado con éxito.")
    console.log(escuderia)
};

exports.getList = (request, response, next) => {

    Escuderia.fetchAll()
    .then(([rows, fieldData]) => {
        console.log(rows);
        
        response.render('list', { 
            escuderias: rows,
        });
    })
    .catch(err => {console.log(err);});
};