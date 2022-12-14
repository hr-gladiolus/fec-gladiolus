import axios from 'axios';

const config = require('../../config.js');

const instance = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: { Authorization: config.API_TOKEN },
});

// eslint-disable-next-line import/prefer-default-export

// gets reviews
export function getReviews(productId, sortOption) {
  return instance.get('/reviews/', {
    params: {
      page: 1,
      count: 1000,
      sort: sortOption,
      product_id: productId,
    },
  })
    .then((response) => response.data.results);
}

// marks review as helpful
export function markHelpful(reviewId) {
  return instance.put(`/reviews/${reviewId}/helpful`)
    .then((response) => response);
}

// reports review
export function reportReview(reviewId) {
  return instance.put(`/reviews/${reviewId}/report`)
    .then((response) => response);
}
