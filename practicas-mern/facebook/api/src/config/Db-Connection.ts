import mongoose from 'mongoose';

class Connection {
    private HOST: string = 'localhost:27017';
    private DB: string = 'facebook';

    async connectMe():Promise<void> {
        await mongoose.connect(`mongodb://${ this.HOST }/${ this.DB }` , {
            useCreateIndex: true ,
            useUnifiedTopology: true ,
            useNewUrlParser: true
        });
        console.log("MongoDB is Connected Successfully!");
    }
}

export default Connection;