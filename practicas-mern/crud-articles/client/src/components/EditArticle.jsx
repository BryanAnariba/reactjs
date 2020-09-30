import React , { Fragment , useState , useEffect } from 'react';

// Hook para capturar id , desde la lista de articulos , redirecion con useHistory
import { useLocation , useHistory } from 'react-router-dom';

// Para control de notificaciones
import { toast } from 'react-toastify';

// Para peticiones XHR
import axios from 'axios';
const Edit = () => {    

    // Declaramos y almacenamos el hook en constantes -> useLocation para caotura de parametros, useHistory para redireccionar 
    const location = useLocation();
    const history = useHistory();

    // Declaraciones de los hook useState
    const [articleName, setArticleName] = useState('');
    const [articleDescription, setArticleDescription] = useState('');
    const [price , setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    // Uri del backend
    const API = 'http://localhost/php/apis-react/articles/routes/ArticlesRouter.php';

    useEffect(() => {
        axios.get(`${ API }?articleId=${ location.state.articleId }`)
        .then((res) => {
            console.log(res.data);
            setArticleName(res.data.articleName);
            setArticleDescription(res.data.articleDescription);
            setPrice(res.data.price);
            setStock(res.data.stock);
        })  
        .catch((error) => {
            console.error(error);
        });
    } , [location]);// Debe ir esta parametros ya que esta en constante cambio -> location

    const editArticle = (e) => {
        let articleEdited = {
            articleName: articleName ,
            articleDescription: articleDescription ,
            price: price ,
            stock: stock
        };
        //console.log(articleEdited);
        axios.put(`${ API }?articleId=${ location.state.articleId }`, articleEdited)
        .then((res) => {
            let msm = res.data;
            console.log(msm);

            // Limpiamos formulario
            setArticleName('');
            setArticleDescription('');
            setPrice(0);
            setStock(0);

            // Noficamos respuesta
            toast(msm.message , { type: 'info' });

            // Redireccionamos al componente limpiar articulos
            history.push('/list-articles');
        })
        .catch((error) => {
            console.error(error);
        });
        e.preventDefault();
    }
    return ( 
        <Fragment>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 col-sm-12 mx-auto">
                        <div className="card">
                            <div className="card-header bg-dark text-center text-white">
                                <h2>Save new Article</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={ editArticle }>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="articleName" 
                                            id="articleName" 
                                            className="form-control"
                                            placeholder="Digite Nombre del articulo"
                                            onChange = { (e) => setArticleName(e.target.value) }
                                            value = { articleName }
                                            autoFocus
                                            />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="articleDescription" 
                                            id="articleDescription" 
                                            className="form-control"
                                            placeholder="Digite Descripcion del articulo"
                                            onChange={ (e) => setArticleDescription(e.target.value) }
                                            value={ articleDescription }
                                            />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="number" 
                                            name="price" 
                                            id="price" 
                                            className="form-control"
                                            placeholder="Digite precio del articulo"
                                            onChange={ (e) => setPrice(e.target.value) }
                                            value={ price }
                                            />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="number" 
                                            name="stock" 
                                            id="stock" 
                                            className="form-control"
                                            placeholder="Digite Cantidad del articulo"
                                            onChange={ (e) => setStock(e.target.value) }
                                            value={ stock }
                                            />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Update Article" className="btn btn-outline-info btn-block" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Edit;