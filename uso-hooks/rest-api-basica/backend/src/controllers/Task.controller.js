const ctrlTask = {};

// 1 - Obtener las tareas
ctrlTask.viewTasks = (req , res) => {
    res.send({ message: 'Obteniendo Tareas' });
    res.end();
}

module.exports = ctrlTask;