import React, { useState } from 'react';
import axios from 'axios';
import More from './More.jsx';
import Container from './styles/Container.styled.js';
import Search from './Search.jsx';
import Qlist from './Qlist.jsx';
import TopQA from './styles/TopQA.styled.js';
import NoQues from './styles/NoQues.styled.js';
import sampleData from './sampleData';

const API = require('../../config').API_TOKEN;

function Qna({ environment }) {
  // I will need to get either the full product object or jsut the product name and ID
  // passed into the component as props
  // but for now I will just have name and ID be placeholders.
  // I will need the full product object and can take the name and ID from that

  const [productName, setProductName] = useState('generic name');
  const [productID, setProductID] = useState(37324);
  const [queList, setQueList] = useState([]);
  const [staticList, setStaticList] = useState([]);

  React.useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions', {
      headers: {
        Authorization: API,
      },
      params: {
        product_id: productID,
      },
    })
      .then((value) => {
        // value.data.results will have the real data to load once everything
        // is working and data has been submitted to the API.
        setQueList(value.data.results);
        setStaticList(value.data.results);
        // setQueList(value.data.results);
        // this will set the data for the question list.
        // However, how their API starts, it has no data currently so use sample data instead.
      });
  }, []);

  const noneText = 'THERE APPEARS TO BE NO QUESTIONS FOR THIS PRODUCT, WOULD YOU LIKE TO ADD ONE?';

  const noMatches = 'THERE APPEAR TO BE NO QUESTIONS MATCHING YOUR SEARCH? WOULD YOU LIKE TO ADD ONE?';

  return (
    <Container>
      <TopQA>QUESTIONS &#38; ANSWERS</TopQA>
      { staticList.length ? (
        <Search
          staticList={staticList}
          setQueList={(e) => setQueList(e)}
        />
      ) : <NoQues>{ noneText }</NoQues> }
      { staticList.length && !queList.length ? <NoQues>{ noMatches }</NoQues> : null }
      { staticList.length && (
        <Qlist
          queList={queList}
          productID={productID}
          productName={productName}
        />
      ) }
    </Container>
  );
}

export default Qna;
