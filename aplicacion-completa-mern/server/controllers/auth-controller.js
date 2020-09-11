const ctrlAuth = {};
const userModel = require('../models/users-model');
const jwt = require('jsonwebtoken');

/*
    Que controladores necesito

    1 - Registrar a un usuario
    2 - Loguear a un usuario 
*/

// 1 - Registrar a un usuario
ctrlAuth.registerUser = async (req , res) => {
    const { firstName , lastName , emailUser , passwordUser } = req.body;
    let user = new userModel({
        firstName: firstName ,
        lastName: lastName ,
        emailUser: emailUser ,
        passwordUser: passwordUser
    });

    // Encriptamos la clave
    user.passwordUser = await user.encriptaPassword(passwordUser);

    user.save()
    .then((success) => {
        res.send({
            status: true ,
            message: 'El usuario con el email ' + emailUser + ' esta registrado exitosamente'
        });
        res.end();
    })
    .catch((error) => {
        if (error.code === 11000) {
            res.send({
                status: false ,
                message: 'El correo ' + emailUser + ' ya se encuentra en uso'
            });
            res.end();
        } else {
            res.send(error);
            res.end();
        }
    });

    // Una vez encriptada guardarmos
}


// 2 - Loguear a un usuario 
ctrlAuth.loginUser = (req , res) => {
    const { emailUser , passwordUser } = req.body;

    // Primero buscamos el usuario
    userModel.find({ emailUser: emailUser })
    .then((userData) => {
        if (!userData[0]) {// Si no se encontro el usuario
            res.send({
                status: false ,
                message: 'El correo ' + emailUser + ' no existe, vuelva a digitarlo'
            });
            res.end();
        } else {// Si se encontro

            // Verificamos la clave
            userData[0].verifPassword(passwordUser)
            .then((verifyPassword) => {
                if (!verifyPassword) {
                    res.send({
                        status: false ,
                        message: 'Clave Incorrecta, vuelva a digitar la clave por favor'
                    });
                    res.end();
                } else {
                    const token = jwt.sign({ id: userData[0]._id } , process.env.SECURE_KEY , { expiresIn: 60*60*4 });

                    if (!token) {
                        res.send({
                            status: false ,
                            message: 'Ha ocurrido un error, intente nuevamente'
                        });
                        res.end();
                    } else {
                        res.send({
                            status: true ,
                            token: token
                        });
                        res.end();
                    }
                }
            })
            .catch((error) => {
                res.send(error);
                res.end();
            })
        }
    })
}

module.exports = ctrlAuth;