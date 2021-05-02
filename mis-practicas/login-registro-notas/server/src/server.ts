import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import { json, urlencoded } from 'body-parser';
import { resolve} from 'path';
import cors from 'cors';
import authRoutes from './routes/Auth.Routes';
import noteRoutes from './routes/Note.Routes';
import indexRoutes from './routes/Index.Routes';

class Server {
    private app: Application;
    private port: string | number;
    private apiPaths = {
        auth: '/api/auth',
        notes: '/api/notes'
    };

    constructor () {
        this.app = express();
        this.port = process.env.PORT || 3600;
        
        this.middlewares();
        this.routes();
        this.staticFiles();
    }
    
    routes (): void {
        this.app.use( this.apiPaths.auth, authRoutes )
        this.app.use( this.apiPaths.notes, noteRoutes )
        this.app.use( indexRoutes );
    }

    middlewares (): void {
        // Configurar corst y lectura del body, carpeta publica
        this.app.use(cors());
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
    }

    staticFiles (): void {
    }


    async listen (): Promise<any> {
        await this.app.listen(this.port);
        console.log(`Server started on port ${ this.port }`);
    }
}

export default Server;