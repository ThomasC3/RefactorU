var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    app = ('Express'),
    apiRoutes = require('./api_routes')
    
    
    app.use(logger('dev'))
    app.use( bodyParser.urlEncoded({extended : true}))
    app.use( bodyParser.json())

    app.use('/api', apiRoutes)
    
    app.listen(port, function(err){
        if (err) console.log ('Server Crashed!')
        console.log("Server listening at " + port)
    })
    