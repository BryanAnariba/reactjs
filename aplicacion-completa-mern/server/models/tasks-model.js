const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    title: {
        type: String
    } ,
    description: {
        type: String
    } ,
    userId: {
        type: mongoose.Types.ObjectId
    } ,
    taskStatus: {
        type: Boolean ,
        default: false
    } ,
    completeTask: {
        type: Date ,
        default: null
    } 
} , {
    timestamps: true
});


tasksSchema.methods.taskComplete = function () {
    // Si la tarea se completo retorna true
    return !this.taskStatus;
}

module.exports = mongoose.model('tasks' ,tasksSchema);