import React from 'react';
import SingleAns from './SingleAns.jsx';
import AListStyle from '../styles/AListStyle.styled';
import OuterAListStyle from '../styles/OuterAListStyle.styled';
import Aletter from '../styles/Aletter.styled';

function Alist({ answers }) {
  const answerKeys = Object.keys(answers);
  const mappedAnswers = answerKeys.map((ansID) => (
    <SingleAns
      answer={answers[ansID]}
      key={ansID}
    />
  ));

  return (
    <OuterAListStyle>
      <Aletter>A:</Aletter>
      <AListStyle>
        { mappedAnswers }
      </AListStyle>
    </OuterAListStyle>
  );
}

export default Alist;
