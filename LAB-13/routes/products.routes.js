const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products.controller');

router.get('/nuevo', productsController.get_nuevo);

router.post('/nuevo', productsController.post_nuevo);

router.get('/', productsController.listar);

module.exports = router;