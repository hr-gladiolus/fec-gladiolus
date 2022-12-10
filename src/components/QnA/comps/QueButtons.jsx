import React from 'react';
import styled from 'styled-components';
import HelpfulSentence from '../styles/HelpfulSentence.styled';
import HelpfulButton from '../styles/HelpfulButton.styled';
import FlexRow from '../styles/FlexRow.styled';

const QueButtonsOuter = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddAnswerButton = styled.button`
width: 81px;
background-color: white;
border-width: 0;
display: flex;
flex-direction: row;
font-size: 11px;
opacity: 75%;
text-decoration: underline;
place-content: center;
padding: 0 10px;
`;

function QueButtons({
  helpfulness, toggle, handleYesClick, question,
}) {
  return (
    <QueButtonsOuter>
      <FlexRow>
        <HelpfulSentence>
          Helpful?
          {' '}
          <HelpfulButton onClick={handleYesClick}>Yes</HelpfulButton>
          {` (${helpfulness})`}
        </HelpfulSentence>
        <AddAnswerButton onClick={toggle}>Add Answer</AddAnswerButton>
      </FlexRow>
    </QueButtonsOuter>
  );
}

export default QueButtons;
