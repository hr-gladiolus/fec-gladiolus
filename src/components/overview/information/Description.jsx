import React, { useState } from 'react';
import styled from 'styled-components';

// need to add vertical bar between description and features

function Description({ slogan, description }) {
  return (
    <div>
      <div>
        <h3>{slogan}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Description;
