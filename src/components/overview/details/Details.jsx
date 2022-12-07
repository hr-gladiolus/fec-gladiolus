import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  border: 1px solid gray;
  padding: 28px 32px 16px 32px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  margin: 32px 12px 24px 12px;
  max-width: 500px;
  background: linear-gradient(0deg, #ebd3af, #ffc9b3);
`;

function Details(
  {
    ratings,
    category,
    name,
    price,
    sale,
  },
) {
  const [numOfReviews, setNumOfReviews] = useState(0);
  const [avgRating, setAvgRating] = useState(0);

  const calculateRating = () => {
  };

  useEffect(() => {
    calculateRating();
  });

  return (
    <Div>
      <h5>Add avgRating and numOfReviews here!</h5>
      <h3>{category}</h3>
      <h1>{name}</h1>
      {parseInt(sale, 10) > 0 && (
        <h4>
          <b style={{ textDecoration: 'line-through' }}>{`$${price}`}</b>
          <b style={{ color: 'red' }}>{` $${sale}`}</b>
        </h4>
      )}
      {parseInt(sale, 10) === 0 && (
        <h4>{`$${price}`}</h4>
      )}
    </Div>
  );
}

export default Details;
