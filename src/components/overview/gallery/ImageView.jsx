import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  position: absolute;
  max-height: 550px;
  max-width: 500px;
  padding-left: 40px;
  box-shadow: 3px 3px 6px #2c2c2ccc;
  cursor: pointer;
  animation-name: custom;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;
  @keyframes custom {
    0% {
      opacity: 0.5;
      filter: blur(16px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
`;

const Div = styled.div`
  display: flex;
  width: 580px;
  height: 550px;
  margin: 30px 15px 5px 5px;
  justify-content: center;
  align-items: center;
  float: right;
`;

function ImageView({ photo, handleExpand }) {
  return (
    <Div>
      <Img
        src={photo}
        alt={photo}
        onClick={handleExpand}
      />
    </Div>
  );
}

export default ImageView;
