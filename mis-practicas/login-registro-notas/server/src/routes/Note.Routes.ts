import { Router } from 'express';
import { deleteNote, editNote, getNotes, saveNote, editStatusNote } from '../controllers/NoteController';
import { verifyToken } from '../middlewares/VerifyToken';

const router = Router();

router.get('', verifyToken , getNotes);
router.get('/:noteId', verifyToken , getNotes);
router.post('', verifyToken , saveNote);
router.put('/:noteId', verifyToken , editNote);
router.put('/:noteId/status', verifyToken, editStatusNote);
router.delete('/:noteId', verifyToken , deleteNote);

export default router;