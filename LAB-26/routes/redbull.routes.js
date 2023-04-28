const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/redbull', mainController.getRB);

module.exports = router;