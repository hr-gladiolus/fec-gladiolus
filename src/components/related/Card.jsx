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

const CardContainer = styled.div`
  background: ${({ theme }) => theme.fg};
  position: relative;
  width: 200px;
  height: 400px;
  border: 1px solid black;
  margin: 30px;
  transition: all 0.2s ease-out;
  transform: translateX(${(props) => props.offset * -250}px);
`;

const Img = styled.img`
  height: 300px;
  width: 200px;
  object-fit: cover;
`;

const Button = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
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
    if (icon === '☆') {
      toggle();
      return;
    }
    remove(id);
  };

  return (
    <CardContainer offset={offset} ref={ref}>
      {/* temp placeholder image :) */}
      <Img src={product.styles ? product.styles[0].photos[0].thumbnail_url : 'https://media.istockphoto.com/id/1281804798/photo/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-sunglasses-is-isolated-on.jpg?b=1&s=170667a&w=0&k=20&c=4CLWHzcFeku9olx0np2htie2cOdxWamO-6lJc-Co8Vc='} alt="" />
      {/* functionality will be determined by which list the card is in */}
      <Button type="button" onClick={handleClick}>{icon}</Button>

      {/* Only change if modal isn't visible */}
      <div
        onClick={() => {
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
            dispatch(changeProduct(id));
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
            setOffset(0);
          }
        }}
        role="button"
        tabIndex="0"
      >
        <Modal visible={visible} toggle={toggle}>
          {/* Modal renders its children, so place content between tags */}
          <Table target={product} />
        </Modal>
        <h4>{product.category}</h4>
        {/* future refactor: reset offset when button gets clicked */}
        <h3>{product.name}</h3>

        {product.styles && (product.styles[0].sale_price === null ? <p>{product.default_price}</p> : (
          <p>
            <del>
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
