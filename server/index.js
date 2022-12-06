const axios = require('axios');
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../public')));

app.route('/questions')
  .get((req, res) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions', {
      headers: {
        Authorization: process.env.API_TOKEN,
      },
      params: req.query,
    })
      .then((value) => {
        res.send(value.data);
      });
  });

app.listen(3000);
// eslint-disable-next-line no-console
console.log('Listening on port 3000');
