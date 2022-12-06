import React, { useState } from 'react';

function SingleReview(props) {
  const { review } = props;

  const [showMore, setShowMore] = useState(false);
  // this is my example review - leaving it in for future use
  // const review = {
  //   review_id: 1277210,
  //   rating: 3,
  //   summary: 'Such a great product!',
  //   recommend: true,
  //   response: null,
  //   body: 'wow I really loved this product. It was perfect',
  //   date: '2022-10-25T00:00:00.000Z',
  //   reviewer_name: 'cordelia',
  //   helpfulness: 2,
  //   photos: [],
  // };

  function summaryOverflow() {
    const under60 = review.summary.slice(0, 61);
    const over60 = review.summary.slice(61);
    return (
      <div>
        <h2>{under60}</h2>
        <h3>{over60}</h3>
      </div>
    );
  }

  function bodyOverflow() {
    return (
      <div>
        {showMore ? review.body : review.body.slice(0, 251)}
        <button
          type="button"
          onClick={
            (evt) => {
              evt.preventDefault();
              setShowMore(!showMore);
            }
          }
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>stars</p>
      <p>{review.reviewer_name}</p>
      {review.summary.length > 60 ? summaryOverflow() : <h2>{review.summary}</h2>}
      {review.body.length > 250 ? bodyOverflow() : <p>{review.body}</p>}
      {/* images here  */}
      {review.recommend === true ? <p>I recommend this product</p> : null}
      {review.response && (
        <p>
          Response:
          {review.response}
        </p>
      )}
      {/* was this review helpful */}
      <button type="button">Report</button>
      {/* report button functionality */}
    </div>
  );
}

export default SingleReview;
