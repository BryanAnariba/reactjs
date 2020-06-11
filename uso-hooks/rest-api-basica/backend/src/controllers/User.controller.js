const ctrlUser = {};

// 1 - Obtener las usuarios
ctrlUser.viewUsers = (req , res) => {
    res.send({ message: 'Obteniendo Usuarios' });
    res.end();
}

module.exports = ctrlUser;