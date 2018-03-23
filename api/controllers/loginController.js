'use strict'
var mongoose = require('mongoose')
User2 = mongoose.model('UsersLogin')
exports.listAllUsers = function(req, res){
    User2.find({},  function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}
exports.saveUser = function(req, res){
    var newuser = User2({username: "bosz", password: "bosz"})
    newuser.save({newuser},  function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}
exports.checkUser = function(req, res){
    console.log(req.body.username)
    var password = req.body.password
    console.log(password)
    // User2.find({userame: req.body.username}, function(err, user){
    //     if (err) {
    //         res.sendStatus(401)
    //     } else {
    //         console.log('user ',user)

    //         if (user.length === 0 ) {
    //             res.sendStatus(401)
    //         } else {
    //             if ( password === user[0].password) {
    //                 res.send('success')
    //             } else {
    //                 res.sendStatus(401)
    //             }
    //         }
    //     }
    // })

}