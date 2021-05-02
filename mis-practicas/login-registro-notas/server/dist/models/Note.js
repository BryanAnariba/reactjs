"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Note = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
});
exports.default = mongoose_1.model('Note', Note);
