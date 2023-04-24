const express = require('express');
const router = express.Router();

const appController = require('../controllers/upload.controller');

router.get('/', appController.getMain);
router.get('/upload', appController.getUpload);
router.get('/services', appController.getServices);
router.get('/contact', appController.getContact);

module.exports = router;
