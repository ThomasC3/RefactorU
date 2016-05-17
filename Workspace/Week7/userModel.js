var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name        : {type: String} ,
    username    : {type: String, required: true, unique: true},
    email       : {type: String, required: true, unique: true},
    password    : {type: String, required: true, unique: true}, 
    favoriteCreditCard: {type: String},
    mothersMaidenName : {type: String},
    firstCarColor     : {type: String},
    PIN         : {type: Number},
})

module.exports = mongoose.model('User', userSchema)