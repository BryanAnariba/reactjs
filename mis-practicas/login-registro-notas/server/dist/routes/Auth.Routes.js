"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const router = express_1.Router();
router.post('/login', AuthController_1.signIn);
router.post('/register', AuthController_1.signUp);
exports.default = router;
