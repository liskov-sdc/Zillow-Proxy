var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/:id', express.static(__dirname+'/../client'));
// app.use(express.static(__dirname+'/../client'));
var port = 3000;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

