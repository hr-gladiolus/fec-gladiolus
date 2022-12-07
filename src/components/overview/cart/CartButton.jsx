import React, { useEffect } from 'react';
import styled from 'styled-components';

function CartButton({ Button, handleSubmit }) {
  return (
    <div>
      <Button onClick={handleSubmit}>
        Add to Cart
      </Button>
    </div>
  );
}

export default CartButton;
