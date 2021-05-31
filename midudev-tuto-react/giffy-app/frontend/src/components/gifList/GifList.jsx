import React from 'react';

import { useState, useEffect } from 'react';
import { Alert } from "react-bootstrap";
import { GifItem } from '../gifsItems/GifItem';
import { getGifs } from '../../services/gifs.service';
import { useParams } from 'react-router';

export const GifList = () => {
    const { keyword } = useParams();

    useEffect(() => {
        setGifs(actualGifs => ({ loading: true, results: actualGifs.results }));
        getGifs({keyword: keyword })
        .then((gifs) => {
            setGifs({ loading: false, results: gifs });
        })
        .catch(error => console.error(error));
    }, [ keyword ]);
    
    const [ gifs, setGifs ] = useState({
        loading: false,
        results: []
    });
    return (
        <>
            {
                ( gifs.loading === false ) 
                ?
                    <section 
                    className="App-content">
                        {
                            gifs.results.map(({ id, title, url }) => {
                                return (
                                    <GifItem 
                                    id={ id }
                                    title={ title }
                                    url={ url }
                                    key={ id }
                                    />
                                )
                                })
                        }
                    </section>
                :
                    <div className="container">
                        <Alert variant="success">
                            <div className="row">
                                <div className="col-lx-12">
                                    <p>
                                        Loading gifs....
                                    </p>
                                </div>
                            </div>
                        </Alert>
                    </div>
            }
        </>
    )
}
