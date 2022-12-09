import React, { useEffect } from 'react';
import styled from 'styled-components';

function SavedButton({ Button, id, handleSaved }) {
  return (
    <div>
      <Button onClick={handleSaved} style={{ width: '60%', height: '60%' }}>
        <span style={{ fontSize: '140%' }}>&#9734;</span>
      </Button>
    </div>
  );
}

export default SavedButton;
