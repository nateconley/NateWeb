var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var contact = function(req, res) {
	
	var options = {
		auth: {
			api_user: 'username',
			api_key: 'password'
		}
	}

	var client = nodemailer.createTransport(sgTransport(options));


	// Mail options
	var email = {
	    from: 'nateconley123@gmail.com', // sender address 
	    to: 'nateconley123@gmail.com', // the same mail = want to send it to myself
	    subject: 'Website Contact Form', // Subject line 
	    html: '<h3>Mail from: ' + req.body.email + '</h3><br><p>' + req.body.message + '</p>' // html body 
	};

	client.sendMail(email, function(error, info){
	  if(error){
	  	// Error
	    res.render('contact', { error: true });
	    return;
	  }
	  // Success
	  res.render('contact', { error: false });
	});
}



module.exports.contact = contact;