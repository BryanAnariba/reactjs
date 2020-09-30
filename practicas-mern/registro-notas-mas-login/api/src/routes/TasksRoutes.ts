import { Router } from 'express';
const router = Router();
import { verifyToken } from '../config/VerifyAuthentication';
import * as taskCtrl from '../controllers/TasksController';

/*
    Que servicios web necesito
    1 - Agregar una tarea
    2 - Obtener las tareas de un usuario logueado
    3 - Obtener una tarea de un usuario logueado
    4 - Actualizar status de una tarea
    5 - Actualizar contenido de una tarea
    6 - Eliminar una tarea
*/
// 1 - Agregar una tarea
router.post('/add/:userId' , verifyToken , taskCtrl.addTask);

// 2 - Obtener las tareas de un usuario logueado
router.get('/:userId' , verifyToken , taskCtrl.getUserTasks);

// 3 - Obtener una tarea de un usuario logueado
router.get('/:taskId/user/:userId' , verifyToken , taskCtrl.getUserTask);

// 4 - Actualizar status de una tarea
router.put('/status/:taskId' , verifyToken , taskCtrl.editUserStatusTask);

// 5 - Actualizar contenido de una tarea
router.put('/edit/:taskId' , verifyToken , taskCtrl.editUserTask);

// 6 - Eliminar una tarea
router.delete('/:taskId/user/:userId' , verifyToken , taskCtrl.deleteUserTask);

export default router;