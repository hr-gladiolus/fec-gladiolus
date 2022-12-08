/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

const Right = styled.div`
  text-align: right;
`;

const BottomBar = styled.div`
  width: 100%;
  background-color: #858080;
  text-align: center;
  color: white;
`;

const Five = styled.div`
  width: ${(props) => props.width}%;
  height: 18px;
  background-color: #04AA6D;
`;

function SingleRating(props) {
  const { number } = props;

  const handleClick = (currentNumber) => {
    console.log(props);
    setSelectedFilters({
      ...selectedFilters,
      [currentNumber]: !selectedFilters.currentNumber,
    });
    setFilter(true);
  };

  return (
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
      {number === 'one' ? <u>1 stars</u> : null}
    </Button>
  );
}

export default SingleRating;
