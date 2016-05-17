var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')


// connect to database
mongoose.connect('mongodb://localhost/stolenCredit')


// init express app
var app = express()


app.use ( morgan('dev') )
app.use

// listen for connections
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Cloud9\n');
}).listen(process.env.PORT);