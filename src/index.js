/* eslint-disable no-console */
const express = require('express');
require('express-async-errors');

const cors = require('./middlewares/cors');
const errorHandler = require('./middlewares/errorHandler');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3333, () =>
  console.log('❤️‍🔥 Server is running at http://localhost:3333')
);
