/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const axios = require('axios');
const config = require('../../../config.js');

const instance = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: {
    Authorization: config.API_TOKEN,
  },
});

function addItemToCart(id, qty) {
  return instance.post('/cart', {
    sku_id: id,
    count: qty,
  })
    .then(() => {
      console.log('My item is successfully added to cart');
    })
    .catch((err) => {
      throw new Error('Error in cartAPI addItemToCart', err);
    });
}

// function getItemsInCart() {
//   return instance.get('/cart')
//     .then((results) => {
//       console.log('my items in cart are: ', results.data);
//       return results.data;
//     })
//     .catch((err) => {
//       Error('Error in cartAPI getItemsInCart', err);
//     });
// }

module.exports = { addItemToCart };
