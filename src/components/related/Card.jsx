/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';
import Stars from '../shared/Stars.jsx';
import Table from './Table.jsx';
import { changeProduct, addProduct } from '../../store/productReducer.js';
import getProduct from '../shared/productAPI.js';
import ImageCarousel from './ImageCarousel.jsx';

const CardContainer = styled.div`
  background: ${({ theme }) => theme.fg};
  position: relative;
  overflow: hidden;
  width: 200px;
  min-width: 200px;
  height: 400px;
  margin: 30px;
  transition: all 0.2s ease-out;
  transform: translateX(${(props) => props.offset * -250}px);
  border-radius: 10px;
  box-shadow:
    0 0 0 5px ${({ theme }) => theme.highlight},
    0 0 0 9px ${({ theme }) => theme.color},
    0 15px 0 9px ${({ theme }) => theme.color};

  &:hover {
    transform: translate(${(props) => (props.offset * -250) + 5}px, 5px);
    cursor: pointer;
  }
`;

const Img = styled.img`
  height: 300px;
  width: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Button = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`;

export default function Card({
  id, offset, icon, remove, setOffset,
}) {
  const [product, setProduct] = useState({});

  const { visible, toggle } = useModal();

  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // get product info based on the id prop
  useEffect(() => {
    // only send API call if Card is on the screen and not cached
    if (products[id] !== undefined) {
      setProduct(products[id]);
    } else if (inView) {
      getProduct(id).then((res) => {
        setProduct(res);
        dispatch(addProduct(res));
      });
    }
  }, [inView]);

  const handleClick = () => {
    // show modal
    if (icon === '☆') {
      toggle();
      return;
    }
    // remove item from outfit
    remove(id);
  };

  return (
    <CardContainer offset={offset} ref={ref}>
      <Button type="button" onClick={handleClick}>{icon}</Button>
      <div
        onClick={() => {
          // Only change if modal isn't visible
          if (!visible) {
            // scroll user to top of the page
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });

            // change the product id
            dispatch(changeProduct(id));

            // reset cards to their default position
            setOffset(0);
          }
        }}
        onKeyDown={() => {
          if (!visible) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
            dispatch(changeProduct(id));
            setOffset(0);
          }
        }}
        role="button"
        tabIndex="0"
      >
        <Modal visible={visible} toggle={toggle}>
          <Table target={product} />
        </Modal>
        <ImageCarousel images={product.styles ? product.styles[0].photos : [{ thumbnail_url: 'https://media.tenor.com/2roX3uxz_68AAAAM/cat-space.gif' }]} />
        <p>{product.category}</p>
        <h5>{product.name}</h5>
        {product.styles && (product.styles[0].sale_price === null ? (
          <p>
            $
            {product.default_price}
          </p>
        ) : (
          <p>
            <del style={{ color: 'red' }}>
              $
              {product.default_price}
            </del>
            {' '}
            $
            {product.styles[0].sale_price}
          </p>
        ))}
        <Stars rating={product.average_rating} />
      </div>
    </CardContainer>
  );
}
