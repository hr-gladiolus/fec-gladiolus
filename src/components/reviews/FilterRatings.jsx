/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SingleRating from './SingleRating.jsx';
import Stars from '../shared/Stars.jsx';

const Rating = styled.div``;

function FilterRatings(props) {
  const [rating, setRating] = useState();

  const { filter, setFilter, filters } = props;
  const { selectedFilters, setSelectedFilters } = props;

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

  // current filters component
  const currentFilters = () => (
    <div>
      <p>Current Filters</p>
      {selectedFilters.five && <p>5 stars</p>}
      {selectedFilters.four && <p>4 stars</p>}
      {selectedFilters.three && <p>3 stars</p>}
      {selectedFilters.two && <p>2 stars</p>}
      {selectedFilters.one && <p>1 stars</p>}
    </div>
  );

  // clears all filters
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

      {/* current filter */}
      {filter === true && currentFilters()}

      {/* remove all filters button */}
      {filter === true && removeFilterButton()}

      {/* filters */}
      <div>
        {['five', 'four', 'three', 'two', 'one'].map((number) => <SingleRating selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} setFilter={setFilter} number={number} key={number} />)}
      </div>

      {/* percentage of reviews that recommend */}
    </div>
  );
}

export default FilterRatings;
