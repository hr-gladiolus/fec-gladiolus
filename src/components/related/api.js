const config = require('../../config.js');

// pass default options into axios
// have to bypass linter, since we need config
// eslint-disable-next-line import/order
const axios = require('axios').create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: { Authorization: config.API_TOKEN },
});

// GET product info based on ID, return formatted data for use by Card component
export function getProductCard(id) {
  // variable to store formatted data
  let result = {};
  return axios.get(`/products/${id}`).then((res) => {
    // store the product name, category, and price
    result = {
      name: res.data.name,
      category: res.data.category,
      price: res.data.default_price,
      features: res.data.features,
    };
  }).then(() => axios.get(`/reviews/meta?product_id=${id}`)).then((res) => {
    // calculate average rating
    const { ratings } = res.data;
    let total = 0;
    let average = 0;
    for (let i = 1; i < 6; i += 1) {
      if (ratings[i]) {
        total += parseInt(ratings[i], 10);
        average += parseInt(ratings[i], 10) * i;
      }
    }
    // format rating, handle case where there are no ratings
    result.rating = total ? (average / total).toFixed(2) : null;
  })
    .then(() => axios.get(`/products/${id}/styles`))
    .then((res) => ({
      ...result,
      image: res.data.results[0].photos[0].thumbnail_url,
    }));
}

// GET related products given an ID
export function getRelated(id) {
  // a set is used to make sure the related products are all unique
  return axios.get(`/products/${id}/related`).then((res) => [...new Set(res.data)]);
}
