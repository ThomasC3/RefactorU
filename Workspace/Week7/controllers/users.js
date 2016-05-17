var User = require('../CRUDparty/userModel.js')

module.exports = {
    create : function(req, res){
        var newGuy = new User(req.body)
        newGuy.save(function(err, doc){
            console.log('Err', err)
            res.send(doc)
        })
    },
    
    find : function(req, res){
        User.find({},  function(err, users){
            if(err) return res.send(err)
            res.send(users)
        })
},
    update : function(req, res){
        User.update({_id : req.params.id}, req.body, 
        function(err, update){if(err) return res.send(err)
            res.send(update)
        })
        
    },
    delete : function(req, res){
        User.remove({_id : req.params.id},
        function(err, deleted){
            if(err) return res.send(err)
            res.send(deleted)
        })
}}
