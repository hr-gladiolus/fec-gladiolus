/* eslint-disable max-len */
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
  const [filter, setFilter] = useState(false);
  const filters = {
    five: false,
    four: false,
    three: false,
    two: false,
    one: false,
  };
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const data = useSelector((state) => state.product.productData);

  const { visible, toggle } = useModal();

  return (
    <div id="#readReviews">
      <h1>Ratings & Reviews</h1>

      {/* filter ratings */}
      <FilterRatings filter={filter} setFilter={setFilter} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} filters={filters} />
      <br />

      {/* product factors */}
      <ProductFactors />

      {/* reviews list */}
      {data.number_of_reviews && data.number_of_reviews > 0 && <ReviewsList filter={filter} selectedFilters={selectedFilters} />}

      {/* add reviews button and modal */}
      <button type="button" onClick={toggle}>Add Review +</button>
      <Modal visible={visible} toggle={toggle}>
        <AddReview />
      </Modal>
    </div>
  );
}

export default RatingsAndReviews;
