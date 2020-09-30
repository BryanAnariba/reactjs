import mongoose from 'mongoose';

export interface User extends mongoose.Document {
    firstName: string;
    lastName: string;
    emailUser: string;
}

const userSchema = new mongoose.Schema({
    firstName: {
        type: String ,
        required: true 
    } ,
    lastName: {
        type: String ,
        required: true
    } ,
    emailUser: {
        type: String ,
        unique: true ,
        trim: true ,
        required: true
    }
} , {
    timestamps:true
});

export default mongoose.model<User>('users' , userSchema);