import React, { useState } from 'react';
import styled from 'styled-components';
import useModal from '../../shared/useModal.js';
import Modal from '../../shared/Modal.jsx';

const SingleImageContainer = styled.div``;

const Image = styled.img`
  width: 45px;
  height: auto;
  padding: 10px;
`;

const ModalContainer = styled.div`
`;

const ModalImage = styled.img`
  max-width: 300px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

function SingleImage(props) {
  const { visible, toggle } = useModal();
  const { url } = props;

  return (

    <SingleImageContainer>
      <Image src={url} alt="" onClick={toggle} />
      <Modal visible={visible} toggle={toggle}>
        <ModalImage src={url} alt="" />
      </Modal>
    </SingleImageContainer>
  );
}

export default SingleImage;
