var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 3000;
    app.get('/', function (req, res) {
      res.render('index');
    });
    app.post('/', function (req, res) {
    });
    app.get('/work/portrait', function (req, res) {
      res.render('portrait')
    });
    app.get('/work/portrait/2', function (req, res) {
      res.render('portrait2')
    });
    app.get('/work/portrait/3', function (req, res) {
      res.render('portrait3')
    });
    app.get('/work/portrait/4', function (req, res) {
      res.render('portrait4')
    });
    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'a1qa.test.app@gmail.com',
              pass: 'a1qaa1qa'
          }
      });
      let mailOptions = {
          from: '"Gregory Olsen Studio" <reginarbk12@gmail.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
