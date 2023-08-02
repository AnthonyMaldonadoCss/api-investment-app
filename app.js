const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/routes');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(
  express.json(),
  cors()
);
app.use('/exchange', router.exchanceRoutes);
app.use('/test', router.isRunning);

module.exports = app