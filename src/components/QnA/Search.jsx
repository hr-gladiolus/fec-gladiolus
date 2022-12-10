import React from 'react';
import styled from 'styled-components';
import { SlMagnifier } from 'react-icons/sl';
import Comp from './styles/Comp.styled.js';

const Searchbutton = styled.div`
  position: absolute;
  right: 2%;
  top: 25%;
`;

const Searchinput = styled.input`
  width: 100%;
  padding: 1.95% 0% 1.95% 1.95%;
  display: inline-block;
  border-width: 1.2px;
  background-color: ${({ theme }) => theme.bg}

  ::placeholder {
    color: black;
    opacity: 1;
  }
`;

const Searchform = styled.form`
  display: flex;
  place-content: center;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 0.1);
  margin: 0 0 6px 0;
  position: relative;
`;

function Search({ staticList, setQueList }) {
  const handleChange = (e) => {
    e.preventDefault();
    // in here I'll do the stuff with the values retrieved from the input
    // need to only change display questions once three or more letters have been inputted.
    // what you could do, and it might take a lot more computing power,
    // but it would great improve the search function,
    // is you could split the e.target.value at each space meaning ' '
    // and then you have all the individual words or word fragments.
    // you could then check those words and fragments against each question body.
    // And say something like if 65% or more of them are a match, then return that question
    // otherwise don't.
    // In that case it wouldn't jsut return exact matches, but also close matches
    // and even account for some mistakes and misspellings.
    if (e.target.value.length > 2) {
      setQueList(staticList.filter(
        (question) => question.question_body.toLowerCase().includes(e.target.value.toLowerCase()),
      ));
    } else {
      setQueList(staticList);
    }
  };

  return (
    <Comp>
      <Searchform>
        <Searchinput onChange={handleChange} placeholder="HAVE QUESTION? SEARCH FOR ANSWERS..." />
        <Searchbutton><SlMagnifier size="20px" /></Searchbutton>
      </Searchform>
    </Comp>
  );
}

export default Search;
