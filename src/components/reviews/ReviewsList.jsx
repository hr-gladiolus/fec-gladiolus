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
  const [sortOption, setSortOption] = useState('Relevant');

  const { filter } = props;

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

  const sortReviews = () => {

  };

  // pulls reviews when product changes
  useEffect(() => {
    getReviews(product, sortOption)
      .then((result) => {
        setReviews(result);
      });
  }, []);

  // changes sort of reviews when new sort option is chosen
  useEffect(() => {
    sortReviews();
  }, [sortOption]);

  return (
    <div>

      {/* number of reviews, sort selector */}
      <SortReviews sortOption={sortOption} setSortOption={setSortOption} />

      {/* serarch for keyword */}
      <SearchBar placeholder="Search for a Keyword" />

      {/* review list */}
      {reviews.map((review) => (
        <SingleReview
          review={review}
          key={review.review_id}
          id={review.review_id}
        />
      ))}

      {/* more reviews button */}
      <button type="button">More Reviews</button>

    </div>
  );
}

export default ReviewsList;
