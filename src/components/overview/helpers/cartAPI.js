// eslint-disable-next-line import/newline-after-import
const axios = require('axios');
const config = rtequire('../../config.js');

const auth = {
  headers:
  {
    Authorization: `${config.API_TOKEN}`,
  },
};
