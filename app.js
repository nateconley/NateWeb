'use strict';

var express = require('express');
var routes = require('./routes')

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

// Home route
app.get('/', routes.index);

// Beatles route
app.get('/beatles', routes.beatles);

// Weather route
app.get('/weather', routes.weather);

// contact form
app.post('/contact', function(req,res){
	console.log();
});

// 404 error


app.listen(3000, function(){
	console.log("Frontend server running on port 3000...");
});