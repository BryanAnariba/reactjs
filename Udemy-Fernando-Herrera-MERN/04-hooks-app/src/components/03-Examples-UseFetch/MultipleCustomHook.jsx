import React from 'react'
import { UseFetch } from '../../hooks/UseFetch';
import { useCounter } from '../../hooks/useCounter';
export const MultipleCustomHook = () => {
    const { counter, add } = useCounter(1);
    const { loading, data, error } = UseFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    console.log(error);
    // Si hay data que desestructure el author y el quote de data[0]
    const { author, quote } = !!data && data[0];
    return (
        <div>
            <hr/>
            <h1>Breaking Bad Quotes</h1>
            {
                loading

                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :   
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">
                            { quote }
                        </p>
                        <footer className="blockquote-footer">
                            { author }
                        </footer>
                    </blockquote>
                )
            }
            <button 
                onClick={ add }
                className="btn btn-outline-info btn-sm">
                Siguiente Quote: { counter }
            </button>
        </div>
    )
}
