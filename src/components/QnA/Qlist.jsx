import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import More from './More.jsx';
import SingleQue from './comps/SingleQue.jsx';
import Comp from './styles/Comp.styled.js';

const Spacer = styled.div`
  margin: 0 0 10px 0;
  overflow: auto;
  max-height: 500px;
`;

const AccordionDiv = styled.div`
  overflow: hidden;
  max-height: ${({ height }) => height};
  transition: max-height 1s ease;
`;

function Qlist({ queList, productID, productName }) {
  const [height, setHeight] = useState('0px');

  const [showAccordion, setShowAccordion] = useState(false);

  const content = useRef(null);

  const mappedList = queList.map((question) => (
    <SingleQue
      question={question}
      key={question.question_id}
      productName={productName}
      productID={productID}
    />
  ));

  function toggleAccordion() {
    setHeight(height !== '0px' ? '0px' : `${content.current.scrollHeight}px`);
    setShowAccordion(!showAccordion);
  }

  return (
    <div>
      <Spacer>
        <Comp>
          { mappedList.length > 4 ? mappedList.slice(0, 4) : mappedList }
          { mappedList.length > 4 && (
            <AccordionDiv
              height={height}
              ref={content}
            >
              { mappedList.slice(4) }
            </AccordionDiv>
          ) }
        </Comp>
      </Spacer>
      <More
        queList={queList}
        toggleAccordion={() => toggleAccordion()}
        showAccordion={showAccordion}
        productName={productName}
        productID={productID}
      />
    </div>
  );
}

export default Qlist;
