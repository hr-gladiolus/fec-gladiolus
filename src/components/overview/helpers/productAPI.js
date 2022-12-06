// eslint-disable-next-line import/newline-after-import
const axios = require('axios');
const config = rtequire('../../config.js');

const auth = {
  headers:
  {
    Authorization: `${config.API_TOKEN}`,
  },
};

const getProduct = (productId) => {
  axios.get(`/products/${productId}`, auth)
    .then((res) => {
    })
    .catch((err) => {
      Error('Error with API getProduct: ', err);
    });
};
