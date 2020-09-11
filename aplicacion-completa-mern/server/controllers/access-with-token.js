const jwt = require('jsonwebtoken');

const verifyAccessToken = {};

verifyAccessToken.verifyToken = (req , res , next) => {

    let token = req.headers.authorization.split(' ')[1];
    if ((token===undefined) || (token===null) || (token==="") || (token === "Bearer ")) {
        res.send({
            status: false ,
            message: 'El token de acceso no es valido, debes loguearte'
        });
        res.end();
    } else {
        const authenticated = jwt.verify(token , process.env.SECURE_KEY);
        if (!authenticated) {
            res.send({
                status: false ,
                message: 'Tu no tienes acceso al sistema'
            });
            res.end();
        } else {
            req.userId = authenticated.id;
            next();
        }
    }
}

module.exports = verifyAccessToken;