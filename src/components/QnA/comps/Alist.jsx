import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import SingleAns from './SingleAns.jsx';

const OuterAListStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin 1% 0 0 0;
  `;

const AListStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 5px;
`;

const Aletter = styled.div`
  display: flex;
  font-weight: bold;
  place-content: center;
`;

const LoadAnswers = styled.button`
  background-color: white;
  font-weight: bold;
  font-size: 11px;
  text-align: left;
  border-width: 0;
  margin: 0 0 10px 0;
`;

const AccordionDiv = styled.div`
  overflow: hidden;
  max-height: ${({ height }) => height};
  transition: max-height 1s ease;
`;

function Alist({ answers }) {
  const [height, setHeight] = useState('0px');

  const content = useRef(null);

  const answerKeys = Object.keys(answers);

  function toggleAccordion() {
    setHeight(height !== '0px' ? '0px' : `${content.current.scrollHeight}px`);
  }

  let innerText;

  if (height === '0px') {
    innerText = 'SEE MORE';
  } else {
    innerText = 'COLLAPSE';
  }

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
        { mappedAnswers.length > 2 && (
          <AccordionDiv
            height={height}
            ref={content}
          >
            { mappedAnswers.slice(2) }
          </AccordionDiv>
        ) }
        { mappedAnswers.length > 2 && (
          <LoadAnswers
            onClick={toggleAccordion}
          >
            {innerText}
            {' '}
            ANSWERS
          </LoadAnswers>
        ) }
      </AListStyle>
    </OuterAListStyle>
  );
}

export default Alist;
