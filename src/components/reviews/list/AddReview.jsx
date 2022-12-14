/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useModal from '../../shared/useModal.js';
import Modal from '../../shared/Modal.jsx';

function AddReview() {
  // productId will be gotten through state whenever we figure it out
  const product = useSelector((state) => state.product.productId);
  const productId = product;
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
  const { visible, toggle } = useModal();
  const [reviewInput, setReviewInput] = useState(blankForm);
  const [charCount, setCharCount] = useState(0);
  const [recommend, setRecommend] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setReviewInput({
      ...reviewInput,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <h2>Write Your Review</h2>
        <h3>About the INSERT PRODUCT NAME HERE</h3>

        {/* insert star rating here - will add after we get it figured out */}
        <p>star rating</p>

        {/* do you reccomend product */}
        <p>Do You Recommend This Product?</p>
        <label>
          <input
            data-testid="yes"
            type="radio"
            value={reviewInput.recommend}
            name="recommend"
            onChange={
              (evt) => {
                setRecommend(true);
                handleChange(evt);
              }
            }
          />
          Yes
        </label>
        <label>
          <input
            data-testid="no"
            type="radio"
            value={reviewInput.recommend}
            name="recommend"
            onChange={
              (evt) => {
                setRecommend(false);
                handleChange(evt);
              }
            }
          />
          No
        </label>

        <p>characteristics here</p>
        {/* need GET request to reviews/meta for characteristics */}

        {/* review summary */}
        <label>
          Review Summary
          <br />
          <input
            type="text"
            placeholder="Example: Best Purchase Ever!"
            maxLength="60"
            value={reviewInput.summary}
            name="summary"
            onChange={
              (evt) => {
                handleChange(evt);
              }
            }
          />
        </label>
        <br />

        {/* review */}
        <label>
          Review
          <br />
          <input
            data-testid="body"
            type="text"
            placeholder="Why did you like the product or not?"
            maxLength="1000"
            value={reviewInput.body}
            name="body"
            onChange={
              (evt) => {
                setCharCount(evt.target.value.length);
                handleChange(evt);
              }
            }
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
        <button
          type="button"
          onClick={toggle}
        >
          Upload Photos
        </button>
        <br />

        {/* nickname */}
        <label>
          What is your nickname?
          <br />
          <input
            type="text"
            placeholder="Example: jackson11!"
            value={reviewInput.name}
            name="name"
            onChange={
              (evt) => {
                handleChange(evt);
              }
            }
          />
        </label>
        <p>For privacy reasons, do not use your full name or email address</p>

        {/* email address */}
        <label>
          Email Address
          <br />
          <input
            data-testid="email"
            type="text"
            placeholder="Example: jackson11@email.com"
            value={reviewInput.email}
            name="email"
            onChange={
              (evt) => {
                handleChange(evt);
              }
            }
          />
        </label>
        <p>For authentication reasons, you will not be emailed</p>

        {/* submit button */}
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default AddReview;
