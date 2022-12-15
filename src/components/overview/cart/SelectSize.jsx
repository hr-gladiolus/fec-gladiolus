/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 90%;
  height: 70%;
  background: white;
  color: #dd8156;
  padding: 7px;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid gray;
  margin: 20px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

function SelectSize({
  handleChange,
  handleSize,
}) {
  return (
    <div>
      <Select onChange={handleChange}>
        {handleSize().length > 0 ? (
          <>
            <option>Select Size</option>
            {handleSize().map((size, i) => <option key={i}>{size}</option>)}
          </>
        ) : (
          <option>OUT OF STOCK</option>
        )}
      </Select>
    </div>
  );
}

export default SelectSize;
