const config = require('../../config.js');

// pass default options into axios
// have to bypass linter, since we need config
// eslint-disable-next-line import/order
const axios = require('axios').create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: { Authorization: config.API_TOKEN },
});

// GET all info on a given product
export default function getProduct(id) {
  let result = {};

  return axios.get(`/products/${id}`)
    .then(({ data }) => {
      // GET basic product info
      result = data;
    })
    .then(() => axios.get(`/products/${id}/styles`))
    .then(({ data }) => {
      // GET product styles
      result.styles = data.results;
    })
    .then(() => axios.get(`/reviews/meta?product_id=${id}`))
    .then(({ data }) => {
      // GET product reviews
      result.ratings = data.ratings;
      result.recommended = data.recommended;
      result.characteristics = data.characteristics;

      // calculate average rating
      const { ratings } = data;
      let total = 0;
      let average = 0;
      for (let i = 1; i < 6; i += 1) {
        if (ratings[i]) {
          total += parseInt(ratings[i], 10);
          average += parseInt(ratings[i], 10) * i;
        }
      }

      result.average_rating = total ? (average / total).toFixed(2) : null;
      result.average_rating_tenth = Math.round(result.average_rating * 10) / 10;
      result.total_reviews = total;

      return result;
    });
}
