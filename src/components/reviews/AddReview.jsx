/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function AddReview() {
  const productId = 37324;
  const blankForm = {
    product_id: productId,
    rating: 0,
    summary: '',
    body: '',
    recommend: false,
    name: '',
    email: '',
    photos: [],
    characteristics: {},
  };
  const [reviewInput, setReviewInput] = useState(blankForm);
  const [charCount, setCharCount] = useState(0);

  return (
    <div>
      <form>
        <h2>Write Your Review</h2>
        <h3>About the INSERT PRODUCT NAME HERE</h3>
        {/* insert star rating here - will add after we get it figured out */}
        <p>star rating</p>
        <p>Do You Recommend This Product?</p>
        <label>
          <input type="radio" value="yes" />
          Yes
        </label>
        <label>
          <input type="radio" value="no" />
          No
        </label>
        <p>characteristics here</p>
        {/* need GET request to reviews/meta for characteristics */}
        <label>
          Review Summary
          <br />
          <input type="text" placeholder="Example: Best Purchase Ever!" maxLength="60" />
        </label>
        <br />
        <label>
          Review
          <br />
          <input
            type="text"
            placeholder="Why did you like the product or not?"
            maxLength="1000"
            onChange={(evt) => setCharCount(evt.target.value.length)}
          />
          {charCount < 50 ? (
            <p>
              Minimum Required Characters Left
              {' '}
              {50 - charCount}
            </p>
          ) : <p>Minimum Reached</p> }
        </label>
        {/* insert images */}
        <label>
          What is your nickname?
          <input type="text" placeholder="Example: jackson11!" />
        </label>
        <p>For privacy reasons, do not use your full name or email address</p>
        <label>
          Email Address
          <input type="text" placeholder="Example: jackson11@email.com" />
        </label>
        <p>For authentication reasons, you will not be emailed</p>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default AddReview;
