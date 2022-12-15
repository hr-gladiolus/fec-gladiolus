/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import styled from 'styled-components';

function SelectSize({
  select,
  handleChange,
  handleSize,
}) {
  return (
    <div>
      <select onChange={handleChange}>
        {handleSize().length > 0 ? (
          <>
            <option>Select Size</option>
            {handleSize().map((size, i) => <option key={i}>{size}</option>)}
          </>
        ) : (
          <option>OUT OF STOCK</option>
        )}
      </select>
    </div>
  );
}

export default SelectSize;
