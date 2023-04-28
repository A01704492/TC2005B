const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/mercedes', mainController.getMB);

module.exports = router;