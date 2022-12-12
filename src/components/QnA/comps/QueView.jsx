import React from 'react';
import styled from 'styled-components';
// components
import Alist from './Alist.jsx';

const QueComp = styled.div`
  width: 80%;
`;

const ActualQue = styled.h5`
  display: flex;
  margin: 1% 0;
  font-size: 15px;
`;

function QueView({ question, selectPhoto }) {
  return (
    <QueComp>
      <ActualQue>
        Q:
        {' '}
        {question.question_body}
      </ActualQue>
      <Alist answers={question.answers} selectPhoto={(p) => selectPhoto(p)} />
    </QueComp>
  );
}

export default QueView;
