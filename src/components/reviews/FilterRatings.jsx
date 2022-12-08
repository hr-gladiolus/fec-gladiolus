/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getProductRating, getRatings } from './api.js';
import SingleRating from './SingleRating.jsx';

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

// const Button = styled.button`
//   float: left;
//   width: 15%;
//   margin-top:10px;
//   background-color: inherit;
//   font-size: 12px;
//   border: none;
//   padding: 10px;
//   &:hover {
//     color: #982929;
//   }
//   &:active {
//     color: #4e0881;
//   }
// `;

// // div that holds bars
// const Middle = styled.div`
//   margin-top:10px;
//   float: left;
//   width: 70%;
// `;

// const Right = styled.div`
//   text-align: right;
// `;

// const BottomBar = styled.div`
//   width: 100%;
//   background-color: #858080;
//   text-align: center;
//   color: white;
// `;

// const Five = styled.div`
//   width: ${(props) => props.width}%;
//   height: 18px;
//   background-color: #04AA6D;
// `;

function FilterRatings(props) {
  const [rating, setRating] = useState();
  const [allRatings, setAllRatings] = useState();
  const [numberOfRatings, setNumberOfRatings] = useState(0);

  const { filter, setFilter, filters } = props;
  const { selectedFilters, setSelectedFilters } = props;

  const product = useSelector((state) => state.product.productId);

  useEffect(() => {
    getProductRating(product)
      .then((result) => {
        setRating(result);
      });
    getRatings(product)
      .then((result) => {
        setNumberOfRatings(result.number);
        setAllRatings(result.ratings);
      });
  }, []);

  // set clicked rating in selected filters to true
  // passes filters to parent, to pass to reviews list
  // const handleClick = (number) => {
  //   setSelectedFilters({
  //     ...selectedFilters,
  //     [number]: !selectedFilters.number,
  //   });
  //   setFilter(true);
  // };

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

  const childProps = {
    allRatings,
    numberOfRatings,
    selectedFilters,
    setSelectedFilters,
  };

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
      <Row>
        {['five', 'four', 'three', 'two', 'one'].map((number) => <SingleRating {...childProps} number={number} key={number} />)}
      </Row>
      {/* <Row>
        <Button
          type="button"
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
            <Five width={allRatings ? (allRatings.five / numberOfRatings) * 100 : 0} />
          </BottomBar>
        </Middle>
        <Right>{allRatings ? allRatings.five : null}</Right>
      </Row> */}

      {/* percentage of reviews that recommend */}
    </div>
  );
}

export default FilterRatings;
