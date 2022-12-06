import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Details({
  category,
  name,
  currentStyle,
  productId,
}) {
  if (!currentStyle) {
    return (
      <div>
        <div>
          Render styles
        </div>
        <div>
          {category}
        </div>
        <div>
          {name}
        </div>
        <div>
          Render price
        </div>
      </div>
    );
  }

  const onSale = currentStyle.sale_price !== '0';

  return (
    <div>
      {/* <div>
        <StarRating productId={productId}/>
      </div> */}
      <div>
        {category}
      </div>
      <div>
        {name}
      </div>
      {onSale ? (
        <div>
          <span>
            $
            {currentStyle.original_price}
          </span>
          <span>{' '}</span>
          <span>
            $
            {currentStyle.sale_price}
          </span>
        </div>
      ) : (
        <div>
          <span>
            $
            {currentStyle.original_price}
          </span>
        </div>
      )}
    </div>
  );
}

export default Details;
