import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SingleReview from './SingleReview.jsx';
import { getReviews } from './api.js';

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const product = useSelector((state) => state.product.productId);

  useEffect(() => {
    getReviews(product)
      .then((result) => {
        const newReviews = result;
        setReviews(newReviews);
      });
  }, []);
  // if no reviews

  return (
    <div>
      <h3>Reviews List</h3>
      <div>
        {reviews.map((review) => (
          <SingleReview
            review={review}
            key={review.review_id}
            id={review.review_id}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewsList;
