import React from 'react';
import styled from 'styled-components';
import SingleAns from './SingleAns.jsx';
import AListStyle from '../styles/AListStyle.styled';
import OuterAListStyle from '../styles/OuterAListStyle.styled';
import Aletter from '../styles/Aletter.styled';

const LoadAnswers = styled.button`
  display: flex;
  background-color: white;
  font-weight: bold;
  font-size: 15px;
  justify-content: start;
  border-width: 0;
  margin: 0 0 10px 0;
`;

function Alist({ answers }) {
  const [height, setHeight] = React.useState('0px');

  const content = React.useRef(null);

  const answerKeys = Object.keys(answers);

  const mappedAnswers = answerKeys.map((ansID) => (
    <SingleAns
      answer={answers[ansID]}
      key={ansID}
    />
  ));

  return (
    <OuterAListStyle>
      {mappedAnswers.length !== 0 ? <Aletter>A:</Aletter>
        : <div style={{ fontSize: '13px', marginLeft: '17px' }}>There are currently no answers to this question.</div> }
      <AListStyle>
        { mappedAnswers.length > 2 ? mappedAnswers.slice(0, 2) : mappedAnswers }
        { mappedAnswers.length > 2 ? (
          <div
            className="answerlisthidden"
            ref={content}
            style={{ maxHeight: height }}
          >
            { mappedAnswers.slice(2) }
          </div>
        ) : null }
        { mappedAnswers.length > 2 ? <LoadAnswers>Load more answers</LoadAnswers> : null }
      </AListStyle>
    </OuterAListStyle>
  );
}

export default Alist;
