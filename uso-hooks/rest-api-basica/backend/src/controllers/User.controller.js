const ctrlUser = {};
const userModel = require('../models/User.model');

// 1 - Obtener las usuarios
ctrlUser.viewUsers = (req , res) => {
    userModel.find()
    .then((success) => {
        res.send(success);
        res.end();
    })
    .catch((error) => { 
        res.send(error)
        res.end();
    })
}

// 2 - Obtener un solo usuario
ctrlUser.viewUser = (req , res) => {
    const { userId } = req.params;
    userModel.find({ _id: userId })
    .then((success) => {
        res.send(success[0]);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

// 3 - Insertar una usuario
ctrlUser.insertUser = (req , res) => {
    const { firstName , lastName , date , emailUser , roleUser , urlImage } = req.body;
    let user = new userModel({
        firstName: firstName ,
        lastName: lastName ,
        date: date ,
        emailUser: emailUser ,
        roleUser: roleUser ,
        urlImage: urlImage
    });
    user.save()
    .then((success) => {
        res.send(success);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

// 4 - Editar una usuario
ctrlUser.updateUser = (req , res) =>{
    const { firstName , lastName , date , emailUser , roleUser , urlImage } = req.body;
    const { userId } = req.params;
    userModel.updateOne({ _id: userId } , {
        firstName: firstName ,
        lastName: lastName ,
        date: date ,
        emailUser: emailUser ,
        roleUser: roleUser ,
        urlImage: urlImage
    })
    .then((success) => {
        res.send(success);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

// 5 - Eliminar una usuario
ctrlUser.deleteUser = (req , res) => {
    const { userId } = req.params;
    userModel.deleteOne({ _id: userId })
    .then((success) => {
        res.send(success);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}



module.exports = ctrlUser;