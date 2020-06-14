const mongoose = require('mongoose');

const roleModel = new mongoose.Schema({
    nombreCargo: {
        type: String
    }
} , {
    timestamps: true
});

module.exports = mongoose.model('cargos' , roleModel);