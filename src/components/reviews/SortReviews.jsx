import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleReview from './SingleReview.jsx';

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

const NumberReviews = styled.div``;

const SelectButton = styled.button`
  background-color: #fff;
  border: none;
  color: #111;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: #eee;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  transition: max-height 0.2s ease;
  visibility: hidden;
`;

const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover, :focus, :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
  }
`;

function SortReviews(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedOption, setSelectedOption } = props;

  const toggle = () => setIsOpen(!isOpen);
  const options = ['Relevant', 'Newest', 'Helpful'];

  const handleClick = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
  };

  return (
    <SelectContainer>
      <NumberReviews>reviews</NumberReviews>
      <SelectButton onClick={handleClick}>{selectedOption}</SelectButton>
      <Dropdown isVisible={isOpen}>
        {options.map((option) => (
          <DropdownOption
            key={option}
            value={option}
            onClick={(evt) => {
              evt.preventDefault();
              handleClick(option);
            }}
          >
            {option}
          </DropdownOption>
        ))}
      </Dropdown>
    </SelectContainer>
  );
}

export default SortReviews;
