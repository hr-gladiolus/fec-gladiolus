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
  }, []);

  // current filters component
  const currentFilters = () => (
    <div>
      <p>Current Filters</p>
      {selectedFilters.five ? <p>5 stars</p> : null}
      {selectedFilters.four ? <p>4 stars</p> : null}
      {selectedFilters.three ? <p>3 stars</p> : null}
      {selectedFilters.two ? <p>2 stars</p> : null}
      {selectedFilters.one ? <p>1 stars</p> : null}
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
      {filter === true ? currentFilters() : null}

      {/* remove all filters button */}
      {filter === true ? removeFilterButton() : null}

      {/* filters */}
      <div>
        {['five', 'four', 'three', 'two', 'one'].map((number) => <SingleRating selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} setFilter={setFilter} number={number} key={number} />)}
      </div>

      {/* percentage of reviews that recommend */}
    </div>
  );
}

export default FilterRatings;
