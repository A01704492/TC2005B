const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/home', mainController.getMain);
router.get('/register', mainController.getRegister);
router.post('/register', mainController.postEscuderia);
router.get('/list', mainController.getList);
router.get('/random', mainController.getRandom);
router.get('/buscar/:valor_busqueda', mainController.get_buscar);

module.exports = router;