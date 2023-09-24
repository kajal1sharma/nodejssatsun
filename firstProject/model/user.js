const mongoose = require('mongoose');

let schema = mongoose.Schema;

const userModel = new schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

exports.module = mongoose.model('users', userModel);