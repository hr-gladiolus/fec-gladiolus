/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Information from './information/Information.jsx';
import Style from './style/Style.jsx';
import Gallery from './gallery/Gallery.jsx';
import Cart from './cart/Cart.jsx';
import Details from './details/Details.jsx';

function Overview() {
  const [currentProduct, setCurrentProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [loaded, setLoaded] = useState(0);

  const handleStyleOnClick = () => {
  };

  const selectPhoto = () => {
  };

  return (
    <div>
      <div>
        <h1>Overview</h1>
      </div>
      <div>
        <Gallery
          key={currentStyle.style_id}
          photos={currentStyle.photos}
          selectPhoto={selectPhoto}
        />
        <Details
          // ratings={ratings}
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
        <Cart
          id={currentStyle.style_id}
          skus={currentStyle.skus}
        />
        <Information
          slogan={currentProduct.slogan}
          description={currentProduct.description}
          features={currentProduct.features}
        />
      </div>
    </div>
  );
}

export default Overview;
