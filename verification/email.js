var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tipsytwincities@gmail.com',
        pass: 'cohort3!'
    }
});

function sendEmail(userId, userEmail) {
    var mailOptions = {
        from: 'tipsytwincities@gmail.com',
        to: userEmail,
        subject: 'Verify your account!',
        text: 'My Tipsy Minnesotan, Thanks for signing up with Tipsy Twin Cities! Please use this URL to verify your account and start leaving reviews: localhost:8080/verified Thanks again and stay tipsy!',
        html: "<h1>My Tipsy Minnesotan,</h1><br><h2>Thanks for signing up with Tipsy Twin Cities!<br>Please use this URL to verify your account and start leaving reviews: <a href='https://tipsy-twin-cities.herokuapp.com/verified'>Verify Email</a></h2><h1>Thanks again!</h1>"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = sendEmail;