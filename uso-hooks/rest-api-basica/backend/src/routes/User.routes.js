const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/User.controller');

/*
    Que servicios web de usuarios necesito
    1 - Obtener las usuarios
    2 - Obtener un solo usuario
    3 - Insertar una usuario
    4 - Editar una usuario
    5 - Eliminar una usuario
*/

// 1 - Obtener las usuarios
router.get('/' , ctrlUser.viewUsers);

// 2 - Obtener un solo usuario
router.get('/:userId' , ctrlUser.viewUser);

// 3 - Insertar una usuario
router.post('/' , ctrlUser.insertUser);

// 4 - Editar una usuario
router.put('/:userId' , ctrlUser.updateUser);

// 5 - Eliminar una usuario
router.delete('/:userId' , ctrlUser.deleteUser);



module.exports = router;