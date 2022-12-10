import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleReview from './SingleReview.jsx';

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const NumberReviews = styled.div``;

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const SelectButton = styled.button`
  background-color: #fff;
  border: none;
  color: #111;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease;
`;

const DropdownOption = styled.div`
  display: flex;
  align-items: center;
`;

function SortReviews(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedOption, setSelectedOption } = props;

  const toggle = () => setIsOpen(!isOpen);
  const options = ['Relevant', 'Newest', 'Helpful'];

  const handleClick = (option) => {
    setIsOpen(!isOpen);
    setSelectedOption(option);
  };

  const dropdownMenu = () => (
    <div>
      {options.map((option) => (
        <DropdownOption
          key={option}
          value={option}
          onClick={(evt) => {
            evt.preventDefault();
            handleClick(option);
          }}
        />
      ))}
    </div>

  );

  return (
    <SelectContainer>
      <NumberReviews>reviews</NumberReviews>
      <SelectButton onClick={toggle}>selected option</SelectButton>
      <Dropdown>
        {isOpen && dropdownMenu()}
      </Dropdown>
    </SelectContainer>
  );
}

export default SortReviews;
