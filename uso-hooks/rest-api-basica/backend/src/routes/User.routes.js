const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/User.controller');

/*
    Que servicios web de usuarios necesito
    1 - Obtener las usuarios
    2 - Obtener una sola usuario
    3 - Insertar una usuario
    4 - Editar una usuario
    5 - Eliminar una usuario
*/

// 1 - Obtener las usuarios
router.get('/' , ctrlUser.viewUsers);

module.exports = router;