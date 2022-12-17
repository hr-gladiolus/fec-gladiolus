/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FilterRatings from './ratings/FilterRatings.jsx';
import ProductFactors from './ProductFactors.jsx';
import ReviewsList from './list/ReviewsList.jsx';
import AddReview from './list/AddReview.jsx';

const ReviewWidget = styled.div`
  display: flex;
  width: 90%;
  margin-top: 40px;
`;

const LeftSide = styled.div`
  flex: 1 1 0;
  padding-left: 120px;
  padding-bottom: 80px;
`;

const RightSide = styled.div`
  flex: 2 1 0;
  padding: 20px;
  padding-bottom: 80px;
`;

const Title = styled.div`
  font-size: 15px;
  margin: 15px 0;
`;

function RatingsAndReviews() {
  const [filter, setFilter] = useState(false);
  // const filters = {
  //   5: false,
  //   4: false,
  //   3: false,
  //   2: false,
  //   1: false,
  // };
  // const [selectedFilters, setSelectedFilters] = useState(filters);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const data = useSelector((state) => state.product.productData);

  return (
    <ReviewWidget id="#readReviews">
      <LeftSide>
        <Title>Ratings & Reviews</Title>

        {/* <FilterRatings filter={filter} setFilter={setFilter} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} filters={filters} />
        <br /> */}

        <FilterRatings filter={filter} setFilter={setFilter} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
        <br />

        <ProductFactors />
      </LeftSide>

      <RightSide>
        {data.total_reviews && data.total_reviews > 0 && <ReviewsList filter={filter} selectedFilters={selectedFilters} setFilter={setFilter} />}
      </RightSide>

    </ReviewWidget>
  );
}

export default RatingsAndReviews;
