import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import More from './More.jsx';
import SingleQue from './comps/SingleQue.jsx';
import Comp from './styles/Comp.styled.js';

const Spacer = styled.div`
  margin: 0 0 0 0;
  overflow: auto;
  max-height: 515px;
`;

const AccordionDiv = styled.div`
  overflow: hidden;
  height: ${({ heightType }) => heightType};
  max-height: ${({ height }) => height};
  transition: max-height 1s ease;
`;

const OuterDiv = styled.div`
  position: relative;
`;

const ReferencePoint = styled.div`
  max-height: 0;
  overflow: hidden;
`;

function Qlist({
  queList, product, selectPhoto,
}) {
  const [height, setHeight] = useState('0px');
  const [numberLoaded, setNumberLoaded] = useState(0);
  const [showMore, setShowMore] = useState(true);
  const [heightType, setHeightType] = useState('350px');

  const content = useRef(null);

  useEffect(() => {
    if (numberLoaded === 0) {
      setNumberLoaded(2);
      setHeightType('fit-content');
      setTimeout(() => {
        setHeight(`${content.current.scrollHeight}px`);
      }, 1200);
    }
    setHeight(`${content.current.scrollHeight}px`);
  });

  const mappedList = queList.map((question) => (
    <SingleQue
      question={question}
      key={question.question_id}
      product={product}
      selectPhoto={(p) => selectPhoto(p)}
    />
  ));

  function toggleAccordion() {
    setNumberLoaded(numberLoaded + 2);
    if (numberLoaded >= queList.length - 2) {
      setShowMore(false);
    }
  }

  return (
    <OuterDiv>
      <Spacer>
        <Comp>
          <ReferencePoint
            ref={content}
          >
            { mappedList.slice(0, numberLoaded) }
          </ReferencePoint>
          <AccordionDiv
            data-testid="accordionDiv"
            height={height}
            heightType={heightType}
          >
            { mappedList }
          </AccordionDiv>
        </Comp>
      </Spacer>
      <More
        data-testid="more"
        queList={queList}
        toggleAccordion={() => toggleAccordion()}
        product={product}
        showMore={showMore}
      />
    </OuterDiv>
  );
}

export default Qlist;
