const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/alfaromeo', mainController.getAR);

module.exports = router;