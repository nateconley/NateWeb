var nodemailer = require('nodemailer');

var contact = function (req, res) {
  var emailAddress = req.body.email;
  var message = req.body.message;


    var smtpTrans = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: "*email*",
          pass: "*password*" 
      }
	  });
	  //Mail options
	  var mailOptions = {
	      from: emailAddress,
	      to: 'nateconley123@gmail.com',
	      subject: 'Website contact form',
	      text: message
	  };

	  smtpTrans.sendMail(mailOptions, function (error, response){
	  	if(error) {
	  		console.log("there was an error!");
	  		res.render('contact', { error: true });
	  	} else {
	  		console.log("email successfully sent!");
	  		res.render('contact', { error: false })
	  	}
	  });
  
};

module.exports.contact = contact