var router = require('express').Router();
module.exports = router;

var mongoose = require('mongoose');

var sendMessage = require('../mailServers/sendEmail.js'); //takes: to_name, to_email, from_name, from_email, subject, message_html

var fs = require('fs')

// get a template buffer, convert it to string, pass it as mail canned response
// fs.readFile('/Users/xavierdurandsmet/CodingChallenges/mailServer/server/app/mailServers/index.html', function (err, data) {
//   if (err) throw err;
//   console.log(data.toString('utf-8'));
//   var mailTemplate = data.toString('utf-8')

  	  // receive call from front-end
	  router.post('/sendMail', function (req,res,next) {
	  console.log('req.body', req.body)
	  var mailTemplate = '<h1>Thanks so much for applying ' + req.body.firstName +'</h1><h2>See you soon on our website!</h2>'
	  sendMessage(req.body.firstName, req.body.email, 'myNameTest', 'myEmailTest@test.com', 'Thanks for joining us!', mailTemplate)
	  res.json(req.body) 
	})
// });
