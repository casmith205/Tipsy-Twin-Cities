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
        text: 'Hello! Thanks for signing up with Tipsy Twin Cities. Please click this link to verify your account and start leaving reviews: localhost:8080/verified'
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