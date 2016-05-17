var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var APIRoutes = require('./routes.js')


// connect to database
mongoose.connect('mongodb://localhost/stolenCredit')


// init express app
var app = express()


app.use( morgan('dev') )
app.use( bodyParser.urlencoded({extened: true}))
app.use( bodyParser.json())
app.use( express.static)

// listen for connections
var port = process.env.PORT || 3000 
app.listen(port function(){
    console.log('Port listening on' +)
})