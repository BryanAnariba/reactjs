import { Router } from 'express';
import User from '../controllers/UsersController';

const ctrlUsersMethods = new User();
const router = Router();


/*
    Que servicios necesito
    1 - Registrar un usuario
    2 - Loguear a un usuario
*/
router.post('/register' , ctrlUsersMethods.signUp);
router.post('/login' , ctrlUsersMethods.logIn);


export default router;