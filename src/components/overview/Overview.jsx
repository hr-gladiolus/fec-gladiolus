/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Information from './information/Information.jsx';
import Style from './style/Style.jsx';
import Gallery from './gallery/Gallery.jsx';
import Cart from './cart/Cart.jsx';
import Details from './details/Details.jsx';
import exampleData from './exampleData.jsx';

function Overview() {
  const [currentProduct, setCurrentProduct] = useState(exampleData[0]);
  const [styles, setStyles] = useState([
    {
      style_id: 1,
      name: 'Forest Green & Black',
      original_price: '140',
      sale_price: '0',
      'default?': true,
      photos: [
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg',
        },
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg',
        },
      ],
      skus: {
        37: {
          quantity: 8,
          size: 'XS',
        },
        38: {
          quantity: 16,
          size: 'S',
        },
        39: {
          quantity: 17,
          size: 'M',
        },
      },
    },
  ]);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState('');
  // const [loaded, setLoaded] = useState(0);

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
        <h3>Gallery</h3>
        <Gallery
          key={currentStyle.style_id}
          photos={currentStyle.photos}
          selectPhoto={selectPhoto}
        />
        <h3>Details</h3>
        <Details
          // ratings={ratings}
          category={currentProduct.category}
          name={currentProduct.name}
          price={currentStyle.original_price}
          sale={currentStyle.sale_price}
        />
        <h3>Style Selector</h3>
        <Style
          styles={styles}
          currentStyle={currentStyle}
          handleStyleOnClick={handleStyleOnClick}
        />
        <h3>Add to Cart</h3>
        <Cart
          id={currentStyle.style_id}
          skus={currentStyle.skus}
        />
        <h3>Product Information</h3>
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
