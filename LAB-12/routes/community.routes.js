const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/community', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'community.html'));
});

module.exports = router;