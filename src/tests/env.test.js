require('dotenv').config();
const axios = require('axios');

it('Reads .env to send a GET request', (done) => {
  axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/',
    method: 'get',
    headers: {
      Authorization: process.env.API_TOKEN,
    },
  }).then((res) => {
    expect(res.data.length).toEqual(5);
    done();
  }).catch((err) => {
    done(err);
  });
});
