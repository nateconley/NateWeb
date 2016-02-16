'use strict';

var express = require('express');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
	res.render('index');
});

app.listen(3000, function(){
	console.log("Frontend server running on port 3000...");
});