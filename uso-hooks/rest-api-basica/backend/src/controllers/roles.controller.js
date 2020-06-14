const ctrlRoles = {};
const roleModel = require('../models/Roles.model');

ctrlRoles.viewRoles = (req , res) => {
    roleModel.find()
    .then((success) => {
        res.send(success);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    });
}

module.exports = ctrlRoles;