'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var mailer = require('./mailer');
var weatherApi = require('./weatherApi');

var app = express();

// Accesses post body data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
app.post('/contact', mailer.contact);

// Weather routes
app.get('/weather', routes.weather);

// Weather post request
app.post('/weather', function(req, res){
	weatherApi.apiCall(req.body, res);
});

// 404 error


app.listen(3000, function(){
	console.log("Frontend server running on port 3000...");
});