const express = require('express');
const router = express.Router();
const { signIn , signUp } = require('../controllers/auth-controller');

// Que servicios web necesito para autenticas
/*
    1 - Registro de usuarios
    2 - Logueo de usuarios
*/

// 1 - Registro de usuarios
router.post('/register' , signUp);

// 1 - Logueo de usuarios
router.post('/login' , signIn);


module.exports = router;