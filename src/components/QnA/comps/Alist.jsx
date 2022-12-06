import React from 'react';
import SingleAns from './SingleAns.jsx';
import AListStyle from '../styles/AListStyle.styled';

function Alist({ answers }) {
  const answerKeys = Object.keys(answers);
  const mappedAnswers = answerKeys.map((ansID) => (
    <SingleAns
      answer={answers[ansID]}
      key={ansID}
    />
  ));

  return (
    <AListStyle>
      { mappedAnswers }
    </AListStyle>
  );
}

export default Alist;
