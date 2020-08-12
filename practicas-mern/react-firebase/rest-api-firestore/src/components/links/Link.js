import React , { useEffect , useState } from 'react';
import LinkForm from '../links-form/LinkForm';
import { connection } from '../../FireBase/Firebase';
import trashIcon from './img/basura.png';
import editIcon from './img/lapiz.png';
import { toast } from 'react-toastify';

const Links = () => {
    const [ linksArray , setLinksArray ] = useState([]);
    const [ currentId , setCurrentId ] = useState('');

    // useEffect es como el ngOnInit de angular inicializa el estado
    useEffect(() => {
        console.log('Obteniendo la data proveniente de firebase');
        getLinks();
    } , []);


    // Funciones Rest Api aqui ya que actua como intermitente entre el formulario e interactua y se manda datos con el o recibe
    // Obtener Links provenientes del firebase
    const getLinks = async () => {
        await connection.collection('favorite-links').onSnapshot((querySnapshot) => {
            const arregloDeLinksFirebase = [];
            querySnapshot.forEach((doc) => {
                //console.log(doc.data());
                //console.log(doc.id);
                arregloDeLinksFirebase.push({ ...doc.data() , id: doc.id });
            });
            console.log(arregloDeLinksFirebase);
            setLinksArray(arregloDeLinksFirebase);
        });
    }


    // Insertar una nueva Tarea, mandar mediante props al form link
    const addOrEditLink = async (informacionLinkAGuardar) => {
        console.log('Informacion que viene desde componente LinkForm al componente Link y sera guardada en Firebase -> ' , informacionLinkAGuardar);



        try {
            if (currentId === ''){ // Si currentId es vacio que guarde
                // Guardar en firebase casi igual a mongo
                await connection.collection('favorite-links').doc().set(informacionLinkAGuardar);
                console.log('Tarea Agregada Satisfactoriamente');
                toast('Tarea Agregada Satisfactoriamente' , { type: 'success' });
                getLinks();
            } else { // Si no que actualize
                await connection.collection('favorite-links').doc(currentId).update(informacionLinkAGuardar);
                toast('Tarea Actualizada Satisfactoriamente' , { type: 'info' });
                setCurrentId('');// Limpiamos el id
            }
        } catch(error) {
            console.error(error);
        }
    }   

    // Eliminar un link
    const onDeleteLink = async (id) => {
        if (window.confirm('Esta seguro de querer eliminar este link')) {
            console.log('Id Link -> ' , id);
            await connection.collection('favorite-links').doc(id).delete();

            console.log('Link eliminada Satisfactoriamente');
            toast('Link eliminada Satisfactoriamente' , { type: 'error' });
        }
    }


    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-5 col-sm-12">
                    
                    { /* Ojo aqui es similar a decoradores output y input en angular */}
                    <LinkForm {...{ addOrEditLink , currentId , linksArray}}/>
                </div>
                <div className="col-lg-7 col-sm-12">
                    {
                        linksArray.map((link) => {
                            return (
                                <div className="card mb-1" key={ link.id }>
                                    <div className="card-body">
                                        <div className="justify-content-between d-flex">
                                            <h4>{ link.webName }</h4>
                                            <div className="ml-auto">
                                                <button className="btn btn-sm btn-danger mr-2" onClick={ () => onDeleteLink(link.id) }>
                                                    <img src={ trashIcon } alt="Iconito Basura"/>
                                                </button>
                                                <button className="btn btn-sm btn-primary" onClick={ () => setCurrentId(link.id) }>
                                                    <img src={ editIcon } alt="Iconito Basura"/>
                                                </button>
                                            </div>
                                        </div>
                                        <p>
                                            { link.webSiteDescription }
                                        </p>
                                        <a href={ link.urlLink } target="blank" className="btn btn-info">
                                            Go To Web Site
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default Links;