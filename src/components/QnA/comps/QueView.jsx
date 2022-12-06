// modules
import React from 'react';
// components
import Alist from './Alist.jsx';
// styles
import QueComp from '../styles/QueComp.styled.js';
import ActualQue from '../styles/ActualQue.styled.js';

function QueView({ question }) {
  return (
    <QueComp>
      <ActualQue>
        Q:
        {' '}
        {question.question_body}
      </ActualQue>
      <Alist answers={question.answers} />
    </QueComp>
  );
}

export default QueView;
