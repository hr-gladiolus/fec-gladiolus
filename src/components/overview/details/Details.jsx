/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Stars from '../../shared/Stars.jsx';

const Div = styled.div`
  border: 2px solid ${({ theme }) => theme.header};
  background: ${({ theme }) => theme.fg};
  padding: 24px 30px 20px 30px;
  box-shadow:
    0 0 0 5px ${({ theme }) => theme.highlight},
    0 0 0 7px ${({ theme }) => theme.color},
    0 5px 0 5px ${({ theme }) => theme.color};
  margin: 30px 10px 20px 10px;
  max-width: 600px;
`;

function Details(
  {
    ratings,
    avgRating,
    id,
    category,
    name,
    price,
    sale,
  },
) {
  const [numOfReviews, setNumOfReviews] = useState(0);

  useEffect(() => {
    const arr = Object.values(ratings);
    const total = arr.reduce((acc, val) => Number(acc) + Number(val), 0);
    setNumOfReviews(total);
  }, []);

  return (
    <Div data-testid="details">
      {numOfReviews > 0 && (
        <div>
          <h5 style={{ float: 'right', marginTop: '3px' }}>
            <a href="##readReviews" style={{ fontSize: '12px', color: '#002346' }}>
              {`Read All ${numOfReviews} Reviews`}
            </a>
          </h5>
          <Stars rating={avgRating} />
        </div>
      )}
      <h3 style={{ paddingTop: '7px' }}>{category}</h3>
      <h1 style={{ paddingBottom: '7px' }}>{name}</h1>
      {parseInt(sale, 10) > 0 && (
        <h4>
          <span style={{ textDecoration: 'line-through' }}>{`$${price}`}</span>
          <span style={{ color: 'red' }}>{` $${sale}`}</span>
        </h4>
      )}
      {sale === null && (
        <h4 data-testid="price">{`$${price}`}</h4>
      )}
    </Div>
  );
}

export default Details;
