const mongoose = require('mongoose');

// Variables instanciadas por medio de variables de entorno propias de el sistema que te dara cuando subas el proyecto 
const DB = process.env.MONGO_DB;
const HOST = process.env.MONGO_HOST;
const PORT = process.env.MONGO_PORT;

class MongoConnection {   
    constructor () {
        this.connectMe();
    }

    connectMe () {
        mongoose.connect(`mongodb://${ HOST }:${ PORT }/${ DB }`, {
            useNewUrlParser: true ,
            useUnifiedTopology: true ,
            useCreateIndex: true
        })
        .then((successConnection) => {
            console.log('MongoDB is connected successfully');
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

module.exports = new MongoConnection;