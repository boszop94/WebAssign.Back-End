'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    id: {
        type: String,
        Required: 'Please enter'
    },
    firstname: {
        type: String,
        Required: 'Please enter'
    },
   
    surname: {
        type: String,
        Required: 'Please enter'
    },
    mobile:{
        type: String,
        Required: 'Please enter'
    },
    email:{
        type: String,
        Required: 'Please enter'
    },
    facebook:{
        type: String,
        Required: 'Please enter'
    },
    image:{
        type: String,
        Required: 'Please enter'
    },
})

module.exports = mongoose.model('Users', UserSchema)