import dotenv from 'dotenv';
import express , { Application } from 'express';
import cors from 'cors';
import { urlencoded , json } from 'body-parser';
import ArticlesRouter from './routes/ArticlesRoute';
import ArticleTypesR from './routes/TypesArticleRoute';
dotenv.config();

export class App {
    private app: Application;

    constructor (private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings () {
        this.app.set('port' , this.port || process.env.SERVER_PORT || 4000);
    }

    middlewares () {
        this.app.use(cors());
        this.app.use(json());
        this.app.use(urlencoded({ extended: false }));
    }

    routes () {
        this.app.use('/articles' , ArticlesRouter);
        this.app.use('/article-type' , ArticleTypesR);
    }

    async startingServer () {
        await this.app.listen(this.app.get('port'));
        console.log('Server started on port -> ' + this.app.get('port'));
    }
}