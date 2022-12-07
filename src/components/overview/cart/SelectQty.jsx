import React, { useEffect } from 'react';
import styled from 'styled-components';

function SelectQty({
  Select,
  skus,
  handleChange,
  handleQty,
}) {
  return (
    <div>
      <Select onChange={handleChange}>
        <option>Select quantity</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    </div>
  );
}

export default SelectQty;
