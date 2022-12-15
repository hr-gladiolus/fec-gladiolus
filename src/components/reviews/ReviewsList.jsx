/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleReview from './SingleReview.jsx';
import { getReviews } from './api.js';
import SortReviews from './SortReviews.jsx';
import useModal from '../shared/useModal.js';
import Modal from '../shared/Modal.jsx';
import AddReview from './AddReview.jsx';

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
`;

const ReviewsListContainer = styled.div`
  display: inline-block;
  overflow-y: scroll;
  max-height: 1000px;
`;

const SearchBar = styled.input`
  margin: 10px 0;
`;

const ShowAddButton = styled.div`
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
  padding: 15px;
  width: auto;
  text-align: center;
  border: 1px solid black;
  margin-right: 10px;
  &:hover {
    background: pink;
  }
  &:active {
    background: blue;
  }
`;

const AddReviewButton = styled.div`

`;

function ReviewsList(props) {
  const [sortOption, setSortOption] = useState('Relevant');
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState([]);
  const [index, setIndex] = useState(2);
  const [numberOfReviews, setNumberOfReviews] = useState();

  const { filter, selectedFilters, setFilter } = props;
  const { visible, toggle } = useModal();

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

  const filterReviews = (reviewsData) => setCurrentReviews(reviewsData.filter((review) => selectedFilters[review.rating] === true));

  const showMoreReviews = () => {
    setCurrentReviews(reviews.slice(0, index));
    setIndex(index + 2);
  };

  useEffect(() => {
    getReviews(product, sortOption)
      .then((result) => {
        setReviews(result);
        setNumberOfReviews(result.length);
        return filter ? filterReviews(result) : setCurrentReviews(result.slice(0, 2));
      });
  }, [product, sortOption]);

  useEffect(() => ((filter && (Object.values(selectedFilters)).includes(true))
    ? filterReviews(reviews)
    : setCurrentReviews(reviews.slice(0, 2))), [filter, selectedFilters]);

  return (
    <div>

      <SortReviews sortOption={sortOption} setSortOption={setSortOption} numberOfReviews={numberOfReviews} />

      <SearchBar placeholder="Search for a Keyword" />

      <ReviewsListContainer data-testid="reviews-container">
        {currentReviews.map((review) => (
          <SingleReview
            review={review}
            key={review.review_id}
            id={review.review_id}
          />
        ))}
      </ReviewsListContainer>

      {reviews.length > 2
      && currentReviews.length < reviews.length
      && (
        <ShowAddButton onClick={(evt) => showMoreReviews()}>
          More Reviews
        </ShowAddButton>
      )}

      <ShowAddButton type="button" onClick={toggle}>Add Review +</ShowAddButton>
      <Modal visible={visible} toggle={toggle}>
        <AddReview />
      </Modal>

    </div>
  );
}

export default ReviewsList;
