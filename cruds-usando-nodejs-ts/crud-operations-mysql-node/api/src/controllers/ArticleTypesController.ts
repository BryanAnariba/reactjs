import { Request , Response } from 'express';
import { connectMe } from '../config/db-connection';
import { ArticleTypesInterface } from '../interface/ArticlesType';

export class ArticleTypes {

    // Obtener todos los tipos de articulos
    public async getArticleTypes (req: Request , res: Response): Promise<any> {
        const conn = await connectMe();
        try {
            const articlesTypesData = await conn.execute('SELECT * FROM TBL_ARTICLE_TYPE' , []);
            res.status(200).send(articlesTypesData[0]);
            res.end()
        } catch (error) {
            res.status(400).send(error);
            res.end();
        }
    }

    // Obtener un solo tipo de articulo
    public async getArticleType (req: Request , res: Response): Promise<any> {
        const conn = await connectMe();
        const { articleTypeId } = req.params;
        try {
            const articleType = await conn.execute('SELECT * FROM TBL_ARTICLE_TYPE WHERE ID = ?' , [ articleTypeId ]);
            res.status(200).send(articleType[0]);
            res.end();
        } catch (error) {
            res.status(400).send(error);
            res.end();
        }
    }

    public async addArticleType (req: Request , res: Response): Promise<any> {
        const conn = await connectMe();
        const newArticleType: ArticleTypesInterface = req.body;
        try {
            const save = await conn.execute('INSERT INTO TBL_ARTICLE_TYPE (article_type, article_abrev) VALUES (?,?)' , [
                newArticleType.article_type ,
                newArticleType.article_abrev
            ]);

            res.status(201).send({
                status: true ,
                message: 'Tipo de articulo llamado ' + newArticleType.article_type + ' creado con exito' ,
                data: save
            });
            res.end();
        } catch (error) {
            res.status(400).send(error);
            res.end();
        }

    }

    public async editArticleType (req: Request , res: Response): Promise<any> {
        const conn = await connectMe();
        const updateTypeArticle: ArticleTypesInterface = req.body;
        const { articleTypeId } = req.params;
        try {
            const udpated = await conn.execute('UPDATE TBL_ARTICLE_TYPE SET article_type = ?, article_abrev = ? WHERE id = ?' ,
            [updateTypeArticle.article_type , updateTypeArticle.article_abrev , articleTypeId]);

            res.status(200).send({
                status: true ,
                message: 'El tipo de articulo ' + updateTypeArticle.article_type + ' fue actualizado con exito' ,
                data: udpated
            });
            res.end();
        } catch(error) {
            res.status(400).send(error);
            res.end();
        }
    }

    public async deleteArticleType (req: Request , res: Response): Promise<any> {
        const conn = await connectMe();
        const { articleTypeId } = req.params;
        try {
            const deleted = await conn.execute('DELETE FROM TBL_ARTICLE_TYPE WHERE ID = ?' , [articleTypeId]);
            res.status(200).send({
                status: true ,
                message: 'El articulo con el id ' + articleTypeId + ' fue eliminado con exito' ,
                data: deleted
            });
            res.end();
        } catch (error) {
            res.status(400).send(error);
            res.end();
        }
    }
}