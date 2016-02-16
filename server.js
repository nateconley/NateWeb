'use strict';

var express = require('express'),
			   fs = require('fs');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
	res.render('index');
});

app.listen(3000, function(){
	console.log("Frontend server running on port 3000...");
});