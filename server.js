var http = require('http');
var fs = require('fs');

var index = fs.readFileSync('./html/index.html');

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-type': 'text/html'});
	response.write(index);
	response.end();
});

server.listen(3000, function(){
	console.log("server running on port 3000");
})