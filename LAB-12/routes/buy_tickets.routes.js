const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/buy_tickets', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'buy_tickets.html'));
});

module.exports = router;