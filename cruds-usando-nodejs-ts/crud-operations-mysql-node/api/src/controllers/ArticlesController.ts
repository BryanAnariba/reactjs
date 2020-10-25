import { Request , Response } from 'express';
import { connectMe } from '../config/db-connection';
import { Article as ArticleInterface} from '../interface/Article';

export class Article {

    // Obteniendo todos lo articulos
    public async getArticles (req: Request , res: Response): Promise<any> {
        const conn = await connectMe();
        try {
            const articlesData = await conn.query('SELECT A.id , B.article_type , A.article_name , A.article_description , A.article_price , A.article_stock FROM TBL_ARTICLES A INNER JOIN TBL_ARTICLE_TYPE B ON (A.article_type_id = B.id)');

            res.status(200).send(articlesData[0]);
            res.end();
        } catch (err) {
            res.status(400).send(err);
            res.end();
        }
    }

    // Obteniendo un solo articulo
    public async getArticleById (req:Request , res: Response): Promise<any> {
        const { articleId } = req.params;
        try {
            const conn = await connectMe();
            const articleData = await conn.execute('SELECT A.id , A.article_type_id , B.article_type , A.article_name , A.article_description , A.article_price , A.article_stock FROM TBL_ARTICLES A INNER JOIN TBL_ARTICLE_TYPE B ON (A.article_type_id = B.id) WHERE A.id = ?' , [articleId]);
            res.status(200).send(articleData[0]);
            res.end();
        } catch (err) {
            res.status(400).send(err);
            res.end();
        }
    }

    // Guardando un nuevo articulo
    public async addArticle (req: Request , res: Response): Promise<any> {
        const newArticle:ArticleInterface = req.body;
        const conn = await connectMe();
        const save = await conn.execute('INSERT INTO TBL_ARTICLES (article_name , article_type_id , article_description , article_price, article_stock) VALUES (?,?,?,?,?)' , [
            newArticle.article_name ,
            newArticle.article_type_id ,
            newArticle.article_description ,
            newArticle.article_price ,
            newArticle.article_stock
        ]);

        res.status(201).send({
            status: true ,
            message: 'Articulo ' + newArticle.article_name + ' creado con exito' ,
            data: save
        });
        res.end();
    }


    // Actualizar un articulo
    public async updateArticle (req: Request , res: Response): Promise<any> {
        const updatedArticle: ArticleInterface = req.body;
        const { articleId } = req.params;
        const conn = await connectMe();
        try {
            const updated = await conn.execute('UPDATE TBL_ARTICLES SET article_name = ? , article_type_id = ? , article_description = ? , article_price = ? , article_stock = ? WHERE id = ?',[
                updatedArticle.article_name ,
                updatedArticle.article_type_id ,
                updatedArticle.article_description ,
                updatedArticle.article_price ,
                updatedArticle.article_stock ,
                articleId
            ]);
            res.status(200).send({
                status: true ,
                message: 'El articulo ' + updatedArticle.article_name + ' fue actualizado con exito' ,
                data: updated
            });
            res.end();
        } catch (err) {
            res.status(200).send(err);
            res.end();
        }
    }

    // Eliminando un articulo
    public async deleteArticle (req: Request , res: Response):Promise<any> {
        const { articleId } = req.params;
        const conn = await connectMe();
        try {
            const deleted = await conn.execute('DELETE FROM TBL_ARTICLES WHERE id = ?' , [articleId]);
            res.status(200).send({
                status: true ,
                message: 'Articulo eliminado con exito' ,
                data: deleted
            });
            res.end();
        } catch (err) {
            res.status(400).send(err);
            res.end();
        }
    }
}

export const articlesCtrl = new Article();