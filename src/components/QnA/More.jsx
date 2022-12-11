import React from 'react';
import styled from 'styled-components';
import Comp from './styles/Comp.styled.js';
import FlexRow from './styles/FlexRow.styled.js';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';
import ModalTemplate from './comps/ModalTemplate.jsx';

const AddAQue = styled.button`
  display: flex;
  font-weight: bold;
  border-width: 1px;
  padding: 2.04% 1.5%;
  background-color: white;
  min-width: 127px;
`;

const MoreAnsQues = styled.button`
  display: flex;
  font-weight: bold;
  border-width: 1px;
  padding: 2.04% 1.5%;
  background-color: white;
  margin-right: 2.5%;
  min-width: 216px;
  place-content: center;
  text-align: center;
`;

function More({
  queList, toggleAccordion, productName, productID, showMore,
}) {
  const { visible, toggle } = useModal();
  const innerText = 'PLACEHOLDER';

  return (
    <Comp>
      <FlexRow>
        { queList.length > 2 && showMore
          ? (
            <MoreAnsQues onClick={toggleAccordion}>
              {innerText}
              {' '}
              ANSWERED QUESTIONS
            </MoreAnsQues>
          )
          : null}
        <AddAQue onClick={toggle}>ADD QUESTION +</AddAQue>
      </FlexRow>
      <Modal visible={visible} toggle={toggle}>
        <ModalTemplate
          title="Ask Your Question"
          subtitle={`About the ${productName}`}
          firstInputLabel="Your Question"
          firstInputName="Your Question"
          secondInputName="Example: jackson11!"
          thirdInputName="Your email"
          buttonName="Submit Question"
          secondInputText="For privacy reasons, do not use your full name or email address"
          thirdInputText="For authentication reasons, you will not be emailed"
          isQuestion
          identification={`${productID}`}
        />
      </Modal>
    </Comp>
  );
}

export default More;
