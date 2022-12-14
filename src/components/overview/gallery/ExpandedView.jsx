import React from 'react';
import styled from 'styled-components';
import Magnifier from './Magnifier.jsx';

const Div = styled.div`
  background: rgba(0,0,0,0.55);
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  margin: -200px -10px -400px -10px;
  padding-bottom: 100px;
  padding-left: 130px;
  justify-content: center;
  z-index: 600;
  backdrop-filter: blur(10px) contrast(80%);
  animation-name: custom;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-duration: 0.3s;3
`;

function ExpandedView({ unselectPhoto, photo }) {
  return (
    <Div onClick={unselectPhoto}>
      <Magnifier
        src={photo}
      />
    </Div>
  );
}

export default ExpandedView;
