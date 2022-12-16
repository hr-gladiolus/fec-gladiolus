/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const { getProducts, getProduct } = require('../src/components/overview/helpers/productAPI.js');

const app = express();

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(3000);
// eslint-disable-next-line no-console
console.log('Listening on port 3000');
