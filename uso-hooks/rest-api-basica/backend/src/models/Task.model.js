const mongoose = require('mongoose');

const taskModel = new mongoose.Schema({
    taskName: {
        type: String ,
        required: true
    } ,
    taskDescription: {
        type: String ,
        required: true ,
        trim: true// para evitar doble espacio en blanco
    } ,
    status: {
        type: Boolean
    } ,
    emailUser: {
        type: String ,
        required: true
    } 
} , {
    timestamps: true
});

module.exports = mongoose.model('tasks' , taskModel);