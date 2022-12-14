import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import getRelated from './api.js';
import Card from './Card.jsx';
import getProduct from '../shared/productAPI.js';
import { addToOutfit, removeFromOutfit } from '../../store/productReducer.js';

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
  min-width: 200px;
  height: 400px;
  border: 1px solid black;
  margin: 30px;
  transition: all 0.2s ease-out;
  transform: translateX(${(props) => props.offset}px);
`;

export default function RelatedList() {
  const [related, setRelated] = useState([]);
  const [relatedOffset, setRelatedOffset] = useState(0);
  const [outfitOffset, setOutfitOffset] = useState(0);

  const id = useSelector((state) => state.product.productId);
  const outfit = useSelector((state) => state.product.outfit);
  const dispatch = useDispatch();

  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    // get related products for a random product
    if (inView) {
      // only send API call if related list is on screen
      getRelated(id).then((res) => setRelated(res));
    }
  }, [inView, id]);

  // carousel nav handlers
  const relatedNav = (inc) => {
    if (relatedOffset > 0 && inc === -1) {
      setRelatedOffset(relatedOffset - 1);
    } else if (relatedOffset <= related.length - 4 && inc === 1) {
      setRelatedOffset(relatedOffset + 1);
    }
  };

  const outfitNav = (inc) => {
    if (outfitOffset > 0 && inc === -1) {
      setOutfitOffset(outfitOffset - 1);
    } else if (outfitOffset <= outfit.length - 4 && inc === 1) {
      setOutfitOffset(outfitOffset + 1);
    }
  };

  const removeItem = (target) => {
    dispatch(removeFromOutfit(target));
  };

  return (
    <>
      <div className="related" ref={ref}>
        <h1>Related Items:</h1>
        <ListContainer>
          {related.map((product) => (
            <Card key={product} id={product} offset={relatedOffset} setOffset={setRelatedOffset} icon="☆" />
          ))}
          {relatedOffset > 0 && <CarouselNav type="button" onClick={() => relatedNav(-1)} left>&lt;</CarouselNav>}
          {relatedOffset <= related.length - 5 && <CarouselNav type="button" onClick={() => relatedNav(1)}>&gt;</CarouselNav>}
        </ListContainer>
      </div>
      <div className="outfit">
        <h1>Your Outfit:</h1>
        <ListContainer>
          <AddOutfit
            type="button"
            onClick={() => {
              dispatch(addToOutfit());
            }}
            offset={outfitOffset * -250}
            data-testid="add-outfit"
            id="addOutfit"
          >
            Add to Outfit
          </AddOutfit>
          {outfit.map((product) => (
            <Card key={product} id={product} offset={outfitOffset} setOffset={setOutfitOffset} icon="✖" remove={removeItem} />
          ))}
          {outfitOffset > 0 && <CarouselNav type="button" onClick={() => outfitNav(-1)} left>&lt;</CarouselNav>}
          {outfitOffset <= outfit.length - 5 && <CarouselNav type="button" onClick={() => outfitNav(1)}>&gt;</CarouselNav>}
        </ListContainer>
      </div>
    </>
  );
}
