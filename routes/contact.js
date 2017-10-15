var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')


/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact',
   { title: 'Contact Us' });
});

router.post("/send", function(req, res, next){
   var transporter = nodemailer.createTransport("SMTP", {
       service: "Gmail",
       auth: {
           user: 'bloodprince027@gmail.com',
           pass: 'heyyobiyach027'
       }
   });
   var mailOptions = {
       from: "'Test Tester' <test@test.com>",
       to: "acharyaujjal1@gmail.com",
       subject: "Test subject",
       text: "You have a submission from Name: " + req.body.name+ " Email: "+ req.body.email + " Message: "+ req.body.problem,
       html: "<p>You have a submission from...</p> <ul><li> Name: " + req.body.name+ "</li><li> Email: "+ req.body.email + "</li></li> Message: "+ req.body.problem+ "</li>"

   };

   transporter.sendMail(mailOptions, function(err, info){
    if(err){
        return console.log(err);
    }
    console.log("Message has been sent...");
    res.redirect("/");
    
   });
});

module.exports = router;
