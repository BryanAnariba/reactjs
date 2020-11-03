import React , { useState } from 'react';
import { MultipleCustomHook } from '../03-Examples-UseFetch/MultipleCustomHook';

export const RealExample = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            {
                show && <MultipleCustomHook />
            }

            <button 
            className="btn btn-danger mt-3"
            onClick={
                () => {
                    setShow(!show);
                }
            }
            >
                Show Data
            </button>
            <h2 className="text-center">Use Ref Real Example</h2>
        </>
    )
}
