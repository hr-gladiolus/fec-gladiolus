import React, { useEffect } from 'react';
import styled from 'styled-components';

function SelectSize({
  Select,
  skus,
  handleChange,
  handleSize,
}) {
  return (
    <div>
      <Select onChange={handleChange}>
        <option>Select size</option>
        <option>size 1</option>
        <option>size 2</option>
        <option>size 3</option>
      </Select>
    </div>
  );
}

export default SelectSize;
