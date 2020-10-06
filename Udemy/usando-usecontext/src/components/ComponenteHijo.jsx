import React , { useContext } from 'react';
import App from '../App';
//import ComponenteNieto from './ComponentenNieto';

const ComponenteHijo = () => {
    
    // Consumer para consumir lo que viene
    const { num, addNum } = useContext(App.MyContext);
    return ( 
        <div>
            <p>Hijo {num}</p>
            <button onClick={addNum}>
                Hijo Dispatcher
            </button>
        </div>
    );
}
export default ComponenteHijo;