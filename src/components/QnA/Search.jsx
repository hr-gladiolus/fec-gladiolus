import React from 'react';
import { SlMagnifier } from 'react-icons/sl';
import Comp from './styles/Comp.styled.js';
import Searchform from './styles/Searchform.styled.js';
import Searchinput from './styles/Searchinput.styled.js';
import Searchbutton from './styles/Searchbutton.styled.js';

function Search({ staticList, setQueList }) {
  const [input, setInput] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // in here I'll do the stuff with the values retrieved from the input
    setQueList(staticList.filter(
      (question) => question.question_body.toLowerCase().includes(input.toLowerCase()),
    ));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Comp>
      <Searchform onSubmit={handleSubmit}>
        <Searchinput onChange={handleChange} placeholder="HAVE QUESTION? SEARCH FOR ANSWERS..." />
        <Searchbutton><SlMagnifier size="15px" /></Searchbutton>
      </Searchform>
    </Comp>
  );
}

export default Search;
