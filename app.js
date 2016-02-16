'use strict';

var express = require('express');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

// Home route
app.get('/', function(req, res){
	res.render('index');
});

// Beatles route
app.get('/beatles', function(req, res){
	res.sendFile(__dirname + '/public/html/beatles.html');
});

// Weather route
app.get('/weather', function(req, res){
	
});

// 404 error


app.listen(3000, function(){
	console.log("Frontend server running on port 3000...");
});