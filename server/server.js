require('newrelic');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var redis = require('redis').createClient();
var lru = require('redis-lru');
var pageCache = lru(redis, 50000, {maxAge: 86400000});

const React = require('react');
const ReactDom = require('react-dom/server');
const Layout = require('./template');

import FactsFeatures from "../services/facts/index.jsx"
import Description from "../services/description/app.jsx"
import Gallery from "../services/gallery/index.jsx"

import { renderToString } from "react-dom/server";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/:id', express.static(__dirname+'/../client'));
app.use('/', express.static(__dirname+'/../client'));
app.get('/:id', function (req, res) {

    let promise = pageCache.getOrSet(req.params.id, () =>{
            let reactObj = {}
            const gallery = (<Gallery />);
            reactObj.gallery = renderToString(gallery);
            const description = (<Description />);
            reactObj.description = renderToString(description);   
            const factsfeatures = (<FactsFeatures/>);
            reactObj.facts = renderToString(factsfeatures);
            let temp = Layout(reactObj);
            return temp;

    });
    promise.then(page =>{
            res.writeHead( 200 , {"Content-Type": "text/html"});
            res.end(page);  

    });



});


var port = 3000;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

