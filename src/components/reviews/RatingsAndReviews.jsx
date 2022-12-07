import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FilterRatings from './FilterRatings.jsx';
import ProductFactors from './ProductFactors.jsx';
import ReviewsList from './ReviewsList.jsx';
import AddReview from './AddReview.jsx';
import { getProductRating } from './api.js';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';

function RatingsAndReviews() {
  const [rating, setRating] = useState();
  const { visible, toggle } = useModal();
  const product = useSelector((state) => state.product.productId);

  useEffect(() => {
    getProductRating(product)
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
      <button type="button" onClick={toggle}>Add Review +</button>
      <Modal visible={visible} toggle={toggle}>
        <AddReview />
      </Modal>
    </div>
  );
}

export default RatingsAndReviews;
