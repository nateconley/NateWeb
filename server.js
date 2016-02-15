// var http = require('http');
// var fs = require('fs');

// var index = fs.readFileSync('./html/index.html');

// var server = http.createServer(function(request, response){
// 	response.writeHead(200, {'Content-type': 'text/html'});
// 	response.write(index);
// 	response.end();
// });

// server.listen(3000, function(){
// 	console.log("server running on port 3000");
// })
'use strict';

var express = require('express'),
			   fs = require('fs');

var app = express();

app.get('/', function(req, res){
	res.send("<h1>Hello World!</h1>");
});

app.listen(3000, function(){
	console.log("Frontend server running on port 3000...");
});