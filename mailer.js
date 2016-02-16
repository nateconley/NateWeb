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

	  smtpTrans.sendMail(mailOptions, function (error, res){
	  	if(error) {
	  		console.log("there was an error!");
	  	} else {
	  		console.log("email successfully sent!");
	  	}
	  });
  
};

module.exports.contact = contact