import React from 'react';
import axios from 'axios';
import Container from './styles/Container.styled.js';
import Search from './comps/Search.jsx';
import Qlist from './comps/Qlist.jsx';
import More from './comps/More.jsx';
import MoreModal from './comps/MoreModal.jsx';
import TopQA from './styles/TopQA.styled.js';
import NoQues from './styles/NoQues.styled.js';
import sampleData from './sampleData';

function Qna({ environment }) {
  const [product, setProduct] = React.useState(1);
  const [showMoreModal, setShowMoreModal] = React.useState(false);
  const [queList, setQueList] = React.useState([]);
  const [staticList, setStaticList] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://127.0.0.1:3000/questions', {
      params: {
        product_id: product,
      },
    })
      .then((value) => {
        // value.data.results
        setQueList(sampleData);
        setStaticList(sampleData);
        // setQueList(value.data.results);
        // this will set the data for the question list.
        // However, how their API starts, it has no data currently so use sample data instead.
      });
  }, []);

  const toggleMoreModal = (e) => {
    setShowMoreModal(!showMoreModal);
  };

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
      <More toggleModal={() => { toggleMoreModal(); }} queList={queList} />
      {showMoreModal ? <MoreModal /> : null}
    </Container>
  );
}

export default Qna;
