var db = require('./models')

module.exports = {
    // plates controller
    platesController: {
      all: function(req, res){
        db.plates.find({}, function(err, plates){
          if(err) console.log("err from db: ", err)
        res.json(plates)
        })
      },
      create: function(req,res){
        var plate = new db.plates(req.body)
        
        plate.save(function(err, plate){
          if(err) console.log("err from db saving: ", err)
          res.json(plate)
        })
      }
   }
}
//         console.log("from my controller:",plates)
//       }//end of my all method
//     }//end of my plates controller
// 