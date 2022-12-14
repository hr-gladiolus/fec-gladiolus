import React, { useState, useRef, useEffect } from 'react';
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
  background-color:${({ theme }) => theme.bg};
`;

const AccordionDiv = styled.div`
  overflow: ${({ overflow }) => overflow};
  height: ${({ height }) => height};

  max-height: 325px;
  transition: height 1s ease;
`;

const ReferencePoint = styled.div`
  overflow: hidden;
  max-height 0;
`;

function Alist({ answers, selectPhoto }) {
  const [height, setHeight] = useState('100px');
  const [overflow, setOverflow] = useState('hidden');
  const [innerText, setInnerText] = useState('SEE MORE');

  const content = useRef(null);
  const referenceHeight = useRef(null);
  const answerKeys = Object.keys(answers);

  useEffect(() => {
    setHeight(`${referenceHeight.current.scrollHeight}px`);
  }, []);

  function toggleAccordion() {
    setHeight(height !== `${referenceHeight.current.scrollHeight}px` ? `${referenceHeight.current.scrollHeight}px` : `${content.current.scrollHeight}px`);
    setOverflow(overflow !== 'hidden' ? 'hidden' : 'scroll');
    setInnerText(innerText !== 'SEE MORE' ? 'SEE MORE' : 'COLLAPSE');
  }

  const mappedAnswers = answerKeys.map((ansID, i) => (
    <SingleAns
      answer={answers[ansID]}
      selectPhoto={(p) => selectPhoto(p)}
      key={ansID}
    />
  ));

  return (
    <OuterAListStyle>
      {mappedAnswers.length !== 0 ? <Aletter>A:</Aletter>
        : <div style={{ fontSize: '13px', marginLeft: '17px' }}>There are currently no answers to this question.</div> }
      <AListStyle>
        <ReferencePoint ref={referenceHeight}>
          {mappedAnswers.slice(0, 2)}
        </ReferencePoint>
        <AccordionDiv
          overflow={overflow}
          height={height}
          ref={content}
        >
          { mappedAnswers }
        </AccordionDiv>
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
