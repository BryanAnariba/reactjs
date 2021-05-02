import { Request, Response } from 'express';
import Note from '../models/Note';

const getNote = (req: Request, res: Response) => {
    const { noteId } = req.params;
    Note.find({ _id: noteId }, { __v: false })
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
}

const getNotes = (req: Request, res: Response) => {
    const { userId } = req.userId;
    Note.find({ user: userId }, { __v: false })
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
}

const saveNote = (req: Request, res: Response) => {
    const { userId } = req.userId;
    const { title, description } = req.body;
    const note = new Note({
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
}

const editNote = async (req: Request, res: Response): Promise<Response> => {
    const { title, description } = req.body;
    const { noteId } =  req.params;
    try {
        const updated = await Note.updateOne({ _id: noteId }, { $set: {
            title: title,
            description: description
        }});

        return res.status(200).send({
            status: 200,
            data: updated
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            data: error
        });
    }
}

const editStatusNote = (req: Request, res: Response) => {
    const { noteId } = req.params;
    Note.find({ _id: noteId })
    .then((note: any) => {
        Note.updateOne({ _id: noteId }, { $set: { status: !note[0].status, completedAt: new Date() } })
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
}

const deleteNote = async (req: Request, res: Response): Promise<Response> => {
    const { noteId } = req.params;
    try {
        const deleted = await Note.deleteOne({ _id: noteId });
        return res.status(200).send({
            status: 200,
            data: deleted
        });
    } catch (error) {
        return res.status(500).send({
            status: 500,
            data: error
        });
    }
}

export {
    getNote,
    getNotes,
    saveNote,
    editNote,
    editStatusNote,
    deleteNote
}