/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import { GrCheckmark } from 'react-icons/gr';
import Stars from '../shared/Stars.jsx';

const Review = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserDate = styled.div`
  margin-left: auto;
`;

const ReviewSummary = styled.div`
  font-weight: bold;
`;

const ReviewSummaryOverflow = styled.div``;

const ReviewBody = styled.div``;

const ShowMoreButton = styled.div``;

const Recommend = styled.div``;

function SingleReview(props) {
  // const { review } = props;

  const [showMore, setShowMore] = useState(false);
  // this is my example review - leaving it in for future use
  const review = {
    review_id: 1277210,
    rating: 3,
    summary: 'Such a great product! sdfadsfklajdsklfjdlkajsfldsafsafdsfdsdsfsdfdsfdssd',
    recommend: true,
    response: null,
    body: 'wow I really loved this product. It was perfect wow I really loved this product. It was perfect wow I really loved this product. It was perfect wow I really loved this product. It was perfectwow I really loved this product. It was perfectwow I really loved this product. It was perfect',
    date: '2022-10-25T00:00:00.000Z',
    reviewer_name: 'cordelia',
    helpfulness: 2,
    photos: [],
  };

  // handles summary with length over 60 char
  function summaryOverflow() {
    const under60 = review.summary.slice(0, 61);
    const over60 = review.summary.slice(61);
    return (
      <div>
        <ReviewSummary>{under60}</ReviewSummary>
        <ReviewSummaryOverflow>{over60}</ReviewSummaryOverflow>
      </div>
    );
  }

  // handles show/hide button and functionality for body over 250 char
  function bodyOverflow() {
    return (
      <div>
        {showMore
          ? <ReviewBody>{review.body}</ReviewBody>
          : <ReviewBody>{review.body.slice(0, 251)}</ReviewBody>}
        <ShowMoreButton
          onClick={
            (evt) => {
              evt.preventDefault();
              setShowMore(!showMore);
            }
          }
        >
          {showMore ? 'Show Less' : 'Show More'}
        </ShowMoreButton>
      </div>
    );
  }

  return (
    <Review>

      {/* star rating */}
      <Stars rating={review.rating} />

      {/* username and post date */}
      <UserDate>
        {review.reviewer_name}
        ,
        {' '}
        {format(parseISO(review.date), 'MMMM d, yyyy')}
        {' '}
      </UserDate>

      {/* review summary */}
      {review.summary.length > 60 ? summaryOverflow() : <ReviewSummary>{review.summary}</ReviewSummary>}

      {/* review body */}
      {review.body.length > 250 ? bodyOverflow() : <ReviewBody>{review.body}</ReviewBody>}

      {/* images here  */}

      {/* recommend this product */}
      {review.recommend === true && (
        <Recommend>
          {' '}
          <GrCheckmark />
          {' '}
          I recommend this product
        </Recommend>
      )}
      {review.response && (
        <p>
          Response:
          {review.response}
        </p>
      )}
      {/* was this review helpful */}
      <button type="button">Report</button>
      {/* report button functionality */}
    </Review>
  );
}

export default SingleReview;
