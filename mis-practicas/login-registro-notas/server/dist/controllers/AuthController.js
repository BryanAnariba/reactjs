"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.signIn = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const Encriptation_1 = require("../helpers/Encriptation");
const User_1 = __importDefault(require("../models/User"));
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { emailUser, password } = req.body;
    try {
        const user = yield User_1.default.findOne({ emailUser: emailUser });
        if (!user) {
            return res.status(200).send({
                statusCode: 200,
                data: 'Invalid Email or Password'
            });
        }
        else {
            const isValidPassword = yield Encriptation_1.verifyPassword(password, user.password);
            if (isValidPassword) {
                // Create token beacouse the authentication is correct
                const token = jsonwebtoken_1.sign({ userId: user._id }, process.env.SECURE_KEY || 'secret_key', {
                    // expiresIn: 60*60*2
                    expiresIn: 60 * 60 * 1
                });
                if (!token) {
                    return res.status(200).send({
                        statusCode: 200,
                        data: 'Token was not created, please write your credentials'
                    });
                }
                else {
                    return res.status(200).send({
                        statusCode: 200,
                        data: {
                            emailUser: user.emailUser,
                            accessToken: token
                        }
                    });
                }
            }
            else {
                return res.status(200).send({
                    statusCode: 200,
                    data: 'Invalid Email or Password'
                });
            }
        }
    }
    catch (error) {
        console.log(error);
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
});
exports.signIn = signIn;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, emailUser, password, role } = req.body;
    try {
        const encriptedPassword = yield Encriptation_1.hashedPassword(password);
        const user = new User_1.default({
            firstName: firstName,
            lastName: lastName,
            emailUser: emailUser,
            password: encriptedPassword,
            role: (role === null) ? 'User' : 'Admin'
        });
        yield user.save();
        return res.status(201).send({
            statusCode: 201,
            data: 'User ' + emailUser + ' successfully registered'
        });
    }
    catch (error) {
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
});
exports.signUp = signUp;
