"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    try {
        let accessToken = req.get('Authorization') || '';
        let isValidToken = jsonwebtoken_1.verify(accessToken, process.env.SECURE_KEY || 'secret_key');
        if (isValidToken) {
            req.userId = isValidToken;
            next();
        }
    }
    catch (error) {
        switch (error) {
            case 'JsonWebTokenError':
                return res.status(401).send({ status: 401, data: 'Token missing or malformed' });
            case 'TokenExpiredError':
                return res.status(401).send({ status: 401, data: 'Token expired' });
            default:
                return res.status(401).send({ status: 401, data: 'Token missing or malformed or expired' });
        }
    }
};
exports.verifyToken = verifyToken;
