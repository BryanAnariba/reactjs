import React , { Fragment , useState} from 'react';
import axios from 'axios';
import { useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {

    // Declaraciones de los hook useState
    const [articleName, setArticleName] = useState('');
    const [articleDescription, setArticleDescription] = useState('');
    const [price , setPrice] = useState(0);
    const [stock, setstock] = useState(0);

    // Uri del backend
    const API = 'http://localhost/php/apis-react/articles/routes/ArticlesRouter.php';

    // Para redireccionar a otros componentes
    let history = useHistory();

    const saveArticle = (e) => {
        // Para cancelar la recarga de un form
        e.preventDefault();

        // Mostrar datos
        //console.log(articleName , articleDescription , price , stock);   

        // Armando arreglo para enviar por axios
        let newArticle = {
            articleName: articleName ,
            articleDescription: articleDescription ,
            price: price ,
            stock: stock
        };       

        axios.post(API , newArticle)
        .then((res) => {
            console.log(res.data);
            let msm = res.data;

            // Limpiamos campos del formulario
            setArticleName('');
            setArticleDescription('');
            setPrice(0);
            setstock(0);

            // Notoficamos noticias de insercion exitosa
            toast(`${ msm.message }` ,  { type: 'success' });

            // Por ultimo redirigimos
            history.push('/list-articles');
        })
        .catch((error) => {
            console.error(error);
        });

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
                                <form onSubmit={ saveArticle }>
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
                                            onChange={ (e) => setstock(e.target.value) }
                                            value={ stock }
                                            />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Save Article" className="btn btn-outline-success btn-block" />
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
export default Create;