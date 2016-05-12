var plates = require('./model')

module.exports = {
    
    platesController: {
        all: function(req, res){
            console.log("from my controller:", plates)
            res.json(plates)
        }
    }
}