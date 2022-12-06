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

// function getStyles(productId) {
//   return instance.get(`/${productId}/styles`)
//     .then((res) => {
//       console.log('Here are my styles:', res.data);
//     })
//     .catch((err) => {
//       Error('Error with productAPI getStyle', err);
//     });
// }

function getProducts() {
  console.log('I am here in API');
  return instance.get('/products')
    .then((res) => {
      console.log('Here is my data: ', res.data);
      res.status(200).send(res);
    })
    .catch((err) => {
      console.log('error in productAPI', err.response);
      Error('Error with productAPI getProducts', err);
    });
}

module.exports = { getProducts };
