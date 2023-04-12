const Usuario = require('../models/usuarios.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {

  const msg = request.session.mensaje;
  request.session.mensaje  = '';

  if (request.session.isLoggedIn){
    response.render('inicio',{
      isLoggedIn: request.session.isLoggedIn || false,
      nombre: request.session.nombre || '',
    });
  }

  else{
    response.render('login', {
      isLoggedIn: request.session.isLoggedIn || false,
      nombre: request.session.nombre || '',
      mensaje: msg
    });
  }
};

exports.post_login = (request, response, next) => {

    Usuario.fetchOne(request.body.userMail)
      .then(([rows, fieldData]) => {
        if (rows.length == 1) {
          bcrypt
            .compare(request.body.userPass, rows[0].user_Password)
            .then((doMatch) => {
              if (doMatch) {
                request.session.isLoggedIn = true;
                request.session.nombre = rows[0].user_Name;
                return request.session.save((err) => {
                  console.log("[Info] A user logged in successfully.")
                  response.redirect("/../inicio");
                });
              } 
              else {
                request.session.mensaje = "Usuario y/o contraseña incorrectos.";
                console.log("[WARN] A user failed to login.")
                response.redirect("/usuarios/login");
              }
            })
            .catch((error) => console.log(error));
        }
        else {
          request.session.mensaje = "Usuario y/o contraseña incorrectos.";
          console.log("[WARN] A user failed to login.")
          response.redirect("/usuarios/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });

};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        console.log("[Info] A user logget out.");
        response.redirect('/usuarios/login');
    });
};