import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import More from './More.jsx';
import SingleQue from './comps/SingleQue.jsx';
import Comp from './styles/Comp.styled.js';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';
import ModalTemplate from './comps/ModalTemplate.jsx';

const Spacer = styled.div`
  margin: 0 0 10px 0;
  overflow: auto;
  max-height: 500px;
`;

const TestDiv = styled.div`
  overflow: hidden;
  max-height: ${({ height }) => height};
  transition: max-height 1s ease;
`;

function Qlist({ queList, productID, productName }) {
  const { visible, toggle } = useModal();

  const [height, setHeight] = useState('0px');

  const [showAccordion, setShowAccordion] = useState(false);

  const content = useRef(null);

  const mappedList = queList.map((question) => (
    <SingleQue
      question={question}
      toggle={toggle}
      key={question.question_id}
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
            <TestDiv
              height={height}
              ref={content}
            >
              { mappedList.slice(4) }
            </TestDiv>
          ) }
          <Modal visible={visible} toggle={toggle}>
            <ModalTemplate title="Submit Your Answer" subtitle={`${productName}: [question body](To Do)`} firstInputLabel="Your Answer" firstInputName="Your Answer" secondInputName="Example: jack543!" thirdInputName="Example: jack@email.com" buttonName="Submit Question" secondInputText="For privacy reasons, do not use your full name or email address" thirdInputText="For authentication reasons, you will not be emailed" />
          </Modal>
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
