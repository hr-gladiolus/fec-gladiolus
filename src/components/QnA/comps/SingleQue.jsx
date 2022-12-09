// modules
import React, { useState } from 'react';
import axios from 'axios';
// components
import QueView from './QueView.jsx';
import QueButtons from './QueButtons.jsx';
// styles
import SingleQuest from '../styles/SingleQuest.styled.js';

const API = require('../../../config').API_TOKEN;

function SingleQue({ question, toggle }) {
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
      />
    </SingleQuest>
  );
}

export default SingleQue;
