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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashedPassword = void 0;
const bcrypt_1 = require("bcrypt");
const hashedPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield bcrypt_1.genSalt(10);
        return yield bcrypt_1.hashSync(password, salt);
    }
    catch (error) {
        return error;
    }
});
exports.hashedPassword = hashedPassword;
const verifyPassword = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield bcrypt_1.compareSync(password, hashedPassword);
    }
    catch (error) {
        return false;
    }
});
exports.verifyPassword = verifyPassword;
