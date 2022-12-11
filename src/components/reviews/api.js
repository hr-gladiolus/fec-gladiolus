import axios from 'axios';

const config = require('../../config.js');

const instance = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: { Authorization: config.API_TOKEN },
});

// eslint-disable-next-line import/prefer-default-export

// gets product id
export function getProductRating(productId) {
  return instance.get('/reviews/meta', {
    params: {
      product_id: productId,
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

// gets product ratings and number of ratings
export function getRatings(productId) {
  return instance.get('/reviews/meta', {
    params: {
      product_id: productId,
    },
  })
    .then((response) => {
      const oldFormatRatings = response.data.ratings;
      const ratingsString = {
        five: oldFormatRatings['5'],
        four: oldFormatRatings['4'],
        three: oldFormatRatings['3'],
        two: oldFormatRatings['2'],
        one: oldFormatRatings['1'],
      };
      let numberOfRatings = 0;

      for (let i = 0; i < Object.values(ratings).length; i += 1) {
        const currentRating = parseInt(Object.values(ratings)[i], 10);
        numberOfRatings += currentRating;
      }

      const result = {
        number: numberOfRatings,
        ratings,
      };
      return result;
    })
    .catch((err) => err);
}

// gets reviews
export function getReviews(productId, sortOption, numberOfReviews) {
  return instance.get('/reviews/', {
    params: {
      page: 1,
      count: numberOfReviews,
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
