/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getReviews } from '../helpers/productAPI.js';

const Div = styled.div`
  border: 1px solid gray;
  background: linear-gradient(0deg, #eed8b8, #ffc9b3);
  padding: 24px 30px 20px 30px;
  box-shadow: 3px 3px 7px #531a007d;
  margin: 30px 10px 20px 10px;
  max-width: 600px;
`;

function Details(
  {
    ratings,
    id,
    category,
    name,
    price,
    sale,
  },
) {
  const [numOfReviews, setNumOfReviews] = useState(0);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    getReviews(id)
      .then((results) => {
        const arr = Object.values(results.ratings);
        const total = arr.reduce((acc, val) => Number(acc) + Number(val), 0);
        setNumOfReviews(total);
      })
      .catch((err) => {
        Error('Error in Details getReviews', err);
      });
  });

  return (
    <Div>
      {numOfReviews >= 0 && (
        <div>
          <h5 style={{ float: 'right', marginTop: '3px' }}>
            <a href="#readReviews" style={{ fontSize: '12px', color: '#002346' }}>
              {`Read All ${numOfReviews} Reviews`}
            </a>
          </h5>
          <h5 style={{ marginTop: '3px', fontSize: '12px', color: '#002346' }}>Add star ratings here!</h5>
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
      {parseInt(sale, 10) === 0 && (
        <h4>{`$${price}`}</h4>
      )}
    </Div>
  );
}

export default Details;
