/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 90%;
  height: 70%;
  background: #ffe3b9;
  color: ${({ theme }) => theme.color};
  padding: 7px;
  cursor: pointer;
  font-size: 14px;
  border: 2px solid border: 2px solid ${({ theme }) => theme.header};
  margin: 20px;
  box-shadow: 2px 2px 4px ${({ theme }) => theme.highlight};

  option {
    color: black;
    background: #ffe3b9;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

function SelectQty({
  currentSKU,
  handleQty,
  range,
}) {
  return (
    <div data-testid="quantity">
      <Select onChange={handleQty}>
        {currentSKU[1].quantity === -1 && (
          <option>Select Quantity</option>
        )}
        {currentSKU[1].quantity === 0 && (
          <option>OUT OF STOCK</option>
        )}
        {currentSKU[1].quantity > 0 && (
          range(currentSKU[1].quantity, 15).map((qty, i) => (
            <option key={i + 1}>{qty + 1}</option>
          ))
        )}
      </Select>
    </div>
  );
}

export default SelectQty;
