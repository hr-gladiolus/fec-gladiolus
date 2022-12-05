import React, { useEffect, useState } from 'react';
import FilterRatings from './FilterRatings.jsx';
import ProductFactors from './ProductFactors.jsx';
import ReviewsList from './ReviewsList.jsx';
import AddReview from './AddReview.jsx';
import { getProductRating } from './api.js';

function RatingsAndReviews() {
  const [rating, setRating] = useState();

  useEffect(() => {
    getProductRating()
      .then((result) => {
        setRating(result);
      });
  }, []);

  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <p>{rating}</p>
      <p>star rating (insert when we actually get it done)</p>
      <FilterRatings />
      <ProductFactors />
      <p>search for keyword</p>
      <ReviewsList />
      <button type="button">More Reviews</button>
      <button type="button">Add A Review +</button>
    </div>
  );
}

export default RatingsAndReviews;
