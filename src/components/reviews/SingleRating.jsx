/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Row = styled.button`
  display: flex;
  max-width: 300px;
  width: 100%;
  height: auto;
  flex-direction: row;
  background: transparent;
  border: none;
  margin: 10px 0 10px 0;
  justify-content: space-between;
  transition: transform .2s;

  &:after {
  content: "";
  display: table;
  clear: both;
  }
  &:hover {
  transform: scale(1.1);
  }
`;

const StarRating = styled.div`
  float: left;
  width: 15%;
  font-size: 15px;
  border: none;
  padding: 10px 0 10px 0;
  text-align: left;
`;

const Invisible = styled.div`
  visibility: hidden;
`;

const Middle = styled.div`
  margin-top: 15px;
  width: 70%;
  padding-left: 5px;
  height: 5px;
  align: center;
  display: block;
`;

const Right = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin: 10px 0 0 5px;
  float: right;
  font-size: 15px;
  display: block;
`;

const BottomBar = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.highlight};
  align: center;
  color: white;
`;

const TopBar = styled.div`
  width: ${(props) => props.width}%;
  height: 8px;
  background: ${({ theme }) => theme.color};
`;

function SingleRating(props) {
  const {
    number, selectedFilters, setSelectedFilters, setFilter,
  } = props;

  const product = useSelector((state) => state.product.productId);
  const data = useSelector((state) => state.product.productData);

  const handleClick = (currentNumber) => {
    setSelectedFilters({
      ...selectedFilters,
      [currentNumber]: !selectedFilters[currentNumber],
    });
    setFilter(true);
  };

  return (
    <div>
      <Row onClick={(evt) => handleClick(number)}>
        <StarRating>
          {number === '1' ? (
            <u>
              1  star
              <Invisible>s</Invisible>
            </u>
          ) : (
            <u>{`${number} stars`}</u>
          )}
        </StarRating>

        <Middle>
          <BottomBar>
            <TopBar width={data.ratings ? (data.ratings[number] / data.total_reviews) * 100 : 0} />
          </BottomBar>
        </Middle>

        <Right>{data.ratings ? data.ratings[number] : null}</Right>
      </Row>
    </div>

  );
}

export default SingleRating;
