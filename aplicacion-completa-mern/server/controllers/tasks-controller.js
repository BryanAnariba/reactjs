const ctrlTasks = {};
const tasksModel = require('../models/tasks-model');
const mongoose = require('mongoose');

// 4 - Agregar una tarea de un usuaro logueado
ctrlTasks.addTask = (req , res) => {
    let userId = req.userId;
    let { title, description } = req.body;
    let task = new tasksModel({
        title: title ,
        description: description ,
        userId: mongoose.Types.ObjectId(userId)
    });

    task.save()
    .then((success) => {
        res.send({
            status: true ,
            message: 'Tarea Ingresada Exitosamente'
        });
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    })
}

// 2 - Obtener una tarea de un usuario logueado
ctrlTasks.getTask = (req , res) => {
    let { userId , taskId } = req.params;
    
    tasksModel.find({ _id: mongoose.Types.ObjectId(taskId) , userId: mongoose.Types.ObjectId(userId) })
    .then((success) => {
        if (!success[0]) {
            res.send({
                status: false ,
                message: 'La tarea no ha sido encontrada'
            });
            res.end();
        } else {
            res.send(success[0]);
            res.end();
        }
    })
    .catch((error) => {
        res.send(error);
        res.end();
    })
}

// 1 - Listar todas las tareas
ctrlTasks.getTasks = (req , res) => {
    tasksModel.find()
    .then((data) =>{
        res.send(data);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

// 3 - Obtener todas las tareas de un usuario logueado
ctrlTasks.getMyTasks = (req , res) => {
    const { userId } = req.params;
    tasksModel.find({ "userId": mongoose.Types.ObjectId(userId)} )
    .then((data) =>{
        res.send(data);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

// 5.0 - Editar una tarea de un usuario
ctrlTasks.editTask = (req , res) => {
    let { title , description } = req.body;
    let { taskId } = req.params;

    tasksModel.find({ _id: mongoose.Types.ObjectId(taskId) })
    .then((success) => {
        if (!success[0]) {
            res.send({
                status: false ,
                message: 'La tarea no fue encontrada'
            });
            res.end();
        } else {
            tasksModel.updateOne({ _id: taskId } , {
                $set: {
                    title: title,
                    description: description
                }
            })
            .then((success) => {
                res.send({
                    status: true ,
                    message: 'La tarea ' + title + ' fue actualizada con exito'
                })
            })
        }
    })
    .catch((error) => {

    })
}

// 5.1 - Editar el status de una tarea de un usuario
ctrlTasks.editStatusTask = async (req , res) => {
    let { taskId } = req.params;
    tasksModel.findById({ _id: mongoose.Types.ObjectId(taskId) })
    .then((task) => {
        let changeTaskStatus = task.taskComplete();
        if (!changeTaskStatus) {
            task.updateOne({ taskStatus: changeTaskStatus })
            .then((success) => {
                res.send({
                    status: true ,
                    message: 'La tarea fue cambiada de status exitosamente'
                });
                res.end();
            })
            .catch((error) => {
                res.send(error);
                res.end();
            });
            
        } else {
            task.updateOne({ taskStatus: changeTaskStatus })
            .then((success) => {
                res.send({
                    status: true ,
                    message: 'La tarea fue cambiada de status exitosamente'
                });
                res.end();
            })
            .catch((error) => {
                res.send(error);
                res.end();
            });
        }
    })
    .catch((error) => {
        res.send({ 
            status: false ,
            message: error
        });
        res.end();
    });
}

// 6 - Eliminar una tarea de un usuario logueado

ctrlTasks.deleteTask = (req , res) => {
    let { taskId , userId } = req.params;

    tasksModel.findOneAndDelete({
        _id: mongoose.Types.ObjectId(taskId) , userId: mongoose.Types.ObjectId(userId)
    })
    .then((success) => {
        res.send({
            status: true ,
            message: 'Tarea eliminada con exito'
        });
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

module.exports = ctrlTasks;

