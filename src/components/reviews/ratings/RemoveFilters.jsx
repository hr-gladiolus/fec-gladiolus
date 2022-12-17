import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const RemoveFiltersButton = styled.div`
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  padding: 3px;
  width: auto;
  text-align: center;
  border: 2px solid black;
  margin: 8px 0 4px 0;
  &:hover {
    border: 3px solid black;
  }
  &:active {
    border: 3px solid gold;
  }
`;

function RemoveFilters(props) {
  const { setFilter, setSelectedFilters } = props;

  return (
    <div>
      <RemoveFiltersButton
        onClick={
          () => {
            setFilter(false);
            setSelectedFilters([]);
          }
        }
      >
        Remove All Filters
      </RemoveFiltersButton>
    </div>
  );
}

export default RemoveFilters;
