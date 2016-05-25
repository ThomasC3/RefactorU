var  mongoose = require("mongoose")

var discSchema = mongoose.Schema({
   name: {type: String},
   weight: {type: Number},
   color: {type: String},
   category: {type: String},
   picture: {type: String}

})

module.exports = mongoose.model("disc", discSchema)
