import React, { useState } from 'react';

function SingleReview(props) {
  // const { review } = props;
  // const parseReview = JSON.parse(review);
  // console.log(parseReview);

  const [showMore, setShowMore] = useState(false);

  const parseReview = {
    review_id: 1277210,
    rating: 3,
    summary: 'fsafsafsafsafs',
    recommend: true,
    response: null,
    body: 'safafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsafsa?????????',
    date: '2022-10-25T00:00:00.000Z',
    reviewer_name: 'fsafsafsa',
    helpfulness: 2,
    photos: [],
  };

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
    const under250 = parseReview.body.slice(0, 251);
    const over250 = parseReview.body.slice(251);
    return (
      <div>
        {showMore ? parseReview.body : under250}
        <button
          type="button"
          onClick={
            (evt) => {
              evt.preventDefault();
              setShowMore(true);
            }
          }
        >
          Show More
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
      {parseReview.recommend === true && <p>I recommend this product</p>}
      {parseReview.response && <p>{parseReview.response}</p>}
      {/* was this review helpful */}
      <button type="button">Report</button>
      <p />
    </div>
  );
}

export default SingleReview;
