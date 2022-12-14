import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageView from './ImageView.jsx';

const Button = styled.div`
  background: #9e93933e;
  backdrop-filter: blur(8px) contrast(80%);
  border-radius: 60%;
  padding: 10px 15px 10px 15px;
  cursor: pointer;
  position: relative;
  float: right;
  z-index: 30;
  &:hover {
    background: #e2e2e266;
  }
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  margin: 6px;
  box-shadow: 3px 3px 6px #831a007f;
  transition-duration: 0.2s;
  cursor: pointer;
  object-fit: cover;
  &:hover {
    margin: 3px;
    height: 70px;
    width: 68px;
  }
`;

const FlexDiv = styled.div`
  background: #ffffff19;
  border: 1px solid lightgray;
  width: 80px;
  height: 500px;
  margin: 66px 12px 12px -30px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  overflow-x: hidden;
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  float: left;
  z-index: 20;
  backdrop-filter: blur(16px);
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

function Gallery({ photos, selectPhoto }) {
  const [currentPhoto, setCurrentPhoto] = useState(photos[0]);

  const handleClick = (val) => {
    setCurrentPhoto(
      photos.find((item) => item.url === val),
    );
  };

  const handleExpand = () => {
    selectPhoto(currentPhoto.url);
  };

  const togglePhoto = (v) => {
    setCurrentPhoto(
      photos[(
        photos.indexOf(currentPhoto) + v + photos.length
      ) % photos.length
      ],
    );
  };

  const arrow = (val) => {
    if (val === 'right') {
      return currentPhoto.url !== photos[photos.length - 1].url;
    }
    if (val === 'left') {
      return currentPhoto.url !== photos[0].url;
    }
    return false;
  };

  // https://javascript.info/onload-onerror#other-resources
  useEffect(() => {
    const promises = photos.map((photo) => (
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = photo.url;
        img.onload = resolve();
        img.onerror = reject();
      })
    ));
    Promise.all(promises);
  }, []);

  return (
    <div>
      {arrow('left') && (
        <Button
          style={{ margin: '280px 500px -60px -540px' }}
          onClick={() => togglePhoto(-1)}
        >
          &#8249;
        </Button>
      )}
      {arrow('right') && (
        <Button
          style={{ margin: '280px 35px -600px -80px' }}
          onClick={() => togglePhoto(1)}
        >
          &#8250;
        </Button>
      )}
      <ImageView
        handleExpand={handleExpand}
        photo={currentPhoto.url}
      />
      <FlexDiv>
        {photos.map((photo) => (
          <Img
            key={photo.url}
            onClick={() => handleClick(photo.url)}
            src={photo.thumbnail_url}
            alt={photo.url}
          />
        ))}
      </FlexDiv>
    </div>
  );
}

export default Gallery;
