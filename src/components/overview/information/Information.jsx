import React from 'react';
import styled from 'styled-components';
import Features from './Features.jsx';
import Description from './Description.jsx';

const Div = styled.div`
  margin: 8px;
  padding: 0px 75px 0px 30px;
  max-width: 400px;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 35px auto 35px auto;
`;

function Information({ slogan, description, features }) {
  return (
    <FlexDiv>
      <Div style={{ borderRight: '2px solid grey', paddingLeft: '5px' }}>
        <Description
          slogan={slogan}
          description={description}
        />
      </Div>
      <Div style={{ paddingTop: '15px' }}>
        <Features
          features={features}
        />
      </Div>
    </FlexDiv>
  );
}

export default Information;
