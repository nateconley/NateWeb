// Home route
var index = function(req, res){
	res.render('index');
};

// Beatles route
var beatles = function(req, res){
	res.sendFile(__dirname + '/public/html/beatles.html');
};

// Weather route
var weather = function(req, res){
	res.send("future home of LocalWeatherApp");
};

module.exports.index = index;
module.exports.beatles = beatles;
module.exports.weather = weather;