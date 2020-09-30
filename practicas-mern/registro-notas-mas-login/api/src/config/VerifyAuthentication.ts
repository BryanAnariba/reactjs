import { Request , Response } from 'express';
import jwt from 'jsonwebtoken';
export const verifyToken = async (req: Request , res: Response , next: any) => {
    const accessToken:any = req.headers["x-access-token"];
    
    if (!accessToken || (accessToken === null)) { // SI no viene un token o pasa algo
        res.status(401).send({
            status: false ,
            message: 'Accesso denegado , necesita un token de acceso'
        });
        res.end();
    } else {// Si el token viene procedemos a validarlo
        let verifToken = jwt.verify(accessToken , process.env.KEY || 'MYSECRETKEY');

        if (!verifToken) {// Si el token no es correcto osea que retorno false,notificar al usuario
            res.status(204).send({
                status: false ,
                message: 'El token no es valido'
            });
            res.end();
        } else { // Caso contrario si el token es valido
            next();
        }
    }
}