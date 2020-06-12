const express = require('express');
const router = express.Router();
const ctrlTask = require('../controllers/Task.controller');

/*
    Que servicios web de tareas necesito
    1 - Obtener las tareas
    2 - Obtener una sola tarea
    3 - Insertar una tarea
    4 - Editar una tarea
    5 - Eliminar una tarea
*/
// 1 - Obtener las tareas
router.get('/' , ctrlTask.viewTasks);

// 2 - Obtener una sola tarea
router.get('/:taskId' , ctrlTask.viewTask);

// 3 - Insertar una tarea
router.post('/' ,  ctrlTask.inserTask);

// 4 - Editar una tarea
router.put('/:taskId' , ctrlTask.updateTask);

// 5 - Eliminar una tarea
router.delete('/:taskId' , ctrlTask.deleteTask);

module.exports = router;