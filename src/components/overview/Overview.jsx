/* eslint-disable no-console  */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Information from './information/Information.jsx';
import Style from './style/Style.jsx';
import Gallery from './gallery/Gallery.jsx';
import ExpandedView from './gallery/ExpandedView.jsx';
import Cart from './cart/Cart.jsx';
import Details from './details/Details.jsx';
import { getProducts, getProduct, getStyles } from './helpers/productAPI.js';
import exampleData from './exampleData.jsx';

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
  margin: 5px;
`;

const Div = styled.div`
  background: linear-gradient(0deg, #ffae6c, hsl(240,60%,100%));
  border: 1px solid lightgray;
  min-width: 400px;
  margin: 10px;
  padding: 2px;
  box-shadow: 3px 3px 6px rgba(0,0,0,0.5);
`;

const InvisDiv = styled.div`
  min-width: 400px;
  margin: 5px;
`;

function Overview({ productId, ratings }) {
  const [currentProduct, setCurrentProduct] = useState(exampleData.productData);
  const [styles, setStyles] = useState(exampleData.stylesData);
  const [currentStyle, setCurrentStyle] = useState(exampleData.stylesData[0]);
  const [currentPhoto, setCurrentPhoto] = useState('');

  const handleStyleOnClick = (id) => {
    setCurrentStyle(styles.find((item) => item.style_id === id));
  };

  const selectPhoto = (photo) => {
    setCurrentPhoto(photo);
  };

  const unselectPhoto = () => {
    setCurrentPhoto('');
  };

  return (
    <div style={{ marginTop: '96px' }}>
      {currentPhoto && (
        <ExpandedView
          key={currentStyle.style_id}
          photo={currentPhoto}
          unselectPhoto={unselectPhoto}
        />
      )}
      {currentStyle && (
        <InvisDiv>
          <FlexDiv>
            <Gallery
              key={currentStyle.style_id + 1}
              photos={currentStyle.photos}
              selectPhoto={selectPhoto}
            />
            <InvisDiv>
              <Details
                ratings={ratings}
                id={currentProduct.id}
                category={currentProduct.category}
                name={currentProduct.name}
                price={currentStyle.original_price}
                sale={currentStyle.sale_price}
              />
              <Style
                styles={styles}
                currentStyle={currentStyle}
                handleStyleOnClick={handleStyleOnClick}
              />
              <Div>
                <Cart
                  id={currentStyle.style_id}
                  skus={currentStyle.skus}
                />
              </Div>
            </InvisDiv>
          </FlexDiv>
          <Information
            slogan={currentProduct.slogan}
            description={currentProduct.description}
            features={currentProduct.features}
          />
        </InvisDiv>
      )}
    </div>
  );
}

export default Overview;
