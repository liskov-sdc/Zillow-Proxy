require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const port = 3004;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/:id', express.static(__dirname + '/../client'));
app.use('/', (req, res) => {
  res.redirect('/1');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

