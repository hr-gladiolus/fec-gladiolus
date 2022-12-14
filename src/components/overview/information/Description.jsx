import React, { useState } from 'react';
import styled from 'styled-components';

function Description({ slogan, description }) {
  return (
    <div>
      <h4 style={{ paddingBottom: '12px', paddingTop: '4px' }}>{slogan}</h4>
      <p style={{ paddingBottom: '6px' }}>{description}</p>
    </div>
  );
}

export default Description;
