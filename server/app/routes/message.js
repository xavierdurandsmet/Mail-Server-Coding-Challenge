var router = require('express').Router();
module.exports = router;

var sendMessage = require('../mailServers/sendEmail.js'); //takes: to_name, to_email, from_name, from_email, subject, message_html

  	  // receive call from front-end
	  router.post('/sendMail', function (req,res,next) {
	  var mailTemplate = 'Thanks so much for joining us ' + req.body.firstName +'! See you soon on our website!'
	  sendMessage(req.body.firstName, req.body.email, 'myNameTest', 'myEmailTest@test.com', 'Thanks for joining us!', mailTemplate)
	  res.json(req.body) 
	})
// });
