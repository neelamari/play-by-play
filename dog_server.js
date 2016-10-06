var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

var dogs =  require('./routes/dog.js')(app);

var server = app.listen(3001,function(){
	console.log('lientening on port 3001 server 127.0.0.1');
});

