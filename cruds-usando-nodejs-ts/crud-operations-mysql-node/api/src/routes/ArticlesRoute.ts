import { Router } from 'express';
import { articlesCtrl } from '../controllers/ArticlesController';

const router = Router();

// Obteniendo todos lo articulos
router.get('/' , articlesCtrl.getArticles);

// Obteniendo un solo articulo
router.get('/:articleId' , articlesCtrl.getArticleById);

// Guardando un nuevo articulo
router.post('/' , articlesCtrl.addArticle);

// Actualizando un articulo
router.put('/:articleId', articlesCtrl.updateArticle);

// Eliminando un articulo
router.delete('/:articleId', articlesCtrl.deleteArticle);

export default router;