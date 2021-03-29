import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import '../02-useEffect/effects.css';
import { useCounter } from '../../Hooks/useCounter';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // SI NO HAY DATA !!data = FALSE no evalue, caso contrario data[0]
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h2>Use Fetch Custom Hook</h2>
            <hr/>
            <h2>Breaking Bad Quotes</h2>
            <hr/>

            {
                loading 
                ? 
                    (
                        <div className="alert alert-primary text-center" role="alert">
                            Loading...
                        </div>
                    )
                :
                    (
                        <>
                            <blockquote className="blockquote text-right">
                            <p className="mb-0">
                                {
                                    quote
                                }
                            </p>
                            <footer className="blockquote-footer mt-2">
                                    {
                                        author
                                    }
                                </footer>
                            </blockquote>  
                            <button className="btn btn-primary" onClick={ increment }>
                                Next Quote
                            </button>
                        </> 
                    )
            }
        </>
    )
}
