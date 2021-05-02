"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.editStatusNote = exports.editNote = exports.saveNote = exports.getNotes = exports.getNote = void 0;
const Note_1 = __importDefault(require("../models/Note"));
const getNote = (req, res) => {
    const { noteId } = req.params;
    Note_1.default.find({ _id: noteId }, { __v: false })
        .then((note) => {
        return res.status(200).send({
            statu: 200,
            data: note[0]
        });
    })
        .catch((error) => {
        return res.status(500).send({
            status: 500,
            data: error
        });
    });
};
exports.getNote = getNote;
const getNotes = (req, res) => {
    const { userId } = req.userId;
    Note_1.default.find({ user: userId }, { __v: false })
        .then((notes) => {
        return res.status(200).send({
            status: 200,
            data: notes
        });
    })
        .catch((error) => {
        return res.status(500).send({
            status: 500,
            data: error
        });
    });
};
exports.getNotes = getNotes;
const saveNote = (req, res) => {
    const { userId } = req.userId;
    const { title, description } = req.body;
    const note = new Note_1.default({
        title: title,
        description: description,
        user: userId
    });
    note.save()
        .then((saved) => {
        return res.status(200).send({
            status: 200,
            data: saved
        });
    })
        .catch((error) => {
        return res.status(500).send({
            status: 500,
            data: error
        });
    });
};
exports.saveNote = saveNote;
const editNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const { noteId } = req.params;
    try {
        const updated = yield Note_1.default.updateOne({ _id: noteId }, { $set: {
                title: title,
                description: description
            } });
        return res.status(200).send({
            status: 200,
            data: updated
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            data: error
        });
    }
});
exports.editNote = editNote;
const editStatusNote = (req, res) => {
    const { noteId } = req.params;
    Note_1.default.find({ _id: noteId })
        .then((note) => {
        Note_1.default.updateOne({ _id: noteId }, { $set: { status: !note[0].status, completedAt: new Date() } })
            .then((statusUpdated) => {
            return res.status(200).send({
                status: 200,
                data: statusUpdated
            });
        })
            .catch((error) => {
            return res.status(500).send({
                status: 500,
                data: error
            });
        });
    })
        .catch((error) => {
        return res.status(500).send({
            status: 500,
            data: error
        });
    });
};
exports.editStatusNote = editStatusNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { noteId } = req.params;
    try {
        const deleted = yield Note_1.default.deleteOne({ _id: noteId });
        return res.status(200).send({
            status: 200,
            data: deleted
        });
    }
    catch (error) {
        return res.status(500).send({
            status: 500,
            data: error
        });
    }
});
exports.deleteNote = deleteNote;
