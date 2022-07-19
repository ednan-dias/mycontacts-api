/* eslint-disable no-console */
const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);
app.use((error, req, res, next) => {
  console.log('### Error Handler ###');
  console.log(error);
  res.sendStatus(500);
});

app.listen(3333, () => console.log('❤️‍🔥 Server is running at http://localhost:3333'));
