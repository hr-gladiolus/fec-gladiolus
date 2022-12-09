import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
const SingleCharacteristic = styled.div`
  width: 300px;

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
  height: 10px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 13px solid black;
`;

const LowerText = styled.div`
`;

const One = styled.div`
  float: left;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Five = styled.div`
  float: right;
  padding-top: 5px;
  padding-bottom: 5px;
`;

function ProductFactors() {
  const [currentFactors, setCurrentFactors] = useState();
  const [currentValues, setCurrentValues] = useState();
  const product = useSelector((state) => state.product.productId);
  const fakeExample = {
    Fit: 0.34,
    Length: 0.78,
    Comfort: 0.89,
    Quality: 0.45,
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
      <Bar><Triangle left={fakeExample[factor]} /></Bar>
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
