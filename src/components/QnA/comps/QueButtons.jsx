// modules
import React from 'react';
// components
// styles
import QueButtonsStyles from '../styles/QueButtonsStyles.styled';
import HelpfulSentence from '../styles/HelpfulSentence.styled';
import HelpfulButton from '../styles/HelpfulButton.styled';
import AddAnswerButton from '../styles/AddAnswerButton.styled';
import QueButtonsOuter from '../styles/QueButtonsOuter.styled';

function QueButtons({ helpfulness, toggle }) {
  return (
    <QueButtonsOuter>
      <QueButtonsStyles>
        <HelpfulSentence>
          Helpful?
          {' '}
          <HelpfulButton>Yes</HelpfulButton>
          {` (${helpfulness})`}
        </HelpfulSentence>
        <AddAnswerButton onClick={toggle}>Add Answer</AddAnswerButton>
      </QueButtonsStyles>
    </QueButtonsOuter>
  );
}

export default QueButtons;
