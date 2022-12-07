import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getRelated } from './api.js';
import Card from './Card.jsx';

const ListContainer = styled.div`
  display: inline-flex;
  position: relative;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
`;

const CarouselNav = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  left: ${(props) => (props.left ? '0px' : 'calc(100% - 1.5rem)')};
`;

const AddOutfit = styled.button`
  width: 200px;
  height: 400px;
  border: 1px solid black;
  margin: 30px;
  transition: all 0.2s ease-out;
  transform: translateX(${(props) => props.offset}px);
`;

export default function RelatedList() {
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);
  const [relatedOffset, setRelatedOffset] = useState(0);
  const [outfitOffset, setOutfitOffset] = useState(0);

  const id = useSelector((state) => state.product.productId);

  useEffect(() => {
    // get related products for a random product
    getRelated(id).then((res) => setRelated(res));
  }, [id]);

  // carousel nav handlers
  const relatedNav = (inc) => {
    if (relatedOffset > 0 && inc === -1) {
      setRelatedOffset(relatedOffset - 1);
    } else if (relatedOffset <= related.length - 2 && inc === 1) {
      setRelatedOffset(relatedOffset + 1);
    }
  };

  const outfitNav = (inc) => {
    if (outfitOffset > 0 && inc === -1) {
      setOutfitOffset(outfitOffset - 1);
    } else if (outfitOffset <= outfit.length - 2 && inc === 1) {
      setOutfitOffset(outfitOffset + 1);
    }
  };

  const removeItem = (target) => {
    const newOutfit = outfit.filter((product) => product !== target);
    setOutfit(newOutfit);
  };

  return (
    <>
      <div className="related">
        <h1>Related Items:</h1>
        <ListContainer>
          {related.map((product) => (
            <Card key={product} id={product} offset={relatedOffset} icon="☆" />
          ))}
          <CarouselNav type="button" onClick={() => relatedNav(-1)} left>&lt;</CarouselNav>
          <CarouselNav type="button" onClick={() => relatedNav(1)}>&gt;</CarouselNav>
        </ListContainer>
      </div>
      <div className="outfit">
        <h1>Your Outfit:</h1>
        <ListContainer>
          <AddOutfit
            type="button"
            onClick={() => {
              if (!outfit.includes(id)) {
                setOutfit([id, ...outfit]);
              }
            }}
            offset={outfitOffset * -250}
          >
            Add to Outfit
          </AddOutfit>
          {outfit.map((product) => (
            <Card key={product} id={product} offset={outfitOffset} icon="✖" remove={removeItem} />
          ))}
          <CarouselNav type="button" onClick={() => outfitNav(-1)} left>&lt;</CarouselNav>
          <CarouselNav type="button" onClick={() => outfitNav(1)}>&gt;</CarouselNav>
        </ListContainer>
      </div>
    </>
  );
}
