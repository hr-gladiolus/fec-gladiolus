/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const { getProducts } = require('../src/components/overview/helpers/productAPI.js');

const app = express();
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/products', (req, res) => {
  console.log('I am here in server', req.query);
  getProducts(req.query)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('Error in server', err);
      res.status(404).send(err);
    });
});

app.listen(3000);
// eslint-disable-next-line no-console
console.log('Listening on port 3000');
