/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getProductRating, getRatings } from './api.js';
import SingleRating from './SingleRating.jsx';

function FilterRatings(props) {
  const [rating, setRating] = useState();

  const { filter, setFilter, filters } = props;
  const { selectedFilters, setSelectedFilters } = props;

  const product = useSelector((state) => state.product.productId);

  // get producr rating on render
  useEffect(() => {
    getProductRating(product)
      .then((result) => {
        setRating(result);
      });
  }, [product]);

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
      {/* rating */}
      <p>{rating}</p>

      {/* star rating */}
      <p>stars</p>

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
