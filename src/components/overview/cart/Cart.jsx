/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import SelectSize from './SelectSize.jsx';
import SelectQty from './SelectQty.jsx';
import CartButton from './CartButton.jsx';
import SavedButton from './SavedButton.jsx';
import { addItemToCart } from '../helpers/cartAPI.js';

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 4px;
`;

const Button = styled.button`
  background: #ffe3b9;
  border: 1px solid gray;
  margin: 10px 20px 30px 20px;
  padding: 8px;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  &:hover {
    color: #c94e1e;
  }
`;

function Cart({ skus, id }) {
  const [currentSKU, setCurrentSKU] = useState(['', { quantity: -1 }]);
  const [qty, setQty] = useState(0);
  const [cartE, setCartE] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentSKU[0]) {
      setCartE(true);
    } else {
      addItemToCart(parseInt(currentSKU[0], 10), qty)
        .then(() => {
          alert('Item added to cart!');
        })
        .catch((err) => {
          throw new Error('Error in Cart handleSubmit', err);
        });
    }
  };

  const handleChange = (e) => {
    if (e.target.value === 'Select Size' || e.target.value === 'OUT OF STOCK') {
      setCurrentSKU(['', { quantity: -1 }]);
    } else {
      setCurrentSKU(Object.entries(skus).find((item) => (
        item[1].size === e.target.value
      )));
      setCartE(false);
    }
  };

  const handleSize = () => {
    if (skus === null) return [];
    return Array.from(new Set(Object.values(skus).map((each) => each.size)));
  };

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const range = (n, m) => [...Array(Math.min(n, m)).keys()];

  const handleSaved = (e) => {
    e.preventDefault();
    document.getElementById('addOutfit').click();
  };

  return (
    <form data-testid="cart">
      <FlexDiv>
        <SelectSize
          handleChange={handleChange}
          handleSize={handleSize}
        />
        <SelectQty
          currentSKU={currentSKU}
          handleQty={handleQty}
          range={range}
        />
      </FlexDiv>
      <FlexDiv>
        <CartButton Button={Button} handleSubmit={handleSubmit} handleSize={handleSize} />
        <SavedButton Button={Button} id={id} handleSaved={handleSaved} />
      </FlexDiv>
      {
        cartE
          && (
            <div
              data-testid="size"
              style={{
                color: 'red',
                textAlign: 'center',
                padding: '8px',
              }}
            >
              Please select size!
            </div>
          )
      }
    </form>
  );
}

export default Cart;
