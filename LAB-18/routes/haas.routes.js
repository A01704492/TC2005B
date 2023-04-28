const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/haas', mainController.getHA);

module.exports = router;