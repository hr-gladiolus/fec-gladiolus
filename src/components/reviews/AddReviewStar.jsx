import React from 'react';
import styled from 'styled-components';

const StarContainer = styled.div``;

const StarButton = styled.div`
  display: inline-block;
  position: relative;
  font-family: FontAwesome;
  &:before {
    content: "\f006";
  }
`;

const Star = styled.div`
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

  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarButton
          key={star}
          onClick={(evt) => {
            evt.preventDefault();
            setStarRating(star);
          }}
        >
          <Star rating={starRating} />
        </StarButton>
      ))}
    </StarContainer>

  );
}

export default AddReviewStar;
