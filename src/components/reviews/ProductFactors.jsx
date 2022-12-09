import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;

`;
const SingleCharacteristic = styled.div`
  /* width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center; */

  &:after {
  content: "";
  display: table;
  clear: both;
  }
`;

const CharacteristicName = styled.p`
`;

const Bar = styled.div`
  width: 100%;
  background-color: #858080;
  text-align: center;
  color: white;
  height: 10px;
`;

const LowerText = styled.div`
`;

const One = styled.div`
  float: left;
  padding: 5px;
`;

const Five = styled.div`
  float: right;
`;

function ProductFactors() {
  const [currentFactors, setCurrentFactors] = useState();
  const [currentValues, setCurrentValues] = useState();
  const product = useSelector((state) => state.product.productId);
  const fakeExample = {
    Fit: 3,
    Length: 3,
    // Comfort: 3,
    // Quality: 4,
  };

  const allFactors = {
    Size: { one: 'A size too small', five: 'A size too wide' },
    Width: { one: 'Too narrow', five: 'Too wide' },
    Comfort: { one: 'Uncomfortable', five: 'Perfect' },
    Quality: { one: 'Poor', five: 'Perfect' },
    Length: { one: 'Runs Short', five: 'Runs long' },
    Fit: { one: 'Runs tight', five: 'Runs long' },
  };

  const singleFactor = (factor) => (
    <SingleCharacteristic key={factor}>
      <CharacteristicName>
        {factor}
      </CharacteristicName>
      <Bar>bar</Bar>
      <LowerText>
        <One>{allFactors[factor].one}</One>
        <Five>{allFactors[factor].five}</Five>
      </LowerText>
    </SingleCharacteristic>
  );
  return (
    <Row>
      {Object.keys(fakeExample).map((factor) => singleFactor(factor))}
    </Row>
  );
}

export default ProductFactors;
