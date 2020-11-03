import React , { useEffect, useState} from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({
        x: 0, y: 0
    });

    const { x, y } = coords;
    useEffect(() => {
        console.log('Message Componente Mounted');
        const mouseMove = (e) => {
            const coords = { x: e.x, y:e.y};
            setCoords(coords);
            console.log(':D');
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log('Message Componente UNMounted');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);
    return (
        <div>
            <h3>Eres Genial</h3>
            <p>
                Coordenadas: 
                <strong>
                    x: { x }
                </strong>
                <strong>
                    y: { y }
                </strong>
            </p>
        </div>
    )
}
