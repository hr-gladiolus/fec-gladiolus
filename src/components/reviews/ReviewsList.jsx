import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleReview from './SingleReview.jsx';
import { getReviews } from './api.js';
import SortReviews from './SortReviews.jsx';

const ReviewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled.input`
`;

function ReviewsList(props) {
  const [reviews, setReviews] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Relevant');

  const { filter } = props;

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

      {/* serarch for keyword */}
      <SearchBar placeholder="Search for a Keyword" />
      <p>search for keyword</p>

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
