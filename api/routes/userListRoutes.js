'use strict'
module.exports = function(app){
    var userList = require('../controllers/userListController')
    var login = require('../controllers/loginController')

    app.route('/users')
        .post(userList.createAUser)
        .get(userList.listAllUsers)

    app.route('/users/:eID')
        .delete(userList.deleteUser)
        .get(userList.getAUser)
        .post(userList.updateAUser)
    
    app.route('/login')
         .post(login.checkUser)
        .get(login.listAllUsers)
}