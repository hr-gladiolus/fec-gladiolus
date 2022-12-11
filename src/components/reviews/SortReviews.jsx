import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import SingleReview from './SingleReview.jsx';

const SelectContainer = styled.div`
display: flex;
flex-direction: row;
padding: 5px;
`;

const NumberReviews = styled.div`
  padding: 5px;
`;

const DropdownContent = styled.div`
  /* display: block; */
`;

const DropdownMenu = styled.div`
`;
const DropdownButton = styled.div`
  text-decoration: underline;
`;

const DropdownOption = styled.div`
  display: block;
  color: #000000;
  padding: 5px;

  &:hover {
    color: #FFFFFF;
    background-color: #5a6466;
  }
`;

function SortReviews(props) {
  const { sortOption, setSortOption } = props;
  const [display, setDisplay] = useState(false);
  const data = useSelector((state) => state.product.productData);

  const options = ['Relevant', 'Newest', 'Helpful'];

  const handleClick = () => {
    setDisplay(!display);
  };

  const selectOption = (option) => {
    setDisplay(!display);
    setSortOption(option);
  };

  const showMenu = () => (
    <DropdownContent>
      {options.map((option) => (
        option !== sortOption
          && (
            <DropdownOption
              key={option}
              value={option}
              onClick={(evt) => {
                evt.preventDefault();
                selectOption(option);
              }}
            >
              {option}
            </DropdownOption>
          )
      ))}
    </DropdownContent>
  );

  return (
    <SelectContainer>

      <NumberReviews>
        {data.total_reviews}
        {' '}
        reviews, sorted by
        {' '}
      </NumberReviews>

      <DropdownMenu>
        <DropdownButton
          onClick={(evt) => {
            evt.preventDefault();
            handleClick();
          }}
        >
          {sortOption}
          {' '}
          <IoIosArrowDown />
        </DropdownButton>

        {display && showMenu()}

      </DropdownMenu>

    </SelectContainer>
  );
}

export default SortReviews;
