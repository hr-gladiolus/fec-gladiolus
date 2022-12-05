import React, { useState, useEffect } from 'react';
import getProductCard from './api.js';

export default function Card({ id }) {
  useEffect(() => {
    getProductCard(id).then((res) => {
      console.log('CARD DATA: ', res);
    }).catch((err) => console.error(err));
  }, []);
  return (
    <h1>CARD</h1>
  );
}
