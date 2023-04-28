const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/mclaren', mainController.getML);

module.exports = router;