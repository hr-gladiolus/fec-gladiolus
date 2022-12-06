import axios from 'axios';

const config = require('../../config.js');

const instance = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: { Authorization: config.API_TOKEN },
});

// eslint-disable-next-line import/prefer-default-export
export function getProductRating() {
  return instance.get('/reviews/meta', {
    params: {
      product_id: 37313,
    },
  })
    .then((response) => {
      const { ratings } = response.data;
      let total = 0;
      let average = 0;
      let ratingsNumber = 0;
      for (let i = 1; i < 6; i += 1) {
        const currentRating = parseInt(ratings[i], 10);
        total += currentRating * i;
        ratingsNumber += currentRating;
      }
      average = total / ratingsNumber;
      const rounded10 = Math.round(average * 10) / 10;
      return rounded10;
    })
    .catch((err) => err);
}

export function getReviews() {
  return instance.get('/reviews/', {
    params: {
      page: 1,
      count: 1,
      sort: 'newest',
      product_id: 37313,
    },
  })
    .then((response) => response.data.results);
}
