var router = require('express').Router()
var userCtrl = require('./controllers/users.js')

// User routes
router.route('/users')
.get(userCtrl.find) // r
.post(userCtrl.create) //c


router.route('/users/:id')
.post(userCtrl.update) //u
.delete(userCtrl.delete) //d

// We need to access routes in servere.js

module.exports = router
