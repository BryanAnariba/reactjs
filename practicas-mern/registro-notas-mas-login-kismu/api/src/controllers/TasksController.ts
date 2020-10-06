import { Request , Response } from 'express';
import { Types } from 'mongoose';
import TaskModel from '../models/TaskModel';

// 1 - Agregar una tarea
export const addTask = async (req: Request  , res: Response): Promise<any> => {
    let { taskTitle , taskDescription } = req.body;
    let { userId } = req.params;
    let newTask = new TaskModel({
        taskTitle: taskTitle ,
        taskDescription: taskDescription ,
        taskUserAuthor: Types.ObjectId(userId)
    });

    try {
        let results = await newTask.save();
    
        res.status(200).send({
            status: true ,
            message: 'Tarea ingresada exitosamente',
            taskStatus: results.taskStatus
        });
        res.end();
    } catch (error) {
        if (error) {
            res.status(400).send({
                message: 'Ocurrio un error' ,
                error: error
            });
            res.end();
        }
    }
    
} 

// 2 - Obtener las tareas de un usuario logueado
export const getUserTasks = async (req: Request , res: Response): Promise<any>  => {
    let { userId } = req.params;
    try {
        let data = await TaskModel.find({ taskUserAuthor: Types.ObjectId(userId) });
        res.status(200).send(data);
        res.end();
        
    } catch (error) {
        if (error) {
            // 202 Accepte -> La solicitud se ha recibido, pero aún no se ha actuado.
            res.status(202).send(error);
            res.end();
        }
    }
}   

// 3 - Obtener una tarea de un usuario logueado
export const getUserTask = async (req: Request , res: Response): Promise<any> => {
    let { taskId , userId } = req.params; 
    try {
        let taskData = await TaskModel.find({ _id: Types.ObjectId(taskId) , taskUserAuthor: Types.ObjectId(userId)  } , {
            taskTitle: true ,
            taskDescription: true ,
            taskUserAuthor: true ,
            taskStatus: true
        });

        res.status(200).send(taskData);
        res.end();
    } catch (error) {
        res.status(401).send(error);
        res.end();
    }
}

// 4 - Actualizar status de una tarea
export const editUserStatusTask = (req: Request , res: Response) => {
    let { taskId } = req.params;
    TaskModel.find({ _id: taskId })
    .then((data: any) => {
        if (data[0].taskStatus) { // Si la tarea esta en true y no se ha realizado entonces puede volver a poner en false
            TaskModel.updateOne({ _id: Types.ObjectId(taskId) } , {
                $set: {
                    taskStatus: false ,
                    complete_at: new Date()
                }
            })
            .then((success: any) => {
                res.send({
                    status: true ,
                    message: 'La tarea fue actualizada con exito' ,
                    data: success
                });
                res.end();
            })
            .catch((error: any) => {
                res.send(error);
                res.end();
            });
        } else { // Caso contrario si esta en false ponerla en true
            TaskModel.updateOne({ _id: Types.ObjectId(taskId) } , {
                $set: {
                    taskStatus: true ,
                    complete_at: new Date
                }
            })
            .then((success: any) => {
                res.send({
                    status: true ,
                    message: 'La tarea fue actualizada con exito' ,
                    data: success
                });
                res.end();
            })
            .catch((error: any) => {
                res.send(error);
                res.end();
            });
        }
    })
    .catch((error: any) => {
        res.status(401).send(error);
        res.end();
    });
}

// 5 - Actualizar contenido de una tarea
export const editUserTask = async (req: Request , res: Response): Promise<any> => {
    let { taskTitle , taskDescription } = req.body;
    let { taskId } = req.params; 
    try {
        let ediTask = await TaskModel.updateOne({ _id: Types.ObjectId(taskId) } , {
            $set: {
                taskTitle: taskTitle ,
                taskDescription: taskDescription
            }
        });

        res.status(200).send({
            status: true ,
            message: 'Tarea actualizada con exito'
        });
        res.end();
    } catch (error) {
        res.status(401).send(error);
        res.end();
    }
}

// 6 - Eliminar una tarea
export const deleteUserTask = async (req: Request , res: Response): Promise<any> => {
    let { taskId , userId } = req.params;
    try {
        let success = await TaskModel.findOneAndDelete({ _id: Types.ObjectId(taskId) , taskUserAuthor: Types.ObjectId(userId) });
        res.status(200).send({
            status: true ,
            message: 'Tarea eliminada con exito' ,
            taskTitle: success?.taskTitle
        });
        res.end();
    } catch (error) {
        res.status(401).send(error);
        res.end();
    }
}

