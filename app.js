'use strict';

var express = require('express');
var app = express();


app.get('/', function(req,res){
	res.status(200).send('Hello, This is our world!');
});

var server = app.listen(process.env.PORT || '8080', function(){
	console.log('App listening on port %s', server.address().port);
	console.log('Press Ctrl+C to quit');
});

// JSX => Mark-up for react