/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import { GrCheckmark } from 'react-icons/gr';
import Stars from '../../shared/Stars.jsx';
import { markHelpful, reportReview } from '../api.js';
import SingleImage from './SingleImage.jsx';

const Review = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  direction: row;
  margin: 10px;
`;

const UserDate = styled.div`
  margin-left: auto;
  margin-top: 5px;
  background-color: white;
  border-width: 0;
  font-size: 11px;
  opacity: 85%;
  background-color:${({ theme }) => theme.bg};
`;

const ReviewSummary = styled.div`
  font-weight: bold;
  margin: 10px 0px 10px 0;
`;

const ReviewSummaryOverflow = styled.div``;

const ReviewBody = styled.div`
  margin: 0 0 14px 0;
`;

const ShowMoreButton = styled.div`
  background-color: transparent;
  display: inline-block;
  padding: 2px;
  &:hover {
    border: 2px solid purple;
  }
`;

const ImageContainer = styled.div`
  display: flex;
`;

const Recommend = styled.div`
  margin-left: 0px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const ResponseContainer = styled.div``;

const ResponseHeader = styled.div`
  font-weight: bold;
`;

const ResponseBody = styled.div`
  background-color: grey;
`;

const HelpfulReportContainer = styled.div`
  background-color: white;
  border-width: 0;
  display: flex;
  flex-direction: row;
  font-size: 11px;
  opacity: 85%;
  margin 0 5px 0 0;
  background-color:${({ theme }) => theme.bg};
`;

const HelpfulReportButton = styled.div`
  text-decoration: underline;
  margin 0 5px;
`;

const Line = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid black;
  margin: 1em 0;
  padding: 0;
`;

function SingleReview(props) {
  const { review } = props;

  const [showMore, setShowMore] = useState(false);
  const [helpful, setHelpful] = useState(review.helpfulness);
  const [unhelpful, setUnhelpful] = useState(0);
  const [clicked, setClicked] = useState(false);

  const summaryOverflow = () => {
    const under60 = review.summary.slice(0, 61);
    const over60 = review.summary.slice(61);
    return (
      <div>
        <ReviewSummary>{`${under60}...`}</ReviewSummary>
        <ReviewSummaryOverflow>{`...${over60}`}</ReviewSummaryOverflow>
      </div>
    );
  };

  const bodyOverflow = () => (
    <div>
      {showMore
        ? <ReviewBody>{review.body}</ReviewBody>
        : <ReviewBody>{review.body.slice(0, 251)}</ReviewBody>}
      <ShowMoreButton onClick={(evt) => setShowMore(!showMore)} data-testid="show-more">
        {showMore ? 'Show Less' : 'Show More'}
      </ShowMoreButton>
    </div>
  );

  const helpfulClick = () => !clicked && markHelpful(review.review_id)
    .then(() => {
      setHelpful(helpful + 1);
      setClicked(true);
    });

  const unhelpfulClick = () => !clicked && setUnhelpful(unhelpful + 1) && setClicked(true);

  return (
    <Review>

      <TopBar>
        <Stars rating={review.rating} />

        <UserDate>
          {review.reviewer_name}
          ,
          {' '}
          {format(parseISO(review.date), 'MMMM d, yyyy')}
          {' '}
        </UserDate>
      </TopBar>

      {review.summary.length > 60 ? summaryOverflow() : <ReviewSummary>{review.summary}</ReviewSummary>}

      {review.body.length > 250 ? bodyOverflow() : <ReviewBody>{review.body}</ReviewBody>}

      <ImageContainer>
        { review.photos && review.photos.map((photo) => (
          <SingleImage key={photo.url} url={photo.url} />
        ))}
      </ImageContainer>

      {review.recommend === true && (
        <Recommend>
          {' '}
          <GrCheckmark />
          {' '}
          I recommend this product
        </Recommend>
      )}

      {review.response && (
        <ResponseContainer>
          <ResponseHeader>Response from seller:</ResponseHeader>
          <ResponseBody>{review.response}</ResponseBody>
        </ResponseContainer>
      )}

      <HelpfulReportContainer data-testid="unhelpful">
        Was this review helpful?
        {' '}
        <HelpfulReportButton onClick={(evt) => helpfulClick()}>
          Yes
          {' '}

        </HelpfulReportButton>
        {` (${helpful})`}
        <HelpfulReportButton onClick={(evt) => unhelpfulClick()}>No</HelpfulReportButton>
        {` (${unhelpful})`}
        <HelpfulReportButton onClick={(evt) => reportReview(review.review_id)}>Report</HelpfulReportButton>
      </HelpfulReportContainer>

      <Line />
    </Review>
  );
}

export default SingleReview;
