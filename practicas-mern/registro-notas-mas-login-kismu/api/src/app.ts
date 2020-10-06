import dotenv from 'dotenv';
import express , { Application } from 'express';
import { urlencoded , json } from 'body-parser';
import cors from 'cors';
import userR from './routes/UsersRoutes';
import taskR from './routes/TasksRoutes';


class App {
    private app: Application;
    constructor (private port?: number | string) {
        // iniCializando app
        this.app = express();

        // Llamando demas metodos
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings (): void {
        dotenv.config();
        this.app.set('port' , this.port || process.env.API || 4000);
    }

    middlewares (): void {
        this.app.use(cors());
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
    }

    routes (): void {
        this.app.use('/users' , userR);
        this.app.use('/tasks' , taskR);
    }

    async startingServer(): Promise<any> {
        await this.app.listen(this.app.get('port'));
        console.log('Server started on port -> ' + this.app.get('port'))
    }
}

export default App;