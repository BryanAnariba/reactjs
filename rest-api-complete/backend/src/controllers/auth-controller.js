require('dotenv').config();
const ctrlAuthMethods = {};
const userModel = require('../models/users-model');
const jwt = require('jsonwebtoken');

// USANDO MVC -------> HACER UN BINDING O CRUCE ENTRE RUTAS Y SU RESPECTIVO METODO EN EL CONTROLADOR

// 1 - Registro de usuarios
ctrlAuthMethods.signUp = async (req , res) => {
    const { firstName , lastName , emailUser , password } = req.body;
    let newUser = new userModel({
        firstName: firstName , 
        lastName: lastName , 
        emailUser: emailUser , 
        password: password
    });

    // --> Password del modelo User = password enviado como parametro encriptado, como es asincrono se debe usar async await
    // --> Falta verificar si es correo exite, pekenias pekeneses
    newUser.password = await newUser.encryptPassword(password);
    newUser.save()
    .then((saveSuccessfully) => {
        res.send({
            statusCode: 1 ,
            message: emailUser + ' Estas registrado correctamente'
        });
        res.end();
    })
    .catch((error) => {
        if(error.code === 11000) {
            res.send({
                statusCode: 0 ,
                message: 'El correo ' + emailUser + ' Ya se encuentra en uso'
            });
            res.end();
        } else {
            res.send(error);
            res.end();
        }
        
    });
}

// 2 - Logueo de usuarios
ctrlAuthMethods.signIn = async (req , res) => {
    //  Parametros enviados con React como frontend
    const { emailUser , password } = req.body;

    // --> Primero buscamos el correo mediante una promesa a consulta a MongoDB
    userModel.find({ emailUser: emailUser })
    .then((user) => {
        if (!user[0]) { // --> Si no retorna un usuario que envie al usuario la siguiente respuesta
            res.send({
                statusCode: 0 ,
                message: 'El correo ' + emailUser + ' No existe , vuelva a digitarlo' ,
                auth: false
            });
            res.end();
        } else { // --> Caso contrario , si encontro el usuario , que verifique la clave

            // --> Llamamos al metodo confirmPassword para verificar la clave que digito el usuario
            user[0].confirmPassword(password) 
            .then((verify) => { // --> Si la respuesta osea verify, es false que notifique al usuario con lo siguiente
                
                // --> Si el metodo confirmPassword retorno false significa que la clave es incorrecta, notificar al usuario
                if (!verify) {
                    res.send({
                        statusCode: 0 ,
                        message: 'Clave Incorrecta , Vuelva a digitar la clave por favor' ,
                        auth: false
                    });
                    res.end();
                } else { // Caso contrario si la clave y usuario son correctos procedemos a darle el token
                    // ------------------------------------->> Steps

                    // 1 - Generamos el token de acceso con expiracion de 5 horas, puede ser mas horas depende de uno
                    // El token requiere tres parametros, idUsuario , SECURE_KEY o frase de seguridad , duraacion
                    
                    const token = jwt.sign(
                        { 
                            id:user[0]._id
                        } , 
                        process.env.SECURE_KEY , 
                        { 
                            expiresIn: 60*60*5 
                    });

                    //console.log(token);
                    // 2 - Si hubo problemas con la generacion del token que lo intente de nuevo
                    if (!token) {
                        res.send({
                            statusCode: 0 ,
                            message: 'Ha ocurrido un error'
                        });
                        res.end();
                    } else { // 3 - Caso contrario si no hubo problemas enviar informacion de logueo al usuario
                        res.send({
                            statusCode: 1 ,
                            token: token ,
                            emailUser: user[0].emailUser ,
                            idUser: user[0]._id
                        });
                        res.end();
                    }
                }
            })
            .catch((error) => {
                res.send(error);
                res.end();
            });
        }
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });

} 

ctrlAuthMethods.logOut = (req , res) => {

}

module.exports = ctrlAuthMethods;