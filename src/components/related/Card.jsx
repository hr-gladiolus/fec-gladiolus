import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getProductCard } from './api.js';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';
import Table from './Table.jsx';
import { changeProduct } from '../../store/productReducer.js';

const CardContainer = styled.div`
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
  id, offset, icon, remove,
}) {
  const [product, setProduct] = useState({});

  const { visible, toggle } = useModal();

  const parent = useSelector((state) => state.product.productId);
  const dispatch = useDispatch();

  // get product info based on the id prop
  useEffect(() => {
    getProductCard(id).then((res) => setProduct(res));
  }, []);

  const handleClick = () => {
    if (icon === '☆') {
      toggle();
      return;
    }
    //
    remove(id);
  };

  return (
    <CardContainer offset={offset}>
      {/* temp placeholder image :) */}
      <Img src={product.image ? product.image : 'https://media.istockphoto.com/id/1281804798/photo/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-sunglasses-is-isolated-on.jpg?b=1&s=170667a&w=0&k=20&c=4CLWHzcFeku9olx0np2htie2cOdxWamO-6lJc-Co8Vc='} alt="" />

      {/* functionality will be determined by which list the card is in */}
      <Button type="button" onClick={handleClick}>{icon}</Button>
      <Modal visible={visible} toggle={toggle}>
        {/* Modal renders its children, so place content between tags */}
        <Table currentId={parent} target={product} />
      </Modal>
      <h4>{product.category}</h4>
      {/* future refactor: reset offset when button gets clicked */}
      <h3><button type="button" onClick={() => dispatch(changeProduct(id))}>{product.name}</button></h3>
      <p>
        $
        {product.price}
      </p>
      <p>
        {product.rating}
        {' '}
        stars
      </p>
    </CardContainer>
  );
}
