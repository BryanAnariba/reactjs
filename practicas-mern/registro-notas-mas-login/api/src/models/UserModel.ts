import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
export interface User extends mongoose.Document {
    firstName: string;
    lastName: string;
    emailUser: string;
    password: string;

    encriptaClave(password: string): string;
    verificaClave(password: string): boolean;
}

const userSchema = new mongoose.Schema({
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
        trim: true ,
        unique: true
    } ,
    password: {
        type: String ,
        required: true
    } ,
    created_at: {
        type: Date ,
        default: new Date()
    }
});

// Metodo para enciptar clave
userSchema.methods.encriptaClave = async (password:string) => {

    // Generamos la salt o codigo hash al password, entre mas vueltas mejor pero 10 es por defecto
    let salt = await bcrypt.genSalt(10);

    // retornamos la contrasnia hasheada
    return bcrypt.hash(password , salt);
}

// Metodo para comparar claves la que viene desde frontend con la que esta almacenada en mongo
userSchema.methods.verificaClave = async function (password: string) {

    // Comparamos con la funcion de bcrypt que retorna un booleano true or false depende de la coincidencia
    let comprobationPass = await bcrypt.compare(password , this.password);

    // Retornamos el booleano
    return comprobationPass;
}

export default mongoose.model<User>('users' , userSchema);