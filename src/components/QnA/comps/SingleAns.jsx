import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';
import FlexRow from '../styles/FlexRow.styled';
import HelpfulSentence from '../styles/HelpfulSentence.styled';
import HelpfulButton from '../styles/HelpfulButton.styled';
import { submitHelpful, submitReport } from '../requestHelpers';

const AnsRow = styled.div`
  min-width: 305px;
  display: flex;
  margin 0 0 10px 0;
`;

const AnsText = styled.p`
  display: flex;
  font-size 13px;
  place-content: center start;
  margin 0 0 8px 0;
`;

const AnsInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  opacity: 75%;
  margin: 0;
  padding 0 10px 0 0;
  border: solid;
  border-width: 0 1px 0 0;
`;

const ReportButton = styled.button`
border-width: 0;
display: flex;
flex-direction: row;
font-size: 11px;
place-content: center;
padding: 0 0 0 10px;
opacity: 75%;
text-decoration: underline;
background-color:${({ theme }) => theme.bg};
`;

const StaticReport = styled.div`
  border-width: 0;
  display: flex;
  flex-direction: row;
  font-size: 11px;
  place-content: center;
  padding: 0 0 0 10px;
  opacity: 100%;
`;

const DisplayPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SinglePhoto = styled.img`
  max-height: 75px;
  max-width: 75px;
  margin: 5px 10px 5px 0;
`;

const AnswererNameSpan = styled.span`
  font-weight: ${({ weight }) => weight || 'normal'};
`;

function SingleAns({ answer, selectPhoto }) {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [notClicked, setNotClicked] = useState(true);
  const [notReported, setNotReported] = useState(true);

  const mappedPhotos = answer.photos.map((photoUrl, i) => (
    <SinglePhoto
      src={photoUrl}
      onClick={() => selectPhoto(photoUrl)}
      key={i}
    />
  ));

  function handleClick() {
    if (notClicked) {
      setNotClicked(false);
      submitHelpful(false, answer.id)
        .then(() => {
          setHelpfulness(helpfulness + 1);
        });
    }
  }

  function handleReport() {
    if (notReported) {
      setNotReported(false);
      submitReport(answer.id)
        .then((val) => {
        });
    }
  }

  return (
    <AnsRow>
      <div>
        <AnsText>
          {answer.body}
        </AnsText>
        <DisplayPhotos>
          {mappedPhotos}
        </DisplayPhotos>
        <FlexRow>
          <AnsInfo>
            by&nbsp;
            { answer.answerer_name.toLowerCase() === 'seller' ? <AnswererNameSpan weight="bolder">{answer.answerer_name}</AnswererNameSpan> : <AnswererNameSpan>{answer.answerer_name}</AnswererNameSpan>}
            {', '}
            {format(parseISO(answer.date), 'MMMM d, yyyy')}
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
      </div>
    </AnsRow>
  );
}

export default SingleAns;
