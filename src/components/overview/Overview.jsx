/* eslint-disable no-console  */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Information from './information/Information.jsx';
import Style from './style/Style.jsx';
import Gallery from './gallery/Gallery.jsx';
import ExpandedView from './gallery/ExpandedView.jsx';
import Cart from './cart/Cart.jsx';
import Details from './details/Details.jsx';
import getProduct from '../shared/productAPI.js';

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

function Overview() {
  const [currentProduct, setCurrentProduct] = useState();
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(undefined);
  const [currentPhoto, setCurrentPhoto] = useState('');

  const id = useSelector((state) => state.product.productId);
  const product = useSelector((state) => state.product.productData);

  const handleImage = () => {
    const promises = styles.map((style) => (
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = style.photos[0].url;
        img.onload = resolve();
        img.onerror = reject();
      })
    ));
    Promise.all(promises);
  };

  useEffect(() => {
    const promises = [];
    promises.push(
      getProduct(id)
        .then((res) => {
          setCurrentProduct(res);
          setStyles(res.styles);
          setCurrentStyle(res.styles.find((style) => style['default?'] === true) || res.styles[0]);
        })
        .catch((err) => Error('Error in Overview getProduct', err)),
    );
    Promise.all(promises)
      .then(() => {
        handleImage();
      });
  }, [id]);

  const handleStyleOnClick = (Id) => {
    setCurrentStyle(styles.find((item) => item.style_id === Id));
  };

  const selectPhoto = (photo) => {
    setCurrentPhoto(photo);
  };

  const unselectPhoto = () => {
    setCurrentPhoto('');
  };

  return (
    <div data-testid="overview" style={{ marginTop: '96px' }}>
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
                ratings={currentProduct.ratings}
                avgRating={currentProduct.average_rating}
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
