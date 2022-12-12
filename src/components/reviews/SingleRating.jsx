/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getProductRating, getRatings } from './api.js';

const Row = styled.button`
  width: 100px;
  display: flex;
  flex-direction: row;
  background: transparent;
  border: none;

  &:after {
  content: "";
  display: table;
  clear: both;
  }
  &:hover {
    background-color: #f5a4a4;
  }
  &:active {
    color: #4e0881;
  }
`;

const StarRating = styled.div`
  float: left;
  width: 15%;
  margin-top:10px;
  font-size: 12px;
  border: none;
  padding: 20px;
`;

// div that holds bars
const Middle = styled.div`
  margin-top:10px;
  float: left;
  width: 70%;
`;

// number of ratings on far right
const Right = styled.div`

`;

// grey bar background
const BottomBar = styled.div`
  width: 100%;
  background-color: #717171;
  text-align: center;
  color: white;
`;

// green bar on top - width dependent on number of reviews
const TopBar = styled.div`
  width: ${(props) => props.width}%;
  height: 18px;
  background-color: #04AA6D;
`;

function SingleRating(props) {
  const {
    number, selectedFilters, setSelectedFilters, setFilter,
  } = props;

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

  const handleClick = (currentNumber) => {
    setSelectedFilters({
      ...selectedFilters,
      [currentNumber]: !selectedFilters[currentNumber],
    });
    setFilter(true);
  };

  return (
    <div>
      <Row onClick={(evt) => handleClick(number)}>
        <StarRating>
          {number === '1' ? <u>1 star</u> : (
            <u>
              {number}
              {' '}
              stars
            </u>
          )}
        </StarRating>

        <Middle>
          <BottomBar>
            <TopBar width={data.ratings ? (data.ratings[number] / data.total_reviews) * 100 : 0} />
          </BottomBar>
        </Middle>

        <Right>{data.ratings ? data.ratings[number] : null}</Right>
      </Row>
    </div>

  );
}

export default SingleRating;
