import React from 'react';
import Modal from '../styles/Modal.styled.js';
import FlexColumn from '../styles/FlexColumn.styled.js';

// need to add a form component and style it using styled components within the flexcolumn.
// then, within that form, there needs to be three inputs and a submit button.
// initialize state to keep track of all the values of the inputs and the submit will submit
// those values when it is time, for now, just set it up.

function MoreModal() {
  return (
    <Modal>
      <FlexColumn>
        <h1>More component</h1>
      </FlexColumn>
    </Modal>
  );
}

export default MoreModal;
