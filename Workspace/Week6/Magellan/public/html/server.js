var express = ('express'),
bodyParser = ('body-parser'),
logger = ('morgan'),
port = process.env.PORT || 3000

app.use('dev')
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function(err) {
	console.log('Express server listening on port ' + port)
// JavaScript File