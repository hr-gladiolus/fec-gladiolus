import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProductCard } from './api.js';

// center table within modal
const TableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Table({ currentId, target }) {
  const [current, setCurrent] = useState({});
  const [features, setFeatures] = useState({});

  // can be refactored later, this data should be stored somewhere already...
  useEffect(() => {
    const obj = {};
    getProductCard(currentId).then((product) => {
      // GET data for current item, push characteristics into obj
      product.features.forEach((f) => {
        if (obj[f.feature] === undefined) obj[f.feature] = ['', ''];
        obj[f.feature][0] = f.value === null ? '✓' : f.value;
      });
      setCurrent(product);
    }).then(() => {
      // push target characteristics into obj
      target.features.forEach((f) => {
        if (obj[f.feature] === undefined) obj[f.feature] = ['', ''];
        obj[f.feature][1] = f.value === null ? '✓' : f.value;
      });
      setFeatures(obj);
    });
  }, []);

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>{current.name}</th>
            <th>Characteristics</th>
            <th>{target.name}</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(features).map((feature) => (
            <tr key={feature}>
              <td>{features[feature][0]}</td>
              <td>{feature}</td>
              <td>{features[feature][1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
