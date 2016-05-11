var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),

    app= express()
    
    app.use(morgan('dev'))
    app.use( bodyParser.urlEncoded({extended : true}))
    app.use( bodyParser.json())
    app.use( express.static(_dirname + '/public')) 
    
    app.get('/', function(req, res){
        console.log('Our First Request')
        res.send('Welcome back')
        res.sendFile('Gmaps.html', {root : './public/'})        
    })
    
    var port = process.env.PORT || 3000
    app.listen(port, function(){
        console.log("Server listening at " + port)
    })
    