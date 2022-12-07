import React, { useEffect } from 'react';
import styled from 'styled-components';
import SelectSize from './SelectSize.jsx';
import SelectQty from './SelectQty.jsx';
import CartButton from './CartButton.jsx';
import SavedButton from './SavedButton.jsx';

const Button = styled.button`
  background: #ffe3b9;
  border: 1px solid gray;
  margin: 5px 12px 24px 12px;
  padding: 7px;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  &:hover {
    color: #c94e1e;
  }
`;

const Select = styled.select`
  width: 10%;
  height: 35px;
  background: white;
  color: #dd8156;
  padding: 7px;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid gray;
  margin: 10px;
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

function Cart({ skus, id }) {
  const handleSubmit = () => {
  };

  const handleSaved = () => {
  };

  const handleChange = () => {
  };

  const handleSize = () => {
  };

  const handleQty = () => {
  };

  return (
    <div>
      <div>
        <SelectSize
          Select={Select}
          skus={skus}
          handleChange={handleChange}
          handleSize={handleSize}
        />
        <SelectQty
          Select={Select}
          skus={skus}
          andleChange={handleChange}
          handleQty={handleQty}
        />
      </div>
      <div>
        <CartButton Button={Button} handleSubmit={handleSubmit} />
        <SavedButton Button={Button} id={id} handleSaved={handleSaved} />
      </div>
    </div>
  );
}

export default Cart;
