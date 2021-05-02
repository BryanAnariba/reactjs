import { Schema, model } from 'mongoose';

const Note = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completedAt: {
        type: Date,
        default: new Date()
    },
    status: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default model('Note', Note)