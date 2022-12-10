// modules
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// components
import QueView from './QueView.jsx';
import QueButtons from './QueButtons.jsx';
import useModal from '../../shared/useModal.js';
import Modal from '../../shared/Modal.jsx';
import ModalTemplate from './ModalTemplate.jsx';

const API = require('../../../config').API_TOKEN;

const SingleQuest = styled.div`
  display: flex;
  flex-direction: row;
`;

function SingleQue({ question, productName, productID }) {
  const { visible, toggle } = useModal();
  // set state to keep track of helpfulness to change when clicked so I don't have to rerender
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  // set state to keep track of if the yes has been clicked or not
  const [notClicked, setNotClicked] = useState(true);
  function handleClick() {
    // the function needs to send the necessary data to the API and once it gets a positive
    // return message increment question.question_helpfulness
    // But I will probably need to instialize state to have it rerender on the change.
    // send an axios put request to /qa/questions/:question_id/helpful and the response is 204.
    if (notClicked) {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/helpful`, null, {
        headers: {
          Authorization: API,
        },
        params: {
          question_id: question.question_id,
        },
      })
        .then(() => {
          setHelpfulness(helpfulness + 1);
          setNotClicked(false);
        });
    }
  }
  return (
    <SingleQuest>
      <QueView question={question} />
      <QueButtons
        helpfulness={helpfulness}
        toggle={toggle}
        handleYesClick={() => handleClick()}
        question={question}
      />
      <Modal visible={visible} toggle={toggle}>
        <ModalTemplate
          title="Submit Your Answer"
          subtitle={`${productName}: ${question.question_body}`}
          firstInputLabel="Your Answer"
          firstInputName="Your Answer"
          secondInputName="Example: jack543!"
          thirdInputName="Example: jack@email.com"
          buttonName="Submit Question"
          secondInputText="For privacy reasons, do not use your full name or email address"
          thirdInputText="For authentication reasons, you will not be emailed"
          identification={`${question.question_id}`}
        />
      </Modal>
    </SingleQuest>
  );
}

export default SingleQue;
