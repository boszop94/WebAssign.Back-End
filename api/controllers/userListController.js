'use strict'
var mongoose = require('mongoose')
User = mongoose.model('Users')

exports.listAllUsers = function(req, res){
    var query = { sort: { firstName: 1 } }
    User.findOne({},function(err, user){
        if(err) throw err
        //console.log(user)
        res.json(user)
    })
}
exports.createAUser = function(req, res){
    var newUser = new User(req.body)
    newUser.save(function(err, user){
        if(err) throw err
        res.json(user)
    })
}
exports.deleteUser = function(req, res){
        console.log(req.params);
        
        var query = {id: req.params.eID}
        //console.log(req.params.userId)
        User.remove(query, function(err, user){
            if(err) throw err
            const response = {
            message: "Delete user id: "+ req.params.userID +" successfully",
            }
            res.json(response)
        })
}
exports.updateAUser = function(req, res){
    console.log(req.params.eID)
    var newUser = {}
    newUser = req.body
    console.log(newUser)
    User.update({id: req.params.eID}, newUser, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}
exports.getAUser = function(req, res){
    console.log(req.params.eID)
    User.findOne({id: req.params.eID}, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}