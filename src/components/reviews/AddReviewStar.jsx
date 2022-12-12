import React, { useState } from 'react';
import styled from 'styled-components';

const StarContainer = styled.div``;

const OuterStar = styled.button`
  display: inline-block;
  position: relative;
  font-family: FontAwesome;
  &:before {
    content: "\f006";
  }
  /* &:hover {
    content: "\f005";
    color: #f8ce0b;
  } */
`;

const InnerStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${(props) => (props.rating * 20)}%;
  &:before {
    content: "\f005";
    color: #f8ce0b;
  }
`;

function AddReviewStar(props) {
  const { starRating, setStarRating } = props;
  const { reviewInput, setReviewInput } = props;

  const [filledIn, setFilledIn] = useState(false);

  const fillInStars = (rating) => (
    <div>
      <InnerStar width={rating} />
    </div>

  );
  return (
    <StarContainer>

      {filledIn === false && [1, 2, 3, 4, 5].map((star) => (
        <OuterStar
          key={star}
          value={star}
          onClick={(evt) => {
            evt.preventDefault();
            setStarRating(evt.target.value);
            fillInStars(evt.target.value);
            setReviewInput(reviewInput.rating);
          }}
        />
      ))}
      <InnerStar />
    </StarContainer>

  );
}

export default AddReviewStar;
