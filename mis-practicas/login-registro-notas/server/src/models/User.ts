import { Schema, model } from 'mongoose';

const User = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailUser: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export default model('User', User)