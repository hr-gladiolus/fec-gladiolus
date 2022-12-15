import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import SingleReview from './SingleReview.jsx';

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

const NumberReviews = styled.div`
  padding: 5px 5px 5px 0;
`;

const DropdownContent = styled.div`
`;

const DropdownMenu = styled.div`
  margin-top: 3px;
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
  const { sortOption, setSortOption, numberOfReviews } = props;
  const [display, setDisplay] = useState(false);
  const data = useSelector((state) => state.product.productData);

  const options = ['Relevant', 'Newest', 'Helpful'];

  const selectOption = (option) => {
    setDisplay(!display);
    setSortOption(option.toLowerCase());
  };

  const showMenu = () => (
    <DropdownContent>
      {options.map((option) => (
        option !== sortOption
          && (
            <DropdownOption
              key={option}
              value={option}
              onClick={(evt) => selectOption(option)}
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
        {numberOfReviews}
        {' '}
        reviews, sorted by
        {' '}
      </NumberReviews>

      <DropdownMenu>
        <DropdownButton onClick={(evt) => setDisplay(!display)}>
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
