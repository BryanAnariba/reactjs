import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

import { hashedPassword, verifyPassword } from '../helpers/Encriptation';
import User from '../models/User';

const signIn = async (req: Request, res: Response): Promise<Response> => {
    const { emailUser, password } = req.body;

    try {
        const user: any = await User.findOne({ emailUser: emailUser });
        if (!user) {
            return res.status(200).send({
                statusCode: 200,
                data: 'Invalid Email or Password'
            });
        } else {
            const isValidPassword = await verifyPassword(password, user.password);
            if ( isValidPassword ) {
                // Create token beacouse the authentication is correct
                const token = sign({ userId: user._id } , process.env.SECURE_KEY || 'secret_key', {
                    // expiresIn: 60*60*2
                    expiresIn: 60*60*1
                });

                if (!token) {
                    return res.status(200).send({
                        statusCode: 200,
                        data: 'Token was not created, please write your credentials'
                    });
                } else {
                    return res.status(200).send({
                        statusCode: 200,
                        data: {
                            emailUser: user.emailUser,
                            accessToken: token
                        }
                    });
                }
            } else {
                return res.status(200).send({
                    statusCode: 200,
                    data: 'Invalid Email or Password'
                });
            }
        }
    } catch (error) {
        console.log(error)
        switch (error.code) {
            case 11000:
                return res.status(500).send({
                    statusCode: 500,
                    data: 'The user ' + emailUser + ' is in use'
                });
            default:
                return res.status(500).send({
                    statusCode: 500,
                    data: error
                });
        } 
    }
}

const signUp = async (req: Request, res: Response): Promise<Response> => {
    const { firstName, lastName, emailUser, password, role } = req.body;

    try {
        const encriptedPassword = await hashedPassword(password);
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            emailUser: emailUser,
            password: encriptedPassword,
            role: ( role === null ) ?  'User' : 'Admin'
        });

        await user.save();    
        return res.status(201).send({
            statusCode: 201,
            data: 'User ' + emailUser + ' successfully registered'
        });
    } catch (error) {
        switch (error.code) {
            case 11000:
                return res.status(500).send({
                    statusCode: 500,
                    data: 'The user ' + emailUser + ' is in use'
                });
            default:
                return res.status(500).send({
                    statusCode: 500,
                    data: error
                });
        } 
    }
}

export {
    signIn,
    signUp
}