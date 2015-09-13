// mandrill
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('UC7vg8l6FISbExHzJTjyKQ');

// mailGun
var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun('key-fac468ef8bbe5ac9fabfdb0bd3fd14d5');

// // wrong API key to test error handler
// var mandrill_client = new mandrill.Mandrill('UC7vg8l6FISbExHzJTjyKQ234efg3t');

function sendEmail(to_name, to_email, from_name, from_email, subject, message_html) {
    var message = {
        "html": message_html,
        "subject": subject,
        "from_email": from_email,
        "from_name": from_name,
        "to": [{
            "email": to_email,
            "name": to_name
        }],
        "important": false,
        "track_opens": false,
        "auto_html": false,
        "preserve_recipients": true,
        "merge": false,
        "tags": []
    };
    var async = false;
    var ip_pool = "Main Pool";
    mandrill_client.messages.send({
        "message": message,
        "async": async,
        "ip_pool": ip_pool
    }, function(result) {
        console.log('mail sent with success')
    }, function(e) {

        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);

           // mailGun as a back-up mail server
           mg.sendText(
            from_email, 
            to_email,
            subject,
            'Thanks so much for applying ' + to_name + ', See you soon on our website!',
            'noreply@example.com', {},
            function(err) {
                if (err) console.log('Oh noes: ' + err);
                else     console.log('Success');
        });
    });
}


module.exports = sendEmail;