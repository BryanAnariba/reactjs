import axios from 'axios';
export const saveNote = (newNote) => {
    return axios.post(`https://jsonplaceholder.typicode.com/posts`, newNote)
    .then((response) => {
        const { data } = response;
        return data;
    })
    .catch((error) => {
        console.error(error);
        return error;
    });
}

export const getAllNotes = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        const { data } = response;
        return data;
    })
    .catch((error) => {
        console.error(error);
        return error;
    });
}
