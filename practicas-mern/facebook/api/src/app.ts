import dotenv from 'dotenv';
import express , { Application } from "express";
import cors from 'cors';
import { urlencoded , json } from 'body-parser';


class App {
    private app: Application;

    // port de tipo number o string por que se le puede pasar un numero de puerto desde la instancia en index si no recurre a dotenv
    constructor (private port?: number | string) {

        // Usando la instancia app
        this.app = express();

        // Ejecutando en orden estos metodos
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings (): void {
        dotenv.config();
        this.app.set('port' , this.port || process.env.API || 3600 );
    }

    middlewares (): void  {
        this.app.use(cors());
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
    }

    routes (): void {

    }

    async startingServer (): Promise<any> {
        await this.app.listen(this.app.get('port'));
        console.log('Server started on port -> ' + this.app.get('port'));
    }
}

export default App;