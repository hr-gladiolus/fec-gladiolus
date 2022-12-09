import React from 'react';
import { format, parseISO } from 'date-fns';
import AnsRow from '../styles/AnsRow.styled';
import AnsColumn from '../styles/AnsColumn.styled';
import AnsText from '../styles/AnsText.styled';
import AnsInfo from '../styles/AnsInfo.styled';
import FlexRow from '../styles/FlexRow.styled';
import HelpfulSentence from '../styles/HelpfulSentence.styled';
import HelpfulButton from '../styles/HelpfulButton.styled';
import ReportButton from '../styles/ReportButton.styled';

function SingleAns({ answer }) {
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
            <HelpfulButton>Yes</HelpfulButton>
            {` (${answer.helpfulness})`}
          </HelpfulSentence>
          <ReportButton>Report</ReportButton>
        </FlexRow>
      </AnsColumn>
    </AnsRow>
  );
}

export default SingleAns;
