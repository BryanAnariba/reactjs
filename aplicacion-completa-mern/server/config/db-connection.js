const mongoose = require('mongoose');
const PORT = 27017;
const HOST = 'mongodb://localhost';
const DB_NAME = 'web-login-crud';
// Remplazar la cadena de conexion cuando se tenga el backend ${process.env.DB_URI}
class Connection {
    constructor () {
        this.connectMe();
    }

    connectMe () {
        mongoose.connect(`${ HOST }:${ PORT }/${ DB_NAME }`, {
            useNewUrlParser: true ,
            useCreateIndex: true ,
            useUnifiedTopology: true
        })
        .then((succes) => {
            console.log('MongoDB connected successfully');
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

module.exports = new Connection();