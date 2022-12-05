import React from 'react';
import FilterRatings from './FilterRatings.jsx';
import ProductFactors from './ProductFactors.jsx';
import ReviewsList from './ReviewsList.jsx';
import AddReview from './AddReview.jsx';

function RatingsAndReviews() {
  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <p>average rating number</p>
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
