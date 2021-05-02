import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

declare module "express" { 
    export interface Request {
        userId: any
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        let accessToken: any = req.get('Authorization') || '';
        let isValidToken = verify(accessToken, process.env.SECURE_KEY || 'secret_key');
        if (isValidToken) {
            req.userId = isValidToken;
            next();
        }
    } catch (error) {
        switch (error) {
            case 'JsonWebTokenError':
                return res.status(401).send({ status: 401, data: 'Token missing or malformed' });
            case 'TokenExpiredError':
                return res.status(401).send({ status: 401, data: 'Token expired' });
            default:
                return res.status(401).send({ status: 401, data: 'Token missing or malformed or expired' });
        }
    }
}