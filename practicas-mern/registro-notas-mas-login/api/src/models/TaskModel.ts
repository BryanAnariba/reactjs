import mongoose from 'mongoose';

export interface Task extends mongoose.Document {
    taskTitle: string;
    taskDescription: string;
    taskUserAuthor: mongoose.Types.ObjectId;
    taskStatus: boolean;
    complete_at: Date;
    reated_at: Date;

    tareaCompleta(): boolean;
}

const taskSchema = new mongoose.Schema({
    taskTitle: {
        type: String ,
        required: true
    } ,
    taskDescription: {
        type: String ,
        required: true
    } ,
    taskUserAuthor: {
        type: mongoose.Types.ObjectId ,
        required: true
    } ,
    taskStatus: {
        type: Boolean ,
        default: false
    } , 
    complete_at: {
        type: Date ,
        default: null
    } ,
    created_at: {
        type: Date ,
        default:  new Date()
    }
} , {
    timestamps: true
});

taskSchema.methods.tareaCompleta = function() {
    //  Si la tarea no esta completa esta por defecto en false y cambiara a true o viceversa
    return !this.taskStatus;
}

export default mongoose.model<Task>('tasks' , taskSchema);