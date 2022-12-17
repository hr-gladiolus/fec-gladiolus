/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SingleRating from './SingleRating.jsx';
import Stars from '../../shared/Stars.jsx';
import CurrentFilters from './CurrentFilters.jsx';
import RemoveFilters from './RemoveFilters.jsx';

const Ratings = styled.div`
  display: flex;
`;

const Rating = styled.div`
  font-size: 40px;
  padding-right: 10px;
`;

const FilterButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RatingsContainer = styled.div`
`;

const Percentage = styled.div`
  height: auto;
  width: 300px;
`;

function FilterRatings(props) {
  const [rating, setRating] = useState();

  const { filter, setFilter } = props;
  const { selectedFilters, setSelectedFilters } = props;

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

  // useEffect(() => (
  //   <FilterButtonsContainer>
  //     {selectedFilters.length > 0
  //       && selectedFilters.map((number) => (
  //         <CurrentFilters
  //           selectedFilters={selectedFilters}
  //           setSelectedFilters={setSelectedFilters}
  //           key={number}
  //           number={number}
  //         />
  //       ))}
  //   </FilterButtonsContainer>
  // ), [selectedFilters]);

  return (
    <div>

      <Ratings>
        <Rating>{data.average_rating_tenth}</Rating>

        <Stars rating={data.average_rating} />
      </Ratings>

      {selectedFilters.length > 0
        && <RemoveFilters setFilter={setFilter} setSelectedFilters={setSelectedFilters} />}

      <FilterButtonsContainer>
        {selectedFilters.length > 0
        && selectedFilters.map((number) => (
          <CurrentFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            key={number}
            number={number}
          />
        ))}
      </FilterButtonsContainer>

      <RatingsContainer>
        {[5, 4, 3, 2, 1].map((number) => (
          <SingleRating
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            setFilter={setFilter}
            number={number}
            key={number}
          />
        ))}
      </RatingsContainer>

      <Percentage>{`${data.percentage} % of reviews recommend this product`}</Percentage>
    </div>
  );
}

export default FilterRatings;
