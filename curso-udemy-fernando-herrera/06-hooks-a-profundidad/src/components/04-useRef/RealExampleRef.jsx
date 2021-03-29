import React, { useState } from 'react';

import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {
    

    const showBreakinBadQuotes = () => {
        setShow(!show);
    }

    const [show, setShow] = useState(false);

    return (
        <div>
            <h2>Real Example of useRef HOOK</h2>
            <hr/>

            {
                show && <MultipleCustomHooks />
            }

            <button 
                className="btn btn-outline-success"
                onClick={ showBreakinBadQuotes }>
                Show Breakind bad quotes
            </button>
        </div>
    )
}
