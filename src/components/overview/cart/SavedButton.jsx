import React, { useEffect } from 'react';
import styled from 'styled-components';

function SavedButton({ Button, id, handleSaved }) {
  return (
    <div>
      <Button style={{ fontSize: '15px' }}>
        &#9734;
      </Button>
    </div>
  );
}

export default SavedButton;
