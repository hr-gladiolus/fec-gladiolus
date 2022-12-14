const config = require('../../config.js');

// pass default options into axios
// have to bypass linter, since we need config
// eslint-disable-next-line import/order
const axios = require('axios').create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: { Authorization: config.API_TOKEN },
});

// GET related products given an ID
export default function getRelated(id) {
  // a set is used to make sure the related products are all unique
  return axios.get(`/products/${id}/related`).then((res) => [...new Set(res.data)]);
}
