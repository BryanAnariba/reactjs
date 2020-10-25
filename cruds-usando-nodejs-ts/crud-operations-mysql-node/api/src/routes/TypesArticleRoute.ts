import { Router } from 'express';
import { ArticleTypes } from '../controllers/ArticleTypesController';
const router = Router();
const articleTypesCtrl = new ArticleTypes();

// Obtener todos los tipos de articulos
router.get('/' , articleTypesCtrl.getArticleTypes);

// Obtener un solo tipo de articulo
router.get('/:articleTypeId' , articleTypesCtrl.getArticleType);

// Guardar un tipo de articulo
router.post('/' , articleTypesCtrl.addArticleType);

// Editar un tipo de articulo
router.put('/:articleTypeId' , articleTypesCtrl.editArticleType)

// Eliminar un tipo de articulo
router.delete('/:articleTypeId', articleTypesCtrl.deleteArticleType);

export default router;