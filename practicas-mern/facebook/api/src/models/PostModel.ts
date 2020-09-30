import mongoose from 'mongoose';

export interface Post extends mongoose.Document {
    emailUser: string;
    post: string;
}


const postSchema = new mongoose.Schema({
    emailUser: {
        type: String ,
        required: true
    } ,
    post: {
        type: String ,
        required: true 
    } ,
    date: {
        type: Date ,
        default: new Date()
    }
} , {
    timestamps:true
});


export default mongoose.model<Post>('posts' , postSchema);