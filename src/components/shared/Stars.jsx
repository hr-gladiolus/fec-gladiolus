import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  display: inline-block;
  position: relative;
  font-family: FontAwesome;
  &:before {
    content: "\f006 \f006 \f006 \f006 \f006";
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${(props) => ((Math.round(props.rating * 4) / 4) * 20)}%;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    color: #f8ce0b;
  }
`;

export default function Stars({ rating }) {
  return (
    <Outer>
      <Inner rating={rating} />
    </Outer>
  );
}
