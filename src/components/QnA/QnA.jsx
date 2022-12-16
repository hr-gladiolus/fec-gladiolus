import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import More from './More.jsx';
import Search from './Search.jsx';
import Qlist from './Qlist.jsx';
import ExpandedView from './comps/ExpandedView.jsx';
import { getQuestions } from './requestHelpers';

const API = require('../../config').API_TOKEN;

const Container = styled.div`
  display: flex;
  place-content: center;
  width: 53.5%;
  min-width: 530px;
  margin: auto;
  flex-direction: column;
  position: relative;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const NoQues = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
`;

const TopQA = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
`;

const Absolute = styled.div`
  position: absolute;
  top: 0;
`;

const OuterDiv = styled.div`
  position: relative;
`;

function Qna({ environment }) {
  // I will need to get either the full product object or jsut the product name and ID
  // passed into the component as props
  // but for now I will just have name and ID be placeholders.
  // I will need the full product object and can take the name and ID from that
  const productID = useSelector((state) => state.product.productId);
  const products = useSelector((state) => state.product.products);
  const [queList, setQueList] = useState([]);
  const [staticList, setStaticList] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState('');

  function selectPhoto(photo) {
    setCurrentPhoto(photo);
  }

  function unselectPhoto() {
    setCurrentPhoto('');
  }

  useEffect(() => {
    getQuestions(productID, 1, 100)
      .then((value) => {
        // value.data.results will have the real data to load once everything
        // is working and data has been submitted to the API.
        setQueList(value.data.results);
        setStaticList(value.data.results);
        // setQueList(value.data.results);
        // this will set the data for the question list.
        // However, how their API starts, it has no data currently so use sample data instead.
      });
  }, [productID]);

  const noneText = 'THERE APPEARS TO BE NO QUESTIONS FOR THIS PRODUCT, WOULD YOU LIKE TO ADD ONE?';

  const noMatches = 'THERE APPEAR TO BE NO QUESTIONS MATCHING YOUR SEARCH? WOULD YOU LIKE TO ADD ONE?';

  return (
    <OuterDiv>
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
            product={products[productID]}
            selectPhoto={selectPhoto}
          />
        ) }
      </Container>
      {currentPhoto && (
        <ExpandedView unselectPhoto={unselectPhoto} photo={currentPhoto} />
      )}
    </OuterDiv>
  );
}

export default Qna;
