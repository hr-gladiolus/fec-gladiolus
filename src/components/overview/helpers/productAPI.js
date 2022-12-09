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

function getStyles(productId) {
  return instance.get(`/products/${productId}/styles`)
    .then((results) => results.data.results)
    .catch((err) => {
      Error('Error with productAPI getStyles', err);
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
  return instance.get(`/products/${productId}`)
    .then((result) => result.data)
    .catch((err) => {
      Error('Error with productAPI getProduct', err);
    });
}

function getReviews(productId) {
  return instance.get(`/reviews/meta?product_id=${productId}`)
    .then((results) => results.data)
    .catch((err) => {
      Error('Error with productAPI getReviews', err);
    });
}

module.exports = {
  getProducts,
  getProduct,
  getStyles,
  getReviews,
  instance,
};
