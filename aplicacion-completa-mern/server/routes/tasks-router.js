const express = require('express');
const router = express.Router();
const { addTask , editTask , deleteTask , getTask , getTasks , getMyTasks , editStatusTask } = require('../controllers/tasks-controller');
const { verifyToken } = require('../controllers/access-with-token');
/*
    Que servicios web necesito

    1 - Listar todas las tareas
    2 - Obtener una tarea de un usuario logueado
    3 - Obtener todas las tareas de un usuario logueado
    4 - Agregar una tarea de un usuaro logueado
    5 - Editar una tarea de un usuario

    6 - Eliminar una tarea de un usuario logueado
*/
// 1 - Listar todas las tareas
router.get('/' , verifyToken , getTasks);

// 2 - Obtener una tarea de un usuario logueado
router.get('/task/:taskId/user/:userId' , verifyToken , getTask);

// 3 - Obtener todas las tareas de un usuario logueado
router.get('/user/:userId' , verifyToken , getMyTasks);

// 4 - Agregar una tarea de un usuaro logueado
router.post('/addTask' , verifyToken , addTask);


// 5 - Editar una tarea de un usuario
router.put('/:taskId' , verifyToken , editTask);

// 5 - Editar el status de una tarea de un usuario
router.put('/:taskId/change-status' , verifyToken , editStatusTask);

// 6 - Eliminar una tarea de un usuario logueado
router.delete('/:taskId/user/:userId' , verifyToken , deleteTask);


module.exports = router;