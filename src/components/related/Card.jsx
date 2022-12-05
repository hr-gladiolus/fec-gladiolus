import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProductCard } from './api.js';

const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 400px;
  border: 1px solid black;
  margin: 10px;
`;

const Img = styled.img`
  height: 300px;
  width: 200px;
  object-fit: cover;
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default function Card({ id }) {
  const [product, setProduct] = useState({});

  // get product info based on the id prop
  useEffect(() => {
    getProductCard(id).then((res) => setProduct(res));
  }, []);

  return (
    <CardContainer>
      {/* temp placeholder image :) */}
      <Img src={product.image ? product.image : 'https://media.istockphoto.com/id/1281804798/photo/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-sunglasses-is-isolated-on.jpg?b=1&s=170667a&w=0&k=20&c=4CLWHzcFeku9olx0np2htie2cOdxWamO-6lJc-Co8Vc='} alt="" />

      {/* functionality will be determined by which list the card is in */}
      <Button type="button">?</Button>
      <h4>{product.category}</h4>
      <h3>{product.name}</h3>
      <p>
        $
        {product.price}
      </p>
      <p>
        {product.rating}
        {' '}
        stars
      </p>
    </CardContainer>
  );
}
