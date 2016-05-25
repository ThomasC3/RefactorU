var discs = require("./models")

module.exports = {
  all : function(req,res) {
      discs.find({}, function(err,collection){
        if (err) {
          res.json({message: "database error", error:err})
        }
        else {
          res.json(collection)
        }
      })
  },

  create : function(req,res) {
    var disc= new discs (req.body);
    disc.save(function(err, disc){
      if(err) {
        res.json({message: "database error", error:err})
      }
      else {
        res.json(disc)
      }
    })
  },

  update: function(req,res){
    discs.findOneAndUpdate({_id: req.params.id}, req.body,{new: true},
    function(err, disc){
      if(err) {
        res.json({message: "database error", error:err})
      }
      else {
        res.json(disc)
      }
    })
  },
  showOne: function(req,res){
    discs.findOne({_id: req.params.id},
    function(err, disc){
      if(err) {
        res.json({message: "database error", error:err})
      }
      else {
        res.json(disc)
      }
    })
  },

  delete: function(req,res){
    discs.findOneAndRemove({_id: req.params.id}, function(err, disc){
      if(err) {
        res.json({message: "database error", error:err})
      }
      else {
        res.json({message: "deleted the crappy disc", id: req.params.id})
      }
    })
  }

}
