var sendgrid  = require('sendgrid');

var contact = function (req, res) {

	var emailAddress = req.body.email;
  var message = req.body.message;

	sendgrid.send({
	  to:       'nateconley123@gmail.com',
	  from:     emailAddress,
	  subject:  'Website Contact Form',
	  text:     message
	}, function(err, json) {
	  if (err) { 
	  	return res.render('contact', { error: true }); 
	  } 
	  res.render('contact', { error: false })
	});
}

module.exports.contact = contact