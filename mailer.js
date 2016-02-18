var postmark = require("postmark");
var client = new postmark.Client("xxxxxxx");
 
var contact = function(req, res){
	client.sendEmail({
	  "From": "info@nateconley.com", 
	  "To": "nateconley123@gmail.com", 
	  "Subject": "Website Contact Form", 
	  "TextBody": req.body.message + " " + req.body.email
	}, function(error, success) {
    if(error) {
	    	console.log(error);
        res.render('contact', { error: true });
        return;
    }
    res.render('contact', { error: false });
	});
}

module.exports.contact = contact;