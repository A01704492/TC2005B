const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/', mainController.getMain);
router.get('/register', mainController.getRegister);
router.post('/register', mainController.postEscuderia);
router.get('/list', mainController.getList)

module.exports = router;