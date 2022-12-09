import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import styled from 'styled-components';
import AnsRow from '../styles/AnsRow.styled';
import AnsColumn from '../styles/AnsColumn.styled';
import AnsText from '../styles/AnsText.styled';
import AnsInfo from '../styles/AnsInfo.styled';
import FlexRow from '../styles/FlexRow.styled';
import HelpfulSentence from '../styles/HelpfulSentence.styled';
import HelpfulButton from '../styles/HelpfulButton.styled';
import ReportButton from '../styles/ReportButton.styled';

const API = require('../../../config').API_TOKEN;

const StaticReport = styled.div`
  border-width: 0;
  display: flex;
  flex-direction: row;
  font-size: 11px;
  place-content: center;
  padding: 0 0 0 10px;
  opacity: 100%;
`;

function SingleAns({ answer }) {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [notClicked, setNotClicked] = useState(true);
  const [notReported, setNotReported] = useState(true);
  function handleClick() {
    if (notClicked) {
      setNotClicked(false);
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answer.id}/helpful`, null, {
        headers: {
          Authorization: API,
        },
        params: {
          answer_id: answer.id,
        },
      })
        .then(() => {
          setHelpfulness(helpfulness + 1);
        });
    }
  }

  function handleReport() {
    if (notReported) {
      setNotReported(false);
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answer.id}/report`, null, {
        headers: {
          Authorization: API,
        },
        params: {
          answer_id: answer.id,
        },
      })
        .then((val) => {
          console.log(val);
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
          { notReported
            ? <ReportButton onClick={handleReport}>Report</ReportButton>
            : <StaticReport>Reported</StaticReport>}
        </FlexRow>
      </AnsColumn>
    </AnsRow>
  );
}

export default SingleAns;
