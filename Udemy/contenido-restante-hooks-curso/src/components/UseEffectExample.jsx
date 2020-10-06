import React , { Fragment , useState , useEffect } from 'react';

const UseEffectExample = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove' , handleMove);

        // Cuando se halla ejecutado el handlemove limpiamos
        return () => {
            window.removeEventListener('mousemove' , handleMove);
        }
    } , []);


    // Guarda las coordenadas x , y en deonde este el mpise
    const handleMove = (e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    }
    return ( 
        <Fragment>
            <h2>Ejemplos con useEffect y useState</h2>

            <h3>
                Deteccion de Coordenadas del mouse:
                <br/>
                X: { mouseX } , Y: { mouseY }
            </h3>
        </Fragment>
    );
}
export default UseEffectExample;
