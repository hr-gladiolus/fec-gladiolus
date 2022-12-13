/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  border-radius: 4px;
  margin: 0 auto;
  max-height: 110%;
  max-width: 100%;
  cursor: pointer;
  object-fit: cover;
`;

function Magnifier({
  src,
  magHeight = 125,
  magWidth = 125,
  zoomLevel = 1.5,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Img
        src={src}
        onMouseEnter={(e) => {
          const { width, height } = e.currentTarget.getBoundingClientRect();
          setSize([width, height]);
          setIsVisible(true);
        }}
        onMouseMove={(e) => {
          const { top, left } = e.currentTarget.getBoundingClientRect();
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={(e) => {
          setIsVisible(false);
        }}
        alt=""
      />
      <div
        style={{
          display: isVisible ? '' : 'none',
          pointerEvents: 'none',
          position: 'absolute',
          border: '3px solid white',
          background: `url('${src}') no-repeat white`,
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          width: `${magWidth}px`,
          height: `${magHeight}px`,
          top: `${y - magHeight / 2}px`,
          left: `${x - magWidth / 2}px`,
          opacity: '1',
          backgroundPositionX: `${-x * zoomLevel + magWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magHeight / 2}px`,
        }}
      />
    </div>
  );
}

export default Magnifier;
