import React from 'react';
import SingleQue from './SingleQue.jsx';
import Comp from '../styles/Comp.styled.js';

function Qlist({ queList }) {
  const mappedList = queList.map((question) => (
    <SingleQue
      question={question}
      key={question.question_id}
    />
  ));
  return (
    <Comp>
      { mappedList }
    </Comp>
  );
}

export default Qlist;
