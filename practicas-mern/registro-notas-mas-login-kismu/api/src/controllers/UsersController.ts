import { Request , Response } from 'express';
import userModel from '../models/UserModel';
import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel';

class User {
    // Registrar un usuario
    public async signUp (req: Request , res: Response) {
        const { firstName  , lastName , emailUser , password } = req.body;
        const newUser = new UserModel({
            firstName: firstName ,
            lastName: lastName ,
            emailUser: emailUser ,
            password: password
        });

        // Hasheamos la contrasnia
        newUser.password = await newUser.encriptaClave(password);

        newUser.save()
        .then((success: any) => {
            res.send({
                status: true ,
                message: 'El usuario ' + success.emailUser + ' fue guardado con exito'
            });
            res.end();
        })
        .catch((error: any) => {
            if (error.code === 11000) {
                res.send({
                    status: false ,
                    message: 'El correo ' + emailUser + ' ya se encuentra en uso, digite nuevo correo'
                });
                res.end();
            } else  {
                res.send(error);
                res.end();
            }
        });
        
    }

    // Loguear a un usuario
    public logIn (req: Request , res: Response) {
        let { emailUser , password } = req.body;
        userModel.find({ emailUser: emailUser }) // Realizamos la busqueda por email
        .then((success: any) => {
            if (!success[0]) { // Si no existe el registro
                res.send({
                    status: false ,
                    message: 'No se encontro ningun usuario con el email ' + emailUser
                });
                res.end();
            } else { // Si el registro existe 

                // Verificamos la clave 
                success[0].verificaClave(password)
                .then((statusKey: any) => { // Lo que retorne la verificacion viene aqui sea true o false
                    if (!statusKey) { // Si retorno false
                        res.send({
                            status: false ,
                            message: 'Clave incorrecta, vuelva a digitar la clave'
                        });
                        res.end();
                    } else { // Si retorno true

                        // Generamos un token con duracion de 5 horas
                        const token = jwt.sign({ id: success[0]._id } , (process.env.KEY || "MYSECRETKEY")  , { expiresIn: 60*60*5 });

                        if (!token) {
                            res.send({
                                statusCode: 0 ,
                                message: 'Ha ocurrido un error mientras se generaba el token, vuelva a intentarlo mas tarde'
                            });
                            res.end();
                        } else {
                            res.send({
                                status: true ,
                                accessToken: token
                            });
                            res.end();
                        }
                    }
                })
                .catch((error: any) => {
                    res.send(error);
                    res.end()
                });
            }
        })
        .catch((error: any) => {
            res.json(error);
            res.end();
        });
    }
}

export default User; 