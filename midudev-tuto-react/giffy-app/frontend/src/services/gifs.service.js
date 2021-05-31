const API_KEY = 'gt17K6ICHUlyZAgcgP255FHoqmm9Ffp5&q'
const API = 'https://api.giphy.com/v1/gifs/search?api_key';

export const getGifs = ({keyword = 'panda'}) => {
    return fetch(`${API}=${API_KEY}=${keyword}&limit=10&offset=0&rating=g&lang=en`)
    .then( res => res.json() )
    .then(({ data = []}) => {
        return data.map(image => { 
            const { images, title, id } = image;
            const { url } = images.downsized_medium;
            return {
                id: id, 
                title: title, 
                url: url
            };
        });
    })
    .catch((error) => { return error });
}