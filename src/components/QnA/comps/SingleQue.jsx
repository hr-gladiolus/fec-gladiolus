// modules
import React from 'react';
// components
import QueView from './QueView.jsx';
import QueButtons from './QueButtons.jsx';
// styles
import SingleQuest from '../styles/SingleQuest.styled.js';

function SingleQue({ question, toggle }) {
  return (
    <SingleQuest>
      <QueView question={question} />
      <QueButtons
        helpfulness={question.question_helpfulness}
        toggle={toggle}
      />
    </SingleQuest>
  );
}

export default SingleQue;
