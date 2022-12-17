import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const FilterButtonsContainer = styled.div``;

const FilterButton = styled.div``;

function CurrentFilters(props) {
  const { selectedFilters, setSelectedFilters } = props;

  return (
    <FilterButtonsContainer>
      {selectedFilters.map((number) => <FilterButton key={number}>{`${number} stars`}</FilterButton>)}
    </FilterButtonsContainer>
  );
}

export default CurrentFilters;
