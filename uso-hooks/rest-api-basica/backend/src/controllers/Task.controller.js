const ctrlTask = {};
const taskModel = require('../models/Task.model');

// 1 - Obtener las tareas
ctrlTask.viewTasks = async (req , res) => {
    const tasks = await taskModel.find();
    res.send(tasks);
    res.end();
}

// 2 - Obtener una sola tarea
ctrlTask.viewTask = async (req , res) => {
    const { taskId } = req.params;
    let task = await taskModel.findById({ _id: taskId });
    res.send(task);
    res.end();
}

// 3 - Insertar una tarea
ctrlTask.inserTask = async (req , res) =>{
    const { taskName , taskDescription , emailUser } = req.body;
    const task = new taskModel({
        taskName: taskName ,
        taskDescription: taskDescription ,
        status: false ,
        emailUser: emailUser
    });
    const success = await task.save();
    res.send(success);
    res.end();

}

// 4 - Editar una tarea
ctrlTask.updateTask = async (req , res) => {
    const { taskId } = req.params;
    const { taskName , taskDescription , status , emailUser } = req.body;
    let msmUpdateTask = await taskModel.updateOne({ _id: taskId } , {
        taskName: taskName ,
        taskDescription: taskDescription ,
        status: status ,
        emailUser: emailUser
    });
    res.send(msmUpdateTask);
    res.end();
}

// 5 - Eliminar una tarea
ctrlTask.deleteTask = async (req , res) => {
    const { taskId } = req.params;
    let msmDeleteTask = await taskModel.deleteOne({ _id: taskId});
    res.send(msmDeleteTask);
    res.end();
}

module.exports = ctrlTask;