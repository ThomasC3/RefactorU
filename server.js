var express = require('express'),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    bodyParser= require('body-parser'),
    app = express(),
    port = 8080,
    apiRoutes = require('./routes')

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(logger("dev"))

mongoose.connect('mongodb://localhost/discs')

var bcrypt = require('bryptjs')

var userSchema = mongoose.Schema({
  username: {type:String, unique: true}
  password: String
})


userSchema.pre("save", function(next){
  var user = this
  var hashPassword = bcrypt.hashSync(user.password, 8)
  user.password = hashPassword
  next()
})
var User = mongoose.model('User', userSchema)

app.post('/signup', function(req, res){
  var user = new User(req.body)
  console.log("before save----------")
  user.save(function(err,user){
    if(err){res.json(err)
    }
    else{
      res.json(user)
    }
  })
})
    app.listen(port)
