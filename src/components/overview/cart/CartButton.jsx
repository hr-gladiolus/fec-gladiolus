import React, { useEffect } from 'react';
import styled from 'styled-components';

function CartButton({ Button, handleSubmit, handleSize }) {
  return (
    <div>
      {handleSize().length > 0 && (
        <Button
          onClick={handleSubmit}
          style={{
            width: '90%',
            height: '60%',
          }}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
}

export default CartButton;
