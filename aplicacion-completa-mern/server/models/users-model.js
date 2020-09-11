const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String ,
        required: true
    } ,
    lastName: {
        type: String ,
        required: true
    } ,
    emailUser: {
        type: String ,
        required: true ,
        unique: true ,
        trim: true
    } , 
    passwordUser: {
        type: String ,
        required: true ,
        trim: true
    }
}, {
    timestamps: true
});


// Metodos para hashear contrasenias y verificar contrasenias
usersSchema.methods.encriptaPassword = async (passwordUser) => {
    // Entre mas veses recora la salt generando un hash es mejor para una clave mas segura, lo normal es 10
    const salt = await bcrypt.genSalt(10);

    // Aqui retornamos la clave hasheada y lista para guardar en mongoDB
    return bcrypt.hash(passwordUser , salt);
}

usersSchema.methods.verifPassword = async function (passwordUser) {
    const verifyPass = await bcrypt.compare(passwordUser , this.passwordUser);
    return verifyPass;
}

module.exports = mongoose.model('users' , usersSchema);