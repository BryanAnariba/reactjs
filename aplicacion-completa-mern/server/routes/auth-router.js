const express = require('express');
const router = express.Router();
const { registerUser , loginUser } = require('../controllers/auth-controller');
/*
    Que servicios web necesito

    1 - Registrar a un usuario
    2 - Loguear a un usuario
*/
router.post('/register' , registerUser);
router.post('/login' , loginUser);

module.exports = router;