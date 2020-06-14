const express = require('express');
const router = express();
const ctrlRoles = require('../controllers/roles.controller');

router.get('/' , ctrlRoles.viewRoles);

module.exports = router;