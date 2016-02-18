var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var contact = function(req, res) {
	// Setup nodemailer transport
	var smtpTrans = nodemailer.createTransport(smtpTransport({
	    service: 'Gmail',
	    auth: {
	        user: "me@gmail.com",
	        pass: "application-specific-password" 
	      }
	    }
    ));

	// Mail options
	var mailOptions = {
	    from: 'nateconley123@gmail.com', // sender address 
	    to: 'nateconley123@gmail.com', // the same mail = want to send it to myself
	    subject: 'Website Contact Form', // Subject line 
	    html: '<h2>' + req.body.email + '</h2><br><p>' + req.body.message + '</p>' // html body 
	};



	smtpTrans.sendMail(mailOptions, function(error, info){
	  if(error){
	  	console.log(error);
	    res.render('contact', { error: true });
	    return;
	  }
	  // Success
	  console.log('Message sent: ' + info.response);
	  res.render('contact', { error: false });
	});
}

module.exports.contact = contact;