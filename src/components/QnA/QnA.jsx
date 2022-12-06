import React from 'react';
import axios from 'axios';
import More from './More.jsx';
import Container from './styles/Container.styled.js';
import Search from './Search.jsx';
import Qlist from './Qlist.jsx';
import TopQA from './styles/TopQA.styled.js';
import NoQues from './styles/NoQues.styled.js';
import sampleData from './sampleData';

function Qna({ environment, API }) {
  const [product, setProduct] = React.useState(1);
  const [queList, setQueList] = React.useState([]);
  const [staticList, setStaticList] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions', {
      headers: {
        Authorization: API,
      },
      params: {
        product_id: product,
      },
    })
      .then((value) => {
        // value.data.results will have the real data to load once everything
        // is working and data has been submitted to the API.
        setQueList(sampleData);
        setStaticList(sampleData);
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
      { staticList.length ? <Qlist queList={queList} /> : null }
      { staticList.length && !queList.length ? <NoQues>{ noMatches }</NoQues> : null }
      <More queList={queList} />
    </Container>
  );
}

export default Qna;
