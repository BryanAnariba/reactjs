const mongoose = require('mongoose');
const BD = 'rest-api-basica';
const PORT = '27017';
const HOST = 'localhost';

class Connection {
    constructor () {
        this.connectMe();
    }

    connectMe () {
        mongoose.connect(`mongodb://${ HOST }:${ PORT }/${ BD }` , {
            useUnifiedTopology: true  ,
            useNewUrlParser: true
        })
        .then((success) => {
            console.log('MongoDB connected successfully');
        })
        .catch((error) => {
            console.error(error);
        })
    }
}

module.exports = new Connection();