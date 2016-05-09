var http = require('http')

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'})
    response.end('<h1> Wowee, this is our first server! </h1>')
    
})

server.listen(process.env.PORT || 3000)

// JavaScript File