var morgan  = require('morgan'),
express = require('express'),
app     = express(),
port    = process.env.PORT || 3000,
router  = express.Router(),
server  = require('http').createServer(app)



app.use(morgan('dev'))
app.use(express.static(__dirname +'/public'))
server.listen(port)

console.log('Server started on ' + port);
var io = require('socket.io')(server);
var Twit = require('twit');
var twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
console.log(twitter);

var stream = twitter.stream('statuses/filter', {track: ''});

io.on('connect', function(socket){
  stream.on('tweet', function(tweet){

  });
});
