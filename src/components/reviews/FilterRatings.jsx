import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getProductRating, getRatings } from './api.js';

// clears floats after column
const Row = styled.div`
  width: 100px;
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
  padding: 10px;
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

const BottomBar = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
`;

const Five = styled.div`
  width: ${(props) => props.width || 0};
  height: 18px;
  background-color: #04AA6D;
`;

function FilterRatings(props) {
  const [rating, setRating] = useState();
  const [width, setWidth] = useState({});
  const [five, setFive] = useState(0);
  const [numberRatings, setNumberRatings] = useState(0);

  const { filter, setFilter } = props;
  const { selectedFilters, setSelectedFilters } = props;
  const { filters } = props;

  const product = useSelector((state) => state.product.productId);

  useEffect(() => {
    getProductRating(product)
      .then((result) => {
        setRating(result);
      });
  }, []);

  useEffect(() => {
    getRatings(product)
      .then((result) => {
        setNumberRatings(result.number);
        setWidth(result.ratings);
      });
  }, []);

  // set clicked rating in selected filters to true
  // passes filters to parent, to pass to reviews list
  const handleClick = (number) => {
    setSelectedFilters({
      ...selectedFilters,
      [number]: !selectedFilters.number,
    });
    setFilter(true);
  };

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

      {/* remove all filters button */}
      {filter === true ? removeFilterButton() : null}

      {/* filters */}
      <Row>
        <Button
          width={width.five}
          type="button"
          name="five"
          onClick={
            (evt) => {
              evt.preventDefault();
              handleClick('five');
            }
          }
        >
          <u>5 stars</u>
        </Button>
        <Middle>
          <BottomBar>
            <Five />
          </BottomBar>
        </Middle>
      </Row>

      {/* percentage of reviews that recommend */}
    </div>
  );
}

export default FilterRatings;
