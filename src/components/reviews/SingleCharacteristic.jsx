import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SingleChar = styled.div``;

function SingleCharacteristic(props) {
  const { reviewInput, setReviewInput } = props;
  const data = useSelector((state) => state.product.productData);

  const allFactors = {
    Size: { one: 'A size too small', five: 'A size too wide' },
    Width: { one: 'Too narrow', five: 'Too wide' },
    Comfort: { one: 'Uncomfortable', five: 'Perfect' },
    Quality: { one: 'Poor', five: 'Perfect' },
    Length: { one: 'Runs Short', five: 'Runs long' },
    Fit: { one: 'Runs tight', five: 'Runs long' },
  };
  // "characteristics": {
  // "125036": 1,
  //     "125037": 2,
  // "125038": 3,
  // "125039": 4
  // }
  return (
    <div>
      Product Characteristics
      {Object.keys(data.characteristics).map((characteristic) => (
        <SingleCharacteristic />
      ))}
    </div>
  );
}

export default SingleCharacteristic;
