import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import More from './More.jsx';
import SingleQue from './comps/SingleQue.jsx';
import Comp from './styles/Comp.styled.js';

const Spacer = styled.div`
  margin: 0 0 10px 0;
  overflow: auto;
  max-height: 515px;
`;

const AccordionDiv = styled.div`
  height: ${({ height }) => height};
  transition: height 1s ease;
`;

function Qlist({ queList, productID, productName }) {
  const [height, setHeight] = useState('0px');
  const [numberLoaded, setNumberLoaded] = useState(2);
  const [showMore, setShowMore] = useState(true);

  const content = useRef(null);

  useEffect(() => {
    setHeight(`${content.current.scrollHeight - 5}px`);
  });

  const mappedList = queList.map((question) => (
    <SingleQue
      question={question}
      key={question.question_id}
      productName={productName}
      productID={productID}
    />
  ));

  function toggleAccordion() {
    setNumberLoaded(numberLoaded + 2);
    if (numberLoaded >= queList.length - 2) {
      setShowMore(false);
    }
  }

  return (
    <div>
      <Spacer>
        <Comp>
          <AccordionDiv
            ref={content}
            height={height}
          >
            { mappedList.slice(0, numberLoaded) }
          </AccordionDiv>
        </Comp>
      </Spacer>
      <More
        queList={queList}
        toggleAccordion={() => toggleAccordion()}
        productName={productName}
        productID={productID}
        showMore={showMore}
      />
    </div>
  );
}

export default Qlist;
