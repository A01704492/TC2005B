const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/ferrari', mainController.getFR);

module.exports = router;