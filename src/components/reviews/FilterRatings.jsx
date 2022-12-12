/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SingleRating from './SingleRating.jsx';
import Stars from '../shared/Stars.jsx';

const Rating = styled.div``;

const Percentage = styled.div``;

function FilterRatings(props) {
  const [rating, setRating] = useState();

  const { filter, setFilter, filters } = props;
  const { selectedFilters, setSelectedFilters } = props;

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

  const currentFilters = () => (
    <div>
      <p>Current Filters</p>
      {selectedFilters['5'] && <p>5 stars</p>}
      {selectedFilters['4'] && <p>4 stars</p>}
      {selectedFilters['3'] && <p>3 stars</p>}
      {selectedFilters['2'] && <p>2 stars</p>}
      {selectedFilters['1'] && <p>1 stars</p>}
    </div>
  );

  const removeFilterButton = () => (
    <div>
      <button
        type="button"
        onClick={
          () => {
            setFilter(false);
            setSelectedFilters(filters);
          }
        }
      >
        Remove All Filters
      </button>
    </div>
  );

  return (
    <div>

      <Rating>{data.average_rating_tenth}</Rating>

      <Stars rating={data.average_rating} />

      {filter === true && currentFilters()}

      {filter === true && removeFilterButton()}

      <div>
        {['5', '4', '3', '2', '1'].map((number) => <SingleRating selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} setFilter={setFilter} number={number} key={number} />)}
      </div>

      {/* percentage of reviews that recommend */}
      <Percentage>
        {parseInt(data.recommended, 10) / data.total_reviews}
        {' '}
        of reviews recommend this product
      </Percentage>
    </div>
  );
}

export default FilterRatings;
