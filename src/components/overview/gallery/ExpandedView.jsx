import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  border-radius: 4px;
  margin: auto;
  max-height: 110%;
  max-width: 100%;
  cursor: pointer;
  object-fit: cover;
`;

const Div = styled.div`
  background: rgba(0,0,0,0.55);
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  margin: -200px -10px -400px -10px;
  padding-bottom: 100px;
  justify-content: center;
  z-index: 600;
  backdrop-filter: blur(10px) contrast(80%);
  animation-name: custom;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-duration: 0.3s;
`;

function ExpandedView({ unselectPhoto, photo }) {
  return (
    <Div onClick={unselectPhoto}>
      <Img src={photo} alt={photo} />
    </Div>
  );
}

export default ExpandedView;
