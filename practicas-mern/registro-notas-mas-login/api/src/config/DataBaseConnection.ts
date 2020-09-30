import mongoose from 'mongoose';

class Connection {
    private HOST: string = 'localhost:27017';
    private DB: string = 'db-the-ari';
    async connectMe () {
        try {
            await mongoose.connect(`mongodb://${ this.HOST }/${ this.DB }` , {
                useCreateIndex: true ,
                useNewUrlParser: true ,
                useUnifiedTopology: true
            });
            console.log('MongoDB is connected successfully!');
        } catch (e) {
            console.log(e);
        }
    }
}

export default Connection;
