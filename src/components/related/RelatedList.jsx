import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getRelated } from './api.js';
import Card from './Card.jsx';

const ListContainer = styled.div`
  display: inline-flex;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
  gap: 10px;
`;

export default function RelatedList() {
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);

  const id = useSelector((state) => state.product.productId);

  useEffect(() => {
    // get related products for a random product
    getRelated(id).then((res) => setRelated(res));
  }, [id]);

  return (
    <>
      <div className="related">
        <h1>Related Items:</h1>
        <ListContainer>
          {related.map((product) => <Card key={product} id={product} parent={id} />)}
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
