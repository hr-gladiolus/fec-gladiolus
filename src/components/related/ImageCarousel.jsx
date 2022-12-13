import React, { useState } from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  height: 300px;
  width: 200px;
  background: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover > div {
    display: inline-flex;
  }
`;

const Carousel = styled.div`
  display: none;
  margin: 0 20px;
  position: absolute;
  bottom: 0px;
  width: 160px;
  min-width: 160px;
`;

const Nav = styled.button`
  position: absolute;
  bottom: 10px;
  left: ${(props) => (props.left ? -20 : 160)}px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;

const Img = styled.img`
  width: 40px;
  min-width: 40px;
  height: 40px;
  object-fit: cover;
  transition: all 0.1s ease-out;
  transform: translateX(${({ offset }) => -40 * offset}px);
  cursor: pointer;
`;

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  return (
    <ImgContainer data-testid="image-carousel" bg={images[index].thumbnail_url || 'https://media.tenor.com/2roX3uxz_68AAAAM/cat-space.gif'}>
      {images.length > 1
      && (
        <Carousel>
          <Nav
            left
            onClick={(e) => {
              e.stopPropagation();
              if (offset > 0) {
                setOffset(offset - 1);
              }
            }}
          >
            &lt;
          </Nav>
          <Nav
            onClick={(e) => {
              e.stopPropagation();
              if (offset < images.length - 4) {
                setOffset(offset + 1);
              }
            }}
          >
            &gt;
          </Nav>

          {images.map((image, i) => image.thumbnail_url
          && (
            <Img
              data-testid="carousel-image"
              key={image.thumbnail_url}
              src={image.thumbnail_url}
              offset={offset}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
            />
          ))}
        </Carousel>
      )}
    </ImgContainer>
  );
}
