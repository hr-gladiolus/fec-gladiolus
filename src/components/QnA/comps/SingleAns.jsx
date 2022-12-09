import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import AnsRow from '../styles/AnsRow.styled';
import AnsColumn from '../styles/AnsColumn.styled';
import AnsText from '../styles/AnsText.styled';
import AnsInfo from '../styles/AnsInfo.styled';
import FlexRow from '../styles/FlexRow.styled';
import HelpfulSentence from '../styles/HelpfulSentence.styled';
import HelpfulButton from '../styles/HelpfulButton.styled';
import ReportButton from '../styles/ReportButton.styled';

const API = require('../../../config').API_TOKEN;

function SingleAns({ answer }) {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [notClicked, setNotClicked] = useState(true);
  function handleClick() {
    if (notClicked) {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${answer.id}/helpful`, null, {
        headers: {
          Authorization: API,
        },
        params: {
          answer_id: answer.id,
        },
      })
        .then((value) => {
          setHelpfulness(helpfulness + 1);
          setNotClicked(false);
        });
    }
  }

  return (
    <AnsRow>
      <AnsColumn>
        <AnsText>
          {answer.body}
        </AnsText>
        <FlexRow>
          <AnsInfo>
            {`by ${answer.answerer_name}, ${format(parseISO(answer.date), 'MMMM d, yyyy')}`}
          </AnsInfo>
          <HelpfulSentence>
            Helpful?
            {' '}
            <HelpfulButton onClick={handleClick}>Yes</HelpfulButton>
            {` (${helpfulness})`}
          </HelpfulSentence>
          <ReportButton>Report</ReportButton>
        </FlexRow>
      </AnsColumn>
    </AnsRow>
  );
}

export default SingleAns;
