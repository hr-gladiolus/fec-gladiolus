import React from 'react';
import styled from 'styled-components';
import HelpfulSentence from '../styles/HelpfulSentence.styled';
import HelpfulButton from '../styles/HelpfulButton.styled';
import FlexRow from '../styles/FlexRow.styled';
import FlexColumn from '../styles/FlexColumn.styled';

const AddAnswerButton = styled.button`
width: 81px;
border-width: 0;
display: flex;
flex-direction: row;
font-size: 11px;
opacity: 75%;
text-decoration: underline;
place-content: center;
padding: 0 10px;
background-color:${({ theme }) => theme.bg};
`;

function QueButtons({
  helpfulness, toggle, handleYesClick, question,
}) {
  return (
    <FlexColumn>
      <FlexRow>
        <HelpfulSentence data-testid="helpfulquestionsentence">
          Helpful?
          {' '}
          <HelpfulButton data-testid="helpfulquestionbutton" onClick={handleYesClick}>Yes</HelpfulButton>
          {` (${helpfulness})`}
        </HelpfulSentence>
        <AddAnswerButton onClick={toggle}>Add Answer</AddAnswerButton>
      </FlexRow>
    </FlexColumn>
  );
}

export default QueButtons;
