var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var db = require('./models');
var Hashids = require('hashids');
var hashids = new Hashids(‘lsdaaaafjlje’); 
var app = express();




 app.get('/', function(req, res) {
  res.render('home');
   });

app.use('/link', require('./controllers/link'));

app.listen(process.env.PORT || 3000);