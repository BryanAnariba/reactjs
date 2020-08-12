const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String ,
        require: true
    } ,
    lastName: {
        type: String ,
        required: true
    } ,
    emailUser: {
        type: String , 
        required: true ,
        unique: true ,
        trim: true // --> para evitar poner espacios en un correo por ejemplo user @example.com
    } ,
    password: {
        type: String ,
        required: true
    } ,
    createdAt: {
        type: Date ,
        default: new Date()
    }  
} , {
    timestamps: true
});

// --> Metodo para hashear la contrasenia antes de guardar en mongoDB con bcryptjs
userSchema.methods.encryptPassword = async (password) => {
    // --> Entre mas veses recora la salt generando un hash es mejor para una clave mas segura, lo normal es 10
    const salt = await bcrypt.genSalt(10)

    // --> Aqui retornamos la clave hasheada y lista para guardar en mongoDB
    return bcrypt.hash(password , salt);
}

// --> Metodo para confirmar la clave cuando el usuario se quiera loguear al sistema 
// -->  Ojo usamos una function (password) y no un arrow (password) => para acceder al password del modelo usuario con this 
userSchema.methods.confirmPassword = async function (password) { 
    const verifyKey = await bcrypt.compare(password , this.password);
    return verifyKey;
}

// --> Exportamos el modelo para asi usuarlo en cualquier parte
module.exports = mongoose.model('users' , userSchema);