/* eslint-disable consistent-return */
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  border: 2px solid rgba(0,0,0,0);
  border-radius: 50%;
  margin: 6px;
  height: 65px;
  width: 65px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
    height: 70px;
    width: 70px;
  }
`;

function StyleImg({
  currentStyleInd,
  style,
  ind,
  handleClick,
}) {
  const checkmark = <span>&#10003;</span>;
  return (
    <div style={{ position: 'relative' }}>
      { (() => {
        if (currentStyleInd === ind) {
          return (
            <div style={{
              height: '20px',
              width: '20px',
              borderRadius: '50%',
              backgroundColor: 'orange',
              border: '2px solid black',
              position: 'absolute',
              right: '4px',
              top: '4px',
            }}
            >
              <span style={{
                fontSize: '18px',
                position: 'relative',
                top: '-1px',
                left: '2.5px',
                color: 'black',
              }}
              >
                {checkmark}
              </span>
            </div>
          );
        }
      })()}
      <Img
        onClick={() => { handleClick(style.style_id, style.name); }}
        src={style.photos[0].thumbnail_url}
        alt=""
      />
    </div>
  );
}

export default StyleImg;
