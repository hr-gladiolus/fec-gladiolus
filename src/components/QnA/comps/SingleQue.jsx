// modules
import React from 'react';
// components
import QueView from './QueView.jsx';
import QueButtons from './QueButtons.jsx';
// styles
import SingleQuest from '../styles/SingleQuest.styled.js';

function SingleQue({ question }) {
  return (
    <SingleQuest>
      <QueView question={question} />
      <QueButtons helpfulness={question.question_helpfulness} />
    </SingleQuest>
  );
}

export default SingleQue;
