import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleReview from './SingleReview.jsx';
import { getReviews } from './api.js';
import SortReviews from './SortReviews.jsx';

const SortContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const NumberReviews = styled.div``;

const SortMenu = styled.button`
  color: black;
  padding: 5px;
  font-size: 16px;
  border: none;

  &:hover {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  &:hover {
    background-color: #ddd;
    }
`;

const SortOption = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Relevant');

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

  useEffect(() => {
    getReviews(product)
      .then((result) => {
        const newReviews = result;
        setReviews(newReviews);
      });
  }, []);

  return (
    <div>

      {/* number of reviews, sort selector */}

      <SortReviews selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

      {/* <SortContainer>
        <NumberReviews>number of reviews</NumberReviews>
        <SortMenu onClick={toggle}>
          {' '}
          {selectedOption}
          {isOpen && }
          <DropdownContent>
            {options.map((option) => (
              <SortOption
                key={option}
                value={option}
                onClick={(evt) => {
                  evt.preventDefault();
                  handleClick(option);
                }}
              >
                {option}
              </SortOption>
            ))}
          </DropdownContent>
        </SortMenu>
      </SortContainer> */}

      {/* review list */}
      {reviews.map((review) => (
        <SingleReview
          review={review}
          key={review.review_id}
          id={review.review_id}
        />
      ))}
    </div>
  );
}

export default ReviewsList;
