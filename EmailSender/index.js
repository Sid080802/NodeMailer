var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'siddharth.numetry2025@gmail.com',
    pass: 'fgvf rkmo mrca pydo'
  }
});

var mailOptions = {
  from: 'siddharth.numetry2025@gmail.com',
  to: 'siddarthgodambe123@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'i am learning email sending feature using node mailer package in nodejs'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});