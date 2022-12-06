const express = require('express');
const path = require('path');

const app = express();
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/products', (req, res) => {

});

app.get('/cart', (req, res) => {

});

app.post('/cart', (req, res) => {

});

app.listen(3000);
// eslint-disable-next-line no-console
console.log('Listening on port 3000');
