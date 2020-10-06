import React , { useContext } from 'react';



const ComponenteNieto = () => {
    // Consumer para consumir lo que viene
    const { num, addNum } = useContext(MyContext)
    return (
        <div>
            <p>Nieto {num}</p>
            <button onClick={addNum}>
                Nieto Dispatcher
            </button>
        </div>
    )
}
export default ComponenteNieto;