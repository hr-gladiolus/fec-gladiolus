/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import styled from 'styled-components';

function SelectQty({
  Select,
  currentSKU,
  handleQty,
  range,
}) {
  return (
    <div>
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
