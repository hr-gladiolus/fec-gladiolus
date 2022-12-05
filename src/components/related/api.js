const config = require('../../config.js');

// pass default options into axios
// have to bypass linter, since we need config
// eslint-disable-next-line import/order
const axios = require('axios').create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: { Authorization: config.API_TOKEN },
});

// GET product info based on ID, format data for use by Card component
export default function getProductCard(id) {
  let result = {};
  return axios.get(`/products/${id}`).then((res) => {
    result = {
      name: res.data.name,
      category: res.data.category,
      price: res.data.default_price,
    };
  }).then(() => axios.get(`/reviews/meta?product_id=${id}`)).then((res) => {
    const { ratings } = res.data;
    let total = 0;
    let average = 0;
    for (let i = 1; i < 6; i += 1) {
      total += parseInt(ratings[i], 10);
      average += parseInt(ratings[i], 10) * i;
    }
    average /= total;
    result.rating = average;
  })
    .then(() => axios.get(`/products/${id}/styles`))
    .then((res) => ({
      ...result,
      image: res.data.results[0].photos[0].thumbnail_url,
    }));
}
