import React, { useState } from 'react';

function SingleReview(props) {
  const { review } = props;
  const parseReview = JSON.parse(review);

  const [showMore, setShowMore] = useState(false);
  // this is my example review - leaving it in for future use
  // const parseReview = {
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
    const under60 = parseReview.summary.slice(0, 61);
    const over60 = parseReview.summary.slice(61);
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
        {showMore ? parseReview.body : parseReview.body.slice(0, 251)}
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
      <p>{parseReview.reviewer_name}</p>
      {parseReview.summary.length > 60 ? summaryOverflow() : <h2>{parseReview.summary}</h2>}
      {parseReview.body.length > 250 ? bodyOverflow() : <p>{parseReview.body}</p>}
      {/* images here  */}
      {parseReview.recommend === true ? <p>I recommend this product</p> : null}
      {parseReview.response && (
        <p>
          Response:
          {parseReview.response}
        </p>
      )}
      {/* was this review helpful */}
      <button type="button">Report</button>
      {/* report button functionality */}
    </div>
  );
}

export default SingleReview;
