/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const FactorContainer = styled.div`
  margin: 5px 20px 0 0;
`;

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
  padding: 5px 0;
`;

const Bar = styled.div`
  width: 100%;
  text-align: center;
  height: 8px;
  position: relative;
  background: #bab5b5;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 14px solid ${({ theme }) => theme.color};
  position: absolute;
  left: calc(${(props) => props.left}% - 7px) ;
`;

const LowerText = styled.div`
  font-size: 13px;
`;

const One = styled.div`
  float: left;
  padding-top: 8px;
  padding-bottom: 5px;
`;

const Five = styled.div`
  float: right;
  padding-top: 8px;
  padding-bottom: 5px;
`;

function ProductFactors() {
  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

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
      <Bar><Triangle left={Math.round(data.characteristics[factor].value) * 20} /></Bar>
      <LowerText>
        <One>{allFactors[factor].one}</One>
        <Five>{allFactors[factor].five}</Five>
      </LowerText>
    </SingleCharacteristic>
  );
  return (
    <FactorContainer data-testid="factors">
      <Row>
        {data.characteristics && Object.keys(data.characteristics).map((factor) => singleFactor(factor))}
      </Row>
    </FactorContainer>

  );
}

export default ProductFactors;
