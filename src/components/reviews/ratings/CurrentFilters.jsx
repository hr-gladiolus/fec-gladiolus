import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const FilterButton = styled.div`
  display: inline-block;
  font-weight: bold;
  font-size: 13px;
  width: 60px;
  margin: 3px 0;
  justify-content: space-between
  &:hover {
    border: 2px solid black;
  }
  &:active {
    border: 2px solid gold;
  }
`;

function CurrentFilters(props) {
  const { selectedFilters, setSelectedFilters, number } = props;

  const handleClick = () => {
    setSelectedFilters(selectedFilters.filter((filter) => filter !== number));
  };

  return (
    <FilterButton
      onClick={(evt) => handleClick(number)}
    >
      {number === 1 ? `X ${number} star` : `X ${number} stars`}
    </FilterButton>
  );
}

export default CurrentFilters;
