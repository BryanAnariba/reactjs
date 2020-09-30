// Propio de react, actualmente solo manejo dos
import React , { Fragment , useState , useEffect } from 'react';

// Para peticiones XHR 
import axios from 'axios';

// Imagenes pequenias
import EditAvatar from '../lapiz.png';
import DeleteAvatar from '../compartimiento.png';

// Para notificaciones
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Article = () => {

    // Url backend
    const API = 'http://localhost/php/apis-react/articles/routes/ArticlesRouter.php';

    // Definiendo hook useState para guardar los articulos
    const [ articles, setArticles ] = useState([]);

    // Para redireccionar
    let history = useHistory();

    // Al renderedizar el componente effect se ejecuta
    useEffect(() => {
        getArticles();
    }, [])

    const getArticles = async () => {
        const res = await axios(API);
        const data = res.data;
        
        // data del backend
        console.log(data);

        // Dando valor
        setArticles(data);
    }

    // Aqui redireccionamos al componente EditArticle con el id para que busque la data
    const getArticle = (articleId) => {
        history.push('/edit-article' , { articleId: articleId });
    }

    const deleteArticle = (articleId) => {
        axios.delete(`${ API }?articleId=${ articleId }`)
        .then((res) => {
            let msm = res.data;
            toast(msm.message , { type: 'info' });
            getArticles();
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return ( 
        <Fragment>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-10 col-sm-12 mx-auto">
                        <table className="table table-bordered table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Id Articulo</th>
                                    <th>Nombre Articulo</th>
                                    <th>Descripcion Articulo</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    articles.map(article => (
                                        <tr key={ article.articleId }>
                                            <td>{ article.articleId }</td>
                                            <td>{ article.articleName }</td>
                                            <td>{ article.articleDescription }</td>
                                            <td>{ article.price }</td>
                                            <td>{ article.stock }</td>
                                            <td>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-primary" onClick={ () => getArticle(article.articleId) }>
                                                    <img src={ EditAvatar } alt=""/>
                                                </button>
                                                <button type="button" className="btn btn-danger" onClick={ () => deleteArticle(article.articleId) }>
                                                    <img src={ DeleteAvatar } alt=""/>
                                                </button>
                                            </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Article;