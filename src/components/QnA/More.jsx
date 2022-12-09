import React from 'react';
import styled from 'styled-components';
import Comp from './styles/Comp.styled.js';
import MoreAnsQues from './styles/MoreAnsQues.styled.js';
import AddAQue from './styles/AddAQue.styled.js';
import FlexRow from './styles/FlexRow.styled.js';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';
import ModalTemplate from './comps/ModalTemplate.jsx';

function More({
  queList, toggleAccordion, showAccordion, productName, productID,
}) {
  const { visible, toggle } = useModal();
  let innerText;
  if (showAccordion) {
    innerText = 'LESS';
  } else {
    innerText = 'MORE';
  }

  return (
    <Comp>
      <FlexRow>
        { queList.length > 4 && (
          <MoreAnsQues onClick={toggleAccordion}>
            {innerText}
            {' '}
            ANSWERED QUESTIONS
          </MoreAnsQues>
        ) }
        <AddAQue onClick={toggle}>ADD QUESTION +</AddAQue>
      </FlexRow>
      <Modal visible={visible} toggle={toggle}>
        <ModalTemplate title="Ask Your Question" subtitle={`About the ${productName}`} firstInputLabel="Your Question" firstInputName="Your Question" secondInputName="Example: jackson11!" thirdInputName="Your email" buttonName="Submit Question" secondInputText="For privacy reasons, do not use your full name or email address" thirdInputText="For authentication reasons, you will not be emailed" isAnswer={false} />
      </Modal>
    </Comp>
  );
}

export default More;
