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
      return res;
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
    app.get('/work/lifestyle', function (req, res) {
      res.render('lifestyle')
    });
    app.get('/work/lifestyle/2', function (req, res) {
      res.render('lifestyle2')
    });
    app.get('/work/lifestyle/3', function (req, res) {
      res.render('lifestyle3')
    });
    app.get('/work/lifestyle/4', function (req, res) {
      res.render('lifestyle4')
    });
    app.get('/work/lifestyle/5', function (req, res) {
      res.render('lifestyle5')
    });
    app.get('/work/travel', function (req, res) {
      res.render('travel')
    });
    app.get('/work/travel/2', function (req, res) {
      res.render('travel2')
    });
    app.get('/work/travel/3', function (req, res) {
      res.render('travel3')
    });
    app.get('/work/travel/4', function (req, res) {
      res.render('travel4')
    });
    app.get('/sessions', function (req, res) {
      res.render('sessions')
    });
    app.get('/connect/biopress', function (req, res) {
      res.render('biopress')
    });
    app.get('/connect/clients', function (req, res) {
      res.render('clients')
    });
    app.get('/connect/contact', function (req, res) {
      res.render('contact')
    });
    app.get('/connect/philanthropy', function (req, res) {
      res.render('philanthropy')
    });
    app.get('/sessions/book', function (req, res) {
      res.render('book')
    });
    app.get('/sessions/book/2', function (req, res) {
      res.render('book2')
    });
    app.get('/sessions/book/3', function (req, res) {
      res.render('book3')
    });
    app.post('/sessions/book/info', function (req, res) {
      if (req.body.add_subj == "none") {
        req.body.add_subj = 0;
      }
      var totalPrice =  50 * req.body.add_subj + 250;
      res.render('info', {subjects : req.body.add_subj, totalPrice : totalPrice});
    });
    app.post('/sessions/book/2/info/2', function (req, res) {
     if (req.body.add_subj == "none") {
        req.body.add_subj = 0;
      }
      var totalPrice =  55 * req.body.add_subj + 350;
      res.render('info2', {subjects : req.body.add_subj, totalPrice : totalPrice});
    });
   
    app.post('/sessions/book/3/info/3', function (req, res) {
     if (req.body.add_subj == "none") {
        req.body.add_subj = 0;
      }
      var totalPrice =  55 * req.body.add_subj + 250;
      res.render('info3', {subjects : req.body.add_subj, totalPrice : totalPrice});
    });
    app.get('/sessions/book/info', function (req, res) {
      res.render('404')
    });
    app.get('/sessions/book/2/info/2', function (req, res) {
      res.render('404')
    }); 
    app.get('/sessions/book/3/info/3', function (req, res) {
      res.render('404')
    });
     app.post('/sessions/book/info/payment', function (req, res) {
      res.render('payment')
    });
     app.post('/sessions/book/2/info/2/payment', function (req, res) {
      res.render('payment')
    });
     app.post('/sessions/book/3/info/3/payment', function (req, res) {
      res.render('payment')
    });
    app.get('/sessions/book/info/payment', function (req, res) {
      res.render('404')
    });
    app.get('/sessions/book/2/info/2/payment', function (req, res) {
      res.render('404')
    }); 
    app.get('/sessions/book/3/info/3/payment', function (req, res) {
      res.render('404')
    });
     
    app.post('/connect/contact', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'a1qa.test.app@gmail.com',
              pass: 'a1qaa1qa'
          }
      });
      console.log();
      let body = req.body.message.concat("<br><br>Please, concat ").concat("<b>").concat(req.body.name).concat(" ").concat(req.body.surname).concat("</b>: ").concat(req.body.email);
      let mailOptions = {
          from: '"'.concat(req.body.name).concat(' ').concat(req.body.surname).concat('" <').concat(req.body.email).concat('>'), // sender address
          to: "reginarbk12@gmail.com", // list of receivers
          subject: req.body.subject, // Subject line
          text: body, // plain text body
          html: body // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
          res.render('contactSuccess');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
