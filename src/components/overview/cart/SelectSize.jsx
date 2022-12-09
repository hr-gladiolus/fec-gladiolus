import React, { useEffect } from 'react';
import styled from 'styled-components';

function SelectSize({
  Select,
  handleChange,
  handleSize,
}) {
  return (
    <div>
      <Select onChange={handleChange}>
        {handleSize().length > 0 ? (
          <>
            <option>Select Size</option>
            {handleSize().map((size) => <option>{size}</option>)}
          </>
        ) : (
          <option>OUT OF STOCK</option>
        )}
      </Select>
    </div>
  );
}

export default SelectSize;
