const express = require('express');
const router = express.Router();
const exchange = require('../../controllers/exchange/exchance.controller');

router.post('/get_rates', exchange.getExchangeRate);

module.exports = router;