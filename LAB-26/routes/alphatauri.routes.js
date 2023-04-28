const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/alphatauri', mainController.getAT);

module.exports = router;