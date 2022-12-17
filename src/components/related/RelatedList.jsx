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
  margin: 10px 0px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, ${({ theme }) => theme.bg} 100%);
  }
`;

const CarouselNav = styled.button`
  background: #9e939371;
  backdrop-filter: blur(8px) contrast(80%);
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  z-index: 2;
  top: 200px;
  left: ${(props) => (props.left ? '0px' : 'calc(100% - 1.5rem)')};
  &:hover {
    background: #e2e2e266;
  }
`;

const AddOutfit = styled.button`
  width: 200px;
  min-width: 200px;
  height: 400px;
  border: 0;
  margin: 30px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  transform: translateX(${(props) => props.offset}px);
  border-radius: 10px;
  background: ${({ theme }) => theme.fg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow:
    0 0 0 5px ${({ theme }) => theme.highlight},
    0 0 0 9px ${({ theme }) => theme.color},
    0 15px 0 9px ${({ theme }) => theme.color};

  i {
    font-size: 2em;
  }

  h2 {
    text-decoration: none;
    background-image: linear-gradient(${({ theme }) => theme.highlight}, ${({ theme }) => theme.highlight});
    background-size: 0% 0.1em;
    background-position-y: 100%;
    background-position-x: 100%;
    background-repeat: no-repeat;
    transition: background-size 0.2s ease-in-out;
  }

  &:hover > h2 {
    background-size: 100% 0.1em;
    background-position-x: 0%;
  }
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
        <h1 style={{ margin: '5px 20px' }}>Related Items:</h1>
        <ListContainer>
          {related.map((product) => (
            <Card key={product} id={product} offset={relatedOffset} setOffset={setRelatedOffset} icon="☆" />
          ))}
          {relatedOffset > 0 && <CarouselNav data-testid="left" type="button" onClick={() => relatedNav(-1)} left>&#8249;</CarouselNav>}
          {relatedOffset <= related.length - 5 && <CarouselNav data-testid="right" type="button" onClick={() => relatedNav(1)}>&#8250;</CarouselNav>}
        </ListContainer>
      </div>
      <div className="outfit">
        <h1 style={{ margin: '5px 20px' }}>Your Outfit:</h1>
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
            <h2>Add to Outfit</h2>
            <i className="fa-solid fa-plus" />
          </AddOutfit>
          {outfit.map((product) => (
            <Card key={product} id={product} offset={outfitOffset} setOffset={setOutfitOffset} icon="✖" remove={removeItem} />
          ))}
          {outfitOffset > 0 && <CarouselNav type="button" onClick={() => outfitNav(-1)} left>&lt;</CarouselNav>}
          {outfitOffset <= outfit.length - 4 && <CarouselNav type="button" onClick={() => outfitNav(1)}>&gt;</CarouselNav>}
        </ListContainer>
      </div>
    </>
  );
}
