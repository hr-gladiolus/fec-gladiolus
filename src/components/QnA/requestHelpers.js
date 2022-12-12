import axios from 'axios';

const API = require('../../config').API_TOKEN;

function submitQorA(isQuestion, body, name, email, id, photos) {
  let htmlParam;
  const parameters = {};

  const bodyParams = {
    body,
    name,
    email,
  };

  if (isQuestion) {
    htmlParam = '';
    bodyParams.product_id = Number(id);
  } else {
    htmlParam = `/${id}/answers`;
    bodyParams.photos = photos;
    parameters.question_id = id;
  }
  console.log(photos);
  return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions${htmlParam}`, bodyParams, {
    headers: {
      Authorization: API,
    },
    params: parameters,
  });
}

function submitHelpful(isQuestion, id) {
  let htmlParam;
  const parameters = {};
  if (isQuestion) {
    // set html parameter to be put inside the html string
    htmlParam = 'questions';
    // create parameter body to be sent along as data for the put request
    parameters.question_id = id;
  } else {
    htmlParam = 'answers';
    parameters.answer_id = id;
  }
  // universal put request
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/${htmlParam}/${id}/helpful`, null, {
    headers: {
      Authorization: API,
    },
    params: parameters,
  });
}

function submitReport(id) {
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${id}/report`, null, {
    headers: {
      Authorization: API,
    },
    params: {
      answer_id: id,
    },
  });
}

export { submitQorA, submitHelpful, submitReport };
