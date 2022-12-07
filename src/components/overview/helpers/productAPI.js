// eslint-disable-next-line import/newline-after-import
/* eslint-disable no-console */
const axios = require('axios');
const config = require('../../../config.js');

const instance = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: {
    Authorization: config.API_TOKEN,
  },
});

async function getStyles(productId) {
  return instance.get(`/products/${productId}/styles`)
    .then((results) => results.data.results)
    .catch((err) => {
      Error('Error with productAPI getStyle', err);
    });
}

function getProducts() {
  return instance.get('/products')
    .then((results) => results.data)
    .catch((err) => {
      Error('Error with productAPI getProducts', err);
    });
}

function getProduct(productId) {
  console.log('I am inside getProduct API');
  return instance.get(`/products/${productId}`)
    .then((result) => result.data)
    .catch((err) => {
      Error('Error with productAPI getProduct', err);
    });
}

// getProducts();
// getProduct(37313);
const styleData = getStyles(37313);
const result = styleData.then((data) => console.log(data));

module.exports = {
  getProducts,
  getProduct,
  getStyles,
  result,
};

