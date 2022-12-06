import React from 'react';
import Comp from '../styles/Comp.styled.js';
import MoreAnsQues from '../styles/MoreAnsQues.styled.js';
import AddAQue from '../styles/AddAQue.styled.js';
import FlexRow from '../styles/FlexRow.styled.js';

function More({ queList }) {
  const [show, setShow] = React.useState(true);
  return (
    <Comp>
      <FlexRow>
        { queList.length > 2 ? <MoreAnsQues>MORE ANSWERED QUESTIONS</MoreAnsQues> : null }
        <AddAQue>ADD QUESTION +</AddAQue>
      </FlexRow>
    </Comp>
  );
}

export default More;
