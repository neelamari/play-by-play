var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

var cats =  require('./routes/cat.js')(app);

var server = app.listen(3000,function(){
	console.log('lientening on port 3000 server 127.0.0.1');
});

