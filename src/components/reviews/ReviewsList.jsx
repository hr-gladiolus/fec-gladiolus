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
  const [reviews, setReviews] = useState([]);
  const [sortOption, setSortOption] = useState('Relevant');
  // reviews currently shown on page
  const [currentReviews, setCurrentReviews] = useState([]);
  // index for slicing reviews array
  const [index, setIndex] = useState(2);

  // filter is toggle for rating filter
  // selectedFilters are current ratings to show
  const { filter, selectedFilters } = props;

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);
  const numberOfReviews = data.total_reviews;

  const sortReviews = () => {

  };

  const showMoreReviews = () => {
    setCurrentReviews(reviews.slice(0, index));
    setIndex(index + 2);
  };

  // pulls reviews when product changes
  useEffect(() => {
    getReviews(product, sortOption, numberOfReviews)
      .then((result) => {
        setReviews(result);
        setCurrentReviews(result.slice(0, 2));
      });
  }, []);

  // changes sort of reviews when new sort option is chosen
  useEffect(() => {
    getReviews(product, sortOption, numberOfReviews)
      .then((result) => {
        setReviews(result);
        setCurrentReviews(result.slice(0, 2));
      });
  }, [sortOption]);

  return (
    <div>

      <SortReviews sortOption={sortOption} setSortOption={setSortOption} />

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
      {numberOfReviews > 2
      && currentReviews.length < reviews.length
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
