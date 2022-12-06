/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StyleRow from './StyleRow.jsx';

function Style({ styles, currentStyle, handleStyleOnClick }) {
  const currentStyleName = styles[currentStyle] ? styles[currentStyle].name : 'Style here';
  return (
    <div>
      <span>
        STYLE
        {'> '}
      </span>
      <span>
        {currentStyleName}
      </span>
      <div>
        {styles.length <= 4 ? (
          <StyleRow
            row1={styles}
            currentStyleInd={currentStyle}
            handleStyleOnClick={handleStyleOnClick}
          />
        ) : (
          styles.length <= 8 ? (
            <StyleRow
              row1={styles.slice(0, 4)}
              row2={styles.slice(4, 8)}
              currentStyleInd={currentStyle}
              handleStyleOnClick={handleStyleOnClick}
            />
          ) : (
            <StyleRow
              row1={styles.slice(0, 4)}
              row2={styles.slice(4, 8)}
              row3={styles.slice(8, 12)}
              currentStyleInd={currentStyle}
              handleStyleOnClick={handleStyleOnClick}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Style;
