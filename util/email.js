// Email Util
var nodemailer = require('nodemailer');
var htmlToText = require('nodemailer-html-to-text').htmlToText;

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sean.pi.robot@gmail.com',
        pass: 'sean pi robot'
    }
});
transporter.use(htmlToText());

exports.send = function(to, subject, html) {

    var mailOptions = {
        from: 'Pi Robot <sean.pi.robot@gmail.com>', // sender address
        to: to,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, function(err, info){

        if (err) {
            console.log('Email Error:', err);
        }
        else {
            console.log('Email sent:', info.response);
        }

    });

};