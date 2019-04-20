require('newrelic');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const React = require('react');
const Layout = require('./template');

import FactsFeatures from "../services/facts/index.jsx";
import Description from "../services/description/app.jsx";
import Gallery from "../services/gallery/index.jsx";

let renderToString = require("react-dom/server").renderToString;

let reactObj = {}
const gallery = (<Gallery />);
reactObj.gallery = renderToString(gallery);
const description = (<Description />);
reactObj.description = renderToString(description);   
const factsfeatures = (<FactsFeatures/>);
reactObj.facts = renderToString(factsfeatures);
let page = Layout(reactObj);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/:id', express.static(__dirname+'/../client'));
app.use('/', express.static(__dirname+'/../client'));

app.get('/:id', function (req, res) {

    res.writeHead( 200 , {"Content-Type": "text/html"});
    res.end(page);  

});


var port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

