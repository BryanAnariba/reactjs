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

module.exports = router;