import React , { useState , useEffect } from 'react';
import iconLink from './img/cadena.png';
import iconInsert from './img/lapiz.png';
import { connection } from '../../FireBase/Firebase';
import { toast } from 'react-toastify';


const LinksForm = (props) => {


    const initialDataState = {
        urlLink: '' ,
        webName: '' ,
        webSiteDescription: ''
    };
    const [ data , setData ] = useState(initialDataState);

    useEffect(() => {
        if (props.currentId === '') { // Si no existe un currentId en props al iniciar o recargar este componente 
            // que inicialicce el setData con initialDataState , esto significa que el formulario estara vacio y no se editara nada
            setData({...initialDataState}); 
        } else { // En caso que si venga un id en los props que iguale el setData con el contenido del link
            console.log('Se editara la tarea con el id -> ' , props.currentId);
            getLinkById(props.currentId);
        }
    } ,[props.currentId]);


    
    // Validando la url
    const validUrl = (url) => {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(initialDataState);

        // probado la validacion
        if (!validUrl(data.urlLink)) {
            return toast('URL del sitio introducida no valida' , { type: 'warning' , autoClose: 5000 })
        }        
        // Imprimimos datos por consola para ver si la funcion handleInputChange funciona y almacena datos de inputs al estado
        console.log('Informacion que es propia del componente LinkForm -> ' , data);

        // aqui ejecutamos la funcion proveniente del componente mandando la info de formulario para guardar en firebase
        props.addOrEditLink(data);

        // Reseteamos Formumario
        setData({...initialDataState});
    }

    // Aplicando la reactividad para captar la info de un input
    const handleInputChange = (e) => {
        // Ver que hace descomentar
        //console.log(e.target.value);

        // Ahora para almacenar el valor en el estado se hace con esto
        const { name , value } = e.target;
        //console.log(name , value);
        
        // con esto se anexa el valor al estado, con el valor del input -> name al 
        setData({ ...data , [ name ]: value });
    }

    // Obtener un usuario
    const getLinkById = async (linkId) => {
        const linkData = await connection.collection('favorite-links').doc(linkId).get();
        console.log(linkData.data());
        setData({...linkData.data()});// igualamos al estado de los links para asi rellenar los inputs y anunciar que se editara algo
    }
    return ( 
        
        <div className="card">
            <div className="card-header bg-warning text-center text-white">
                <h3>Links Form</h3>
            </div>
            <form className="card-body" onSubmit={ handleSubmit }>
                <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                        <img src={ iconLink } alt="" width="24"/>
                    </div>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="http://whatEver" 
                        name="urlLink" 
                        id=""
                        onChange={ handleInputChange } 
                        value = { data.urlLink }/>
                </div>
                <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                        <img src={ iconInsert } alt=""/>
                    </div>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Web Site Name" 
                        name="webName" 
                        id=""
                        onChange={ handleInputChange } 
                        value = { data.webName }/>
                </div>
                <div className="form-group">
                    <textarea 
                        name="webSiteDescription" 
                        className="form-control" 
                        id="" 
                        rows="4" 
                        placeholder="Write a Description"
                        onChange={ handleInputChange }
                        value = { data.webSiteDescription }>
                    </textarea>
                </div>
                <div className="form-grou">
                    <button className="btn btn-success">
                        { props.currentId === '' ? 'Save Link' : 'Update Link' }
                    </button>
                </div>
            </form>
            <div className="card-footer bg-dark text-center">
            </div>
        </div>
    );
}
export default LinksForm;