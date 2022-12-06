import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRelated } from './api.js';
import Card from './Card.jsx';

const ListContainer = styled.div`
  display: inline-flex;
  overflow: hidden;
  gap: 10px;
`;

export default function RelatedList() {
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    // get related products for a random product
    getRelated(37311).then((res) => setRelated(res));
  }, []);

  return (
    <>
      <div className="related">
        <h1>Related Items:</h1>
        <ListContainer>
          {related.map((product) => <Card key={product} id={product} />)}
        </ListContainer>
      </div>
      <div className="outfit">
        <h1>Your Outfit:</h1>
        <ListContainer>
          {outfit.map((product) => <Card key={product} id={product} />)}
        </ListContainer>
      </div>
    </>
  );
}
