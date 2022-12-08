/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getProductRating, getRatings } from './api.js';

const Row = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;

  &:after {
  content: "";
  display: table;
  clear: both;
  }
`;

const Button = styled.button`
  float: left;
  width: 15%;
  margin-top:10px;
  background-color: inherit;
  font-size: 12px;
  border: none;
  padding: 20px;
  &:hover {
    color: #982929;
  }
  &:active {
    color: #4e0881;
  }
`;

// div that holds bars
const Middle = styled.div`
  margin-top:10px;
  float: left;
  width: 70%;
`;

// number of ratings on far right
const Right = styled.div`
  text-align: right;
`;

// grey bar background
const BottomBar = styled.div`
  width: 100%;
  background-color: #858080;
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

  const [allRatings, setAllRatings] = useState();
  const [numberOfRatings, setNumberOfRatings] = useState(0);

  const product = useSelector((state) => state.product.productId);

  useEffect(() => {
    getRatings(product)
      .then((result) => {
        setNumberOfRatings(result.number);
        setAllRatings(result.ratings);
      });
  }, [product]);

  const handleClick = (currentNumber) => {
    setSelectedFilters({
      ...selectedFilters,
      [currentNumber]: !selectedFilters[currentNumber],
    });
    setFilter(true);
  };

  return (
    <Row>
      <Button
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          handleClick(number);
        }}
      >
        {number === 'five' ? <u>5 stars</u> : null}
        {number === 'four' ? <u>4 stars</u> : null}
        {number === 'three' ? <u>3 stars</u> : null}
        {number === 'two' ? <u>2 stars</u> : null}
        {number === 'one' ? <u>1 star</u> : null}
      </Button>
      <Middle>
        <BottomBar>
          {/* sets width based on number of current star rating diviced by total # of ratings */}
          <TopBar width={allRatings ? (allRatings[number] / numberOfRatings) * 100 : 0} />
        </BottomBar>
      </Middle>
      <Right>{allRatings ? allRatings[number] : null}</Right>
    </Row>
  );
}

export default SingleRating;
