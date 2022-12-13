import React, { useState } from 'react';
import styled from 'styled-components';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';

const Image = styled.img`
  width: 45px;
  height: auto;
  padding: 10px;
`;

const ModalContainer = styled.div``;

const ModalImage = styled.img``;

function SingleImage(props) {
  const { visible, toggle } = useModal();
  const { link } = props;

  return (
    <div>
      <Image src={photo} alt="" onClick={toggle} />
      <Modal visible={visible} toggle={toggle}>
        <ModalImage src={photo} alt="" />
      </Modal>
    </div>

  );
}
