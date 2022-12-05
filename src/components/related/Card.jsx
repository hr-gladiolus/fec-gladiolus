import React, { useState, useEffect } from 'react';
import { getProductCard } from './api.js';

export default function Card({ id }) {
  const [product, setProduct] = useState({});

  // get product info based on the id prop
  useEffect(() => {
    getProductCard(id).then((res) => setProduct(res));
  }, []);

  return (
    <h1>CARD</h1>
  );
}
