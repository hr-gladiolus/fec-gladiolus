/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleReview from './SingleReview.jsx';
import { getReviews } from './api.js';
import SortReviews from './SortReviews.jsx';

const ReviewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: 300px;
`;

const SearchBar = styled.input`
`;

const ShowMoreButton = styled.div``;

function ReviewsList(props) {
  const [sortOption, setSortOption] = useState('Relevant');
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState([]);
  const [index, setIndex] = useState(2);
  const [numberOfReviews, setNumberOfReviews] = useState();

  const { filter, selectedFilters } = props;

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

  const sortReviews = () => {

  };

  const showMoreReviews = () => {
    setCurrentReviews(reviews.slice(0, index));
    setIndex(index + 2);
  };

  useEffect(() => {
    getReviews(product, sortOption)
      .then((result) => {
        setReviews(result);
        setCurrentReviews(result.slice(0, 2));
        setNumberOfReviews(result.length);
      });
  }, [product, sortOption]);

  return (
    <div>

      <SortReviews sortOption={sortOption} setSortOption={setSortOption} numberOfReviews={numberOfReviews} />

      <SearchBar placeholder="Search for a Keyword" />

      <ReviewsListContainer>
        {currentReviews.map((review) => (
          <SingleReview
            review={review}
            key={review.review_id}
            id={review.review_id}
          />
        ))}
      </ReviewsListContainer>

      {/* more reviews button */}
      {reviews.length > 2
      && currentReviews.length < 100
      && (
        <ShowMoreButton
          onClick={(evt) => {
            evt.preventDefault();
            showMoreReviews();
          }}
        >
          More Reviews
        </ShowMoreButton>
      )}

    </div>
  );
}

export default ReviewsList;
