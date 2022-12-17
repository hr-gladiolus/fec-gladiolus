/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SingleRating from './SingleRating.jsx';
import Stars from '../../shared/Stars.jsx';
import CurrentFilters from './CurrentFilters.jsx';

const Ratings = styled.div`
  display: flex;
`;

const Rating = styled.div`
  font-size: 40px;
  padding-right: 10px;
`;

const RemoveFilters = styled.div`
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  padding: 3px;
  width: auto;
  text-align: center;
  border: 1px solid black;
  margin: 8px 0 4px 0;
  &:hover {
    border: 2px solid black;
  }
  &:active {
    border: 2px solid gold;
  }
`;

const RatingsContainer = styled.div`
`;

const Percentage = styled.div`
  height: auto;
  width: 300px;
`;

function FilterRatings(props) {
  const [rating, setRating] = useState();

  // const { filter, setFilter, filters } = props;
  const { filter, setFilter } = props;
  const { selectedFilters, setSelectedFilters } = props;

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

  // const currentFilters = () => (
  //   <div>
  //     <p data-testid="filters">Current Filters</p>
  //     {selectedFilters['5'] && <p>5 stars</p>}
  //     {selectedFilters['4'] && <p>4 stars</p>}
  //     {selectedFilters['3'] && <p>3 stars</p>}
  //     {selectedFilters['2'] && <p>2 stars</p>}
  //     {selectedFilters['1'] && <p>1 stars</p>}
  //   </div>
  // );

  const removeFilterButton = () => (
    <div>
      <RemoveFilters
        type="button"
        onClick={
          () => {
            setFilter(false);
            setSelectedFilters([]);
          }
        }
      >
        Remove All Filters
      </RemoveFilters>
    </div>
  );

  return (
    <div>

      <Ratings>
        <Rating>{data.average_rating_tenth}</Rating>

        <Stars rating={data.average_rating} />
      </Ratings>

      {filter === true
      && selectedFilters.length > 0
      && (
        <CurrentFilters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      )}

      {/* {filter === true && Object.values(selectedFilters).
      includes(true) && <CurrentFilters selectedFilters=
        {selectedFilters} setSelectedFilters={setSelectedFilters} />} */}

      {filter === true && selectedFilters.length > 0 && removeFilterButton()}

      <RatingsContainer>
        {['5', '4', '3', '2', '1'].map((number) => <SingleRating selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} setFilter={setFilter} number={number} key={number} />)}
      </RatingsContainer>

      <Percentage>
        {data.percentage}
        % of reviews recommend this product
      </Percentage>
    </div>
  );
}

export default FilterRatings;
