const express = require('express');
const router = express.Router();
const testRoute = require('../../controllers/running/run');

router.post('/test_api', testRoute.test);

module.exports = router;
