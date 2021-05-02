"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('', function (req, res) {
    return res.status(200).send({ status: 200, data: 'App is running' });
});
exports.default = router;
