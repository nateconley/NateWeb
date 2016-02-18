// var sendgrid  = require('sendgrid');

// var contact = function (req, res) {

// 	var emailAddress = req.body.email;
//   var message = req.body.message;

// 	sendgrid.send({
// 	  to:       'nateconley123@gmail.com',
// 	  from:     emailAddress,
// 	  subject:  'Website Contact Form',
// 	  text:     message
// 	}, function(err, json) {
// 	  if (err) { 
// 	  	return res.render('contact', { error: true }); 
// 	  } 
// 	  res.render('contact', { error: false })
// 	});
// }





var postmark = require("postmark");
var client = new postmark.Client("<server key>");
 
var contact = function(req, res){
	client.sendEmail({
	  "From": req.body.email, 
	  "To": "nateconley123@gmail.com", 
	  "Subject": "Website Contact Form", 
	  "TextBody": req.body.message
	}, function(error, success) {
    if(error) {
        res.render('contact', { error: true });
        return;
    }
    res.render('contact', { error: false });
	});
}

module.exports.contact = contact