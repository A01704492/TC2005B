const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/alpine', mainController.getAP);

module.exports = router;