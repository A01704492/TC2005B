const express = require('express');

const router = express.Router();

const razas = ["Beagle", "Golden", "Husky", "Dálmata", "Chihuahua", ]

router.get('/', (request, response, next) => {
    response.render('lista'), {razas: razas};
});

module.exports = router;