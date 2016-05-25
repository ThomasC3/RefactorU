var ctrls = require('./controllers'),
    apiRouter = require('express').Router()
    
    apiRouter.route('/plates')
    .get(ctrls.platesController.all)
    
    module.exports = apiRouter
    