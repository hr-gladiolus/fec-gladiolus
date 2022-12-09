/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const InvisDiv = styled.div`
  border-radius: 7px;
  background: #ffffff17;
  padding: 7px 12px 7px 12px;
  margin: 0 auto;
`;

const Img = styled.img`
  border: 2px solid rgba(0,0,0,0);
  border-radius: 50%;
  margin: 6px;
  height: 65px;
  width: 65px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    border: 0px solid black;
    height: 70px;
    width: 70px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  margin-top: 7px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 350px;
`;

function Style({ styles, currentStyle, handleStyleOnClick }) {
  const [styleName, setStyleName] = useState(currentStyle.name);
  const [checked, setChecked] = useState(false);

  const handleClick = (id, name) => {
    handleStyleOnClick(id);
    setStyleName(name);
    setChecked(true);
  };

  return (
    <InvisDiv>
      <h3 style={{ margin: '12px' }}>{`Style ▸ ${styleName}`}</h3>
      <FlexDiv>
        {styles.map((style) => (
          <Img
            key={style.style_id}
            src={style.photos[0].thumbnail_url}
            onClick={() => handleClick(style.style_id, style.name)}
            alt=""
          />
        ))}
      </FlexDiv>
    </InvisDiv>
  );
}

export default Style;
