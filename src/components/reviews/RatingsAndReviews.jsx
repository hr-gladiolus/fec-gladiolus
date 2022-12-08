/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterRatings from './FilterRatings.jsx';
import ProductFactors from './ProductFactors.jsx';
import ReviewsList from './ReviewsList.jsx';
import AddReview from './AddReview.jsx';
import { getMetaData } from './api.js';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';

function RatingsAndReviews() {
  const [filter, setFilter] = useState(false);
  const [currentFilters, setCurrentFilters] = useState({});
  const filters = {
    five: false,
    four: false,
    three: false,
    two: false,
    one: false,
  };
  const [selectedFilters, setSelectedFilters] = useState(filters);

  const product = useSelector((state) => state.product.productId);
  const meta = useSelector((state) => state.meta.data);
  const dispatch = useDispatch();

  const { visible, toggle } = useModal();

  return (
    <div>
      <h1>Ratings & Reviews</h1>

      {/* filter ratings */}
      <FilterRatings filter={filter} setFilter={setFilter} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} filters={filters} />
      <br />

      {/* product factors */}
      <ProductFactors />

      {/* number of reviews, sort selector */}

      {/* serarch for keyword */}
      <p>search for keyword</p>

      {/* reviews list */}
      <ReviewsList filter={filter} currentFilters={currentFilters} />

      {/* more reviews button */}
      <button type="button">More Reviews</button>

      {/* add reviews button and modal */}
      <button type="button" onClick={toggle}>Add Review +</button>
      <Modal visible={visible} toggle={toggle}>
        <AddReview />
      </Modal>
    </div>
  );
}

export default RatingsAndReviews;
