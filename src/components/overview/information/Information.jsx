import React from 'react';
import styled from 'styled-components';
import Features from './Features.jsx';
import Description from './Description.jsx';

function Information({ slogan, description, features }) {
  return (
    <div>
      <Description
        slogan={slogan}
        description={description}
      />
      <Features
        features={features}
      />
    </div>
  );
}

export default Information;
