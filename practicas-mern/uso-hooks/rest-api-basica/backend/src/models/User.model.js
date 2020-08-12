const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    firstName: {
        type: String ,
        required: true
    } ,
    lastName: {
        type: String ,
        required: true
    },
    date: {
        type: Date ,
        required: true
    } ,
    emailUser: {
        type: String ,
        required: true
    } ,
    roleUser: {
        type: String ,
        required: true
    } ,
    urlImage: {
        type: String
    }
} , {
    timestamps: true
});

module.exports = mongoose.model('users' , userModel);