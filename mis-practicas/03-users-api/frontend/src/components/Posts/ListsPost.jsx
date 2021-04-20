import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import { PostReducer } from '../../reducers/PostReducer';
export const ListsPost = () => {
    const [ posts, dispatch ] = useReducer(PostReducer, []);

    useEffect(() => {
        axios('http://localhost:8000/api/posts')
        .then((response) => {
            const { data } = response;
            dispatch({
                type: 'list',
                payload: data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'list',
                payload: []
            });
        });
    }, [  ]);
    
    console.log(posts);
    return (
        <div className="mt-5">
            <h2>List Post</h2>
        </div>
    )
} 