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
  const [height, setHeight] = useState('fit-content');
  const [overflow, setOverflow] = useState('hidden');
  const [innerText, setInnerText] = useState('SEE MORE');

  const closeReference = useRef(null);
  const openReference = useRef(null);
  let answerKeys = Object.keys(answers);

  useEffect(() => {
    setHeight(`${closeReference.current.scrollHeight}px`);
  }, []);

  function toggleAccordion() {
    setHeight(height !== `${closeReference.current.scrollHeight}px` ? `${closeReference.current.scrollHeight}px` : `${openReference.current.scrollHeight}px`);
    setOverflow(overflow !== 'hidden' ? 'hidden' : 'scroll');
    setInnerText(innerText !== 'SEE MORE' ? 'SEE MORE' : 'COLLAPSE');
  }

  answerKeys = answerKeys.sort(
    (ans1, ans2) => (answers[ans1].helpfulness > answers[ans2].helpfulness ? -1 : 1),
  );
  answerKeys = answerKeys.sort(
    (ans1, ans2) => {
      let number;
      if (answers[ans1].answerer_name.toLowerCase() === 'seller') {
        number = -1;
      } else if (answers[ans2].answerer_name.toLowerCase() === 'seller') {
        number = 1;
      } else {
        number = 0;
      }
      return number;
    },
  );

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
        <ReferencePoint
          ref={openReference}
        >
          { mappedAnswers }
        </ReferencePoint>
        <ReferencePoint
          ref={closeReference}
        >
          { mappedAnswers.slice(0, 2) }
        </ReferencePoint>
        <AccordionDiv
          overflow={overflow}
          height={height}
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
