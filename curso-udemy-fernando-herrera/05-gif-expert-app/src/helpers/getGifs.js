export const getGifs = async ( category ) => {
    try {
        const API = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=gt17K6ICHUlyZAgcgP255FHoqmm9Ffp5`;
        const gifs = await fetch(API);
        const { data } = await gifs.json();

        // Extraemos solo lo necesario del [] por que viene mucha infor
        const images = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                // Si viene las images que la utilice si no no importa, para que no crasshe
                url: img.images?.downsized_medium.url
            }
        });
        console.log(images);
        return images;

    } catch (error) {
        console.error(error);
    }
}