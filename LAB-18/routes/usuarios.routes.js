const express = require('express');

const isAuth = require("../util/is-auth");

const router = express.Router();

const usuariosController = require('../controllers/usuarios.controller');

router.get('/login', usuariosController.get_login);

router.post('/login', usuariosController.post_login);

router.get('/logout', usuariosController.logout);

module.exports = router;