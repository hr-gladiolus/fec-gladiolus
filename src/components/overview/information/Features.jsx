import React, { useState } from 'react';
import styled from 'styled-components';

function Features({ features }) {
  if (!features || features.length === 0) {
    return (
      <div>
        <span>&#10003;</span>
        <span>No Feature!</span>
      </div>
    );
  }

  return (
    <div>
      {features.map((feature, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i}>
          <span style={{ paddingRight: '5px' }}>&#10003; </span>
          <span>{feature.value}</span>
        </div>
      ))}
    </div>
  );
}

export default Features;
